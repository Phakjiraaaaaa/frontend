"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Navigation() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const baseColor = "#5a5a5a";
  const hoverColor = "#7d7dff";

  const navLinkStyle = {
    fontSize: "1rem",
    color: baseColor,
    transition: "all 0.3s ease",
    textDecoration: "none",
    display: "inline-block",
  };

  // ลบ type annotation ออก
  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "scale(1.1)";
    e.currentTarget.style.color = hoverColor;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "scale(1.0)";
    e.currentTarget.style.color = baseColor;
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link
          href="/"
          className="navbar-brand"
          style={{ fontSize: "1.25rem", color: baseColor }}
        >
          Phakjiraaaaa
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {[
              { href: "/", label: "หน้าแรก" },
              { href: "/about", label: "เกี่ยวกับ" },
              { href: "/service", label: "บริการ" },
              { href: "/contact", label: "ติดต่อ" },
            ].map(({ href, label }) => (
              <li className="nav-item" key={href}>
                <Link
                  href={href}
                  className="nav-link"
                  style={navLinkStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
