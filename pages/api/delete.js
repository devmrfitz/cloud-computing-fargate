import shell from 'shelljs';
export default function handler(req, res) {
  const {repoURL, kubeConfigPath} = req.body;
  const folderName = repoURL.split('/').pop().split('.').shift()+ Math.floor(Math.random() * 1000);
  // clone the repo
  shell.exec(`vagrant ssh leader -c "git clone ${repoURL} /tmp/${folderName}"`);

  // deploy the repo
  shell.exec(`vagrant ssh leader -c "kubectl delete -f /tmp/${folderName}/${kubeConfigPath}"`);

  shell.rm('-rf', `vagrant ssh leader -c "/tmp/${folderName}"`);

  res.status(201).json({ success: true })
}
