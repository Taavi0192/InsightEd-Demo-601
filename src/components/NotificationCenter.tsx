"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

type Notification = {
  id: string;
  type: string;
  message: string;
  postId?: string;
  createdAt: string;
};

const NotificationCenter = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get("/api/notifications");
        setNotifications(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching notifications:", error);
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  const clearAllNotifications = async () => {
    try {
      await axios.delete("/api/notifications/clear");
      setNotifications([]);
    } catch (error) {
      console.error("Error clearing notifications:", error);
    }
  };

  const deleteNotification = async (id: string) => {
    try {
      await axios.delete(`/api/notifications/${id}/delete`);
      setNotifications((prev) =>
        prev.filter((notification) => notification.id !== id)
      );
    } catch (error) {
      console.error("Error deleting notification:", error);
    }
  };

  if (loading) return <p>Loading notifications...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-1">Notifications</h1>
      <button
        onClick={clearAllNotifications}
        className="TaaviButton mb-4"
      >
        Clear All Notifications
      </button>
      {notifications.length === 0 ? (
        <p>No notifications.</p>
      ) : (
        <ul className="space-y-4">
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className="p-4 border rounded shadow hover:shadow-lg flex justify-between items-center"
            >
              <Link href={`/profile/${notification.postId}`} className="text-white-500 hover:underline">
                {notification.message}
              </Link>
              <button
                onClick={() => deleteNotification(notification.id)}
                className="text-white-500 hover:underline"
              >
                X
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationCenter;
