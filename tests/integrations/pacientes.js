const { apiClient } = require('./config');
const { assert } = require('chai');
const apiClientBaseUrl = "/v1/pacientes";

describe('Paciente API', () => {
    it('Debe obtener pacientes', async () => {
        try {
            const response = await apiClient
                .get(apiClientBaseUrl)
                .expect(200);
            
            const { body } = response;

            assert.isArray(body, 'No es array');
            assert.isNotEmpty(body, 'Esta vacio');

            const obj = body[0];
            const props = ['id', 'nombres', 'apellidos', 'edad'];
            assert.hasAllKeys(obj, props);

            return Promise.resolve();
        } catch (error) {
            return Promise.reject(error);
        }
    });

    it('Debe obtener paciente por ID', async () => {
        const pacienteId = 1;
        try {
            const response = await apiClient
                .get(`${apiClientBaseUrl}/${pacienteId}`)
                .expect(200);
            
            const { body } = response;

            assert.isObject(body, 'No es objeto');
            const props = ['id', 'nombres', 'apellidos', 'edad'];
            assert.hasAllKeys(body, props);

            return Promise.resolve();
        } catch (error) {
            return Promise.reject(error);
        }
    });

    it('No debe obtener paciente por ID', async () => {
        const pacienteId = 1000;
        try {
            const response = await apiClient
                .get(`${apiClientBaseUrl}/${pacienteId}`)
                .expect(404);

            return Promise.resolve();
        } catch (error) {
            return Promise.reject(error);
        }
    });

    it('Debe guardar un paciente', async () => {
        try {
            const data = { nombres: "Alexis Antonio", apellidos: "Sanchez Mendoza", edad: 31 }
            const response = await apiClient
                .post(`${apiClientBaseUrl}`)
                .send(data)
                .expect(201);

            const { body } = response;

            assert.isObject(body, 'No es objeto');
            const props = ['id', 'nombres', 'apellidos', 'edad'];
            assert.hasAllKeys(body, props);

            return Promise.resolve();
        } catch (error) {
            return Promise.reject(error);
        }
    });


    it('No debe guardar un paciente (1)', async () => {
        try {
            const data = { nombres: "Alexis", apellidos: "Sanchez", edad: 31 }
            const response = await apiClient
                .post(`${apiClientBaseUrl}`)
                .send(data)
                .expect(400);
            
            const { body:errores } = response;
            assert.isArray(errores.nombres, "nombres no es un array");
            assert.isNotEmpty(errores.nombres, "nombres no reporta errores");

            assert.isArray(errores.apellidos, "apellidos no es un array");
            assert.isNotEmpty(errores.apellidos, "apellidos no reporta errores");

            return Promise.resolve();
        } catch (error) {
            return Promise.reject(error);
        }
    });

    it('No debe guardar un paciente (2)', async () => {
        try {
            const data = { nombres: "Ale7xis Antonio", apellidos: "Sanchez M2endez", edad: 31 }
            const response = await apiClient
                .post(`${apiClientBaseUrl}`)
                .send(data)
                .expect(400);
            
            const { body:errores } = response;

            assert.isArray(errores.nombres, "nombres no es un array");
            assert.isNotEmpty(errores.nombres, "nombres no reporta errores");

            assert.isArray(errores.apellidos, "apellidos no es un array");
            assert.isNotEmpty(errores.apellidos, "apellidos no reporta errores");

            return Promise.resolve();
        } catch (error) {
            return Promise.reject(error);
        }
    });

    it('No debe guardar un paciente (3)', async () => {
        try {
            const data = { nombres: "Alexis Antonio", apellidos: "Sanchez Mendez", edad: "d" }
            const response = await apiClient
                .post(`${apiClientBaseUrl}`)
                .send(data)
                .expect(400);
            
            const { body:errores } = response;

            return Promise.resolve();
        } catch (error) {
            return Promise.reject(error);
        }
    });


    it('No debe guardar un paciente (4)', async () => {
        try {
            const data = { nombres: "Alexis Antonio", apellidos: "Sanchez Mendez", edad: -31 }
            const response = await apiClient
                .post(`${apiClientBaseUrl}`)
                .send(data)
                .expect(400);
            
            const { body:errores } = response;

            return Promise.resolve();
        } catch (error) {
            return Promise.reject(error);
        }
    });


    // it('No debe guardar un paciente (2)', async () => {
    //     try {
    //         const data = { nombres: "Alexis Antonio", apellidos: "Sanchez", edad: 31 }
    //         const response = await apiClient
    //             .post(`${apiClientBaseUrl}`)
    //             .send(data)
    //             .expect(400);
            
    //         const { body:errores } = response;
    //         assert.isArray(errores.apellidos, "apellidos no es un array");
    //         assert.isNotEmpty(errores.apellidos, "apellidos no reporta errores");

    //         return Promise.resolve();
    //     } catch (error) {
    //         return Promise.reject(error);
    //     }
    // });

    it('Debe eliminar un paciente por ID', async () => {
        const pacienteId = 1;
        try {
            const response = await apiClient
                .delete(`${apiClientBaseUrl}/${pacienteId}`)
                .expect(200);

            const { body } = response;

            assert.isObject(body, 'No es objeto');
            const props = ['id', 'nombres', 'apellidos', 'edad'];
            assert.hasAllKeys(body, props);

            return Promise.resolve();
        } catch (error) {
            return Promise.reject(error);
        }
    });


    it('No debe eliminar un paciente por ID', async () => {
        const pacienteId = 1000;
        try {
            const response = await apiClient
                .delete(`${apiClientBaseUrl}/${pacienteId}`)
                .expect(404);
            return Promise.resolve();
        } catch (error) {
            return Promise.reject(error);
        }
    });
});