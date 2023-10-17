
const data = {
    "Nombre": "Andres Gonzalez",
    "Edad": 30,
    "Telefonos": [
        {
            "tipo": "Personal",
            "numero": "3004837639"
        },
        {
            "tipo": "Trabajo",
            "numero": "3007876254"
        }
    ],
    "Email": "andresg12@gmail.com"
};


function showData(data) {
    const listaDatos = document.getElementById('listaDatos');

    for (const key in data) {

        const listItem = document.createElement('li');

        if (key === "Telefonos") {
            listItem.textContent = `${key}:`;
            const ul = document.createElement('ul');
            data[key].forEach(function (telefono) {
                const li = document.createElement('li');
                li.textContent = `${telefono.tipo}: ${telefono.numero}`;
                ul.appendChild(li);
            });
            listItem.appendChild(ul);
        } else {
            listItem.textContent = `${key}: ${data[key]}`;
        }

        listaDatos.appendChild(listItem);

    }
}


showData(data);
