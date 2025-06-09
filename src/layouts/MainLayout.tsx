import { ReactNode } from 'react';

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <main className="flex-1 flex flex-col items-center">
                {children}
            </main>
        </div>
    );
}
