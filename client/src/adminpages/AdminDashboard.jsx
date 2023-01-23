import React, { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  Bars3BottomLeftIcon,
  CogIcon,
  HomeIcon,
  PhotoIcon,
  PlusIcon,
  RectangleStackIcon,
  Squares2X2Icon,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

const sidebarNavigation = [
    { name: 'Home', href: '/', icon: HomeIcon, current: false },
    { name: 'Upload', href: '#', icon: Squares2X2Icon, current: false },
    { name: 'Photos', href: '#', icon: PhotoIcon, current: true },
    { name: 'Shared', href: '#', icon: UserGroupIcon, current: false },
    { name: 'Albums', href: '#', icon: RectangleStackIcon, current: false },
    { name: 'Settings', href: '#', icon: CogIcon, current: false },
  ]
  const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Sign out', href: '#' },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function AdminDashboard() {
  return (
    <div>AdminDashboard</div>
  )
}
