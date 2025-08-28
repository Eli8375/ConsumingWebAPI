using ConsumingWebAPI.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ConsumingWebAPI.Services
{
    public interface IHolidaysApiService
    {
        Task<List<HolidayModel>> GetHolidays(string countryCode, int year);
    }
}
