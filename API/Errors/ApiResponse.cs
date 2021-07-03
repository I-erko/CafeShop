using System;

namespace API.Errors
{
    public class ApiResponse
    {
        public ApiResponse(int statusCode, string message = null)
        {
            StatusCode = statusCode;
            Message = message ?? GetDefaultMessageForStatusCode(statusCode);
        }

        public int StatusCode { get; set; }
        public string Message { get; set; }

        private string GetDefaultMessageForStatusCode(int statusCode)
        {
            return statusCode switch
            {
                400 => "Una mala solicitud, has hecho",
                401 => "Autorizado, no estás",
                404 => "Recurso encontrado, no fue",
                500 => "Los errores son el camino hacia el lado oscuro. Los errores conducen a la ira. La ira lleva al odio. El odio conduce a un cambio de carrera.",
                _ => null
            };
        }
    }
}