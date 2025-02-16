// Wait until the window is fully loaded
window.addEventListener('load', () => {
    
    
    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg"
    }

    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-15deg"
    }
    
    const tl = gsap.timeline({paused: true});
    
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
        ease: Expo.easeOut,
    }, 0.2)
     .staggerTo(
        ".idea-6 span",
        0.8, {
            scale: 3,
            opacity: 0,
            rotation: -15,
            ease: Expo.easeOut,
        },
        0.2,
        "+=1.5"
    );
    /*.to('#turn-on-lights', 0.5, {
        opacity: 1,  // Make sure the button is visible
        delay: 1,  // Delay the button appearance a bit after other animations
        onComplete: () => {
            document.getElementById('turn-on-lights').addEventListener('click', () => {
                document.body.style.backgroundColor = 'peachpuff';
                gsap.to('#turn-on-lights', 0.5, { opacity: 0 });  // Fade out the button
                showDecorateButton(); // Call the next action
            });
        }
    });*/
    console.log("SO completed");
    //tl.play();

    // Event listener for turning on the lights
    
    turnOnLightsBtn.style.opacity = 1;
    const turnOnLightsBtn = document.getElementById('turn-on-lights');
    console.log("getelement");
    turnOnLightsBtn.addEventListener('click', () => {
        console.log('Button clicked');
        document.body.style.backgroundColor = 'peachpuff'; // Change background color
        turnOnLightsBtn.style.opacity = 0; // Fade out the button
        showDecorateButton();
    });
    console.log("i am there");
   /* 
    const turnOnLightsBtn = document.getElementById('turn-on-lights');
    console.log(turnOnLightsBtn); // Check if the button is found in the DOM
    console.log("Hello World");

if (turnOnLightsBtn) {
    turnOnLightsBtn.addEventListener('click', () => {
        document.body.style.backgroundColor = 'peachpuff'; // Change background color
        turnOnLightsBtn.style.opacity = 0; // Fade out the button
        showDecorateButton();
    });
} else {
    console.log("Button not found!");
}
*/
    // Show decoration button
    function showDecorateButton() {
        console.log("showDecorateButton called!");
        const decorateBtn = document.createElement('button');
        decorateBtn.innerText = "Let's Decorate";
        decorateBtn.classList.add('button');
        document.body.appendChild(decorateBtn);

        decorateBtn.addEventListener('click', () => {
            // Show decoration image
            const decorationImage = document.createElement('img');
            decorationImage.src = 'decoration.png';
            decorationImage.classList.add('decoration-image');
            document.body.appendChild(decorationImage);

            // Start background balloons
            startBalloons();

            decorateBtn.style.opacity = 0; // Fade out the button
            showPlayMusicButton();
        });
    }

    // Start background balloons animation
    function startBalloons() {
        const balloon1 = document.createElement('img');
        const balloon2 = document.createElement('img');
        const balloon3 = document.createElement('img');
        balloon1.src = 'balloon1.svg';
        balloon2.src = 'balloon2.svg';
        balloon3.src = 'balloon3.svg';

        balloon1.classList.add('balloon');
        balloon2.classList.add('balloon');
        balloon3.classList.add('balloon');

        document.body.appendChild(balloon1);
        document.body.appendChild(balloon2);
        document.body.appendChild(balloon3);

        // Animation loop for flying balloons
        gsap.to([balloon1, balloon2, balloon3], {
            y: -1500,
            repeat: -1,
            duration: 8,
            stagger: 1
        });
    }

    // Show the play music button
    function showPlayMusicButton() {
        const playMusicBtn = document.createElement('button');
        playMusicBtn.innerText = "Play Music";
        playMusicBtn.classList.add('button');
        document.body.appendChild(playMusicBtn);

        playMusicBtn.addEventListener('click', () => {
            const music = new Audio('song.mp3');
            music.loop = true;
            music.play();
            playMusicBtn.style.opacity = 0;
            showCakeButton(music);
        });
    }

    // Show cake button
    function showCakeButton(music) {
        const cakeBtn = document.createElement('button');
        cakeBtn.innerText = "Let us cut the cake";
        cakeBtn.classList.add('button');
        document.body.appendChild(cakeBtn);

        cakeBtn.addEventListener('click', () => {
            // Show cake image
            const cakeImage = document.createElement('img');
            cakeImage.src = 'cake.png';
            cakeImage.classList.add('cake-image');
            document.body.appendChild(cakeImage);

            // Position cake image
            cakeImage.style.position = 'absolute';
            cakeImage.style.left = '50%';
            cakeImage.style.transform = 'translateX(-50%)';
            cakeImage.style.bottom = '20%';

            cakeBtn.style.opacity = 0;
            setTimeout(() => {
                stopBalloonsAndRemoveImages(music);
            }, 7000); // Wait for 7 seconds before moving to next step
        });
    }

    // Stop balloons and remove images
    function stopBalloonsAndRemoveImages(music) {
        document.querySelectorAll('.balloon').forEach(balloon => balloon.remove());
        document.querySelector('.decoration-image')?.remove();
        document.querySelector('.cake-image')?.remove();

        music.pause(); // Stop the music
        showFinalTextbox();
    }

    // Show final textbox with SVG circles
    function showFinalTextbox() {
        const finalTextboxContainer = document.createElement('div');
        finalTextboxContainer.classList.add('final-textbox-container');
        document.body.appendChild(finalTextboxContainer);

        const finalHeading = document.createElement('h2');
        finalHeading.classList.add('final-heading');
        finalHeading.innerText = 'Happy Birthday to You!';
        finalTextboxContainer.appendChild(finalHeading);

        const finalMessage = document.createElement('p');
        finalMessage.classList.add('final-message');
        finalMessage.innerText = 'Wishing you a fantastic year ahead! 🎉🎂';
        finalTextboxContainer.appendChild(finalMessage);

        // Add SVG Circles Background
        const svgCircle = document.createElement('svg');
        svgCircle.classList.add('svg-circle');
        finalTextboxContainer.appendChild(svgCircle);
        
        svgCircle.innerHTML = `<circle cx="50%" cy="50%" r="200" fill="none" stroke="#fff" stroke-width="2" />`;
    }

    // Restart button function
    function addRestartButton() {
        const restartBtn = document.createElement('button');
        restartBtn.innerText = "Click Here if you want to start again";
        restartBtn.classList.add('button');
        document.body.appendChild(restartBtn);

        restartBtn.addEventListener('click', () => {
            location.reload(); // Reload the page to restart the flow
        });
    }

    // Add Restart Button after the final message appears
    setTimeout(() => {
        addRestartButton();
    }, 3000); // After 3 seconds, show restart button
    tl.play();
});
