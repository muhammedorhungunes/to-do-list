
const ToDoList = (props : any ) => {
    var list = [1,1,1]
    return (
        <div className="grid grid-cols-1 divide-y divide-black-500 text-center p-4">
            {list.map( (value: any ,index : any) => 
            <div className="block" > 
                <input type="checkbox"/>
                <input
                    type="text"
                    className="rounded-sm p-1 w-3/4 m-1 border-1"
                    required
                    id="title"
                    placeholder="Add a task"
                />
            </div>
            )} 
        </div>
    );
};
export default ToDoList;