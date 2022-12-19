import shell from 'shelljs';
export default function handler(req, res) {
  const {service} = req.body;

  // deploy the repo
  shell.exec(`kubectl autoscale deployment ${service} --cpu-percent=50 --min=1 --max=10`);


  res.status(201).json({ success: true , }) 
}
