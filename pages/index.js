import * as React from 'react'
import {useRpgContext} from '../context/providers'
import styled from '@emotion/styled'
import {SET_IS_LOGGED_IN} from '../context/types/rpg-types'
import {apiUtils} from '../utils'
import {useRouter} from 'next/router'
import {Input, FormControl, FormLabel, Button, FormErrorMessage, InputGroup, InputRightElement} from '@chakra-ui/react'
import {Formik, Form, Field} from 'formik';

const Error = styled.span`
  color: red;
  font-weight: bold;
`
const CenteredDiv = styled.div`
  display: flex;
  min-height: 50vh;
  align-items: center;
  justify-items: center;
  justify-content: center;
  align-content: center;
`

export default function Login() {

  const router = useRouter()
  let {state: {isLoggedIn}, dispatch} = useRpgContext()
  const [show, setShow] = React.useState(false)
  const showPassword = () => setShow(!show)

  function validateUsername(username) {
    return validate(username)
  }

  function validatePassword(password) {
    return validate(password)
  }

  function validate(value) {
    let error
    if (!value) {
      error = 'This field is required'
    }
    return error
  }

  if (isLoggedIn) {
    router.push('/character', undefined, { shallow: true })
  }

  return (
    <CenteredDiv>
      <Formik
        initialValues={{
          username: '',
          password: ''
        }}
        onSubmit={(values, actions) => {
          const { username, password } = values
          apiUtils.authenticate(username.toLowerCase(), password)
            .then(data => data.json())
            .then(character => {
              dispatch({
                type: SET_IS_LOGGED_IN,
                payload: {character}
              })
            })
            .catch(console.error)
        }}
      >
        {(props) => (
          <Form>
            <Field name="username" validate={validateUsername}>
              {({field, form}) => (
                <FormControl isInvalid={form.errors.username && form.touched.username}>
                  <FormLabel htmlFor="username">Username</FormLabel>
                  <Input {...field} id="username" placeholder="Enter username"/>
                  <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="password" validate={validatePassword}>
              {({field, form}) => (
                <FormControl isInvalid={form.errors.password && form.touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  {/*<Input {...field} id="password" placeholder="Enter password"/>*/}
                  <InputGroup size="md">
                    <Input
                      {...field}
                      pr="4.5rem"
                      type={show ? 'text' : 'password'}
                      id="password"
                      placeholder="Enter password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={showPassword}>
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </CenteredDiv>
  )
}
