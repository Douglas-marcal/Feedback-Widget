import { ArrowLeft } from 'phosphor-react';
import { FeedbackType, feedbackTypes } from '../../../constants';
import { CloseButton } from '../../CloseButton';

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
}

export function FeedbackContentStep(props: FeedbackContentStepProps) {
  const { feedbackType } = props;
  const { title, image: { source, alt } } = feedbackTypes[feedbackType];

  return (
    <>
      <header>
        <button type="button" className=" absolute top-5 left-5 text-zinc-400 hover:text-zinc-100">
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex gap-2 items-center">
          <img
            src={source}
            alt={alt}
            className="w-6 h-6"
          />
          {title}
        </span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full" />
    </>
  );
}
