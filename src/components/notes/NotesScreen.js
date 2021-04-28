import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NotesScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">

            <input
                type="text"
                placeholder="Some aweson title"
                className="notes__title-input"
            />

            <textarea
                placeholder="What happened today"
                className="notes__textarea"
            ></textarea>
            
            <div className="notes__image">
                <img 
                    src="https://4.bp.blogspot.com/-B8tZ9Urvx9k/VZv36VtmsRI/AAAAAAAAH5Y/5bybx2hFcYo/s1600/alice%2Bin%2Bwonderland%2Bfondos%2Bpara%2Bcelular%2B8.jpg"
                    alt="imagen"
                />
            </div>
            </div>
        </div>
    )
}
