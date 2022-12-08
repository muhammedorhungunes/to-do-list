const ToDoDate = (props : any ) => {

    return (
    <div className="">
        <label className="text-2xl">
            My Day
        </label>  
        <br/>
        <label className="text-sm not-italic mb-4">
            {new Date().toLocaleString("en-US", {  weekday: "long" })},
            {' '}
            {new Date().toLocaleString("en-US", { month: "long" })}
            {' '}
            {new Date().toLocaleString("en-US", { day: "numeric" })}
        </label> 
    </div>  
    );
};
export default ToDoDate;





