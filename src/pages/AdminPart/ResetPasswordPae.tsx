import AdminLayout from "@/components/ui/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ResetPasswordPage = () => {
  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <h1 className="text-headline-3 text-brown-600">Reset password</h1>
        <Button className="bg-brown-600 hover:bg-brown-500 text-white rounded-full px-6 h-10 font-medium shadow-sm">
          Reset password
        </Button>
      </div>

      {/* Form */}
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
      </form>
    </AdminLayout>
  );
};

export default ResetPasswordPage;
