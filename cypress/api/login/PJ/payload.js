export const successfulDataMass = {
    headers: (id) => ({
            'Content-Type': 'application/x-www-form-urlencoded',
            'x-deviceid': id
        }),
    body: {
        grant_type: 'password',
        client_id: 'esfera-ios',
        username: '14530795000154',
        password: '135790',
        encrypted: false,
    }
}

export const failureDataMass = {}