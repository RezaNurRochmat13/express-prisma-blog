import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
// import PostRouter from './routes/blog.route';

dotenv.config();

export const prisma = new PrismaClient();

const app = express();
const PORT = 8081 || process.env.APP_PORT;

async function main() {
	app.use(express.json());

	// Register API Routes
	// app.use('api/posts', PostRouter);

	app.listen(PORT, () => {
		console.log(`Server started on port ${PORT}`);
	});
}

main()
	.then(async () => {
		await prisma.$connect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
