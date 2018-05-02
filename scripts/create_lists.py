import random
import os, sys

# NOTE: THIS SCRIPT CREATES A IMLIST AND WITH OPTION OF A RANDOM QIMLIST in TXT format

# folder_path_images = "/Users/paulagomezduran/Desktop/TFG_NO_GUARDAT/node-server/instre"
# title_imlist = "instre"
# title_random_qimlist = "rand_qimList_paris"


if (len(sys.argv) != 4):
    print "ERROR IN NUMBER OF ARGUMENTS. The number of required arguments is 3 and the number of arguments received is", (len(sys.argv)-1)
    exit()
else:
    imlist = []
    folder_path_images = (sys.argv)[1]
    folder_path_images= os.path.abspath(folder_path_images)
    title_random_qimlist = (sys.argv)[2]
    title_imlist = (sys.argv)[3]

    # imlist = [os.path.join(folder_path, f) for f in os.listdir(folder_path) if f[0] != '.']
    imlist = [f for f in os.listdir(folder_path_images) if f[0] != '.']

    # create a .txt called imlist with all the names
    with open("../generated_txt_lists/"+title_imlist+".txt", 'w') as f:
        for im in imlist:
            f.write(im+"\n")

    # from this created file, select 54 random items in order to create a random qimlist
    random.shuffle(imlist)
    with open("../generated_txt_lists/"+title_random_qimlist+".txt", 'w') as f:
        for im in imlist[:55]:
            f.write(im+"\n")
