use competencia;

db.createCollection("Paises_Delegaciones");

db.Paises_Delegaciones.insertMany([
    {
        "_id": "PA-001",
        "nombre": "España",
        "continente": "Europa"
    },
    {
        "_id": "PA-002",
        "nombre": "Argentina",
        "continente": "Sudamérica"
    },
    {
        "_id": "PA-003",
        "nombre": "Francia",
        "continente": "Europa"
    },
    {
        "_id": "PA-004",
        "nombre": "Brasil",
        "continente": "Sudamérica"
    },
    {
        "_id": "PA-005",
        "nombre": "Japón",
        "continente": "Asia"
    },
    {
        "_id": "PA-006",
        "nombre": "Alemania",
        "continente": "Europa"
    },
    {
        "_id": "PA-007",
        "nombre": "Italia",
        "continente": "Europa"
    },
    {
        "_id": "PA-008",
        "nombre": "Reino Unido",
        "continente": "Europa"
    },
    {
        "_id": "PA-009",
        "nombre": "Estados Unidos",
        "continente": "América del Norte"
    }
]);

db.createCollection("Deportes");

db.Deportes.insertMany([
    {
        "_id": "DE-001",
        "nombre": "Fútbol",
        "equipo": true
    },
    {
        "_id": "DE-002",
        "nombre": "Baloncesto",
        "equipo": true
    },
    {
        "_id": "DE-003",
        "nombre": "Tenis",
        "equipo": false
    },
    {
        "_id": "DE-004",
        "nombre": "Natación",
        "equipo": false
    },
    {
        "_id": "DE-005",
        "nombre": "Ciclismo",
        "equipo": false
    },
    {
        "_id": "DE-006",
        "nombre": "Rugby",
        "equipo": true
    },
    {
        "_id": "DE-007",
        "nombre": "Golf",
        "equipo": false
    },
    {
        "_id": "DE-008",
        "nombre": "Voleibol",
        "equipo": true
    },
    {
        "_id": "DE-009",
        "nombre": "Atletismo",
        "equipo": false
    }
]);

db.createCollection("Deportistas");

db.Deportistas.insertMany([
    {
        "_id": "DEP-001",
        "nombre": "Lionel Messi",
        "pais": "PA-002",
        "deporte": "DE-001",
        "edad": 36,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-002",
        "nombre": "Ángel Di María",
        "pais": "PA-002",
        "deporte": "DE-001",
        "edad": 35,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-003",
        "nombre": "Emiliano Martínez",
        "pais": "PA-002",
        "deporte": "DE-001",
        "edad": 31,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-004",
        "nombre": "Rodrigo De Paul",
        "pais": "PA-002",
        "deporte": "DE-001",
        "edad": 29,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-005",
        "nombre": "Julián Álvarez",
        "pais": "PA-002",
        "deporte": "DE-001",
        "edad": 23,
        "genero": "Masculino"
    },

    {
        "_id": "DEP-006",
        "nombre": "Sergio Ramos",
        "pais": "PA-001",
        "deporte": "DE-001",
        "edad": 37,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-007",
        "nombre": "Pedri González",
        "pais": "PA-001",
        "deporte": "DE-001",
        "edad": 21,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-008",
        "nombre": "Ferran Torres",
        "pais": "PA-001",
        "deporte": "DE-001",
        "edad": 23,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-009",
        "nombre": "Rodri Hernández",
        "pais": "PA-001",
        "deporte": "DE-001",
        "edad": 27,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-010",
        "nombre": "Marco Asensio",
        "pais": "PA-001",
        "deporte": "DE-001",
        "edad": 28,
        "genero": "Masculino"
    },

    {
        "_id": "DEP-011",
        "nombre": "LeBron James",
        "pais": "PA-009",
        "deporte": "DE-002",
        "edad": 39,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-012",
        "nombre": "Stephen Curry",
        "pais": "PA-009",
        "deporte": "DE-002",
        "edad": 36,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-013",
        "nombre": "Jayson Tatum",
        "pais": "PA-009",
        "deporte": "DE-002",
        "edad": 26,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-014",
        "nombre": "Kevin Durant",
        "pais": "PA-009",
        "deporte": "DE-002",
        "edad": 36,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-015",
        "nombre": "Bam Adebayo",
        "pais": "PA-009",
        "deporte": "DE-002",
        "edad": 27,
        "genero": "Masculino"
    },

    {
        "_id": "DEP-016",
        "nombre": "Rudy Gobert",
        "pais": "PA-003",
        "deporte": "DE-002",
        "edad": 32,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-017",
        "nombre": "Evan Fournier",
        "pais": "PA-003",
        "deporte": "DE-002",
        "edad": 31,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-018",
        "nombre": "Nando de Colo",
        "pais": "PA-003",
        "deporte": "DE-002",
        "edad": 37,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-019",
        "nombre": "Elie Okobo",
        "pais": "PA-003",
        "deporte": "DE-002",
        "edad": 27,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-020",
        "nombre": "Guerschon Yabusele",
        "pais": "PA-003",
        "deporte": "DE-002",
        "edad": 29,
        "genero": "Masculino"
    },

    {
        "_id": "DEP-021",
        "nombre": "Maro Itoje",
        "pais": "PA-008",
        "deporte": "DE-006",
        "edad": 29,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-022",
        "nombre": "Owen Farrell",
        "pais": "PA-008",
        "deporte": "DE-006",
        "edad": 33,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-023",
        "nombre": "Courtney Lawes",
        "pais": "PA-008",
        "deporte": "DE-006",
        "edad": 36,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-024",
        "nombre": "Tom Curry",
        "pais": "PA-008",
        "deporte": "DE-006",
        "edad": 26,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-025",
        "nombre": "Ellis Genge",
        "pais": "PA-008",
        "deporte": "DE-006",
        "edad": 29,
        "genero": "Masculino"
    },

    {
        "_id": "DEP-026",
        "nombre": "Michele Lamaro",
        "pais": "PA-007",
        "deporte": "DE-006",
        "edad": 26,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-027",
        "nombre": "Paolo Garbisi",
        "pais": "PA-007",
        "deporte": "DE-006",
        "edad": 24,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-028",
        "nombre": "Danilo Fischetti",
        "pais": "PA-007",
        "deporte": "DE-006",
        "edad": 26,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-029",
        "nombre": "Juan Ignacio Brex",
        "pais": "PA-007",
        "deporte": "DE-006",
        "edad": 31,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-030",
        "nombre": "Sebastian Negri",
        "pais": "PA-007",
        "deporte": "DE-006",
        "edad": 30,
        "genero": "Masculino"
    },

    {
        "_id": "DEP-031",
        "nombre": "Bruno Rezende",
        "pais": "PA-004",
        "deporte": "DE-008",
        "edad": 38,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-032",
        "nombre": "Wallace Souza",
        "pais": "PA-004",
        "deporte": "DE-008",
        "edad": 37,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-033",
        "nombre": "Lucarelli Souza",
        "pais": "PA-004",
        "deporte": "DE-008",
        "edad": 31,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-034",
        "nombre": "Yoandy Leal",
        "pais": "PA-004",
        "deporte": "DE-008",
        "edad": 36,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-035",
        "nombre": "Lucas Saatkamp",
        "pais": "PA-004",
        "deporte": "DE-008",
        "edad": 38,
        "genero": "Masculino"
    },

    {
        "_id": "DEP-036",
        "nombre": "György Grozer",
        "pais": "PA-006",
        "deporte": "DE-008",
        "edad": 39,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-037",
        "nombre": "Denys Kaliberda",
        "pais": "PA-006",
        "deporte": "DE-008",
        "edad": 33,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-038",
        "nombre": "Lukas Kampa",
        "pais": "PA-006",
        "deporte": "DE-008",
        "edad": 37,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-039",
        "nombre": "Christian Fromm",
        "pais": "PA-006",
        "deporte": "DE-008",
        "edad": 34,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-040",
        "nombre": "Moritz Reichert",
        "pais": "PA-006",
        "deporte": "DE-008",
        "edad": 29,
        "genero": "Masculino"
    },

    {
        "_id": "DEP-041",
        "nombre": "Rafael Nadal",
        "pais": "PA-001",
        "deporte": "DE-003",
        "edad": 38,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-042",
        "nombre": "Naomi Osaka",
        "pais": "PA-005",
        "deporte": "DE-003",
        "edad": 27,
        "genero": "Femenino"
    },
    {
        "_id": "DEP-043",
        "nombre": "Novak Djokovic",
        "pais": "PA-003",
        "deporte": "DE-003",
        "edad": 37,
        "genero": "Masculino"
    },

    {
        "_id": "DEP-044",
        "nombre": "Katie Ledecky",
        "pais": "PA-009",
        "deporte": "DE-004",
        "edad": 28,
        "genero": "Femenino"
    },
    {
        "_id": "DEP-045",
        "nombre": "Caeleb Dressel",
        "pais": "PA-009",
        "deporte": "DE-004",
        "edad": 29,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-046",
        "nombre": "Sarah Sjöström",
        "pais": "PA-003",
        "deporte": "DE-004",
        "edad": 31,
        "genero": "Femenino"
    },

    {
        "_id": "DEP-047",
        "nombre": "Primoz Roglic",
        "pais": "PA-003",
        "deporte": "DE-005",
        "edad": 35,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-048",
        "nombre": "Nairo Quintana",
        "pais": "PA-002",
        "deporte": "DE-005",
        "edad": 34,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-049",
        "nombre": "Egan Bernal",
        "pais": "PA-002",
        "deporte": "DE-005",
        "edad": 27,
        "genero": "Masculino"
    },

    {
        "_id": "DEP-050",
        "nombre": "Tiger Woods",
        "pais": "PA-009",
        "deporte": "DE-007",
        "edad": 49,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-051",
        "nombre": "Hideki Matsuyama",
        "pais": "PA-005",
        "deporte": "DE-007",
        "edad": 32,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-052",
        "nombre": "Aditi Ashok",
        "pais": "PA-005",
        "deporte": "DE-007",
        "edad": 27,
        "genero": "Femenino"
    },

    {
        "_id": "DEP-053",
        "nombre": "Usain Bolt",
        "pais": "PA-004",
        "deporte": "DE-009",
        "edad": 38,
        "genero": "Masculino"
    },
    {
        "_id": "DEP-054",
        "nombre": "Allyson Felix",
        "pais": "PA-009",
        "deporte": "DE-009",
        "edad": 39,
        "genero": "Femenino"
    },
    {
        "_id": "DEP-055",
        "nombre": "Yohan Blake",
        "pais": "PA-004",
        "deporte": "DE-009",
        "edad": 35,
        "genero": "Masculino"
    }
]);

db.createCollection("Equipos");

db.Equipos.insertMany([

    {
        "_id": "EQ-001",
        "nombre": "Argentina Fútbol",
        "pais": "PA-002",
        "deporte": "DE-001",
        "medallas": {
            "oro": 2,
            "plata": 1,
            "bronce": 0
        },
        "deportistas": [
            "DEP-001", "DEP-002", "DEP-003", "DEP-004", "DEP-005"
        ]
    },
    {
        "_id": "EQ-002",
        "nombre": "España Fútbol",
        "pais": "PA-001",
        "deporte": "DE-001",
        "medallas": {
            "oro": 1,
            "plata": 2,
            "bronce": 1
        },
        "deportistas": [
            "DEP-006", "DEP-007", "DEP-008", "DEP-009", "DEP-010"
        ]
    },

    {
        "_id": "EQ-003",
        "nombre": "Estados Unidos Baloncesto",
        "pais": "PA-009",
        "deporte": "DE-002",
        "medallas": {
            "oro": 3,
            "plata": 2,
            "bronce": 1
        },
        "deportistas": [
            "DEP-011", "DEP-012", "DEP-013", "DEP-014", "DEP-015"
        ]
    },
    {
        "_id": "EQ-004",
        "nombre": "Francia Baloncesto",
        "pais": "PA-003",
        "deporte": "DE-002",
        "medallas": {
            "oro": 2,
            "plata": 1,
            "bronce": 0
        },
        "deportistas": [
            "DEP-016", "DEP-017", "DEP-018", "DEP-019", "DEP-020"
        ]
    },

    {
        "_id": "EQ-005",
        "nombre": "Reino Unido Rugby",
        "pais": "PA-008",
        "deporte": "DE-006",
        "medallas": {
            "oro": 1,
            "plata": 0,
            "bronce": 1
        },
        "deportistas": [
            "DEP-021", "DEP-022", "DEP-023", "DEP-024", "DEP-025"
        ]
    },
    {
        "_id": "EQ-006",
        "nombre": "Italia Rugby",
        "pais": "PA-007",
        "deporte": "DE-006",
        "medallas": {
            "oro": 0,
            "plata": 1,
            "bronce": 0
        },
        "deportistas": [
            "DEP-026", "DEP-027", "DEP-028", "DEP-029", "DEP-030"
        ]
    },

    {
        "_id": "EQ-007",
        "nombre": "Brasil Voleibol",
        "pais": "PA-004",
        "deporte": "DE-008",
        "medallas": {
            "oro": 2,
            "plata": 1,
            "bronce": 0
        },
        "deportistas": [
            "DEP-031", "DEP-032", "DEP-033", "DEP-034", "DEP-035"
        ]
    },
    {
        "_id": "EQ-008",
        "nombre": "Alemania Voleibol",
        "pais": "PA-006",
        "deporte": "DE-008",
        "medallas": {
            "oro": 1,
            "plata": 2,
            "bronce": 1
        },
        "deportistas": [
            "DEP-036", "DEP-037", "DEP-038", "DEP-039", "DEP-040"
        ]
    }
]);

db.createCollection("Delegaciones_Individuales");

db.Delegaciones_Individuales.insertMany([
    {
        "_id": "IND-001",
        "nombre": "Rafael Nadal",
        "pais": "PA-001",
        "deporte": "DE-003",
        "deportista": "DEP-041"
    },
    {
        "_id": "IND-002",
        "nombre": "Naomi Osaka",
        "pais": "PA-005",
        "deporte": "DE-003",
        "deportista": "DEP-042"
    },
    {
        "_id": "IND-003",
        "nombre": "Novak Djokovic",
        "pais": "PA-003",
        "deporte": "DE-003",
        "deportista": "DEP-043"
    },

    {
        "_id": "IND-004",
        "nombre": "Katie Ledecky",
        "pais": "PA-009",
        "deporte": "DE-004",
        "deportista": "DEP-044"
    },
    {
        "_id": "IND-005",
        "nombre": "Caeleb Dressel",
        "pais": "PA-009",
        "deporte": "DE-004",
        "deportista": "DEP-045"
    },
    {
        "_id": "IND-006",
        "nombre": "Sarah Sjöström",
        "pais": "PA-003",
        "deporte": "DE-004",
        "deportista": "DEP-046"
    },

    {
        "_id": "IND-007",
        "nombre": "Primoz Roglic",
        "pais": "PA-003",
        "deporte": "DE-005",
        "deportista": "DEP-047"
    },
    {
        "_id": "IND-008",
        "nombre": "Nairo Quintana",
        "pais": "PA-002",
        "deporte": "DE-005",
        "deportista": "DEP-048"
    },
    {
        "_id": "IND-009",
        "nombre": "Egan Bernal",
        "pais": "PA-002",
        "deporte": "DE-005",
        "deportista": "DEP-049"
    },

    {
        "_id": "IND-010",
        "nombre": "Tiger Woods",
        "pais": "PA-009",
        "deporte": "DE-007",
        "deportista": "DEP-050"
    },
    {
        "_id": "IND-011",
        "nombre": "Hideki Matsuyama",
        "pais": "PA-005",
        "deporte": "DE-007",
        "deportista": "DEP-051"
    },
    {
        "_id": "IND-012",
        "nombre": "Aditi Ashok",
        "pais": "PA-005",
        "deporte": "DE-007",
        "deportista": "DEP-052"
    },

    {
        "_id": "IND-013",
        "nombre": "Usain Bolt",
        "pais": "PA-004",
        "deporte": "DE-009",
        "deportista": "DEP-053"
    },
    {
        "_id": "IND-014",
        "nombre": "Allyson Felix",
        "pais": "PA-009",
        "deporte": "DE-009",
        "deportista": "DEP-054"
    },
    {
        "_id": "IND-015",
        "nombre": "Yohan Blake",
        "pais": "PA-004",
        "deporte": "DE-009",
        "deportista": "DEP-055"
    }
]);

db.createCollection("Competencias");

db.Competencias.insertMany([
    {
        "_id": "COMP-001",
        "nombre": "Fútbol Masculino",
        "deporte": "DE-001",
        "tipo": "Equipo",
        "participantes": ["EQ-001", "EQ-002"],
        "fecha_inicio": { "$date": "2025-08-10T00:00:00Z" },
        "fecha_fin": { "$date": "2025-08-20T00:00:00Z" }
    },
    {
        "_id": "COMP-002",
        "nombre": "Baloncesto Masculino",
        "deporte": "DE-002",
        "tipo": "Equipo",
        "participantes": ["EQ-003", "EQ-004"],
        "fecha_inicio": { "$date": "2025-08-11T00:00:00Z" },
        "fecha_fin": { "$date": "2025-08-18T00:00:00Z" }
    },
    {
        "_id": "COMP-003",
        "nombre": "Rugby Masculino",
        "deporte": "DE-006",
        "tipo": "Equipo",
        "participantes": ["EQ-005", "EQ-006"],
        "fecha_inicio": { "$date": "2025-08-12T00:00:00Z" },
        "fecha_fin": { "$date": "2025-08-17T00:00:00Z" }
    },
    {
        "_id": "COMP-004",
        "nombre": "Voleibol Masculino",
        "deporte": "DE-008",
        "tipo": "Equipo",
        "participantes": ["EQ-007", "EQ-008"],
        "fecha_inicio": { "$date": "2025-08-13T00:00:00Z" },
        "fecha_fin": { "$date": "2025-08-19T00:00:00Z" }
    },
    {
        "_id": "COMP-005",
        "nombre": "Tenis Individual",
        "deporte": "DE-003",
        "tipo": "Individual",
        "participantes": ["IND-001", "IND-002", "IND-003"],
        "fecha_inicio": { "$date": "2025-08-14T00:00:00Z" },
        "fecha_fin": { "$date": "2025-08-15T00:00:00Z" }
    },
    {
        "_id": "COMP-006",
        "nombre": "Natación Individual",
        "deporte": "DE-004",
        "tipo": "Individual",
        "participantes": ["IND-004", "IND-005", "IND-006"],
        "fecha_inicio": { "$date": "2025-08-15T00:00:00Z" },
        "fecha_fin": { "$date": "2025-08-18T00:00:00Z" }
    },
    {
        "_id": "COMP-007",
        "nombre": "Ciclismo Individual",
        "deporte": "DE-005",
        "tipo": "Individual",
        "participantes": ["IND-007", "IND-008", "IND-009"],
        "fecha_inicio": { "$date": "2025-08-16T00:00:00Z" },
        "fecha_fin": { "$date": "2025-08-17T00:00:00Z" }
    },
    {
        "_id": "COMP-008",
        "nombre": "Golf Individual",
        "deporte": "DE-007",
        "tipo": "Individual",
        "participantes": ["IND-010", "IND-011", "IND-012"],
        "fecha_inicio": { "$date": "2025-08-17T00:00:00Z" },
        "fecha_fin": { "$date": "2025-08-19T00:00:00Z" }
    },
    {
        "_id": "COMP-009",
        "nombre": "Atletismo Individual",
        "deporte": "DE-009",
        "tipo": "Individual",
        "participantes": ["IND-013", "IND-014", "IND-015"],
        "fecha_inicio": { "$date": "2025-08-18T00:00:00Z" },
        "fecha_fin": { "$date": "2025-08-20T00:00:00Z" }
    }
]);