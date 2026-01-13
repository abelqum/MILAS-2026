// --- DATOS: PRODUCTOS DESTACADOS (HOME) ---
const destacados = [
    {
        id: 1,
        nombre: "Bomba Neumática 3:1",
        marca: "SAMSON",
        categoria: "Aceite",
        tipo: "Bombas",
        descripcion: "Ratios 3:1 y 5:1 para alto flujo.",
        imagen: "./src/assets/img/SAMSON/bomba.png"
    },
    {
        id: 2,
        nombre: "Carrete Retráctil Heavy Duty",
        marca: "WINTEK",
        categoria: "Aire",
        tipo: "Carretes",
        descripcion: "Manguera de 15m reforzada. Brazo doble.",
        imagen: "./src/assets/img/WINTEK/carrete.jpg"
    },
    {
        id: 3,
        nombre: "Pistola Digital Cuenta Litros",
        marca: "WINTEK",
        categoria: "Medición",
        tipo: "Pistolas",
        descripcion: "Control preciso con medidor digital.",
        imagen: "./src/assets/img/WINTEK/pistola.png"
    },
    {
        id: 4,
        nombre: "Kit Portátil Urea/AdBlue",
        marca: "PIUSI",
        categoria: "Urea",
        tipo: "Kits",
        descripcion: "Equipos portátiles y para tambo.",
        imagen: "./src/assets/img/piusi/p1.png"
    }
];

// --- REFERENCIA AL DOM ---
const contenedorDestacados = document.getElementById('Principales');

// --- FUNCIÓN DE RENDERIZADO ---
function cargarDestacados() {
    contenedorDestacados.innerHTML = '';

    destacados.forEach(producto => {
        // Lógica de colores por marca (Igual que en productos)
        let brandColor = 'bg-slate-200 text-slate-600';
        if(producto.marca === 'PIUSI') brandColor = 'bg-red-100 text-red-700 border border-red-200';
        if(producto.marca === 'SAMSON') brandColor = 'bg-blue-100 text-blue-700 border border-blue-200';
        if(producto.marca === 'WINTEK') brandColor = 'bg-green-100 text-green-700 border border-green-200';

        // Creamos la tarjeta con EL MISMO DISEÑO que en productos.html
        // Nota: Agregamos clases extra al <article> (min-w, snap-center) para que funcione el carrusel horizontal del index
        const card = `
            <article class="min-w-[85%] md:min-w-[350px] snap-center bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col group hover:-translate-y-1">
                
                <div class="h-64 bg-white flex items-center justify-center p-6 relative overflow-hidden">
                    <span class="absolute top-4 left-4 ${brandColor} px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide z-10">
                        ${producto.marca}
                    </span>
                    <img 
                        src="${producto.imagen}" 
                        alt="${producto.nombre}" 
                        class="h-full w-full object-contain group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        onerror="this.src='./src/assets/img/logo-milas-sin-fondo.webp'; this.classList.add('opacity-20');"
                    >
                </div>

                <div class="p-6 flex flex-col flex-grow">
                    <div class="flex gap-2 mb-1">
                        <span class="text-xs text-yellow-600 font-bold uppercase tracking-wider">${producto.categoria}</span>
                        <span class="text-xs text-slate-400 font-medium uppercase tracking-wider">• ${producto.tipo}</span>
                    </div>
                    
                    <h3 class="font-poppins font-bold text-xl text-slate-800 mb-3 leading-tight">
                        ${producto.nombre}
                    </h3>
                    
                    <p class="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">
                        ${producto.descripcion}
                    </p>
                    
                    <a href="contacto.html?producto=${encodeURIComponent(producto.nombre)}" 
                       class="mt-auto block w-full py-3 text-center bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-lg hover:border-yellow-500 hover:text-yellow-600 transition-all duration-300">
                        Cotizar
                    </a>
                </div>
            </article>
        `;
        contenedorDestacados.innerHTML += card;
    });
}

// --- INICIALIZAR ---
document.addEventListener('DOMContentLoaded', cargarDestacados);