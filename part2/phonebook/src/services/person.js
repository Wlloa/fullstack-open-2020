import axios from 'axios'

const apiUrl = 'http://localhost:3002/persons'

const getAll = () => {
    const request = axios.get(apiUrl)
    return request.then(response => response.data)
}

const create = (contact) => {
    const request = axios.post(apiUrl, contact)
    return request.then(response => response.data)
}

const deletePerson = (id) => {
    const request = axios.delete(`${apiUrl}/${id}`)
    return request.then(response => response.data)
}

const update = (id, newContact) => {
    const response = axios.put(`${apiUrl}/${id}`, newContact)
    return response.then(response => response.data)
}


export default {
    getAll,
    create,
    deletePerson,
    update
}