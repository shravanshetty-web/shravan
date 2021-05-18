import React from 'react'
import CIcon from '@coreui/icons-react'


const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Trainer',
    route: '/trainers',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Trainers',
        to: '/trainers/add-trainers',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'View Trainers',
        to: '/trainers/view-trainers',
      },

    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Member',
    route: '/member',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Members',
        to: '/member/add-members',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'View Members',
        to: '/member/view-members',
      },

    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'items',
    route: '/items',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Category',
        to: '/items/add-category',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Items',
        to: '/items/add-items',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'View Stock',
        to: '/items/view-stock',
      },

    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Orders',
    route: '/orders',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'New Orders',
        to: '/orders/new-orders',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Order Report',
        to: '/orders/view-Report',
      },

    ]
  },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Base',
  //   route: '/base',
  //   icon: 'cil-puzzle',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Breadcrumb',
  //       to: '/base/breadcrumbs',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Forms',
  //       to: '/base/forms',
  //     },

    
  //   ],
  
  // }
];
export default _nav
