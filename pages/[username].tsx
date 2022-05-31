import prisma from "../lib/prisma";
import { GetServerSideProps } from "next";
import { FC } from "react";
import User from "../models/User";
import { propNames } from "@chakra-ui/react";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const user = await prisma.user.findUnique({
    where: {
      username: String(params?.username),
    },
    select: {
      username: true,
      email: true,
    },
  });

  return {
    props: {
      user,
    },
  };
};
export interface UserProfileProps {
  user: User;
}

const UserProfile: FC<UserProfileProps> = ({ user }) => {
  console.log(user);
  return <div>{`my username is ${user?.username}`}</div>;
};

export default UserProfile;
