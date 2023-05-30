import { SidebarItem } from "../models/SidebarItem";

import { FaCaretDown, FaCaretUp, FaRegWindowClose } from "react-icons/fa";
import {AiOutlineAppstoreAdd} from "react-icons/ai";
import { TbTableFilled } from "react-icons/tb";
import {MdManageSearch} from "react-icons/md";

export const SidebarData: SidebarItem[] = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <TbTableFilled/>,
        // iconClosed: <FaCaretDown/>,
        // iconOpened: <FaCaretUp/>,
        
    },
    {
        title: 'Search',
        path: '/search',
        icon: <MdManageSearch/>
    },
    {
        title: 'Enrollment',
        path: '/enrollment',
        icon: <AiOutlineAppstoreAdd/>
    }
]