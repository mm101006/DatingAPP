## Build For DatingApp-API

Run `dotnet watch run` to build the project. 

## Build For DatingApp-SPA

Run `ng serve` to build the project. 

## Debug

1. Select .Net Core Attach
2. Click Play
3. "dotnet" exec "C:\users\home windows\desktop\DatingApp\DatingApp.APi\bing\debug\netcoreap...

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
* Observables require you to subscribe 
* Input and Output for parent/child or vice versa relationships
* In the network tab, you will see two of the same http methods -- one is for preflight and the other is the method call with a response
* use try catch blocks to handle errors -- good for production and development mode -- if in production and you were not using catch blocks the only way to tell if something was wrong is to look at the terminal, an alternative to try catch block, you can use UseExceptionHandler -- see Startup.cs line 61
* Route Resolvers allow you to get Data before the route is activated. 
* BehaviourSubject - type of subject that is a type of Observable
can be subscribed to, subscribers can receive updates, can send values to it
* Any to any communication use Services
* Paging - restricts the number of results returned on a page, done on the backend
* Rxjs operators - a pipe allows us access to the operator, map operator allow us to manipulate the returned observable

