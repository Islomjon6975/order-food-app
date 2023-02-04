import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Form, Input, Wrapper } from './style'

export const Register = () => {
  const navigate = useNavigate()
  const fullNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()

  const register = (e) => {
    e.preventDefault()
    const user = {
      fullname: fullNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    localStorage.setItem("user", JSON.stringify(user))
    navigate('/login')
  }

  return (
    <Container>
      <Wrapper>
        <Form>
          <Input type='text' ref={fullNameRef} placeholder='Full name' />
          <Input type='email' ref={emailRef} placeholder='Email' />
          <Input type='password' ref={passwordRef} placeholder='Password' />
          <button type='submit' onClick={register}>Register</button>
          <span onClick={() => navigate('/login')}>Already have an account? Login</span>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register