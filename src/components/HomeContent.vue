<template>
    <div>
        <section class="bienvenidos">
            <div class="texto-bienvenido text-xs-center">
                <p class="h5">Bievenidos a nuestro sitio</p>
                <h1 class="display-4 mb-3">UberBus</h1>
                <a href="#" class="btn btn-primary btn-lg">Ponte en contacto</a>
            </div>
        </section>
        <section class="quienes-somos  py-2 text-xs-center">
            <div class="container">
                <img :src="nosotros" alt="Nosotros" width="181" class="img-fluid my-auto mb-2 ">
                <h2 class="h3">¿QUIENES SOMOS?</h2>
                <p>Ponemos a tu alcance el servicio de localizacion de autobuses</p>
                <a href="#" class="btn btn-secondary btn-lg" data-toggle="modal" data-target="#quienes-somos">MAS INFORMACIÓN</a>
            </div>
        </section>
        <section class="servicios py-2 text-xs-center">
            <div class="container">
                <h2 class="h3 mb-3">NUESTROS SERVICIOS</h2>

                <div class="row">
                    <div class="col-md-4">
                        <i class="fa fa-briefcase" aria-hidden="true"></i>
                        <h3 class="h5">Aplicaciones para la nube</h3>
                        <p>Para empresa que requiera ampliar sus plataformas de gestión.</p>
                    </div>

                    <div class="col-md-4">
                        <i class="fa fa-bullhorn" aria-hidden="true"></i>
                        <h3 class="h5">Fábrica de software</h3>
                        <p>Servicios de mejora en las rutas de Saltillo</p>
                    </div>

                    <div class="col-md-4">
                        <i class="fa fa-check-square-o" aria-hidden="true"></i>
                        <h3 class="h5">Diseño personalizado</h3>
                        <p>Customiza hasta el último píxel de tu App. Infinitas Posibilidades.</p>
                    </div>
                </div>
            </div>
        </section>
       
        <footer class="footer   py-2 text-xs-center">
            <div class="container">
                <p>UAdeC</p>
            </div>
        </footer>
        <!-- Modal -->
        <div class="modal fade" id="quienes-somos" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title" id="myModalLabel">Quienes somos</h4>
                    </div>
                    <div class="modal-body">

                        <p>
                            Somos una compañia que busca mejorar los servicios de transporte en Saltillo.
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
</template>
<script>
export default {
    name: 'homecontent',
    data(){
        return {
            nosotros: require('../assets/nosotros.svg'),
            paradas: require('../assets/paradas.jpeg'),
            bus: require('../assets/bus.jpeg'),
            ubicacion: require('../assets/ubicacion.jpeg'),
            proyecto5: require('../assets/proyecto5.svg'),
            proyecto6: require('../assets/proyecto6.svg'),
            chofer: require('../assets/chofer.jpg')
        }
    }
}
</script>
