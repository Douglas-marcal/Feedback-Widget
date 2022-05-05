import successImageUrl from '../../../images/success.svg';
import { CloseButton } from '../../CloseButton';

interface FeedbackSuccessStepProps {
  handleRestartFeedback: () => void;
}

export function FeedbackSuccessStep(props: FeedbackSuccessStepProps) {
  const { handleRestartFeedback } = props;

  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px] text-zinc-100">
        <img
          src={successImageUrl}
          alt="Um quadrado com fundo verde e um check em forma de V branco no meio do quadrado"
          className="w-10 h-10"
        />

        <span className="text-xl mt-2">Agradecemos o feedback!</span>

        <button
          type="button"
          onClick={handleRestartFeedback}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 transition-colors hover:bg-zinc-700 focus: outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
}
