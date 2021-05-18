// extensions/endpoints/recipes/index.js

module.exports = function registerEndpoint(
  router,
  { services, exceptions, database, getSchema }
) {
  //const { ItemsService, AuthenticationService, MailService, UsersService } = services;
  //const { ServiceUnavailableException } = exceptions;

  router.post("/", async (req, res, next) => {
    const db = [];
    console.log(database);
    for (let i = 0; i < req.body.series.length; i++) {
      console.log(req.body.series[i]);
      const dato = await database
        .table("series_componentes_ensamble")
        .where("id", req.body.series[i].id)
        .update({ serie: req.body.series[i].serie });
      console.log(dato);
      db.push(dato);
    }
    res.json(db);
    //console.log(res);
    //const ejemplo = await database.select("*").from("empleados");
  });
};
