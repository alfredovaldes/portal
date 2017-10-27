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
                        <li class="nav-item">
                            <a class="nav-link" href="#bienvenidos" v-smooth-scroll>Inicio</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#quienes-somos" v-smooth-scroll>Nosotros</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#contacto" v-smooth-scroll>Contacto</a>
                        </li>
                        <li class="nav-item">
                            <router-link to="login" class="nav-link">Login</router-link>
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
