import React, { useState, useEffect, useReducer, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import * as Api from "./api"; // 백엔드 완성 시 작성 예정 (?)

// import { loginReducer } from "./reducer";
// 컴포넌트들
import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";
import Footer from "./components/Layout/Footer";
import Introduce from "./components/introduce/Introduce";
import MyPage from "./components/user/MyPage";
// import LoginForm from "./components/user/LoginForm";
// import RegisterForm from "./components/user/RegisterForm";
// import Portfolio from "./components/Portfolio";
// import Loading from "./components/Loading";

export const UserStateContext = createContext(null);
export const DispatchContext = createContext(null);

function App() {
    // useReducer 훅을 통해 userState 상태와 dispatch함수를 생성함.
    // const [userState, dispatch] = useReducer(loginReducer, {
    //   user: null,
    // });

    // 아래의 fetchCurrentUser 함수가 실행된 다음에 컴포넌트가 구현되도록 함.
    // 아래 코드를 보면 isFetchCompleted 가 true여야 컴포넌트가 구현됨.
    // const [isFetchCompleted, setIsFetchCompleted] = useState(false);

    // const fetchCurrentUser = async () => {
    //   try {
    //     // 이전에 발급받은 토큰이 있다면, 이를 가지고 유저 정보를 받아옴.
    //     const res = await Api.get("users/current");
    //     const currentUser = res.data.user;

    //     // dispatch 함수를 통해 로그인 성공 상태로 만듦.
    //     dispatch({
    //       type: "LOGIN_SUCCESS",
    //       payload: currentUser,
    //     });
    //   } catch {
    //     console.log("%c SessionStorage에 토큰 없음.", "color: #d93d1a;");
    //   }

    //   // fetchCurrentUser 과정이 끝났으므로, isFetchCompleted 상태를 true로 바꿔줌
    //   setIsFetchCompleted(true);
    // };

    // // useEffect함수를 통해 fetchCurrentUser 함수를 실행함.
    // useEffect(() => {
    //   fetchCurrentUser();
    // }, []);

    // if (!isFetchCompleted) {
    //   return <Loading />;
    // }

    return (
        <DispatchContext.Provider>
            <UserStateContext.Provider>
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" exact element={<Main />} />
                        <Route path="/introduce" element={<Introduce />} />
                        <Route path="/myPage" element={<MyPage />} />
                        <Route path="/auth/:id" element={<Main />} />
                        <Route path="*" element={<Main />} />
                    </Routes>
                </Router>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Footer />
            </UserStateContext.Provider>
        </DispatchContext.Provider>
    );
}

export default App;
