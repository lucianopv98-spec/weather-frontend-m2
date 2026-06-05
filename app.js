$(document).ready(function () {
    //Datos de las ciudades (Posiblemente pueda poner un API pero desconozco como hacerlo en detalle, por lo que los datos se pondrán de forma manual)

    const datosCiudades = {
        "Santiago": {
            temp: "22°C",
            desc: "Soleado",
            icon: "https://maps.gstatic.com/weather/v1/sunny.svg",
            pronostico: [
                { dia: "Lun", temp: "22°C", icon: "https://maps.gstatic.com/weather/v1/sunny.svg" },
                { dia: "Mar", temp: "24°C", icon: "https://maps.gstatic.com/weather/v1/sunny.svg" },
                { dia: "Mié", temp: "21°C", icon: "https://maps.gstatic.com/weather/v1/mostly_cloudy.svg" },
                { dia: "Jue", temp: "19°C", icon: "https://maps.gstatic.com/weather/v1/cloudy.svg" },
                { dia: "Vie", temp: "20°C", icon: "https://maps.gstatic.com/weather/v1/mostly_cloudy.svg" },
                { dia: "Sáb", temp: "23°C", icon: "https://maps.gstatic.com/weather/v1/sunny.svg" },
                { dia: "Dom", temp: "25°C", icon: "https://maps.gstatic.com/weather/v1/sunny.svg" }
            ]
        },
        "Valparaiso": {
            temp: "18°C",
            desc: "Soleado",
            icon: "https://maps.gstatic.com/weather/v1/sunny.svg",
            pronostico: [
                { dia: "Lun", temp: "18°C", icon: "https://maps.gstatic.com/weather/v1/sunny.svg" },
                { dia: "Mar", temp: "17°C", icon: "https://maps.gstatic.com/weather/v1/cloudy.svg" },
                { dia: "Mié", temp: "16°C", icon: "https://maps.gstatic.com/weather/v1/heavy.svg" },
                { dia: "Jue", temp: "17°C", icon: "https://maps.gstatic.com/weather/v1/cloudy.svg" },
                { dia: "Vie", temp: "19°C", icon: "https://maps.gstatic.com/weather/v1/sunny.svg" },
                { dia: "Sáb", temp: "20°C", icon: "https://maps.gstatic.com/weather/v1/sunny.svg" },
                { dia: "Dom", temp: "18°C", icon: "https://maps.gstatic.com/weather/v1/cloudy.svg" }
            ]
        },
        "Arica": {
            temp: "21°C",
            desc: "Soleado",
            icon: "https://maps.gstatic.com/weather/v1/sunny.svg",
            pronostico: [
                { dia: "Lun", temp: "21°C", icon: "https://maps.gstatic.com/weather/v1/sunny.svg" },
                { dia: "Mar", temp: "22°C", icon: "https://maps.gstatic.com/weather/v1/sunny.svg" },
                { dia: "Mié", temp: "21°C", icon: "https://maps.gstatic.com/weather/v1/sunny.svg" },
                { dia: "Jue", temp: "20°C", icon: "https://maps.gstatic.com/weather/v1/mostly_cloudy.svg" },
                { dia: "Vie", temp: "21°C", icon: "https://maps.gstatic.com/weather/v1/sunny.svg" },
                { dia: "Sáb", temp: "22°C", icon: "https://maps.gstatic.com/weather/v1/sunny.svg" },
                { dia: "Dom", temp: "22°C", icon: "https://maps.gstatic.com/weather/v1/sunny.svg" }
            ]
        },
        "Antofagasta": {
            temp: "18°C",
            desc: "Parcialmente Nublado",
            icon: "https://maps.gstatic.com/weather/v1/mostly_cloudy.svg",
            pronostico: [
                { dia: "Lun", temp: "18°C", icon: "https://maps.gstatic.com/weather/v1/mostly_cloudy.svg" },
                { dia: "Mar", temp: "19°C", icon: "https://maps.gstatic.com/weather/v1/sunny.svg" },
                { dia: "Mié", temp: "18°C", icon: "https://maps.gstatic.com/weather/v1/mostly_cloudy.svg" },
                { dia: "Jue", temp: "17°C", icon: "https://maps.gstatic.com/weather/v1/cloudy.svg" },
                { dia: "Vie", temp: "18°C", icon: "https://maps.gstatic.com/weather/v1/mostly_cloudy.svg" },
                { dia: "Sáb", temp: "19°C", icon: "https://maps.gstatic.com/weather/v1/sunny.svg" },
                { dia: "Dom", temp: "18°C", icon: "https://maps.gstatic.com/weather/v1/mostly_cloudy.svg" }
            ]
        },
        "Calama": {
            temp: "16°C",
            desc: "Nublado",
            icon: "https://maps.gstatic.com/weather/v1/cloudy.svg",
            pronostico: [
                { dia: "Lun", temp: "16°C", icon: "https://maps.gstatic.com/weather/v1/cloudy.svg" },
                { dia: "Mar", temp: "17°C", icon: "https://maps.gstatic.com/weather/v1/mostly_cloudy.svg" },
                { dia: "Mié", temp: "16°C", icon: "https://maps.gstatic.com/weather/v1/cloudy.svg" },
                { dia: "Jue", temp: "15°C", icon: "https://maps.gstatic.com/weather/v1/cloudy.svg" },
                { dia: "Vie", temp: "16°C", icon: "https://maps.gstatic.com/weather/v1/cloudy.svg" },
                { dia: "Sáb", temp: "17°C", icon: "https://maps.gstatic.com/weather/v1/mostly_cloudy.svg" },
                { dia: "Dom", temp: "16°C", icon: "https://maps.gstatic.com/weather/v1/cloudy.svg" }
            ]
        },
        "Rancagua": {
            temp: "19°C",
            desc: "Soleado",
            icon: "https://maps.gstatic.com/weather/v1/sunny.svg",
            pronostico: [
                { dia: "Lun", temp: "19°C", icon: "https://maps.gstatic.com/weather/v1/sunny.svg" },
                { dia: "Mar", temp: "21°C", icon: "https://maps.gstatic.com/weather/v1/sunny.svg" },
                { dia: "Mié", temp: "19°C", icon: "https://maps.gstatic.com/weather/v1/mostly_cloudy.svg" },
                { dia: "Jue", temp: "18°C", icon: "https://maps.gstatic.com/weather/v1/cloudy.svg" },
                { dia: "Vie", temp: "19°C", icon: "https://maps.gstatic.com/weather/v1/mostly_cloudy.svg" },
                { dia: "Sáb", temp: "20°C", icon: "https://maps.gstatic.com/weather/v1/sunny.svg" },
                { dia: "Dom", temp: "21°C", icon: "https://maps.gstatic.com/weather/v1/sunny.svg" }
            ]
        },
        "Talca": {
            temp: "15°C",
            desc: "Nublado",
            icon: "https://maps.gstatic.com/weather/v1/cloudy.svg",
            pronostico: [
                { dia: "Lun", temp: "15°C", icon: "https://maps.gstatic.com/weather/v1/cloudy.svg" },
                { dia: "Mar", temp: "16°C", icon: "https://maps.gstatic.com/weather/v1/mostly_cloudy.svg" },
                { dia: "Mié", temp: "15°C", icon: "https://maps.gstatic.com/weather/v1/cloudy.svg" },
                { dia: "Jue", temp: "14°C", icon: "https://maps.gstatic.com/weather/v1/heavy.svg" },
                { dia: "Vie", temp: "15°C", icon: "https://maps.gstatic.com/weather/v1/cloudy.svg" },
                { dia: "Sáb", temp: "16°C", icon: "https://maps.gstatic.com/weather/v1/mostly_cloudy.svg" },
                { dia: "Dom", temp: "15°C", icon: "https://maps.gstatic.com/weather/v1/cloudy.svg" }
            ]
        },
        "Concepcion": {
            temp: "13°C",
            desc: "Lluvia",
            icon: "https://maps.gstatic.com/weather/v1/heavy.svg",
            pronostico: [
                { dia: "Lun", temp: "13°C", icon: "https://maps.gstatic.com/weather/v1/heavy.svg" },
                { dia: "Mar", temp: "12°C", icon: "https://maps.gstatic.com/weather/v1/heavy.svg" },
                { dia: "Mié", temp: "11°C", icon: "https://maps.gstatic.com/weather/v1/heavy.svg" },
                { dia: "Jue", temp: "13°C", icon: "https://maps.gstatic.com/weather/v1/cloudy.svg" },
                { dia: "Vie", temp: "14°C", icon: "https://maps.gstatic.com/weather/v1/mostly_cloudy.svg" },
                { dia: "Sáb", temp: "13°C", icon: "https://maps.gstatic.com/weather/v1/cloudy.svg" },
                { dia: "Dom", temp: "12°C", icon: "https://maps.gstatic.com/weather/v1/heavy.svg" }
            ]
        },
        "Temuco": {
            temp: "11°C",
            desc: "Lluvia Fuerte",
            icon: "https://maps.gstatic.com/weather/v1/heavy.svg",
            pronostico: [
                { dia: "Lun", temp: "11°C", icon: "https://maps.gstatic.com/weather/v1/heavy.svg" },
                { dia: "Mar", temp: "10°C", icon: "https://maps.gstatic.com/weather/v1/heavy.svg" },
                { dia: "Mié", temp: "9°C", icon: "https://maps.gstatic.com/weather/v1/heavy.svg" },
                { dia: "Jue", temp: "11°C", icon: "https://maps.gstatic.com/weather/v1/heavy.svg" },
                { dia: "Vie", temp: "12°C", icon: "https://maps.gstatic.com/weather/v1/cloudy.svg" },
                { dia: "Sáb", temp: "11°C", icon: "https://maps.gstatic.com/weather/v1/heavy.svg" },
                { dia: "Dom", temp: "10°C", icon: "https://maps.gstatic.com/weather/v1/heavy.svg" }
            ]
        },
        "Osorno": {
            temp: "10°C",
            desc: "Chubascos",
            icon: "https://maps.gstatic.com/weather/v1/heavy.svg",
            pronostico: [
                { dia: "Lun", temp: "10°C", icon: "https://maps.gstatic.com/weather/v1/heavy.svg" },
                { dia: "Mar", temp: "9°C", icon: "https://maps.gstatic.com/weather/v1/heavy.svg" },
                { dia: "Mié", temp: "8°C", icon: "https://maps.gstatic.com/weather/v1/heavy.svg" },
                { dia: "Jue", temp: "10°C", icon: "https://maps.gstatic.com/weather/v1/heavy.svg" },
                { dia: "Vie", temp: "11°C", icon: "https://maps.gstatic.com/weather/v1/heavy.svg" },
                { dia: "Sáb", temp: "10°C", icon: "https://maps.gstatic.com/weather/v1/heavy.svg" },
                { dia: "Dom", temp: "9°C", icon: "https://maps.gstatic.com/weather/v1/heavy.svg" }
            ]
        }
    };

    //tomo los parámetros de la ciudad 
    const urlParametros = new URLSearchParams(window.location.search);
    const ciudad = urlParametros.get(`ciudad`);

    if (ciudad && datosCiudades[ciudad]) {
        const info = datosCiudades[ciudad];

        $(`#nombre-ciudad`).text(`Clima en ` + ciudad);
        $(`#temp-ciudad`).text(info.temp);
        $('#desc-clima').text(info.desc);
        $('#icono-clima').attr('src', info.icon);

        let htmlPronostico = '';
        info.pronostico.forEach(dia => {
            htmlPronostico += `
                <div class="col">
                    <div class="card p-2 h-100 border-0 shadow-sm">
                        <p class="fw-bold mb-1">${dia.dia}</p>
                        <img src="${dia.icon}" width="40" class="mx-auto mb-2">
                        <p class="mb-0">${dia.temp}</p>
                    </div>
                </div>`;
        });
        $('#contenedor-pronostico').html(htmlPronostico);

    } else if (window.location.pathname.includes('detalles.html')) {
        $('#nombre-ciudad').text("Ciudad no encontrada");
    }

});
