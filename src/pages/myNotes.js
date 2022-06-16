import React, {useEffect} from 'react';

export const MyNotes = () => {

    useEffect(() => {
        // Обновляем заголовок документа
        document.title = 'My Notes — Notedly';
    });

    return (
        <div>
            <h1>Notedly</h1>
            <p>These are my notes</p>
        </div>
    );
};