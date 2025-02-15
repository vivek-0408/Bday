window.addEventListener('load', () => {
    const container = document.querySelector('.container');
    container.style.visibility = 'visible';
  
    // Function to animate the initial divs (1 to 5)
    const initialAnimation = () => {
      const tl = gsap.timeline();
  
         tl.to(".container", 0.6, {
        visibility: "visible"
    })
    .from(".one", 0.7, {
        opacity: 0,
        y: 10
    })
    .from(".two", 0.4, {
        opacity: 0,
        y: 10
    })
    .to(".one",
        0.7,
        {
            opacity: 0,
            y: 10
        },
    "+=3.5")
    .to(".two",
        0.7,
        {
            opacity: 0,
            y: 10
        },
    "-=1")
    .from(".three", 0.7, {
        opacity: 0,
        y: 10
    })
    .to(".three",
        0.7,
        {
            opacity: 0,
            y: 10
        },
    "+=3")
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
    .from(
        ".idea-5",
        0.7, {
            rotationX: 15,
            rotationZ: -10,
            skewY: "-5deg",
            y: 50,
            z: 10,
            opacity: 0,
        },
        "+=1.5"
    )
    .to(
        ".idea-5 span",
        0.7, {
            rotation: 90,
            x: 8,
        },
        "+=1.4"
    )
    .to(
        ".idea-5",
        0.7, {
            scale: 0.2,
            opacity: 0,
        },
        "+=2"
    )
    .staggerFrom(
        ".idea-6 span",
        0.8, {
            scale: 3,
            opacity: 0,
            rotation: 15,
            ease: Expo.easeOut,
        },
        0.2
    );
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
    const startBalloons = () => {
      const balloons = ['balloon1.svg', 'balloon2.svg', 'balloon3.svg'];
  
      setInterval(() => {
        const balloon = document.createElement('img');
        balloon.src = balloons[Math.floor(Math.random() * balloons.length)];
        balloon.style.position = 'absolute';
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.bottom = '-100px';
        document.body.appendChild(balloon);
  
        gsap.to(balloon, 5, {
          bottom: '100%',
          repeat: -1,
          yoyo: true
        });
      }, 1000);
    };
  
    // Show "Play Music" button
    setTimeout(() => {
      document.getElementById('playMusic').style.display = 'block';
    }, 10000);
  
    // Handle "Play Music" button
    document.getElementById('playMusic').addEventListener('click', () => {
      const song = document.querySelector('.song');
      song.play();
  
      document.getElementById('playMusic').style.display = 'none';
  
      // Show "Let us cut the cake" button
      document.getElementById('cakeButton').style.display = 'block';
    });
  
    // Handle "Let us cut the cake" button
    document.getElementById('cakeButton').addEventListener('click', () => {
      // Show the cake image
      const cakeImg = document.getElementById('cakeImage');
      cakeImg.style.display = 'block';
      cakeImg.style.position = 'absolute';
      cakeImg.style.bottom = '20%';
      cakeImg.style.left = '50%';
      cakeImg.style.transform = 'translateX(-50%)';
    });
  
    // Final "Happy Birthday" message with typewriter effect
    setTimeout(() => {
      showFinalMessage();
      document.getElementById('restartButton').style.display = 'block';
    }, 17000);
  
    const showFinalMessage = () => {
      const finalTextbox = document.getElementById('finalTextbox');
      finalTextbox.style.display = 'block';
  
      const message = document.getElementById('finalMessage');
      const text = "Wishing you a fabulous year ahead filled with joy!";
      let i = 0;
      message.innerText = '';
      const interval = setInterval(() => {
        message.innerText += text[i];
        i++;
        if (i === text.length) clearInterval(interval);
      }, 100);
    };
  
    // Handle "Click Here if you want to start again" button
    document.getElementById('restartButton').addEventListener('click', () => {
      location.reload();
    });
  });
  
