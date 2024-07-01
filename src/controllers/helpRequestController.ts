import { Request, Response } from 'express';
import HelpRequest, { IHelpRequest } from '../models/helpRequest';

export const getHelpRequests = async (req: Request, res: Response) => {
  const { location, status, priority } = req.query;

  const query: any = {};
  if (location) query.location = location;
  if (status) query.status = status;
  if (priority) query.priority = priority;

  try {
    const helpRequests = await HelpRequest.find(query);
    res.json(helpRequests);
  } catch (err) {
    if (err instanceof Error) {
        console.error(err.message);
        res.status(500).send('Server Error');
      } else {
        console.error('An unknown error occurred');
      }
   }
};

export const getHelpRequestById = async (req: Request, res: Response) => {
  try {
    const helpRequest = await HelpRequest.findById(req.params.id);

    if (!helpRequest) {
      return res.status(404).json({ msg: 'Help request not found' });
    }

    res.json(helpRequest);
  } catch (err) {
    if (err instanceof Error) {
        console.error(err.message);
        res.status(500).send('Server Error');
      } else {
        console.error('An unknown error occurred');
      }
  }
};

export const createHelpRequest = async (req: Request, res: Response) => {
  const { title, description, location, priority } = req.body;

  try {
    let helpRequest = new HelpRequest({
      title,
      description,
      location,
      priority
    });

    await helpRequest.save();

    res.status(201).json(helpRequest);
  } catch (err) {
    if (err instanceof Error) {
        console.error(err.message);
        res.status(500).send('Server Error');
      } else {
        console.error('An unknown error occurred');
      }
  }
};

export const volunteerForRequest = async (req: Request, res: Response) => {
    const { volunteerId } = req.body;
  
    try {
      let helpRequest = await HelpRequest.findById(req.params.id);
  
      if (!helpRequest) {
        return res.status(404).json({ msg: 'Help request not found' });
      }
  
      helpRequest.volunteerId = volunteerId;
      helpRequest.status = 'in progress';
  
      await helpRequest.save();
  
      res.json(helpRequest);
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
            res.status(500).send('Server Error');
          } else {
            console.error('An unknown error occurred');
          }
    }
  };
  
  export const closeHelpRequest = async (req: Request, res: Response) => {
    try {
      let helpRequest = await HelpRequest.findById(req.params.id);
  
      if (!helpRequest) {
        return res.status(404).json({ msg: 'Help request not found' });
      }
  
      helpRequest.status = 'closed';
  
      await helpRequest.save();
  
      res.json(helpRequest);
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
            res.status(500).send('Server Error');
          } else {
            console.error('An unknown error occurred');
          }
    }
  };
