import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AuthFormContainer from '@/components/AuthFormContainer';
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
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
});

const ForgotPasswordPage: React.FC = () => {
  console.log('ForgotPasswordPage loaded');

  // Set up the form using react-hook-form and Zod
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  // Handle form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('Password reset requested for:', values.email);
    // Simulate an API call
    toast.success('If an account exists with that email, a reset link has been sent.');
    form.reset();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <AuthFormContainer
          title="Forgot Your Password?"
          description="No problem. Enter your email and we'll send you a link to reset it."
          footerContent={
            <>
              Remember your password?{' '}
              <Link to="/" className="font-semibold text-primary hover:underline">
                Login here
              </Link>
            </>
          }
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Send Reset Link
              </Button>
            </form>
          </Form>
        </AuthFormContainer>
      </main>
      <Footer />
    </div>
  );
};

export default ForgotPasswordPage;