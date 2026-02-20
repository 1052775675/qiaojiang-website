import { createClient } from '@supabase/supabase-js';

// 硬编码的 Supabase 配置 - 直接使用项目配置
const SUPABASE_URL = 'https://jkboyrmgceppvgxxkjnm.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_QZpE1k8D2BpLFMkCdF_-qg_qBz2lLqd';

// 从 localStorage 获取配置，如果没有则使用硬编码的配置
const getSupabaseUrl = () => {
  return localStorage.getItem('supabase_url') || SUPABASE_URL;
};

const getSupabaseKey = () => {
  return localStorage.getItem('supabase_key') || SUPABASE_ANON_KEY;
};

let supabaseInstance: ReturnType<typeof createClient> | null = null;

export const initSupabase = () => {
  const supabaseUrl = getSupabaseUrl();
  const supabaseAnonKey = getSupabaseKey();

  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  try {
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
    return supabaseInstance;
  } catch (error) {
    console.error('Error creating Supabase client:', error);
    return null;
  }
};

export const getSupabase = () => {
  if (!supabaseInstance) {
    supabaseInstance = initSupabase();
  }
  return supabaseInstance;
};

export const supabase = new Proxy({} as ReturnType<typeof createClient>, {
  get: (target, prop) => {
    const instance = getSupabase();
    if (!instance) {
      throw new Error('Supabase not configured');
    }
    return (instance as any)[prop];
  }
});

export const isSupabaseConfigured = () => {
  const url = getSupabaseUrl();
  const key = getSupabaseKey();
  return !!(url && key);
};

export const saveSupabaseConfig = (url: string, key: string) => {
  localStorage.setItem('supabase_url', url);
  localStorage.setItem('supabase_key', key);
  // 重新初始化
  supabaseInstance = null;
  initSupabase();
};

export const clearSupabaseConfig = () => {
  localStorage.removeItem('supabase_url');
  localStorage.removeItem('supabase_key');
  supabaseInstance = null;
};

// Database types
export interface CaseItem {
  id: string;
  title: string;
  description: string;
  image_url: string;
  car_model: string;
  film_type: string;
  specs: {
    vlt: string;
    ir_rejection: string;
    uv_block: string;
  };
  created_at: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  order_index: number;
  created_at: string;
}