// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Initialize all components
    initMobileMenu();
    initProductsGrid();
    initDistrictsGrid();
    initScrollEffects();
    initInteractiveElements();
});

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    
    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
            
            // Update icon
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileNav.classList.contains('active')) {
                icon.setAttribute('data-lucide', 'x');
            } else {
                icon.setAttribute('data-lucide', 'menu');
            }
            lucide.createIcons();
        });
        
        // Close mobile menu when clicking on a link
        const mobileLinks = mobileNav.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileNav.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.setAttribute('data-lucide', 'menu');
                lucide.createIcons();
            });
        });
    }
}

// Products Data
const featuredProducts = [
    {
        id: "1",
        name: "Handwoven Pashmina Shawl",
        price: 15000,
        originalPrice: 18000,
        rating: 4.8,
        reviews: 124,
        image: "src/assets/pashmina-shawl.jpg",
        district: "Srinagar",
        artisan: "Mohammad Ali",
        badge: "Bestseller"
    },
    {
        id: "2", 
        name: "Traditional Kashmiri Carpet",
        price: 45000,
        originalPrice: 52000,
        rating: 4.9,
        reviews: 89,
        image: "src/assets/kashmiri-carpet.jpg",
        district: "Budgam",
        artisan: "Fatima Sheikh",
        badge: "Premium"
    },
    {
        id: "3",
        name: "Walnut Wood Carving Set",
        price: 8500,
        rating: 4.7,
        reviews: 156,
        image: "src/assets/walnut-wood.jpg",
        district: "Ganderbal",
        artisan: "Rajesh Kumar"
    },
    {
        id: "4",
        name: "Authentic Saffron (5g)",
        price: 1200,
        originalPrice: 1500,
        rating: 4.6,
        reviews: 203,
        image: "src/assets/saffron.jpg",
        district: "Pampore",
        artisan: "Gulam Hassan",
        badge: "Fresh"
    },
    {
        id: "5",
        name: "Papier Mache Decorative Box",
        price: 3500,
        rating: 4.5,
        reviews: 67,
        image: "src/assets/papier-mache.jpg",
        district: "Srinagar",
        artisan: "Nazir Ahmad"
    },
    {
        id: "6",
        name: "Kashmir Silk Embroidered Saree",
        price: 25000,
        originalPrice: 28000,
        rating: 4.8,
        reviews: 91,
        image: "src/assets/silk-saree.jpg",
        district: "Anantnag",
        artisan: "Meena Devi",
        badge: "Limited"
    }
];

// Districts Data
const districts = [
    {
        name: "Srinagar",
        speciality: "Pashmina & Carpets",
        artisans: 145,
        products: 420,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        description: "Famous for exquisite pashmina shawls and hand-knotted carpets"
    },
    {
        name: "Budgam", 
        speciality: "Walnut Wood Craft",
        artisans: 89,
        products: 230,
        image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
        description: "Renowned for intricate walnut wood carvings and furniture"
    },
    {
        name: "Pampore",
        speciality: "Saffron",
        artisans: 67,
        products: 45,
        image: "https://images.unsplash.com/photo-1609501676725-7186f734bb20?w=400&h=300&fit=crop",
        description: "The saffron capital producing the world's finest quality saffron"
    },
    {
        name: "Anantnag",
        speciality: "Silk Products",
        artisans: 92,
        products: 310,
        image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop",
        description: "Specialists in silk weaving and embroidered textiles"
    }
];

// Generate Products Grid
function initProductsGrid() {
    const productsGrid = document.querySelector('.products-grid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
    
    // Initialize product interactions
    initProductInteractions();
}

function createProductCard(product) {
    const discount = product.originalPrice 
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : null;
    
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" />
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                <button class="like-btn" data-product-id="${product.id}">
                    <i data-lucide="heart"></i>
                </button>
                <div class="quick-add">
                    <button class="btn btn-primary btn-sm" style="width: 100%;">
                        <i data-lucide="shopping-cart"></i>
                        Quick Add
                    </button>
                </div>
            </div>
            <div class="product-content">
                <div class="product-district">${product.district}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-artisan">by ${product.artisan}</p>
                <div class="product-rating">
                    <div class="stars">
                        ${generateStars(product.rating)}
                    </div>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <div class="product-price">
                    <div class="price-info">
                        <span class="current-price">₹${product.price.toLocaleString()}</span>
                        ${product.originalPrice ? `<span class="original-price">₹${product.originalPrice.toLocaleString()}</span>` : ''}
                    </div>
                    ${discount ? `<span class="discount">${discount}% off</span>` : ''}
                </div>
            </div>
        </div>
    `;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    let starsHTML = '';
    
    for (let i = 0; i < 5; i++) {
        const filled = i < fullStars ? 'filled' : '';
        starsHTML += `<i class="star ${filled}" data-lucide="star"></i>`;
    }
    
    return starsHTML;
}

// Generate Districts Grid
function initDistrictsGrid() {
    const districtsGrid = document.querySelector('.districts-grid');
    if (!districtsGrid) return;
    
    districtsGrid.innerHTML = districts.map(district => createDistrictCard(district)).join('');
}

function createDistrictCard(district) {
    return `
        <div class="district-card" data-district="${district.name}">
            <div class="district-image">
                <img src="${district.image}" alt="${district.name}" />
                <div class="district-overlay"></div>
                <div class="district-info">
                    <h3 class="district-name">${district.name}</h3>
                    <p class="district-specialty">${district.speciality}</p>
                </div>
            </div>
            <div class="district-content">
                <p class="district-description">${district.description}</p>
                <div class="district-stats">
                    <div class="district-stat">
                        <i data-lucide="users"></i>
                        <div>
                            <div class="stat-number">${district.artisans}</div>
                            <div class="stat-label">Artisans</div>
                        </div>
                    </div>
                    <div class="district-stat">
                        <i data-lucide="package"></i>
                        <div>
                            <div class="stat-number">${district.products}</div>
                            <div class="stat-label">Products</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Product Interactions
function initProductInteractions() {
    // Like button functionality
    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            button.classList.toggle('liked');
            
            // Update heart icon
            const icon = button.querySelector('i');
            if (button.classList.contains('liked')) {
                icon.setAttribute('data-lucide', 'heart');
                icon.style.fill = 'currentColor';
            } else {
                icon.setAttribute('data-lucide', 'heart');
                icon.style.fill = 'none';
            }
            lucide.createIcons();
        });
    });
    
    // Quick add functionality
    const quickAddButtons = document.querySelectorAll('.quick-add .btn');
    quickAddButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Simple feedback
            const originalText = button.innerHTML;
            button.innerHTML = '<i data-lucide="check"></i> Added!';
            button.style.background = '#059669';
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.background = '';
                lucide.createIcons();
            }, 2000);
        });
    });
    
    // Product card click
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            const productId = card.dataset.productId;
            console.log('Navigate to product:', productId);
            // Here you would typically navigate to a product detail page
        });
    });
}

// Scroll Effects
function initScrollEffects() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add scroll effect to header
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.boxShadow = 'var(--shadow-elegant)';
        } else {
            header.style.boxShadow = 'none';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Interactive Elements
function initInteractiveElements() {
    // Add hover effects and animations
    const cards = document.querySelectorAll('.product-card, .district-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add any additional hover effects here
        });
    });
    
    // Initialize all Lucide icons after content is loaded
    setTimeout(() => {
        lucide.createIcons();
    }, 100);
}

// Form Validation (if forms are added later)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// Utility Functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
    }).format(amount);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Search functionality (basic implementation)
function initSearch() {
    const searchInput = document.querySelector('#searchInput');
    if (!searchInput) return;
    
    const debouncedSearch = debounce(function(query) {
        console.log('Searching for:', query);
        // Implement search logic here
    }, 300);
    
    searchInput.addEventListener('input', function() {
        debouncedSearch(this.value);
    });
}