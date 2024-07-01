
import { Router } from 'express';
import { registerVolunteer } from '../controllers/volunteerController';

const router = Router();

// @route    POST api/volunteers
// @desc     Register a volunteer
// @access   Public
router.post('/', registerVolunteer);

export default router;
