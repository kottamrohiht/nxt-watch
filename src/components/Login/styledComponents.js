import styled from 'styled-components'

export const Heading = styled.h1`
  color: red;
`
export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Form = styled.form`
  width: 90%;
  @media (min-width: 768px) {
    width: 40%;
  }
  height: 52%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
`

export const UsernameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const Label = styled.label`
  color: ${props => (props.showPassword ? 'black' : '#64748b')};
  font-size: 13px;
  margin-bottom : 5px;
  font-family : 'Roboto'
  padding-bottom: 5px;
  font-weight: 500;
  cursor: pointer;
`

export const Input = styled.input`
  border: 1px solid black;
  width: 100%;
  padding: 8px;
  font-size: 15px;
  font-weight : 600;
  color: black;
  font-weight: 500;
  margin-bottom: 15px;
  border-radius : 5px;
  ::placeholder{
      color : black;
  }
  }
`

export const ShowpasswordContainer = styled.div`
  display: flex;
  align-items: center;
`

export const InputCheckbox = styled.input`
  height: 13px;
  width: 13px;
  margin-right: 5px;
  cursor: pointer;
`

export const LoginButton = styled.button`
  margin-top: 20px;
  width: 100%;
  color: white;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  background-color: #3b82f6;
  border: none;
  border-radius: 5px;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
`

export const LoginImg = styled.img`
  width: 40%;
`

export const ErrorContainer = styled.div`
  min-height: 35px;
  margin-top: 5px;
  margin-bottom: 10px;
`

export const ImgContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`

export const ErrorMsg = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: red;
`
