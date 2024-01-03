'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { GiForestCamp} from 'react-icons/gi';

import CategoryBox from "../CategoryBox";
import Container from '../Container';

import { BiBath } from "react-icons/bi";
import { TbTent } from "react-icons/tb";
import { FaUmbrellaBeach } from "react-icons/fa";
import { MdMeetingRoom } from "react-icons/md";
import { FaHouseChimneyMedical } from "react-icons/fa6";
import { MdCabin } from "react-icons/md";
import { GiDesert } from "react-icons/gi";
import { TbBrandGoogleHome } from "react-icons/tb";

export const categories = [
  {
    label: 'Гэр',
    icon: TbBrandGoogleHome,
    description: 'Энэ газар гэр илүү төстэй!',
  },
  {
    label: 'Шовгор',
    icon: TbTent,
    description: 'Энэ газар Шовгор байшинтай илүү төстэй!'
  },
  {
    label: 'Орон сууц',
    icon: MdMeetingRoom,
    description: 'Энэ газар орон сууцны өрөөтэй илүү төстэй!'
  },
  {
    label: 'Саун',
    icon: BiBath,
    description: 'Энэ газар илүү саунтай төстэй!'
  },
  {
    label: 'Амралт',
    icon: GiForestCamp,
    description: 'Энэ газар илүү амралтын газартай төстэй!'
  },
  {
    label: 'Сувилал',
    icon: FaHouseChimneyMedical,
    description: 'Энэ газар илүү сувилалын газартай төстэй!'
  },
  {
    label: 'Байшин',
    icon: MdCabin,
    description: 'Энэ газар илүү модон байшинтай төстэй!'
  },
  {
    label: 'Далайн эрэг',
    icon: FaUmbrellaBeach,
    description: 'Энэ газар далайн эрэгтэй илүү төстэй!'
  },
  {
    label: 'Говь',
    icon: GiDesert,
    description: 'Энэ газар говьтой төстэй!'
  },
]
const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;