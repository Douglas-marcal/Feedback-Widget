import bugImageUrl from '../images/bug.svg';
import ideaImageUrl from '../images/idea.svg';
import thoughtImageUrl from '../images/thought.svg';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Lagarta roxa',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Lâmpada com cor amarela e bocal cinza',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Nuvem de pensamento azul',
    },
  },
};
