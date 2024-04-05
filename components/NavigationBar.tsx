'use client'

import { useState } from 'react';
import Link from "next/link"
import { buildClassName } from './Utils';

interface NavbarProps {
    logo: string,
    navItems: NavbarItems[],
    activeSection: string
}

interface NavbarItems {
    name: string,
    route: string,
    description: string
}

const NavigationBar = ({ logo, navItems, activeSection }: NavbarProps) => {
    const [navItemIndex, setNavItemIndex] = useState(0);

    return (
        <nav className='sticky top-0 py-5 z-50 w-full max-w-screen flex flex-wrap justify-between items-center bg-neutral-800'>
            <h3 className='mx-8'>{logo}</h3>
            <span>
                {navItems.map((items, index) => (
                    <Link
                        key={index}
                        className={
                            buildClassName([(activeSection == items.name ? 'bg-gray-700' : 'bg-neutral-800'), 'rounded-md mx-4 px-5 py-2'])
                        }
                        href={items.route}
                        onClick={() => setNavItemIndex(index)}
                    >{items.description}</Link>
                ))}
            </span>
        </nav>
    )
}

export default NavigationBar