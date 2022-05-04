import { CloseButton } from './CloseButton';
import { feedbackTypes } from '../constants';

export function WidgetForm() {
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {
          Object.entries(feedbackTypes).map(([key, value]) => {
            const { title } = value;
            const { source, alt } = value.image;

            return (
              <button
                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent transition-all duration-500 hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                key={key}
                type="button"
              >
                <img src={source} alt={alt} />
                <span>{title}</span>
              </button>
            );
          })
        }
      </div>

      <footer className="text-xs text-neutral-400">
        Feito com ♥ por
        <a className="underline underline-offset-2" href="https://www.linkedin.com/in/douglas-marcal/"> Douglas Marçal</a>
      </footer>
    </div>
  );
}
