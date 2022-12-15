import {Agent} from "../interfaces/Agent";
import {configureStore} from "@reduxjs/toolkit";

export const ADD_AGENT = 'ADD_AGENT'
interface Action {
    type: string,
    payload: any
}
function agentReducer(state: any = {agents: []}, action: Action) {
    switch (action.type as string) {
        case ADD_AGENT:
            if(state.agents.length > 0){
                let newTab: Agent[] = [];
                state.agents.forEach((e: Agent) => {
                    if(e.uuid !== action.payload.uuid)
                        newTab.push(e)
                })
                newTab.push(action.payload);
                if(newTab.length > 3)
                    newTab.shift();
                return {agents: newTab}
            }else{
                return {agents: [action.payload]};
            }
        default:
            return state;

    }
}

const store = configureStore({
    reducer: agentReducer
})

export default store;