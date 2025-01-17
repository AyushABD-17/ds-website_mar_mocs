"use client";
import React, { FC, useState } from "react";
import Heading from "../../utils/Heading";
import Protected from "../../hooks/useProtected";
import { useSelector } from "react-redux";
import Moocs from "@/app/components/student/moocs/Moocs";
import Header from "@/app/components/Header";

type Props = {};

const page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("");
  const { user } = useSelector((state: any) => state.auth);
  return (
    <div>
        <Heading
          title="profile"
          description="Notematesync description"
          keywords="notes,books,notes pdf"
        />
        <Header
          open={open}
          setOpen={setOpen}
          activeItem={activeItem}
          setRoute={setRoute}
          route={route}
        />
        <Moocs />
    </div>
  );
};

export default page;
