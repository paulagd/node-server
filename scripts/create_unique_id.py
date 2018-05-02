import cv2
import os
import shutil
import sys
from IPython import embed
# NOTE: THIS SCRIPT CREATES A IMLIST AND WITH OPTION OF A RANDOM QIMLIST in TXT format
# folder_path = "/Users/paulagomezduran/Desktop/TFG_NO_GUARDAT/node-server/instre_subfolders"
# new_path = "/Users/paulagomezduran/Desktop/TFG_NO_GUARDAT/node-server/instre"

def return_paths_or_files(folder_directory):
    dir_list = []
    for f in os.listdir(folder_directory):
        if f[0] != '.' and os.path.isdir(os.path.join(folder_directory, f)):
            dir_list.append(os.path.join(folder_directory, f))
    if len(dir_list) > 0:
        return dir_list
    else:
        return False

if (len(sys.argv) != 3):
    print "ERROR IN NUMBER OF ARGUMENTS. The number of required arguments is 2 and the number of arguments received is", (len(sys.argv)-1)
    exit()
else:
    folder_path = (sys.argv)[1]
    folder_path= os.path.abspath(folder_path)
    new_path = (sys.argv)[2]
    new_path = os.path.abspath(new_path)

    #NOTE: LEVEL OF SUBFOLDERS INSIDE THE folder_path
    number_of_levels = 2

    image_list = []
    names_list = []

    i = 0
    x = return_paths_or_files(folder_path)
    while(i < (number_of_levels-1)):
        if(x):
            for path in x:
                y = return_paths_or_files(path)
                if (y):
                    x.extend(y)
                    image_list.extend(y)
        i +=1

    for i in image_list:
        aux = [os.path.join(i, f) for f in os.listdir(i) if '.txt' not in f]
        names_list.extend(aux)


    for files in names_list:
        if files.endswith(".jpg"):
            #REMOVE 2 __ OF THE FIRST POSITION
            name = files.split(os.path.basename(folder_path))[1].replace("/", "__").strip()[2:]
            shutil.copy(files, os.path.join(new_path , name))
