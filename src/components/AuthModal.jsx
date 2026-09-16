import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { X, User, Mail, Lock, LogIn, UserPlus } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { getAuthSchema } from '../schemas/authSchema';

export const AuthModal = ({ isOpen, onClose }) => {
  const { isDark } = useTheme();
  const { lang } = useLanguage();
  const { registerUser, loginUser } = useAuth();
  
  const [isRegister, setIsRegister] = useState(false);
  const [authError, setAuthError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: yupResolver(getAuthSchema(isRegister, lang)),
    defaultValues: { name: '', email: '', password: '', confirmPassword: '' }
  });

  if (!isOpen) return null;

  const toggleMode = () => {
    setIsRegister((prev) => !prev);
    setAuthError('');
    reset();
  };

  const onSubmit = (data) => {
    setAuthError('');
    try {
      if (isRegister) {
        registerUser({ name: data.name, email: data.email, password: data.password });
      } else {
        loginUser(data.email, data.password);
      }
      reset();
      onClose();
    } catch (err) {
      if (err.message === 'USER_EXISTS') {
        setAuthError(lang === 'ka' ? 'მომხმარებელი ამ ელ-ფოსტით უკვე არსებობს!' : 'User with this email already exists!');
      } else if (err.message === 'INVALID_CREDENTIALS') {
        setAuthError(lang === 'ka' ? 'არასწორი ელ-ფოსტა ან პაროლი!' : 'Invalid email or password!');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className={`relative w-full max-w-md rounded-lg border p-8 shadow-2xl transition-colors duration-300 ${
        isDark ? 'bg-neutral-950 border-neutral-800 text-white' : 'bg-white border-neutral-200 text-neutral-900'
      }`}>
        <button onClick={onClose} className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-amber-500">
          <X size={20} />
        </button>

        <div className="text-center space-y-2 mb-6">
          <h2 className="text-2xl font-black uppercase tracking-wider">
            {isRegister ? (lang === 'ka' ? 'რეგისტრაცია' : 'Register') : (lang === 'ka' ? 'ავტორიზაცია' : 'Login')}
          </h2>
          <p className="text-xs text-neutral-500 font-mono">
            {isRegister ? (lang === 'ka' ? 'შეუერთდით KERA-ს პლატფორმას' : 'Join KERA Platform') : (lang === 'ka' ? 'შედით თქვენს ანგარიშზე' : 'Access your account')}
          </p>
        </div>

        {authError && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 text-red-500 text-xs font-mono rounded text-center">
            {authError}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          {isRegister && (
            <div className="space-y-1">
              <label className="text-xs font-mono uppercase text-neutral-400">
                {lang === 'ka' ? 'სახელი და გვარი' : 'Full Name'}
              </label>
              <div className="relative">
                <User size={16} className="absolute left-3 top-3.5 text-neutral-500" />
                <input
                  type="text"
                  {...register('name')}
                  placeholder={lang === 'ka' ? 'გიორგი ბერიძე' : 'John Doe'}
                  className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-sm border outline-none ${
                    errors.name ? 'border-red-500' : isDark ? 'bg-neutral-900 border-neutral-800 focus:border-amber-500' : 'bg-neutral-50 border-neutral-300 focus:border-amber-500'
                  }`}
                />
              </div>
              {errors.name && <p className="text-xs text-red-500 font-mono mt-0.5">{errors.name.message}</p>}
            </div>
          )}

          <div className="space-y-1">
            <label className="text-xs font-mono uppercase text-neutral-400">
              {lang === 'ka' ? 'ელ-ფოსტა' : 'Email Address'}
            </label>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-3.5 text-neutral-500" />
              <input
                type="email"
                {...register('email')}
                placeholder="example@mail.com"
                className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-sm border outline-none ${
                  errors.email ? 'border-red-500' : isDark ? 'bg-neutral-900 border-neutral-800 focus:border-amber-500' : 'bg-neutral-50 border-neutral-300 focus:border-amber-500'
                }`}
              />
            </div>
            {errors.email && <p className="text-xs text-red-500 font-mono mt-0.5">{errors.email.message}</p>}
          </div>

          <div className="space-y-1">
            <label className="text-xs font-mono uppercase text-neutral-400">
              {lang === 'ka' ? 'პაროლი' : 'Password'}
            </label>
            <div className="relative">
              <Lock size={16} className="absolute left-3 top-3.5 text-neutral-500" />
              <input
                type="password"
                {...register('password')}
                placeholder="Pass123"
                className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-sm border outline-none ${
                  errors.password ? 'border-red-500' : isDark ? 'bg-neutral-900 border-neutral-800 focus:border-amber-500' : 'bg-neutral-50 border-neutral-300 focus:border-amber-500'
                }`}
              />
            </div>
            {errors.password && <p className="text-xs text-red-500 font-mono mt-0.5">{errors.password.message}</p>}
          </div>

          {isRegister && (
            <div className="space-y-1">
              <label className="text-xs font-mono uppercase text-neutral-400">
                {lang === 'ka' ? 'გაიმეორეთ პაროლი' : 'Confirm Password'}
              </label>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-3.5 text-neutral-500" />
                <input
                  type="password"
                  {...register('confirmPassword')}
                  placeholder="Pass123"
                  className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-sm border outline-none ${
                    errors.confirmPassword ? 'border-red-500' : isDark ? 'bg-neutral-900 border-neutral-800 focus:border-amber-500' : 'bg-neutral-50 border-neutral-300 focus:border-amber-500'
                  }`}
                />
              </div>
              {errors.confirmPassword && <p className="text-xs text-red-500 font-mono mt-0.5">{errors.confirmPassword.message}</p>}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-4 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 text-xs uppercase tracking-widest rounded-sm transition-all"
          >
            {isRegister ? (
              <>{lang === 'ka' ? 'რეგისტრაცია' : 'Register'} <UserPlus size={16} /></>
            ) : (
              <>{lang === 'ka' ? 'შესვლა' : 'Login'} <LogIn size={16} /></>
            )}
          </button>
        </form>

        <div className="mt-6 text-center text-xs font-mono text-neutral-500 border-t border-neutral-800/60 pt-4">
          {isRegister ? (
            <p>
              {lang === 'ka' ? 'უკვე გაქვთ ანგარიში?' : 'Already have an account?'}{' '}
              <button onClick={toggleMode} className="text-amber-500 hover:underline font-bold ml-1">
                {lang === 'ka' ? 'შესვლა' : 'Login'}
              </button>
            </p>
          ) : (
            <p>
              {lang === 'ka' ? 'არ გაქვთ ანგარიში?' : "Don't have an account?"}{' '}
              <button onClick={toggleMode} className="text-amber-500 hover:underline font-bold ml-1">
                {lang === 'ka' ? 'რეგისტრაცია' : 'Register'}
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};