import { ChatTeardropDots } from 'phosphor-react';

export function Widget() {
  return (
    <div className="absolute bottom-5 right-5">
      <button type="button" className="bg-brand-500 rounded-full h-12 px-3 text-white flex items-center group">
        <ChatTeardropDots className="h-6 w-6 mx-auto" />
        <span className="max-w-0 overflow-hidden transition-all duration-500 ease-linear group-hover:max-w-xs">
          <span className="pl-2" />
          Feedback
        </span>
      </button>
    </div>
  );
}
