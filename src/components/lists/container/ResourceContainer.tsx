import React, { useEffect, useState, type ReactNode } from "react";
import axios from "axios";



interface ContainerUserProps {
  children: ReactNode;
  resourceUrl: string
  resourceName: string
}

const ResourceContainer = ({ resourceUrl , resourceName, children }: ContainerUserProps) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`/api/${resourceUrl}`);
      setResource(response.data);
      console.log("resource", response.data);
    })();
  }, [resourceUrl]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName] : resource });
        }
        return child;
      })}
    </>
  );
};

export default ResourceContainer;
