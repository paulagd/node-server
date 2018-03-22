## **Datasets setup**

* The server needs to have the images from all the different datasets different folders.
Using our case as an example, three folders are set up:
```
  - oxbuild_images
  - paris
  - instre
```
> The folders can be included in the .gitignore.

>To know how to distribute them inside a folder read the point below.

---

#### **Inside each dataset folder**

* Each folder should contain all the images together without subfolders inside.
However, this can just be done if each image has a unique id. When it is not the
case as for example 'instre' dataset, follow the next steps:

  1. Use the `txt_to_json.py` script provided in this code in order to create a
   unique id for each image taking the path of the subfolders as a reference.

      >To use the script, just change the 'file_path' and the 'title_list' attributes
      inside the script for a desired ones, where your `imlist.txt` is stored.

  2. Take into account that `imlist` should contain ALL the images of the system,
  including the ones in `qimList`


* The `qimlist` of each dataset should also be provided in **json** format in order
to show the **N** desired examples of each dataset page (the ones allocated in qimList).

----
## **Qimlist & imlist setup**

* The server needs a folder called `qimLists` that will contain all the main example qimList
and the imlists needed (in **json** format, as you can see below).

  > **Note**: Just a remainder for `qimList` and `imlist` vocabulary:
    - _**qimList**_ :  List with the example queries that we would like to have in the main
    page of the application. The identifiers on the json are not relevant.
    - _**link**_ : It is just used in the case of a dataset like `instre`, where the id's are
    not uniques and a `mapping file` is required. This list should contain **ALL** the
    images of the dataset, associating each one with a **UNIQUE ID**.

_Example of qimList structure_

    ```json
    [{
      "image":"INSTRE-S1/01a_canada_book/013.jpg",
      "id":"0"
    },{
      "image":"INSTRE-S1/01a_canada_book/062.jpg",
      "id":"1"
    },
    ...
    {
      "image":"INSTRE-M/50/107.jpg",
      "id":"1249"
    }]
    ```
    
  _Example of imlist structure_

      ```json
      [{
        "image":"INSTRE-S1/01a_canada_book/001.jpg",
        "id":"1"
      },{
        "image":"INSTRE-S1/01a_canada_book/002.jpg",
        "id":"2"
      },
      ...
      {
        "image":"INSTRE-M/50/118.jpg",
        "id":"28543"
      }]
      ```
