export function Footer() {
  return (
    <footer className="bg-black/60 backdrop-blur-xl border-t border-[#D4AF37]/10 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-[#D4AF37] mb-2">开原市巧匠美车工作室</p>
            <p className="text-gray-400 text-sm">V-KOOL官方授权 · 授权编号：VKWF0286</p>
          </div>
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-1">联系电话：133-5897-1515</p>
            <p className="text-gray-400 text-sm mb-1">邮箱：1052775675@qq.com</p>
            <p className="text-gray-500 text-xs">周一至周日 9:00 - 18:00</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">13年专业服务 · 10000+台车辆施工</p>
            <p className="text-gray-500 text-xs mt-1">汽车装饰 · 美容养护 · 隔热贴膜 · 漆面保护</p>
          </div>
        </div>
        <div className="text-center pt-6 border-t border-white/5">
          <p className="text-gray-600 text-xs">
            © 2026 巧匠美车工作室 版权所有 · 统一社会信用代码：92211282MA0XME1F4Q
          </p>
          <button
            onClick={() => { window.location.hash = '#/admin'; }}
            className="mt-3 text-gray-700 hover:text-gray-500 text-xs transition-colors"
          >
            管理员入口
          </button>
        </div>
      </div>
    </footer>
  );
}