import http from '../http-common'

class MaterialDataService {
  getAll () {
    return http.get('/post')
  }

  create (data) {
    return http.post('/post', data)
  }

  uploadPost (avatar) {
    return http.post('/post-upload', avatar)
  }

  update (id, data) {
    return http.put(`/post/${id}`, data)
  }

  delete (id) {
    return http.delete(`/post/${id}`)
  }

  deleteAll () {
    return http.delete('/post')
  }
}

export default new MaterialDataService()
