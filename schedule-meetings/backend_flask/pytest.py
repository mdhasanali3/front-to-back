# import requests
import subprocess
from app import testm
# r = requests.get("http://google.com")       
# print(r.status_code)

# os_name = subprocess.run(["lsb_release", "-a"])
# print("The exit code was: %d" % os_name.returncode)

def app():
    print("hi success") 
    user = testm()
    return user
app()
