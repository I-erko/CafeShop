# Coff-e-Shop

Acerca del proyecto: 

- Tienda virtual para venta de insumos y productos relacionados a la cultura del café.
- El proyecto ha sido desarrollado con el lenguaje de programación C# en el backend y Angular en el frontend. Arquitectura .NET Core. Base de datos PostgreSQL. Conexión a Stripe como procesador de pagos.

Directrices para ejecutar el código:

- cd API -> dotnet watch run 
- Migrations -> en carpeta de sln -> terminal: dotnet migrations add "Postgres initial" - p Infrastructure -s API -c StoreContext -o Data/Migrations
- Identity: dotnet migrations add "Postgres identity initial" - p Infrastructure -s API -c AppIdentityDbContext -o Identity/Migrations

- Stripe CLI -> stripe login -> stripe listen -f https://localhost:5001/api/payments/webhook
  (Parámetros Opcionales -> -e payment_intent.succeeded, payment_intent.payment_failed)
  
- Angular -> cd client -> ng serve
