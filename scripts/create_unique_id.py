import cv2
import os
import shutil

# IDEA: THIS SCRIPT CREATES A IMLIST AND WITH OPTION OF A RANDOM QIMLIST in TXT format
folder_path = "/Users/paulagomezduran/Desktop/TFG_NO_GUARDAT/node-server/instre_subfolders"
new_path = "/Users/paulagomezduran/Desktop/TFG_NO_GUARDAT/node-server/instre"
number_of_levels = 2  #NOTE: LEVEL OF SUBFOLDERS INSIDE THE folder_path

image_list = []
names_list = []

def return_paths_or_files(folder_directory):
    dir_list = []
    for f in os.listdir(folder_directory):
        if f[0] != '.' and os.path.isdir(os.path.join(folder_directory, f)):
            dir_list.append(os.path.join(folder_directory, f))
            # dir_list.append(os.path.join(folder_directory, f))
    if len(dir_list) > 0:
        return dir_list
    else:
        return False

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
    name = files.split(folder_path.split("/")[-1])[1].replace("/", "__").strip()[2:] #REMOVE 2 __ OF THE FIRST POSITION
    if files.endswith(".jpg"):
        shutil.copy(files, os.path.join(new_path , name))
