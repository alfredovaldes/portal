import Api from '@/services/Api'

export default{
  show (id) {
    return Api().get(`posicion/${id}`)
  }
}
