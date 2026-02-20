import { useEffect, useState } from 'react';
import { getSupabase, isSupabaseConfigured } from '../lib/supabase';
import { Toaster } from './components/ui/sonner';

// Admin pages
import { AdminLogin } from './components/AdminLogin';
import { AdminDashboard } from './components/AdminDashboard';
import { SupabaseConfig } from './components/SupabaseConfig';

// Public page components
import { HomePage } from './pages/HomePage';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [configured, setConfigured] = useState(false);
  const [currentHash, setCurrentHash] = useState('');

  useEffect(() => {
    // Check if Supabase is configured
    const isConfigured = isSupabaseConfigured();
    setConfigured(isConfigured);

    // Set current hash
    setCurrentHash(window.location.hash);

    // Listen for hash changes
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);

    // Check auth if configured
    if (isConfigured) {
      checkAuth();
      
      // Listen for auth changes
      const supabase = getSupabase();
      if (supabase) {
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
          setIsAuthenticated(!!session);
        });

        return () => {
          window.removeEventListener('hashchange', handleHashChange);
          authListener.subscription.unsubscribe();
        };
      }
    } else {
      setLoading(false);
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [configured]);

  const checkAuth = async () => {
    try {
      const supabase = getSupabase();
      if (!supabase) {
        setLoading(false);
        return;
      }
      
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
    } catch (error) {
      console.error('Error checking auth:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = async () => {
    try {
      const supabase = getSupabase();
      if (supabase) {
        await supabase.auth.signOut();
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
    setIsAuthenticated(false);
    window.location.hash = '';
  };

  const handleConfigured = () => {
    setConfigured(true);
    setLoading(true);
    checkAuth();
  };

  // Show config screen if not configured
  if (!configured) {
    return (
      <>
        <SupabaseConfig onConfigured={handleConfigured} />
        <Toaster />
      </>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">加载中...</div>
      </div>
    );
  }

  // Admin routes
  if (currentHash === '#/admin') {
    if (!isAuthenticated) {
      return (
        <>
          <AdminLogin onLoginSuccess={handleLoginSuccess} />
          <Toaster />
        </>
      );
    }
    return (
      <>
        <AdminDashboard onLogout={handleLogout} />
        <Toaster />
      </>
    );
  }

  // Public view
  return (
    <>
      <HomePage />
      <Toaster />
    </>
  );
}
