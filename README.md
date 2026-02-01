# 📱 Proyecto E-commerce Accesorios Celular

Este es un sistema web completo (Frontend + Backend) para la gestión y venta de accesorios para celulares. Permite ver un catálogo de productos, filtrar por categorías y contactar al vendedor vía WhatsApp. También incluye un panel administrativo para gestionar el inventario.

---

## 📋 Requisitos Previos

Para ejecutar este proyecto en una computadora nueva, necesitas instalar **Node.js**.

### 1. Instalar Node.js
Node.js es el entorno necesario para ejecutar tanto el servidor como la página web.

- **Windows / Mac / Linux**:
  1. Ve a la página oficial: [https://nodejs.org/es/](https://nodejs.org/es/)
  2. Descarga la versión **LTS** (Recomendada).
  3. Ejecuta el instalador y sigue los pasos (siguiente, siguiente...).
  4. Para verificar que se instaló correctamente, abre una terminal (CMD o PowerShell) y escribe:
     ```bash
     node -v
     ```
     Debería salir un número de versión (ej: v18.x.x o v20.x.x).

---

## 🛠️ Tecnologías y Paquetes

El proyecto está dividido en dos partes:

### 🟢 Backend (Servidor)
Ubicado en la carpeta `server/`. Es el encargado de guardar los datos.
*   **Express**: Framework para crear el servidor web.
*   **Cors**: Permite que el Frontend se comunique con el Backend.
*   **Body-Parser**: Permite recibir datos en formato JSON.
*   **Nodemon** (Desarrollo): Reinicia el servidor automáticamente al hacer cambios.

### 🔵 Frontend (Cliente)
Ubicado en la carpeta `client/`. Es la página web que ven los usuarios.
*   **React**: Librería principal para construir la interfaz.
*   **Vite**: Herramienta de compilación ultrarrápida.
*   **Tailwind CSS**: Framework de estilos para un diseño moderno.
*   **React Router**: Manejo de navegación entre páginas.
*   **Lucide React**: Iconos modernos y ligeros.

---

## 🚀 Guía de Instalación (Paso a Paso)

Si descargas este proyecto en una PC nueva, sigue estos pasos:

### Paso 1: Configurar el Backend (Servidor)

1.  Abre una terminal (Símbolo del sistema o Terminal).
2.  Entra a la carpeta del servidor:
    ```bash
    cd server
    ```
3.  Instala los paquetes necesarios (esto creará la carpeta `node_modules`):
    ```bash
    npm install
    ```
4.  Inicia el servidor:
    ```bash
    node index.js
    ```
    ✅ Deberías ver: `Server running on http://localhost:3000`

### Paso 2: Configurar el Frontend (Cliente)

1.  **Sin cerrar la terminal del servidor**, abre una **SEGUNDA** terminal nueva.
2.  Entra a la carpeta del cliente:
    ```bash
    cd client
    ```
3.  Instala los paquetes necesarios:
    ```bash
    npm install
    ```
4.  **(Opcional pero Recomendado)** Configura tu red local:
    *   Este proyecto ya tiene un archivo `.env` configurado.
    *   Si cambias de red WiFi, averigua tu IP local (comando `ipconfig` en Windows o `ifconfig` en Mac) y actualiza el archivo `.env` dentro de `client/`.
5.  Inicia la página web:
    ```bash
    npm run dev
    ```
    ✅ Deberías ver algo como: `➜  Local:   http://localhost:5173/`

---

## 🌐 Cómo usar el Proyecto

### Acceso Local (En tu PC)
Abre tu navegador y entra a:
[http://localhost:5173](http://localhost:5173)

### Acceso desde la Red (Celulares u otras PC)
Si configuraste el archivo `.env` y estás en la misma red WiFi:
1.  Mira la terminal del Frontend, te mostrará una URL de "Network" (ej: `http://192.168.1.33:5173`).
2.  Usa esa dirección en el navegador de tu celular.

---

## 🔐 Panel de Administración

Para agregar, editar o eliminar productos:
1.  En la página web, haz clic en el ícono de **Usuario** (arriba a la derecha) o ve a `/admin`.
2.  Usa las siguientes credenciales:
    *   **Usuario**: `admin`
    *   **Contraseña**: `admin123`

---

## ⚠️ Solución de Problemas Comunes

*   **Error "command not found: npm"**:
    *   Significa que no instalaste Node.js. Revisa el paso 1 de Requisitos.
*   **La página no carga productos**:
    *   Asegúrate de que la terminal del **Backend** siga abierta y corriendo.
*   **No funciona en el celular**:
    *   Asegúrate de que el celular y la PC estén en la misma red WiFi.
    *   Verifica que el archivo `.env` tenga la IP correcta de tu PC.
    *   A veces el Firewall de Windows bloquea la conexión. Intenta desactivarlo temporalmente para probar.
