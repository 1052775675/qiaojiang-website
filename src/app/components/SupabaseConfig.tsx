import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { toast } from 'sonner';
import { Database, Save, AlertCircle } from 'lucide-react';
import { saveSupabaseConfig } from '../../lib/supabase';

interface SupabaseConfigProps {
  onConfigured: () => void;
}

export function SupabaseConfig({ onConfigured }: SupabaseConfigProps) {
  const [url, setUrl] = useState('');
  const [key, setKey] = useState('');

  const handleSave = () => {
    if (!url || !key) {
      toast.error('请填写所有字段');
      return;
    }

    if (!url.startsWith('https://') || !url.includes('supabase.co')) {
      toast.error('请输入有效的 Supabase URL');
      return;
    }

    try {
      saveSupabaseConfig(url, key);
      toast.success('配置已保存');
      onConfigured();
    } catch (error) {
      toast.error('配置保存失败');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Database className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">配置 Supabase 数据库</h2>
            <p className="text-slate-400">请输入您的 Supabase 项目凭据</p>
          </div>

          {/* Instructions */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 mb-6 flex gap-3">
            <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-slate-300 space-y-2">
              <p>
                <strong className="text-white">如何获取凭据：</strong>
              </p>
              <ol className="list-decimal list-inside space-y-1 text-slate-400">
                <li>访问 <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">supabase.com</a> 并登录</li>
                <li>选择您的项目或创建新项目</li>
                <li>进入 Settings → API</li>
                <li>复制 "Project URL" 和 "anon public" API key</li>
              </ol>
              <p className="text-slate-500 text-xs mt-2">
                配置将保存在浏览器本地，刷新页面后仍然有效
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="supabase_url" className="text-slate-300">
                Supabase Project URL *
              </Label>
              <Input
                id="supabase_url"
                type="url"
                placeholder="https://xxxxx.supabase.co"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 font-mono text-sm"
              />
              <p className="text-xs text-slate-500">
                从 Supabase 项目的 Settings → API → Project URL 获取
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="supabase_key" className="text-slate-300">
                Supabase Anon Key *
              </Label>
              <Input
                id="supabase_key"
                type="password"
                placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                value={key}
                onChange={(e) => setKey(e.target.value)}
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 font-mono text-sm"
              />
              <p className="text-xs text-slate-500">
                从 Supabase 项目的 Settings → API → Project API keys → anon public 获取
              </p>
            </div>

            <Button
              onClick={handleSave}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
            >
              <Save className="w-4 h-4 mr-2" />
              保存配置
            </Button>
          </div>

          {/* Setup Guide */}
          <div className="mt-6 pt-6 border-t border-slate-800">
            <p className="text-sm text-slate-400 mb-2">
              <strong className="text-white">首次使用？</strong>
            </p>
            <p className="text-sm text-slate-500">
              请查看项目根目录的 <code className="bg-slate-800 px-2 py-1 rounded text-blue-400">SUPABASE_SETUP.md</code> 文件，
              了解如何创建数据库表和管理员账号。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
