import React, { useState } from "react";

import { Link, withRouter } from "react-router-dom";

import useInput from "../../Hooks/useInput";
import { LOG_OUT } from "../../Components/Header/HeaderQueries";
import { useMutation, useQuery } from "react-apollo-hooks";
import { ME } from "../../sharedQueries";
import ErrorView from "../../Components/Error";
import Header from "../../Components/Header/Header";
import FatText from "../../Components/FatText";

export default () => "Main";
/*   const { data } = useQuery(ME);
  const [action, setAction] = useState("error"); */
