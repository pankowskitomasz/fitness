import * as React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

import AccountView from './views/accountView';
import AccountCreateView from './views/account/accountCreateView';
import AccountProfileView from './views/account/accountProfileView';
import AccountUpdateView from './views/account/accountUpdateView';
import DashboardView from './views/dashboardView';
import PasswordUpdateView from './views/passwordUpdateView';
import RestorePasswordView from './views/restorePasswordView';
import SignInView from './views/signInView';
import SignUpView from './views/signUpView';
import StatisticView from './views/statisticView';
import StatisticDetailsView from './views/statistic/statisticDetailsView';
import StatisticListView from './views/statistic/statisticListView';
import TrainingView from './views/trainingView';
import TrainingDetailsView from './views/training/trainingDetailsView';
import TrainingListView from './views/training/trainingListView';
import WorkoutView from './views/workoutView';
import WorkoutCreateView from './views/workout/workoutCreateView';
import WorkoutDetailsView from './views/workout/workoutDetailsView';
import WorkoutListView from './views/workout/workoutListView';
import WorkoutUpdateView from './views/workout/workoutUpdateView';
import WelcomeView from './views/welcomeView';

import './App.css';

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<WelcomeView/>}/>
            <Route exact path="/account" element={<AccountView/>}/>
            <Route exact path="/account/create" element={<AccountCreateView/>}/>
            <Route exact path="/account/profile" element={<AccountProfileView/>}/>
            <Route exact path="/account/update" element={<AccountUpdateView/>}/>
            <Route exact path="/dashboard" element={<DashboardView/>}/>
            <Route exact path="/update-password" element={<PasswordUpdateView/>}/>
            <Route exact path="/restore-password" element={<RestorePasswordView/>}/>
            <Route exact path="/signin" element={<SignInView/>}/>
            <Route exact path="/signup" element={<SignUpView/>}/>
            <Route exact path="/statistic" element={<StatisticView/>}/>
            <Route exact path="/statistic/details/*">
              <Route path=":id" element={<StatisticDetailsView/>}/>
            </Route>
            <Route exact path="/statistic/list" element={<StatisticListView/>}/>
            <Route exact path="/training" element={<TrainingView/>}/>
            <Route exact path="/training/details/*">
              <Route path=":id" element={<TrainingDetailsView/>}/>
            </Route>
            <Route exact path="/training/list" element={<TrainingListView/>}/>
            <Route exact path="/workout" element={<WorkoutView/>}/>
            <Route exact path="/workout/create" element={<WorkoutCreateView/>}/>
            <Route exact path="/workout/details/*">
              <Route path=":id" element={<WorkoutDetailsView/>}/>
            </Route>
            <Route exact path="/workout/list" element={<WorkoutListView/>}/>
            <Route exact path="/workout/update/*">
              <Route path=":id" element={<WorkoutUpdateView/>}/>
            </Route>
        </Routes>
    </Router>
  );
}

export default App;
