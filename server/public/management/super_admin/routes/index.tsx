import React from 'react';
import { NonIndexRouteObject } from 'react-router-dom';
import DashboardLayout from '../views/layouts/DashboardLayout';
import T1 from '../views/pages/T1';

import user_branch_staff_routes from '../views/pages/users/config/routes';
import contact_messages from '../views/pages/contact_management/config/routes';

import blog_category from '../views/pages/blog_category/config/routes';

interface RouteTypes extends NonIndexRouteObject {}
const router: RouteTypes[] = [
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            {
                path: '',
                element: <T1 />,
            },
            user_branch_staff_routes,
            contact_messages,
            blog_category,
          
        ],
    },
];

export default router;
