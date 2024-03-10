Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

// getting current mouse position and moving the .video class in that direction by 3px for 1s
const video = document.querySelector(".video");

window.addEventListener("mousemove", (e) => {
  video.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  video.style.transition = "all 1s ease";
  const deltax = e.clientX - window.innerWidth / 2;
  const deltay = e.clientY - window.innerHeight / 2;
  const theta = (Math.atan2(deltay, deltax) * 180) / Math.PI;
  const x = Math.sin(theta - 180) * 30;
  const y = Math.cos(180-theta  ) * 30;
  video.style.transform = `translate(${x}px, ${y}px)`;
  video.style.transition = "all 1s ease";
});
//you also may use it on mouseup,it's all up to you,Muhammadkhairy
$(function () {
  $("button").on("mouseenter, mouseout", function (e) {
    var elOffset = $(this).offset(),
      dX = e.pageX - elOffset.left,
      dY = e.pageY - elOffset.top;
    $(this).find("span").css({ top: dY, left: dX });
  });
});
function openlinktree() {
  // Opening this https://anurag-singh.vercel.app/ in new tab
  window.open('https://anurag-singh.vercel.app/', '_blank');
}
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)