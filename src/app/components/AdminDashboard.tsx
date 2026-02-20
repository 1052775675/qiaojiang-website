import { useState, useEffect } from 'react';
import { getSupabase, CaseItem, FAQ } from '../../lib/supabase';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Trash2, Plus, LogOut, Save, Upload, Image as ImageIcon, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { SupabaseConfigManager } from './SupabaseConfigManager';

interface AdminDashboardProps {
  onLogout: () => void;
}

export function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [cases, setCases] = useState<CaseItem[]>([]);
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');

  // Case form state
  const [caseForm, setCaseForm] = useState({
    title: '',
    description: '',
    image_url: '',
    car_model: '',
    film_type: '',
    vlt: '',
    ir_rejection: '',
    uv_block: '',
  });

  // FAQ form state
  const [faqForm, setFaqForm] = useState({
    question: '',
    answer: '',
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const supabase = getSupabase();
      if (!supabase) {
        toast.error('Supabase 未配置');
        return;
      }

      const [casesRes, faqsRes] = await Promise.all([
        supabase.from('cases').select('*').order('created_at', { ascending: false }),
        supabase.from('faqs').select('*').order('order_index', { ascending: true }),
      ]);

      if (casesRes.error) throw casesRes.error;
      if (faqsRes.error) throw faqsRes.error;

      setCases(casesRes.data || []);
      setFaqs(faqsRes.data || []);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const handleAddCase = async () => {
    if (!caseForm.title || !caseForm.car_model || !caseForm.film_type) {
      toast.error('请填写必填字段');
      return;
    }

    // 检查图片是否已上传
    if (!caseForm.image_url) {
      toast.error('❌ 请先上传案例图片！图片URL不能为空。');
      return;
    }

    setLoading(true);
    try {
      const supabase = getSupabase();
      if (!supabase) {
        toast.error('Supabase 未配置');
        return;
      }

      console.log('[AdminDashboard] 准备保存案例，当前 image_url:', caseForm.image_url);

      const newCase = {
        title: caseForm.title,
        description: caseForm.description,
        image_url: caseForm.image_url,
        car_model: caseForm.car_model,
        film_type: caseForm.film_type,
        specs: {
          vlt: caseForm.vlt,
          ir_rejection: caseForm.ir_rejection,
          uv_block: caseForm.uv_block,
        },
      };

      console.log('[AdminDashboard] 即将插入的数据:', newCase);

      const { data, error } = await supabase.from('cases').insert(newCase).select();

      if (error) {
        console.error('[AdminDashboard] 保存案例出错:', error);
        throw error;
      }

      console.log('[AdminDashboard] ✅ 案例保存成功，返回数据:', data);

      toast.success('案例添加成功');
      setCaseForm({
        title: '',
        description: '',
        image_url: '',
        car_model: '',
        film_type: '',
        vlt: '',
        ir_rejection: '',
        uv_block: '',
      });
      setImageFile(null);
      setImagePreview('');
      loadData();
    } catch (error: any) {
      console.error('[AdminDashboard] ❌ 添加案例失败:', error);
      toast.error(error.message || '添加失败');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCase = async (id: string) => {
    if (!confirm('确定要删除这个案例吗？')) return;

    try {
      const supabase = getSupabase();
      if (!supabase) {
        toast.error('Supabase 未配置');
        return;
      }

      const { error } = await supabase.from('cases').delete().eq('id', id);
      if (error) throw error;
      toast.success('案例已删除');
      loadData();
    } catch (error: any) {
      toast.error(error.message || '删除失败');
    }
  };

  const handleAddFAQ = async () => {
    if (!faqForm.question || !faqForm.answer) {
      toast.error('请填写问题和答案');
      return;
    }

    setLoading(true);
    try {
      const supabase = getSupabase();
      if (!supabase) {
        toast.error('Supabase 未配置');
        return;
      }

      const maxOrder = faqs.length > 0 ? Math.max(...faqs.map((f) => f.order_index)) : 0;

      const { error } = await supabase.from('faqs').insert({
        question: faqForm.question,
        answer: faqForm.answer,
        order_index: maxOrder + 1,
      });

      if (error) throw error;

      toast.success('问题添加成功');
      setFaqForm({ question: '', answer: '' });
      loadData();
    } catch (error: any) {
      toast.error(error.message || '添加失败');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteFAQ = async (id: string) => {
    if (!confirm('确定要删除这个问题吗？')) return;

    try {
      const supabase = getSupabase();
      if (!supabase) {
        toast.error('Supabase 未配置');
        return;
      }

      const { error } = await supabase.from('faqs').delete().eq('id', id);
      if (error) throw error;
      toast.success('问题已删除');
      loadData();
    } catch (error: any) {
      toast.error(error.message || '删除失败');
    }
  };

  const handleLogout = async () => {
    const supabase = getSupabase();
    if (supabase) {
      await supabase.auth.signOut();
    }
    onLogout();
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 验证文件类型
    if (!file.type.startsWith('image/')) {
      toast.error('请上传图片文件');
      return;
    }

    // 验证文件大小（最大5MB）
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      toast.error('图片大小不能超过5MB');
      return;
    }

    setUploading(true);
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));

    try {
      const supabase = getSupabase();
      if (!supabase) {
        toast.error('Supabase 未配置');
        setUploading(false);
        return;
      }

      // 生成唯一文件名
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

      const { data, error } = await supabase.storage
        .from('case-images')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false,
        });

      if (error) {
        // 如果是bucket不存在的错误，提供友好提示
        if (error.message.includes('not found') || error.message.includes('Bucket')) {
          toast.error('❌ 存储桶未设置！请按以下步骤操作：\n1. 打开 Supabase 控制台\n2. 进入 SQL Editor\n3. 复制并运行项目根目录的 setup-storage.sql 文件', {
            duration: 10000,
          });
        } else {
          toast.error(`上传失败: ${error.message}`);
        }
        setUploading(false);
        return;
      }

      // 获取公开URL
      const { data: { publicUrl } } = supabase.storage
        .from('case-images')
        .getPublicUrl(data.path);

      console.log('[AdminDashboard] ✅ 图片上传成功！');
      console.log('[AdminDashboard] 文件路径:', data.path);
      console.log('[AdminDashboard] 公开URL:', publicUrl);

      setCaseForm({ ...caseForm, image_url: publicUrl });
      toast.success('图片上传成功');
      
      console.log('[AdminDashboard] image_url 已设置到表单:', publicUrl);
    } catch (error: any) {
      toast.error(error.message || '��传失败');
    } finally {
      setUploading(false);
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview('');
    setCaseForm({ ...caseForm, image_url: '' });
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <div className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#D4AF37]">开原市巧匠美车工作室</h1>
            <p className="text-sm text-gray-400 mt-1">管理后台 · 内容管理系统</p>
          </div>
          <div className="flex items-center gap-3">
            <SupabaseConfigManager />
            <Button
              variant="outline"
              onClick={handleLogout}
              className="border-slate-700 text-slate-300 hover:bg-slate-800"
            >
              <LogOut className="w-4 h-4 mr-2" />
              退出登录
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Tabs defaultValue="cases" className="space-y-6">
          <TabsList className="bg-slate-900 border border-slate-800">
            <TabsTrigger value="cases" className="data-[state=active]:bg-slate-800">
              贴膜案例管理
            </TabsTrigger>
            <TabsTrigger value="faqs" className="data-[state=active]:bg-slate-800">
              问答管理
            </TabsTrigger>
          </TabsList>

          {/* Cases Management */}
          <TabsContent value="cases" className="space-y-6">
            {/* Add Case Form */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Plus className="w-5 h-5" />
                添加新案例
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-slate-300">
                    标题 *
                  </Label>
                  <Input
                    id="title"
                    value={caseForm.title}
                    onChange={(e) => setCaseForm({ ...caseForm, title: e.target.value })}
                    placeholder="例：奔驰S级全车V-KOOL贴膜"
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="car_model" className="text-slate-300">
                    车型 *
                  </Label>
                  <Input
                    id="car_model"
                    value={caseForm.car_model}
                    onChange={(e) => setCaseForm({ ...caseForm, car_model: e.target.value })}
                    placeholder="例：奔驰S级"
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="film_type" className="text-slate-300">
                    膜型号 *
                  </Label>
                  <Input
                    id="film_type"
                    value={caseForm.film_type}
                    onChange={(e) => setCaseForm({ ...caseForm, film_type: e.target.value })}
                    placeholder="例：V-KOOL VK70"
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="image_url" className="text-slate-300">
                    图片URL
                  </Label>
                  <Input
                    id="image_url"
                    value={caseForm.image_url}
                    onChange={(e) => setCaseForm({ ...caseForm, image_url: e.target.value })}
                    placeholder="https://..."
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                  {/* 图片URL实时显示和预览 */}
                  {caseForm.image_url && (
                    <div className="mt-2 p-3 bg-slate-900 border border-slate-700 rounded-lg">
                      <div className="text-xs text-slate-400 mb-2">当前图片URL：</div>
                      <div className="text-xs text-blue-400 break-all mb-3">
                        {caseForm.image_url}
                      </div>
                      <div className="text-xs text-slate-400 mb-2">预览：</div>
                      <img 
                        src={caseForm.image_url} 
                        alt="预览" 
                        className="w-full h-40 object-cover rounded"
                        onLoad={() => {
                          console.log('✅ 图片URL有效，可以正常加载');
                          toast.success('图片URL有效');
                        }}
                        onError={() => {
                          console.error('❌ 图片URL无效或无法加载:', caseForm.image_url);
                          toast.error('图片URL无法加载，请检查');
                        }}
                      />
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="vlt" className="text-slate-300">
                    透光率
                  </Label>
                  <Input
                    id="vlt"
                    value={caseForm.vlt}
                    onChange={(e) => setCaseForm({ ...caseForm, vlt: e.target.value })}
                    placeholder="例：70%"
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ir_rejection" className="text-slate-300">
                    隔热率
                  </Label>
                  <Input
                    id="ir_rejection"
                    value={caseForm.ir_rejection}
                    onChange={(e) =>
                      setCaseForm({ ...caseForm, ir_rejection: e.target.value })
                    }
                    placeholder="例：95%"
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="uv_block" className="text-slate-300">
                    防UV率
                  </Label>
                  <Input
                    id="uv_block"
                    value={caseForm.uv_block}
                    onChange={(e) => setCaseForm({ ...caseForm, uv_block: e.target.value })}
                    placeholder="例：99%"
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="description" className="text-slate-300">
                    描述
                  </Label>
                  <Textarea
                    id="description"
                    value={caseForm.description}
                    onChange={(e) =>
                      setCaseForm({ ...caseForm, description: e.target.value })
                    }
                    placeholder="案例描述..."
                    rows={3}
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <Label className="text-slate-300 flex items-center gap-2">
                  <ImageIcon className="w-4 h-4" />
                  案例图片
                </Label>

                {!imagePreview ? (
                  <div className="border-2 border-dashed border-slate-700 rounded-xl p-8 text-center bg-slate-800/30 hover:border-slate-600 transition-colors">
                    <ImageIcon className="w-12 h-12 mx-auto text-slate-500 mb-3" />
                    <p className="text-slate-400 mb-3">点击上传或输入图片URL</p>
                    <div className="flex items-center justify-center gap-3">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => document.getElementById('imageUpload')?.click()}
                        disabled={uploading}
                        className="border-slate-700 text-slate-300 hover:bg-slate-800"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        {uploading ? '上传中...' : '选择文件'}
                      </Button>
                      <input
                        type="file"
                        id="imageUpload"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </div>
                    <p className="text-xs text-slate-500 mt-3">支持 JPG、PNG、WebP 格式，最大 5MB</p>
                  </div>
                ) : (
                  <div className="relative group">
                    <img
                      src={imagePreview}
                      alt="案例预览"
                      className="w-full h-48 object-cover rounded-xl border border-slate-700"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center gap-2">
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => document.getElementById('imageUpload')?.click()}
                        className="bg-slate-800/80 text-white hover:bg-slate-700"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        更换图片
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={handleRemoveImage}
                        className="bg-red-600/80 text-white hover:bg-red-700"
                      >
                        <X className="w-4 h-4 mr-2" />
                        删除
                      </Button>
                    </div>
                    <input
                      type="file"
                      id="imageUpload"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </div>
                )}
              </div>

              <Button
                onClick={handleAddCase}
                disabled={loading}
                className="mt-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
              >
                <Save className="w-4 h-4 mr-2" />
                保存案例
              </Button>
            </div>

            {/* Cases List */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-6">已有案例</h2>

              {cases.length === 0 ? (
                <p className="text-slate-500 text-center py-8">暂无案例</p>
              ) : (
                <div className="space-y-4">
                  {cases.map((caseItem) => (
                    <div
                      key={caseItem.id}
                      className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 flex items-center justify-between"
                    >
                      <div className="flex-1">
                        <h3 className="text-white font-semibold mb-1">{caseItem.title}</h3>
                        <p className="text-slate-400 text-sm">
                          {caseItem.car_model} · {caseItem.film_type}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteCase(caseItem.id)}
                        className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </TabsContent>

          {/* FAQs Management */}
          <TabsContent value="faqs" className="space-y-6">
            {/* Add FAQ Form */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Plus className="w-5 h-5" />
                添加新问题
              </h2>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="question" className="text-slate-300">
                    问题 *
                  </Label>
                  <Input
                    id="question"
                    value={faqForm.question}
                    onChange={(e) => setFaqForm({ ...faqForm, question: e.target.value })}
                    placeholder="例：贴膜会影响手机信号吗？"
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="answer" className="text-slate-300">
                    答案 *
                  </Label>
                  <Textarea
                    id="answer"
                    value={faqForm.answer}
                    onChange={(e) => setFaqForm({ ...faqForm, answer: e.target.value })}
                    placeholder="详细回答..."
                    rows={4}
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </div>
              </div>

              <Button
                onClick={handleAddFAQ}
                disabled={loading}
                className="mt-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
              >
                <Save className="w-4 h-4 mr-2" />
                保存问题
              </Button>
            </div>

            {/* FAQs List */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-6">已有问题</h2>

              {faqs.length === 0 ? (
                <p className="text-slate-500 text-center py-8">暂无问题</p>
              ) : (
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <div
                      key={faq.id}
                      className="bg-slate-800/50 border border-slate-700 rounded-xl p-4"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-white font-semibold flex-1">{faq.question}</h3>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteFAQ(faq.id)}
                          className="text-red-400 hover:text-red-300 hover:bg-red-500/10 ml-2"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      <p className="text-slate-400 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}