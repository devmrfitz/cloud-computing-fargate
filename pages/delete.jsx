import axios from "axios";
import {useState} from "react";

export default function Delete() {
  const [repoURL, setRepoURL] = useState('');
  const [kubeConfigPath, setKubeConfigPath] = useState('');

  const handleDelete = (repoURL, kubeConfigPath) => {
    axios.post('/api/delete', { repoURL, kubeConfigPath });
  }
  return (
    <div>
      <h1>Delete deployment</h1>
      <p>Remove your deployment from production</p>
      <input
        type="text"
        placeholder="Repository URL"
        value={repoURL}
        onChange={e => setRepoURL(e.target.value)}
      />
      <input
        type="text"
        placeholder="Kubeconfig path"
        value={kubeConfigPath}
        onChange={e => setKubeConfigPath(e.target.value)}
      />
      <button
        onClick={() => {
          handleDelete(repoURL, kubeConfigPath);
        }
        }
      >
        Delete
      </button>
    </div>
  );
}
