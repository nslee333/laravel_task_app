import { Link, Head } from "@inertiajs/react";
import { Fragment, SyntheticEvent } from "react";
import { useState } from "react";
import { addTask, getTasks, deleteTask } from "./requests";

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

export default function TaskDashboard(jsonTasks: any) {

    const parsedTasks = JSON.parse(jsonTasks.data)

    const [tasks, setTasks] = useState(parsedTasks);
    const [draft, setDraft] = useState("");

    // function extractTasks(): any[] {
    //     let newArr = [];

    //     if (!tasks) return [];

    //     tasks.forEach((element) => {
    //         newArr.push(element);
    //     });

    //     return newArr;
    // }
    
    function addTask(draftParam: string) {
        if (draftParam.length === 0) return;

        setDraft(draftParam);

        // TODO Call add_task with draft

        // TODO Call get_tasks after update.

        // const newArr = extractTasks();
        // newArr.push(draftParam);

        // setTasks(newArr);
        setDraft("");
    }

    function deleteTask(e: SyntheticEvent, index: number) {
        e.preventDefault();

        // const newArr = extractTasks();

        // newArr.splice(index, 1);

        // setTasks(newArr);
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
