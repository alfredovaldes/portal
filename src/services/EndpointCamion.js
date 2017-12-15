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
    return Api().put(`camion/${obj.id}`, obj)
  },
  postCamionChofer (obj) {
    return Api().post(`camion/camionchofer`, obj.body)
  },
  postCamionRuta (obj) {
    return Api().post(`camion/camionruta`, obj.body)
  }

}
