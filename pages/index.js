import axios from "axios";
import { useState } from "react";
import Display_logs from "./display_logs";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function Home() {
  const [podName, setPodName] = useState("");
  const [containerUrl, setContainerUrl] = useState("");
  const [podStatus, setPodStatus] = useState("");
  const [nodeStatus, setNodeStatus] = useState("");
  const [repoURL, setRepoURL] = useState("");
  const [kubeConfigPath, setKubeConfigPath] = useState("");
  const [data, setData] = useState("");
  const option = [
    { value: "1", label: "Add" },
    { value: "2", label: "Delete" },
  ];
  const handleSubmit = (repoURL, kubeConfigPath) => {
    if(data.category==="1"){
      axios.post("/api/deploy", { repoURL, kubeConfigPath });
      console.log("deployed");
      console.log(data.category);
    }
    else {
      axios.post("/api/delete", { repoURL, kubeConfigPath });
      console.log("deleted");
      console.log(data.category);
    }
  };
  return podStatus === "" ? (
    <div>
      <div className="container">
        <h1>Home</h1>
        <hr />
        <h1>Pod Status Report</h1>

        <input
          style={{
            width: "40%",
            // marginLeft:"2%",
          }}
          type="text"
          placeholder="Enter POD Name"
          name="pod_name"
          value={podName}
          onChange={(e) => setPodName(e.target.value)}
          className="input"
        />
        <div className="clearfix">
          <button
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              axios
                .post("/api/get_logs", {
                  podName,
                })
                .then((res) => {
                  console.log(res);
                  setPodStatus(res.data.logs);
                  console.log(podStatus, " is podstatus");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Get Logs
          </button>
        </div>
      </div>
      <h1
        style={{
          marginLeft: "2%",
        }}
      >
        Add/Delete Node
      </h1>
      <input
        type="text"
        placeholder="Repository URL"
        value={repoURL}
        onChange={e => setRepoURL(e.target.value)}
        className="input"
        style={{
          width: "40%",
          marginLeft: "2%",
        }}
      />
      <input
        type="text"
        placeholder="Kubeconfig path"
        value={kubeConfigPath}
        onChange={e => setKubeConfigPath(e.target.value)}
        className="input"
        style={{
          width: "40%",
          marginLeft: "4%",
          marginBottom: "2%",
        }}
      />
      <div
        style={{
          width: "40%",
          marginLeft: "2%",
          marginBottom: "2%",
          display: "flex",
        }}
      >
        <Dropdown
          options={option}
          onChange={(e) => setData({ ...data, category: e.value })}
          value={data.type}
          placeholder="Select an option"
        />
        <button
            onClick={() => {
              handleSubmit(repoURL, kubeConfigPath);
            }}
          className="btn"
          style={{
            marginLeft: "10%",
            marginTop: "0%",
          }}

          >
            Submit
          </button>
      </div>
      <button
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              axios
                .post("/api/add_node", {
                })
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
            style={{
              marginLeft:"2%",
              marginTop:"0%",
            }}
          >
            Add Node
          </button>

    </div>
  ) : (
    Display_logs(podStatus)
  );
}

export default Home;
