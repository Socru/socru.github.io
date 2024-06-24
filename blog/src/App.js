import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <BlogPost 
          title="Información del Proyecto y Características del Equipo"
          content={`Este proyecto tiene como objetivo realizar 50 ejecuciones de un programa que convierte una imagen RGB a escala de grises en diferentes entornos:\n\n
          1. En Windows sin usar OpenMP.\n
          2. En Windows usando OpenMP.\n
          3. En Linux sin usar OpenMP.\n
          4. En Linux usando OpenMP.\n\n
          El propósito es comparar el rendimiento de las ejecuciones en los diferentes entornos y observar el impacto del uso de OpenMP para paralelizar el procesamiento de imágenes.\n\n
          La máquina utilizada para este proyecto cuenta con las siguientes especificaciones:\n
          - Procesador: Intel Core i7 13700\n
          - Memoria RAM: 32 GB DDR5\n\n
          Esto proporciona una plataforma robusta para realizar las pruebas y obtener resultados significativos.`}
        />
        <BlogPost 
          title="Detalles del Proyecto Final"
          content={`El proyecto final se centra en la implementación y evaluación del procesamiento de imágenes en paralelo. Se han llevado a cabo diversas pruebas para medir el tiempo de ejecución y la eficiencia del procesamiento de una imagen RGB a escala de grises. Los resultados obtenidos se analizarán para determinar las ventajas y desventajas del uso de OpenMP en diferentes sistemas operativos.\n\n
          Los pasos realizados incluyen:\n
          - Implementación del algoritmo de conversión de RGB a escala de grises.\n
          - Paralelización del algoritmo utilizando OpenMP.\n
          - Ejecución de las pruebas y recolección de datos.\n
          - Paralelización del algoritmo utilizando sin OpenMP.\n
          - Ejecución de las pruebas y recolección de datos.\n
          - Análisis de los resultados y elaboración de conclusiones.\n\n
          Este proyecto ofrece una visión detallada del rendimiento del cómputo paralelo en el procesamiento de imágenes, proporcionando información valiosa para futuras optimizaciones y aplicaciones en este campo.`}
              />
              <section className="section">
          
          <table class="c16"><tbody><tr class="c8"><td class="c0 c10" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c9" colspan="3" rowspan="1"><p class="c2"><span class="c4">Con omp</span></p></td><td class="c12" colspan="3" rowspan="1"><p class="c2"><span class="c4">Sin omp</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">2 hilos</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">&nbsp;4 hilos</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">8 hilos</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">2 hilos</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">4 hilos</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">8 hilos</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">85.5491</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">87.5188</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">87.0259</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.0923</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">87.5963</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">85.6872</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">86.2781</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">87.2945</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">167.5873</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">87.1965</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">87.2645</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">86.5114</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">86.4849</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">86.9397</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">144.4762</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.6914</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.1613</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">86.7875</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.0482</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.9231</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">120.9561</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.3849</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.8985</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.496</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.5821</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.8726</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">131.5949</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.4442</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.9627</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">87.4075</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.2606</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.7679</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.9867</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.0558</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.0607</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.0561</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">86.2932</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.0311</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.6113</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.5098</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">91.6365</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">87.1543</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.0322</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.6361</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.08</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.6327</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.913</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.0522</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.0174</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.8368</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.8819</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.1873</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.6307</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.5642</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.3918</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">86.3837</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">95.9458</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">87.9953</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.9858</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">87.6835</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">87.8779</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">86.5842</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.8086</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.0554</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.8417</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.3798</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">91.2082</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">85.2557</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.985</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.8028</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.19</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.1245</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.311</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.6836</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">91.1628</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.2875</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.0908</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.1974</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">91.6706</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">91.6006</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">91.2728</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.6343</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.9226</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">91.6263</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.3408</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.1415</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.7088</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.9646</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.0464</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.6878</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">87.6927</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.7079</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.8579</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.4764</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.0293</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.6293</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.2202</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.4655</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">91.4376</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.4576</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.5456</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">95.5748</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.7403</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.1453</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.8747</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.6263</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">91.3772</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.7831</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.5143</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">91.8109</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.1333</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.3513</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.5931</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">91.3164</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.0894</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.3725</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">87.9389</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.1846</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.1521</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">91.4738</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.0127</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.9755</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.5089</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.4071</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.0224</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.0697</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.0606</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.7346</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.9751</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.3222</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">91.1602</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.2132</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.3536</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.1294</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">87.506</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.1514</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.9821</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">91.0365</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.9632</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">91.0853</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">86.9471</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">85.676</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">94.006</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.0877</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.7027</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.4998</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.8777</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">87.1689</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">91.7786</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.0409</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">91.3295</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">91.3413</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">131.8053</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.6413</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.0938</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">91.9338</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.9636</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.2245</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.9921</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">87.8823</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">91.6709</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">91.7822</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.3032</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.27</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.043</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">86.0728</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">94.6427</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.2019</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.1655</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.0898</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">91.9251</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.0296</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.6005</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.6414</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.4549</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.9604</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">91.0298</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.6559</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.1833</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">91.6309</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">94.2346</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.4018</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.7566</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.1038</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.2035</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.0417</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.5513</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.2755</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.6647</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.2966</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.3133</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.5338</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.9834</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.8401</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.2795</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">87.2312</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.8503</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.9474</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">87.7655</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.0067</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.5644</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">87.558</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.9214</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.1258</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.0021</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.0742</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.4747</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.1166</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.8931</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">94.0578</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">94.111</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.8781</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.5588</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.6674</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.5913</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.3938</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.8375</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.7628</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">91.0049</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">87.7375</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.1118</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.7291</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">87.6979</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.8436</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.2327</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">87.5056</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.568</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">94.8882</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">91.0033</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.8205</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.3014</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.5967</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.6833</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.5763</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">94.945</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.3903</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.0061</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.2991</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.9605</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.8078</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">94.4657</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.0732</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">94.4184</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.6953</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.0663</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.1132</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.7942</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">94.7938</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">94.3567</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.0284</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.5971</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.4727</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.9992</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.8878</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.963</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">91.2233</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.1181</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.2775</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.0168</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.9775</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">95.1</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.6172</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.0241</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.0424</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.3</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">94.6665</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.7244</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">87.964</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">91.1485</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">94.2924</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">94.1825</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">94.905</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.3947</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">91.5595</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">94.6015</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.3048</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.4371</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.2461</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">94.6964</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.1655</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.7962</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.2902</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.3155</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.8099</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.6637</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.8986</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.4836</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">95.0612</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.0498</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">93.0484</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">94.3371</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.7369</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">94.57</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">91.8907</span></p></td></tr><tr class="c8"><td class="c0" colspan="1" rowspan="1"><p class="c1"><span class="c4"></span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.7721</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.6862</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.9918</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c2"><span class="c4">89.3076</span></p></td><td class="c5" colspan="1" rowspan="1"><p class="c2"><span class="c4">94.3835</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c2"><span class="c4">92.0747</span></p></td></tr><tr class="c8"><td class="c0 c17" colspan="1" rowspan="1"><p class="c14"><span class="c4">Promedio</span></p></td><td class="c7" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.84754</span></p></td><td class="c7" colspan="1" rowspan="1"><p class="c2"><span class="c4">90.613412</span></p></td><td class="c7" colspan="1" rowspan="1"><p class="c2"><span class="c4">96.468532</span></p></td><td class="c7" colspan="1" rowspan="1"><p class="c2"><span class="c4">88.846946</span></p></td><td class="c7" colspan="1" rowspan="1"><p class="c2"><span class="c4">91.198494</span></p></td><td class="c7" colspan="1" rowspan="1"><p class="c2"><span class="c4">91.615056</span></p></td></tr></tbody></table>
          <h3>Gráficas de Ejecución En Windows Sin OMP</h3>
          <img src="ruta/" alt="Gráfica 1" />
          <img src="ruta/" alt="Gráfica 2" />
          <img src="ruta/" alt="Gráfica 3" />
          <img src="ruta/" alt="Gráfica 4" />
          <h3>Gráficas de Ejecución En Window Con OMPs</h3>
          <img src="ruta/" alt="Gráfica 5" />
          <img src="ruta/" alt="Gráfica 6" />
          <img src="ruta/" alt="Gráfica 7" />
          <img src="ruta/" alt="Gráfica 8" />
          <h3>Gráficas de Ejecución En Fedora Sin OMP</h3>
          <img src="ruta/" alt="Gráfica 1" />
          <img src="ruta/" alt="Gráfica 2" />
          <img src="ruta/" alt="Gráfica 3" />
          <img src="ruta/" alt="Gráfica 4" />
          <h3>Gráficas de Ejecución En Fedora Con OMP</h3>
          <img src="ruta/" alt="Gráfica 5" />
          <img src="ruta/" alt="Gráfica 6" />
          <img src="ruta/" alt="Gráfica 7" />
          <img src="ruta/" alt="Gráfica 8" />
        </section>

        <section className="section">
          <h3>Códigos Utilizados</h3>
          <pre>
            <code>
              {`
              // Aquí va tu código fuente
              `}
            </code>
          </pre>
              </section>
              
              <BlogPost 
          title="Conclusiones"
          content={`agregarlas`}
              />
      </main>
      <Footer />
    </div>
  );
};

export default App;
