-- 创建案例图片存储桶
INSERT INTO storage.buckets (id, name, public)
VALUES ('case-images', 'case-images', true)
ON CONFLICT (id) DO NOTHING;

-- 允许所有人读取图片（公开访问）
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING ( bucket_id = 'case-images' );

-- 允许认证用户上传图片
CREATE POLICY "Authenticated users can upload"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'case-images' 
  AND auth.role() = 'authenticated'
);

-- 允许认证用户删除自己上传的图片
CREATE POLICY "Authenticated users can delete own images"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'case-images' 
  AND auth.role() = 'authenticated'
);

-- 允许认证用户更新自己上传的图片
CREATE POLICY "Authenticated users can update own images"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'case-images' 
  AND auth.role() = 'authenticated'
);
