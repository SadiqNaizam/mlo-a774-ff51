import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Chrome, Github } from 'lucide-react';

interface AuthFormContainerProps {
  title: string;
  description: string;
  children: React.ReactNode;
  footerContent: React.ReactNode;
}

const AuthFormContainer: React.FC<AuthFormContainerProps> = ({
  title,
  description,
  children,
  footerContent,
}) => {
  console.log('AuthFormContainer loaded');

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        {/* Main form content is passed in here */}
        <div>{children}</div>

        {/* Separator */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        {/* Social Login Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <Button variant="outline">
            <Chrome className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <div className="w-full text-center text-sm text-muted-foreground">
          {footerContent}
        </div>
      </CardFooter>
    </Card>
  );
};

export default AuthFormContainer;