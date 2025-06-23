// Generate stars for background
function generateStars() {
  const starsLayer1 = document.querySelector(".stars-layer-1")
  const starsLayer2 = document.querySelector(".stars-layer-2")

  // Generate stars for layer 1
  for (let i = 0; i < 40; i++) {
    const star = document.createElement("div")
    star.className = "star"
    star.style.left = Math.random() * 100 + "%"
    star.style.top = Math.random() * 100 + "%"
    star.style.width = "1px"
    star.style.height = "1px"
    star.style.animationDelay = Math.random() * 3 + "s"
    star.style.animationDuration = 2 + Math.random() * 2 + "s"
    starsLayer1.appendChild(star)
  }

  // Generate stars for layer 2
  for (let i = 0; i < 60; i++) {
    const star = document.createElement("div")
    star.className = "star"
    star.style.left = Math.random() * 100 + "%"
    star.style.top = Math.random() * 100 + "%"
    star.style.width = "0.5px"
    star.style.height = "0.5px"
    star.style.animationDelay = Math.random() * 4 + "s"
    star.style.animationDuration = 3 + Math.random() * 3 + "s"
    star.style.opacity = "0.4"
    starsLayer2.appendChild(star)
  }
}

// Tab functionality
function initTabs() {
  const tabBtns = document.querySelectorAll(".tab-btn")
  const tabContents = document.querySelectorAll(".tab-content")

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab")

      // Remove active class from all tabs and contents
      tabBtns.forEach((b) => b.classList.remove("active"))
      tabContents.forEach((c) => c.classList.remove("active"))

      // Add active class to clicked tab and corresponding content
      btn.classList.add("active")
      document.getElementById(targetTab).classList.add("active")
    })
  })
}

// Video carousel functionality
function initVideoCarousel() {
  const carousel = document.getElementById("videoCarousel")
  const prevBtn = document.getElementById("prevBtn")
  const nextBtn = document.getElementById("nextBtn")
  const dots = document.querySelectorAll(".carousel-dots .dot")
  const carouselInfo = document.getElementById("carouselInfo")

  let currentSlide = 0
  let videosPerSlide = getVideosPerSlide()
  const totalVideos = 6
  let totalSlides = Math.ceil(totalVideos / videosPerSlide)

  function getVideosPerSlide() {
    if (window.innerWidth < 768) {
      return 1
    } else if (window.innerWidth < 1024) {
      return 2
    } else {
      return 3
    }
  }

  function updateCarousel() {
    videosPerSlide = getVideosPerSlide()
    totalSlides = Math.ceil(totalVideos / videosPerSlide)

    const translateX = -currentSlide * (100 / videosPerSlide)
    carousel.style.transform = `translateX(${translateX}%)`

    // Update dots
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentSlide)
    })

    // Update info
    const startVideo = currentSlide * videosPerSlide + 1
    const endVideo = Math.min(startVideo + videosPerSlide - 1, totalVideos)
    carouselInfo.textContent = `${startVideo}-${endVideo} de ${totalVideos} vídeos`

    // Update button states
    prevBtn.disabled = currentSlide === 0
    nextBtn.disabled = currentSlide >= totalSlides - 1
  }

  prevBtn.addEventListener("click", () => {
    if (currentSlide > 0) {
      currentSlide--
      updateCarousel()
    }
  })

  nextBtn.addEventListener("click", () => {
    if (currentSlide < totalSlides - 1) {
      currentSlide++
      updateCarousel()
    }
  })

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      if (index < totalSlides) {
        currentSlide = index
        updateCarousel()
      }
    })
  })

  // Handle window resize
  window.addEventListener("resize", () => {
    currentSlide = 0 // Reset to first slide on resize
    updateCarousel()
  })

  // Initialize
  updateCarousel()
}

// Suggestion cards hover effects
function initSuggestionCards() {
  const suggestionCards = document.querySelectorAll(".suggestion-card")

  suggestionCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      const onlineIndicator = card.querySelector(".online-indicator")
      const verifiedBadge = card.querySelector(".verified-badge-small")

      if (onlineIndicator) {
        onlineIndicator.style.opacity = "1"
      }
      if (verifiedBadge) {
        verifiedBadge.style.opacity = "1"
      }
    })

    card.addEventListener("mouseleave", () => {
      const onlineIndicator = card.querySelector(".online-indicator")
      const verifiedBadge = card.querySelector(".verified-badge-small")

      if (onlineIndicator) {
        onlineIndicator.style.opacity = "0"
      }
      if (verifiedBadge) {
        verifiedBadge.style.opacity = "0"
      }
    })
  })
}

// Parallax effect for space background
function initParallax() {
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset
    const nebulas = document.querySelectorAll(".nebula")
    const orbs = document.querySelectorAll(".orb")
    const stars1 = document.querySelector(".stars-layer-1")
    const stars2 = document.querySelector(".stars-layer-2")

    // Move nebulas at different speeds
    nebulas.forEach((nebula, index) => {
      const speed = 0.1 + index * 0.05
      nebula.style.transform = `translateY(${scrollY * speed}px)`
    })

    // Move orbs
    orbs.forEach((orb, index) => {
      const speed = 0.2 + index * 0.1
      orb.style.transform = `translateY(${scrollY * speed}px)`
    })

    // Move star layers
    if (stars1) {
      stars1.style.transform = `translateY(${scrollY * 0.3}px)`
    }
    if (stars2) {
      stars2.style.transform = `translateY(${scrollY * 0.1}px)`
    }
  })
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll(".nav-link")

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      // Add smooth scrolling logic here if needed
    })
  })
}

// Play button functionality for videos
function initVideoPlayButtons() {
  const playBtns = document.querySelectorAll(".play-btn")

  playBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const icon = btn.querySelector("i")

      if (icon.classList.contains("fa-play")) {
        icon.classList.remove("fa-play")
        icon.classList.add("fa-pause")
      } else {
        icon.classList.remove("fa-pause")
        icon.classList.add("fa-play")
      }
    })
  })
}

// Mobile menu functionality
function initMobileMenu() {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const nav = document.querySelector(".nav")

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      nav.classList.toggle("mobile-nav-open")
    })
  }
}

// Responsive navigation
function initResponsiveNav() {
  const nav = document.querySelector(".nav")
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const contactBtn = document.querySelector(".contact-btn")

  function checkScreenSize() {
    if (window.innerWidth >= 768) {
      nav.style.display = "flex"
      if (mobileMenuBtn) mobileMenuBtn.style.display = "none"
      if (contactBtn) contactBtn.style.display = "block"
    } else if (window.innerWidth >= 480) {
      nav.style.display = "none"
      if (mobileMenuBtn) mobileMenuBtn.style.display = "block"
      if (contactBtn) contactBtn.style.display = "none"
    } else {
      nav.style.display = "none"
      if (mobileMenuBtn) mobileMenuBtn.style.display = "none"
      if (contactBtn) contactBtn.style.display = "block"
    }
  }

  window.addEventListener("resize", checkScreenSize)
  checkScreenSize()
}

// Intersection Observer for animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe sections for scroll animations
  const sections = document.querySelectorAll("section")
  sections.forEach((section) => {
    section.style.opacity = "0"
    section.style.transform = "translateY(20px)"
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(section)
  })
}

// Initialize all functionality when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  generateStars()
  initTabs()
  initVideoCarousel()
  initSuggestionCards()
  initParallax()
  initSmoothScrolling()
  initVideoPlayButtons()
  initMobileMenu()
  initResponsiveNav()
  initScrollAnimations()
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0"
  document.body.style.transition = "opacity 0.5s ease-in-out"

  setTimeout(() => {
    document.body.style.opacity = "1"
  }, 100)
})

// Handle orientation change
window.addEventListener("orientationchange", () => {
  setTimeout(() => {
    initVideoCarousel()
    initResponsiveNav()
  }, 100)
})
