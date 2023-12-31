import {
    CalendarIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
} from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Locations', href: '#', icon: HomeIcon, count: '5', current: true },
    { name: 'Team', href: '#', icon: UsersIcon, current: false },
    { name: 'Danger zones', href: '#', icon: FolderIcon, count: '12', current: false },
    { name: 'Calendar', href: '#', icon: CalendarIcon, count: '20+', current: false },

]
const teams = [
    { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
    { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
    { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
    return (
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-blue-900 px-6">
            <div className="flex h-16 shrink-0 items-center">
                <div className="h-8 w-auto">☁️</div>
            </div>
            <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                        <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className={classNames(
                                            item.current
                                                ? 'bg-indigo-500 text-white'
                                                : 'text-indigo-500 hover:text-white hover:bg-indigo-700',
                                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                        )}
                                    >
                                        <item.icon
                                            className={classNames(
                                                item.current ? 'text-white' : 'text-indigo-200 group-hover:text-white',
                                                'h-10 w-10 shrink-0'
                                            )}
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                        {item.count ? (
                                            <span
                                                className=" hidden ml-auto w-10 min-w-max whitespace-nowrap rounded-full bg-indigo-600 px-2.5 py-2 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-indigo-500"
                                                aria-hidden="true"
                                            >
                        {item.count}
                      </span>
                                        ) : null}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )
}