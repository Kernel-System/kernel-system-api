// extensions/endpoints/recipes/index.js

module.exports = function registerEndpoint(
  router,
  { services, exceptions, database, getSchema }
) {
  //const { ItemsService, AuthenticationService, MailService, UsersService } = services;
  //const { ServiceUnavailableException } = exceptions;

  router.post("/", async (req, res, next) => {
    const db = [];
    for (let i = 0; i < req.body.length; i++) {
      console.log(req.body[i]);
      const dato = await database
        .table("productos_comprados")
        .where("id", req.body[i].id)
        .update({ cantidad_ingresada: req.body[i].cantidad });
      console.log(dato);
      db.push(dato);
    }
    res.json(db);
    //console.log(res);
    //const ejemplo = await database.select("*").from("empleados");
  });
};
