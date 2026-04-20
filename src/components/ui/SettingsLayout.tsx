import NavBar from "@/components/ui/NavBar";
import { User, Lock } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

// Mock data — จะถูกแทนที่ด้วย API จริงในภายหลัง
const user = {
  name: "Moodeng ja",
  avatar: "https://github.com/shadcn.png",
};

const navItems = [
  { to: "/profile", label: "Profile", icon: User },
  { to: "/secrity", label: "Reset password", icon: Lock },
];

interface SettingsLayoutProps {
  /** Page title shown next to the username in the header */
  title: string;
  children: React.ReactNode;
}

const SettingsLayout: React.FC<SettingsLayoutProps> = ({ title, children }) => {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen bg-brown-100 font-sans text-brown-600">
      <NavBar />

      <div className="max-w-7xl mx-auto px-4 md:px-28.5 py-10 flex flex-col lg:flex-row gap-12">
        {/* ──── Sidebar ──── */}
        <aside className="w-full lg:w-64 flex flex-col gap-8">
          {/* User Info + Page Title */}
          <div className="flex items-center gap-4">
            <img
              src={user.avatar}
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
            />
            <div className="flex flex-col">
              <h2 className="text-lg font-bold text-brown-600 leading-tight">
                {user.name}
              </h2>
              <span className="text-sm font-medium opacity-60">{title}</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2">
            {navItems.map(({ to, label, icon: Icon }) => {
              const isActive = pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`flex items-center gap-3 px-0 py-2 transition-colors ${
                    isActive
                      ? "text-brown-600 font-semibold"
                      : "text-brown-400 font-medium hover:text-brown-600"
                  }`}
                >
                  <Icon size={20} />
                  {label}
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* ──── Main Content ──── */}
        <main className="flex-1 bg-brown-200 rounded-[32px] p-8 md:p-12 shadow-sm">
          {children}
        </main>
      </div>
    </div>
  );
};

export default SettingsLayout;
