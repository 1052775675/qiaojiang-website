export function Footer() {
  return (
    <footer className="bg-black border-t border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center text-gray-500 text-sm">
          <p className="mb-2">
            © 2026 <span className="text-[#D4AF37]">开原市巧匠美车工作室</span> 版权所有
          </p>
          <p className="text-gray-600 text-xs mb-2">
            V-KOOL官方授权经销商 · 授权编号：VKWF0286 · 有效期至2026年12月31日
          </p>
          <p className="text-gray-600 text-xs mb-2">
            联系电话：133-5897-1515 · 邮箱：1052775675@qq.com
          </p>
          <p className="text-gray-600 text-xs mb-2">
            13年专业服务 · 10000+台车辆施工经验 · 返工率&lt;1% · 年检通过率100%
          </p>
          <p className="text-gray-600 text-xs">
            汽车装饰 · 美容养护 · 隔热贴膜 · 漆面保护
          </p>
          <p className="text-gray-700 text-xs mt-2">
            统一社会信用代码：92211282MA0XME1F4Q · 经营者：李凤君
          </p>
          <button
            onClick={() => {
              window.location.hash = '#/admin';
            }}
            className="mt-4 text-gray-700 hover:text-[#D4AF37] text-xs transition-colors duration-300"
          >
            管理员登录
          </button>
        </div>
      </div>
    </footer>
  );
}