using System.Diagnostics;
using ConsumingWebAPI.Models;
using ConsumingWebAPI.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ConsumingWebAPI.Controllers
{
    public class HomeController : Controller
    {
        private readonly IHolidaysApiService _holidaysApiService;

        public HomeController(IHolidaysApiService holidaysApiService)
        {
            _holidaysApiService = holidaysApiService;
        }

        public async Task<IActionResult> Index(string countryCode, int year)
        {
            if (!string.IsNullOrEmpty(countryCode) && year > 0)
            {
                var holidays = await _holidaysApiService.GetHolidays(countryCode.ToUpper(), year);

                if (Request.Headers["X-Requested-With"] == "XMLHttpRequest")
                {
                    return Json(holidays);
                }

                return View(holidays);
            }

            return View(new List<HolidayModel>());
        }

    }
}
