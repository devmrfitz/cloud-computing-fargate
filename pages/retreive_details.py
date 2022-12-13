# how to write terminal commands in python
import subprocess

output = subprocess.run(["kubectl", "get","node", "kube-worker-1"], stdout=subprocess.PIPE)
print(output.stdout.decode())
