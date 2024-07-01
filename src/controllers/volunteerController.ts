import { Request, Response } from 'express';
import Volunteer, { IVolunteer } from '../models/volenteer';

export const registerVolunteer = async (req: Request, res: Response) => {
  const { name, email, phone } = req.body;

  try {
    let volunteer = new Volunteer({
      name,
      email,
      phone
    });

    await volunteer.save();

    res.status(201).json(volunteer);
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
      res.status(500).send('Server Error');
    } else {
      console.error('An unknown error occurred');
    }
        
  }
};
