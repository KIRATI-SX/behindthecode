import AdminLayout from "@/components/ui/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Mock data สำหรับแสดงตัวอย่าง
const user = {
  name: "Thompson P.",
  username: "thompson",
  email: "thompson.p@gmail.com",
  bio: "I am a pet enthusiast and freelance writer who specializes in animal behavior and care. With a deep love for cats, I enjoy sharing insights on feline companionship and wellness.\n\nWhen I'm not writing, I spends time volunteering at my local animal shelter, helping cats find loving homes.",
  avatar: "https://github.com/shadcn.png",
};

const ProfileManagementPage = () => {
  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <h1 className="text-headline-3 text-brown-600">Profile</h1>
        <Button className="bg-brand-green hover:bg-brand-green/90 text-white rounded-full px-6 h-10 font-medium shadow-sm">
          Save
        </Button>
      </div>

      {/* Profile Picture */}
      <div className="flex flex-col sm:flex-row items-center gap-8 mb-10">
        <img
          src={user.avatar}
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-sm"
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
          <label className="text-sm font-medium text-brown-600">Email</label>
          <Input
            defaultValue={user.email}
            className="bg-white border-transparent focus-visible:ring-brown-400 h-11 rounded-lg shadow-sm"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-brown-600">
            Bio (max 120 letters)
          </label>
          <textarea
            defaultValue={user.bio}
            maxLength={120}
            rows={5}
            className="w-full bg-white border-transparent focus-visible:ring-brown-400 rounded-lg shadow-sm px-3 py-2.5 text-sm text-brown-600 outline-none focus:ring-2 focus:ring-brown-400/50 resize-none"
          />
        </div>
      </form>
    </AdminLayout>
  );
};

export default ProfileManagementPage;
