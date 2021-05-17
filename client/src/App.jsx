
import React, { useCallback, useContext, useEffect } from "react";
import { SocketContext } from "./hooks/socketContext";
import Routes from "./routes";
import "./App.css";

function App() {
  const { socket, initialise } = useContext(SocketContext);
  const init = useCallback(() => initialise(), [initialise]);

  useEffect(() => {
    init();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    (!socket) ? (
     <div>Server is not up!!!</div>
    ): (<Routes />)
  )
}
  export default App;
