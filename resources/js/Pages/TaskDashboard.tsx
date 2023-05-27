import { Link, Head } from '@inertiajs/react';
import { Fragment } from 'react';

const data: any[] = [
  {
    id: 0,
    task: "do laundry"
  },
  {
    id: 0,
    task: "do laundry"
  },
  {
    id: 0,
    task: "do laundry"
  },
  {
    id: 0,
    task: "do laundry"
  },
  {
    id: 0,
    task: "do laundry"
  },
  {
    id: 0,
    task: "do laundry"
  },
]


function displayTasks() {
  // & Map out tasks from database for authenticated user.

  const tasks = data.map((element, index) => {

    return (
      <Fragment key={index}>
        <div className="flex justify-between text-3xl">
          <div>{data[index].task}</div>
          <button>&times;</button>
        </div>
      </Fragment>
    )
  });


  return (
    <>
      <div>
        {tasks}
      </div>
    </>
  );
}




export default function TaskDashboard() {
  return (
    <div>
      <div className="bg-[#3f3f3f] h-screen text-white">
          <Head title="Task Dashboard" />
          <div className="bg-[#33333] h-[8rem] w-screen ">
            <Link href="/" className="">Logout</Link>
          </div>

          <div className=" flex justify-center">
            <div className="bg-[#222] h-[80vh] w-1/2 rounded-md p-5">
              {displayTasks()}
            </div>
          </div>


      </div>
    </div>
  );
}
