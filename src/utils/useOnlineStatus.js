import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  


  /*to findout the online status we use the event listener - online event */

  useEffect(() => {
    window.addEventListener("offline", () => {
        setOnlineStatus(false);
      
    });
    window.addEventListener("online", () => {
        setOnlineStatus(true);

    });
  }, []);
  

 

  return onlineStatus;
};

export default useOnlineStatus;
