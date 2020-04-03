import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
})

export const getForms = async () => {
    try {
        const res = await axiosInstance.get('/forms')
        return res.data.forms
    } catch (err) {
        return false
    }
}

export const createForm = async (newForm) => {
    try {
        await axiosInstance.post(`/forms`, newForm)
        return true
    } catch (err) {
        return false
    }
}

export const getFormFields = async (formId) => {
    try {
        const res = await axiosInstance.get(`/formFields/${formId}`)
        return res.data
    } catch (err) {
        return false
    }
}

export const submitForm = async ({ formId, values }) => {
    try {
        await axiosInstance.put(`/submissions/${formId}`, { values })
        return true
    } catch (err) {
        return false
    }
}

export const getFormSubmissions = async (formId) => {
    try {
        const res = await axiosInstance.get(`/submissions/${formId}`)
        return res.data
    } catch (err) {
        return false
    }
}
