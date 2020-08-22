import React from 'react'
import SignUp from "./SignUp"
import SignIn from "./SignIn"
import Header from "./Header"
import styled from "@emotion/styled"

const WelcomeWrapper = styled.div`
    display: flex;
`;

export default function Welcome() {
    return (
        <WelcomeWrapper>
            <Header></Header>
            <SignUp></SignUp>
            <SignIn></SignIn>
        </WelcomeWrapper>
    )
}
