import Api from '@/services/Api'

export default{
  index () {
    return Api().get(`camion`)
  },
  show (id) {
    return Api().get(`camion/${id}`)
  },
  post (obj) {
    return Api().post(`camion`, obj)
  },
  put (obj) {
    return Api().post(`camion/${obj.id}`, obj)
  }
}
