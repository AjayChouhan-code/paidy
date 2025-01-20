import { TASK } from "types";

export interface TaskListsProps {
  taskList: TASK[];
  onPress:(id:TASK)=>void
}
export interface RenderItemType {
  item:TASK,
  index:number
}