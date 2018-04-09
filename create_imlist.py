import random
import os

# IDEA: THIS SCRIPT CREATES A IMLIST AND WITH OPTION OF A RANDOM QIMLIST in TXT format
folder_path = "/Users/paulagomezduran/Desktop/TFG_NO_GUARDAT/node-server/utk"

title_imlist = "imlist_UTK"
title_random_qimlist = "rand_qimList_UTK"
imlist = []

# take the .txt file (option to append more than one and unify them)
# imlist = [os.path.join(folder_path, f) for f in os.listdir(folder_path) if f[0] != '.']
imlist = [f for f in os.listdir(folder_path) if f[0] != '.']

# create a .txt called imlist with all the names
with open("./"+title_imlist+".txt", 'w') as f:
    for im in imlist:
        f.write(im+"\n")

# from this created file, select 54 random items in order to create a random qimlist
random.shuffle(imlist)
with open("./"+title_random_qimlist+".txt", 'w') as f:
    for im in imlist[:55]:
        f.write(im+"\n")
