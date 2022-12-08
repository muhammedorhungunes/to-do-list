const ToDoInput = (props : any ) => {

    return (
        <div className="grid grid-cols-1 divide-y divide-black-500 text-center p-4">
            <div className="block" > 
                
                <input
                    type="text"
                    className="rounded-sm p-1 w-3/4 m-1 border-1"
                    required
                    id="title"
                    placeholder="Add a task"
                />
                <button className="bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="fill-current w-4 h-4 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <span>Add</span>
                </button>
            </div>
        </div>
    );
};
export default ToDoInput;