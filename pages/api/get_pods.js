import shell from 'shelljs';
export default function handler(req, res) {
  let output = shell.exec(`vagrant ssh leader -c "kubectl get pods"`);
  res.status(200).json({ success: true , output})
}
