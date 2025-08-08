// Deportistas con edad mayor a 30
db.Deportistas.find({"edad": {$gt: 30}});

// Equipos con mas de 2 medallas de oro
db.Equipos.find({"medallas.oro": {$gt: 2}});

// Deportistas Femeninos con edad entre 20 y 30
db.Deportistas.find({"genero": "Femenino", "edad": {$gte: 20, $lte: 30}});

// Equipos que no son de futbol
db.Equipos.find({"deporte": {$ne: "DE-001"}}, {"nombre": 1, "deporte": 1, "_id": 0});

// Deportistas de Japon o Francia
db.Deportistas.find({$or: [{"pais": "PA-005"}, {"pais": "PA-003"}]});

// Deportistas de Alemania que no son femeninos
db.Deportistas.find({"pais": {$eq: "PA-006"}, "genero": {$ne: "Femenino"}});

// Equipos con al menos 2 medalla de plata
db.Equipos.find({"medallas.plata": {$gte: 2}}, {"nombre": 1, "medallas.plata": 1, "_id": 0});

// Competencias con menos de 3 participantes
db.Competencias.find({ $expr: { $lt: [ { $size: "$participantes" }, 3 ] } }, { nombre: 1, participantes: 1, _id: 0 });

// Equipos que han ganado al menos una medalla
db.Equipos.find({"medallas": {$exists: true, $ne: []}}, {"nombre": 1, "medallas": 1, "_id": 0});

// Equipos con medallas de oro par 
db.Equipos.find({"medallas.oro": {$mod: [2, 0]}});

// Equipos que no tienen medallas de bronce
db.Equipos.find({"medallas.bronce": {$exists: false}});