import { useRouteError } from "react-router-dom";

import React from 'react'

const Error = () => {
  const error = useRouteError();
  return (
    <>
        <h1>Error</h1>
        <p>{error.statusText || error.message}</p>
    </>
  )
}

export default Error