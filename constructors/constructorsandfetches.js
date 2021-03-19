// constructors
// the constructor method is a special method of a class for creating and initializing an 
// object of that class
// a constructor enables you to provide any custom initialization that must be done before
// any other methods can be called on an instantiated object

// A basic fetch request is really simple to set up
// For basic fetches, we are fetching a JSON file across the network.
// The simplest use of fetch() takes on argument - the path to the resource you want to fetch
// and returns a promise containing the response (a Response object)
// this is just an HTTP response, not the actual JSON. To extract the JSON body content
// from the response, we use the json() method