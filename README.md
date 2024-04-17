# Challenge de Mercado Libre (meli-test-project)

## Descripción

Este proyecto es una aplicación web que fue desarrollada para un challenge de Mercado Libre. La aplicación consta de 3 componentes principales que en conjunto trabajan para buscar un item, listarlos y ver el detalle.

## Funcionalidades

- Búsqueda de items.
- Listado de items.
- Detalle del item.

## Configuración del proyecto

### Requisitos

Debes tener node instalado en tu sistema.

### Instalación de dependencias

Instala las dependencias tanto del server como del cliente:

- Server

```bash
npm install
```

- Client

```bash
cd client
npm install
```

### Iniciar

Cuando ya tengas instaladas las dependencias. Ve a la raiz del proyecto y corre el siguiente comando:

```bash
node server/index.js & cd client && npm start
```

Correr este comando hará que inicie el servidor Node JS y el cliente React al mismo tiempo. El servidor estará disponible en el puerto **3001** y el cliente en http://localhost:3000