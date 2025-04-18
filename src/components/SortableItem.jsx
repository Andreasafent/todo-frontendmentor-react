import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Todo from './todo';

function SortableItem({ id, todo, onToggle, onDelete }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style}>
            <Todo
                todo={todo}
                onToggle={onToggle}
                onDelete={onDelete}
                dragListeners={listeners}
                dragAttributes={attributes}
            />
        </div>
    );
}

export default SortableItem;