// Equipos de futbol
db.Equipos.find({"deporte":"DE-001"});

// Deportistas de Japon
db.Deportistas.find({"pais":"PA-005"});

// Deportes que se juegan en equipo
db.Deportes.find({"equipo":true});

// Deportistas Femeninos
db.Deportistas.find({"genero":"Femenino"});

// Competencias Individuales
db.Competencias.find({"tipo":"Individual"});
