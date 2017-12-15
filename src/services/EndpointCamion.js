import Api from '@/services/Api'

export default{
  index () {
    return Api().get(`camion`)
  },
  show (id) {
    return Api().get(`camion/${id}`)
  },
  post (obj) {
    return Api().post(`camion`, obj.body)
  },
  put (obj) {
    return Api().put(`camion/${obj.params.id}`, obj.body)
  },
  delete (obj) {
    return Api().delete(`camion/${obj.params.id}`)
  },
  postCamionChofer (obj) {
    return Api().post(`camion/camionchofer`, obj.body)
  },
  postCamionRuta (obj) {
    return Api().post(`camion/camionruta`, obj.body)
  }

}
