'use client'; // Don't worry about this line - Next.js needs it!

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import websiteContent from '../../components/content';

// ========================================
// This is the DASHBOARD PAGE!
// ========================================
function DashboardPage() {
  const recentActivities = [
    { id: 1, type: 'Order', action: 'Placed an order for organic tomatoes', time: '2 hours ago', icon: '🛒' },
    { id: 2, type: 'Message', action: 'Received a new message from Farmer Raj', time: '5 hours ago', icon: '✉️' },
    { id: 3, type: 'Update', action: 'Profile information updated', time: '1 day ago', icon: '🔄' },
    { id: 4, type: 'Payment', action: 'Payment received for $120', time: '2 days ago', icon: '💰' },
    { id: 5, type: 'Login', action: 'New user registered', time: '3 days ago', icon: '👤' }
  ];

  const quickActions = [
    { id: 1, title: 'Add Product', icon: '➕', hoverClass: 'hover:border-blue-200 hover:bg-blue-50' },
    { id: 2, title: 'View Orders', icon: '📦', hoverClass: 'hover:border-green-200 hover:bg-green-50' },
    { id: 3, title: 'Messages', icon: '💬', hoverClass: 'hover:border-purple-200 hover:bg-purple-50' },
    { id: 4, title: 'Settings', icon: '⚙️', hoverClass: 'hover:border-orange-200 hover:bg-orange-50' }
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">{websiteContent.dashboardTitle}</h1>
          <p className="text-lg text-gray-700 mb-8">
            This is your dashboard! Here you can manage your account, view your stats, and more.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-medium text-blue-800 mb-2">Total Users</h3>
                  <p className="text-3xl font-bold text-blue-600">1,234</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                  👥
                </div>
              </div>
              <p className="text-xs text-blue-600 mt-3">+12% from last month</p>
            </div>
            <div className="bg-green-50 border border-green-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-medium text-green-800 mb-2">Revenue</h3>
                  <p className="text-3xl font-bold text-green-600">$45,678</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                  💵
                </div>
              </div>
              <p className="text-xs text-green-600 mt-3">+8% from last month</p>
            </div>
            <div className="bg-purple-50 border border-purple-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-medium text-purple-800 mb-2">Orders</h3>
                  <p className="text-3xl font-bold text-purple-600">89</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl">
                  📦
                </div>
              </div>
              <p className="text-xs text-purple-600 mt-3">+5 from last week</p>
            </div>
            <div className="bg-orange-50 border border-orange-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-medium text-orange-800 mb-2">Visitors</h3>
                  <p className="text-3xl font-bold text-orange-600">5,678</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-2xl">
                  👁️
                </div>
              </div>
              <p className="text-xs text-orange-600 mt-3">+18% from last week</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Quick Actions */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="grid grid-cols-2 gap-4">
                  {quickActions.map(action => (
                  <button
                    key={action.id}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 border-dashed border-gray-200 ${action.hoverClass} transition-all`}
                  >
                    <span className="text-3xl mb-2">{action.icon}</span>
                    <span className="text-sm font-medium text-gray-700">{action.title}</span>
                  </button>
                ))}
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="space-y-4">
                  {recentActivities.map(activity => (
                    <div
                      key={activity.id}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg">
                        {activity.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <p className="font-medium text-gray-800">{activity.action}</p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                        <p className="text-sm text-gray-600">{activity.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default DashboardPage;
