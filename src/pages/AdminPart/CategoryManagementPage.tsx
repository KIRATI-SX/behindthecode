import AdminLayout from "@/components/ui/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Pencil, Trash2 } from "lucide-react";

// Mock data สำหรับแสดงตัวอย่าง
const mockCategories = [
  { id: 1, name: "Cat" },
  { id: 2, name: "General" },
  { id: 3, name: "Inspiration" },
];

const CategoryManagementPage = () => {
  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <h1 className="text-headline-3 text-brown-600">Category management</h1>
        <Button className="bg-brand-green hover:bg-brand-green/90 text-white rounded-full px-6 h-10 font-medium shadow-sm">
          <Plus size={18} />
          Create category
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-sm mb-6">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-brown-400"
        />
        <Input
          placeholder="Search..."
          className="bg-white border-brown-300 pl-9 h-10 rounded-lg shadow-sm focus-visible:ring-brown-400"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-brown-300/50 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-brown-200/60">
              <th className="text-left px-6 py-3 text-brown-600 font-semibold">
                Category
              </th>
              <th className="w-[100px] px-6 py-3" />
            </tr>
          </thead>
          <tbody>
            {mockCategories.map((category) => (
              <tr
                key={category.id}
                className="border-t border-brown-300/30 hover:bg-brown-100/40 transition-colors"
              >
                <td className="px-6 py-4 text-brown-600 font-medium">
                  {category.name}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 justify-end">
                    <button className="p-1.5 rounded-md text-brown-400 hover:text-brown-600 hover:bg-brown-200 transition-colors">
                      <Pencil size={16} />
                    </button>
                    <button className="p-1.5 rounded-md text-brown-400 hover:text-brand-red hover:bg-red-50 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default CategoryManagementPage;
