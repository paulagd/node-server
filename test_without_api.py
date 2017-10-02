#test_without_api
import sys, json, numpy as np

#Read data from stdin
def read_in():
    lines = sys.stdin.readlines()
    #Since our input would only be having one line, parse our JSON data from that
    return json.loads(lines[0])

def postServer(id_img):
    # TODO: function EVA
    rank_data=open('./ranks_best_oxford/'+ id_img).read()
    return json.loads(rank_data)

def main():

    #get our data as an array from read_in()
    def_data = postServer(read_in())

    #return the sum to the output stream
    print(def_data)


#start process
if __name__ == '__main__':
    main()
