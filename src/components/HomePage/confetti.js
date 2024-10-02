let startConfetti;

(function() {
    const maxParticleCount = 150; // Número máximo de partículas
    const particleSpeed = 2; // Velocidad de las partículas
    const colors = [
        "DodgerBlue", "OliveDrab", "Gold", "Pink",
        "SlateBlue", "LightBlue", "Violet", "PaleGreen",
        "SteelBlue", "SandyBrown", "Chocolate", "Crimson"
    ];
    
    let streamingConfetti = false;
    let animationTimer = null;
    let particles = [];
    let waveAngle = 0;

    function resetParticle(particle, width, height) {
        particle.color = colors[(Math.random() * colors.length) | 0];
        particle.x = Math.random() * width;
        particle.y = Math.random() * height - height + 100; // Aumentar 100 px
        particle.diameter = Math.random() * 10 + 5;
        particle.tilt = Math.random() * 10 - 10;
        particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
        particle.tiltAngle = 0;
        return particle;
    }

    function startConfettiInner(container) {
        const rect = container.getBoundingClientRect(); // Obtener la posición del contenedor
        const width = rect.width;
        const height = rect.height;

        const canvasId = "confetti-canvas"; 

        // Crear el lienzo de confetti si no existe
        let canvas = document.getElementById(canvasId);
        if (!canvas) {
            canvas = document.createElement("canvas");
            canvas.setAttribute("id", canvasId);
            // Ajustar el z-index para que esté detrás del NavBar
            canvas.setAttribute("style", "display:block;z-index:1;pointer-events:none;position:absolute;top:100px;left:0;"); // Establecer top a 100px
            container.appendChild(canvas); // Agregar el canvas al contenedor
            canvas.width = width;
            canvas.height = height;

            // Ajustar el tamaño del lienzo cuando el contenedor cambie de tamaño
            window.addEventListener("resize", function() {
                canvas.width = container.clientWidth;
                canvas.height = container.clientHeight;
            }, true);
        } else {
            canvas.width = width; // Actualizar el ancho
            canvas.height = height; // Actualizar la altura
        }

        const context = canvas.getContext("2d");
        while (particles.length < maxParticleCount) {
            particles.push(resetParticle({}, width, height));
        }

        streamingConfetti = true;

        if (animationTimer === null) {
            (function runAnimation() {
                context.clearRect(0, 0, width, height);
                updateParticles();
                drawParticles(context);
                animationTimer = requestAnimationFrame(runAnimation);
            })();
        }
    }


    function updateParticles() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        waveAngle += 0.01;
        
        for (let i = 0; i < particles.length; i++) {
            const particle = particles[i];
            if (!streamingConfetti && particle.y < -15) {
                particle.y = height + 100;
            } else {
                particle.tiltAngle += particle.tiltAngleIncrement;
                particle.x += Math.sin(waveAngle);
                particle.y += (Math.cos(waveAngle) + particle.diameter + particleSpeed) * 0.5;
                particle.tilt = Math.sin(particle.tiltAngle) * 15;
            }

            if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
                if (streamingConfetti && particles.length <= maxParticleCount) {
                    resetParticle(particle, width, height);
                } else {
                    particles.splice(i, 1);
                    i--;
                }
            }
        }
    }

    function drawParticles(context) {
        for (let i = 0; i < particles.length; i++) {
            const particle = particles[i];
            context.beginPath();
            context.lineWidth = particle.diameter;
            context.strokeStyle = particle.color;
            const x = particle.x + particle.tilt;
            context.moveTo(x + particle.diameter / 2, particle.y);
            context.lineTo(x, particle.y + particle.tilt + particle.diameter / 2);
            context.stroke();
        }
    }

    startConfetti = startConfettiInner;
})();

export default startConfetti;


