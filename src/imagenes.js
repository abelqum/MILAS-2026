const productos = [
    // --- WINTEK: GRASA ---
    {
        id: 1,
        nombre: "Bomba Neumática Grasa L1503",
        marca: "WINTEK",
        categoria: "Grasa",
        tipo: "Bombas",
        descripcion: "Potencia 50:1 constante. La solución definitiva para tambos de 180-220kg en entornos industriales.",
        destacado: false,
        imagen: "./src/assets/img/WINTEK/Bombas-Grasa-1.webp"
    },
    {
        id: 2,
        nombre: "Kit Distribuidor Grasa L5120",
        marca: "WINTEK",
        categoria: "Grasa",
        tipo: "Kits",
        descripcion: "Sistema móvil todo en uno para cubetas de 19kg. Incluye carro, bomba de alta presión y pistola.",
        destacado: false,
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
        destacado: false,
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
        destacado: false,
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
        destacado: false,
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
        destacado: false,
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
        nombre: "Carrete Cerrado Aire L1182",
        marca: "WINTEK",
        categoria: "Aire",
        tipo: "Carretes",
        descripcion: "Diseño compacto y estético. Carcasa de polipropileno de alto impacto con manguera híbrida.",
        destacado: false,
        imagen: "./src/assets/img/WINTEK/Carretes-Aire-19.webp"
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
    {
        id: 26,
        nombre: "Bomba Eléctrica Diesel L1208",
        marca: "WINTEK",
        categoria: "Diesel",
        tipo: "Bombas",
        descripcion: "Portátil y eficaz. Conexión a 12V con pinzas, ideal para maquinaria agrícola o de construcción.",
        destacado: false,
        imagen: "./src/assets/img/WINTEK/Bombas-Diesel-26.webp"
    },
    {
        id: 27,
        nombre: "Medidor Mecánico L1732",
        marca: "WINTEK",
        categoria: "Diesel",
        tipo: "Medidores",
        descripcion: "Confiabilidad clásica. Contador de 4 dígitos reiniciable para un control exacto del combustible.",
        destacado: false,
        imagen: "./src/assets/img/WINTEK/Medidores-Diesel-27.webp"
    },

    // --- PIUSI: ACEITE ---
    {
        id: 28,
        nombre: "Bomba Viscomat 70",
        marca: "PIUSI",
        categoria: "Aceite",
        tipo: "Bombas",
        descripcion: "La referencia mundial. Bomba de paletas para trasvase de aceite con caudal constante de 25 L/min.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Bombas-Aceite-28.webp"
    },
    {
        id: 29,
        nombre: "Bomba Viscomat Gear 200/2",
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
        nombre: "Pistola K400 Digital",
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
        id: 39,
        nombre: "Kit Three25",
        marca: "PIUSI",
        categoria: "Urea",
        tipo: "Kits",
        descripcion: "El nuevo estándar. Sistema completo para IBC con filtro 3D integrado para urea 100% pura.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Kits-Urea-39.webp"
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

    // --- PIUSI: DIESEL ---
    {
        id: 45,
        nombre: "Bomba Panther 56",
        marca: "PIUSI",
        categoria: "Diesel",
        tipo: "Bombas",
        descripcion: "El icono. Bomba rotativa de paletas, autocebante y fiable para trasvase de diésel.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Bombas-Diesel-45.webp"
    },
    {
        id: 46,
        nombre: "Kit Cube 56",
        marca: "PIUSI",
        categoria: "Diesel",
        tipo: "Kits",
        descripcion: "Surtidor compacto. Estación de repostaje privada con bomba, medidor y pistola automática.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Kits-Diesel-46.webp"
    },
    {
        id: 47,
        nombre: "Pistola Self 3000",
        marca: "PIUSI",
        categoria: "Diesel",
        tipo: "Pistolas",
        descripcion: "Flujo libre. Pistola manual de aluminio con alto caudal para llenado rápido.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Pistolas-Diesel-47.webp"
    },
    {
        id: 48,
        nombre: "Medidor Mecánico K33",
        marca: "PIUSI",
        categoria: "Diesel",
        tipo: "Medidores",
        descripcion: "Robusto y preciso. Contador volumétrico de disco oscilante de 3 dígitos parciales.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Medidores-Diesel-48.webp"
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
        id: 50,
        nombre: "Bomba SuzzaraBlue AC",
        marca: "PIUSI",
        categoria: "Urea",
        tipo: "Bombas",
        descripcion: "El corazón del sistema. Bomba de diafragma autocebante sin sellos dinámicos para una fiabilidad total y cero fugas.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Bombas-Urea-50.webp"
    },
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
        id: 54,
        nombre: "Kit Three25",
        marca: "PIUSI",
        categoria: "Urea",
        tipo: "Kits",
        descripcion: "El sistema definitivo para IBC. Protección total con barra antivuelco, filtro 3D Pure y tecnología de punta.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Kits-Urea-54.webp"
    },
    {
        id: 55,
        nombre: "Bomba Manual Rotativa Inox",
        marca: "PIUSI",
        categoria: "Urea",
        tipo: "Bombas",
        descripcion: "Calidad certificada. Cuerpo de acero inoxidable y tecnopolímero. La solución manual más robusta (ISO 22241).",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Bombas-Urea-55.webp"
    },
    {
        id: 56,
        nombre: "Pistola SB325_X",
        marca: "PIUSI",
        categoria: "Urea",
        tipo: "Pistolas",
        descripcion: "Seguridad y ligereza. Boquilla automática de tecnopolímero con sistema Break-Away que se desprende ante tirones.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Pistolas-Urea-56.webp"
    },
    {
        id: 57,
        nombre: "Medidor Digital K24 Urea",
        marca: "PIUSI",
        categoria: "Urea",
        tipo: "Medidores",
        descripcion: "Precisión digital. Fácil de instalar en línea o directo en la pistola para monitorear cada gota de AdBlue.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Medidores-Urea-57.webp"
    },
    {
        id: 58,
        nombre: "Kit SuzzaraBlue Drum",
        marca: "PIUSI",
        categoria: "Urea",
        tipo: "Kits",
        descripcion: "Transforma tu tambo. Placa base de acero inoxidable para acoplar bomba y pistola en minutos. Sencillez y eficacia.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Kits-Urea-58.webp"
    },
    {
        id: 59,
        nombre: "Filtro 3D Urea",
        marca: "PIUSI",
        categoria: "Urea",
        tipo: "Accesorios",
        descripcion: "Pureza garantizada. Filtro de alta eficiencia que elimina impurezas y protege el costoso catalizador SCR de tu flota.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Accesorios-Urea-59.webp"
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
        id: 65,
        nombre: "Dongle 2.0 HDMI",
        marca: "PIUSI",
        categoria: "Sistemas de Gestión",
        tipo: "Accesorios",
        descripcion: "Supervisión en tiempo real. Conecta este dispositivo a cualquier monitor HDMI para ver el estado de los despachos en vivo.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Sistemas-Accesorios-65.webp"
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
    {
        id: 67,
        nombre: "Control Unit 2.0 Mobile",
        marca: "PIUSI",
        categoria: "Sistemas de Gestión",
        tipo: "Unidades de Control",
        descripcion: "Gestión en movimiento. Unidad de control portátil y robusta (Rubber Case) ideal para camiones de servicio y entornos difíciles.",
        destacado: false,
        imagen: "./src/assets/img/PIUSI/Sistemas-Control-67.webp"
    }

];




// =========================================================
//  LÓGICA 1: PÁGINA DE PRODUCTOS (GRID + FILTROS COMBINADOS)
// =========================================================
const contenedorProductos = document.getElementById('contenedor-productos');
const mensajeSinResultados = document.getElementById('mensaje-sin-resultados');
const botonesFiltro = document.querySelectorAll('.btn-filtro');

// ESTADO DE LOS FILTROS
let filtrosActivos = {
    brand: null,
    cat: null,
    tipo: null
};

if (contenedorProductos) {
    
    // Función para renderizar
    function renderizarGrid(lista) {
        contenedorProductos.innerHTML = '';
        
        if (lista.length === 0) {
            mensajeSinResultados.classList.remove('hidden');
        } else {
            mensajeSinResultados.classList.add('hidden');
        }

        lista.forEach(producto => {
            // Colores por marca
            let brandColor = 'bg-slate-200 text-slate-600';
            if(producto.marca === 'PIUSI') brandColor = 'bg-red-100 text-red-700 border border-red-200';
            if(producto.marca === 'SAMSON') brandColor = 'bg-blue-100 text-blue-700 border border-blue-200';
            if(producto.marca === 'WINTEK') brandColor = 'bg-green-100 text-green-700 border border-green-200';

            const card = `
                <article class="h-full bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col group hover:-translate-y-1">
                    <div class="h-64 bg-white flex items-center justify-center p-6 relative overflow-hidden">
                        <span class="absolute top-4 left-4 ${brandColor} px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide z-10">
                            ${producto.marca}
                        </span>
                        <img src="${producto.imagen}" alt="${producto.nombre}" class="h-full w-full object-contain group-hover:scale-110 transition-transform duration-500" loading="lazy" onerror="this.src='./src/assets/img/logo-milas-sin-fondo.webp'; this.classList.add('opacity-20');">
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                        <div class="flex gap-2 mb-1">
                            <span class="text-xs text-yellow-600 font-bold uppercase tracking-wider">${producto.categoria}</span>
                            <span class="text-xs text-slate-400 font-medium uppercase tracking-wider">• ${producto.tipo}</span>
                        </div>
                        <h3 class="font-poppins font-bold text-xl text-slate-800 mb-3 leading-tight">${producto.nombre}</h3>
                        <p class="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">${producto.descripcion}</p>
                        <a href="contacto.html?producto=${encodeURIComponent(producto.nombre)}" class="mt-auto block w-full py-3 text-center bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-lg hover:border-yellow-500 hover:text-yellow-600 transition-all duration-300">Cotizar Equipo</a>
                    </div>
                </article>
            `;
            contenedorProductos.innerHTML += card;
        });
    }

    // Función Principal de Filtrado
    function aplicarFiltros(filtroSeleccionado) {
        
        if (filtroSeleccionado === 'all') {
            // Resetear todo
            filtrosActivos = { brand: null, cat: null, tipo: null };
        } else {
            const [clave, valor] = filtroSeleccionado.split(':');
            
            // Lógica Toggle: Si ya estaba activo, lo quitamos. Si no, lo ponemos.
            if (filtrosActivos[clave] === valor) {
                filtrosActivos[clave] = null; // Desactivar
            } else {
                filtrosActivos[clave] = valor; // Activar
            }
        }

        // Actualizar UI de botones
        actualizarBotonesUI();

        // Filtrar la lista de productos
        const productosFiltrados = productos.filter(p => {
            // Cumple Marca? (Si es null, pasa. Si tiene valor, debe coincidir)
            const cumpleMarca = filtrosActivos.brand ? p.marca === filtrosActivos.brand : true;
            // Cumple Categoria?
            const cumpleCat = filtrosActivos.cat ? p.categoria === filtrosActivos.cat : true;
            // Cumple Tipo?
            const cumpleTipo = filtrosActivos.tipo ? p.tipo === filtrosActivos.tipo : true;

            return cumpleMarca && cumpleCat && cumpleTipo;
        });

        renderizarGrid(productosFiltrados);
    }

    function actualizarBotonesUI() {
        botonesFiltro.forEach(btn => {
            const filtroBtn = btn.getAttribute('data-filter');
            
            // Reset visual
            btn.classList.remove('bg-slate-800', 'text-white', 'shadow-md');
            btn.classList.add('bg-white', 'text-slate-600', 'border-slate-200');

            // Si es el botón "Todos" y no hay filtros activos
            if (filtroBtn === 'all' && !filtrosActivos.brand && !filtrosActivos.cat && !filtrosActivos.tipo) {
                btn.classList.remove('bg-white', 'text-slate-600', 'border-slate-200');
                btn.classList.add('bg-slate-800', 'text-white', 'shadow-md');
                return;
            }

            // Si es un botón activo
            if (filtroBtn !== 'all') {
                const [clave, valor] = filtroBtn.split(':');
                if (filtrosActivos[clave] === valor) {
                    btn.classList.remove('bg-white', 'text-slate-600', 'border-slate-200');
                    btn.classList.add('bg-slate-800', 'text-white', 'shadow-md');
                }
            }
        });
    }

    // Inicialización
    document.addEventListener('DOMContentLoaded', () => renderizarGrid(productos));
    
    botonesFiltro.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filtro = e.target.getAttribute('data-filter');
            aplicarFiltros(filtro);
        });
    });
}


// =========================================================
//  LÓGICA 2: PÁGINA DE INICIO (CARRUSEL DESTACADOS)
// =========================================================
const contenedorDestacados = document.getElementById('Principales'); // Nota: Cambié el ID al correcto que usaste en index.html

if (contenedorDestacados) {
    document.addEventListener('DOMContentLoaded', () => {
        
        // Filtrar solo destacados
        const destacados = productos.filter(p => p.destacado === true);
        
        contenedorDestacados.innerHTML = '';

        if (destacados.length === 0) {
            contenedorDestacados.innerHTML = '<p class="text-center w-full text-slate-400">Próximamente productos destacados.</p>';
            return;
        }

        destacados.forEach(producto => {
            let brandColor = 'bg-slate-200 text-slate-600';
            if(producto.marca === 'PIUSI') brandColor = 'bg-red-100 text-red-700 border border-red-200';
            if(producto.marca === 'SAMSON') brandColor = 'bg-blue-100 text-blue-700 border border-blue-200';
            if(producto.marca === 'WINTEK') brandColor = 'bg-green-100 text-green-700 border border-green-200';

            const card = `
                <article class="min-w-[85%] md:min-w-[350px] snap-center bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col group hover:-translate-y-1">
                    <div class="h-64 bg-white flex items-center justify-center p-6 relative overflow-hidden">
                        <span class="absolute top-4 left-4 ${brandColor} px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide z-10">
                            ${producto.marca}
                        </span>
                        <img src="${producto.imagen}" alt="${producto.nombre}" class="h-full w-full object-contain group-hover:scale-110 transition-transform duration-500" loading="lazy" onerror="this.src='./src/assets/img/logo-milas-sin-fondo.webp'; this.classList.add('opacity-20');">
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                        <div class="flex gap-2 mb-1">
                            <span class="text-xs text-yellow-600 font-bold uppercase tracking-wider">${producto.categoria}</span>
                            <span class="text-xs text-slate-400 font-medium uppercase tracking-wider">• ${producto.tipo}</span>
                        </div>
                        <h3 class="font-poppins font-bold text-xl text-slate-800 mb-3 leading-tight">${producto.nombre}</h3>
                        <p class="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">${producto.descripcion}</p>
                        <a href="contacto.html?producto=${encodeURIComponent(producto.nombre)}" class="mt-auto block w-full py-3 text-center bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-lg hover:border-yellow-500 hover:text-yellow-600 transition-all duration-300">Cotizar</a>
                    </div>
                </article>
            `;
            contenedorDestacados.innerHTML += card;
        });
    });
}