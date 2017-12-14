import Api from '@/services/Api'

export default{
  post (obj) {
    return Api().post(`notificacion`, obj)
  }
}
