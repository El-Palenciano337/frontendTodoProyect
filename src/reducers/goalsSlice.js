import { createSlice } from "@reduxjs/toolkit";

export const goalsSlice = createSlice({
    name: "goals",
    initialState: {
        value: [],
    },
    reducers: {
        addGoal: (state, action) => {
            console.log(action.payload);
            state.value.push(action.payload);
            fetch("http://localhost:3001/goals/addGoal", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "todoproyect",
                },
                body: JSON.stringify(action.payload),
            }).catch((err) => {
                console.log(err);
            });
        },
        initAddGoal: (state, action) => {
            state.value.push(action.payload);
        },
        clearGoals: (state) => {
            state.value = [];
        },
        removeGoal: (state, action) => {
            state.value = state.value.filter(
                (goal) => goal._id !== action.payload
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

export const { addGoal, initAddGoal, removeGoal, clearGoals } =
    goalsSlice.actions;
export const selectGoals = (state) => state.goals.value;

export default goalsSlice.reducer;
