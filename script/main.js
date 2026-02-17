window.addEventListener('load', () => {

    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg"
    };

    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-15deg"
    };

    const tl = gsap.timeline({
        paused: true,
        onComplete: showLightsButton   // ✅ FIX
    });

    let audio = document.getElementById("bdsong");
    audio.play().catch(() => {});

    tl.to(".container", 0.6, { visibility: "visible" })
      .from(".one", 0.7, { opacity: 0, y: 10 })
      .from(".two", 0.4, { opacity: 0, y: 10 })
      .to(".one", 0.7, { opacity: 0, y: 10 }, "+=3.5")
      .to(".two", 0.7, { opacity: 0, y: 10 }, "-=1")
      .from(".three", 0.7, { opacity: 0, y: 10 })
      .to(".three", 0.7, { opacity: 0, y: 10 }, "+=3")
      .from(".idea-1", 0.7, ideaTextTrans)
      .to(".idea-1", 0.7, ideaTextTransLeave, "+=2.5")
      .from(".idea-2", 0.7, ideaTextTrans)
      .to(".idea-2", 0.7, ideaTextTransLeave, "+=2.5")
      .from(".idea-3", 0.7, ideaTextTrans)
      .to(".idea-3 strong", 0.5, {
          scale: 1.2,
          x: 10,
          backgroundColor: "rgb(21, 161, 237)",
          color: "#fff",
      })
      .to(".idea-3", 0.7, ideaTextTransLeave, "+=2.5")
      .from(".idea-4", 0.7, ideaTextTrans)
      .to(".idea-4", 0.7, ideaTextTransLeave, "+=2.5")
      .from(".idea-5", 0.7, {
          rotationX: 15,
          rotationZ: -10,
          skewY: "-5deg",
          y: 50,
          z: 10,
          opacity: 0,
      }, "+=1.5")
      .to(".idea-5 span", 0.7, { rotation: 90, x: 8 }, "+=1.4")
      .to(".idea-5", 0.7, { scale: 0.2, opacity: 0 }, "+=2")
      .staggerFrom(".idea-6 span", 0.8, {
          scale: 3,
          opacity: 0,
          rotation: 15,
          ease: "expo.out",
      }, 0.2)
      .staggerTo(".idea-6 span", 0.8, {
          scale: 3,
          opacity: 0,
          rotation: -15,
          ease: "expo.out",
      }, 0.2, "+=1.5");

    tl.play();

    // ✅ Properly called AFTER timeline finishes
    function showLightsButton() {
        const btn = document.querySelector(".turn-on-lights-btn");
        btn.classList.add("visible");
        btn.querySelector("button").innerText = "Turn on the Lights (Click Me)";
    }

    document.getElementById("turn-on-lights").addEventListener("click", () => {
        document.body.classList.add("peach-background");
        document.querySelector(".turn-on-lights-btn")
            .classList.remove("visible");
    });

});
