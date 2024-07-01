
import { Router } from 'express';
import { 
  getHelpRequests,
  getHelpRequestById,
  createHelpRequest,
  volunteerForRequest,
  closeHelpRequest
} from '../controllers/helpRequestController';

const router = Router();

// @route    GET api/requests
// @desc     Get all help requests
// @access   Public
router.get('/', getHelpRequests);

// @route    GET api/requests/:id
// @desc     Get help request by ID
// @access   Public
router.get('/:id', getHelpRequestById);

// @route    POST api/requests
// @desc     Create a help request
// @access   Public
router.post('/', createHelpRequest);

// @route    POST api/requests/:id/volunteer
// @desc     Volunteer for a request
// @access   Public
router.post('/:id/volunteer', volunteerForRequest);

// @route    POST api/requests/:id/close
// @desc     Close a help request
// @access   Public
router.post('/:id/close', closeHelpRequest);

export default router;
