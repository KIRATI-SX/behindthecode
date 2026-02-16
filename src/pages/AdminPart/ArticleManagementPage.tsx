import AdminLayout from "@/components/ui/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Pencil, Trash2, ChevronDown } from "lucide-react";

// Mock data สำหรับแสดงตัวอย่าง
const mockArticles = [
  {
    id: 1,
    title:
      "Understanding Cat Behavior: Why Your Feline Friend Acts the Way They D...",
    category: "Cat",
    status: "Published",
  },
  {
    id: 2,
    title: "The Fascinating World of Cats: Why We Love Our Furry Friends",
    category: "Cat",
    status: "Published",
  },
  {
    id: 3,
    title: "Finding Motivation: How to Stay Inspired Through Life's Challenges",
    category: "General",
    status: "Published",
  },
  {
    id: 4,
    title:
      "The Science of the Cat's Purr: How It Benefits Cats and Humans Alike",
    category: "Cat",
    status: "Published",
  },
  {
    id: 5,
    title: "Top 10 Health Tips to Keep Your Cat Happy and Healthy",
    category: "Cat",
    status: "Published",
  },
  {
    id: 6,
    title: "Unlocking Creativity: Simple Habits to Spark Inspiration Daily",
    category: "Inspiration",
    status: "Published",
  },
];

function ArticleManagementPage() {
  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <h1 className="text-headline-3 text-brown-600">Article management</h1>
        <Button className="bg-brand-green hover:bg-brand-green/90 text-white rounded-full px-6 h-10 font-medium shadow-sm">
          <Plus size={18} />
          Create article
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-brown-400"
          />
          <Input
            placeholder="Search..."
            className="bg-white border-brown-300 pl-9 h-10 rounded-lg shadow-sm focus-visible:ring-brown-400"
          />
        </div>

        <div className="flex gap-3 ml-auto">
          {/* Status dropdown */}
          <button className="flex items-center gap-2 bg-white border border-brown-300 rounded-lg px-4 h-10 text-sm text-brown-600 font-medium shadow-sm hover:bg-brown-100 transition-colors min-w-[130px] justify-between">
            Status
            <ChevronDown size={16} className="text-brown-400" />
          </button>

          {/* Category dropdown */}
          <button className="flex items-center gap-2 bg-white border border-brown-300 rounded-lg px-4 h-10 text-sm text-brown-600 font-medium shadow-sm hover:bg-brown-100 transition-colors min-w-[130px] justify-between">
            Category
            <ChevronDown size={16} className="text-brown-400" />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-brown-300/50 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-brown-200/60">
              <th className="text-left px-6 py-3 text-brown-600 font-semibold">
                Article title
              </th>
              <th className="text-left px-6 py-3 text-brown-600 font-semibold w-[120px]">
                Category
              </th>
              <th className="text-left px-6 py-3 text-brown-600 font-semibold w-[120px]">
                Status
              </th>
              <th className="w-[100px] px-6 py-3" />
            </tr>
          </thead>
          <tbody>
            {mockArticles.map((article) => (
              <tr
                key={article.id}
                className="border-t border-brown-300/30 hover:bg-brown-100/40 transition-colors"
              >
                <td className="px-6 py-4 text-brown-600 font-medium max-w-0">
                  <span className="block truncate">{article.title}</span>
                </td>
                <td className="px-6 py-4 text-brown-500">{article.category}</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 text-brand-green font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                    {article.status}
                  </span>
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
}

export default ArticleManagementPage;
