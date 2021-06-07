import AsyncStorage from '@react-native-async-storage/async-storage'

const baseUrl = 'http://186.232.179.7/senhafacil_api/api/'

const request = async (method, endpoint, params, token = null) => {
    method = method.toLowerCase()
    let fullUrl = `${baseUrl}${endpoint}`
    let body = null

    switch (method) {
        case 'get':
            let queryString = new URLSearchParams(params).toString()
            fullUrl += `?${queryString}`
            break
        case 'post':
        case 'put':
        case 'delete':
            body = JSON.stringify(params)
            break
    }

    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }

    if (token) {
        headers.Authorization = `Bearer ${token}`
    }

    let req = await fetch(fullUrl, { method, headers, body })
    let json = await req.json()

    return json
}

export default {
    getToken: async () => {
        return await AsyncStorage.getItem('token')
    },
    validateToken: async () => {
        let token = await AsyncStorage.getItem('token')
        let json = await request('post', '/validate_token', {}, token)
        return json
    },
    login: async (email, password) => {
        let json = await request('post', '/login', { email, password })
        return json
    },
    logout: async () => {
        let token = await AsyncStorage.getItem('token')
        let json = await request('post', '/logout', {}, token)
        await AsyncStorage.removeItem('token')
        return json
    },
    register: async (name, email, password, password_confirm) => {
        let json = await request('post', '/create_user', { name, email, password, password_confirm })
        return json
    }
}
