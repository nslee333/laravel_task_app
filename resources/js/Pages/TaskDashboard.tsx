import { Link, Head } from "@inertiajs/react";
import { Fragment, SyntheticEvent } from "react";
import { useState } from "react";
import { addTaskReq, getTasksReq, deleteTaskReq } from "./requests";
import { AxiosError } from "axios";



export default function TaskDashboard(jsonData: any) {
    
    const parsedTasks = JSON.parse(jsonData.data);
    const taskArray = Object.values(parsedTasks); 
    // const parsedTasks = jsonData.data;
    // console.log(parsedTasks)
    // console.log(taskArray)
    
    const [tasks, setTasks] = useState(taskArray);
    // const [tasks, setTasks] = useState(parsedTasks);
    const [draft, setDraft] = useState("");
    
    async function addTask(draftParam: string) {
        if (draftParam.length === 0) return;

        setDraft(draftParam);
        
        const response = await addTaskReq(draft);
        
        if (response instanceof AxiosError) {
            console.log(response);
            console.log(response.response.data.message);
            return response;
        } else {
            console.log(response);
        }
        
        const newTasksRes = await getTasksReq();
        
        if (newTasksRes instanceof AxiosError) {
            console.log(newTasksRes);
            console.log(newTasksRes.response.data.message);
        } else {
            console.log(newTasksRes);
        }
        
        setDraft("");
        setTasks(newTasksRes.data);
    }

    async function deleteTask(e: SyntheticEvent, index: number) {
        e.preventDefault();
        
        const deleteRes = await deleteTaskReq(index);
        
        if (deleteRes instanceof AxiosError) {
            console.log(deleteRes);
            console.log(deleteRes.response.data.message);
        } else {
            console.log(deleteRes);
        }

        const getRes = await getTasksReq();
        
        if (getRes instanceof AxiosError) {
            console.log(getRes);
            console.log(getRes.response.data.message);
        } else {
            console.log(getRes);
        }

        const taskArr = Object.values(getRes.data); // ! BandAID!!!! 
        
        // setTasks(getRes.data);  // ! BANDAID
        setTasks(taskArr);
    }
    
    
    return (
        <div>
            <div className="bg-[#3f3f3f] min-h-[100vh] text-white">
                <Head title="Task Dashboard" />
                <div className="h-[8rem] w-screen ">
                    <Link href="/" className="">
                        Logout
                    </Link>
                </div>

                <div className=" flex justify-center">
                    <div className="bg-[#222] h-[80vh] overflow-auto sm:w-1/2 xs:w-7/8 rounded-md p-5 mb-10 border-2 border-pink-500">
                        <Input
                            addTask={addTask}
                            draft={draft}
                            setDraft={setDraft}
                            />
                        <DisplayTasks tasks={tasks} deleteTask={deleteTask} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function Input(props: { addTask: any; draft: any; setDraft }) {
    const { draft, setDraft } = props;

    function handleSubmit(e: any) {
        const { addTask } = props;
        e.preventDefault();

        const target = e.target[0];

        if (target) {
            addTask(target.value);
        }
    }

    return (
        <div className="bg">
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    className="bg-[#333333] 
                                w-[100%] 
                                text-2xl 
                                rounded-md 
                                mb-5
                
                "
                    id="task"
                    type="text"
                    placeholder="get bailey leaves..."
                    onChange={(e) => setDraft(e.target.value)}
                    value={draft}
                />
            </form>
        </div>
    );
}


function DisplayTasks({ tasks, deleteTask }: { tasks: any; deleteTask: any }) {
    const displayTasks = tasks.map((element, index) => {
        if (!tasks) return;

        return (
            <Fragment key={index}>
                <div className="flex justify-between sm:text-3xl xs:text-sm">
                    <div>{tasks[index]}</div>
                    <button onClick={(e) => deleteTask(e, index)}>
                        &times;
                    </button>
                </div>
            </Fragment>
        );
    });

    return (
        <>
            <div>{displayTasks}</div>
        </>
    );
}
