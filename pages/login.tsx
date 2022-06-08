import { useRouter } from "next/router";
import { FC } from "react";
import { Box } from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Login: FC = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const isActive = (pathname: string): boolean => {
    return router.pathname === pathname;
  };
  return (
    <Box>
      <h1>Sign in page</h1>
      <Link href="/">
        <a className="bold" data-active={isActive("/")}>
          Feed
        </a>
      </Link>
      {!session && (
        <Link href="/api/auth/signin">
          <a data-active={isActive("/signup")}>Log in</a>
        </Link>
      )}
      {session && (
        <div>
          A session!
          <button onClick={() => signOut()}>
            <a>Log out</a>
          </button>
        </div>
      )}
    </Box>
  );
};

export default Login;
