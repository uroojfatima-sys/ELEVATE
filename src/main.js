import './style.css'

document.addEventListener('DOMContentLoaded', () => {

  /* =========================================
     ANNOUNCEMENT BAR
  ========================================= */

  const announcements = [
    'Luxury Fashion for Men & Women',
    'Discover Our Latest Collection',
    'Elevate Your Style'
  ]

  let announcementIndex = 0

  const announcementText =
    document.getElementById('announcement-text')

  const previousAnnouncement =
    document.querySelector('[data-announcement="prev"]')

  const nextAnnouncement =
    document.querySelector('[data-announcement="next"]')


  function updateAnnouncement() {

    if (!announcementText) return

    announcementText.textContent =
      announcements[announcementIndex]

  }


  previousAnnouncement?.addEventListener('click', () => {

    announcementIndex--

    if (announcementIndex < 0) {
      announcementIndex = announcements.length - 1
    }

    updateAnnouncement()

  })


  nextAnnouncement?.addEventListener('click', () => {

    announcementIndex++

    if (announcementIndex >= announcements.length) {
      announcementIndex = 0
    }

    updateAnnouncement()

  })


  /* =========================================
     MOBILE SEARCH TOGGLE
  ========================================= */

  const mobileSearchButton =
    document.getElementById('mobile-search-btn')

  const mobileSearchForm =
    document.getElementById('mobile-search-form')

  const mobileSearchInput =
    document.getElementById('mobile-search-input')


  mobileSearchButton?.setAttribute(
    'aria-expanded',
    'false'
  )


  mobileSearchButton?.addEventListener('click', () => {

    if (!mobileSearchForm) return

    const isHidden =
      mobileSearchForm.classList.contains('hidden')

    mobileSearchForm.classList.toggle('hidden')

    mobileSearchButton.setAttribute(
      'aria-expanded',
      String(isHidden)
    )

    if (isHidden) {

      setTimeout(() => {
        mobileSearchInput?.focus()
      }, 100)

    }

  })


  /* =========================================
     MOBILE MENU
  ========================================= */

  const hamburgerButton =
    document.getElementById('hamburger-btn')

  const closeMenuButton =
    document.getElementById('close-menu-btn')

  const mobileMenu =
    document.getElementById('mobile-menu')

  const mobileBackdrop =
    document.getElementById('mobile-backdrop')


  function openMobileMenu() {

    if (!mobileMenu || !mobileBackdrop) return

    mobileMenu.classList.remove(
      'translate-x-full',
      'opacity-0'
    )

    mobileMenu.classList.add(
      'translate-x-0',
      'opacity-100'
    )

    mobileBackdrop.classList.remove(
      'opacity-0',
      'pointer-events-none'
    )

    mobileBackdrop.classList.add(
      'opacity-100'
    )

    hamburgerButton?.setAttribute(
      'aria-expanded',
      'true'
    )

    document.body.classList.add('overflow-hidden')

  }


  function closeMobileMenu() {

    if (!mobileMenu || !mobileBackdrop) return

    mobileMenu.classList.add(
      'translate-x-full',
      'opacity-0'
    )

    mobileMenu.classList.remove(
      'translate-x-0',
      'opacity-100'
    )

    mobileBackdrop.classList.add(
      'opacity-0',
      'pointer-events-none'
    )

    mobileBackdrop.classList.remove(
      'opacity-100'
    )

    hamburgerButton?.setAttribute(
      'aria-expanded',
      'false'
    )

    document.body.classList.remove('overflow-hidden')

  }


  hamburgerButton?.addEventListener(
    'click',
    openMobileMenu
  )


  closeMenuButton?.addEventListener(
    'click',
    closeMobileMenu
  )


  mobileBackdrop?.addEventListener(
    'click',
    closeMobileMenu
  )


  /* =========================================
     PRODUCT SECTION HELPERS
  ========================================= */

  function getProductsSection() {

    return (
      document.getElementById('trending-products') ||
      document.querySelector('[data-products-section]') ||
      document.querySelector('.product-showcase') ||
      document.querySelector(
        'section[id*="product" i]'
      )
    )

  }


  function getProductCards(section) {

    if (!section) return []

    let cards =
      Array.from(
        section.querySelectorAll(
          '[data-product-card]'
        )
      )

    if (cards.length) return cards


    cards =
      Array.from(
        section.querySelectorAll(
          '#trending-track > article'
        )
      )

    if (cards.length) return cards


    cards =
      Array.from(
        section.querySelectorAll(
          '.product-card'
        )
      )

    if (cards.length) return cards


    cards =
      Array.from(
        section.querySelectorAll(
          '[class*="product-card"]'
        )
      )

    if (cards.length) return cards


    const addToCartButtons =
      Array.from(
        section.querySelectorAll(
          '[data-add-to-cart], .add-to-cart, .add-cart'
        )
      )


    const fallbackCards = []


    addToCartButtons.forEach((button) => {

      const card =
        button.closest(
          'article, li, [class*="group"], [class*="card"]'
        )


      if (
        card &&
        !fallbackCards.includes(card)
      ) {

        fallbackCards.push(card)

      }

    })


    return fallbackCards

  }


  function getProductName(card) {

    const nameElement =
      card.querySelector(
        '[data-product-name], .product-name, h2, h3, h4, h5'
      )


    if (nameElement) {
      return nameElement.textContent.trim()
    }


    return card.textContent.trim()

  }


  /* =========================================
     SEARCH MESSAGE
  ========================================= */

  function showSearchMessage(
    message,
    isError = false
  ) {

    let messageElement =
      document.getElementById(
        'product-search-message'
      )


    if (!messageElement) {

      messageElement =
        document.createElement('div')

      messageElement.id =
        'product-search-message'

      messageElement.className =
        `
          w-full
          text-center
          py-4
          px-4
          text-sm
          font-urbanist
        `.replace(/\s+/g, ' ').trim()


      const productsSection =
        getProductsSection()


      if (productsSection) {

        productsSection.prepend(
          messageElement
        )

      }

    }


    if (!messageElement) return


    messageElement.textContent =
      message


    messageElement.classList.remove(
      'hidden',
      'text-white/70',
      'text-gold-light'
    )


    messageElement.classList.add(
      isError
        ? 'text-gold-light'
        : 'text-white/70'
    )

  }


  function clearSearchMessage() {

    const messageElement =
      document.getElementById(
        'product-search-message'
      )

    messageElement?.remove()

  }


  /* =========================================
     RESET PRODUCT SEARCH
  ========================================= */

  function resetProductCards(cards) {

    cards.forEach((card) => {

      card.classList.remove(
        'hidden',
        'ring-2',
        'ring-gold-light',
        'ring-offset-2',
        'ring-offset-[#16090D]'
      )

    })

  }


  /* =========================================
     PRODUCT SEARCH
  ========================================= */

  function performProductSearch(value) {

    const query =
      value.trim().toLowerCase()


    if (!query) {

      clearSearchMessage()

      const productsSection =
        getProductsSection()

      const cards =
        getProductCards(productsSection)

      resetProductCards(cards)

      return

    }


    const productsSection =
      getProductsSection()


    if (!productsSection) {

      showSearchMessage(
        'Products section could not be found.',
        true
      )

      return

    }


    const cards =
      getProductCards(productsSection)


    if (!cards.length) {

      showSearchMessage(
        'No products are available to search.',
        true
      )

      return

    }


    let matchCount = 0


    cards.forEach((card) => {

      const productName =
        getProductName(card).toLowerCase()


      const matches =
        productName.includes(query)


      if (matches) {

        card.classList.remove('hidden')

        card.classList.add(
          'ring-2',
          'ring-gold-light',
          'ring-offset-2',
          'ring-offset-[#16090D]'
        )

        matchCount++

      } else {

        card.classList.add('hidden')

        card.classList.remove(
          'ring-2',
          'ring-gold-light',
          'ring-offset-2',
          'ring-offset-[#16090D]'
        )

      }

    })


    productsSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })


    if (matchCount === 0) {

      showSearchMessage(
        `No products found for "${value.trim()}".`,
        true
      )

      return

    }


    showSearchMessage(
      `${matchCount} product${matchCount === 1 ? '' : 's'} found.`
    )

  }


  /* =========================================
     DESKTOP SEARCH
  ========================================= */

  const searchForm =
    document.getElementById('search-form')

  const searchInput =
    document.getElementById('search-input')


  searchForm?.addEventListener(
    'submit',
    (event) => {

      event.preventDefault()

      performProductSearch(
        searchInput?.value || ''
      )

    }
  )


  /* =========================================
     MOBILE TOP SEARCH
  ========================================= */

  mobileSearchForm?.addEventListener(
    'submit',
    (event) => {

      event.preventDefault()

      performProductSearch(
        mobileSearchInput?.value || ''
      )

      // Hide the search form after submitting
      mobileSearchForm.classList.add('hidden')
      mobileSearchButton?.setAttribute('aria-expanded', 'false')

    }
  )


  /* =========================================
     MOBILE MENU SEARCH
  ========================================= */

  const mobileMenuSearchForm =
    document.getElementById(
      'mobile-menu-search-form'
    )

  const mobileMenuSearchInput =
    document.getElementById(
      'mobile-menu-search-input'
    )


  mobileMenuSearchForm?.addEventListener(
    'submit',
    (event) => {

      event.preventDefault()

      performProductSearch(
        mobileMenuSearchInput?.value || ''
      )

      closeMobileMenu()

    }
  )


  /* =========================================
     CART
  ========================================= */

  let cartCount =
    Number(
      localStorage.getItem(
        'elevate-cart-count'
      )
    ) || 0


  const cartCountElement =
    document.getElementById(
      'cart-count'
    )

  const mobileCartCountElement =
    document.getElementById(
      'mobile-cart-count'
    )


  function updateCartCount() {

    if (cartCountElement) {

      cartCountElement.textContent =
        cartCount

    }


    if (mobileCartCountElement) {

      mobileCartCountElement.textContent =
        cartCount

    }


    localStorage.setItem(
      'elevate-cart-count',
      String(cartCount)
    )

  }


  updateCartCount()


  /* =========================================
     ADD TO CART BUTTONS
  ========================================= */

  const addToCartButtons =
    document.querySelectorAll(
      '[data-add-to-cart], .add-to-cart, .add-cart'
    )


  addToCartButtons.forEach((button) => {

    button.addEventListener(
      'click',
      (event) => {

        event.preventDefault()

        cartCount++

        updateCartCount()


        const originalText =
          button.dataset.originalText ||
          button.textContent.trim()


        button.dataset.originalText =
          originalText


        button.textContent =
          'ADDED ✓'


        button.classList.add(
          'brightness-110'
        )


        setTimeout(() => {

          button.textContent =
            originalText

          button.classList.remove(
            'brightness-110'
          )

        }, 1200)

      }
    )

  })


  /* =========================================
     WISHLIST
  ========================================= */

  let wishlistCount =
    Number(
      localStorage.getItem(
        'elevate-wishlist-count'
      )
    ) || 0


  const wishlistCountElement =
    document.getElementById(
      'wishlist-count'
    )

  const mobileWishlistCountElement =
    document.getElementById(
      'mobile-wishlist-count'
    )


  function updateWishlistCount() {

    if (wishlistCountElement) {

      wishlistCountElement.textContent =
        wishlistCount

    }


    if (mobileWishlistCountElement) {

      mobileWishlistCountElement.textContent =
        wishlistCount

    }


    localStorage.setItem(
      'elevate-wishlist-count',
      String(wishlistCount)
    )

  }


  updateWishlistCount()


  /* =========================================
     WISHLIST BUTTONS
  ========================================= */

  const wishlistButtons =
    document.querySelectorAll(
      '[data-add-to-wishlist], .add-to-wishlist, .wishlist-btn'
    )


  wishlistButtons.forEach((button) => {

    button.addEventListener(
      'click',
      (event) => {

        event.preventDefault()


        const alreadyAdded =
          button.dataset.wishlisted === 'true'


        if (alreadyAdded) {

          button.dataset.wishlisted =
            'false'

          wishlistCount =
            Math.max(
              0,
              wishlistCount - 1
            )

        } else {

          button.dataset.wishlisted =
            'true'

          wishlistCount++

        }


        updateWishlistCount()


        button.classList.toggle(
          'text-gold-light',
          !alreadyAdded
        )


        const svg =
          button.querySelector('svg')


        if (svg) {

          svg.setAttribute(
            'fill',
            alreadyAdded
              ? 'none'
              : 'currentColor'
          )

        }

      }
    )

  })


  /* =========================================
     HEADER CART
  ========================================= */

  const desktopCartButton =
    document.getElementById(
      'cart-btn'
    )

  const mobileCartButton =
    document.getElementById(
      'cart-btn-mobile'
    )


  function showCartFeedback() {

    const productsSection =
      getProductsSection()


    if (productsSection) {

      productsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })

    }

  }


  desktopCartButton?.addEventListener(
    'click',
    showCartFeedback
  )


  mobileCartButton?.addEventListener(
    'click',
    showCartFeedback
  )


  /* =========================================
     HEADER WISHLIST
  ========================================= */

  const desktopWishlistButton =
    document.getElementById(
      'wishlist-btn'
    )


  desktopWishlistButton?.addEventListener(
    'click',
    () => {

      const productsSection =
        getProductsSection()


      if (productsSection) {

        productsSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })

      }

    }
  )


  const mobileWishlistButton =
    document.getElementById(
      'mobile-wishlist-btn'
    )


  mobileWishlistButton?.addEventListener(
    'click',
    () => {

      closeMobileMenu()

      const productsSection =
        getProductsSection()


      if (productsSection) {

        productsSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })

      }

    }
  )


  /* =========================================
     ACCOUNT BUTTONS
  ========================================= */

  const accountButton =
    document.getElementById(
      'account-btn'
    )

  const mobileAccountButton =
    document.getElementById(
      'mobile-account-btn'
    )


  function showAccountMessage() {

    showSearchMessage(
      'Account feature is not available yet.'
    )

  }


  accountButton?.addEventListener(
    'click',
    showAccountMessage
  )


  mobileAccountButton?.addEventListener(
    'click',
    () => {

      closeMobileMenu()

      showAccountMessage()

    }
  )

})

// =========================================================
// TESTIMONIAL DATA
// =========================================================

// (Keep all testimonial code unchanged)
  /* =========================================================
     TESTIMONIAL DATA
     Image mapping:
     1 → James Whitfield  → person1.jpg
     2 → Elena Brooks     → person2.png
     3 → Daniel Cruz      → person3.jpg
     4 → Sofia Marchetti  → person4.jpg
     5 → Marcus Webb      → person5.jpg
     6 → Priya Nair       → person6.jpg
     7 → Michael Anderson → person7.jpg
  ========================================================= */

  var testimonials = [
    {
      avatar: 'src/assets/images/person7.jpg',
      quote:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem",
      name: 'Michael Anderson',
      role: 'Client'
    },

    {
      avatar: 'src/assets/images/person1.jpg',
      quote:
        "The fit, the finish, the fabric — everything about ELEVATE feels considered. Ordering was effortless and the pieces arrived exactly as pictured, if not better in person.",
      name: 'James Whitfield',
      role: 'Client'
    },

    {
      avatar: 'src/assets/images/person2.png',
      quote:
        "I've reordered three times this year. The customer support team is responsive and the quality has been consistent every single time.",
      name: 'Elena Brooks',
      role: 'Client'
    },

    {
      avatar: 'src/assets/images/person3.jpg',
      quote:
        "A rare mix of accessible pricing and genuinely luxury materials. My go-to for anything I want to feel confident wearing.",
      name: 'Daniel Cruz',
      role: 'Client'
    },

    {
      avatar: 'src/assets/images/person4.jpg',
      quote:
        "Fast shipping, beautiful packaging, and pieces that photograph exactly as they look in daylight. ELEVATE has become my default wardrobe upgrade.",
      name: 'Sofia Marchetti',
      role: 'Client'
    },

    {
      avatar: 'src/assets/images/person5.jpg',
      quote:
        "Their accessories line is criminally underrated. Every piece I've bought gets asked about within a week.",
      name: 'Marcus Webb',
      role: 'Client'
    },

    {
      avatar: 'src/assets/images/person6.jpg',
      quote:
        "Returns were painless when a size ran small, and the team followed up personally. That kind of service is what keeps me coming back.",
      name: 'Priya Nair',
      role: 'Client'
    }
  ];


  /* =========================================================
     ELEMENTS
  ========================================================= */

  var centerAvatar =
    document.getElementById('center-avatar');

  var quoteEl =
    document.getElementById('testimonial-quote');

  var nameEl =
    document.getElementById('testimonial-name');

  var roleEl =
    document.getElementById('testimonial-role');

  var dotButtons =
    document.querySelectorAll(
      '#testimonial-dots [data-dot]'
    );

  var avatarButtons =
    document.querySelectorAll(
      '#orbit-stage [data-avatar]'
    );


  /* =========================================================
     ACTIVE DOT
  ========================================================= */

  function setActiveDot(index) {

    dotButtons.forEach(function (dot) {

      var dotIndex =
        parseInt(dot.dataset.dot, 10);

      var isActive =
        dotIndex === index;

      dot.classList.toggle(
        'border-gold',
        isActive
      );

      dot.classList.toggle(
        'border-transparent',
        !isActive
      );

      var bullet =
        dot.querySelector('span');

      if (!bullet) return;

      bullet.classList.toggle(
        'bg-[radial-gradient(50%_261.22%_at_50%_50%,#F6D995_0%,#AB8546_100%)]',
        isActive
      );

      bullet.classList.toggle(
        'bg-white/30',
        !isActive
      );

      bullet.classList.toggle(
        'h-2',
        isActive
      );

      bullet.classList.toggle(
        'w-2',
        isActive
      );

      bullet.classList.toggle(
        'h-1.5',
        !isActive
      );

      bullet.classList.toggle(
        'w-1.5',
        !isActive
      );

    });

  }


  /* =========================================================
     FADE ANIMATION
  ========================================================= */

  function playFade(el) {

    if (!el) return;

    el.classList.remove('animate-pulse');

    void el.offsetWidth;

    el.classList.add('animate-pulse');

  }


  /* =========================================================
     SHOW TESTIMONIAL
  ========================================================= */

  function showTestimonial(index) {

    var item = testimonials[index];

    if (!item) return;

    centerAvatar.src =
      item.avatar;

    centerAvatar.alt =
      item.name;

    quoteEl.textContent =
      item.quote;

    nameEl.textContent =
      item.name;

    roleEl.textContent =
      item.role;

    /*
      The testimonial array is zero-based,
      so index itself maps directly to the dot.
      
      0 = Michael
      1 = James
      2 = Elena
      3 = Daniel
      4 = Sofia
      5 = Marcus
      6 = Priya
    */
    setActiveDot(index);

    [
      centerAvatar,
      quoteEl,
      nameEl,
      roleEl
    ].forEach(playFade);

  }


  /* =========================================================
     ORBIT AVATAR CLICK
     
     HTML:
     data-avatar="1" → testimonials[1]
     data-avatar="2" → testimonials[2]
     ...
     data-avatar="6" → testimonials[6]

     Michael Anderson is index 0 and is the default center
     testimonial because there is no orbit avatar 7.
  ========================================================= */

  avatarButtons.forEach(function (btn) {

    btn.addEventListener(
      'click',
      function () {

        var avatarNumber =
          parseInt(
            btn.dataset.avatar,
            10
          );

        if (
          Number.isNaN(avatarNumber) ||
          avatarNumber < 1 ||
          avatarNumber > 6
        ) {
          return;
        }

        showTestimonial(
          avatarNumber
        );

      }
    );

  });


  /* =========================================================
     DOT CLICK
     
     Each dot represents exactly one person.

     0 → Michael
     1 → James
     2 → Elena
     3 → Daniel
     4 → Sofia
     5 → Marcus
     6 → Priya
  ========================================================= */

  dotButtons.forEach(function (dot) {

    dot.addEventListener(
      'click',
      function () {

        var index =
          parseInt(
            dot.dataset.dot,
            10
          );

        if (
          Number.isNaN(index) ||
          !testimonials[index]
        ) {
          return;
        }

        showTestimonial(index);

      }
    );

  });


 
/* =========================================================
   COLLECTION INFINITE CAROUSEL
   MANUAL ONLY
   DOT CLICK + MOUSE DRAG + TOUCH DRAG
   SNAP TO NEAREST CARD AFTER DRAG
   INFINITE LOOP CORRECTION AFTER DRAG
   NO AUTO PLAY
   NO TIMER
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const track =
    document.getElementById("collection-track");

  const dots = Array.from(
    document.querySelectorAll(
      "#collection-dots [data-dot]"
    )
  );

  if (!track) return;


  /* =========================================================
     ORIGINAL CARDS
  ========================================================= */

  const originalCards = Array.from(
    track.querySelectorAll(".card-frame")
  );

  const totalCards =
    originalCards.length;

  if (!totalCards) {
    console.warn(
      "No .card-frame elements found."
    );
    return;
  }


  /* =========================================================
     CREATE LEFT CLONES
  ========================================================= */

  originalCards
    .map(card => {

      const clone =
        card.cloneNode(true);

      clone.dataset.carouselClone =
        "before";

      return clone;

    })
    .reverse()
    .forEach(clone => {

      track.insertBefore(
        clone,
        track.firstChild
      );

    });


  /* =========================================================
     CREATE RIGHT CLONES
  ========================================================= */

  originalCards.forEach(card => {

    const clone =
      card.cloneNode(true);

    clone.dataset.carouselClone =
      "after";

    track.appendChild(clone);

  });


  /* =========================================================
     ALL CARDS
  ========================================================= */

  let allCards = Array.from(
    track.querySelectorAll(
      ".card-frame"
    )
  );


  /* =========================================================
     STATE
  ========================================================= */

  let currentIndex =
    totalCards;

  let isDragging =
    false;

  let isAnimating =
    false;

  let startX =
    0;

  let startScroll =
    0;

  let touchStartX =
    0;

  let touchStartScroll =
    0;

  let dragMoved =
    false;


  /* =========================================================
     GET CARD CENTER POSITION
  ========================================================= */

  function getScrollPosition(index) {

    const card =
      allCards[index];

    if (!card) {
      return 0;
    }

    return (
      card.offsetLeft -
      (
        track.clientWidth -
        card.offsetWidth
      ) / 2
    );

  }


  /* =========================================================
     GET REAL CARD INDEX
  ========================================================= */

  function getRealIndex(index) {

    let realIndex =
      (index - totalCards) %
      totalCards;

    if (realIndex < 0) {

      realIndex +=
        totalCards;

    }

    return realIndex;

  }


  /* =========================================================
     UPDATE DOTS
  ========================================================= */

  function updateDots(index) {

    const realIndex =
      getRealIndex(index);

    dots.forEach(
      (dot, i) => {

        if (i === realIndex) {

          dot.classList.remove(
            "w-2",
            "h-2",
            "bg-white/30"
          );

          dot.classList.add(
            "w-2.5",
            "h-2.5",
            "gold-gradient-bg"
          );

          dot.setAttribute(
            "aria-current",
            "true"
          );

        } else {

          dot.classList.remove(
            "w-2.5",
            "h-2.5",
            "gold-gradient-bg"
          );

          dot.classList.add(
            "w-2",
            "h-2",
            "bg-white/30"
          );

          dot.removeAttribute(
            "aria-current"
          );

        }

      }
    );

  }


  /* =========================================================
     MOVE TO CARD
  ========================================================= */

  function moveTo(
    index,
    smooth = true
  ) {

    if (!allCards[index]) {
      return;
    }

    currentIndex =
      index;

    track.scrollTo({

      left:
        getScrollPosition(
          index
        ),

      behavior:
        smooth
          ? "smooth"
          : "auto"

    });

    updateDots(
      index
    );

  }


  /* =========================================================
     FIND CLOSEST CARD
  ========================================================= */

  function getClosestCard() {

    const center =
      track.scrollLeft +
      track.clientWidth / 2;

    let closest =
      totalCards;

    let smallestDistance =
      Infinity;

    allCards.forEach(
      (card, index) => {

        const cardCenter =
          card.offsetLeft +
          card.offsetWidth / 2;

        const distance =
          Math.abs(
            cardCenter -
            center
          );

        if (
          distance <
          smallestDistance
        ) {

          smallestDistance =
            distance;

          closest =
            index;

        }

      }
    );

    return closest;

  }


  /* =========================================================
     WAIT FOR SCROLL TO FINISH
  ========================================================= */

  function waitForScrollEnd(
    callback
  ) {

    let lastScrollLeft =
      track.scrollLeft;

    let stableFrames =
      0;

    function checkScroll() {

      const currentScrollLeft =
        track.scrollLeft;

      if (
        Math.abs(
          currentScrollLeft -
          lastScrollLeft
        ) < 0.5
      ) {

        stableFrames++;

      } else {

        stableFrames = 0;

      }

      lastScrollLeft =
        currentScrollLeft;

      if (
        stableFrames >= 4
      ) {

        callback();

      } else {

        requestAnimationFrame(
          checkScroll
        );

      }

    }

    requestAnimationFrame(
      checkScroll
    );

  }


  /* =========================================================
     INFINITE POSITION CORRECTION
  ========================================================= */

  function correctInfinitePosition() {

    const index =
      getClosestCard();


    /* -----------------------------------------
       LEFT CLONES
    ----------------------------------------- */

    if (
      index <
      totalCards
    ) {

      const newIndex =
        index +
        totalCards;

      moveTo(
        newIndex,
        false
      );

      return;

    }


    /* -----------------------------------------
       RIGHT CLONES
    ----------------------------------------- */

    if (
      index >=
      totalCards * 2
    ) {

      const newIndex =
        index -
        totalCards;

      moveTo(
        newIndex,
        false
      );

      return;

    }


    currentIndex =
      index;

    updateDots(
      index
    );

  }


  /* =========================================================
     SNAP TO NEAREST CARD
     
     Called ONLY after mouse/touch drag.
  ========================================================= */

  function snapToNearestCard() {

    if (!allCards.length) {
      return;
    }

    const nearestIndex =
      getClosestCard();

    currentIndex =
      nearestIndex;

    updateDots(
      nearestIndex
    );

    /*
       Smoothly center the nearest card.
    */

    track.scrollTo({

      left:
        getScrollPosition(
          nearestIndex
        ),

      behavior:
        "smooth"

    });


    /*
       After smooth snapping finishes,
       correct infinite clones.
    */

    waitForScrollEnd(
      () => {

        correctInfinitePosition();

        updateDots(
          currentIndex
        );

        isAnimating =
          false;

      }
    );

  }


  /* =========================================================
     INITIAL POSITION
  ========================================================= */

  requestAnimationFrame(
    () => {

      requestAnimationFrame(
        () => {

          currentIndex =
            totalCards;

          moveTo(
            totalCards,
            false
          );

          updateDots(
            totalCards
          );

        }
      );

    }
  );


  /* =========================================================
     DOT CLICK
  ========================================================= */

  dots.forEach(
    (dot, dotIndex) => {

      dot.addEventListener(
        "click",
        event => {

          event.preventDefault();
          event.stopPropagation();

          if (isAnimating) {
            return;
          }

          isAnimating =
            true;

          const targetIndex =
            totalCards +
            dotIndex;

          currentIndex =
            targetIndex;

          updateDots(
            targetIndex
          );

          track.classList.add(
            "scroll-smooth"
          );

          track.scrollTo({

            left:
              getScrollPosition(
                targetIndex
              ),

            behavior:
              "smooth"

          });

          waitForScrollEnd(
            () => {

              currentIndex =
                getClosestCard();

              correctInfinitePosition();

              updateDots(
                currentIndex
              );

              isAnimating =
                false;

            }
          );

        }
      );

    }
  );


  /* =========================================================
     SCROLL EVENT
     
     Only updates active dot.
  ========================================================= */

  track.addEventListener(
    "scroll",
    () => {

      const closest =
        getClosestCard();

      updateDots(
        closest
      );

    }
  );


  /* =========================================================
     MOUSE DRAG START
  ========================================================= */

  track.addEventListener(
    "mousedown",
    event => {

      if (
        event.button !== 0
      ) {
        return;
      }

      isDragging =
        true;

      isAnimating =
        false;

      dragMoved =
        false;

      startX =
        event.pageX;

      startScroll =
        track.scrollLeft;

      /*
         Disable smooth movement
         during manual drag.
      */

      track.classList.remove(
        "scroll-smooth"
      );

      track.classList.add(
        "cursor-grabbing"
      );

      document.body.style.userSelect =
        "none";

    }
  );


  /* =========================================================
     MOUSE DRAG MOVE
  ========================================================= */

  track.addEventListener(
    "mousemove",
    event => {

      if (!isDragging) {
        return;
      }

      event.preventDefault();

      const distance =
        event.pageX -
        startX;

      if (
        Math.abs(distance) > 3
      ) {
        dragMoved =
          true;
      }

      track.scrollLeft =
        startScroll -
        distance;

    }
  );


  /* =========================================================
     MOUSE DRAG END
     
     SNAP TO NEAREST CARD
     THEN CORRECT INFINITE LOOP
  ========================================================= */

  function stopDragging() {

    if (!isDragging) {
      return;
    }

    isDragging =
      false;

    track.classList.remove(
      "cursor-grabbing"
    );

    document.body.style.userSelect =
      "";

    /*
       Restore smooth scrolling so
       dot clicks remain smooth.
    */

    track.classList.add(
      "scroll-smooth"
    );

    /*
       Only snap if the user actually dragged.
    */

    if (dragMoved) {

      isAnimating =
        true;

      snapToNearestCard();

    }

    dragMoved =
      false;

  }


  track.addEventListener(
    "mouseup",
    stopDragging
  );

  track.addEventListener(
    "mouseleave",
    () => {

      if (isDragging) {
        stopDragging();
      }

    }
  );


  /* =========================================================
     TOUCH START
  ========================================================= */

  track.addEventListener(
    "touchstart",
    event => {

      isAnimating =
        false;

      dragMoved =
        false;

      touchStartX =
        event.touches[0].pageX;

      touchStartScroll =
        track.scrollLeft;

      /*
         Remove smooth movement while
         manually dragging.
      */

      track.classList.remove(
        "scroll-smooth"
      );

    },
    {
      passive: true
    }
  );


  /* =========================================================
     TOUCH MOVE
  ========================================================= */

  track.addEventListener(
    "touchmove",
    event => {

      const currentX =
        event.touches[0].pageX;

      const distance =
        currentX -
        touchStartX;

      if (
        Math.abs(distance) > 3
      ) {
        dragMoved =
          true;
      }

      track.scrollLeft =
        touchStartScroll -
        distance;

    },
    {
      passive: true
    }
  );


  /* =========================================================
     TOUCH END
     
     SNAP TO NEAREST CARD
     THEN CORRECT INFINITE LOOP
     RESTORE SCROLL-SMOOTH
  ========================================================= */

  track.addEventListener(
    "touchend",
    () => {

      /*
         Restore smooth scrolling.
      */

      track.classList.add(
        "scroll-smooth"
      );

      if (!dragMoved) {
        return;
      }

      isAnimating =
        true;

      snapToNearestCard();

      dragMoved =
        false;

    }
  );


  /* =========================================================
     TOUCH CANCEL
  ========================================================= */

  track.addEventListener(
    "touchcancel",
    () => {

      track.classList.add(
        "scroll-smooth"
      );

      if (dragMoved) {

        isAnimating =
          true;

        snapToNearestCard();

      }

      dragMoved =
        false;

    }
  );


  /* =========================================================
     PREVENT IMAGE DRAG
  ========================================================= */

  track
    .querySelectorAll("img")
    .forEach(
      img => {

        img.addEventListener(
          "dragstart",
          event => {

            event.preventDefault();

          }
        );

      }
    );


  /* =========================================================
     WINDOW RESIZE
  ========================================================= */

  window.addEventListener(
    "resize",
    () => {

      requestAnimationFrame(
        () => {

          allCards =
            Array.from(
              track.querySelectorAll(
                ".card-frame"
              )
            );

          moveTo(
            currentIndex,
            false
          );

        }
      );

    }
  );

});
/* =========================================================
   PRODUCT SHOWCASE
   4 INDEPENDENT PRODUCT SLIDERS
   PRODUCT 1 + PRODUCT 2 VISIBLE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const columns = document.querySelectorAll(".product-column");

  /* =======================================================
     LOOP THROUGH ALL 4 COLUMNS
  ======================================================= */

  columns.forEach((column) => {

    /* -----------------------------------------------------
       GET PRODUCTS
       Only direct article children
    ----------------------------------------------------- */

    const products = Array.from(
      column.querySelectorAll(":scope > article")
    );


    /* -----------------------------------------------------
       GET ARROW BUTTONS
    ----------------------------------------------------- */

    const previousButton = column.querySelector(
      'button[aria-label*="Previous"]'
    );

    const nextButton = column.querySelector(
      'button[aria-label*="Next"]'
    );


    /* -----------------------------------------------------
       SAFETY CHECK
    ----------------------------------------------------- */

    if (products.length < 2) {
      return;
    }


    if (!previousButton || !nextButton) {
      return;
    }


    /* =====================================================
       CURRENT POSITION

       0 = Product 1 first
       1 = Product 2 first
    ===================================================== */

    let currentIndex = 0;


    /* =====================================================
       SHOW PRODUCTS

       BOTH PRODUCTS ARE ALWAYS VISIBLE
    ===================================================== */

    function showProducts(index) {

      currentIndex =
        (index + products.length) % products.length;


      /*
       * PRODUCT ORDER
       *
       * If currentIndex = 0:
       * Product 1
       * Product 2
       *
       * If currentIndex = 1:
       * Product 2
       * Product 1
       */

      const orderedProducts = [
        ...products.slice(currentIndex),
        ...products.slice(0, currentIndex)
      ];


      /* ---------------------------------------------------
         Re-append products in new order
      --------------------------------------------------- */

      orderedProducts.forEach((product) => {
        column.appendChild(product);
      });

    }


    /* =====================================================
       INITIAL STATE

       BOTH PRODUCTS VISIBLE
       Product 1 first
    ===================================================== */

    showProducts(0);


    /* =====================================================
       PREVIOUS
    ===================================================== */

    previousButton.addEventListener("click", (event) => {

      event.preventDefault();
      event.stopPropagation();

      showProducts(currentIndex - 1);

    });


    /* =====================================================
       NEXT
    ===================================================== */

    nextButton.addEventListener("click", (event) => {

      event.preventDefault();
      event.stopPropagation();

      showProducts(currentIndex + 1);

    });

  });

});

/* =========================================================
   FEATURED COLLECTION / CATEGORY CARDS
   IMAGE + CONTENT SWITCHER

   AVAILABLE IMAGES ONLY:
   category1.jpg
   category2.jpg
   category3.jpg

   BUTTON CLICK:
   - Image changes
   - Label changes
   - Heading changes

   Existing HTML classes/structure remain untouched.
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================================================
     FEATURED COLLECTION SECTION
  ========================================================= */

  const section = document.querySelector(
    "section.bg-\\[\\#16090D\\]"
  );

  if (!section) return;


  /* =========================================================
     GET THE 3 EXISTING CARDS
  ========================================================= */

  const cards = Array.from(
    section.querySelectorAll(
      ":scope > div > article"
    )
  );

  if (!cards.length) return;


  /* =========================================================
     AVAILABLE IMAGES
  ========================================================= */

  const images = [
    "src/assets/images/category1.jpg",
    "src/assets/images/category2.jpg",
    "src/assets/images/category3.jpg"
  ];


  /* =========================================================
     CONTENT
     
     Each card can cycle through the 3 existing images.
  ========================================================= */

  const cardData = [

    /* =======================================================
       CARD 1
    ======================================================= */

    [
      {
        image: images[0],
        label: "Luxury Menswear",
        title: "Luxury<br />Menswear"
      },

      {
        image: images[1],
        label: "Signature Style",
        title: "Elevate<br />Your Look"
      },

      {
        image: images[2],
        label: "Define Your Style",
        title: "Define Your<br />Elegance"
      }
    ],


    /* =======================================================
       CARD 2
    ======================================================= */

    [
      {
        image: images[1],
        label: "Signature Style",
        title: "Elevate<br />Your Look"
      },

      {
        image: images[2],
        label: "Define Your Style",
        title: "Define Your<br />Elegance"
      },

      {
        image: images[0],
        label: "Luxury Menswear",
        title: "Luxury<br />Menswear"
      }
    ],


    /* =======================================================
       CARD 3
    ======================================================= */

    [
      {
        image: images[2],
        label: "Signature Style",
        title: "Define Your<br />Elegance"
      },

      {
        image: images[0],
        label: "Luxury Menswear",
        title: "Luxury<br />Menswear"
      },

      {
        image: images[1],
        label: "Signature Style",
        title: "Elevate<br />Your Look"
      }
    ]

  ];


  /* =========================================================
     CURRENT STATE
  ========================================================= */

  const currentIndexes =
    cards.map(() => 0);


  /* =========================================================
     SETUP EACH CARD
  ========================================================= */

  cards.forEach(
    (card, cardIndex) => {

      const image =
        card.querySelector("img");

      const label =
        card.querySelector("p");

      const title =
        card.querySelector("h2");

      const button =
        card.querySelector("button");


      /* =====================================================
         SAFETY CHECK
      ===================================================== */

      if (
        !image ||
        !label ||
        !title ||
        !button ||
        !cardData[cardIndex]
      ) {
        return;
      }


      /* =====================================================
         BUTTON CLICK
      ===================================================== */

      button.addEventListener(
        "click",
        event => {

          event.preventDefault();
          event.stopPropagation();


          /* ================================================
             NEXT CONTENT
          ================================================ */

          currentIndexes[cardIndex] =
            (
              currentIndexes[cardIndex] + 1
            ) %
            cardData[cardIndex].length;


          const next =
            cardData[cardIndex][
              currentIndexes[cardIndex]
            ];


          /* ================================================
             FADE OUT
          ================================================ */

          image.style.transition =
            "opacity 220ms ease";

          label.style.transition =
            "opacity 180ms ease";

          title.style.transition =
            "opacity 180ms ease";


          image.style.opacity =
            "0";

          label.style.opacity =
            "0";

          title.style.opacity =
            "0";


          /* ================================================
             CHANGE CONTENT
          ================================================ */

          setTimeout(
            () => {

              /* IMAGE */

              image.src =
                next.image;

              image.alt =
                next.label;


              /* TEXT */

              label.textContent =
                next.label;

              title.innerHTML =
                next.title;


              /* ============================================
                 FADE IN
              ============================================ */

              image.style.opacity =
                "1";

              label.style.opacity =
                "1";

              title.style.opacity =
                "1";

            },
            220
          );

        }
      );

    }
  );

});