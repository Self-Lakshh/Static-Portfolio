import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col items-center justify-center">
            <main className="w-full max-w-6xl flex flex-col items-center justify-center p-4">
                {children}
            </main>
        </div>
    );
}
