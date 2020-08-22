import React from 'react'
import styled from "@emotion/styled"
import { connect } from "react-redux"
import { signOutUser } from "../store/actions/authActions"

const HeaderWrapper = styled.div`
    background: #212121;
    color: #fff;
`;


const Header = ({ auth, signOut }) => {
    const SignOutLink = () => {
        if (auth.uid) {
            return <p onClick={signOut}>Sign Out</p>
        }
        else {
            return <div></div>
        }
    }
    return (
        <HeaderWrapper>
            <h1>Grattr</h1>
            <SignOutLink/>
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