import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import {
  LOG_IN,
  CREATE_ACCOUNT,
  CONFIRM_SECRET,
  LOCAL_LOG_IN
} from "./AuthQueries";
import { toast } from "react-toastify";

export default () => {
  const [action, setAction] = useState("logIn");
  const userName = useInput("");
  const email = useInput("");
  const position = useInput("");
  const belongTo = useInput("");
  const Rank = useInput("");
  const secret = useInput("");
  const requestSecretMutation = useMutation(LOG_IN, {
    variables: { email: email.value }
  });

  const createAccountMutation = useMutation(CREATE_ACCOUNT, {
    variables: {
      userName: userName.value,
      email: email.value,
      position: position.value,
      belongTo: belongTo.value,
      Rank: Rank.value
    }
  });

  const confirmSecretMutation = useMutation(CONFIRM_SECRET, {
    variables: {
      email: email.value,
      secret: secret.value
    }
  });

  const localLogInMutation = useMutation(LOCAL_LOG_IN);

  const onSubmit = async e => {
    e.preventDefault();
    if (action === "logIn") {
      if (email.value !== "") {
        try {
          const {
            data: { requestSecret }
          } = await requestSecretMutation();

          if (!requestSecret) {
            toast.error("계정이 아직 없습니다. 계정을 만들어주세요.");
          } else {
            toast.success(
              "당신의 이메일로 전송된 로그인 비밀문자를 입력주세요"
            );
            setAction("confirm");
          }
        } catch {
          toast.error("비밀암호를 받지 못했습니다. 다시 시도해주세요");
        }
      } else {
        toast.error("이메일을 입력해주세요");
      }
    } else if (action === "signUp") {
      if (
        userName.value !== "" &&
        email.value !== "" &&
        position.value !== "" &&
        belongTo.value !== "" &&
        Rank.value !== ""
      ) {
        try {
          const {
            data: { createAccount }
          } = await createAccountMutation();
          if (!createAccount) {
            toast.error("계정을 생성할 수 없습니다");
          } else {
            toast.success("계정생성에 성공했습니다. 로그인해주세요.");
            setTimeout(() => setAction("login"), 3000);
          }
        } catch (e) {
          toast.error(e.message);
        }
      } else if (action === "confirm") {
        if (secret.value !== "") {
          try {
            const {
              data: { confirmSecret: token }
            } = await confirmSecretMutation();
            if (token !== "" && token !== undefined) {
              localLogInMutation({ variables: { token } });
            } else {
              throw Error();
            }
          } catch {
            toast.error(
              "비밀암호를 확인할 수 없습니다. 다시 한번 확인해주세요"
            );
          }
        }
      }
    }
  };

  return (
    <AuthPresenter
      setAction={setAction}
      action={action}
      userName={userName}
      email={email}
      position={position}
      belongTo={belongTo}
      Rank={Rank}
      secret={secret}
      onSubmit={onSubmit}
    />
  );
};
