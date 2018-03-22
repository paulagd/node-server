# **Python connection**

### How needs the project to be structured?

* The project will need a python server that allows to merge your code with this project.
To do that, you will need to create a `main server` file which will connect your code with
the `nodejs` server.

  1. Install the `zerorpc` library.

      ```
        pip install zerorpc
      ```

  2. Create the `MainServer` file with the following code:

      ```py
      import zerorpc
      import logging
      import sys, json

      class MainServer(object):

      # define methods of the next point if needed.

      logging.basicConfig()
      s = zerorpc.Server(MainServer())
      s.bind("tcp://0.0.0.0:4243")
      print("Python server listening on: 4243")
      s.run()
      sys.stdout.flush()
      ```

      > Install also the other dependencies if needed.

  3. Add and complete the following methods if required.

      - `postServer` method

          This method receives all the parameters needed to compute the rankin
          of a query given.

          First of all, you can define the method like:

          ```py
          def postServer(self, id_img, url, encoded_image, dataset, path):

          ```

          Then, you can code whatever you need to compute the rankin. Finally, you
          should return a `json structure` with the keys `IdSequence` and `Image` as
          it can be seen in the following example.

          ```json
              [
                {
                    "IdSequence": "0",
                    "Image": "paris_general_002391"
                },
                {
                    "IdSequence": "1",
                    "Image": "paris_eiffel_000128"
                },
                     ...

                {
                    "IdSequence": "5011",
                    "Image": "paris_invalides_000541"
                }
              ]

          ```

      - `postFeedback_And_Update` method

          This method receives all the parameters needed to get the feedback of the user.
          You should return the updated rankin after computing the desired experiments.

          First of all, you can define the method like:

          ```py
          def postFeedback_And_Update(self, id_img, url, encoded_image, dataset, path, similar_list, mode):

          ```

          Then, you can code whatever you need in order to return a json object with
          the following shape (it changes depending on the mode):

          * QE MODE:

          ```json
          {
              "json": [{},...,{}],
              "initial": 0.700725,
              "final": 0.639502
           }
          ```

           * Annotation mode
           ```json
           {
              "json": [{},...,{}],
              "success": true
           }
          ```

          > The `json` field will contain the rankin updated and it should have the same
          structure as in the method above.
