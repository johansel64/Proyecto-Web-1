const radios = document.querySelector('#radios');
const contenido = document.querySelector('#productos');


eventListeners();
function eventListeners() {

    radios.addEventListener('click', crearContenido);



    document.addEventListener('DOMContentLoaded', () => {
        crearContenido();
    });

};




function crearContenido(){
    if (document.querySelector('#radio1').checked){
        limpiarHTML();
        contenido.innerHTML = `<div class="bg-primary text-center p-2">
        <h1> Productos </h1>
        
    </div>
    <div class="row">
        <div class="col-lg-6">
        <form class="was-validated">
            <div class="mb-3">
                <label for="validationServer01" class="form-label">Nombre de producto</label>
                <input type="text" class="form-control " id="validationServer01"  required>
                <div class="valid-feedback">
                  Looks good!
                </div>
              </div>
          
            <div class="mb-3">
                <label for="selectTipo" class="form-label">Tipo del producto</label>
              <select class="form-select" id="selectTipo" required aria-label="select example">
                <option value="">Open this select menu</option>
                <option value="1">UÑAS</option>
                <option value="2">CABELLO</option>
                <option value="3">MAQUILLAJE</option>
              </select>
              <div class="invalid-feedback">Example invalid select feedback</div>
            </div>
          
            <div class="mb-3">
                <label for="validationServer02" class="form-label">Precio del producto</label>
                <input min="500" type="number" class="form-control " id="validationServer02"  required>
                <div class="valid-feedback">
                Looks good!
                </div>
            </div>

            <div class="mb-3">
              <label for="validationServer02" class="form-label">Imagen del producto</label>
              <input id="validationServer02" type="file" class="form-control" aria-label="file example" required>
              <div class="invalid-feedback">Example invalid form file feedback</div>
            </div>


            <div class="mb-3 ">
                <label for="validationTextarea" class="form-label">Descripcion del producto</label>
                <textarea class="form-control" id="validationTextarea" placeholder="Ingrese la descripcion del producto" required></textarea>
                <div class="invalid-feedback">
                  Please enter a message in the textarea.
                </div>
              </div>
            
          
            <div class="mb-3 row mx-1">
              <button class="btn btn-primary border col-lg-4" type="submit" >Agregar</button>
              <button class="btn btn-info border col-lg-4" type="submit" >Modificar</button>
              <button class="btn btn-danger border col-lg-4" type="submit" >Eliminar</button>
            </div>
           
          </form>
        </div>
        <div class="col-lg-6">

        <form class="d-flex py-4">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        
            <table class="table table-striped">
                <thead>
                    <tr>
                      <th scope="col">Tipo</th>
                      <th scope="col">Marca</th>
                      <th scope="col">Precio</th>
                      <th scope="col">Descripcion</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">ESMALTE</th>
                      <td>HYPE</td>
                      <td>¢4000</td>
                      <td>ESMALTE COLOR CLEAR</td>
                    </tr>
                    <tr>
                      <th scope="row">PERMANENTE</th>
                      <td>HIPWETIN</td>
                      <td>¢17000</td>
                      <td>PERMANENTE</td>
                    </tr>
                    <tr>
                      <th scope="row">PEINE</th>
                      <td>BABYLISS</td>
                      <td>¢2000</td>
                      <td colspan="2">PEINE PARA CORTE</td>
                    </tr>
                  </tbody>
            </table>
        </div>
    </div>
`

    }else if(document.querySelector('#radio2').checked){
        limpiarHTML();
        contenido.innerHTML = `<div class="bg-primary text-center p-2">
        <h1> Servicios</h1>
    </div>
    <div class="row">
        <div class="col-lg-6">
        <form class="was-validated">
            <div class="mb-3">
                <label for="validationServer01" class="form-label">Nombre del servicio</label>
                <input type="text" class="form-control " id="validationServer01"  required>
                <div class="valid-feedback">
                  Looks good!
                </div>
              </div>
          

          
            <div class="mb-3">
              <label for="validationServer02" class="form-label">Imagen del servicio</label>
              <input id="validationServer02" type="file" class="form-control" aria-label="file example" required>
              <div class="invalid-feedback">Example invalid form file feedback</div>
            </div>


            <div class="mb-3 ">
                <label for="validationTextarea" class="form-label">Descripcion del servicio</label>
                <textarea class="form-control" id="validationTextarea" placeholder="Required example textarea" required></textarea>
                <div class="invalid-feedback">
                  Please enter a message in the textarea.
                </div>
              </div>
            
            
          
            <div class="mb-3 row mx-1">
              <button class="btn btn-primary border col-lg-4" type="submit" >Agregar</button>
              <button class="btn btn-info border col-lg-4" type="submit" >Modificar</button>
              <button class="btn btn-danger border col-lg-4" type="submit" >Eliminar</button>
            </div>
         
          </form>
        </div>
        <div class="col-lg-6">

        <form class="d-flex py-4">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>

            <table class="table table-striped">
                <thead>
                    <tr>
                      <th scope="col">Servicio</th>
                      <th scope="col">Descripcion</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" >Peinados</th>
                      <td>Penados de todo tipo para toda la familia, <br> fiestas, bautizos, graduaciones, tambien <br> tenemos peinados de hombre entre otros..</td>
                    </tr>
                    <tr>
                      <th scope="row">Tintes</th>
                      <td>Tintes de todo tipo para toda la familia, <br> fiestas, bautizos, graduaciones, tambien <br> tenemos Tintes de hombre entre otros..</td>
                    </tr>
                    <tr>
                      <th scope="row">Pedicure</th>
                      <td>Pedicure de todo tipo para toda la familia, <br> fiestas, bautizos, graduaciones, tambien <br> tenemos Pedicure de hombre entre otros..</td>
                    </tr>
                  </tbody>
            </table>
        </div>
    </div>`
    }else{
        limpiarHTML();
        contenido.innerHTML = `<div class="bg-primary text-center p-2">
        <h1> Usuarios</h1>
    </div>
    <div class="row">
        <div class="col-lg-6">
        <form class="was-validated">
            <div class="mb-3">
                <label for="validationServer01" class="form-label">Nombre</label>
                <input type="text" class="form-control " id="validationServer01" pattern ='^[a-zA-ZÀ-ÿ\s]{3,40}$'  required>
                <div class="valid-feedback">
                  Looks good!
                </div>
            </div>
            <div class="mb-3">
                <label for="validationServer02" class="form-label">Cedula</label>
                <input type="number" class="form-control " id="validationServer02" pattern="[0-9]{9}"  required>
                <div class="valid-feedback">
                  Looks good!
                </div>
            </div>

            <div class="mb-3">
                <label for="validationServer03" class="form-label">Correo</label>
                <input type="email" class="form-control " id="validationServer03"  required>
                <div class="valid-feedback">
                  Looks good!
                </div>
            </div>
          
            <div class="mb-3">
                <label for="selectTipo" class="form-label">Tipo de usuario</label>
              <select class="form-select" id="selectTipo" required aria-label="select example">
                <option value="">Selecione un tipo</option>
                <option value="1">Estilista</option>
                <option value="2">Barbero</option>
                <option value="3">Manicurista</option>
                <option value="4">Pedicurista </option>
              </select>
              <div class="invalid-feedback">Example invalid select feedback</div>
            </div>
            
            
          
            <div class="mb-3 row mx-1">
              <button class="btn btn-primary border col-lg-4" type="submit" >Agregar</button>
              <button class="btn btn-info border col-lg-4" type="submit" >Modificar</button>
              <button class="btn btn-danger border col-lg-4" type="submit" >Eliminar</button>
            </div>

          </form>
        </div>
        <div class="col-lg-6">
        <form class="d-flex py-4">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
            <table class="table table-striped">
                <thead>
                    <tr>
                      <th scope="col">Nombre</th>
                      <th scope="col">Cedula</th>
                      <th scope="col">Correo</th>
                      <th scope="col">Tipo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Patricia</th>
                      <td>602970277</td>
                      <td>pjimenez77@gmail.com</td>
                      <td>Estilista</td>
                    </tr>
                    <tr>
                      <th scope="row">Dixiana</th>
                      <td>502260723</td>
                      <td>dixi19@gmail.com</td>
                      <td>Manicuristas</td>
                    </tr>
                    <tr>
                      <th scope="row">Erick</th>
                      <td>102640661</td>
                      <td>donErick69@gmail.com</td>
                      <td colspan="2">Barbero</td>
                    </tr>
                  </tbody>
            </table>
        </div>
    </div>`
        
    };
};

function limpiarHTML(){
    while(contenido.firstChild){
        contenido.removeChild(contenido.firstChild);
    };
};