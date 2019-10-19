const router = require('express').Router();
const { getAll, getById } = require('../repositorio/pacientes');
const pacienteValidador = require('../validadores/pacientes');

router.get('/:id', (req, res) => {
    try {
        const id = Number(req.params.id);
        const paciente = getById(id);

        if (!paciente) return res.status(404).send();

        res.status(200).send(paciente);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.get('/', (req, res) => {
    try {
        const pacientes = getAll();
        res.send(pacientes);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.post('/', (req, res) => {
    try {
        let { body: paciente } = req;
        const errores = pacienteValidador.save(paciente);
        console.log(errores);

        if(errores) return res.status(400).send(errores);

        res.status(201).send({ id:7,  ...paciente });
    } catch (err) {
        res.status(500).send(err);
    }
});


router.put('/:pacienteId', (req, res) => {
    try {
        const pacienteId = req.params.pacienteId;

        const findPaciente = getById(pacienteId);
        if(!findPaciente) return res.status(404).send({});

        let { body: paciente } = req;
        const errores = pacienteValidador.save(paciente);
        // console.log(errores);

        if(errores) return res.status(400).send(errores);

        res.status(200).send(paciente);
    } catch (err) {
        res.status(500).send(err);
    }
});


router.delete('/:id', (req, res) => {
    try {
        const id = Number(req.params.id);
        const paciente = getById(id);

        if (!paciente) return res.status(404).send();

        res.status(200).send(paciente);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;