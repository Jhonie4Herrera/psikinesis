async function register(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    const response = await fetch("http://localhost:127.0.0.1/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password, rol: role })
    });

    const data = await response.json();

    if (response.ok) {
        alert("Registro exitoso. Ahora puedes iniciar sesión.");
        window.location.href = "index.html"; // Redirige al login
    } else {
        alert("Error en el registro: " + data.detail);
    }
    async function login(event) {
        event.preventDefault();
    
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
    
        const response = await fetch("http://localhost:127.0.0.1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });
    
        const data = await response.json();
    
        if (response.ok) {
            localStorage.setItem("nombre", data.nombre);
            localStorage.setItem("rol", data.rol);
    
            // Redirige según el rol
            if (data.rol === "paciente") {
                window.location.href = "inicio_paciente.html";
            } else if (data.rol === "profesional") {
                window.location.href = "inicio_profesional.html";
            } else if (data.rol === "administrador") {
                window.location.href = "inicio_admin.html";
            }
        } else {
            alert("Error en el inicio de sesión: " + data.detail);
        }
    }
    
}
