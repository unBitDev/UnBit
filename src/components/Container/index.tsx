import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
}

const Container = ({children}: ContainerProps) => {
  return ( 
    <div className="grid justify-items-center w-full my-5">
      <div className="w-2/3 max-md:w-10/12">
        {children}
      </div>
    </div>
  )
}

export default Container;
