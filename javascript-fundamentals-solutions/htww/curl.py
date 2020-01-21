'''Make a GET request to the icanhazdadjoke API with curl to find all jokes involving the word "pirate." (your answer should be the curl command required).'''
import os;
import subprocess;
subprocess.call("curl https://icanhazdadjoke.com/search?term=pirate",shell=True)
