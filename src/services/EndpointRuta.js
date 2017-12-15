import Api from '@/services/Api'

export default{
  index () {
    return Api().get(`ruta`)
  },
  show (id) {
    return Api().get(`ruta/${id}`)
  },
  post (obj) {
    return Api().post(`ruta`, obj.body)
  },
  put (obj) {
    return Api().put(`ruta/${obj.params.id}`, obj.body)
  },
  delete (obj) {
    return Api().delete(`ruta/${obj.params.id}`)
  }
}
