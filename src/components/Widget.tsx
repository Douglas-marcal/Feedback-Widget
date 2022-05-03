import { ChatTeardropDots } from 'phosphor-react';

export function Widget() {
  return (
    <div className="absolute bottom-5 right-5">
      <button type="button" className="bg-brand-500 rounded-full h-12 w-12 text-white">
        <ChatTeardropDots className="h-6 w-6 mx-auto" />
      </button>
    </div>
  );
}
