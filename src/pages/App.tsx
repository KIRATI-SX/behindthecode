import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage.tsx";
import ViewPostPage from "./ViewPostPage/ViewPostPage.tsx";
import NotFoundPage from "./NotFoundPage/NotFoundPage.tsx";
import { Toaster } from "@/components/ui/sonner";
import HealthTestPage from "../pages/HealthTestPage/HealthTestPage.tsx";
import LoginPage from "./LoginPage/LoginPage.tsx";
import SettingProfilePage from "../pages/settings/settingProfilePage.tsx";
import SettingSecurityPage from "./settings/settingSecurityPage.tsx";
import ArticleManagementPage from "./AdminPart/ArticleManagementPage.tsx";
import CategoryManagementPage from "./AdminPart/CategoryManagementPage.tsx";
import ProfileManagementPage from "./AdminPart/ProfileManagementPage.tsx";
import NotificationManagementPage from "./AdminPart/NotificationMagementPage.tsx";
import ResetPasswordPage from "./AdminPart/ResetPasswordPae.tsx";
import SignupPage from "./Signup/SignupPage.tsx";





function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:postId" element={<ViewPostPage />} />
        <Route path="/health" element={<HealthTestPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<SettingProfilePage />} />
        <Route path="/secrity" element={<SettingSecurityPage />} />
        <Route
          path="/admin/article-management"
          element={<ArticleManagementPage />}
        />
        <Route
          path="/admin/category-management"
          element={<CategoryManagementPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/admin/profile" element={<ProfileManagementPage />} />
        <Route
          path="/admin/notification-management"
          element={<NotificationManagementPage />}
        />
        <Route path="/admin/reset-password" element={<ResetPasswordPage />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
