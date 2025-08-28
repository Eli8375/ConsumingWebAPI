ConsumingWebAPI
Overview

ASP.NET Core MVC app that fetches and displays public holiday data from an external REST API. Includes both a server-rendered Razor view and a static page that calls the controller via AJAX.

What I Built:
MVC structure: Controllers, Views, Models.
Service layer: IHolidaysApiService + HolidaysApiService using HttpClient.
DI setup: Service registered in Program.cs.
Two UIs:
Razor view at Home/Index (form submits to controller).
Static page wwwroot/holiday.html (AJAX to /Home/Index).
Model: HolidayModel shaped to the API response.

How It Works:
User enters country code and year.
Controller calls the service, which issues an HTTP GET to a public holidays API (e.g., Nager.Date style: PublicHolidays/{year}/{countryCode}) and deserializes JSON.
Results render as a table (Razor) or return JSON (AJAX path).

Run:
Visual Studio 2022: Open ConsumingWebAPI.sln → Run.

CLI:
dotnet restore
dotnet run --project ConsumingWebAPI/ConsumingWebAPI.csproj


Navigate to:
https://localhost:<port>/ → Razor UI
https://localhost:<port>/holiday.html → AJAX UI


Tech:
C#, ASP.NET Core MVC, HttpClient, JSON (System.Text.Json), VS 2022.
