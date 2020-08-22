import React from 'react'
import styled from "@emotion/styled"

const HeaderWrapper = styled.div`
    background: #212121;
`;

export default function Header() {
    return (
        <HeaderWrapper>
            <h1>Grattr</h1>
        </HeaderWrapper>
    )
}
