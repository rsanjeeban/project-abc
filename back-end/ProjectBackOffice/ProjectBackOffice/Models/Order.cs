using ProjectBackOffice.Models;
using System;

namespace ProjectBackOffice
{
    public class Order
    {
        public string CompetenceLevel { get; set; }
        public Person ContactPerson { get; set; }
        public Orderer ContactPersonOrderer { get; set; }
        public string DatetimeFrom { get; set; }
        public string DatetimeTo { get; set; }
        public bool IsPhoneAssignment { get; set; }
        public string OrderNumber { get; set; }
        public OrderStatus OrderStatus { get; set; }
    }

}
