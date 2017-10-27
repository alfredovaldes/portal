<template>
    <div>
        <section id="bienvenidos" class="bienvenidos">
            <div class="texto-bienvenido text-xs-center">
                <p class="h5">Bievenidos a nuestro sitio</p>
                <h1 class="display-4 mb-3">CombiSaltillo</h1>
                <a href="#" class="btn btn-primary btn-lg">Ponte en contacto</a>
            </div>
        </section>
        <section id="quienes-somos" class="quienes-somos  py-2 text-xs-center">
            <div class="container">
                <img :src="nosotros" alt="Nosotros" width="181" class="img-fluid my-auto mb-2 ">
                <h2 class="h3">¿QUIENES SOMOS?</h2>
                <p>Ponemos a tu alcance el servicio de localizacion de autobuses</p>
                <a href="#" class="btn btn-secondary btn-lg" data-toggle="modal" data-target="#quienes-somos">MAS INFORMACIÓN</a>
            </div>
        </section>
        <section id="ultimos-proyectos" class="ultimos-proyectos py-2 text-xs-center">
            <div class="container">
                <h2 class="h3 mb-3"> Servicios</h2>
                <div class="row">
                    <div class="col-md-4">
                        <a href="#">
                            <img :src="chofer" alt="chofer" width="290" class="img-fluid m-x-auto">
                        </a>
                    </div>
                    <div class="col-md-4">
                        <a href="#"> <img :src="paradas" alt="paradas" width="290" class="img-fluid m-x-auto"> </a>
                    </div>
                    <div class="col-md-4">
                        <a href="#"> <img :src="bus" alt="bus" width="290" class="img-fluid m-x-auto"> </a>
                    </div>
                    <div class="col-md-4">
                        <a href="#"> <img :src="ubicacion" alt="ubicacion" width="290" class="img-fluid m-x-auto"> </a>
                    </div>
                    <div class="col-md-4">
                        <a href="#"> <img :src="proyecto5" alt="Proyecto 5" width="290" class="img-fluid m-x-auto"> </a>
                    </div>
                    <div class="col-md-4">
                        <a href="#"> <img :src="proyecto6" alt="Proyecto 6" width="290" class="img-fluid m-x-auto"> </a>
                    </div>
                </div>
            </div>
        </section>
        <footer id="contacto" class="footer   py-2 text-xs-center">
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia saepe autem unde culpa temporibus qui labore eos. Ullam repellendus saepe laborum qui culpa, doloribus atque tempore aut eaque blanditiis, iste.
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "homecontent",
  data() {
    return {
      nosotros: require("../assets/nosotros.svg"),
      paradas: require("../assets/paradas.jpeg"),
      bus: require("../assets/bus.jpeg"),
      ubicacion: require("../assets/ubicacion.jpeg"),
      proyecto5: require("../assets/proyecto5.svg"),
      proyecto6: require("../assets/proyecto6.svg"),
      chofer: require("../assets/chofer.jpg")
    };
  }
};
</script>
