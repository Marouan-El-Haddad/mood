import { SignUp } from '@clerk/nextjs'
//https://clerk.com/docs/components/authentication/sign-up
const SignUpPage = () => {
  return <SignUp afterSignUpUrl="/new-user" redirectUrl="/new-user" />
}

export default SignUpPage
