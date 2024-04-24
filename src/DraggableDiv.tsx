import React from 'react';
import { useDrag } from 'react-dnd';

interface DraggableDivProps {
  id: string;
  type: 'DIV' | 'IMAGE';
  text?: string; // Only used if type is 'DIV'
  src?: string;  // Only used if type is 'IMAGE'
  alt?: string;  // Only used if type is 'IMAGE'
}

const DraggableDiv: React.FC<DraggableDivProps> = ({ id, type, text, src, alt }) => {
  const [, drag] = useDrag({
    type, // Use the specified type
    item: { id },
  });

  return (
    <div ref={drag} className='cursor-move'>
      {type === 'DIV' && (
        <div className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'>
          <p className='mt-2'>{text}</p>
        </div>
      )}

      {type === 'IMAGE' && (
        <img className='h-6 mt-1 w-6' src={src} alt={alt} />
      )}
    </div>
  );
};

export default DraggableDiv;
