import json

# IDEA: THIS SCRIPT WILL PROVIDE A JSON WITH THE DESIRED STRUCTURE FROM A TXT FILE WITH
#       A LIST OF THE NAME OF IMAGES IN THE DATASET (ITS PATH ALLOCATION)
#       ** THE DESIRED STRUCTURE IS :
#           [{
#               "image":"INSTRE-S1/01a_canada_book/013.jpg",
#               "id":"0"
#           },{
#               "image":"INSTRE-S1/01a_canada_book/062.jpg",
#               "id":"1"
#           },{
#               ...
#           }]
#
# NOTE: "image" will contain the path of the allocated image
#       "id" will contain the unic id
#

# IDEA:FOR A QIMLIST: (list to be shown as example)
file_path = "/Users/paulagomezduran/Desktop/TFG_NO_GUARDAT/node-server/rand_qimList_groups.txt"
title_list = "qimList_groups"
id_start = 0

# IDEA:FOR A IMLIST:
# file_path = "/Users/paulagomezduran/Desktop/TFG_NO_GUARDAT/node-server/imList_groups.txt"
# title_list = "imlist_groups"
# id_start = 1


file_list = []
with open(file_path, "r") as f:
  for line in f:
    file_list.append(line.strip())
data = []
for i, item in enumerate(file_list):
    data.append({"image": item, "id": i+id_start})  #starting id in 1

with open("./qimLists/"+title_list+".json", 'w') as f:
    json.dump(data, f)
