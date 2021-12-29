import {
  animate,
  animateChild,
  query,
  sequence,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fadeOut = trigger('fadeOut', [
  state(
    'void',
    style({
      background: 'pink',
      borderBottomColor: 'pink',
      opacity: 0,
      transform: 'translateX(-550px)',
      'box-shadow': 'none',
    })
  ),
  transition('void => *', sequence([animate('.5s ease')])),
  transition('* => void', [animate('.5s ease')]),
]);
