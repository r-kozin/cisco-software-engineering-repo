import React, { useEffect, useState } from "react";

export default function IPAddress(props) {
  const [ipAddress, setIpAddress] = useState(null);

  useEffect(() => {
    getIpAddress();
  }, []);

  async function getIpAddress() {
    if (props.IPType === "v4") {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      setIpAddress(data.ip);
    } else if (props.IPType === "v6") {
      const response = await fetch("https://api64.ipify.org?format=json");
      const data = await response.json();
      setIpAddress(data.ip);
    }
  }

  return <div>{ipAddress}</div>;
}
