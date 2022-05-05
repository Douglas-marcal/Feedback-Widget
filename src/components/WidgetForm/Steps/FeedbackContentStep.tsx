import { FormEvent, useState } from 'react';
import { ArrowLeft } from 'phosphor-react';
import { FeedbackType, feedbackTypes } from '../../../constants';
import { CloseButton } from '../../CloseButton';
import { ScreenshotButton } from '../ScreenshotButton';

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  setFeedbackTypeToInitialState: () => void;
}

export function FeedbackContentStep(props: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [feedbackComment, setFeedbackComment] = useState('');

  const { feedbackType, setFeedbackTypeToInitialState } = props;
  const { title, image: { source, alt } } = feedbackTypes[feedbackType];

  function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();
    const feedbackInformation = {
      screenshot,
      feedbackComment,
    };

    console.log(feedbackInformation);
    setFeedbackComment('');
  }

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

      <form
        onSubmit={handleSubmitFeedback}
        className="my-4 w-full"
      >
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={({ target: { value } }) => setFeedbackComment(value)}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            setScreenshot={setScreenshot}
          />

          <button
            type="submit"
            disabled={!feedbackComment.length}
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm transition-colors hover:bg-brand-300 focus: outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500 disabled:cursor-not-allowed"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
}
