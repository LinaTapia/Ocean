import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FormCart = ({addOrder, formData, handleOnChange}) => {
  return (
    <Form onSubmit={addOrder}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control type="email" name="email" placeholder="Ej: juanito@gmail.com" value={formData.email} onChange={handleOnChange} />
        <Form.Control className="mt-3" type="email" name="emailRepeat" placeholder="Confirma correo" value={formData.emailRepeat} onChange={handleOnChange} />
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" name="name" placeholder="Ej: Juanito" value={formData.name} onChange={handleOnChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNombre">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" name="last_name" placeholder="Ej: Perez" value={formData.last_name} onChange={handleOnChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTelefono">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control type="text" name="phone" placeholder="Ej: +569 12345678" value={formData.phone} onChange={handleOnChange}/>
        </Form.Group>
        {
          (formData.email != "" && formData.emailRepeat != "" && formData.name != "" && formData.last_name != "" && formData.phone != "") && formData.email === formData.emailRepeat ?
           <Button variant="success" type="submit" onClick={addOrder}>Generar Orden</Button>
           :
           <p>
            { formData.email != formData.emailRepeat ? 'Los emails deben ser idénticos.':' Debes llenar todos los campos para generar la orden de compra' }
           </p>
        }
  </Form>
  )
}

export default FormCart