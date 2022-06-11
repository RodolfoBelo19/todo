import styled from "styled-components";

type ContainerProps = {
  done: boolean
}

export const Container = styled.div(({ done } : ContainerProps ) => (`
  color: white;
  display: flex;
  padding: 20px;
  align-items: center;
  background-color: #333;
  margin-bottom: 10px;
  border-radius: 7px;

  input {
    margin-right: 5px;
    width: 25px;
    height: 25px;
  }

  label {
    font-size: 18px;
    text-decoration: ${done ? 'line-through' : 'initial'}
  }
`))