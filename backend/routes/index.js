const express = require('express');
const notesRoute = require('./noteroutes/notes.route');
const authRoute = require('./authroutes/auth.route')
const userRoute = require('./userroutes/user.route');
const router = express.Router();

const defaultRoutes = [
    {
        path: '/notes',
        routes: notesRoute
    }, {
        path: '/auth',
        routes: authRoute
    },
    {
        path: '/users',
        routes: userRoute
    }
]

defaultRoutes.forEach((route) => {
    router.use(route.path, route.routes);
})

module.exports = router;