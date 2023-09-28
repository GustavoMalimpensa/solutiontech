import React, { useEffect, useState } from 'react';
import {  TweenLite, Circ } from 'gsap'; // Importe as bibliotecas GSAP necessárias

function HeaderAnimation() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;

    // Função de inicialização do cabeçalho
    function initHeader() {
      width = window.innerWidth;
      height = window.innerHeight;
      target = { x: width / 2, y: height / 2 };

      largeHeader = document.getElementById('large-header');
      largeHeader.style.height = height + 'px';

      canvas = document.getElementById('demo-canvas');
      canvas.width = width;
      canvas.height = height;
      ctx = canvas.getContext('2d');

      // Crie os pontos
      points = [];
      for (let x = 0; x < width; x = x + width / 20) {
        for (let y = 0; y < height; y = y + height / 20) {
          let px = x + Math.random() * width / 20;
          let py = y + Math.random() * height / 20;
          let p = { x: px, originX: px, y: py, originY: py };
          points.push(p);
        }
      }

      // Para cada ponto, encontre os 5 pontos mais próximos
      for (let i = 0; i < points.length; i++) {
        let closest = [];
        let p1 = points[i];
        for (let j = 0; j < points.length; j++) {
          let p2 = points[j];
          if (!(p1 === p2)) {
            let placed = false;
            for (let k = 0; k < 5; k++) {
              if (!placed) {
                if (closest[k] === undefined) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }

            for (let k = 0; k < 5; k++) {
              if (!placed) {
                if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }
          }
        }
        p1.closest = closest;
      }

      // Atribua um círculo a cada ponto
      for (let i in points) {
        let c = new Circle(points[i], 2 + Math.random() * 2, 'rgba(255,255,255,0.3)');
        points[i].circle = c;
      }
    }

    // Função de detecção de movimento do mouse
    function updateMousePosition(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }

    // Função de verificação de rolagem
    function scrollCheck() {
      if (document.body.scrollTop > height) animateHeader = false;
      else animateHeader = true;
    }

    // Função de redimensionamento
    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      largeHeader.style.height = height + 'px';
      canvas.width = width;
      canvas.height = height;
    }

    // Função de inicialização da animação
    function initAnimation() {
      animate();
      for (let i in points) {
        shiftPoint(points[i]);
      }
    }

    // Função de animação principal
    function animate() {
      if (animateHeader) {
        ctx.clearRect(0, 0, width, height);
        for (let i in points) {
          // Detectar pontos na faixa
          if (Math.abs(getDistance(target, points[i])) < 4000) {
            points[i].active = 0.3;
            points[i].circle.active = 0.6;
          } else if (Math.abs(getDistance(target, points[i])) < 20000) {
            points[i].active = 0.1;
            points[i].circle.active = 0.3;
          } else if (Math.abs(getDistance(target, points[i])) < 40000) {
            points[i].active = 0.02;
            points[i].circle.active = 0.1;
          } else {
            points[i].active = 0;
            points[i].circle.active = 0;
          }

          drawLines(points[i]);
          points[i].circle.draw();
        }
      }
      requestAnimationFrame(animate);
    }

    // Função para mover um ponto
    function shiftPoint(p) {
      TweenLite.to(p, 1 + 1 * Math.random(), {
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        ease: Circ.easeInOut,
        onComplete: function () {
          shiftPoint(p);
        }
      });
    }

    // Função para desenhar linhas entre pontos
    function drawLines(p) {
      if (!p.active) return;
      for (let i in p.closest) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.closest[i].x, p.closest[i].y);
        ctx.strokeStyle = 'rgba(156,217,249,' + p.active + ')';
        ctx.stroke();
      }
    }

    // Classe Circle
    function Circle(pos, rad, color) {
      let _this = this;

      (function () {
        _this.pos = pos || null;
        _this.radius = rad || null;
        _this.color = color || null;
      })();

      this.draw = function () {
        if (!_this.active) return;
        ctx.beginPath();
        ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'rgba(156,217,249,' + _this.active + ')';
        ctx.fill();
      };
    }

    // Função utilitária para calcular a distância entre dois pontos
    function getDistance(p1, p2) {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }

    // Inicialize o cabeçalho e a animação
    initHeader();
    initAnimation();

    // Adicione ouvintes de eventos
    if (!('ontouchstart' in window)) {
      window.addEventListener('mousemove', updateMousePosition);
    }
    window.addEventListener('scroll', scrollCheck);
    window.addEventListener('resize', resize);

    // Remova os ouvintes de eventos no desmonte
    return () => {
      if (!('ontouchstart' in window)) {
        window.removeEventListener('mousemove', updateMousePosition);
      }
      window.removeEventListener('scroll', scrollCheck);
      window.removeEventListener('resize', resize);
    };
  }, []); // useEffect executado apenas uma vez no montagem inicial

  return (
    <div id="large-header">
      <canvas id="demo-canvas"></canvas>
    </div>
  );
}

export default HeaderAnimation;
