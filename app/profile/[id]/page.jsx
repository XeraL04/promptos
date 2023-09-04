"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();

      setUserPosts(data);
    };

    if (params?.id) fetchPosts();
  }, [params.id]);

  return (
    <>
      <Profile
        name={userName}
        desc={`Bienvenue sur le profile de ${userName}. Explorez les idées de ${userName} et inspirez vous de ces incroyable idées.`}
        data={userPosts}
        className="static"
      />

      <div className="relative w-full max-w-lg ">
        <div className="absolute -bottom-4 right-2 w-80 h-80 bg-hight-blue rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
        <div className="absolute -bottom-4 -left-0 w-80 h-80 bg-midle-blue rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
        <div className="absolute -bottom-36 left-16 w-80 h-80 bg-light-blue rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
      </div>
    </>
  );
};

export default UserProfile;
