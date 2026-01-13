// --- BASE DE DATOS DE PRODUCTOS ---
const productos = [
    {
        id: 1,
        nombre: "Bomba Neumática 3:1",
        marca: "SAMSON",
        categoria: "Aceite",   // Fluido
        tipo: "Bombas",        // Nuevo: Tipo de equipo
        descripcion: "Ideal para distribución de aceite en distancias medias. Alta eficiencia.",
        imagen: "./src/assets/img/SAMSON/bomba.png"
    },
    {
        id: 2,
        nombre: "Carrete Retráctil Heavy Duty",
        marca: "WINTEK",
        categoria: "Aire",
        tipo: "Carretes",
        descripcion: "Manguera de 15m reforzada. Brazo doble para máxima estabilidad.",
        imagen: "./src/assets/img/WINTEK/carrete.jpg"
    },
    {
        id: 3,
        nombre: "Pistola Digital Cuenta Litros",
        marca: "WINTEK",
        categoria: "Aceite",
        tipo: "Pistolas",
        descripcion: "Precisión +/- 0.5%. Pantalla digital para control exacto.",
        imagen: "./src/assets/img/WINTEK/pistola.png"
    },
    {
        id: 4,
        nombre: "Kit Portátil para Urea/AdBlue",
        marca: "PIUSI",
        categoria: "Urea",
        tipo: "Bombas", // Es un kit, pero su función principal es bombear
        descripcion: "Bomba de diafragma especial para DEF. Incluye manguera y pistola.",
        imagen: "./src/assets/img/piusi/p1.png"
    },
    {
        id: 5,
        nombre: "Bomba de Grasa 50:1",
        marca: "SAMSON",
        categoria: "Grasa",
        tipo: "Bombas",
        descripcion: "Alta presión para tambos de 200L. Perfecta para servicio pesado.",
        imagen: "./src/assets/img/bomba-aceite.webp" 
    },
    {
        id: 6,
        nombre: "Enrollador de Aire Abierto",
        marca: "WINTEK",
        categoria: "Aire",
        tipo: "Carretes",
        descripcion: "Acero al carbono con pintura electrostática.",
        imagen: "./src/assets/img/carrete.webp"
    }
];

// --- REFERENCIAS AL DOM ---
const contenedor = document.getElementById('contenedor-productos');
const mensajeSinResultados = document.getElementById('mensaje-sin-resultados');
const botonesFiltro = document.querySelectorAll('.btn-filtro');

// --- RENDERIZAR ---
function renderizarProductos(listaProductos) {
    contenedor.innerHTML = '';

    if (listaProductos.length === 0) {
        mensajeSinResultados.classList.remove('hidden');
        return;
    } else {
        mensajeSinResultados.classList.add('hidden');
    }

    listaProductos.forEach(producto => {
        // Colores de marca
        let brandColor = 'bg-slate-200 text-slate-600';
        if(producto.marca === 'PIUSI') brandColor = 'bg-red-100 text-red-700 border border-red-200';
        if(producto.marca === 'SAMSON') brandColor = 'bg-blue-100 text-blue-700 border border-blue-200';
        if(producto.marca === 'WINTEK') brandColor = 'bg-green-100 text-green-700 border border-green-200';

        const card = `
            <article class="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col group hover:-translate-y-1">
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
                    <h3 class="font-poppins font-bold text-xl text-slate-800 mb-3 leading-tight">${producto.nombre}</h3>
                    <p class="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">
                        ${producto.descripcion}
                    </p>
                    <a href="contacto.html?producto=${encodeURIComponent(producto.nombre)}" 
                       class="mt-auto block w-full py-3 text-center bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-lg hover:border-yellow-500 hover:text-yellow-600 transition-all duration-300">
                        Cotizar Equipo
                    </a>
                </div>
            </article>
        `;
        contenedor.innerHTML += card;
    });
}

// --- FILTRADO NUEVO ---
function filtrarProductos(filtro) {
    // UI: Botones
    botonesFiltro.forEach(btn => {
        btn.classList.remove('bg-slate-800', 'text-white', 'shadow-md'); 
        btn.classList.add('bg-white', 'text-slate-600', 'border-slate-200'); 
    });

    const botonActivo = document.querySelector(`button[data-filter="${filtro}"]`);
    if(botonActivo) {
        botonActivo.classList.remove('bg-white', 'text-slate-600', 'border-slate-200');
        botonActivo.classList.add('bg-slate-800', 'text-white', 'shadow-md');
    }

    // Lógica Lógica
    if (filtro === 'all') {
        renderizarProductos(productos);
    } else {
        // Separamos "tipo:Bombas" -> clave="tipo", valor="Bombas"
        const [clave, valor] = filtro.split(':'); 
        
        const productosFiltrados = productos.filter(p => {
            if (clave === 'brand') return p.marca === valor;
            if (clave === 'cat') return p.categoria === valor; // Filtra por fluido (Aceite/Grasa/Urea)
            if (clave === 'tipo') return p.tipo === valor;     // Filtra por equipo (Bomba/Carrete)
            return false;
        });
        
        renderizarProductos(productosFiltrados);
    }
}

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
    renderizarProductos(productos);
});

botonesFiltro.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const filtro = e.target.getAttribute('data-filter');
        filtrarProductos(filtro);
    });
});