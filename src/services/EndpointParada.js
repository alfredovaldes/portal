import Api from '@/services/Api'

export default{
  index () {
    return Api().get(`parada`)
  },
  show (id) {
    return Api().get(`parada/${id}`)
  },
  post (obj) {
    return Api().post(`parada`, obj.body)
  },
  put (obj) {
    return Api().put(`parada/${obj.params.id}`, obj.body)
  },
  delete (obj) {
    return Api().delete(`parada/${obj.params.id}`)
  }
}
