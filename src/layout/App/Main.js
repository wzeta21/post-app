import React from 'react';
import { PostManager, UserForm } from '../../containers';
import { Route, Switch } from 'react-router-dom';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={PostManager} />
            <Route exact path='/userform/:id' component={UserForm} />
        </Switch>
    </main>
);

export default Main;