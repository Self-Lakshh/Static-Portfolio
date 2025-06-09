import React, { useState } from 'react';
import Input from './Input';

interface FormData {
  organizationName: string;
  email: string;
  password: string;
}

interface FormErrors {
  organizationName?: string;
  email?: string;
  password?: string;
}

interface SignupFormProps {
  onAuth?: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onAuth }) => {
  const [formData, setFormData] = useState<FormData>({
    organizationName: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.organizationName) {
      newErrors.organizationName = 'Organization name is required';
    } else if (formData.organizationName.length < 2) {
      newErrors.organizationName = 'Organization name must be at least 2 characters';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Signup submitted:', formData);
      setIsLoading(false);
      if (onAuth) onAuth();
    }, 1500);
  };

  const updateField = (field: keyof FormData) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="animate-slide-in">
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Organization Name"
          type="text"
          value={formData.organizationName}
          onChange={updateField('organizationName')}
          error={errors.organizationName}
          placeholder="Enter your organization name"
          required
        />

        <Input
          label="Email Address"
          type="email"
          value={formData.email}
          onChange={updateField('email')}
          error={errors.email}
          placeholder="Enter your email"
          required
        />

        <Input
          label="Password"
          type="password"
          value={formData.password}
          onChange={updateField('password')}
          error={errors.password}
          placeholder="Create a strong password"
          required
        />

        <div className="text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
          <p className="font-medium mb-1">Password requirements:</p>
          <ul className="space-y-1">
            <li className={`flex items-center ${formData.password.length >= 8 ? 'text-green-600' : ''}`}>
              <span className="mr-2">{formData.password.length >= 8 ? '✓' : '•'}</span>
              At least 8 characters
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <label className="flex items-start">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500 focus:ring-2 mt-0.5"
              required
            />
            <span className="ml-2 text-slate-600">
              I agree to the{' '}
              <button type="button" className="text-blue-600 hover:text-blue-700 font-medium">
                Terms of Service
              </button>{' '}
              and{' '}
              <button type="button" className="text-blue-600 hover:text-blue-700 font-medium">
                Privacy Policy
              </button>
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Creating account...
            </span>
          ) : (
            'Create Account'
          )}
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
