// Add your custom scripts and animations here
// For example, use the GSAP library to create animations
gsap.from('header', {duration: 1, y: -100, opacity: 0});
gsap.from('section h2', {duration: 1, y: -50, opacity: 0, delay: 0.5, stagger: 0.5});
gsap.from('section p, section img, section ul', {duration: 1, opacity: 0, delay: 1, stagger: 0.5});
gsap.from('.about-image', {duration: 1, scale: 0, opacity: 0, delay: 0.5, ease: "back.out(1.7)"});
gsap.from('.about-text', {duration: 1, x: 200, opacity: 0, delay: 0.5});

const skillProgress = document.querySelectorAll(".skill-progress");

skillProgress.forEach((skill) => {
  const percent = skill.getAttribute("data-percent");
  const progress = document.createElement("div");
  progress.style.width = `${percent}%`;
  progress.style.height = "100%";
  progress.style.backgroundColor = "#4CAF50";
  progress.style.position = "absolute";
  progress.style.bottom = 0;
  progress.style.transformOrigin = "bottom";
  progress.style.transform = "scaleY(0)";
  skill.appendChild(progress);

  gsap.to(progress, {
    scaleY: 1,
    duration: 1,
    delay: 0.5,
    ease: "expo.out",
  });
});


function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}


const observer = new IntersectionObserver(handleIntersection);


document.querySelectorAll('.animate').forEach((element) => {
  observer.observe(element);
});
