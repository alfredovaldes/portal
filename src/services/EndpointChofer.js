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
    return Api().put(`chofer/${obj.params.id}`, obj.body)
  },
  getPicture () {
    return Api().get(`chofer/${obj.params.id}/foto`)
  },
  postPicture (obj) {
    console.log(obj)
    return Api().post(`chofer/${obj.params.id}/foto`, obj.data, {headers: { 'Content-Type': 'imageFile.type' } })
  }
}
