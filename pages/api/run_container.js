import shell from 'shelljs';
export default function handler(req, res) {
    const { containerUrl } = req.body;
    let output = shell.exec(``);
    console.log(output);
    // display the logs generated by the command above
    res.status(201).json({ success: true })
}