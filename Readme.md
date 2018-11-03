## Build For DatingApp-API

Run `dotnet watch run` to build the project. 

## Build For DatingApp-SPA

Run `ng serve` to build the project. 

## Debug

1. Select .Net Core Attach
2. Click Play
3. dotnet long one

## Database

1. open SQ Lite
2. Navigate to where the DatingApp.db is 

## Other commands
1. Add a migration and then Update 
dotnet ef migrations add AddedUserEntity
dotnet ef database update
2.Remove a migration
dotnet ef migrations remove (removes latest migration)
3. Fixing databse
dotnet ef database drop
dotnet ef migrations remove
dotnet ef database update (recreates the data applying all migrations) 

## Seeding Data
1. json-generator.com
2. https://randomuser.me/api/portraits/women/num.integer(1,99) + '.jpg';

## To add users to db
Within Startup.cs uncomment seeder.SeedUsers();


## What I learned
Observables require you to subscribe 
Input and Output for parent/child or vice versa relationships
in the network tab, you will see two of the same name for http methods -- one is for preflight and the other is the actual method call
use try catch blocks to handle errors -- good for production and development mode -- if in production and you were not using catch blocks the only way to tell if something was wrong is to look at the terminal 
instead of using try catch blocks you can use UseExceptionHandler see Startup.cs line 61

