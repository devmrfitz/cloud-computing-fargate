import shell from 'shelljs';
export default function handler(req, res) {
  const {repoURL, kubeConfigPath} = req.body;
  const folderName = repoURL.split('/').pop().split('.').shift()+ Math.floor(Math.random() * 1000);
  // clone the repo
  shell.exec(`git clone ${repoURL} /tmp/${folderName}`);

  // deploy the repo
  let output = shell.exec(`kubectl apply -f /tmp/${folderName}/${kubeConfigPath}`);

  shell.rm('-rf', `/tmp/${folderName}`);

  res.status(201).json({ success: true , }) 
}
