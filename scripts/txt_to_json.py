import json
import sys,os

# NOTE: "image" --> will contain the path of the allocated image
#       "id"  ---->  will contain a unic id

# file_path = "/Users/paulagomezduran/Desktop/TFG_NO_GUARDAT/node-server/generated_txt_lists/rand_qimList_instre.txt"
# title_list = "qimList_instre"


if (len(sys.argv) != 3):
    print "ERROR IN NUMBER OF ARGUMENTS. The number of required arguments is 2 and the number of arguments received is", (len(sys.argv)-1)
    exit()
else:
    file_path = (sys.argv)[1]
    file_path= os.path.abspath(file_path)
    title_list = (sys.argv)[2]
    id_start = 0
    file_list = []
    with open(file_path, "r") as f:
      for line in f:
        file_list.append(line.strip())
    data = []
    for i, item in enumerate(file_list):
        if(item is not None):
            if(item.find("/")):
                item = item.replace("/", "__").strip()
            data.append({"image": item, "id": i+id_start})  #starting id in 1

    with open("../qimLists/"+title_list+".json", 'w') as f:
        json.dump(data, f)
