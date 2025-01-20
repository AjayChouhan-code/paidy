import { TASK } from "@types";

export interface TasKCard {
    item: TASK,
    onPress: (task:TASK)=>void
}