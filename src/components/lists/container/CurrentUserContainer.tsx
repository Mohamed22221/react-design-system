import React, { useEffect, useState, type ReactNode } from "react";
import type { User } from "../types/User";
import axios from "axios";



interface ContainerUserProps {
  children: ReactNode;
}

const CurrentUserContainer = ({ children }: ContainerUserProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/current-user");
      setUser(response.data);
    })();
  }, []);
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement<{ user?: User | null }>(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};

export default CurrentUserContainer;
