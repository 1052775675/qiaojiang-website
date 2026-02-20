import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { toast } from 'sonner';
import { Database, Save, Eye, EyeOff, RefreshCw } from 'lucide-react';
import { saveSupabaseConfig, clearSupabaseConfig } from '../../lib/supabase';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

export function SupabaseConfigManager() {
  const [url, setUrl] = useState('');
  const [key, setKey] = useState('');
  const [showKey, setShowKey] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // 从 localStorage 读取当前配置
  const loadCurrentConfig = () => {
    const currentUrl = localStorage.getItem('supabase_url') || '';
    const currentKey = localStorage.getItem('supabase_key') || '';
    setUrl(currentUrl);
    setKey(currentKey);
  };

  const handleOpen = () => {
    loadCurrentConfig();
    setIsOpen(true);
  };

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
      toast.success('配置已更新，页面将在 2 秒后刷新');
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error('配置保存失败');
    }
  };

  const handleClear = () => {
    if (window.confirm('确定要清除 Supabase 配置吗？清除后需要重新配置才能使用网站功能。')) {
      clearSupabaseConfig();
      toast.success('配置已清除，页面将在 2 秒后刷新');
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          onClick={handleOpen}
          className="border-slate-700 hover:bg-slate-800 text-white"
        >
          <Database className="w-4 h-4 mr-2" />
          数据库配置
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-slate-900 border-slate-800 text-white max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <Database className="w-6 h-6 text-blue-400" />
            Supabase 数据库配置
          </DialogTitle>
          <DialogDescription className="text-slate-400">
            更新您的 Supabase 项目凭据
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Instructions */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <p className="text-sm text-slate-300 mb-2">
              <strong className="text-white">如何获取凭据：</strong>
            </p>
            <ol className="list-decimal list-inside space-y-1 text-sm text-slate-400">
              <li>访问 <a href="https://supabase.com/dashboard" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Supabase Dashboard</a></li>
              <li>选择您的项目</li>
              <li>进入 Settings → API</li>
              <li>复制 "Project URL" 和 "anon public" key</li>
            </ol>
          </div>

          {/* Current Config Info */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <p className="text-xs text-slate-400 mb-2">当前配置状态：</p>
            <div className="flex items-center gap-2 text-sm">
              {localStorage.getItem('supabase_url') ? (
                <>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-green-400">已配置</span>
                  <span className="text-slate-500">
                    ({localStorage.getItem('supabase_url')?.split('.')[0].split('//')[1]}...supabase.co)
                  </span>
                </>
              ) : (
                <>
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-red-400">未配置</span>
                </>
              )}
            </div>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="config_url" className="text-slate-300">
                Supabase Project URL *
              </Label>
              <Input
                id="config_url"
                type="url"
                placeholder="https://xxxxx.supabase.co"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 font-mono text-sm"
              />
              <p className="text-xs text-slate-500">
                Settings → API → Project URL
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="config_key" className="text-slate-300">
                Supabase Anon Public Key *
              </Label>
              <div className="relative">
                <Input
                  id="config_key"
                  type={showKey ? 'text' : 'password'}
                  placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 font-mono text-sm pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowKey(!showKey)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300"
                >
                  {showKey ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
              <p className="text-xs text-slate-500">
                Settings → API → Project API keys → anon public
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button
              onClick={handleSave}
              className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
            >
              <Save className="w-4 h-4 mr-2" />
              保存并刷新
            </Button>
            <Button
              onClick={handleClear}
              variant="outline"
              className="border-red-500/50 text-red-400 hover:bg-red-500/10"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              清除配置
            </Button>
          </div>

          {/* Warning */}
          <p className="text-xs text-slate-500 text-center">
            ⚠️ 更新配置后页面将自动刷新
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
