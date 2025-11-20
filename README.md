# 📌 API REST de Usuarios – Node.js + Express

Este proyecto es una API REST básica creada con Node.js y Express, que permite gestionar usuarios mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar).  
Los datos se almacenan temporalmente en un arreglo en memoria.

---

## 🚀 Tecnologías Utilizadas

- Node.js
- Express.js
- JavaScript

---

## 📂 Estructura del Proyecto

/project
│── index.js // Código principal del servidor
│── package.json
│── README.md

yaml
Copiar código

---

## ⚙️ Instalación y Ejecución

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/edissonparicahua123/SENATI-BACKEND.git
cd tu-repo
```
2️⃣ Instalar dependencias
bash
Copiar código
npm install
3️⃣ Ejecutar el servidor
bash
Copiar código
node index.js
El servidor iniciará en:

arduino
Copiar código
http://localhost:3000
📡 Endpoints Disponibles
🔹 1. Obtener todos los usuarios
GET /users/

Respuesta:

json
Copiar código
[
  {
    "id": 1,
    "nombres": "Juan",
    "apellidos": "Lopes Gomez",
    "dni": "12345678",
    "fecha_nacimiento": "24-12-2000"
  }
]
🔹 2. Crear un nuevo usuario
POST /users/new/

Body esperado:

json
Copiar código
{
  "nombres": "Ana",
  "apellidos": "Torres Ramos",
  "dni": "11223344",
  "fecha_nacimiento": "10-05-2002"
}
Respuesta:

json
Copiar código
{
  "id": 3,
  "nombres": "Ana",
  "apellidos": "Torres Ramos",
  "dni": "11223344",
  "fecha_nacimiento": "10-05-2002"
}
🔹 3. Actualizar un usuario
PUT /users/:id

Ejemplo:

bash
Copiar código
PUT /users/1
Body:

json
Copiar código
{
  "nombres": "Juan Carlos"
}
Respuesta:

json
Copiar código
{
  "id": 1,
  "nombres": "Juan Carlos",
  "apellidos": "Lopes Gomez",
  "dni": "12345678",
  "fecha_nacimiento": "24-12-2000"
}
🔹 4. Eliminar un usuario
DELETE /users/:id

Ejemplo:

bash
Copiar código
DELETE /users/2
Respuesta:

json
Copiar código
{
  "message": "Usuario eliminado correctamente"
}
🧪 Pruebas con Postman o Thunder Client
Puedes usar Postman, Insomnia o Thunder Client para probar los endpoints.

📝 Notas
Los datos se almacenan en memoria (se reinician al apagar el servidor).

Ideal para prácticas de backend.