import React, { useEffect } from "react";
import RightSide from "./../components/rightSide/RightSide";
import TopNav from "./../components/layout/TopNav";
import MiddlleNav from "../components/layout/MiddlleNav/MiddlleNav";
import { Outlet, useLocation } from "react-router-dom";
import "../components/leftSide/LeftSide.scss";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  // هوک useTranslation را فراخوانی می‌کنیم تا به زبان دسترسی داشته باشیم
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    // از location.pathname برای دریافت آدرس فعلی استفاده می‌کنیم
    const id = location.pathname.substring(1);
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname]); // این هوک هر بار که آدرس تغییر کند، اجرا می‌شود

  return (
    <>
      <div className="container-fluid">
        <div className="row m-0 justify-content-center">
          <div className="col-12 p-0">
            <TopNav />
            <div className="row m-0 p-0">
              <RightSide />
              <div className="col-xl-9">
                <MiddlleNav />

                <section className="leftSide">
                  <div className="row mb-3">
                    <div className="col-12">
                      <div className="mainContent">
                        <Outlet />
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
