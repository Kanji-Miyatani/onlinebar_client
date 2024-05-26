
import React from 'react';
import { Head } from '@/';
type LayoutProps = {
  children: React.ReactNode;
  title: string;
};
const LoginLayout = ({ children, title }: LayoutProps) => {
    return (
        <div>
          <Head title={title}/>
           {children}
        </div>
    );
};

export default LoginLayout;
