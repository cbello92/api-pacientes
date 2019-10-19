const data = [
    { id: 1, nombres: "Alexis antonio", apellidos: "Sanchez Mendoza", edad: 31 },
    { id: 1, nombres: "Miguel Angel", apellidos: "Inostroza Bernales", edad: 20 },
    { id: 1, nombres: "Marcela del Carmen", apellidos: "Jara Garrido", edad: 25 },
    { id: 1, nombres: "Mario Gerardo", apellidos: "Mendez Neira", edad: 55 },
    { id: 1, nombres: "Maria Alejandra", apellidos: "Perez Fernandez", edad: 30 }
];

const getAll = () => {
    return data;
}

const getById = (id) => {
    const paciente = data.find(x => x.id === id);
    return paciente;
}

module.exports = {
    getAll,
    getById
}