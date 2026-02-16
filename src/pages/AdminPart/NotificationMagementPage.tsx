import AdminLayout from "@/components/ui/AdminLayout";

// Mock data สำหรับแสดงตัวอย่าง
const mockNotifications = [
  {
    id: 1,
    avatar: "https://github.com/shadcn.png",
    userName: "Jacob Lash",
    action: "Commented on your article:",
    articleTitle:
      "The Fascinating World of Cats: Why We Love Our Furry Friends",
    quote:
      '"I loved this article! It really explains why my cat is so independent yet loving. The purring section was super interesting."',
    timeAgo: "4 hours ago",
  },
  {
    id: 2,
    avatar: "https://github.com/shadcn.png",
    userName: "Jacob Lash",
    action: "liked your article:",
    articleTitle:
      "The Fascinating World of Cats: Why We Love Our Furry Friends",
    quote: null,
    timeAgo: "4 hours ago",
  },
];

const NotificationManagementPage = () => {
  return (
    <AdminLayout>
      {/* Header */}
      <h1 className="text-headline-3 text-brown-600 mb-8">Notification</h1>

      {/* Notification List */}
      <div className="flex flex-col divide-y divide-brown-300/40">
        {mockNotifications.map((notif) => (
          <div
            key={notif.id}
            className="flex items-start gap-4 py-6 first:pt-0"
          >
            {/* Avatar */}
            <img
              src={notif.avatar}
              alt={notif.userName}
              className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm flex-shrink-0 mt-0.5"
            />

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="text-sm text-brown-600 leading-relaxed">
                <span className="font-bold">{notif.userName}</span>{" "}
                {notif.action} {notif.articleTitle}
              </p>
              {notif.quote && (
                <p className="text-sm text-brown-400 mt-1 leading-relaxed">
                  {notif.quote}
                </p>
              )}
              <p className="text-xs text-brand-orange font-medium mt-1.5">
                {notif.timeAgo}
              </p>
            </div>

            {/* View Link */}
            <button className="text-sm text-brown-600 font-medium hover:underline flex-shrink-0 mt-0.5">
              View
            </button>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
};

export default NotificationManagementPage;
