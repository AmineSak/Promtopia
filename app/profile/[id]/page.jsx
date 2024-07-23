"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
  const { data: session } = useSession();
  const [posts, setposts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/users/${params.id}/posts`);
      const data = await res.json();

      setposts(data);
    };

    if (session?.user.id) fetchPosts();
  }, []);

  return (
    <Profile
      name={posts[0]?.creator.username}
      desc={`Welcome to ${posts[0]?.creator.username}'s profile page`}
      data={posts}
    />
  );
};

export default UserProfile;
