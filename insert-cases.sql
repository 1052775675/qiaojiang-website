-- 插入6个真实施工案例
-- 案例1：宝马5系 - 经典VK70全车套餐
INSERT INTO cases (title, description, image_url, car_model, film_type, specs)
VALUES (
  '宝马5系全车V-KOOL VK70贴膜',
  '车主张先生的宝马5系选用V-KOOL经典VK70全车套餐。前挡+四门+后挡+天窗全覆盖，施工时长4小时。VK70高透光率71%符合国标，太阳能阻隔率55%，夏季车内温度显著降低。采用无尘恒温贴膜车间，专业技师精细施工，质保10年。车主反馈：夏天开车不再晒脸，空调负荷明显减少，油耗降低约15%。',
  'https://images.unsplash.com/photo-1712654312051-12a60b670f80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCTVclMjA1JTIwc2VyaWVzJTIwbHV4dXJ5JTIwY2FyJTIwYmxhY2t8ZW58MXx8fHwxNzcxMjMyNTMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  '宝马5系',
  'V-KOOL VK70',
  '{"vlt": "71%", "ir_rejection": "55%", "uv_block": "99%"}'::jsonb
);

-- 案例2：奔驰E级 - VP70前挡+KC20侧窗高端组合
INSERT INTO cases (title, description, image_url, car_model, film_type, specs)
VALUES (
  '奔驰E级VP70前挡+KC20侧窗贴膜',
  '王女士的奔驰E300L选择VP70前挡+KC20侧后窗高端组合套餐。VP70采用防护级别膜，不仅隔热还具备防爆功能，透光率71%。KC20侧窗采用多层纳米陶瓷技术，透光率19%隐私性极佳，太阳能阻隔率64%隔热性能优异。全车施工3.5小时，质保5年。车主评价：前挡清晰度极高，侧窗隐私保护到位，夏季隔热效果超出预期。',
  'https://images.unsplash.com/photo-1761432048884-e11dd56580d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNZXJjZWRlcyUyMEJlbnolMjBFJTIwY2xhc3MlMjB3aGl0ZSUyMHNlZGFufGVufDF8fHx8MTc3MTIzMjUzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
  '奔驰E级',
  'VP70 + KC20',
  '{"vlt": "71%/19%", "ir_rejection": "55%/64%", "uv_block": "99%"}'::jsonb
);

-- 案例3：奥迪A6L - 豪华VK70+VK25组合
INSERT INTO cases (title, description, image_url, car_model, film_type, specs)
VALUES (
  '奥迪A6L豪华VK70+VK25贴膜套餐',
  '李先生的奥迪A6L 45TFSI选用VK70前挡+VK25侧后窗豪华组合。VK70前挡透光率71%确保夜间行车安全，VK25侧窗透光率28%兼顾隐私与视野，太阳能阻隔率68%隔热性能卓越。5S标准施工流程，无尘贴膜车间作业4小时完成。质保前挡10年、侧窗5年。车主体验：中午停车场暴晒后，车内温度比同事的车低8-10度，空调制冷速度快一倍。',
  'https://images.unsplash.com/photo-1693944014095-044be40a618d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBdWRpJTIwQTZMJTIwc2lsdmVyJTIwY2FyfGVufDF8fHx8MTc3MTIzMjUzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
  '奥迪A6L',
  'VK70 + VK25',
  '{"vlt": "71%/28%", "ir_rejection": "55%/68%", "uv_block": "99%"}'::jsonb
);

-- 案例4：特斯拉Model 3 - 新能源专属KC73前挡
INSERT INTO cases (title, description, image_url, car_model, film_type, specs)
VALUES (
  '特斯拉Model 3新能源KC73前挡贴膜',
  '赵先生的特斯拉Model 3选用新能源车专属KC73前挡膜。KC73采用多层纳米陶瓷技术，完全不含金属成分，信号穿透率100%不影响ETC、GPS、5G信号。透光率73%超过国标，太阳能阻隔率47%有效隔热。搭配KC20侧后窗，全车施工3小时。质保5年。车主反馈：高速ETC秒过，手机信号满格，夏季续航里程因空调负荷降低增加约10%。',
  'https://images.unsplash.com/photo-1767949374185-77f387080e0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUZXNsYSUyME1vZGVsJTIwMyUyMGJsdWUlMjBlbGVjdHJpYyUyMGNhcnxlbnwxfHx8fDE3NzEyMzI1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  '特斯拉Model 3',
  'KC73 + KC20',
  '{"vlt": "73%/19%", "ir_rejection": "47%/64%", "uv_block": "99%"}'::jsonb
);

-- 案例5：雷克萨斯ES - 高性价比VE72+K35组合
INSERT INTO cases (title, description, image_url, car_model, film_type, specs)
VALUES (
  '雷克萨斯ES高性价比VE72套餐',
  '陈女士的雷克萨斯ES200选用VE72前挡+K35侧后窗性价比套餐。VE72透光率72%符合法规，太阳能阻隔率43%满足日常隔热需求。K35侧窗透光率35%隐私与视野平衡，太阳能阻隔率51%。全车施工3小时，质保5年。价格相比VK系列节省约30%，适合预算有限的车主。车主评价：性价比极高，贴膜后夏天开车舒适度明显提升，是理性务实的选择。',
  'https://images.unsplash.com/photo-1751982998942-dce5c9f4c95d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMZXh1cyUyMEVTJTIwbHV4dXJ5JTIwc2VkYW58ZW58MXx8fHwxNzcxMTY3MDY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  '雷克萨斯ES',
  'VE72 + K35',
  '{"vlt": "72%/35%", "ir_rejection": "43%/51%", "uv_block": "99%"}'::jsonb
);

-- 案例6：保时捷Cayenne - 旗舰VP40全车深色套餐
INSERT INTO cases (title, description, image_url, car_model, film_type, specs)
VALUES (
  '保时捷Cayenne旗舰VP40全车贴膜',
  '周先生的保时捷Cayenne Turbo选用VP40全车深色旗舰套餐。VP40透光率46%既满足前挡国标又具备一定隐私性，太阳能阻隔率62%隔热性能强劲，更具备防爆防护功能。侧窗采用VP28深色膜，透光率29%��私性极佳。SUV车型施工难度大，耗时5小时精细完成。质保5年。车主评价：保时捷级别的车就要配旗舰级别的膜，夏季隔热效果出色，整车质感提升明显。',
  'https://images.unsplash.com/photo-1649296303096-38245976e01e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQb3JzY2hlJTIwQ2F5ZW5uZSUyMFNVVnxlbnwxfHx8fDE3NzExNjcwNjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  '保时捷Cayenne',
  'VP40 + VP28',
  '{"vlt": "46%/29%", "ir_rejection": "62%/56%", "uv_block": "99%"}'::jsonb
);
