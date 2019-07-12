import React from "react";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { Helmet } from "react-helmet";

const Wrapper = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Box = styled.div`
  ${props => props.theme.whiteBox}
  border-radius: 0px;
  width: 100%;
  max-width: 350px;
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  button {
    margin-top: 15px;
  }
`;

const StateChager = styled(Box)`
  text-align: center;
  padding: 20px 0px;
`;

const Link = styled.span`
  color: ${props => props.theme.blueColor};
  cursor: pointer;
`;

const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  form {
    width: 100%;
    input {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 7px;
      }
    }
    button {
      margin-top: 10px;
    }
  }
`;
// ...email 이라고 하면 email로 들어온 값을 모두 다시 복사해서 넣는다느 의미이다. 즉 email={email}과 같다.

export default ({
  setAction,
  action,
  userName,
  email,
  position,
  belongTo,
  onSubmit,
  secret
}) => (
  <Wrapper>
    <Form>
      {action === "logIn" && (
        <>
          <Helmet>
            <title>로그인 | 청양군 포상록</title>
          </Helmet>
          <form onSubmit={onSubmit}>
            <Input placeholder={"이메일"} {...email} />
            <Button text={"로그인"} />
          </form>
        </>
      )}
      {action === "signUp" && (
        <>
          <Helmet>
            <title>로그인 | 청양군 포상록</title>
          </Helmet>
          <form onSubmit={onSubmit}>
            <Input placeholder={"이름"} {...userName} />
            <Input placeholder={"이메일"} {...email} type={email} />
            <Input placeholder={"직위"} {...position} />
            <Input placeholder={"소속"} {...belongTo} />
            <Button text={"가  입"} />
          </form>
        </>
      )}
      {action === "confirm" && (
        <>
          <Helmet>
            <title>암호확인 | 청양군 포상록</title>
          </Helmet>
          <form onSubmit={onSubmit}>
            <Input
              placeholder={"이메일로 전송된 암호를 붙여넣어주세요"}
              required
              {...secret}
            />
            <Button text={"확 인"} />
          </form>
        </>
      )}
    </Form>
    <StateChager>
      {action === "logIn" ? (
        <>
          계정이 없으신가요?{" "}
          <Link onClick={() => setAction("signUp")}>가입하기</Link>
        </>
      ) : (
        <>
          계정이 있으신가요?{" "}
          <Link onClick={() => setAction("logIn")}>로그인</Link>
        </>
      )}
    </StateChager>
  </Wrapper>
);
