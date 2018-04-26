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
>
> To know how to distribute them inside a folder read the point below.  

---

#### **Inside each dataset folder**

* Each folder should contain all the images together without subfolders inside.
However, this can just be done if each image has a unique id. When it is not the
case, as for example 'instre' dataset, you can use our provided script in order
to achieve the desired structure.

  1. `create_unique_id.py`

      This scripts generates a new folder with all the images inside, changing their
      id for the whole path. It changes all the slash (`/`) for a double underscore (`__`).

      > If your system uses the full path as a identifier of the image, this conversion
      can be reversed in your system when receiving the id's. An example of that is
      provided in our python-test-server.

      * The only parameters to be modified are `folder_path` and `new_path`. They are
      at the top of the script. The first one is the path where your images are
      currently stored and the second one is where you would like to store them.
      Here you can see an example:

          ```
          folder_path = "/Users/paulagomezduran/Desktop/node-server/instre_subfolders"
          new_path = "/Users/paulagomezduran/Desktop/node-server/instre"
          ```
----

## **Qimlist & imlist setup**

The server needs a folder called `qimLists` that will contain all the main example qimList
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


To generate this lists, two more scripts are provided:

  2. `create_imlist.py`

      This script generates two `.txt` files. The first one is an `imlist`
      containing all the id of the images in the whole dataset. The second one is
      a random `qimList` which will store 55 random id's from some images.

      The only thing to modify is the path containing all the images and the desired
      titles. You can see an example in the following code:

      > The lists will be stored in a folder called `generated_txt_lists`.

      ```
      folder_path_images = "/Users/paulagomezduran/Desktop/node-server/instre"

      title_imlist = "imlist_instre"
      title_random_qimlist = "rand_qimList_instre"
      ```

      > If you have some preferences in the images that you would like to store
      in the `qimList` you can also modify the script in order to substitute them
      for the random ones.
      >
      > Another option for building a `qimList` would be to use the same `imlist`, if we
       want to display all the images in the dataset (it reqires to have a qimList name).

  3. `txt_to_json.py`

      This script is provided in order to convert the `.txt` files into `.json`
      format to fit in the project. This script will create a unique id for each
      image and it will appear in the following structure:


         [{
             "image":"INSTRE-S1/01a_canada_book/013.jpg",
             "id":"0"
         },{
             "image":"INSTRE-S1/01a_canada_book/062.jpg",
             "id":"1"
         },{
             ...
         }]


      To use the script, just change the `file_path` and the `title_list` attributes
      inside the script for a desired ones.

      > You can use the subsection `#IDEA: FOR A IMLIST` to convert an `imlist` and
      the other section to convert a `qimList`.

_Example of qimList structure_


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


  _Example of imlist structure_

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
