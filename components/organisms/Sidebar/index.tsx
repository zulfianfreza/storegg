import Footer from './Footer';
import MenuItem from './MenuItem';

interface SideBarProps {
  activeMenu: 'overview' | 'transactions' | 'settings';
}
export default function Sidebar(props: SideBarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <div className="user text-center pb-50 pe-30">
          <img
            src="/img/avatar-1.png"
            width="90"
            height="90"
            className="img-fluid mb-20"
            alt="profile"
          />
          <h2 className="fw-bold text-xl color-palette-1 m-0">Shayna Anne</h2>
          <p className="color-palette-2 m-0">shayna@anne.com</p>
        </div>
        <div className="menus">
          <MenuItem
            title="Overview"
            icon="icon-menu-overview"
            href="/member"
            active={activeMenu === 'overview'}
          />
          <MenuItem
            title="Transactions"
            icon="icon-menu-transaction"
            href="/member/transactions"
            active={activeMenu === 'transactions'}
          />
          <MenuItem
            title="Messages"
            icon="icon-menu-message"
            href="/member/transactions"
          />
          <MenuItem title="Card" icon="icon-menu-card" href="/member" />
          <MenuItem title="Rewards" icon="icon-menu-reward" href="/member" />
          <MenuItem
            title="Settings"
            icon="icon-menu-setting"
            href="/member/edit-profile"
            active={activeMenu === 'settings'}
          />
          <MenuItem title="Logout" icon="icon-menu-logout" href="/sign-in" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
