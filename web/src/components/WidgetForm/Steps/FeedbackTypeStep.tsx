import { FeedbackType, feedbackTypes } from '../../../constants';
import { CloseButton } from '../../CloseButton';

interface FeedbackTypeStepProps {
  // eslint-disable-next-line no-unused-vars
  setFeedbackType: (type: FeedbackType) => void;
}

export function FeedbackTypeStep(props: FeedbackTypeStepProps) {
  const { setFeedbackType } = props;

  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {
        Object.entries(feedbackTypes).map(([key, value]) => {
          const { title, image: { source, alt } } = value;

          return (

            <button
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent transition-all duration-500 hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              key={key}
              type="button"
              onClick={() => setFeedbackType(key as FeedbackType)}
            >
              <img src={source} alt={alt} />
              <span>{title}</span>
            </button>
          );
        })
      }
      </div>
    </>
  );
}
