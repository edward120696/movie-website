import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../icon.png'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper href="">
                <img src={logo} width="60" height="60" alt="" />
            </Wrapper>
        )
    }
}

export default Logo