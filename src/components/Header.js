import React from 'react'
import styled from "@emotion/styled"
import { connect } from "react-redux"
import { signOutUser } from "../store/actions/authActions"
import { Button, Grid, Box } from "@material-ui/core"

const HeaderWrapper = styled.div`
    background: #212121;
    color: #fff;

    .container {
        max-width: 1020px;
        margin: 0 auto;
        padding: 1rem 0
    }

    h1 {
        margin: 0;
    }
`;


const Header = ({ auth, signOut }) => {
    const SignOutLink = () => {
        if (auth.uid) {
            return <Button color="primary" variant="contained" onClick={signOut}>Sign Out</Button>
        }
        else {
            return <></>
        }
    }
    return (
        <HeaderWrapper>
            <Grid container className="container">
                <Grid item xs={10}>
                    <h1>Grattr</h1>      
                </Grid>
                <Grid item xs={2} >
                    <Box ml={"auto"}> 
                        <SignOutLink/>
                    </Box>
                </Grid>
            </Grid>
        </HeaderWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebaseAuth.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);