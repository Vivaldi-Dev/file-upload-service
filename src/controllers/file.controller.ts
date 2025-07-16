import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import path from 'path';
import fs from 'fs';

const prisma = new PrismaClient();

export const uploadFile = async (req: Request, res: Response) => {
  try {
    const file = req.file;

    if (!file) return res.status(400).json({ error: 'No file uploaded' });

    const newFile = await prisma.file.create({
      data: {
        filename: file.originalname,
        mimetype: file.mimetype,
        size: file.size,
        path: file.path,
      },
    });

    res.status(201).json({ message: 'File uploaded', file: newFile });
  } catch (error) {
    res.status(500).json({ error: 'Failed to upload file' });
  }
};

export const getFile = async (req: Request, res: Response) => {
  try {
    const fileId = req.params.id;

    const file = await prisma.file.findUnique({ where: { id: fileId } });

    if (!file || !fs.existsSync(file.path)) {
      return res.status(404).json({ error: 'File not found' });
    }

    res.sendFile(path.resolve(file.path));
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve file' });
  }
};
