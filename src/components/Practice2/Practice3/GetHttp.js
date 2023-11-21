import React, { useCallback, useEffect, useState } from "react";
import useHttps from "../../../Hooks/use-Http";
import Tasks from "./Tasks";
import NewTask from "./NewTask";

const GetHttp = () => {
  const [tasks, setTasks] = useState([]);

  const transformTask = useCallback((taskObj) => {
    const loadedTasks = [];
    for (const taskkey in taskObj) {
      loadedTasks.push({ id: taskkey, text: taskObj[taskkey].text });
    }
    setTasks(loadedTasks);
  }, []);
  const { isLoading, error, sendRequest: fetchTasks } = useHttps(transformTask);
  useEffect(() => {
    fetchTasks({
      url: "https://custom-hook-cf936-default-rtdb.firebaseio.com/task.json",
    });
  }, []);

  return (
    <div>
      <Tasks />
      <NewTask error={error} isLoading={isLoading} onfetch={fetchTasks} />
    </div>
  );
};

export default GetHttp;
