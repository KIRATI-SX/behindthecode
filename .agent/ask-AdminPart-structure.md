# AdminPart Design Principles & Structure

เอกสารนี้อธิบายหลักการ Software Engineering ที่ใช้ในการออกแบบหน้าเว็บในส่วน `src/pages/AdminPart` และโครงสร้างไฟล์ที่แนะนำ

## 1. หลักการ Software Engineering Concepts

ในการพัฒนาส่วน Admin เราใช้ 2 หลักการสำคัญ:

### A. Separation of Concerns (SoC) - การแยกส่วนรับผิดชอบ
เราแบ่งหน้าที่ของแต่ละส่วนออกจากกันอย่างชัดเจน:
- **Layout (โครงสร้างหลัก)**: `AdminLayout.tsx` รับผิดชอบเฉพาะส่วนที่เหมือนกันทุกหน้า เช่น Sidebar, Logo, Navigation Link
- **Page Content (เนื้อหาเฉพาะ)**: แต่ละไฟล์ใน `pages/AdminPart/*.tsx` รับผิดชอบเฉพาะเนื้อหาของหน้านั้น ๆ (เช่น ตารางจัดการ Article, แบบฟอร์ม Reset Password) โดยไม่ต้องกังวลเรื่อง Sidebar

### B. DRY (Don't Repeat Yourself) - ไม่เขียนโค้ดซ้ำ
แทนที่จะ copy-paste โค้ด Sidebar ไปใส่ในทุกหน้า เราสร้าง `AdminLayout` ขึ้นมาเป็น Shared Component และให้ทุกหน้าเรียกใช้แทน ทำให้:
- แก้ไข Sidebar ที่เดียว มีผลทุกหน้า
- โค้ดในแต่ละหน้าสั้นลง อ่านง่ายขึ้น (Clean Code)

---

## 2. โครงสร้างไฟล์ที่แนะนำ (File Structure)

ควรแบ่งไฟล์เป็น 3 กลุ่มหลัก ตามหน้าที่:

```
src/
├── components/
│   └── ui/
│       ├── AdminLayout.tsx       <-- [Shared Layout] โครงสร้างหลัก (Sidebar + Main Content Area)
│       ├── Button.tsx            <-- [UI Component] ปุ่มกด
│       └── Input.tsx             <-- [UI Component] ช่องกรอกข้อความ
│
├── pages/
│   └── AdminPart/               <-- [Feature Pages] รวมหน้าของ Admin ทั้งหมด
│       ├── ArticleManagementPage.tsx
│       ├── CategoryManagementPage.tsx
│       ├── ProfileManagementPage.tsx
│       ├── ResetPasswordPage.tsx
│       └── NotificationManagementPage.tsx
│
└── App.tsx                      <-- [Routing] กำหนดเส้นทาง (Route) ว่า URL ไหนไปไฟล์ไหน
```

---

## 3. ตัวอย่างการเขียนโค้ด (Code Implementation)

### A. สร้าง Layout ส่วนกลาง (`AdminLayout.tsx`)
```tsx
// src/components/ui/AdminLayout.tsx
interface AdminLayoutProps {
  children: React.ReactNode; // รับเนื้อหาของแต่ละหน้ามาแสดง
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-brown-100">
      {/* Sidebar - ส่วนที่เหมือนกันทุกหน้า */}
      <aside className="w-64 bg-brown-200">
        {/* Logo & Navigation Links */}
      </aside>

      {/* Main Content - ส่วนเนื้อหาที่จะเปลี่ยนไปตามแต่ละหน้า */}
      <main className="flex-1 p-10">
        {children} 
      </main>
    </div>
  );
};
```

### B. การใช้งานในหน้า Admin (`ArticleManagementPage.tsx`)
```tsx
// src/pages/AdminPart/ArticleManagementPage.tsx
import AdminLayout from "@/components/ui/AdminLayout";

const ArticleManagementPage = () => {
  return (
    // เรียกใช้ Layout คลุมเนื้อหาของหน้านี้
    <AdminLayout>
      <h1>Article Management</h1>
      {/* Table & Content เฉพาะของหน้านี้ */}
    </AdminLayout>
  );
};
```

### C. การกำหนด Route (`App.tsx`)
```tsx
// src/App.tsx
import ArticleManagementPage from "./pages/AdminPart/ArticleManagementPage";

function App() {
  return (
    <Routes>
       {/* กำหนด URL ให้ตรงกับหน้า */}
      <Route path="/admin/article-management" element={<ArticleManagementPage />} />
      <Route path="/admin/category-management" element={<CategoryManagementPage />} />
      {/* ... */}
    </Routes>
  );
}
```

## สรุป
- **Layout**: สร้างเมื่อมี UI ส่วนที่ซ้ำกันหลายหน้า (Header/Sidebar/Footer)
- **Pages**: สร้างไฟล์แยกตาม Feature/Functionality (1 หน้า = 1 ไฟล์)
- **UI Components**: ปุ่ม, Input, Card ที่ใช้ซ้ำ ให้แยกไว้ใน `src/components/ui`
