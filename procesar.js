const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const productos = [
    // --- WINTEK: GRASA ---
    {
        id: 1,
        nombre: "Bomba Neumática Grasa L1503",
        marca: "WINTEK",
        categoria: "Grasa",
        tipo: "Bombas",
        descripcion: "Potencia 50:1 constante. La solución definitiva para tambos de 180-220kg en entornos industriales.",
        destacado: true,
        imagen: "./src/assets/img/WINTEK/Bombas-Grasa-1.webp"
    },
    {
        id: 2,
        nombre: "Kit Distribuidor Grasa L5120",
        marca: "WINTEK",
        categoria: "Grasa",
        tipo: "Kits",
        descripcion: "Sistema móvil todo en uno para cubetas de 19kg. Incluye carro, bomba de alta presión y pistola.",
        destacado: true,
        imagen: "./src/assets/img/WINTEK/Kits-Grasa-2.webp"
    },
    {
        id: 3,
        nombre: "Bomba Industrial Grasa L5062",
        marca: "WINTEK",
        categoria: "Grasa",
        tipo: "Bombas",
        descripcion: "Máximo rendimiento para uso rudo. Caudal superior de 1800 g/min para grandes demandas.",
        destacado: false,
        imagen: "./src/assets/img/WINTEK/Bombas-Grasa-3.webp"
    },
    {
        id: 4,
        nombre: "Kit Tambo Grasa L7536R",
        marca: "WINTEK",
        categoria: "Grasa",
        tipo: "Kits",
        descripcion: "Estación de lubricación completa. Incluye bomba industrial, carro de carga y carrete retráctil de 15m.",
        destacado: false,
        imagen: "./src/assets/img/WINTEK/Kits-Grasa-4.webp"
    },
    {
        id: 5,
        nombre: "Pistola Manual Grasa L5701",
        marca: "WINTEK",
        categoria: "Grasa",
        tipo: "Pistolas",
        descripcion: "Alta presión (5800 psi) en tu mano. Diseño ergonómico con manguera flexible para zonas difíciles.",
        destacado: false,
        imagen: "./src/assets/img/WINTEK/Pistolas-Grasa-5.webp"
    },
    {
        id: 6,
        nombre: "Bomba Manual Cubeta L2012",
        marca: "WINTEK",
        categoria: "Grasa",
        tipo: "Bombas",
        descripcion: "Independencia total. Accionamiento por pedal y tanque ovalado de 20kg para máxima estabilidad.",
        destacado: false,
        imagen: "./src/assets/img/WINTEK/Bombas-Grasa-6.webp"
    },
    {
        id: 7,
        nombre: "Carrete Abierto Grasa L6152",
        marca: "WINTEK",
        categoria: "Grasa",
        tipo: "Carretes",
        descripcion: "Orden y durabilidad. Brazo doble reforzado con 15 metros de manguera de alta presión.",
        destacado: true,
        imagen: "./src/assets/img/WINTEK/Carretes-Grasa-7.webp"
    },

    // --- WINTEK: ACEITE ---
    {
        id: 8,
        nombre: "Bomba Neumática Aceite L1051",
        marca: "WINTEK",
        categoria: "Aceite",
        tipo: "Bombas",
        descripcion: "Eficiencia diaria. Radio 5:1 con flujo estable de 14 L/min para aceites de motor e hidráulicos.",
        destacado: true,
        imagen: "./src/assets/img/WINTEK/Bombas-Aceite-8.webp"
    },
    {
        id: 9,
        nombre: "Bomba Alto Flujo L1054",
        marca: "WINTEK",
        categoria: "Aceite",
        tipo: "Bombas",
        descripcion: "Velocidad pura. Radio 5:1 con caudal de 25 L/min para transferencias rápidas en distancias largas.",
        destacado: false,
        imagen: "./src/assets/img/WINTEK/Bombas-Aceite-9.webp"
    },
    {
        id: 10,
        nombre: "Recibidor Aceite L1001",
        marca: "WINTEK",
        categoria: "Aceite",
        tipo: "Recibidores",
        descripcion: "Perfil bajo de 37L. La solución perfecta para drenar cárter o transmisión a nivel de suelo.",
        destacado: true,
        imagen: "./src/assets/img/WINTEK/Recibidores-Aceite-10.webp"
    },
    {
        id: 11,
        nombre: "Recibidor Neumático L3065E",
        marca: "WINTEK",
        categoria: "Aceite",
        tipo: "Recibidores",
        descripcion: "Capacidad 65L con descarga por presión. Embudo ajustable y extensión anti-salpicaduras.",
        destacado: false,
        imagen: "./src/assets/img/WINTEK/Recibidores-Aceite-11.webp"
    },
    {
        id: 12,
        nombre: "Extractor Neumático L1065",
        marca: "WINTEK",
        categoria: "Aceite",
        tipo: "Extractores",
        descripcion: "Succión por vacío. Tanque de 65L con set de sondas para vehículos sin tapón de cárter.",
        destacado: false,
        imagen: "./src/assets/img/WINTEK/Extractores-Aceite-12.webp"
    },
    {
        id: 13,
        nombre: "Kit Aceite IBC L5300P",
        marca: "WINTEK",
        categoria: "Aceite",
        tipo: "Kits",
        descripcion: "Montaje lateral profesional. Bomba potente, carrete de 15m y pistola digital listos para instalar.",
        destacado: false,
        imagen: "./src/assets/img/WINTEK/Kits-Aceite-13.webp"
    },
    {
        id: 14,
        nombre: "Pistola Digital L1803",
        marca: "WINTEK",
        categoria: "Aceite",
        tipo: "Pistolas",
        descripcion: "Precisión milimétrica. Pantalla LCD clara y diseño resistente para un control total del fluido.",
        destacado: true,
        imagen: "./src/assets/img/WINTEK/Pistolas-Aceite-14.webp"
    },
    {
        id: 15,
        nombre: "Pistola Automática L3503A",
        marca: "WINTEK",
        categoria: "Aceite",
        tipo: "Pistolas",
        descripcion: "Tecnología de corte automático. Evita derrames y asegura el llenado exacto con su medidor digital.",
        destacado: false,
        imagen: "./src/assets/img/WINTEK/Pistolas-Aceite-15.webp"
    },
    {
        id: 16,
        nombre: "Carrete Abierto Aceite L6154",
        marca: "WINTEK",
        categoria: "Aceite",
        tipo: "Carretes",
        descripcion: "Manguera de 1/2\" x 15m en estructura de acero. La mejor opción para talleres de alto tráfico.",
        destacado: false,
        imagen: "./src/assets/img/WINTEK/Carretes-Aceite-16.webp"
    },
    {
        id: 17,
        nombre: "Bomba Rotativa Manual L1710",
        marca: "WINTEK",
        categoria: "Aceite",
        tipo: "Bombas",
        descripcion: "Indestructible y práctica. Cuerpo de hierro fundido para trasvase rápido de tambos de 200L.",
        destacado: false,
        imagen: "./src/assets/img/WINTEK/Bombas-Aceite-17.webp"
    },

    // --- WINTEK: AIRE ---
    {
        id: 18,
        nombre: "Carrete Abierto Aire L6153",
        marca: "WINTEK",
        categoria: "Aire",
        tipo: "Carretes",
        descripcion: "Manguera 3/8\" x 15m lista para el trabajo duro. Estructura robusta que mantiene tu taller ordenado.",
        destacado: false,
        imagen: "./src/assets/img/WINTEK/Carretes-Aire-18.webp"
    },
    {
        id: 19,
        nombre: "Bomba Diafragma Aluminio L1023",
        marca: "WINTEK",
        categoria: "Aceite",
        tipo: "Bombas",
        descripcion: "Poder industrial. Bomba de doble diafragma de 1\" con cuerpo de aluminio. Caudal de 90 LPM para trasvase rápido de diesel y aceites.",
        destacado: false,
        imagen: "./src/assets/img/WINTEK/Bombas-Diesel-68.webp"
    },
    {
        id: 20,
        nombre: "Unidad FRL L2225",
        marca: "WINTEK",
        categoria: "Aire",
        tipo: "Accesorios",
        descripcion: "Protege tus equipos. Filtro, regulador y lubricador de 1/4\" con manómetro y descarga automática.",
        destacado: false,
        imagen: "./src/assets/img/WINTEK/Accesorios-Aire-20.webp"
    },

    // --- WINTEK: UREA (ADBLUE) ---
    {
        id: 21,
        nombre: "Kit Eléctrico Urea L3003",
        marca: "WINTEK",
        categoria: "Urea",
        tipo: "Kits",
        descripcion: "Portabilidad total para IBC. Bomba eléctrica confiable y pistola manual en un paquete fácil de mover.",
        destacado: false,
        imagen: "./src/assets/img/WINTEK/Kits-Urea-21.webp"
    },
    {
        id: 22,
        nombre: "Bomba Eléctrica Urea L3717",
        marca: "WINTEK",
        categoria: "Urea",
        tipo: "Bombas",
        descripcion: "Especial para tambos. Motor ligero y potente con velocidad variable para un despacho controlado.",
        destacado: false,
        imagen: "./src/assets/img/WINTEK/Bombas-Urea-22.webp"
    },
    {
        id: 23,
        nombre: "Bomba Transferencia L3701",
        marca: "WINTEK",
        categoria: "Urea",
        tipo: "Bombas",
        descripcion: "El corazón de tu sistema. Bomba de 120V diseñada específicamente para resistir la corrosión del AdBlue.",
        destacado: false,
        imagen: "./src/assets/img/WINTEK/Bombas-Urea-23.webp"
    },
    {
        id: 24,
        nombre: "Pistola Automática L3809",
        marca: "WINTEK",
        categoria: "Urea",
        tipo: "Pistolas",
        descripcion: "Despacho seguro. Corte automático de flujo y cuerpo de plástico resistente a químicos.",
        destacado: false,
        imagen: "./src/assets/img/WINTEK/Pistolas-Urea-24.webp"
    },
    {
        id: 25,
        nombre: "Carrete Retráctil Urea L3934",
        marca: "WINTEK",
        categoria: "Urea",
        tipo: "Carretes",
        descripcion: "Extiende tu alcance. Manguera EPDM especial para Urea de 9 metros con rebobinado automático.",
        destacado: false,
        imagen: "./src/assets/img/WINTEK/Carretes-Urea-25.webp"
    },
 
    // --- WINTEK: DIESEL ---
   

    // --- PIUSI: ACEITE ---
    {
        id: 28,
        nombre: "Bomba Viscomat Vane",
        marca: "PIUSI",
        categoria: "Aceite",
        tipo: "Bombas",
        descripcion: "La referencia mundial. Bomba de paletas para trasvase de aceite con caudal constante de 25 L/min.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Bombas-Aceite-28.webp"
    },
    {
        id: 29,
        nombre: "Bomba Viscomat Gear",
        marca: "PIUSI",
        categoria: "Aceite",
        tipo: "Bombas",
        descripcion: "Potencia hidráulica. Bomba de engranajes diseñada para aceites densos y presiones de hasta 12 bar.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Bombas-Aceite-29.webp"
    },
    {
        id: 30,
        nombre: "Visco Flowmat 230V",
        marca: "PIUSI",
        categoria: "Aceite",
        tipo: "Bombas",
        descripcion: "Inteligencia integrada. Bomba de engranajes con presostato que se enciende y apaga automáticamente.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Bombas-Aceite-30.webp"
    },
    {
        id: 31,
        nombre: "Kit Cambia Aceite Vacuobox",
        marca: "PIUSI",
        categoria: "Aceite",
        tipo: "Extractores",
        descripcion: "Servicio limpio y profesional. Sistema automático de pared para la extracción de aceite usado.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Extractores-Aceite-31.webp"
    },
    {
        id: 32,
        nombre: "Pistola Easy K400 Digital",
        marca: "PIUSI",
        categoria: "Aceite",
        tipo: "Pistolas",
        descripcion: "El estándar de la industria. Medidor oval gears integrado para una medición precisa y fiable.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Pistolas-Aceite-32.webp"
    },
    {
        id: 33,
        nombre: "Pistola Easy Oil",
        marca: "PIUSI",
        categoria: "Aceite",
        tipo: "Pistolas",
        descripcion: "Ergonomía italiana. Pistola manual ligera y resistente para un suministro de aceite limpio.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Pistolas-Aceite-33.webp"
    },
    {
        id: 34,
        nombre: "Bomba Neumática P3.5:1",
        marca: "PIUSI",
        categoria: "Aceite",
        tipo: "Bombas",
        descripcion: "Tecnología silenciosa. Bomba neumática de pistón ideal para distancias cortas y medias.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Bombas-Aceite-34.webp"
    },
    {
        id: 35,
        nombre: "Bomba Neumática P5.5:1",
        marca: "PIUSI",
        categoria: "Aceite",
        tipo: "Bombas",
        descripcion: "Alto rendimiento. Ratio superior para bombear aceites de mayor viscosidad a mayores distancias.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Bombas-Aceite-35.webp"
    },
    {
        id: 36,
        nombre: "Carrete Hose Reel Open",
        marca: "PIUSI",
        categoria: "Aceite",
        tipo: "Carretes",
        descripcion: "Calidad premium. Acero resistente y rebobinado suave para mangueras de alta presión.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Carretes-Aceite-36.webp"
    },

    // --- PIUSI: UREA (ADBLUE) ---
    {
        id: 37,
        nombre: "Bomba SuzzaraBlue AC",
        marca: "PIUSI",
        categoria: "Urea",
        tipo: "Bombas",
        descripcion: "Líder mundial en AdBlue. Bomba de membrana fiable, sin sellos dinámicos para evitar fugas.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Bombas-Urea-37.webp"
    },
    {
        id: 38,
        nombre: "Kit SuzzaraBlue Drum",
        marca: "PIUSI",
        categoria: "Urea",
        tipo: "Kits",
        descripcion: "Listo para usar. Sistema completo para montar en tambo con pistola automática SB325.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Kits-Urea-38.webp"
    },
    
    {
        id: 40,
        nombre: "Pistola SB325 Automática",
        marca: "PIUSI",
        categoria: "Urea",
        tipo: "Pistolas",
        descripcion: "Seguridad ante todo. Pistola plástica ligera con sistema de parada automática y break-away.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Pistolas-Urea-40.webp"
    },
    {
        id: 41,
        nombre: "Medidor K24 AdBlue",
        marca: "PIUSI",
        categoria: "Urea",
        tipo: "Medidores",
        descripcion: "Control digital. Fácil de instalar en línea o en la pistola para medir el consumo exacto.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Medidores-Urea-41.webp"
    },
    {
        id: 42,
        nombre: "Bomba Manual AdBlue",
        marca: "PIUSI",
        categoria: "Urea",
        tipo: "Bombas",
        descripcion: "Calidad manual. Bomba rotativa de acero inoxidable y tecnopolímero certificada para AdBlue.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Bombas-Urea-42.webp"
    },

    // --- PIUSI: GRASA ---
    {
        id: 43,
        nombre: "Bomba Neumática Booster 60:1",
        marca: "PIUSI",
        categoria: "Grasa",
        tipo: "Bombas",
        descripcion: "Presión extrema. Bomba neumática de alto rendimiento para grasa en entornos profesionales.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Bombas-Grasa-43.webp"
    },
    {
        id: 44,
        nombre: "Pistola Greaster",
        marca: "PIUSI",
        categoria: "Grasa",
        tipo: "Pistolas",
        descripcion: "Aplicación precisa. Pistola de alta presión con empuñadura ergonómica y flexible.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Pistolas-Grasa-44.webp"
    },

    
    // --- PIUSI: AIRE ---
    {
        id: 49,
        nombre: "Carrete Hose Reel Air",
        marca: "PIUSI",
        categoria: "Aire",
        tipo: "Carretes",
        descripcion: "Versatilidad. Carrete metálico resistente diseñado específicamente para líneas de aire comprimido.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Carretes-Aire-49.webp"
    },
    // --- PIUSI: UREA (SISTEMAS AVANZADOS) ---
    
    {
        id: 51,
        nombre: "Kit SuzzaraBlue 3 Pro",
        marca: "PIUSI",
        categoria: "Urea",
        tipo: "Kits",
        descripcion: "La evolución del despacho. Unidad completa para IBC con filtro 3D, medidor K24 y pistola automática SB325.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Kits-Urea-51.webp"
    },
    {
        id: 52,
        nombre: "SuzzaraBlue Box",
        marca: "PIUSI",
        categoria: "Urea",
        tipo: "Kits",
        descripcion: "Tu estación de servicio privada. Gabinete metálico con llave, bomba de diafragma y todo lo necesario para un control total.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Kits-Urea-52.webp"
    },
    {
        id: 53,
        nombre: "Bomba SuzzaraBlue DC",
        marca: "PIUSI",
        categoria: "Urea",
        tipo: "Bombas",
        descripcion: "Versatilidad móvil. Potente bomba de diafragma a 12V/24V ideal para despachar Urea en campo o zonas sin electricidad.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Bombas-Urea-53.webp"
    },
    
    {
        id: 60,
        nombre: "Kit SuzzaraBlue Side",
        marca: "PIUSI",
        categoria: "Urea",
        tipo: "Kits",
        descripcion: "Diseño inteligente. Se cuelga lateralmente en el IBC para un despacho rápido y sin complicaciones.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Kits-Urea-60.webp"
    },
    {
        id: 61,
        nombre: "Carrete Retráctil Urea",
        marca: "PIUSI",
        categoria: "Urea",
        tipo: "Carretes",
        descripcion: "Alcance profesional. Manguera EPDM específica para AdBlue con rebobinado automático y soporte de pared.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Carretes-Urea-61.webp"
    },
    // --- PIUSI: SISTEMAS DE GESTIÓN (MCO GO) ---
    {
        id: 62,
        nombre: "Control Unit MCO GO",
        marca: "PIUSI",
        categoria: "Sistemas de Gestión",
        tipo: "Unidades de Control",
        descripcion: "El cerebro de tu taller. Unidad central con pantalla táctil para gestionar hasta 6 válvulas GPV simultáneamente. Conexión LAN.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Sistemas-Control-62.webp"
    },
    {
        id: 63,
        nombre: "Software MCO GO Cloud",
        marca: "PIUSI",
        categoria: "Sistemas de Gestión",
        tipo: "Software",
        descripcion: "Control total en la nube. Monitoreo de tanques virtuales, reportes de consumo por usuario y gestión remota desde cualquier dispositivo.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Sistemas-Software-63.webp"
    },
    {
        id: 64,
        nombre: "Válvula Inteligente GPV 2.0",
        marca: "PIUSI",
        categoria: "Sistemas de Gestión",
        tipo: "Válvulas",
        descripcion: "Automatización inalámbrica. Electroválvula de doble solenoide con conexión WiFi/LAN. Controla el flujo y bloquea despachos no autorizados.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Sistemas-Valvulas-64.webp"
    },
   
    {
        id: 66,
        nombre: "Pistola Easy View",
        marca: "PIUSI",
        categoria: "Sistemas de Gestión",
        tipo: "Pistolas",
        descripcion: "Información en tu mano. Pistola ergonómica con pantalla integrada que se comunica con el sistema MCO para mostrar la orden de trabajo.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Sistemas-Pistolas-66.webp"
    },
   
  


];



const INPUT_FOLDER = './capturas_raw'; // Donde pusiste tus png (1.png, 2.png...)
const OUTPUT_BASE = './src/assets/img'; // Tu carpeta destino en el proyecto

async function procesarImagenes() {
    console.log("🚀 Iniciando procesamiento de imágenes...");

    // Crear carpeta base si no existe
    if (!fs.existsSync(OUTPUT_BASE)) fs.mkdirSync(OUTPUT_BASE, { recursive: true });

    for (const producto of productos) {
        const id = producto.id;
        const sourceFile = path.join(INPUT_FOLDER, `${id}.png`); // Busca 1.png, 2.png...

        // Verificar si la captura existe
        if (!fs.existsSync(sourceFile)) {
            console.warn(`⚠️ Alerta: No encontré la imagen ${id}.png para el producto ${producto.nombre}`);
            continue;
        }

        // Extraer la ruta destino del objeto producto
        // producto.imagen es "./src/assets/img/WINTEK/nombre-largo.webp"
        // Quitamos el "./" del inicio para que path.join funcione bien desde la raiz
        const cleanPath = producto.imagen.replace('./', '');
        const destFile = path.join(process.cwd(), cleanPath);
        const destFolder = path.dirname(destFile);

        // Crear la carpeta de la marca (ej: WINTEK o PIUSI) si no existe
        if (!fs.existsSync(destFolder)) {
            fs.mkdirSync(destFolder, { recursive: true });
        }

        try {
            // AQUÍ OCURRE LA MAGIA: Conversión a WebP + Renombrado + Movimiento
            await sharp(sourceFile)
                .webp({ quality: 80 }) // Calidad 80% para que pesen poco
                .toFile(destFile);

            console.log(`✅ [ID: ${id}] Convertido y movido a -> ${cleanPath}`);
        } catch (error) {
            console.error(`❌ Error procesando ID ${id}:`, error);
        }
    }
    console.log("✨ ¡Proceso terminado!");
}

procesarImagenes();