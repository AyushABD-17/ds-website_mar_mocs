import { useLogOutQuery } from "@/redux/features/auth/authApi";
import { Tooltip } from "@nextui-org/react";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";

type Props = {};

const TopHeader = (props: Props) => {
  const { user } = useSelector((state: any) => state.auth);
  const [logout, setLogout] =useState(false);
  const {} = useLogOutQuery(undefined,{
    skip: !logout ? true : false,
  })
  const logOutHandler = async () => {
    setLogout(true);
    await signOut();
  }

  return (
    <div className="flex justify-between flex-wrap my-3 px-3 mx-3">
      <h1 className="font-medium text-slate-600">Student dashboard</h1>
      <div className="flex space-x-3 ">
        <span className="font-medium">
          Welcome : <span className="uppercase">{user.name}</span>
        </span>
        <Tooltip
          showArrow
          placement="bottom"
          content="Logout"
          classNames={{
            base: [
              // arrow color
              "before:bg-neutral-400 dark:before:bg-white",
            ],
            content: [
              "py-2 px-4 shadow-xl",
              "bg-slate-800 text-white",
            ],
          }}
        >
          <div className="cursor-pointer" onClick={() => logOutHandler()}>
            <svg
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.91806 21.9874C9.15358 21.9286 7.94004 21.6613 7.08468 21.3566C6.63562 21.1962 5.45415 20.6189 5.14408 20.405C5.03182 20.3302 4.89282 20.25 4.83402 20.2339C4.78056 20.2126 4.73244 20.1751 4.73244 20.1484C4.73244 20.1217 4.70571 20.1003 4.67364 20.1003C4.64156 20.1003 4.5881 20.0682 4.54533 20.0361C4.41703 19.9132 4.22992 19.7635 4.04815 19.6405C3.79155 19.4641 3.0538 18.7531 2.6475 18.2827C2.54593 18.165 2.39624 17.994 2.31071 17.9031C2.23052 17.8069 2.16637 17.716 2.16637 17.6999C2.16637 17.6839 2.11291 17.6091 2.04875 17.5342C1.66919 17.1172 0.920748 15.7059 0.616027 14.8345C0.386149 14.1716 0.161617 13.2788 0.0760815 12.6694C-0.0361844 11.9102 -0.0201464 9.96429 0.0974655 9.19447C0.300613 7.89539 0.819175 6.45198 1.46069 5.38278C1.59969 5.1529 1.73869 4.92302 1.76542 4.86956C1.79749 4.82145 2.01668 4.52742 2.25725 4.2227C2.75977 3.57049 3.27833 3.02519 3.77016 2.61355C3.96262 2.45317 4.12835 2.31418 4.14438 2.29814C4.16042 2.2821 4.25665 2.20726 4.35822 2.13776C4.4598 2.06291 4.5881 1.96669 4.64156 1.91857C4.68967 1.87046 4.80194 1.80096 4.88213 1.75819C4.96232 1.71542 5.17081 1.59781 5.34723 1.49089C6.08498 1.04718 7.13279 0.608804 7.99885 0.378927C9.6561 -0.0594449 11.6929 -0.123597 13.3128 0.218547C13.9596 0.352197 14.5423 0.517922 14.831 0.646226C14.9593 0.699686 15.0823 0.7478 15.109 0.7478C15.1357 0.7478 15.4619 0.897488 15.8361 1.07925C16.4776 1.38397 17.3704 1.92926 17.6644 2.18587C17.7339 2.25002 17.8087 2.29814 17.8301 2.29814C17.8462 2.29814 17.9959 2.4211 18.1562 2.57078C18.3113 2.71513 18.5251 2.90224 18.6213 2.97708C18.7603 3.084 18.7924 3.1535 18.7924 3.30853C18.7924 3.48495 18.7336 3.55979 18.0279 4.26546C17.3223 4.97114 17.2528 5.0246 17.0657 5.0246C16.8678 5.0246 16.7609 4.96044 16.4295 4.64503C16.1889 4.41515 15.5314 3.93936 15.1304 3.70948C14.7295 3.4796 14.1842 3.20696 14.12 3.20696C14.0933 3.20696 14.0024 3.17488 13.9115 3.13211C13.5373 2.97708 13.4304 2.93966 13.0027 2.82739C10.5756 2.20191 7.95608 2.7472 5.90856 4.30823C5.27773 4.78937 4.24061 5.90669 3.90381 6.47336C3.38525 7.3501 2.96826 8.30704 2.79719 9.00736C2.39624 10.6646 2.46574 12.1668 3.02172 13.7118C3.31575 14.5405 3.67394 15.2301 4.18715 15.9465C4.5186 16.4116 5.28308 17.2242 5.66799 17.5075C5.7856 17.5984 5.91391 17.6999 5.95133 17.7374C5.98875 17.7694 6.04221 17.8015 6.05825 17.8015C6.07963 17.8015 6.15448 17.855 6.22932 17.9245C6.52335 18.1918 7.51236 18.7103 8.19665 18.9509C10.0998 19.6192 11.7571 19.6299 13.6549 18.9937C14.676 18.6515 15.8414 17.9512 16.6273 17.2028C16.7984 17.0424 16.8839 16.9996 17.0496 16.9996C17.2474 16.9996 17.3009 17.0424 17.9959 17.7427C18.7069 18.4484 18.7389 18.4912 18.7389 18.6996C18.7389 18.8921 18.7069 18.9402 18.4556 19.1701C18.3006 19.3144 18.0279 19.539 17.8515 19.6726C17.6804 19.8063 17.5254 19.9292 17.5094 19.9453C17.3971 20.0736 16.515 20.6028 15.9163 20.9022C14.3071 21.6988 12.8263 22.0355 11.0193 22.0142C10.5435 22.0088 10.0517 21.9981 9.91806 21.9874Z"
                fill="#DC2626"
              />
              <path
                d="M15.8949 15.3744C15.2374 14.7062 15.1572 14.6046 15.1572 14.4442C15.1572 14.2785 15.2534 14.1609 16.1034 13.2895L17.0443 12.3219L12.281 12.3058L7.51775 12.2951L7.48567 12.1187C7.46964 12.0278 7.45894 11.4558 7.46964 10.8517L7.48567 9.75579L12.2864 9.72906L17.0817 9.70233L16.0927 8.71332C15.1893 7.80985 15.1037 7.70827 15.1037 7.5372C15.0984 7.36613 15.1625 7.29129 15.8628 6.61769C16.5739 5.9334 16.6434 5.87994 16.8358 5.87994C17.039 5.87994 17.0978 5.93875 19.5195 8.35514C21.8236 10.6593 22 10.8464 22 11.0174C22 11.1885 21.8236 11.3756 19.5249 13.6744C17.055 16.1443 17.055 16.1443 16.8412 16.1336C16.638 16.1282 16.5846 16.0801 15.8949 15.3744Z"
                fill="#DC2626"
              />
            </svg>
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default TopHeader;
