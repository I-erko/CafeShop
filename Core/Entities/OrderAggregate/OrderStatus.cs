using System.Runtime.Serialization;

namespace Core.Entities.OrderAggregate
{
    public enum OrderStatus
    {
        [EnumMember(Value = "Pendiente")]
        Pending,

        [EnumMember(Value = "Pago Recibido")]
        PaymentReceived,

        [EnumMember(Value = "Pago Fallido")]
        PaymentFailed
    }
}