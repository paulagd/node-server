# node-server
---
A server for the tool to visualize the results of a image retrieval engine system.
---
## Getting started
---
Create Project
---
```
git clone https://github.com/paulagd/node-server.git
```

Setup
---
```
npm install
npm install --dev

```

Usage
---

`node index.js`

---------------------------------------------------------------
## CUSTOMIZATION

### Datasets

* The server needs to have the images from all the different datasets in folders.
In this case, three folders are set up:
```
  - oxbuild_images
  - paris
  - instre
```
* Each folder should contain all the images together without subfolders inside.
However, this can just be done if each image has a unique id. When it is not the
case as 'instre' dataset, a 'txt_to_json.py' script is provided in order to create
an unique id for each image given the path of the subfolders. To use the script,
just follow the instructions commented inside the file.

* The qimlists of each dataset should also be provided in 'json' format in order
to show the main 'x_desired' examples in each dataset page.
