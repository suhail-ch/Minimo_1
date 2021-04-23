import {Router} from "express"; 
import seguimientoController from '../controllers/seguimiento.controller'

const router = Router();

router.get('/all', seguimientoController.getSeguimientos);
router.get('/:id', seguimientoController.getSeguimiento);
router.post('/new',seguimientoController.newSeguimiento);
router.delete('/drop',seguimientoController.deleteSeguimientos);
router.delete('/drop/:nombre', seguimientoController.deleteSeguimiento);
router.put('/update/:id', seguimientoController.updateSeguimiento);

export default router;