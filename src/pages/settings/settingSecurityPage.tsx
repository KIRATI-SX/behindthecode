import SettingsLayout from "@/components/ui/SettingsLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SettingSecurityPage = () => {
  return (
    <SettingsLayout title="Reset password">
      <form className="space-y-6 max-w-lg" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2">
          <label className="text-sm font-medium text-brown-600">
            Current password
          </label>
          <Input
            type="password"
            placeholder="Current password"
            className="bg-white border-transparent focus-visible:ring-brown-400 h-11 rounded-lg shadow-sm"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-brown-600">
            New password
          </label>
          <Input
            type="password"
            placeholder="New password"
            className="bg-white border-transparent focus-visible:ring-brown-400 h-11 rounded-lg shadow-sm"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-brown-600">
            Confirm new password
          </label>
          <Input
            type="password"
            placeholder="Confirm new password"
            className="bg-white border-transparent focus-visible:ring-brown-400 h-11 rounded-lg shadow-sm"
          />
        </div>

        <div className="pt-6">
          <Button className="bg-brown-600 hover:bg-brown-500 text-white rounded-full px-8 h-11 font-medium shadow-md transition-all hover:scale-105">
            Reset password
          </Button>
        </div>
      </form>
    </SettingsLayout>
  );
};

export default SettingSecurityPage;
