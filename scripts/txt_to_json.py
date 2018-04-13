import json

# NOTE: "image" --> will contain the path of the allocated image
#       "id"  ---->  will contain a unic id
#
# NOTE: Just uncomment one of the next IDEA options(for a qimList / for a imlist)


# IDEA: FOR A QIMLIST
file_path = "/Users/paulagomezduran/Desktop/TFG_NO_GUARDAT/node-server/generated_txt_lists/rand_qimList_instre.txt"
title_list = "qimList_instre"
id_start = 0

# IDEA:FOR A IMLIST:
# file_path = "/Users/paulagomezduran/Desktop/TFG_NO_GUARDAT/node-server/generated_txt_lists/imlist_instre.txt"
# title_list = "imlist_instre"
# id_start = 1


file_list = []
with open(file_path, "r") as f:
  for line in f:
    file_list.append(line.strip())
data = []
for i, item in enumerate(file_list):
    data.append({"image": item, "id": i+id_start})  #starting id in 1

with open("../qimLists/"+title_list+".json", 'w') as f:
    json.dump(data, f)
