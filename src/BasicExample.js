import Alert from 'react-bootstrap/Alert';
import {Button} from 'react-bootstrap';

 function BasicExample() {
   return (
     <>
       {[
         'primary',
         'secondary',
         'success',
         'danger',
         'warning',
         'info',
         'light',
         'dark',
       ].map((variant) => (
         <Alert key={variant} variant={variant}>
           This is a {variant} alert—check it out!
         </Alert>
       ))}
        <Button variant="success">Success</Button>{' '}
     </>
   );
 }

 export default BasicExample;