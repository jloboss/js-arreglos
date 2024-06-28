const propiedades_alquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: 2.0,
    smoke: false,
    pets: true,
  },

  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: 2.5,
    smoke: true,
    pets: true,
  },

  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: 2.2,
    smoke: false,
    pets: false,
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

const arriendo_prop = document.querySelector("#alquiler");

for (let prop_arriendo of propiedades_alquiler) {
  const HTML = `
  <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${prop_arriendo.src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                ${prop_arriendo.nombre}
                </h5>
                <p class="card-text">
                ${prop_arriendo.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${
                    prop_arriendo.ubicacion
                  }
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${
                    prop_arriendo.habitaciones
                  } Habitaciones
                </p>
                <p>
                <i class="fas fa-bath"></i> ${prop_arriendo.baños} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${prop_arriendo.costo}</p>
                
<p class="text-${prop_arriendo.smoke ? "success" : "danger"}">
    <i class="fas fa-smoking${prop_arriendo.smoke ? "" : "-ban"}"></i> ${
    prop_arriendo.smoke ? "Permitido fumar" : "No se permite fumar"
  }
</p>
    <p class="text-${prop_arriendo.pets ? "success" : "danger"}">
    <i class="fas fa${prop_arriendo.pets ? "-paw" : "-ban"}"></i>
    ${prop_arriendo.pets ? "Mascotas permitidas" : "No se permiten mascotas"}
</p>
              </div>
            </div>
          </div>
  </div>
  `;
  arriendo_prop.innerHTML += HTML;
}
