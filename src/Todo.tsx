import { VFC } from "react";
import { TodoType } from "./types/todo";

export const Todo: VFC<Omit<TodoType, "id">> = (
  props: Omit<TodoType, "id">
  // props: Pick<TodoType, "userId" | "title" | "completed">
) => {
  const { title, userId, completed = false } = props;
  const complateMark = completed ? "[Done]" : "[Not Yet]";
  return <p>{`${complateMark} ${title}(user: ${userId})`}</p>;
};
