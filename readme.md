# node-server

A server for the tool to visualize the results of a image retrieval engine system.


### Requirements

* Nodejs v6.11.3
* npm v5.4.2
* Python 2.7

> In the [React visualization tool for CBIR](https://github.com/paulagd/react-visualization-tool-CBIR) you can find the steps to install all the dependences.

---
### Repositories related:

 * [React visualization tool for CBIR](https://github.com/paulagd/react-visualization-tool-CBIR)
 * [python-server-salbow](https://bitbucket.org/emohe/python-server-salbow/src/master/)
 * [python-server-dummy](https://bitbucket.org/emohe/python-server-dummy/src/master/)

---
### Images storage

* Download a dataset and store all its images into ONE single folder named ${NAME_OF_THE_DATASET}.
* Place the folder in the main root directory of this project.

>**Note**: In the case of oxford, paris and instre dataset you can download the folders ready to use [here](https://drive.google.com/drive/folders/178bcx_trf4BZMUS8VOUpKh7JcqhZxC7C?usp=sharing).

---
### Getting started

* Clone the project:
	
    <kbd> git clone https://github.com/paulagd/node-server.git </kbd>

* Install dependencies:

  ```
  npm install
  npm install --dev
  ```

### Usage

* Execute the command: 

	<kbd>node index.js</kbd>

---------------------------------------------------------------
## Specific documentation of the project

* Install apidoc
  ```
  npm install -g apidoc
  ```

* Run documentation generation script:
  ```
  npm run doc
  ```
<br />

> **Note:** Open the file 'index.html' stored in the folder 'documentation' to see how to customize the system.
