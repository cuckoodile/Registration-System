import { URL } from './config'

// Retrieve data
export const retrieveProfiles = async () => {
    const res = await fetch(`${URL}students`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    })

    return await res.json()
}

export const DMLProfiles = async (inputs, type) => {
    const res = await fetch(`${URL}students`, {
        method: type,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputs)
    })

    return await res.json()
}