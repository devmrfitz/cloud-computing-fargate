import {useEffect, useState} from "react";

export default function Status(req, res) {
  const [status, setStatus] = useState('Loading pod details...');

  useEffect(() => {
    fetch('/api/get_pods')
      .then(res => res.json())
      .then(data => {
        setStatus(data.output);
      })
  }, []);



  return (
    <pre>
      {status}
    </pre>
  )

}
