import React, {useState} from 'react'

export default function Latency() {
    const [latency, setLatency] = useState(null);
    const socket = new WebSocket('ws://localhost:55455');

    socket.addEventListener('open', function (event) {
        console.log('Connected to WS Server')
    });

    socket.addEventListener('message', function (event) {
        console.log('Message from server ', event.data);
        const timeDifference = Date.now() - event.data;
        console.log(timeDifference);
        setLatency(timeDifference);
    });
  return (
    <div className='latency-info'>{latency} ms</div>
  )
}
