import { IsString } from 'class-validator';

export class CategoryDto {
	@IsString({
		message: 'Title is required',
	})
	title: string;

	@IsString({
		message: 'The description is required',
	})
	description: string;
}
