window.addEventListener('load', () => {
  const container = document.querySelector('.container');
  container.style.visibility = 'visible';

  // Function to animate the initial divs (1 to 5)
  const initialAnimation = () => {
    const tl = gsap.timeline();

    tl.from(".one", 0.7, { opacity: 0, y: 10 })
      .to(".one", 0.7, { opacity: 0, y: 10 }, "+=3.5")
      .from(".two", 0.7, { opacity: 0, y: 10 })
      .to(".two", 0.7, { opacity: 0, y: 10 }, "+=3.5")
      .from(".three", 0.7, { opacity: 0, y: 10 })
      .to(".three", 0.7, { opacity: 0, y: 10 }, "+=3")
      .from(".four", 0.7, { scale: 0.2, opacity: 0 })
      .from(".fake-btn", 0.3, { scale: 0.2, opacity: 0 })
      .to(".four", 0.7, { scale: 0.2, opacity: 0 }, "+=4")
      .from(".five", 0.7, { scale: 0.2, opacity: 0 });
  };

  initialAnimation();

  // Show "Turn on the Lights" button after initial content is displayed
  setTimeout(() => {
    const turnOnLightsBtn = document.getElementById('turnOnLights');
    turnOnLightsBtn.style.display = 'block';

    turnOnLightsBtn.addEventListener('click', () => {
      document.body.style.backgroundColor = "#FAD02E";  // Peach color

      // Hide this button and show "Let's Decorate"
      turnOnLightsBtn.style.display = 'none';
      document.getElementById('letsDecorate').style.display = 'block';
    });
  }, 5000);

  // Handle "Let's Decorate" button
  document.getElementById('letsDecorate').addEventListener('click', () => {
    // Show the decoration image at the center of the screen
    const decorationImg = document.getElementById('decorationImage');
    decorationImg.style.display = 'block';
    decorationImg.style.position = 'absolute';
    decorationImg.style.top = '15%';
    decorationImg.style.left = '50%';
    decorationImg.style.transform = 'translateX(-50%)';

    // Start balloons
    startBalloons();
  });

  // Balloons flying animation
  const startBalloons = ()
