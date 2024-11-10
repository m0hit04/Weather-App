import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isCollapsed: false,
    width: 'w-56', 
    marginLeft: 'ml-56' 
};

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isCollapsed = !state.isCollapsed;
            state.width = state.isCollapsed ? 'w-16' : 'w-52';
            state.marginLeft = state.isCollapsed ? 'ml-14' : 'ml-52';
        }
    }
});

export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer; 