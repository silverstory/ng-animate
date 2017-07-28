import { animation, style, animate, keyframes } from '@angular/animations';

const DEFAULT_TIMING = 1;

export const hinge = animation(
  [
    style({ 'transform-origin': 'top left' }),
    animate(
      '{{ timing }}s ease-in-out',
      keyframes([
        style({
          transform: 'rotate3d(0, 0, 1, 80deg)',
          offset: 0.2,
        }),
        style({
          transform: 'rotate3d(0, 0, 1, 60deg)',
          offset: 0.4,
        }),
        style({
          transform: 'rotate3d(0, 0, 1, 80deg)',
          offset: 0.6,
        }),
        style({
          opacity: 1,
          transform: 'rotate3d(0, 0, 1, 60deg)',
          offset: 0.8,
        }),
        style({
          opacity: 0,
          transform: 'translate3d(0, 700px, 0)',
          offset: 1,
        }),
      ])
    ),
  ],
  {
    params: { timing: DEFAULT_TIMING },
  }
);

export const jackInTheBox = animation(
  [
    style({ 'transform-origin': 'center bottom' }),
    animate(
      '{{ timing }}s',
      keyframes([
        style({
          opacity: 0,
          transform: 'scale(0.1) rotate(30deg)',
          offset: 0,
        }),
        style({
          transform: 'rotate(-10deg)',
          offset: 0.5,
        }),
        style({
          transform: 'rotate(3deg',
          offset: 0.7,
        }),
        style({
          opacity: 1,
          transform: 'scale(1)',
          offset: 1,
        }),
      ])
    ),
  ],
  {
    params: { timing: DEFAULT_TIMING },
  }
);

export const rollIn = animation(
  [
    animate(
      '{{ timing }}s',
      keyframes([
        style({
          opacity: 0,
          transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)',
          offset: 0,
        }),
        style({
          opacity: 1,
          transform: 'none',
          offset: 1,
        }),
      ])
    ),
  ],
  {
    params: { timing: DEFAULT_TIMING },
  }
);

export const rollOut = animation(
  [
    animate(
      '{{ timing }}s',
      keyframes([
        style({
          opacity: 1,
          offset: 0,
        }),
        style({
          opacity: 0,
          transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)',
          offset: 1,
        }),
      ])
    ),
  ],
  {
    params: { timing: DEFAULT_TIMING },
  }
);
