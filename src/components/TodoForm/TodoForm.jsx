import React, { useState } from 'react';

export default function TodoForm() {
    const [title, setTitle] = useState('');
    const [isCompleted, setTIsCompleted] = useState(false);

    return (
        <form className='lg:container mx-auto columns-1 p-4 py-7 bg-white rounded-xl'>
            <div className='w-full'>
                <label className='mt-1' htmlFor="title-input">
                    Enter the title:
                </label>
                <input className='border px-2 ml-2 border-astro-gray-500 rounded-xl' value={title} onChange={({ target }) => setTitle(target.value)} id="title-input" name="title-input" />
            </div>
            <div className='w-full'>
                <label className='mt-1' htmlFor="isCompleted-input">
                    Is Task Completed:
                </label>
                <input className='border ml-2 border-astro-gray-500 rounded-xl' type="checkbox" name="isCompleted-input" id="isCompleted-input" checked={isCompleted} onChange={({target}) => setTIsCompleted(target.checked)} />
            </div>
            <div className="w-full">
                <a className='border-slate-500 justify-self-start text-slate-500 box-border border-2 rounded-xl p-2 float-left hover:text-gray-50 hover:bg-slate-500' href='/todo-list'>View Todo List</a>
                <button onClick={(event) => event.preventDefault()} className='border-slate-500 text-slate-500 justify-self-end box-border border-2 rounded-xl p-2 float-end hover:text-gray-50 hover:bg-slate-500'>Add ToDo</button>
            </div>
        </form>
    );
};
