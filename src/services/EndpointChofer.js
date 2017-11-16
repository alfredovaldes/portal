import Api from '@/services/Api'

export default{
  index () {
    return Api().get(`chofer`)
  },
  show (id) {
    return Api().get(`chofer/${id}`)
  },
  post (obj) {
    return Api().post(`chofer`, obj)
  },
  put (obj) {
    return Api().post(`chofer/${obj.id}`, obj)
  }
}
