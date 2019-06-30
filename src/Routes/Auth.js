import React, { useState } from "react";
import styled from "styled-components";
import Input from "../Components/Input";
import Button from "../Components/Button";

const Wrapper = styled.div`
  min-height: ${props => props.theme.minHeight};
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

export default () => {
  const [action, setAction] = useState("logIn");

  return (
    <Wrapper>
      <Box>
        {action === "logIn" ? (
          <>
            <Input placeholder={"이메일(@korea.kr)"} />
            <Button text={"로그인"} />
          </>
        ) : (
          <>
            <Input placeholder={"이름"} />
            <Input placeholder={"이메일(@korea.kr)"} />
            <Input placeholder={"직위"} />
            <Input placeholder={"소속"} />
            <Button text={"가  입"} />
          </>
        )}
      </Box>
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
};
