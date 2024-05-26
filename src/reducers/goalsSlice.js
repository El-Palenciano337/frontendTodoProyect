import { createSlice } from "@reduxjs/toolkit";

export const goalsSlice = createSlice({
    name: "goals",
    initialState: {
        value: [
            {
                name: "Hacer cena",
                description: "Cena para 5 pelotudos",
                dueDate: "31-12-2024",
            },
        ],
    },
    reducers: {
        addGoal: (state, action) => {
            state.value.push(action.payload);
        },
        initAddGoal: (state, action) => {
            state.value.push(action.payload);
        },
        removeGoal: (state, action) => {
            state.value = state.value.filter(
                (goal) => goal.id !== action.payload
            );
            fetch("http://localhost:3001/goals/removeGoal/" + action.payload, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "todoproyect",
                },
            }).catch((err) => {
                console.log(err);
            });
        },
    },
});

export const { addGoal, initAddGoal, removeGoal } = goalsSlice.actions;
export default goalsSlice.reducer;
