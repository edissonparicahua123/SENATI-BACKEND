// CONFIGURACION BASE
const express = require("express");
const app = express();
const port = 3000;

// USANDO LAS VARIABLES DE CONFIGURACION
app.use(express.json());

// DATOS QUE DESEO EXPONER POR EL API / ENDPOINT
const users = [
    {
        id: 1,
        nombres: "Juan",
        apellidos: "Lopes Gomez",
        dni: "12345678",
        fecha_nacimiento: "24-12-2000"
    },
    {
        id: 2,
        nombres: "Maria",
        apellidos: "Mamani Apaza",
        dni: "87654321",
        fecha_nacimiento: "12-02-1945"
    }
];

// RUTA PRINCIPAL - LISTAR TODOS
app.get('/users/', (req, res) => {
    res.json(users);
});

// CREANDO DATOS CON POST
app.post('/users/new/', (req, res) => {
    const new_user = {
        id: users.length + 1,
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        dni: req.body.dni,
        fecha_nacimiento: req.body.fecha_nacimiento
    };

    users.push(new_user);
    res.status(201).json(new_user);
});

// ACTUALIZANDO DATOS CON PUT
app.put('/users/:id', (req, res) => {
    const id_edit = parseInt(req.params.id);
    const user_edit = users.find(u => u.id === id_edit);

    if (!user_edit) {
        return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Solo actualizar si se envía el dato
    user_edit.nombres = req.body.nombres || user_edit.nombres;
    user_edit.apellidos = req.body.apellidos || user_edit.apellidos;
    user_edit.dni = req.body.dni || user_edit.dni;
    user_edit.fecha_nacimiento = req.body.fecha_nacimiento || user_edit.fecha_nacimiento;

    res.json(user_edit);
});

// BORRANDO DATOS CON DELETE
app.delete('/users/:id', (req, res) => {
    const id_delete = parseInt(req.params.id);
    const user_index = users.findIndex(u => u.id === id_delete);

    if (user_index === -1) {
        return res.status(404).json({ message: "Usuario no encontrado y no es posible eliminarlo" });
    }

    users.splice(user_index, 1);
    res.json({ message: "Usuario eliminado correctamente" });
});

// INICIALIZANDO EL SERVIDOR EXPRESS
app.listen(port, () => {
    console.log("Iniciando servidor express en el puerto", port);
});
