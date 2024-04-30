import { useDrop } from 'react-dnd';

const DroppableComponent = ({ onDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'DRAGGABLE_ITEM',
    drop: (item, monitor) => {
      onDrop(item.id); // Perform action on drop
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} style={{ backgroundColor: isOver ? 'lightblue' : 'transparent' }}>
      Drop here
    </div>
  );
};
