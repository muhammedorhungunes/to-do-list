import { Fragment } from "react";
import ToDoDate from "./ToDoDate";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";

const ToDoListForm = (props: any) => {

  return (
    <Fragment>
        <div className="">
            <ToDoDate />
            <ToDoInput />
            <ToDoList />
            
        </div>  
    </Fragment>
  );
};

export default ToDoListForm;
