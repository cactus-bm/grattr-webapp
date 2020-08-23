import React from 'react'
import SignUp from "./SignUp"
import SignIn from "./SignIn"
import Header from "./Header"
import styled from "@emotion/styled"
import { Grid } from "@material-ui/core"

const WelcomeWrapper = styled.div`
 
`;

export default function Welcome() {
    return (
        <WelcomeWrapper>
            <Grid container> 
                <Grid container item alignItems="stretch">
                    <Grid item xs={12}>
                        <Header></Header>
                    </Grid>
                </Grid>
                <Grid container item alignItems="stretch">
                    <Grid item xs={6} alignItems="stretch">
                        <SignIn></SignIn>
                    </Grid>
                    <Grid item xs={6} alignItems="stretch">
                        <SignUp></SignUp>
                    </Grid>
                </Grid>
            </Grid>
        </WelcomeWrapper>
    )
}
