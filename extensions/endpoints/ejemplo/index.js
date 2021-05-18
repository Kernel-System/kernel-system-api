// extensions/endpoints/recipes/index.js
module.exports = function registerEndpoint(
  router,
  { services, exceptions, database, getSchema }
) {
  const { ItemsService, AuthenticationService, MailService, UsersService } =
    services;
  const { ServiceUnavailableException } = exceptions;

  router.get("/", async (req, res, next) => {
    const recipeService = new ItemsService("recipes", {
      schema: req.schema,
      accountability: req.accountability,
    });
    //const ejemplo = await database.select("*").from("empleados");
    console.log(AuthenticationService);
    console.log(UsersService);
    console.log(services);
    res = "ok";
    /*
    recipeService
      .readByQuery({ sort: "name", fields: ["*"] })
      .then((results) => res.json(results))
      .catch((error) => {
        return next(new ServiceUnavailableException(error.message));
      });*/
  });
};
