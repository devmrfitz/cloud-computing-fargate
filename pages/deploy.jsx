import axios from "axios";
import {useState} from "react";

export default function Deploy() {
  const [repoURL, setRepoURL] = useState('');
  const [kubeConfigPath, setKubeConfigPath] = useState('');

  const handleDeploy = (repoURL, kubeConfigPath) => {
    axios.post('/api/deploy', { repoURL, kubeConfigPath });
  }
  return (
    <div>
      <h1>Deploy</h1>
      <p>Deploy your site to production.</p>
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
          handleDeploy(repoURL, kubeConfigPath);
        }
        }
      >
        Deploy
      </button>


    </div>
  );
}
