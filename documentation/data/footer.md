# **Python connection**

The python connection is done by `zerorpc` library and it is fully explained in the
`python-test-server` documentation.

* The only thing to comment is that the port in the connection from this repository
  should be, as it is logical, the same that you are using in your python server.

      client.connect("tcp://0.0.0.0:4243");
