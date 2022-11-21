using bclDetailingBackend.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace bclDetailingBackend.Controllers
{
    public class ReservationsController: Controller
    {
        public JsonResult GetReservations()
        {
            Reservation reservation = new Reservation();
            reservation.Id = 1;
            reservation.Name = "Georgeta femeia de fier";
            reservation.PhoneNumber = "0777777777";
            reservation.StartDay = DateTime.MinValue;
            reservation.EndDay = DateTime.MaxValue;
            return Json(reservation);
        }
    }
}
