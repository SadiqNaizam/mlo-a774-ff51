import React from 'react';
import { Link } from 'react-router-dom';

// Custom Components
import AuthFormContainer from '@/components/AuthFormContainer';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const SignUpPage = () => {
  console.log('SignUpPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <AuthFormContainer
          title="Create an Account"
          description="Enter your information to create a new account."
          footerContent={
            <>
              Already have an account?{' '}
              <Link to="/" className="text-primary hover:underline font-medium">
                Log in
              </Link>
            </>
          }
        >
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="John Doe" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="name@example.com" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full mt-2">
              Sign Up
            </Button>
          </div>
        </AuthFormContainer>
      </main>
      <Footer />
    </div>
  );
};

export default SignUpPage;