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
  const [repoURL1, setRepoURL1] = useState("");
  const [repoURL2, setRepoURL2] = useState("");
  const [kubeConfigPath1, setKubeConfigPath1] = useState("");
  const [kubeConfigPath2, setKubeConfigPath2] = useState("");
  const [data, setData] = useState("");
  const option = [
    { value: "1", label: "Add" },
    { value: "2", label: "Delete" },
  ];
  function PromptUser() {
    alert(
      "Pods Deployed successfully. Please wait for 2-3 minutes for the pods to be deployed.",
    );
  }
  const handleSubmit = (repoURL, kubeConfigPath) => {
    if (data.category === "1") {
      axios
        .post("/api/deploy", { repoURL, kubeConfigPath })
        .then((res) => {
          console.log(res), " is res";
          if (res.status === 201) {
            alert("Pods Deployed successfully.");
          }
        })
        .catch((err) => {
          console.log(err);
        });
      console.log("deployed");
      console.log(data.category);
    } else {
      axios
        .post("/api/delete", { repoURL, kubeConfigPath })
        .then((res) => {
          console.log(res), " is res";
          if (res.status === 201) {
            alert("Pods Deleted successfully.");
          }
        })
        .catch((err) => {
          console.log(err);
        });

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
        type="text"
        placeholder="Repository URL"
        value={repoURL1}
        onChange={(e) => setRepoURL1(e.target.value)}
        className="input"
        style={{
          width: "40%",
          // marginLeft: "%",
        }}
      />
      <input
        type="text"
        placeholder="Kubeconfig path"
        value={kubeConfigPath1}
        onChange={(e) => setKubeConfigPath1(e.target.value)}
        className="input"
        style={{
          width: "40%",
          marginLeft: "4%",
          marginBottom: "2%",
        }}
      />
        <div className="clearfix">
          <button
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              axios
                .post("/api/get_logs", { repoURL1, kubeConfigPath1 })
              .then((res) => {
                console.log(res);
                setPodStatus(res.data.logs);
                console.log(podStatus, " is podstatus");
              })
                .catch((err) => {
                  console.log(err);
                });
              console.log("deployed");
              console.log(data.category);
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
        Add/Delete Pod
      </h1>
      <input
        type="text"
        placeholder="Repository URL"
        value={repoURL2}
        onChange={(e) => setRepoURL2(e.target.value)}
        className="input"
        style={{
          width: "40%",
          marginLeft: "2%",
        }}
      />
      <input
        type="text"
        placeholder="Kubeconfig path"
        value={kubeConfigPath2}
        onChange={(e) => setKubeConfigPath2(e.target.value)}
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
            handleSubmit(repoURL2, kubeConfigPath2);
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
            .post("/api/add_node", {})
            .then((res) => {
              console.log(res), " is res";
              if (res.status === 201) {
                alert("Node added successfully.");
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }}
        style={{
          marginLeft: "2%",
          marginTop: "0%",
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
