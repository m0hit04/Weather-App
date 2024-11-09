import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isCollapsed: false,
    width: 'w-56', // default width class
    marginLeft: 'ml-56' // default margin class
};

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isCollapsed = !state.isCollapsed;
            state.width = state.isCollapsed ? 'w-36' : 'w-56';
            state.marginLeft = state.isCollapsed ? 'ml-36' : 'ml-56';
        }
    }
});

export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer; 