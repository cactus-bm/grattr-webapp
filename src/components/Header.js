import React from 'react'
import { connect } from "react-redux"
import { signOutUser } from "../store/actions/authActions"
import { Button, Grid, Box, Container } from "@material-ui/core"

const Header = ({ auth, signOut }) => {
    const SignOutLink = () => {
        if (auth.uid) {
            return <Button variant="outlined" onClick={signOut} color="primary">Sign Out</Button>
        }
        else {
            return <></>
        }
    }
    return (
        <div style={{ backgroundColor: '#dddddd' }}>
        <Container maxWidth="md" style={{ color: '#212121' }}>
            <Grid container className="container" alignItems="center">
                <Grid item xs={10}>
                    <h1>Grattr</h1>      
                </Grid>
                <Grid item xs={2} >
                    <Box mml={"auto"}> 
                        <SignOutLink/>
                    </Box>
                </Grid>
            </Grid>
        </Container>
        </div>
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