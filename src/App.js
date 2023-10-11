import "./App.scss";

import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Profile from "./page/Profile";
import Login_Register from "./page/Login_Register";
import Allcourses from "./page/Allcourses";
import SignUp from "./page/SignUp";
import Password from "./page/Password";
import CourseTeacher from "./components/Course/CourseTeacher";
import CourseReview from "./components/Course/CourseReview";
import Lesson from "./components/Course/Lesson";
import Resetpass from "./components/Password/Resetpass";

import Course from "./components/Course/Course";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/profile" element={<Profile></Profile>}></Route>
      <Route path="/allcourses" element={<Allcourses></Allcourses>}></Route>
      <Route
        path="/loginregister"
        element={<Login_Register></Login_Register>}
      ></Route>
      <Route path="/signup" element={<SignUp></SignUp>}></Route>
      <Route path="/resetpassword" element={<Password></Password>}></Route>

      <Route
        path="/teacher/:id"
        element={<CourseTeacher></CourseTeacher>}
      ></Route>
      <Route path="/review/:id" element={<CourseReview></CourseReview>}></Route>
      <Route path="/lesson/:id" element={<Lesson></Lesson>}></Route>

      <Route
        path="/reset-password/:token"
        element={<Resetpass></Resetpass>}
      ></Route>

      <Route path="/course/:id" element={<Course></Course>}></Route>
    </Routes>
  );
}

export default App;
