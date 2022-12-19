import {useEffect, useState} from "react";

export default function Status(req, res) {
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    fetch('/api/show_status')
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
