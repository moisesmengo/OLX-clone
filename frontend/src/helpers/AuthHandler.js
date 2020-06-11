import Cookies from 'js-cookie'

export const isLogged = () => {
    let token = Cookies.get('tokeen')
    return (token) ? true : false
}