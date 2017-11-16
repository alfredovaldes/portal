import Api from '@/services/Api'

export default{
  index () {
    return Api().get(`parada`)
  },
  show (id) {
    return Api().get(`parada/${id}`)
  },
  post (obj) {
    return Api().post(`parada`, obj)
  },
  put (obj) {
    return Api().post(`parada/${obj.id}`, obj)
  }
}
