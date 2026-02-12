const nav = document.querySelector("nav");
const menuBtn = document.querySelector(".menu-btn");
const revealItems = document.querySelectorAll(".reveal");
const yearNode = document.querySelector("#year");
const billingButtons = document.querySelectorAll(".billing-toggle button");
const planName = document.querySelector("#plan-name");
const planPrice = document.querySelector("#plan-price");
const planTerm = document.querySelector("#plan-term");
const planBadge = document.querySelector("#plan-badge");
const planFeature1 = document.querySelector("#plan-feature-1");
const planFeature2 = document.querySelector("#plan-feature-2");
const planFeature3 = document.querySelector("#plan-feature-3");
const planCta = document.querySelector("#plan-cta");
const reviewsTrack = document.querySelector("#reviews-track");
const reviewsPrev = document.querySelector("#reviews-prev");
const reviewsNext = document.querySelector("#reviews-next");
const miniSignup = document.querySelector("#mini-signup");
const signupBtn = document.querySelector("#signup-btn");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item, index) => {
  const isFaqItem = Boolean(item.closest(".faq"));
  const delay = isFaqItem ? 0 : Math.min(index * 40, 320);
  item.style.transitionDelay = `${delay}ms`;
  observer.observe(item);
});

const planContent = {
  monthly: {
    name: "Monthly",
    price: "$14.99",
    term: "/month",
    badge: "Standard",
    cta: "Subscribe Monthly",
    feature1: "AI in your messages",
    feature2: "Photo and screenshot analysis",
    feature3: "Cancel anytime",
  },
  yearly: {
    name: "Yearly",
    price: "$89.94",
    term: "/year",
    badge: "50% Off",
    cta: "Subscribe Yearly",
    feature1: "Everything in monthly",
    feature2: "Best annual value",
    feature3: "Save 50% vs monthly billing",
  },
};

function setPlan(planKey) {
  const plan = planContent[planKey];
  if (!plan || !planName || !planPrice || !planTerm || !planBadge || !planFeature1 || !planFeature2 || !planFeature3 || !planCta) {
    return;
  }

  planName.textContent = plan.name;
  planPrice.textContent = plan.price;
  planTerm.textContent = plan.term;
  planBadge.textContent = plan.badge;
  planFeature1.textContent = plan.feature1;
  planFeature2.textContent = plan.feature2;
  planFeature3.textContent = plan.feature3;
  planCta.textContent = plan.cta;

  billingButtons.forEach((button) => {
    const isActive = button.dataset.plan === planKey;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

billingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setPlan(button.dataset.plan);
  });
});

setPlan("monthly");

function getReviewStep() {
  if (!reviewsTrack) {
    return 0;
  }

  const firstCard = reviewsTrack.querySelector(".review");
  const gap = 16;
  return firstCard ? firstCard.clientWidth + gap : 0;
}

function goToNextReview() {
  if (!reviewsTrack) {
    return;
  }

  const step = getReviewStep();
  const maxLeft = reviewsTrack.scrollWidth - reviewsTrack.clientWidth;
  if (reviewsTrack.scrollLeft + step >= maxLeft - 4) {
    reviewsTrack.scrollTo({ left: 0, behavior: "smooth" });
    return;
  }

  reviewsTrack.scrollBy({ left: step, behavior: "smooth" });
}

function goToPrevReview() {
  if (!reviewsTrack) {
    return;
  }

  const step = getReviewStep();
  const maxLeft = reviewsTrack.scrollWidth - reviewsTrack.clientWidth;
  if (reviewsTrack.scrollLeft <= 4) {
    reviewsTrack.scrollTo({ left: maxLeft, behavior: "smooth" });
    return;
  }

  reviewsTrack.scrollBy({ left: -step, behavior: "smooth" });
}

if (reviewsNext) {
  reviewsNext.addEventListener("click", goToNextReview);
}

if (reviewsPrev) {
  reviewsPrev.addEventListener("click", goToPrevReview);
}

let reviewsAutoTimer = null;

function startReviewsAuto() {
  if (!reviewsTrack) {
    return;
  }

  stopReviewsAuto();
  reviewsAutoTimer = setInterval(goToNextReview, 5000);
}

function stopReviewsAuto() {
  if (reviewsAutoTimer) {
    clearInterval(reviewsAutoTimer);
    reviewsAutoTimer = null;
  }
}

if (reviewsTrack) {
  reviewsTrack.addEventListener("mouseenter", stopReviewsAuto);
  reviewsTrack.addEventListener("mouseleave", startReviewsAuto);
  reviewsTrack.addEventListener("touchstart", stopReviewsAuto, { passive: true });
  reviewsTrack.addEventListener("touchend", startReviewsAuto);
  startReviewsAuto();
}

if (miniSignup && signupBtn) {
  const defaultBtnText = signupBtn.textContent;
  miniSignup.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!miniSignup.checkValidity()) {
      miniSignup.reportValidity();
      return;
    }

    miniSignup.classList.add("is-sent");
    signupBtn.textContent = "Thanks! You're in";
    signupBtn.disabled = true;

    window.setTimeout(() => {
      signupBtn.textContent = defaultBtnText;
      signupBtn.disabled = false;
      miniSignup.classList.remove("is-sent");
    }, 1800);
  });
}
