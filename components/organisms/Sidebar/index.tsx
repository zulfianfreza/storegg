import Footer from './Footer';
import MenuItem from './MenuItem';
import Profile from './Profile';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useRouter } from 'next/router';

interface SideBarProps {
  activeMenu: 'overview' | 'transactions' | 'settings';
}
export default function Sidebar(props: SideBarProps) {
  const { activeMenu } = props;

  const router = useRouter();

  const onLogout = () => {
    Cookies.remove('token');
    router.push('/');
  };

  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
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
          <MenuItem title="Logout" icon="icon-menu-logout" onClick={onLogout} />
        </div>
        <Footer />
      </div>
    </section>
  );
}
