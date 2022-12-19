import {useState} from "react";

export default function Autoscale() {
    const [service, setService] = useState("")
    return (
        <div>
            <input value={service} onChange={(event) => {

              setService(event.target.value)
            }
            } ></input>
          <button onClick={() => {
            fetch('/api/autoscale', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({service: service})
            }).then(res => res.json()
            ).then(() => {
              window.alert('Service autoscaled')
            })
          }}>Autoscale</button>
        </div>
    )
}
