-- ============================================
-- 汽车贴膜门店数据库完整设置脚本
-- ============================================
-- 
-- 使用说明：
-- 1. 登录 Supabase Dashboard (https://supabase.com/dashboard)
-- 2. 选择您的项目
-- 3. 点击左侧菜单 "SQL Editor"
-- 4. 点击 "New query"
-- 5. 复制此文件的全部内容，粘贴到编辑器
-- 6. 点击 "Run" 按钮执行
-- ============================================

-- 1. 创建 cases 表（贴膜案例）
create table if not exists cases (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text,
  image_url text,
  car_model text not null,
  film_type text not null,
  specs jsonb default '{}'::jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 启用 Row Level Security (RLS)
alter table cases enable row level security;

-- 删除可能存在的旧策略（避免重复执行错误）
drop policy if exists "Allow public read access on cases" on cases;
drop policy if exists "Allow authenticated insert access on cases" on cases;
drop policy if exists "Allow authenticated update access on cases" on cases;
drop policy if exists "Allow authenticated delete access on cases" on cases;

-- 创建新策略：允许所有人读取
create policy "Allow public read access on cases"
  on cases for select
  using (true);

-- 创建新策略：只允许认证用户写入
create policy "Allow authenticated insert access on cases"
  on cases for insert
  with check (auth.role() = 'authenticated');

create policy "Allow authenticated update access on cases"
  on cases for update
  using (auth.role() = 'authenticated');

create policy "Allow authenticated delete access on cases"
  on cases for delete
  using (auth.role() = 'authenticated');

-- 2. 创建 faqs 表（常见问题）
create table if not exists faqs (
  id uuid default gen_random_uuid() primary key,
  question text not null,
  answer text not null,
  order_index integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 启用 Row Level Security (RLS)
alter table faqs enable row level security;

-- 删除可能存在的旧策略（避免重复执行错误）
drop policy if exists "Allow public read access on faqs" on faqs;
drop policy if exists "Allow authenticated insert access on faqs" on faqs;
drop policy if exists "Allow authenticated update access on faqs" on faqs;
drop policy if exists "Allow authenticated delete access on faqs" on faqs;

-- 创建新策略：允许所有人读取
create policy "Allow public read access on faqs"
  on faqs for select
  using (true);

-- 创建新策略：只允许认证用户写入
create policy "Allow authenticated insert access on faqs"
  on faqs for insert
  with check (auth.role() = 'authenticated');

create policy "Allow authenticated update access on faqs"
  on faqs for update
  using (auth.role() = 'authenticated');

create policy "Allow authenticated delete access on faqs"
  on faqs for delete
  using (auth.role() = 'authenticated');

-- 3. 插入示例数据
-- 这些示例数据可以帮助您快速测试网站功能
-- 如果不需要，可以删除下面的 INSERT 语句

-- 示例案例
insert into cases (title, description, car_model, film_type, image_url, specs) values
  (
    '奔驰S级全车V-KOOL VK70贴膜',
    '全车采用V-KOOL旗舰系列VK70膜，前挡+四窗+天窗全覆盖，施工周期3小时，效果完美。车主反馈隔热效果显著，夏天车内温度明显降低。',
    '奔驰S级',
    'V-KOOL VK70',
    'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800',
    '{"vlt": "70%", "ir_rejection": "95%", "uv_block": "99%"}'::jsonb
  ),
  (
    '宝马7系3M Crystalline贴膜',
    '采用3M顶级Crystalline系列，透光率高达90%，同时保持出色的隔热性能。采用5S标准施工流程，无尘环境作业。',
    '宝马7系',
    '3M Crystalline 90',
    'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800',
    '{"vlt": "90%", "ir_rejection": "97%", "uv_block": "99.9%"}'::jsonb
  ),
  (
    '奥迪A8龙膜畅悦系列',
    '全车龙膜畅悦70前挡+侧后挡组合，性价比之选。严格按照品牌标准施工，质保5年。',
    '奥迪A8',
    '龙膜畅悦70',
    'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800',
    '{"vlt": "70%", "ir_rejection": "85%", "uv_block": "99%"}'::jsonb
  );

-- 示例FAQ
insert into faqs (question, answer, order_index) values
  (
    '贴膜会影响手机信号吗？',
    '不会。我们使用的高端贴膜（如V-KOOL、3M等）采用磁控溅射技术，不含金属层，完全不会影响手机信号、GPS导航和ETC感应。',
    1
  ),
  (
    '贴膜质保多久？',
    '根据不同品牌和型号，质保期从3年到10年不等。V-KOOL提供10年质保，3M提供终身质保，龙膜提供5-8年质保。质保期内如出现起泡、褪色等质量问题，免费更换。',
    2
  ),
  (
    '贴膜后多久可以升降车窗？',
    '建议贴膜后3-7天内避免升降车窗，让膜材与玻璃充分贴合。夏季温度高，3天即可；冬季温度低，建议等待5-7天。',
    3
  ),
  (
    '前挡贴膜影响年检吗？',
    '只要选择透光率符合国家标准（≥70%）的膜，就不会影响年检。我们推荐的V-KOOL VK70、3M Crystalline等产品透光率都在70%以上，完全符合标准。',
    4
  ),
  (
    '贴膜施工需要多长时间？',
    '根据车型和施工项目不同，时间在2-4小时之间。全车贴膜（前挡+四窗+天窗）通常需要3小时左右。我们采用5S标准流程，确保施工质量。',
    5
  );

-- 完成！您应该看到以下成功消息：
-- ✅ CREATE TABLE (cases)
-- ✅ ALTER TABLE (RLS enabled)
-- ✅ CREATE POLICY (multiple)
-- ✅ CREATE TABLE (faqs)
-- ✅ ALTER TABLE (RLS enabled)
-- ✅ CREATE POLICY (multiple)
-- ✅ INSERT 0 3 (cases data)
-- ✅ INSERT 0 5 (faqs data)
