document.addEventListener('DOMContentLoaded', () => {
  const carouselContainer = document.querySelector('.carousel-container');
  if (!carouselContainer) return;

  const carousel = carouselContainer.querySelector('.project-carousel');
  const prevButton = carouselContainer.querySelector('.carousel-arrow.prev');
  const nextButton = carouselContainer.querySelector('.carousel-arrow.next');
  const timerBar = carouselContainer.querySelector('.carousel-timer');

  if (carousel && prevButton && nextButton && timerBar) {
    let projectCards = carousel.querySelectorAll('.project-card');
    let cardWidth = projectCards[0].getBoundingClientRect().width;
    let currentIndex = 1;
    let autoScrollInterval;

    const setupCarousel = () => {
      projectCards = carousel.querySelectorAll('.project-card');
      const firstClone = projectCards[0].cloneNode(true);
      const lastClone = projectCards[projectCards.length - 1].cloneNode(true);

      carousel.appendChild(firstClone);
      carousel.insertBefore(lastClone, projectCards[0]);

      projectCards = carousel.querySelectorAll('.project-card');
      carousel.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
      startAutoScroll();
    };

    const startAutoScroll = () => {
      clearInterval(autoScrollInterval);
      autoScrollInterval = setInterval(() => {
        moveToNext();
      }, 10000);
      resetTimerAnimation();
    };

    const resetTimerAnimation = () => {
      timerBar.style.animation = 'none';
      void timerBar.offsetWidth; // Trigger reflow
      timerBar.style.animation = 'timer 10s linear forwards';
    };

    const transitionEndHandler = () => {
      if (currentIndex === 0) {
        carousel.style.transition = 'none';
        currentIndex = projectCards.length - 2;
        carousel.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
      } else if (currentIndex === projectCards.length - 1) {
        carousel.style.transition = 'none';
        currentIndex = 1;
        carousel.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
      }
    };

    carousel.addEventListener('transitionend', transitionEndHandler);

    const moveToNext = () => {
      if (currentIndex >= projectCards.length - 1) return;
      carousel.style.transition = 'transform 0.5s ease-in-out';
      currentIndex++;
      carousel.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
      startAutoScroll();
    };

    const moveToPrev = () => {
      if (currentIndex <= 0) return;
      carousel.style.transition = 'transform 0.5s ease-in-out';
      currentIndex--;
      carousel.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
      startAutoScroll();
    };

    nextButton.addEventListener('click', moveToNext);
    prevButton.addEventListener('click', moveToPrev);

    window.addEventListener('resize', () => {
      cardWidth = projectCards[0].getBoundingClientRect().width;
      carousel.style.transition = 'none';
      carousel.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
    });

    setupCarousel();
  }
});
