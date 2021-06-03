import React from 'react'

export const NotaPrueba = () => {
    return (
        <div className="Nota__content">
            <aside>
                <h3 className="title">Temario</h3>
                <ul className="lista">
                    <li className="activo"><a href="#1">Big data</a></li>
                    <li><a href="#2">Tipologia de datos</a></li>
                    <li><a href="#3">Empresas data-driven</a></li>
                    <li><a href="#4">Machine learning</a></li>
                    <li><a href="#5">Flujo de trabajo en ciencia de datos</a></li>
                    <li><a href="#6">Herramientas para cada etapa del análisis de datos</a></li>
                </ul>
            </aside>
            <main>
                <h1 className="Nota__title">Notas Analisis de negocios para ciencias de datos</h1>
                <p className="Nota__desc">Curso de platzi por Sílvia Ariza Sentís</p>
                <h2 className="Nota__subTitle" id="1">Big data</h2>
                <ul className="Nota__list">
                    <li><b>Gran volumen</b> de informacion</li>
                    <li>Las empresas <b>almacenan datos</b> diariamente</li>
                    <li><b>Costos, eficiencia, entender</b> a los clientes</li>
                    <li>Solucion matematica a un problema de negocio</li>
                </ul>

                <h2 className="Nota__subTitle" id="2">Tipologia de datos</h2>
                <ul className="Nota__list">
                    <li>Personas</li>
                    <li>Transacciones</li>
                    <li>Navegacion web</li>
                    <li>Machine 2 machin</li>
                    <li>Biometricos</li>
                </ul>

                <h2 className="Nota__subTitle" id="3">Empresas data-driven</h2>
                <ul className="Nota__listNumber">
                    <li>Crear una <b>cultura de datos</b></li>
                    <li><b>Recolectar</b> informacion</li>
                    <li>Medir <b>todo</b></li>
                    <li>Datos <b>relevantes y precisos</b></li>
                    <li>Testear y crear <b>hipotesis</b></li>
                    <li>Desde los <b>insigths</b> de datos a las <b>acciones</b></li>
                    <li>Cumplir las <b>regulaciones</b> de datos</li>
                    <li><b>Automatizar</b></li>
                </ul>

                <h2 className="Nota__subTitle" id="4">Machine learning</h2>
                <ul className="Nota__list">
                    <li>Deteccion de fraudes</li>
                    <li>Busqueda web</li>
                    <li>Anuncios a tiempo real</li>
                    <li>Analisis de textos</li>
                    <li>Next best action</li>
                </ul>

                <h2 className="Nota__subTitle" id="5">Flujo de trabajo en ciencia de datos: fases, roles y oportunidades laborales</h2>
                <h3>Roles en datos</h3>
                <h4>Ing. de datos:</h4>
                <p>Hace la conexcion entre el dispositivo y la creación de una base de datos. Trabajan haciendo APIs, eTLs, conectores y las herramientas más usadas son SQl y NoSQL</p>
                <ul className="Nota__list">
                    <li>Bases de datos</li>
                    <li>ETLs / APIs</li>
                    <li>SQL y NoSQL</li>
                </ul>
                <h4>Analista Business Intelligence:</h4>
                <p>A partir de la información que creo el ing. de datos extrae la información que le interesa, crea cuadros de control, automatiza estos procedimientos y las herramientas más usadas son SQL y Excel</p>
                <ul className="Nota__list">
                    <li>Extraccion y dashboards</li>
                    <li>Automatizacion</li>
                    <li>SQL y Excel</li>
                </ul>
                <h4>Data Scientist:</h4>
                <p>Sabe el rol del analista, extraer la información, y <b>sabe predecir</b>. Las herramientas más usadas son R y Python</p>
                <ul className="Nota__list">
                    <li>Machine learning</li>
                    <li>Modelos estadisticos</li>
                    <li>R y Python</li>
                </ul>
                <h4>Data Translator:</h4>
                <p>Persona que pueda interpretar los datos y pueda comunicarnos con los otros equipos de negocios.Experto en la necesidad de negocio</p>
                <ul className="Nota__list">
                    <li>Data Scientist - Decision makers</li>
                    <li>Destiladores de data</li>
                    <li>Expertos necesudad de negocio</li>
                </ul>

                <h2 className="Nota__subTitle" id="6">Herramientas para cada etapa del análisis de datos</h2>
                <h3>Analista e ingeniero</h3>
                <h4>Extraccion de informacion con SQL</h4>
                <ul className="Nota__list">
                    <li>Extraccion de informacion</li>
                    <li>Sintesis de las bases de datos</li>
                    <li>Cuadros de control de la operacion</li>
                </ul>
                <h3>Cientifico de datos</h3>
                <h4>Analisis y visualizacion con R y python</h4>
                <h5>R</h5>
                <ul className="Nota__list">
                    <li>Analisis de datos con enfoque estadistico</li>
                    <li>Mas complejo al inicio</li>
                    <li>Analisis descriptivo y exploratorio</li>
                    <li>Packages: ggplot2, dplyr</li>
                </ul>
                <h5>Python</h5>
                <ul className="Nota__list">
                    <li>Analisis de datos con enfoque en ingenieris</li>
                    <li>Parecido a otros lenguajes</li>
                    <li>Analisis descriptivo y exploratorio</li>
                    <li>Packages: Pandas, Numpy</li>
                </ul>
                <h3>Accions derivadas del analisis</h3>
                <h4>Algoritmos usados</h4>
                <ul className="Nota__list">
                    <li>Mineria de datos para clasificacion de motivos de contacto</li>
                    <li>Correlaciones y patrones de comportamiento</li>
                    <li>Arboles de decision y teoria de juegos para predecir y tomar decisiones</li>
                    <li>Validacion con bayesianos y MCMC</li>
                </ul>
                <h4>Acciones</h4>
                <ul className="Nota__list">
                    <li>Taggear a los Top Offenders idetificados mensualmente</li>
                    <li>Advertilos</li>
                    <li>Llamar usuarios</li>
                    <li>Bloquear usuarios</li>
                    <li>Validacion con A/B Test</li>
                </ul>
            </main>
        </div>
    )
}
