import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import commonStore from './slices/common_slice';
import users from '../views/pages/users/config/store';
import contact_management from '../views/pages/contact_management/config/store';

import blog_category from '../views/pages/blog_category/config/store';
import blog_tags from '../views/pages/blog_tags/config/store';
import blogs from '../views/pages/blogs/config/store';

const store = configureStore({
    reducer: {
        common_store: commonStore.reducer,
        users: users.reducer,
        contact_messages: contact_management.reducer,
        blog_category: blog_category.reducer,
        blog_tags: blog_tags.reducer,
        blogs: blogs.reducer,
    },
    devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export default store;
