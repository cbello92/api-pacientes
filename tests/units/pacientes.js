const { assert } = require('chai');
const pacienteValidador = require('../../validadores/pacientes');

describe('Paciente Validador', () => {
    it('Debe rechazar solo un nombre y un apellido', async () => {
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
});