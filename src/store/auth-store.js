import router from '@/router'

export default new class {

  next = '' // 登陆成功后需要跳转的页面
  setNext(path) {
    this.next || (this.next = path)
  }

  signinNext() {
    this.next ? (location.href = this.next) : router.replace({ path: '/' })
  }

  signin({ mobile = '', password = '' }) {
    return axios.post('sessions/login_with_password', { mobile, password })
  }
}
