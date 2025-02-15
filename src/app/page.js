'use client'
import Image from "next/image";
import { useState } from "react";
// import { useRouter } from "next/navigation";
import { signInWithGoogle } from "../../firebase";



export default function Home() {

  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  // const { setAccessToken } = useAuth(); // 전역 상태에 토큰 저장

  const handleGoogleLogin = async () => {
    try {
      const token = await signInWithGoogle();

      if (!token) throw new Error("Firebase 토큰을 가져오지 못했습니다.");

      if (token) {
        setToken(token);
      }

    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <button onClick={handleGoogleLogin}>
        google Login
      </button>
    </div>
  );
}
