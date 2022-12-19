import shell from 'shelljs';
export default function handler(req, res) {
  let output = shell.exec(`vagrant status`);
  res.status(200).json({ success: true , output}) 
}
