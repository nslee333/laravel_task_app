import { Link, Head } from '@inertiajs/react';
import { Fragment, MutableRefObject, SyntheticEvent, useRef } from 'react';
import { useState, forwardRef } from 'react';
import {data} from "./data";


function DisplayTasks({tasks, deleteTask}: {tasks: any, deleteTask: any}) {   

  console.log(tasks);

  const displayTasks = data.map((element, index) => {
    if (!tasks) return;

    return (
      <Fragment key={index}>
        <div className="flex justify-between sm:text-3xl xs:text-sm">
          <div>{tasks[index].task}</div>
          <button onClick={e => deleteTask(e, index)}>&times;</button>
        </div>
      </Fragment>
    )
  });
  
  
  return (
    <>
      <div>
        {displayTasks}
      </div>
    </>
  );
}



const Input = forwardRef(function Input(props: {addTask: any}, ref) {
  const inputRef = ref as MutableRefObject<HTMLInputElement>;
  
  function handleSubmit(e: any) {
    const {addTask} = props;
    e.preventDefault();
  
    const target = e.target[0];
  
    if (target) {
      addTask(target.value);
    }
    
  }
  
  return (
    <div className="bg">
      <form onSubmit={e => handleSubmit(e)}>

        <input className="bg-[#333333] w-[100%] text-2xl rounded-md mb-5 text-red" 
                id="task" 
                type="text" 
                placeholder="get bailey leaves..."
                ref={inputRef}
        >

        </input>
      </form>
    </div>
  );
});



export default function TaskDashboard() {
  const [tasks, setTasks] = useState(data);
  const [draft, setDraft] = useState("");
  const inputRef = useRef("");

  function extractTasks(): any[] {
    let newArr = [];
    
    if (!tasks) return [];

    tasks.forEach(element => {
      newArr.push(element);
    });
    
    return newArr;
  }
  
  
  function deleteTask(e: SyntheticEvent, index: number) {
    e.preventDefault();
        
    const newArr = extractTasks();
    
    newArr.splice(index, 1);
    
    setTasks(newArr);
  }
  
  // TODO |> We're adding tasks but the component isn't re-rendering.

  // TODO |> Clear input field when done.
  function addTask(draft: string) {

    if (draft.length === 0) return;

    setDraft(draft)

    const newArr = extractTasks();

    if (tasks && tasks.length > 0) {
      newArr.push({
        id: tasks[tasks.length - 1].id + 1,
        task: draft
      });
    } else {
      newArr.push({
        id: 0,
        task: draft
      });
      
    }
    console.log(tasks)
    console.log(draft)
    
    setTasks(newArr);
    setDraft("");
    inputRef.current = "";
    console.log(tasks)
    console.log(newArr)
  }


  return (
    <div>
      <div className="bg-[#3f3f3f] h-screen text-white">
          <Head title="Task Dashboard" />
          <div className="h-[8rem] w-screen ">
            <Link href="/" className="">Logout</Link>
          </div>

          <div className=" flex justify-center">
            <div className="bg-[#222] h-[80vh] sm:w-1/2 xs:w-7/8 rounded-md p-5 border-2 border-pink-500">
              <Input addTask={addTask} ref={inputRef} />
              <DisplayTasks tasks={tasks} deleteTask={deleteTask} />
            </div>
          </div>

      </div>
    </div>
  );
}
