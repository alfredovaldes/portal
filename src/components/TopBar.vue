<template>
    <header class="encabezado">
        <nav class="navbar navbar-light navbar-fixed-top">
            <div class="container">
                <button class="navbar-toggler hidden-md-up float-xs-right" type="button" data-toggle="collapse" data-target="#menuprincipal">
                    &#9776;
                </button>
                <a class="navbar-brand" href="#">La libro?</a>
                <div class="collapse navbar-toggleable-sm float-md-right" id="menuprincipal">

                    <ul class="nav navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Inicio</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">Nosotros</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#"> Servicios</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Paradas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Ruta</a>

                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
<script>
export default {
  name:'topbar'
}
</script>
