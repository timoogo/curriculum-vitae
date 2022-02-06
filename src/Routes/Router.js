import React, { lazy, Suspense } from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import Static
import Loading from '../Components/loader/Loading';
import ProjectDetails from '../Components/ProjectDetails';
import QuizzList from '../Components/Quizz/QuizzList';
import NoMatch from './NoMatch';

// Lazy Import
const Home = lazy(() => import('../pages/Home'));
const CurriculumVitae = lazy(() => import('../pages/CurriculumVitae'));
const ProjectList = lazy(() => import('../pages/ProjectList'));


const Rooter = () => (

    <Suspense fallback={<Loading/>}>
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/cv" component={CurriculumVitae}/>
                <Route path="/projets" component={ProjectList}/>
                <Route path="/projets/:id" component={ProjectDetails}/>
                <Route path="/quizz/" component={QuizzList}/>
                <Route path="*" component={NoMatch}/>
            </Switch>
        </Router>
    </Suspense>
);

export default Rooter;