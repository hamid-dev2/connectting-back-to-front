import Api from './api.js'
import data from './data.js'

const api = new Api("http://localhost:<PORT>/api/...")

// ** Examples :
// api.post() ==> For creating a new data
// api.get() ==> For getting the data 
// api.put(data) ===> for replacing new data 
// api.patch(data) ===> for updating new data with partials section
// api.delete() ===> for deleting the data