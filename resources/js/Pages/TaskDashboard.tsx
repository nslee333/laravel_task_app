import { Link, Head } from '@inertiajs/react';


function displayTasks() {


  return (
    <>
      <div>
        
      </div>
    </>
  );
}




export default function TaskDashboard() {
  return (
    <>
      <div className="bg-[#3f3f3f] h-screen text-white">
          <Head title="Task Dashboard" />
          <div className="bg-[#33333] h-[8rem] w-screen ">
            <Link href="/" className="">Logout</Link>
          </div>

          <div className=" flex justify-center">
            <div className="bg-[#222] h-[80vh] w-1/2 rounded-md p-5">
              
            </div>
          </div>


      </div>
    </>
  );
}
