import Api from '@/services/Api'

export default{
  index () {
    return Api().get(`ruta`)
  },
  show (id) {
    return Api().get(`ruta/${id}`)
  },
  post (obj) {
    return Api().post(`ruta`, obj)
  },
  put (obj) {
    return Api().post(`ruta/${obj.id}`, obj)
  }
}
