// Animations
import AOS from 'aos';

export const animateOnScroll = AOS.init({
  once: true,
  easing: 'ease-in-sine',
  duration: 1000,
  disable: 'mobile',
});
