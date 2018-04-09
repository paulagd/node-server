## **Datasets setup**

* The server needs to have the images from all the different datasets different folders.
Using our case as an example, three folders are set up:
```
  - oxbuild_images
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
case as for example 'instre' dataset, follow the next steps:

  1. Use the `txt_to_json.py` script provided in this code in order to create a
   unique id for each image taking the path of the subfolders as a reference.

      > To use the script, just change the 'file_path' and the 'title_list' attributes
      inside the script for a desired ones, where your `imlist.txt` is stored.
      >
      > Use the subsection `#IDEA: FOR A IMLIST`. The other section is to convert
      a `qimList`.

  2. Take into account that `imlist` should contain ALL the images of the system,
  including the ones in `qimList`.

* The `qimlist` of each dataset should also be provided in **json** format in order
to show the **N** desired examples of each dataset page (the ones allocated in qimList).

----

## **Qimlist & imlist setup**

1. The server needs a folder called `qimLists` that will contain all the main example qimList
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


2. To generate `imlists`, the script `create_imlist.py` can be useful. This script
requires just the path containing all the images in order to generate a `.txt file`
that contains all the id's listed.

3. To built the `qimList` we can choose which images we want to display as examples.
If we don't have any preferences, the script in the previous point can also generate
 a `random qimList`. To do that we need to use the subsection `#IDEA: FOR A IMLIST`.

> Another option for building a `qimList` would be to use the same `imlist`, if we
 want to display all the images in the dataset (it reqires to have a qimList name).

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
