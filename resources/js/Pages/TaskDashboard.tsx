import { Link, Head } from '@inertiajs/react';
import { Fragment, SyntheticEvent } from 'react';
import { useState } from 'react';

const data: any[] = [
  {
    id: 0,
    task: "do laundry"
  },
  {
    id: 1,
    task: "do laundry"
  },
  {
    id: 2,
    task: "do laundry"
  },
  {
    id: 3,
    task: "do laundry"
  },
  {
    id: 4,
    task: "do laundry"
  },
  {
    id: 5,
    task: "do laundry"
  }
]



function DisplayTasks({tasks, deleteTask}: {tasks: any, deleteTask: any}) {   
  const displayTasks = data.map((element, index) => {
    
    return (
      tasks[index] ? 
      <Fragment key={index}>
        <div className="flex justify-between sm:text-3xl xs:text-sm">
          <div>{tasks[index].task}</div>
          <button onClick={e => deleteTask(e, index)}>&times;</button>
        </div>
      </Fragment> : <Fragment key={index}></Fragment>
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




export default function TaskDashboard() {

  const [tasks, setTasks] = useState(data);
  
  
  function deleteTask(e: SyntheticEvent, index: number) {
    e.preventDefault();
        
    const newArr: any[] = [];
    
    
    tasks.forEach(element => {
      newArr.push(element);
    });
    
    newArr.splice(index, 1);
    
    setTasks(newArr);    
  }


  return (
    <div>
      <div className="bg-[#3f3f3f] h-screen text-white">
          <Head title="Task Dashboard" />
          <div className="bg-[#33333] h-[8rem] w-screen ">
            <Link href="/" className="">Logout</Link>
          </div>

          <div className=" flex justify-center">
            <div className="bg-[#222] h-[80vh] sm:w-1/2 xs:w-7/8 rounded-md p-5">
              <DisplayTasks tasks={tasks} deleteTask={deleteTask} />
            </div>
          </div>


      </div>
    </div>
  );
}
