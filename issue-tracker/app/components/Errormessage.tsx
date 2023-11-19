import React, { PropsWithChildren, ReactNode }  from 'react'




const Errormessage = ({ children }: PropsWithChildren) => {

    if (!children) return null;
  return (
      <Text color="red" as="p">{children}</Text>
  )
}

export default Errormessage