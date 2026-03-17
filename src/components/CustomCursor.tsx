import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { applyRouteCursorTheme } from '../lib/cursorTheme';

const INTERACTIVE_SELECTOR = [
  'a',
  'button',
  '[role="button"]',
  'input',
  'select',
  'textarea',
  'label',
  'summary'
].join(', ');

const CustomCursor = () => {
  const location = useLocation();
  const cursorRef = useRef<HTMLDivElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const delayedRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const auraRefPosition = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');

    const updateEnabledState = () => {
      const enabled = mediaQuery.matches;
      setIsEnabled(enabled);
      document.body.classList.toggle('has-ninja-cursor', enabled);
    };

    updateEnabledState();
    mediaQuery.addEventListener('change', updateEnabledState);

    return () => {
      document.body.classList.remove('has-ninja-cursor');
      mediaQuery.removeEventListener('change', updateEnabledState);
    };
  }, []);

  useEffect(() => {
    applyRouteCursorTheme(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    if (!isEnabled) {
      return;
    }

    const setInteractiveState = (target: EventTarget | null) => {
      if (!(target instanceof Element)) {
        setIsInteractive(false);
        return;
      }

      const closestInteractive = target.closest(INTERACTIVE_SELECTOR);
      const computedCursor = window.getComputedStyle(target).cursor;
      setIsInteractive(Boolean(closestInteractive) || computedCursor === 'pointer');
    };

    const updatePositions = () => {
      delayedRef.current.x += (pointerRef.current.x - delayedRef.current.x) * 0.24;
      delayedRef.current.y += (pointerRef.current.y - delayedRef.current.y) * 0.24;
      auraRefPosition.current.x += (pointerRef.current.x - auraRefPosition.current.x) * 0.12;
      auraRefPosition.current.y += (pointerRef.current.y - auraRefPosition.current.y) * 0.12;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pointerRef.current.x}px, ${pointerRef.current.y}px, 0)`;
      }

      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${delayedRef.current.x}px, ${delayedRef.current.y}px, 0)`;
      }

      if (auraRef.current) {
        auraRef.current.style.transform = `translate3d(${auraRefPosition.current.x}px, ${auraRefPosition.current.y}px, 0)`;
      }

      animationFrameRef.current = window.requestAnimationFrame(updatePositions);
    };

    const handleMouseMove = (event: MouseEvent) => {
      pointerRef.current = { x: event.clientX, y: event.clientY };
      setIsVisible(true);
      setInteractiveState(event.target);
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleFocusIn = (event: FocusEvent) => setInteractiveState(event.target);
    const handleFocusOut = () => setIsInteractive(false);

    animationFrameRef.current = window.requestAnimationFrame(updatePositions);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }

      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [isEnabled]);

  if (!isEnabled) {
    return null;
  }

  return (
    <>
      <div
        ref={auraRef}
        className={`ninja-cursor-aura ${isVisible ? 'is-visible' : ''} ${isInteractive ? 'is-interactive' : ''}`}
      />
      <div
        ref={trailRef}
        className={`ninja-cursor-trail ${isVisible ? 'is-visible' : ''} ${isInteractive ? 'is-interactive' : ''}`}
      />
      <div
        ref={cursorRef}
        className={`ninja-cursor ${isVisible ? 'is-visible' : ''} ${isInteractive ? 'is-interactive' : ''} ${isPressed ? 'is-pressed' : ''}`}
        aria-hidden="true"
      >
        <div className="ninja-cursor-ring" />
        <svg className="ninja-cursor-blade" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M36 5L51 26L43 31L47 51L36 67L25 51L29 31L21 26L36 5Z" fill="var(--cursor-accent)" stroke="var(--cursor-ink)" strokeWidth="3" strokeLinejoin="round" />
          <circle cx="36" cy="41" r="5.5" fill="var(--cursor-core)" stroke="var(--cursor-ink)" strokeWidth="3" />
          <path d="M36 8L45 22L36 26L27 22L36 8Z" fill="var(--cursor-core)" opacity="0.95" />
          <path d="M33 50H39L41 58L36 65L31 58L33 50Z" fill="var(--cursor-ink)" opacity="0.85" />
        </svg>
      </div>
    </>
  );
};

export default CustomCursor;