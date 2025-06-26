import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AuthFormContainer from '@/components/AuthFormContainer';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

// Define the validation schema using Zod
const formSchema = z.object({
  password: z.string().min(8, { message: "Password must be at least 8 characters long." }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match.",
  path: ["confirmPassword"], // Point error to the confirmPassword field
});

const ResetPasswordPage: React.FC = () => {
  console.log('ResetPasswordPage loaded');
  const navigate = useNavigate();

  // Initialize the form with react-hook-form and Zod
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  // Handle form submission
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // In a real app, you would make an API call here to reset the password.
    // For this mock, we'll simulate a successful reset.
    console.log('Form submitted with new password:', values.password);

    // Show a success toast notification
    toast.success('Your password has been successfully updated. Please log in.');

    // Redirect to the login page
    navigate('/'); // Path from App.tsx
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <AuthFormContainer
          title="Reset Your Password"
          description="Create a new, strong password for your account."
          footerContent={
            <>
              Remembered your password?{' '}
              <Link to="/" className="font-semibold text-primary hover:underline">
                Log In
              </Link>
            </>
          }
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm New Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Reset Password
              </Button>
            </form>
          </Form>
        </AuthFormContainer>
      </main>
      <Footer />
    </div>
  );
};

export default ResetPasswordPage;