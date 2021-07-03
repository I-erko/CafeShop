# CaféShop


- cd API -> dotnet watch run 
- Migrations -> en carpeta de sln -> terminal: dotnet migrations add "Postgres initial" - p Infrastructure -s API -c StoreContext -o Data/Migrations
- Identity: dotnet migrations add "Postgres identity initial" - p Infrastructure -s API -c AppIdentityDbContext -o Identity/Migrations

- Stripe CLI -> stripe login -> stripe listen -f https://localhost:5001/api/payments/webhook
- Angular -> cd client -> ng serve
