import { ASSETS } from "@/config/assets.config";
import {
  LayoutDashboard,
  FolderOpen,
  User,
  Bell,
  Lock,
  ExternalLink,
  LogOut,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const topNavItems = [
  {
    to: "/admin/article-management",
    label: "Article management",
    icon: LayoutDashboard,
  },
  {
    to: "/admin/category-management",
    label: "Category management",
    icon: FolderOpen,
  },
  { to: "/admin/profile", label: "Profile", icon: User },
  { to: "/admin/notification-management", label: "Notification", icon: Bell },
  { to: "/admin/reset-password", label: "Reset password", icon: Lock },
];

const bottomNavItems = [{ to: "/", label: "hh. website", icon: ExternalLink }];

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen bg-brown-100 font-sans text-brown-600">
      {/* ──── Sidebar ──── */}
      <aside className="hidden lg:flex flex-col w-64 bg-brown-200 border-r border-brown-300/50 px-6 py-8">
        {/* Logo */}
        <div className="mb-10">
          <Link to="/">
            <img src={ASSETS.logo} alt="logo" className="h-8" />
          </Link>
          <p className="text-brand-orange text-sm font-semibold mt-1">
            Admin panel
          </p>
        </div>

        {/* Top Navigation */}
        <nav className="flex flex-col gap-1 flex-1">
          {topNavItems.map(({ to, label, icon: Icon }) => {
            const isActive = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "bg-brown-100 text-brown-600 font-semibold"
                    : "text-brown-400 font-medium hover:bg-brown-100/60 hover:text-brown-600"
                }`}
              >
                <Icon size={18} />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Navigation */}
        <div className="flex flex-col gap-1 border-t border-brown-300/50 pt-4">
          {bottomNavItems.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-brown-400 font-medium hover:bg-brown-100/60 hover:text-brown-600 transition-colors"
            >
              <Icon size={18} />
              {label}
            </Link>
          ))}
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-brown-400 font-medium hover:bg-brown-100/60 hover:text-brown-600 transition-colors w-full text-left">
            <LogOut size={18} />
            Log out
          </button>
        </div>
      </aside>

      {/* ──── Main Content ──── */}
      <main className="flex-1 p-6 md:p-10 overflow-auto">{children}</main>
    </div>
  );
};

export default AdminLayout;
