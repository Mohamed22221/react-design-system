import  { useEffect, useState, type ReactNode } from "react";
import axios from "axios";

interface ContainerUserProps<T> {
  render: (resource: T | null ) => ReactNode; 
  resourceUrl: string;
}

const RenderContainer = <T,>({ resourceUrl, render }: ContainerUserProps<T>) => {
  const [resource, setResource] = useState<T | null>(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get<T>(`/api/${resourceUrl}`);
      setResource(response.data);

    })();
  }, [resourceUrl]);
  //  if ( !resource) return null;
  return render(resource);
};

export default RenderContainer;
