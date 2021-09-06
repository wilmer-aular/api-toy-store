import { Response } from 'express';

export async function promiseHandler<T>(promise: Promise<T>, res: Response, service?: string): Promise<void> {
  try {
    const data = await promise;
    res.json(data);
  } catch (error: any) {
    res.status(500),
      res.json({
        message: error.message,
        stack: error.stack.split('\n').slice(1, 4),
      });
  }
}
