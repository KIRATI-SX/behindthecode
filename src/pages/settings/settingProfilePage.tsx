import SettingsLayout from "@/components/ui/SettingsLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Mock data — จะถูกแทนที่ด้วย API จริงในภายหลัง
const user = {
  name: "Moodeng ja",
  username: "moodeng.cute",
  email: "moodeng.cute@gmail.com",
  avatar: "https://github.com/shadcn.png",
};

const SettingProfilePage = () => {
  return (
    <SettingsLayout title="Profile">
      {/* Profile Picture Section */}
      <div className="flex flex-col sm:flex-row items-center sm:items-center gap-8 mb-10 border-b border-brown-300/50 pb-10">
        <img
          src={user.avatar}
          alt="Profile Large"
          className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-sm"
        />
        <Button
          variant="outline"
          className="bg-transparent border-brown-500 text-brown-600 hover:bg-brown-100 rounded-full px-6 h-10 font-medium"
        >
          Upload profile picture
        </Button>
      </div>

      {/* Form */}
      <form className="space-y-6 max-w-lg" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2">
          <label className="text-sm font-medium text-brown-600">Name</label>
          <Input
            defaultValue={user.name}
            className="bg-white border-transparent focus-visible:ring-brown-400 h-11 rounded-lg shadow-sm"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-brown-600">Username</label>
          <Input
            defaultValue={user.username}
            className="bg-white border-transparent focus-visible:ring-brown-400 h-11 rounded-lg shadow-sm"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-brown-400">Email</label>
          <Input
            defaultValue={user.email}
            disabled
            className="bg-transparent border-transparent text-brown-400 h-11 rounded-lg px-0 shadow-none disabled:opacity-100"
          />
        </div>

        <div className="pt-6">
          <Button className="bg-brown-600 hover:bg-brown-500 text-white rounded-full px-8 h-11 font-medium shadow-md transition-all hover:scale-105">
            Save
          </Button>
        </div>
      </form>
    </SettingsLayout>
  );
};

export default SettingProfilePage;
