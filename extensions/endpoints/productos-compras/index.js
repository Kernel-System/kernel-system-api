// extensions/endpoints/recipes/index.js

module.exports = function registerEndpoint(
  router,
  { services, exceptions, database, getSchema }
) {
  //const { ItemsService, AuthenticationService, MailService, UsersService } = services;
  //const { ServiceUnavailableException } = exceptions;

  router.post("/", async (req, res, next) => {
    const db = [];
    for (let i = 0; i < req.body,productos.length; i++) {
      console.log(req.body,productos[i]);
      const dato = await database
        .table("productos_comprados")
        .where("id", req.body,productos[i].id)
        .update({ cantidad_ingresada: req.body.productos[i].cantidad });
      console.log(dato);
      db.push(dato);
    }
    res.json(db);
    //console.log(res);
    //const ejemplo = await database.select("*").from("empleados");
  });
};
