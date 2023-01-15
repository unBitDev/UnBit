import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return ( 
    <div className="container mx-auto w-2/3 max-md:w-10/12 max-lg:w-4/5 my-5">
      <div className="w-full">
        {children}
      </div>
    </div>
  )
}

export default Container;
