import { ArrowLeft } from 'phosphor-react';
import { FeedbackType, feedbackTypes } from '../../../constants';
import { CloseButton } from '../../CloseButton';

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  setFeedbackTypeToInitialState: () => void;
}

export function FeedbackContentStep(props: FeedbackContentStepProps) {
  const { feedbackType, setFeedbackTypeToInitialState } = props;
  const { title, image: { source, alt } } = feedbackTypes[feedbackType];

  return (
    <>
      <header>
        <button
          type="button"
          className=" absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
          onClick={setFeedbackTypeToInitialState}
        >
          <ArrowLeft weight="bold" className=" w-4 h-4" />
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

      <form className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
        />
      </form>
    </>
  );
}
