using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using ProjectBackOffice.Models;

namespace ProjectBackOffice.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrderController : ControllerBase
    {
        

        [HttpGet]
        public IEnumerable<Order> Get()
        {
            var webclient = new WebClient();
            var json = webclient.DownloadString("./Data/OrderData.json");
            var orders = JsonConvert.DeserializeObject<List<Order>>(json);
            return orders;
        }

        
    }
}
