/* A decorative, local-only illustration. This is not the PII runtime. */
(() => {
  const canvas = document.querySelector("#privacy-canvas");
  const stage = document.querySelector("#motion-stage");
  const toggle = document.querySelector("#motion-toggle");
  if (!canvas || !stage || !toggle) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const german = document.documentElement.lang === "de";
  const labels = german
    ? {
        static: "LOKAL ERKENNEN → PLATZHALTER",
        detect: "01 / ERKENNEN",
        redact: "02 / LOKAL MASKIEREN",
        preserve: "03 / KONTEXT BEWAHREN",
        play: "Animation starten",
        pause: "Animation pausieren",
      }
    : {
        static: "LOCAL DETECTION → TYPED PLACEHOLDERS",
        detect: "01 / DETECT",
        redact: "02 / REDACT LOCALLY",
        preserve: "03 / PRESERVE THE CONTEXT",
        play: "Play animation",
        pause: "Pause animation",
      };
  const phaseLabel = document.querySelector("#motion-phase");
  const examples = [
    ["mia@example.ch", "[EMAIL_1]"],
    ["756.9217.0769.85", "[AHV_1]"],
    ["mia@example.ch", "[EMAIL_1]"],
  ];
  const points = Array.from({ length: 460 }, (_, index) => {
    const y = 1 - (index / 459) * 2;
    const radius = Math.sqrt(1 - y * y);
    const angle = index * Math.PI * (3 - Math.sqrt(5));
    return { x: Math.cos(angle) * radius, y, z: Math.sin(angle) * radius };
  });
  let width = 0;
  let height = 0;
  let time = 0;
  let last = 0;
  let frameId = 0;
  let visible = false;
  let paused = preference.matches;
  let pointer = { x: 0, y: 0 };
  let targetPointer = { x: 0, y: 0 };
  let lastPhase = "";
  const clamp = (x) => Math.max(0, Math.min(1, x));
  const ease = (x) => {
    const t = clamp(x);
    return t * t * (3 - 2 * t);
  };
  const mix = (a, b, p) => a + (b - a) * p;

  function roundRect(x, y, w, h, r) {
    ctx.beginPath();
    ctx.roundRect(x, y, w, h, r);
  }

  function label(text, x, y, alpha, active, size) {
    if (alpha <= 0) return;
    ctx.save();
    ctx.globalAlpha = clamp(alpha);
    ctx.font = `${size}px "SFMono-Regular", Consolas, monospace`;
    const w = ctx.measureText(text).width + 24;
    roundRect(x - w / 2, y - 17, w, 34, 4);
    ctx.fillStyle = active ? "#d9e8cb" : "#1c4238";
    ctx.fill();
    ctx.strokeStyle = active ? "#c5d9b1" : "#638066";
    ctx.lineWidth = 0.7;
    ctx.stroke();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = active ? "#244831" : "#d4dfcd";
    ctx.fillText(text, x, y + 0.5);
    ctx.restore();
  }

  function draw(clock) {
    if (!width || !height) return;
    const mobile = width < 600;
    const compact = width < 400;
    const cx = width * 0.5 + pointer.x * (mobile ? 2 : 10);
    const cy = height * 0.5 + pointer.y * 8;
    const radius = mobile
      ? Math.min(width * 0.22, 95)
      : Math.min(height * 0.34, 151);
    const cycle = (clock % 10) / 10;
    const staticMode = preference.matches;
    const p = staticMode ? 0.65 : cycle;
    ctx.clearRect(0, 0, width, height);

    // The field is a rotating 3D point cloud projected onto a 2D canvas.
    const glow = ctx.createRadialGradient(
      cx,
      cy,
      radius * 0.05,
      cx,
      cy,
      radius * 1.7,
    );
    glow.addColorStop(0, "#8baa6d20");
    glow.addColorStop(0.5, "#77975f0e");
    glow.addColorStop(1, "#77975f00");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = "#9cba8020";
    ctx.lineWidth = 0.65;
    for (let ring = 0; ring < 4; ring += 1) {
      ctx.beginPath();
      ctx.ellipse(
        cx,
        cy,
        radius * (0.95 + ring * 0.16),
        radius * (0.95 + ring * 0.16),
        0,
        0,
        Math.PI * 2,
      );
      ctx.stroke();
    }
    ctx.save();
    ctx.setLineDash([2, 6]);
    ctx.strokeStyle = "#b8cca633";
    ctx.beginPath();
    ctx.moveTo(cx, 50);
    ctx.lineTo(cx, height - 52);
    ctx.stroke();
    ctx.restore();

    const rotation = staticMode ? 1.1 : clock * 0.23;
    const sin = Math.sin(rotation);
    const cos = Math.cos(rotation);
    const pulse = staticMode ? 1 : 1 + Math.sin(clock * 1.8) * 0.025;
    const projected = [];
    const stride = mobile ? 2 : 1;
    for (let i = 0; i < points.length; i += stride) {
      const point = points[i];
      const rx = point.x * cos - point.z * sin;
      const rz = point.x * sin + point.z * cos;
      const perspective = 3 / (3 - rz * 0.55);
      const py = point.y * Math.cos(0.22) - rz * Math.sin(0.22);
      projected.push({
        x: cx + rx * radius * 0.66 * perspective * pulse,
        y: cy + py * radius * perspective * pulse,
        z: rz,
        index: i,
      });
    }
    projected.sort((a, b) => a.z - b.z);
    for (const point of projected) {
      const alpha = 0.15 + (point.z + 1) * 0.27;
      ctx.fillStyle = `rgba(192, 218, 164, ${alpha})`;
      const size = (point.z + 1) * 0.7 + 0.65;
      ctx.beginPath();
      ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
      ctx.fill();
      if (point.index % 13 === 0) {
        ctx.strokeStyle = `rgba(172, 200, 146, ${alpha * 0.2})`;
        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
        const neighbour = projected.find(
          (candidate) => candidate.index === (point.index + 13) % points.length,
        );
        if (neighbour) ctx.lineTo(neighbour.x, neighbour.y);
        ctx.stroke();
      }
    }

    const rows = mobile ? [examples[0], examples[1]] : examples;
    rows.forEach(([raw, replacement], index) => {
      const rowOffset = (index - (rows.length - 1) / 2) * (mobile ? 82 : 84);
      const y = cy + rowOffset;
      const localPhase = staticMode ? 0.65 : (p + index * 0.065) % 1;
      const enter = ease(localPhase / 0.22);
      const breakApart = ease((localPhase - 0.23) / 0.18);
      const emerge = ease((localPhase - 0.47) / 0.22);
      const leave = 1 - ease((localPhase - 0.88) / 0.12);
      const fontSize = compact ? 9 : mobile ? 10 : 13;
      const left = mobile
        ? width * 0.23
        : mix(width * 0.15, width * 0.24, enter);
      const right = mobile
        ? width * 0.78
        : mix(width * 0.62, width * 0.8, emerge);

      ctx.strokeStyle = "#aac39518";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(width * 0.07, y);
      ctx.lineTo(width * 0.93, y);
      ctx.stroke();

      if (staticMode) {
        label(raw, left, y, 0.95, false, fontSize);
        label(replacement, right, y, 1, true, fontSize);
        return;
      }
      label(raw, left, y, enter * (1 - breakApart), false, fontSize);

      // Only fictional source glyphs appear on the local side of the boundary.
      if (breakApart > 0 && localPhase < 0.59) {
        const progress = clamp((localPhase - 0.23) / 0.36);
        ctx.font = `${fontSize}px "SFMono-Regular", Consolas, monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        [...raw].forEach((glyph, glyphIndex) => {
          const startX =
            left + (glyphIndex - (raw.length - 1) / 2) * fontSize * 0.6;
          const delay = (glyphIndex / raw.length) * 0.16;
          const progressWithDelay = ease((progress - delay) / (1 - delay));
          const angle = glyphIndex * 2.399 + clock * 0.65;
          const x = Math.min(cx - 4, mix(startX, cx - 8, progressWithDelay));
          const particleY =
            mix(y, cy, progressWithDelay) +
            Math.sin(angle) *
              radius *
              Math.sin(progressWithDelay * Math.PI) *
              0.6;
          const opacity =
            Math.sin(progressWithDelay * Math.PI) *
            (1 - ease((progress - 0.78) / 0.22));
          ctx.fillStyle = `rgba(205, 225, 183, ${opacity})`;
          ctx.fillText(glyph, x, particleY);
        });
      }
      if (emerge > 0) {
        ctx.strokeStyle = `rgba(181, 208, 151, ${0.35 * emerge * leave})`;
        ctx.beginPath();
        ctx.moveTo(cx + radius * 0.6, cy + rowOffset * 0.5);
        ctx.bezierCurveTo(
          cx + radius,
          cy + rowOffset * 0.5,
          right - 70,
          y,
          right,
          y,
        );
        ctx.stroke();
      }
      label(replacement, right, y, emerge * leave, true, fontSize);
    });

    // The central monogram stays calm while the field moves around it.
    ctx.fillStyle = "#14382f";
    ctx.beginPath();
    ctx.arc(cx, cy, mobile ? 21 : 31, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#9eb78a80";
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.font = `500 ${mobile ? 30 : 43}px "Helvetica Neue", sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#e8efdf";
    ctx.fillText("b", cx, cy - 1);

    const phase = staticMode
      ? labels.static
      : p < 0.25
        ? labels.detect
        : p < 0.48
          ? labels.redact
          : labels.preserve;
    if (phase !== lastPhase) {
      phaseLabel.textContent = phase;
      lastPhase = phase;
    }
  }

  function resize() {
    const rect = stage.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    draw(time);
  }

  function frame(now) {
    frameId = 0;
    // A media query may change before its change event reaches this frame.
    // Settle the static state immediately, including its playback controls.
    if (preference.matches) {
      paused = true;
      syncPlayback();
      return;
    }
    if (paused || !visible || document.hidden) return;
    if (last) time += Math.min((now - last) / 1000, 0.05);
    last = now;
    pointer.x = mix(pointer.x, targetPointer.x, 0.04);
    pointer.y = mix(pointer.y, targetPointer.y, 0.04);
    draw(time);
    frameId = requestAnimationFrame(frame);
  }

  function syncPlayback() {
    cancelAnimationFrame(frameId);
    frameId = 0;
    last = 0;
    if (!paused && !preference.matches && visible && !document.hidden)
      frameId = requestAnimationFrame(frame);
    const stopped = paused || preference.matches;
    toggle.textContent = stopped ? `${labels.play} ▷` : `${labels.pause} Ⅱ`;
    toggle.setAttribute("aria-label", stopped ? labels.play : labels.pause);
    toggle.hidden = preference.matches;
    draw(time);
  }

  toggle.addEventListener("click", () => {
    paused = !paused;
    syncPlayback();
  });
  stage.addEventListener("pointermove", (event) => {
    if (preference.matches || event.pointerType === "touch") return;
    const rect = stage.getBoundingClientRect();
    targetPointer = {
      x: ((event.clientX - rect.left) / width) * 2 - 1,
      y: ((event.clientY - rect.top) / height) * 2 - 1,
    };
  });
  stage.addEventListener("pointerleave", () => {
    targetPointer = { x: 0, y: 0 };
  });
  preference.addEventListener("change", () => {
    paused = preference.matches;
    syncPlayback();
  });
  document.addEventListener("visibilitychange", syncPlayback);
  new ResizeObserver(resize).observe(stage);
  new IntersectionObserver(
    (entries) => {
      visible = entries[0].isIntersecting;
      syncPlayback();
    },
    { threshold: 0.05 },
  ).observe(stage);
  stage.classList.add("motion-ready");
  resize();
  syncPlayback();
})();
