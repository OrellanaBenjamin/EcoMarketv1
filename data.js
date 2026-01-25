const productos = [{
    //Listado de productos
    //id: numero de el producto, nombre, precio, descripcion, imagen: ruta de la imagen, y brnrficios dentro de una lista? [] esta cosa XD 
    id: 1,
    nombre: "Acondicionador Johnson´s",
    precio: 4990,
    descripcion: "Acondicionador natural para el cabello Johnson´s 400ml",
    imagen: "assets/acondicionador.jpg",
    beneficios:["Hidratación profunda", "Suavidad y brillo", "Fórmula natural" ,"Ingredientes naturales"]
}, 
{
    id: 2,
    nombre: "Crema Beuty Secret",
    precio: 990,
    descripcion:"Crema para manos natural Beauty Secret 50ml",
    imagen: "assets/Cremamano.jpg",
    beneficios:["Hidratación intensiva", "Reparación de piel seca", "Fórmula natural" ,"Ingredientes naturales"]
},
{
    id: 3,
    nombre:"Protector Solar Hawaiian Tropic",
    precio: 13190,
    descripcion:"Protector solar en polvo Hawaiian Tropic FPS 30 · 4.25g",
    imagen: "assets/ProtectorSolar.jpg",
    beneficios:["Protección UV", "Hidratación", "Fórmula natural" ,"Ingredientes naturales"]
},
{
    id: 4,
    nombre:"Protector solar Neutrogena",
    precio:10990,
    descripcion:"Protector solar facial Neutrogena FPS 50+ · 40ml",
    imagen:"assets/cremaSoll.jpg",
    beneficios:["Alta protección UV", "Resistente al agua", "Fórmula ligera" ,"Ingredientes naturales"] 
},
{
    id: 5,
    nombre:"Shampoo Garnier Fructis",
    precio: 3990,
    descripcion:"Shampoo Garnier Fructis 350ml",
    imagen:"assets/Fructis.jpg",
    beneficios:["Limpieza profunda", "Fortalecimiento del cabello", "Fórmula natural" ,"Ingredientes naturales"]
},
{
    id: 6,
    nombre:"Hidratante corporal Lubridem",
    precio: 14790,
    descripcion:"Hidratante corporal Lubridem 450gr · piel extra seca",
    imagen:"assets/Hidratan.jpg",
    beneficios:["Hidratación intensiva", "Suavidad de la piel", "Fórmula natural" ,"Ingredientes naturales"]
},
{
    id: 7,
    nombre:"Hidratante Facial Neutrogena",
    precio: 10490,
    descripcion:"Hidratante facial Neutrogena Refill · todo tipo de piel · 50ml",
    imagen:"assets/hidratante.jpg",
    beneficios:["Hidratación intensiva", "Suavidad de la piel", "Fórmula natural" ,"Ingredientes naturales"]
},
{
    id: 8,
    nombre:"Humectante Diario Lubridem",
    precio: 3690,
    descripcion:"Humectante diario Lubridem · 120ml",
    imagen:"assets/Humectacion.jpg",
    beneficios:["Hidratación diaria", "Piel suave y flexible", "Fórmula natural" ,"Ingredientes naturales"]
},
{
    id: 9,
    nombre:"Sérum L’Oréal Elvive",
    precio: 9990,
    descripcion:"Sérum L’Oréal Elvive · 100ml",
    imagen:"assets/Serum.jpg",
    beneficios:["Reparación del cabello", "Brillo intenso", "Fórmula natural" ,"Ingredientes naturales"]
},
{
    id: 10,
    nombre:"Parche invisible Garnier",
    precio: 7590,
    descripcion:"Parche invisible Garnier · 22 unidades · 10mm 12mm",
    imagen:"assets/Parche.jpg",
    beneficios:["Cubrimiento instantáneo", "Piel suave y natural", "Fórmula natural" ,"Ingredientes naturales"]
},
{
    id: 11,
    nombre:"Perfume Árabe Ana Abiyedh",
    precio:19590,
    descripcion:"Perfume Árabe Ana Abiyedh Rouge EDP · 60ml",
    imagen:"assets/PerfubeArabe2.jpg",
    beneficios:["Aroma duradero", "Notas florales y amaderadas", "Fórmula natural" ,"Ingredientes naturales"]
},
{
    id: 12,
    nombre:"Perfume Árabe Armaf",
    precio: 5990,
    descripcion:"Perfume Árabe Armaf Odyssey for Men · 200ml",
    imagen:"assets/PerfubeArabe.jpg",
    beneficios:["Aroma duradero", "Notas frescas y amaderadas", "Fórmula natural" ,"Ingredientes naturales"]
},
{
    id: 13,
    nombre:"Perfume Árabe Lattafa Fakhar",
    precio: 25890,
    descripcion:"Perfume Árabe Lattafa Fakhar Gold Extrait EDP · 100ml",
    imagen:"assets/Perfume.jpg",
    beneficios:["Aroma duradero", "Notas florales y amaderadas", "Fórmula natural" ,"Ingredientes naturales"]
},
{
    id: 14,
    nombre:"Protector solar Hawaiian Tropic",
    precio: 9590,
    descripcion:"Protector solar Hawaiian Tropic Facial FPS 50+ · 50ml",
    imagen:"assets/Sol.jpg",
    beneficios:["Alta protección UV", "Hidratación", "Fórmula ligera" ,"Ingredientes naturales"]
},
{
    id: 15,
    nombre:"Perfume Árabe Lattafa Yara",
    precio: 34990,
    descripcion:"Perfume Árabe Lattafa Yara Tous mujer · 100ml",
    imagen:"assets/perfumearab.jpg",
    beneficios:["Aroma duradero", "Notas florales y frutales", "Fórmula natural" ,"Ingredientes naturales"]
},
];
//app.js
const contendor = document.getElementById("contenedor-productos")

productos.forEach(producto => {
    const col = document.createElement("div")
    col.className = "col-6 col-md-4 col-lg-3 col-xl-2 producto d-flex"

    col.innerHTML = `
    <div class="card h-100 w-100 shadow-sm border-0 d-flex flex-column">
      <img src="${producto.imagen}" class="card-img-top">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text text-muted small">${producto.descripcion}</p>
        <span class="h5 mb-3">$${producto.precio}</span>

        <a href="detail.html?id=${producto.id}" 
           class="btn btn-success btn-sm mt-auto">
           Ver producto
        </a>
      </div>
    </div>
  `
  contenedor.appendChild(col)
})

//detail.js
const params = new URLSearchParams(window.location.search)
const id = params.get("id")

const producto = productos.find(p => p.id == id)

document.getElementById("nombre").textContent = producto.nombre
document.getElementById("imagen").src = producto.imagen
document.getElementById("descripcion").textContent = producto.descripcion
document.getElementById("precio").textContent = "$" + producto.precio

const ul = document.getElementById("beneficios")
producto.beneficios.forEach(b => {
  const li = document.createElement("li")
  li.textContent = b
  ul.appendChild(li)
})
