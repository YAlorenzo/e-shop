import { UseFormReturn } from 'react-hook-form'

import {
	FormControl,
	FormField,
	FormItem,
	FormMessage
} from '@/components/ui/form-elements/form'
import { Input } from '@/components/ui/form-elements/input'

import { IAuthForm } from '@/shared/types/auth.interface'
import { validEmail } from '@/shared/regex'

interface AuthFieldsProps {
	form: UseFormReturn<IAuthForm, any, undefined>
	isPending: boolean
	isReg?: boolean
}

export default function AuthFields({
	form,
	isPending,
	isReg = false
}: AuthFieldsProps) {
	return (
		<>
			{isReg && (
				<FormField
					control={form.control}
					name='name'
					rules={{
						required: 'Name is required'
					}}
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder='Jone'
									disabled={isPending}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			)}
			<FormField
				control={form.control}
				name='email'
				rules={{
                    required: 'Email is required',
                    pattern: {
                        value: validEmail,
                        message: 'Please enter a valid email'
                    }
				}}
				render={({ field }) => (
					<FormItem>
						<FormControl>
							<Input
                                placeholder='jone@example.com'
                                type='email'
								disabled={isPending}
								{...field}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
            />
            <FormField
				control={form.control}
				name='password'
				rules={{
                    required: 'Password is required',
                    minLength: {
                        value: 6,
                        message: 'Minimum 6 characters'
                    }
				}}
				render={({ field }) => (
					<FormItem>
						<FormControl>
							<Input
                                placeholder='******'
                                type='password'
								disabled={isPending}
								{...field}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
		</>
	)
}
