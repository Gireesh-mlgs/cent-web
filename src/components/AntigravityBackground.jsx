import React, { useEffect, useRef } from 'react';

const AntigravityBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set initial size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];
    // Using theme neon yellow and transparent ghost whites
    const colors = ['rgba(212, 255, 54, 0.8)', 'rgba(212, 255, 54, 0.4)', 'rgba(255, 255, 255, 0.2)'];

    // Track mouse
    let mouse = {
      x: null,
      y: null,
      radius: 140
    };

    const handleMouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };
    
    // Smooth reset on mouse leave
    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    class Particle {
      constructor(x, y, vx, vy, size, color) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.size = size;
        this.color = color;
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
      
      update() {
        // Bounce off edges smoothly
        if (this.x > canvas.width || this.x < 0) this.vx = -this.vx;
        if (this.y > canvas.height || this.y < 0) this.vy = -this.vy;

        let dx = (mouse.x || -1000) - this.x;
        let dy = (mouse.y || -1000) - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        // Antigravity repel effect
        if (mouse.x !== null && distance < mouse.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const maxDistance = mouse.radius;
          const force = (maxDistance - distance) / maxDistance;
          // Multiply by strong force scaler to push particles violently away, simulating anti-gravity fields
          const directionX = forceDirectionX * force * 6;
          const directionY = forceDirectionY * force * 6;

          this.x -= directionX;
          this.y -= directionY;
        } else {
          // Standard drifter
          this.x += this.vx;
          this.y += this.vy;
        }

        this.draw();
      }
    }

    const init = () => {
      particlesArray = [];
      // Calculate responsive number of particles
      let numberOfParticles = (canvas.height * canvas.width) / 9500;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1; // 1 to 3px radius
        let x = Math.random() * (window.innerWidth - size * 2) + size * 2;
        let y = Math.random() * (window.innerHeight - size * 2) + size * 2;
        let vx = (Math.random() - 0.5) * 1.5; // velocity x
        let vy = (Math.random() - 0.5) * 1.5; // velocity y
        let color = colors[Math.floor(Math.random() * colors.length)];
        particlesArray.push(new Particle(x, y, vx, vy, size, color));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    // Draw connecting lines if nodes are close
    const connect = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let distance = 
            ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) +
            ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
            
          if (distance < 16000) {
            let opacity = 1 - (distance / 16000);
            ctx.strokeStyle = `rgba(212, 255, 54, ${opacity * 0.4})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', handleResize);

    init();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="antigravity-canvas" />;
};

export default AntigravityBackground;
