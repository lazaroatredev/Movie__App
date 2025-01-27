# Movie Application  

**Demo en vivo**: [https://lazaroatredev.github.io/Movie__App/](https://lazaroatredev.github.io/Movie__App/)

## ⚙️ Tecnologías Utilizadas

- **React.js**: Para construir una interfaz de usuario interactiva.  
- **TypeScript**: Aporta tipado estático a JavaScript para mejorar la calidad y mantenibilidad del código.  
- **React Query**: Facilita la gestión del estado y el manejo de datos asíncronos.  
- **Appwrite**: Proporciona infraestructura de backend para la aplicación.  
- **Tailwind CSS**: Utilizado para un estilizado moderno y responsivo a través de clases utilitarias.  

## 🔋 Características 

- **Navegar Todas las Películas**: Explora una amplia gama de películas disponibles en la plataforma.  
- **Buscar Películas**: Función de búsqueda para encontrar películas específicas fácilmente.  
- **Algoritmo de Películas en Tendencia**: Muestra películas populares basadas en un algoritmo dinámico.  
- **UI/UX Moderno**: Interfaz limpia y fácil de usar para una gran experiencia del usuario.  
- **Responsividad**: Diseño completamente adaptable que funciona sin problemas en diferentes dispositivos.  

## 🤸 Inicio Rápido 

Sigue estos pasos para configurar el proyecto localmente en tu máquina.  

### Prerrequisitos  

Asegúrate de tener instalados los siguientes programas:  

- [Git](https://git-scm.com/)  
- [Node.js](https://nodejs.org/en)  
- [npm](https://www.npmjs.com/) (Node Package Manager)  

### Clonando el Repositorio  

```bash  
git clone https://github.com/lazaroatredev/Movie__app 
cd Movie__app 
 ```

### Instalación  

Instala las dependencias del proyecto usando npm:  

```bash  
npm install  
```  

### Configuración de Variables de Entorno  

Crea un nuevo archivo llamado `.env.local` en la raíz de tu proyecto y añade el siguiente contenido:  

```env  
VITE_IMDB_API_KEY=  
VITE_APPWRITE_PROJECT_ID=  
VITE_APPWRITE_DATABASE_ID=  
VITE_APPWRITE_COLLECTION_ID=  
```  

Reemplaza los valores de marcador de posición con tus credenciales reales de **[TheMovieDatabase API](https://developer.themoviedb.org/reference/intro/getting-started)** y **[Appwrite](https://apwr.dev/JSM050)**. Puedes obtener estas credenciales registrándote en **[TheMovieDatabase](https://developer.themoviedb.org/reference/intro/getting-started)** y creando un nuevo proyecto en **[Appwrite](https://apwr.dev/JSM050)**.  

### Ejecutando el Proyecto  

```bash  
npm run dev  
```  

Abre [http://localhost:5173](http://localhost:5173) en tu navegador para ver el proyecto.  