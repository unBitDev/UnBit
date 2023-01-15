import Link from "next/link";
import Container from "../../src/components/Container";

const LegalWarning = () => {
  return (
    <Container>
      <h1 className="text-6xl text-center">Aviso Legal</h1>
      <h6 className="font-bold italic my-5">Ultima actualizacion el 1 de enero de 2023</h6>

      <div className="mt-5">
        <section>
          <h2 className="font-bold text-4xl">1. AVISO LEGAL Y TÉRMINOS DE USO</h2>
          <p>Puedo garantizarte que <span className="font-bold">te encuentras en un espacio 100 % seguro</span>, para ello debes saber:</p>
          <div className="my-5">
            <h3 className="font-bold text-2xl">1.1. DATOS IDENTIFICATIVOS DEL RESPONSABLE DEL SITIO WEB</h3>
            <p>
              <span className="font-bold">Identidad del Responsable</span>: Ezequiel Vega
              <span className="font-bold">NIF/CIF</span>: 20420957883.
              <span className="font-bold">Dirección</span>: Ayolas 3668, Buenos  Aires
              <span className="font-bold">Correo electrónico</span>: unbitgdev@gmai.com
            </p>
          </div>
          <div className="my-5">
            <h3 className="font-bold text-2xl">1.2. FINALIDAD DE LA PÁGINA WEB</h3>
            <p>Los servicios prestados por el responsable de la página web, en adelante <span className="font-bold">Ezequiel Vega</span>, son los siguientes:</p>
            <ul className="list-disc ml-10 my-5">
              <li><p>Suministro de contenidos en el blog.</p></li>
              <li>
                <p>La venta de formación y servicios sobre programación y desarrollo de software.</p>
              </li>
              <li>
                <p>La venta de Ebooks</p>
              </li>
            </ul>
          </div>
          <div className="my-5">
            <h3 className="font-bold text-2xl">1.3. USUARIOS</h3>
            <p>
              El acceso y/o uso de este sitio web atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, los presentes términos de uso, no obstante, por el mero uso de la página web no significa el inicio de relación laboral/comercial alguna.
            </p> 
          </div>
          <div className="my-5">
            <h3 className="font-bold text-2xl">1.4. USO DEL SITIO WEB Y CAPTURA DE INFORMACIÓN</h3>
            <section>
              <h4 className="text-xl">1.4.1 USO DEL SITIO WEB</h4>
              <p>
              La página web, <span className="font-bold">https://unbit.vercel.app/</span> y cualquiera de sus subdominios (unbit-unbitdev.vercel.app), en adelante (LA WEB) proporciona el acceso a artículos, informaciones, servicios y datos (en adelante, “los contenidos”) propiedad de <span className="font-bold">Ezequiel Vega</span>. El USUARIO asume la responsabilidad del uso de la web.
              <br />
              <br />
              El USUARIO se compromete a hacer un uso adecuado de los contenidos que se ofrecen a través de LA WEB y con carácter enunciativo pero no limitativo, a no emplearlos para:
              <br />
              <br />
              (a) incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público;
              (b) difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico-ilegal, de apología del terrorismo o atentatorio contra los derechos humanos;
              (c) provocar daños en los sistemas físicos y lógicos de la web, de sus proveedores o de terceras personas, introducir o difundir en la red virus informáticos o cualesquiera otros sistemas físicos o lógicos que sean susceptibles de provocar los daños anteriormente mencionados;
              (d) intentar acceder y, en su caso, utilizar las cuentas de correo electrónico de otros usuarios y modificar o manipular sus mensajes.
              <br />
              <br />
              <span className="font-bold">Ezequiel Vega</span> se reserva el derecho de retirar todos aquellos comentarios y aportaciones que vulneren el respeto a la dignidad de la persona, que sean discriminatorios, xenófobos, racistas, pornográficos, que atenten contra la juventud o la infancia, el orden o la seguridad pública o que, a su juicio, no resultaran adecuados para su publicación.
              <br />
              <br />
              En cualquier caso, <span className="font-bold">Ezequiel Vega</span> no será responsable de las opiniones vertidas por los usuarios a través del blog u otras herramientas de participación que puedan crearse, conforme a lo previsto en la normativa de aplicación.
              </p>
            </section>
            <section>
              <h4 className="text-xl">1.4.2 CAPTURA DE INFORMACIÓN</h4>
              <p>
                En La WEB se captura información en los siguientes casos:
                <br />
                <br />
                <ul className="list-disc ml-10 my-5">
                  <li>
                    <p>Formulario de suscripción, rellenando el USUARIO los campos necesarios para la suscripción a la web con los campos de nombre y email.</p>
                  </li>
                  <li>
                    <p>Formulario de comentarios, rellenando el USUARIO el nombre y email, así como su opinión.</p>
                  </li>
                  <li>
                    <p>Formulario de matrícula, rellenando el USUARIO el nombre, email y contraseña.</p>
                  </li>
                  <li>
                    <p>Cookies de rastreo, conforme a las siguientes reglas.</p>
                    <ul className="list-disc ml-10">
                      <li>
                        <p>Navegación y Dirección IP: Al navegar por esta web, el usuario facilita de forma automática al servidor de la web información relativa a tu dirección IP, fecha y hora de acceso, el hipervínculo que le ha reenviado a éstas, tu sistema operativo y el navegador utilizado.</p>
                      </li>
                    </ul>
                  </li>
                </ul>
                <br />
                <br />
                A pesar de lo anterior, los usuarios podrán <span className="font-bold">darse de baja en cualquier momento</span> de los servicios prestados por <span className="font-bold">Ezequiel Vega</span> o datos aportados por el USUARIO dando cumplimiento al Reglamento General de Protección de Datos. Asímismo, tanto al suscribirse o matricularse a esta página web, como al realizar algún comentario en cualquiera de sus páginas y/o entradas, el usuario consiente:
                <br />
                <br />
                <ul className="list-disc ml-10 my-5">
                  <li>
                    <p>1. El acceso de <span className="font-bold">Ezequiel Vega</span> a los datos que necesite el usuario aportar, bien para la suscripción o registro a la web bien para cualquier consulta mediante el formulario de contacto.</p>
                  </li>
                </ul>
                Asimismo, informo que la información de los usuarios está protegida de acuerdo a la siguiente <Link href="/privacy-polices" className="text-pink-500 font-bold">POLITICA DE PRIVACIDAD</Link>.
                <br />
                <br />
                Al activar una suscripción, matrícula, formulario de contacto o comentario, el usuario comprende y acepta que:
                <br />
                <br />
                Desde el momento en que efectúa su suscripción o accede a algún servicio de pago, <span className="font-bold">Ezequiel Vega</span> tiene acceso a: Nombre y email. En el caso de realizar alguna compra, tendrá acceso a datos de nombre, apellidos, email, dni y domicilio completo.
              </p>
            </section>
          </div> 
        </section>
        <section className="mb-5">
          <h2 className="font-bold text-4xl">2. PROPIEDAD INTELECTUAL E INDUSTRIAL</h2>
          <p>
            <span className="font-bold">Ezequiel Vega</span> por sí o como cesionario, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.), titularidad de Ezequiel Vega o bien de sus licenciantes. Todos los derechos reservados.
            <br />
            <br />
            Cualquier uso no autorizado previamente por <span className="font-bold">Ezequiel Vega</span> será considerado un incumplimiento grave de los derechos de propiedad intelectual o industrial del autor.
            <br />
            <br />
            Quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de <span className="font-bold">Ezequiel Vega</span>.
            <br />
            <br />
            El USUARIO se compromete a respetar los derechos de Propiedad Intelectual e Industrial titularidad de <span className="font-bold">Ezequiel Vega</span>.
            <br />
            <br />
            Se permite el uso de enlaces en medios sociales (blogs o redes sociales) que dirijan a cualquier página pública de este sitio web, tanto a la página principal como a páginas de productos, servicios o publicaciones dentro del blog.
            <br />
            <br />
            Está permitida la impresión total de los contenidos de texto con fines no lucrativos, siempre que se mencione claramente al autor de dichos contenidos en cada página y texto impreso además de incluir la url de este sitio web en todas las páginas o documentos impresos.
            <br />
            <br />
            Este sitio web usa imágenes propias y externas. Las imágenes externas usadas para el diseño de páginas o acompañar contenidos han sido adquiridas con las correspondientes licencias de uso para <span className="font-bold">https://unbit.vercel.app/</span>. No está permitido el uso de imágenes de este sitio sin mencionar a este sitio web, bien sea con un enlace a esta web, con la mención del propietario o autor del contenido o ambos.
            <br />
            <br />
            Se avisa que el uso de imágenes adquiridas bajo licencia de uso en bases de datos independientes y externas a este sitio web están permitidas expresamente para este sitio web. No me hago responsable del uso de estas imágenes por terceras personas que no hayan adquirido las licencias de adquisición para el uso de las mismas.
            <br />
            <br />
            Está totalemente prohibido el uso, transformación o explotación de los contenidos incluidos en este sitio web con finalidades contrarias a la ley, moral u orden público.
          </p>
        </section>
        <section className="mb-5">
          <h2 className="font-bold text-4xl">3. EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD</h2>
          <p>
            <span className="font-bold">Ezequiel Vega</span> no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: por errores u omisiones en los contenidos, por falta de disponibilidad del sitio web, – el cual realizará paradas periódicas por mantenimientos técnicos – así como por la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
            <br />
            <br />
            Este sitio web puede contener anuncios de terceros para ofrecer productos y servicios. <span className="font-bold">Ezequiel Vega</span> no será responsable de la utilización, prestación o contratación de estos servicios por terceros y, por lo tanto, no podrá ser considerado responsable de los mismos.
          </p>
        </section>
        <section className="mb-5">
          <h2 className="font-bold text-4xl">4. MODIFICACIONES</h2>
          <p>
            <span className="font-bold">Ezequiel Vega</span> se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su web, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su web.
          </p>
        </section>
        <section className="mb-5">
          <h2 className="font-bold text-4xl">5. POLÍTICA DE ENLACES</h2>
          <p>
            Las personas o entidades que pretendan realizar o realicen un hiperenlace desde una página web de otro portal de Internet a la web de <span className="font-bold">Ezequiel Vega</span> deberá someterse las siguientes condiciones:
          </p>
          <ul className="list-disc ml-10 my-5">
            <li>
              <p>No se permite la reproducción total o parcial de ninguno de los servicios ni contenidos del sitio web sin la previa autorización expresa de <span className="font-bold">Ezequiel Vega</span>.</p>
            </li>
            <li>
              <p>No se establecerán deep-links ni enlaces IMG o de imagen, ni frames con la web de <span className="font-bold">Ezequiel Vega</span> sin su previa autorización expresa.</p>
            </li>
            <li>
              <p>No se establecerá ninguna manifestación falsa, inexacta o incorrecta sobre la web de <span className="font-bold">Ezequiel Vega</span>, ni sobre los servicios o contenidos de la misma. Salvo aquellos signos que formen parte del hipervínculo, la página web en la que se establezca no contendrá ninguna marca, nombre comercial, rótulo de establecimiento, denominación, logotipo, eslogan u otros signos distintivos pertenecientes a <span className="font-bold">Ezequiel Vega</span>, salvo autorización expresa de este.</p>
            </li>
            <li>
              <p>El establecimiento del hipervínculo no implicará la existencia de relaciones entre <span className="font-bold">Ezequiel Vega</span> y el titular de la página web o del portal desde el cual se realice, ni el conocimiento y aceptación de <span className="font-bold">Ezequiel Vega</span> de los servicios y contenidos ofrecidos en dicha página web o portal.</p>
            </li>
            <li>
              <p><span className="font-bold">Ezequiel Vega</span> no será responsable de los contenidos o servicios puestos a disposición del público en la página web o portal desde el cual se realice el hipervínculo, ni de las informaciones y manifestaciones incluidas en los mismos.</p>
            </li>
          </ul>
        </section>
        <section className="mb-5">
          <h2 className="font-bold text-4xl">6. MODIFICACIÓN DE LAS PRESENTES CONDICIONES Y DURACIÓN</h2>
          <p><span className="font-bold">Ezequiel Vega</span> podrá modificar en cualquier momento las condiciones aquí determinadas, siendo debidamente publicadas como aquí aparecen. La vigencia de las citadas condiciones irá en función de su exposición y estarán vigentes hasta que sean modificadas por otras debidamente publicadas.</p>
        </section>
        <section className="mb-5">
          <h2 className="font-bold text-4xl">7. LEGISLACIÓN Y JURISDICCIÓN APLICABLES</h2>
          <p>El presente Aviso Legal, así como todos los contenidos de este sitio web se rigen por las leyes argentinas vigentes, cualquier disputa, reclamación o controversia sobre ellos se someterá a la jurisdicción de los Tribunales de Buenos Aires (Argentina), salvo que la Ley aplicable disponga otra cosa.</p>
        </section>
      </div>
    </Container>
  )
}

export default LegalWarning;
