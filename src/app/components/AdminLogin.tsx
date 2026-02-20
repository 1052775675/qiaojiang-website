import { useState } from 'react';
import { getSupabase } from '../../lib/supabase';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from 'sonner';
import { Lock, Mail, ArrowLeft } from 'lucide-react';

interface AdminLoginProps {
  onLoginSuccess: () => void;
}

export function AdminLogin({ onLoginSuccess }: AdminLoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const supabase = getSupabase();
      if (!supabase) {
        toast.error('Supabase 未配置');
        setError('Supabase 未配置');
        setLoading(false);
        return;
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      if (data.session) {
        toast.success('登录成功');
        onLoginSuccess();
      }
    } catch (error: any) {
      toast.error(error.message || '登录失败，请检查邮箱和密码');
      setError(error.message || '登录失败，请检查邮箱和密码');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Back to Home Button */}
        <button
          onClick={() => {
            window.location.hash = '';
          }}
          className="mb-4 flex items-center gap-2 text-gray-400 hover:text-[#D4AF37] transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">返回首页</span>
        </button>

        <div className="bg-black/80 border border-[#D4AF37]/30 rounded-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8942C] rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Lock className="w-8 h-8 text-black" />
            </div>
            <h1 className="text-2xl font-bold text-[#D4AF37] mb-2">开原市巧匠美车工作室</h1>
            <p className="text-gray-400 text-sm">管理后台 · 请使用管理员账号登录</p>
          </div>

          {error && (
            <div className="mb-6 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-[#D4AF37]">
                邮箱
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10 bg-black/60 border-[#D4AF37]/30 text-white placeholder:text-gray-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-[#D4AF37]">
                密码
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pl-10 bg-black/60 border-[#D4AF37]/30 text-white placeholder:text-gray-500"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8942C] hover:from-[#E5C158] hover:to-[#D4AF37] text-black font-semibold"
              disabled={loading}
            >
              {loading ? '登录中...' : '登录'}
            </Button>
          </form>

          {/* Footer note */}
          <div className="mt-6 text-center text-sm text-gray-500">
            需要使用Supabase后台配置的管理员账号
          </div>
        </div>
      </div>
    </div>
  );
}