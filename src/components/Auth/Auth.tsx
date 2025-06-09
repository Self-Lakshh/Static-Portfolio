import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

interface AuthProps {
  mode?: 'login' | 'signup';
  onAuth?: () => void;
}

const Auth: React.FC<AuthProps> = ({ mode = 'login', onAuth }) => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>(mode);

  const handleAuth = () => {
    if (onAuth) onAuth();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex items-center justify-center gap-8">

        {/* Auth Form Section */}
        <div className="w-full max-w-md">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden animate-fade-in">
            {/* Header */}
            <div className="px-8 pt-8 pb-6 text-center relative">
              <div className="absolute inset-0 "></div>
              <div className="relative">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2">
                  Welcome Back
                </h1>
                <p className="text-slate-600">Sign in to your account or create a new one</p>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="px-8 mb-6">
              <div className="flex bg-slate-100/80 backdrop-blur-sm rounded-2xl p-1.5 border border-slate-200/50">
                <button
                  onClick={() => setActiveTab('login')}
                  className={`flex-1 py-3 px-4 text-sm font-semibold rounded-xl transition-all duration-300 ${activeTab === 'login'
                    ? 'bg-white text-slate-900 shadow-lg transform scale-[1.02] border border-slate-200/50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                    }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => setActiveTab('signup')}
                  className={`flex-1 py-3 px-4 text-sm font-semibold rounded-xl transition-all duration-300 ${activeTab === 'signup'
                    ? 'bg-white text-slate-900 shadow-lg transform scale-[1.02] border border-slate-200/50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                    }`}
                >
                  Sign Up
                </button>
              </div>
            </div>

            {/* Form Content */}
            <div className="px-8 pb-8">
              {activeTab === 'login' ? <LoginForm onAuth={handleAuth} /> : <SignupForm onAuth={handleAuth} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
