"use client"

import { useState } from "react"
import "../../../src/App.css"
import DriveEtaOutlined from "@mui/icons-material/DriveEtaOutlined"
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined"
import {
  Dashboard,
  People,
  DirectionsCar,
  Healing,
  Build,
  DesignServices,
  Assignment,
  CalendarMonth,
  ExpandLess,
  ExpandMore,
  AttachMoney,
  Construction,
  Group,
  Settings,
  HelpOutline,
  CreditCard,
  ListAlt,
  Security,
  Email,
  Person,
  Palette,
  Language,
  Notifications,
  Business,
  Description,
  AccessTime,
  TrendingUp,
  Assessment,
  BarChart,
  ShowChart,
  Inventory,
  Chat,
  Receipt,
  LocalOffer,
  LibraryBooks,
  TrackChanges,
  LocalShipping,
  Badge,
  BeachAccess,
  Work,
  CarRepair,
  ManageAccounts,
} from "@mui/icons-material"

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({
    garage: false,
    calendar: false,
    financial: false,
    service: false,
    inventory: false,
    staff: false,
    reports: false,
    settings: false,
  })

  const [activeSubItem, setActiveSubItem] = useState(null)

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <ul>
          <li>
            <Dashboard className="icon blue" />
            <span>Dashboard</span>
          </li>

          {/* Garage */}
          <li onClick={() => toggleSection("garage")}>
            <div className="collapsible">
              <DriveEtaOutlined className="icon light-purple" />
              <span className="label">Garage</span>
              {openSections.garage ? <ExpandLess className="arrow" /> : <ExpandMore className="arrow" />}
            </div>
          </li>
          {openSections.garage && (
            <ul className="sub-menu">
              <li
                className={`menu-item ${activeSubItem === "customers" ? "active" : ""}`}
                onClick={() => setActiveSubItem("customers")}
              >
                <People className="icon light-purple" />
                <span>Customers</span>
              </li>
              <li
                className={`menu-item ${activeSubItem === "vehicles" ? "active" : ""}`}
                onClick={() => setActiveSubItem("vehicles")}
              >
                <DirectionsCar className="icon light-purple" />
                <span>Vehicles</span>
              </li>
              <li
                className={`menu-item ${activeSubItem === "diagnostics" ? "active" : ""}`}
                onClick={() => setActiveSubItem("diagnostics")}
              >
                <Healing className="icon light-purple" />
                <span>Diagnostics</span>
              </li>
              <li
                className={`menu-item ${activeSubItem === "repairs" ? "active" : ""}`}
                onClick={() => setActiveSubItem("repairs")}
              >
                <Build className="icon light-purple" />
                <span>Repairs</span>
              </li>
              <li
                className={`menu-item ${activeSubItem === "services" ? "active" : ""}`}
                onClick={() => setActiveSubItem("services")}
              >
                <DesignServices className="icon light-purple" />
                <span>Services</span>
              </li>
              <li
                className={`menu-item ${activeSubItem === "workorders" ? "active" : ""}`}
                onClick={() => setActiveSubItem("workorders")}
              >
                <Assignment className="icon light-purple" />
                <span>Work Orders</span>
              </li>
            </ul>
          )}

          {/* Calendar */}
          <li onClick={() => toggleSection("calendar")}>
              <CalendarMonth className="icon green" />
              <span>Calendar</span>
          </li>

          {/* Financial */}
          <li onClick={() => toggleSection("financial")}>
            <div className="collapsible">
              <AttachMoney className="icon yellow" />
              <span>Financial</span>
              {openSections.financial ? <ExpandLess className="arrow" /> : <ExpandMore className="arrow" />}
            </div>
          </li>
          {openSections.financial && (
            <ul className="sub-menu">
              <li
                className={`menu-item ${activeSubItem === "quotation" ? "active" : ""}`}
                onClick={() => setActiveSubItem("quotation")}
              >
                <LocalOffer className="icon yellow" />
                <span>Quotation</span>
              </li>
              <li
                className={`menu-item ${activeSubItem === "invoice" ? "active" : ""}`}
                onClick={() => setActiveSubItem("invoice")}
              >
                <Receipt className="icon yellow" />
                <span>Invoice</span>
              </li>
            </ul>
          )}

          {/* Service */}
          <li onClick={() => toggleSection("service")}>
            <div className="collapsible">
              <Construction className="icon purple" />
              <span>Service Management</span>
              {openSections.service ? <ExpandLess className="arrow" /> : <ExpandMore className="arrow" />}
            </div>
          </li>
          {openSections.service && (
            <ul className="sub-menu">
              <li
                className={`menu-item ${activeSubItem === "service library" ? "active" : ""}`}
                onClick={() => setActiveSubItem("service library")}
              >
                <LibraryBooks className="icon purple" />
                <span>Service library</span>
              </li>
            </ul>
          )}

          {/* Inventory */}
          <li onClick={() => toggleSection("inventory")}>
            <div className="collapsible">
              <Inventory className="icon orange" />
              <span>Inventory & Spare Parts</span>
              {openSections.inventory ? <ExpandLess className="arrow" /> : <ExpandMore className="arrow" />}
            </div>
          </li>
          {openSections.inventory && (
            <ul className="sub-menu">
              <li
                className={`menu-item ${activeSubItem === "stock tracking" ? "active" : ""}`}
                onClick={() => setActiveSubItem("stock tracking")}
              >
                <TrackChanges className="icon orange" />
                <span>Stock tracking</span>
              </li>
              <li
                className={`menu-item ${activeSubItem === "suppliers" ? "active" : ""}`}
                onClick={() => setActiveSubItem("suppliers")}
              >
                <LocalShipping className="icon orange" />
                <span>Suppliers</span>
              </li>
            </ul>
          )}

          {/* Staff management */}
          <li onClick={() => toggleSection("staff")}>
            <div className="collapsible">
              <Group className="icon pink" />
              <span>Staff Management</span>
              {openSections.staff ? <ExpandLess className="arrow" /> : <ExpandMore className="arrow" />}
            </div>
          </li>
          {openSections.staff && (
            <ul className="sub-menu">
              <li
                className={`menu-item ${activeSubItem === "staff profiles" ? "active" : ""}`}
                onClick={() => setActiveSubItem("staff profiles")}
              >
                <Badge className="icon pink" />
                <span>Staff Profiles</span>
              </li>
              <li
                className={`menu-item ${activeSubItem === "vacation and leaves" ? "active" : ""}`}
                onClick={() => setActiveSubItem("vacation and leaves")}
              >
                <BeachAccess className="icon pink" />
                <span>Vacation and Leaves</span>
              </li>
            </ul>
          )}

          {/* Reports */}
          <li onClick={() => toggleSection("reports")}>
            <div className="collapsible">
              <Assessment className="icon green2" />
              <span>Reports</span>
              {openSections.reports ? <ExpandLess className="arrow" /> : <ExpandMore className="arrow" />}
            </div>
          </li>
          {openSections.reports && (
            <ul className="sub-menu">
              <li
                className={`menu-item ${activeSubItem === "financial report" ? "active" : ""}`}
                onClick={() => setActiveSubItem("financial report")}
              >
                <BarChart className="icon green2" />
                <span>Financial Report</span>
              </li>
              <li
                className={`menu-item ${activeSubItem === "operational report" ? "active" : ""}`}
                onClick={() => setActiveSubItem("operational report")}
              >
                <ShowChart className="icon green2" />
                <span>Operational Report</span>
              </li>
              <li
                className={`menu-item ${activeSubItem === "inventory report" ? "active" : ""}`}
                onClick={() => setActiveSubItem("inventory report")}
              >
                <InventoryOutlinedIcon className="icon green2" />
                <span>Inventory Report</span>
              </li>
            </ul>
          )}

          {/* Settings */}
          <li onClick={() => toggleSection("settings")}>
            <div className="collapsible">
              <Settings className="icon purple" />
              <span>Settings</span>
              {openSections.settings ? <ExpandLess className="arrow" /> : <ExpandMore className="arrow" />}
            </div>
          </li>
          {openSections.settings && (
            <ul className="sub-menu">
              <li
                className={`menu-item ${activeSubItem === "profile" ? "active" : ""}`}
                onClick={() => setActiveSubItem("profile")}
              >
                <Person className="icon blue" />
                <span>Profile</span>
              </li>
              <li
                className={`menu-item ${activeSubItem === "theme" ? "active" : ""}`}
                onClick={() => setActiveSubItem("theme")}
              >
                <Palette className="icon blue" />
                <span>Theme</span>
              </li>
              <li
                className={`menu-item ${activeSubItem === "language" ? "active" : ""}`}
                onClick={() => setActiveSubItem("language")}
              >
                <Language className="icon blue" />
                <span>Language & Region</span>
              </li>
              <li
                className={`menu-item ${activeSubItem === "notifications" ? "active" : ""}`}
                onClick={() => setActiveSubItem("notifications")}
              >
                <Notifications className="icon blue" />
                <span>Notifications</span>
              </li>
              <li
                className={`menu-item ${activeSubItem === "business" ? "active" : ""}`}
                onClick={() => setActiveSubItem("business")}
              >
                <Business className="icon blue" />
                <span>Business Information</span>
              </li>
              <li
                className={`menu-item ${activeSubItem === "labour" ? "active" : ""}`}
                onClick={() => setActiveSubItem("labour")}
              >
                <Work className="icon blue" />
                <span>Labour Rates</span>
              </li>
              <li
                className={`menu-item ${activeSubItem === "templates" ? "active" : ""}`}
                onClick={() => setActiveSubItem("templates")}
              >
                <Description className="icon blue" />
                <span>Templates</span>
              </li>
              <li
                className={`menu-item ${activeSubItem === "working hours" ? "active" : ""}`}
                onClick={() => setActiveSubItem("working hours")}
              >
                <AccessTime className="icon blue" />
                <span>Working Hours & Holidays</span>
              </li>
              <li
                className={`menu-item ${activeSubItem === "kpi" ? "active" : ""}`}
                onClick={() => setActiveSubItem("kpi")}
              >
                <TrendingUp className="icon blue" />
                <span>KPI Management</span>
              </li>
              <li
                className={`menu-item ${activeSubItem === "makes models" ? "active" : ""}`}
                onClick={() => setActiveSubItem("makes models")}
              >
                <CarRepair className="icon blue" />
                <span>Makes & Models Management</span>
              </li>
              <li
                className={`menu-item ${activeSubItem === "users" ? "active" : ""}`}
                onClick={() => setActiveSubItem("users")}
              >
                <ManageAccounts className="icon blue" />
                <span>Users Management</span>
              </li>
              <li
                className={`menu-item ${activeSubItem === "billing" ? "active" : ""}`}
                onClick={() => setActiveSubItem("billing")}
              >
                <CreditCard className="icon blue" />
                <span>Billing & Subscription</span>
              </li>
              <li
                className={`menu-item ${activeSubItem === "specs" ? "active" : ""}`}
                onClick={() => setActiveSubItem("specs")}
              >
                <ListAlt className="icon blue" />
                <span>Specification Management</span>
              </li>
              <li
                className={`menu-item ${activeSubItem === "security" ? "active" : ""}`}
                onClick={() => setActiveSubItem("security")}
              >
                <Security className="icon blue" />
                <span>Security</span>
              </li>
              <li
                className={`menu-item ${activeSubItem === "email integration" ? "active" : ""}`}
                onClick={() => setActiveSubItem("email integration")}
              >
                <Email className="icon blue" />
                <span>Email Integration</span>
              </li>
              <li
                className={`menu-item ${activeSubItem === "channels" ? "active" : ""}`}
                onClick={() => setActiveSubItem("channels")}
              >
                <Chat className="icon blue" />
                <span>Channels Integration</span>
              </li>
            </ul>
          )}

          {/* Help */}
          <li>
            <HelpOutline className="icon grey" />
            <span>Help & Support</span>
          </li>
        </ul>
      </div>
      <div className="sidebar-footer">
        <div className="footer">
          <img src={"/placeholder.svg"} alt="User Avatar" className="footer-avatar" />
          <div className="footer-user-info">
            <div className="footer-user-name">Yousser Gargouri</div>
            <div className="footer-user-role">Manager</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
