import { useEffect, useState } from "react";
import { client } from "../lib/directus";

export function useDirectusAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await client.refresh(); // for session mode
        setIsLoggedIn(!!user);
      } catch (err) {
        setIsLoggedIn(false);
      }
    };

    checkAuth();
  }, []);

  return { isLoggedIn };
}
