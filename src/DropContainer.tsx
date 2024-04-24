import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import DraggableDiv from './DraggableDiv';
import DraggableImage from './DraggableDiv'; // Assuming you have a DraggableImage component
import flower from './assets/flower.png'

const DropContainer: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);

  const [, drop] = useDrop({
    accept: ['DIV', 'IMAGE'], // Accept both 'DIV' and 'IMAGE'
    drop: (item: { id: string }) => {
      setItems((prevItems) => [...prevItems, item.id]);
    },
  });

  return (
    <div ref={drop} className='h-screen flex justify-center items-center bg-gray-200'>
      {items.map((itemId) => (
        <div key={itemId} className="mr-2">
          <DraggableDiv id={itemId} type="DIV" text={itemId} />
        </div>
      ))}

      {items.map((itemId) => (
        <div key={itemId} className="mr-2">
          <DraggableImage id={itemId} type="IMAGE" src={flower} alt='flower' />
        </div>
      ))}
    </div>
  );
};

export default DropContainer;
