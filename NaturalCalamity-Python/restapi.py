from urllib2 import Request, urlopen, URLError
import sys 
import xmltodict
import pprint

print "Enter the following information for earthquake prediction"
city=raw_input("Enter the city name: ")
magnitude=raw_input("Enter the magnitude: ")
pp = pprint.PrettyPrinter(indent=4)



requestUrl='http://api.openhazards.com/GetEarthquakeProbability?q='+city+',CA&m='+magnitude+'&r=100'

request2=Request(requestUrl)
request = Request('http://api.openhazards.com/GetEarthquakeProbability?q=San Francisco,CA&m=6.8&r=100')
request1=Request('http://api.openhazards.com/GetEarthquakeCatalog')
pp = pprint.PrettyPrinter(indent=4)
try:
	response = urlopen(request2)
	Result = response.read()
	print Result
	#print kittens[559:1000]
except URLError, e:
    print 'No kittez. Got an error code:', e

doc = xmltodict.parse(Result)
print "Resultant Dictionay"
pp.pprint(doc)

print "Result: "
print "Place: ",doc["xmlresponse"]["location"]["place"]
print "Radius: " ,doc["xmlresponse"]["location"]["radius"]["#text"], doc["xmlresponse"]["location"]["radius"]["@unit"]
print "Window: ", doc["xmlresponse"]["forecast"]["window"]["#text"],doc["xmlresponse"]["forecast"]["window"]["@unit"]
print "Probability: ", doc["xmlresponse"]["forecast"]["prob"]



"""
    You can find more info about the request parameter here | The response is in xml format
http://www.openhazards.com/data/GetEarthquakeProbability
We can try this rest api as well, here we get the response in Json format : 
http://www.aerisweather.com/support/docs/api/reference/endpoints/earthquakes/
"""