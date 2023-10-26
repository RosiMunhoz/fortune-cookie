import React from "react";

function Container({children}: React.PropsWithChildren){
  return( 
    <div className="
    h-screen
    bg-[#fcb2e1]
    flex flex-col
    items-center
    justify-center
    space-y-12"
    >
      {children}
    </div>
  )
}

export default Container;