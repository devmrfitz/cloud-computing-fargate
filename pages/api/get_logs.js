import shell from 'shelljs';
export default function handler(req, res) {
  const {repoURL1, kubeConfigPath1} = req.body;
  const folderName = repoURL1.split('/').pop().split('.').shift()+ Math.floor(Math.random() * 1000);
  // clone the repo
  shell.exec(`vagrant ssh leader -c "git clone ${repoURL1} /tmp/${folderName}"`);
  // deploy the repo
  let output = shell.exec(`vagrant ssh leader -c "kubectl describe -f /tmp/${folderName}/${kubeConfigPath1}"`);
  // let output = shell.exec(`kubectl cluster-info dump`);
  shell.rm('-rf', `vagrant ssh leader -c "/tmp/${folderName}"`);
  res.status(201).json({ success: true, logs: output });
}