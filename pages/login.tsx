import { useRouter } from "next/router";
import { FC } from "react";
import { signOut, useSession } from "next-auth/react";

const Login: FC = () => {
  const { data: session, status } = useSession();
  return <div>Sign in page</div>;
};

export default Login;
