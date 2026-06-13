/* ============================================
   大学恋爱指南 - 交互脚本
   ============================================ */

// ----- 导航栏滚动效果 -----
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ----- 移动端汉堡菜单 -----
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("open");
});

// 点击导航链接后关闭菜单
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("open");
  });
});

// ----- 导航高亮（Intersection Observer） -----
const sections = document.querySelectorAll(".section, .hero");
const navItems = document.querySelectorAll(".nav-links a");

const observerOptions = {
  root: null,
  rootMargin: "-40% 0px -55% 0px",
  threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navItems.forEach((link) => {
        const linkSection = link.getAttribute("data-section");
        if (id === "hero" && linkSection === "self") {
          // Hero 可见时清除高亮
        } else if (linkSection === id || (id === "hero" && !linkSection)) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });

      // 精确高亮
      navItems.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("data-section") === id) {
          link.classList.add("active");
        }
      });
    }
  });
}, observerOptions);

sections.forEach((section) => observer.observe(section));

// ----- 板块滚动渐入动画 -----
const fadeSections = document.querySelectorAll(".section");

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

fadeSections.forEach((section) => fadeObserver.observe(section));

// Hero 立即可见
document.querySelector(".hero").style.opacity = "1";

// ----- 误区卡片翻转（点击翻转，可再次点击翻回） -----
const mythCards = document.querySelectorAll(".myth-card");
mythCards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});

// ----- 小贴士翻转卡片（点击翻转，可再次点击翻回） -----
const flipCards = document.querySelectorAll(".flip-card");
flipCards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});
