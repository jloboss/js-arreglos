const propiedades_venta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    baños: 4,
    costo: 5.0,
    smoke: false,
    pets: false,
  },

  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    baños: 1,
    costo: 1.2,
    smoke: true,
    pets: true,
  },

  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: 4.5,
    smoke: false,
    pets: true,
  },

  //se agregan 3 card mas adicionales a las de apoyo

  {
    nombre:
      "Amplia, sólida y central casa. Institucional. Ubicada en Traslaviña con Alvarez.",
    src: "https://image.wasi.co/eyJidWNrZXQiOiJzdGF0aWN3Iiwia2V5IjoiaW5tdWVibGVzXC9nODA0NDgxMjAyMjEyMjcwMjUwMjkuanBlZyIsImVkaXRzIjp7Im5vcm1hbGlzZSI6dHJ1ZSwicm90YXRlIjowLCJyZXNpemUiOnsid2lkdGgiOjkwMCwiaGVpZ2h0Ijo2NzUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    descripcion:
      "Propiedad con 750 m2 totales y 300 m2 construidos. Cuenta con living - comedor, comedor de diario, cocina amoblada, baño de visitas, despensa, lavandería",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    baños: 2,
    costo: 7.8,
    smoke: false,
    pets: false,
  },

  {
    nombre: "Casa En Centro De Quilpué ",
    src: "https://image.wasi.co/eyJidWNrZXQiOiJzdGF0aWN3Iiwia2V5IjoiaW5tdWVibGVzXC9nODA0NDg0MjIwMjQwMjIxMDgzODI1LmpwZyIsImVkaXRzIjp7Im5vcm1hbGlzZSI6dHJ1ZSwicm90YXRlIjowLCJyZXNpemUiOnsid2lkdGgiOjkwMCwiaGVpZ2h0Ijo2NzUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    descripcion:
      "Se vende hermosa y amplia casa ubicada en sector centrico de Quilpué.  A pocos minutos del Troncal Sur, a pasos de locales comerciales, colegios, supermercados, locomoción. Cercano a centros de estudios.",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 6,
    baños: 3,
    costo: 9.2,
    smoke: true,
    pets: true,
  },

  {
    nombre: "Departamento En Población Vergara Viña Del Mar",
    src: "https://image.wasi.co/eyJidWNrZXQiOiJzdGF0aWN3Iiwia2V5IjoiaW5tdWVibGVzXC9nODA0NDg3MjAyNDA1MTMwNDAyMDEuanBnIiwiZWRpdHMiOnsibm9ybWFsaXNlIjp0cnVlLCJyb3RhdGUiOjAsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY3NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    descripcion:
      "Amplio departamento de 140m2 ubicado en sector Oriente, Población Vergara de Viña del Mar.",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: 3.2,
    smoke: false,
    pets: true,
  },
];

const ventas_prop = document.querySelector("#venta");

for (let prop_venta of propiedades_venta) {
  const html = `
     <div class="col-md-4 mb-4">      
            <div class="card">
              <img
                src="${prop_venta.src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                ${prop_venta.nombre}
                </h5>
                <p class="card-text">
                ${prop_venta.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${prop_venta.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${
                    prop_venta.habitaciones
                  } Habitaciones
                </p>
                <p>
                <i class="fas fa-bath"></i> ${prop_venta.baños} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${prop_venta.costo}</p>
                
<p class="text-${prop_venta.smoke ? "success" : "danger"}">
    <i class="fas fa-smoking${prop_venta.smoke ? "" : "-ban"}"></i> ${
    prop_venta.smoke ? "Permitido fumar" : "No se permite fumar"
  }
</p>
    <p class="text-${prop_venta.pets ? "success" : "danger"}">
    <i class="fas fa${prop_venta.pets ? "-paw" : "-ban"}"></i>
    ${prop_venta.pets ? "Mascotas permitidas" : "No se permiten mascotas"}
</p>
              </div>
            </div>
    </div>      
 
  `;
  ventas_prop.innerHTML += html;
}
