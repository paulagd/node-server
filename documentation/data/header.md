## **Datasets setup**

* The server needs to have the images from all the different datasets different folders.
Using our case as an example, three folders are set up:
```
  - oxford
  - paris
  - instre
```
> The folders can be included in the .gitignore.
>
> The name of the folder should be the same name that you will put in the navigation
bar of the UI. They should be in lowercase.


#### **Inside each dataset folder**

* Each folder should contain all the images together without subfolders inside.
However, this can just be done if each image has a unique id. When it is not the
case, as for example 'instre' dataset, we provide a script which transform the id
of each image by taking the path as a reference.

  1. `create_unique_id.py` ${YOUR_PATH_FOLDER} ${NEW_PATH_FOLDER}

      * YOUR_PATH_FOLDER --> path of the dataset in the raw structure.
      * NEW_PATH_FOLDER ---> empty folder where the images will be copied in the desired structure.
      > The ${NEW_PATH_FOLDER} should be already existing.

      This scripts copy all the images inside the ${NEW_PATH_FOLDER}, changing their
      id for the whole path. It changes all the slash (`/`) for a double underscore (`__`)
      for a better web reading.

      > It should be taken into account that the application will give you these id's
      in this format, thus the reversed conversion should be done in your code.
      >
      > An example of it can be seen in the `python-server-dummy`.

      ```
      python create_unique_id.py ${YOUR_PATH_FOLDER} ${NEW_PATH_FOLDER}
      ```

----

## **Qimlist & imlist setup**

* The server needs a folder called `qimLists` that will contain all the main example qimList
and the imlists needed (in **json** format, as you can see below).

> **Note**: Just a remainder for `qimList` and `imlist` vocabulary:
>
>   * **qimList** :  List with the example queries that we would like to have in the main
    page of the application. The identifiers on the json are not relevant. However, the name
    of the qimList file should be `qimList_{name_of_dataset}`.
>
>   * **imlist** : It is just used in the case of a dataset like `instre`, where the id's are
    not uniques and a `mapping file` is required. This list should contain **ALL** the
    images of the dataset, associating each one with a **UNIQUE ID**. The name
    of the imlist file should be `imlist_{name_of_dataset}`.


* To generate this lists, two more scripts are provided:

  2. `create_lists.py`

      This script generates two `.txt` files which correspond to a random imlist and a random qimlist
      in case that you don't have any of them generated.

      You should notice that this script will just generate random qimList and imlist, so it won't be
      useful if you are using a CBIR with a specific order for thr image descriptors. In that case,
      you should use your own lists. However, it can be useful if you want to connect just a dataset
      into the system in order to just display it and explore it.

      * The lists will be stored in a folder called `generated_txt_lists`.

      ```
      python create_lists.py ${YOUR_FOLDER_PATH_IMAGES} ${DESIRED_QIMLIST_TITLE} ${DESIRED_IMLIST_TITLE}
      ```

      > If you have some preferences in the images that you would like to store
      in the `qimList` you can also modify the script in order to substitute them
      for the random ones.
      >
      > Another option for building a `qimList` would be to use the same `imlist`, if we
       want to display all the images in the dataset (you should just have the imlist
       with the name of `qimlist`).

  3. `txt_to_json.py`

      This script will convert the `.txt` files into `.json` format in order to
      fit in the project structure. It will create a unique id for each image thus
      ending up with a list with the following structure:


         [{
             "image":"radcliffe_camera_000519.jpg",
             "id":"0"
         },{
             "image":"hertford_000027.jpg",
             "id":"1"
         },{
             ...
         }]


      ```
      python txt_to_json.py ${YOUR_FILE_PATH} ${DESIRED_LIST_TITLE}
      ```
      > It will also change your id's if they contain `"/"` into `"__"`
      >
      > The json list will be stored in the `qimLists` folder which is in the root directory.


_Example of qimList/imlist structure_

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
