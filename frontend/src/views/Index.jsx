import { ButtonAddTask } from "../components/ButtonAddTask";
import { TasksList } from "../components/tasksList";

export const Index = () => {
  return (
    <main>
      <ButtonAddTask />
      <TasksList />
    </main>
  );
};
