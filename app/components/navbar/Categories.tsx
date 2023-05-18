'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { GiForestCamp} from 'react-icons/gi';
import { BiRestaurant , BiCoffeeTogo, BiBasketball,BiBeer, BiGasPump,BiCameraMovie} from 'react-icons/bi'
import { FaShoppingCart, FaGamepad} from 'react-icons/fa';
import { MdOutlineVilla } from 'react-icons/md';
import { CgGym } from 'react-icons/cg';
import { FiScissors } from 'react-icons/fi';
import {HiCake} from 'react-icons/hi';
import {RiHospitalLine} from 'react-icons/ri'

import CategoryBox from "../CategoryBox";
import Container from '../Container';



export const categories = [
  {
    label: 'Буудал',
    icon: MdOutlineVilla,
    description: 'Энэ газар буудалтай илүү төстэй!',
  },
  {
    label: 'Ресторан',
    icon: BiRestaurant,
    description: 'Энэ газар зоогийн газартай илүү төстэй!',
  },
  {
    label: 'Фитнес',
    icon: CgGym,
    description: 'Энэ газар Жимтэй илүү төстэй!'
  },
  {
    label: 'Кофе',
    icon: BiCoffeeTogo,
    description: 'Энэ газар зоогийн газартай илүү төстэй!'
  },
  {
    label: 'Заал',
    icon: BiBasketball,
    description: 'Энэ газар илүү спорт заалтай төстэй!'
  },
  {
    label: 'Дэлгүүр',
    icon: FaShoppingCart,
    description: 'Энэ газар илүү дэлгүүртэй төстэй!'
  },
  {
    label: 'Салон',
    icon: FiScissors,
    description: 'Энэ газар илүү салонтой төстэй!'
  },
  {
    label: 'Амралт',
    icon: GiForestCamp,
    description: 'Энэ газар илүү амралтын газартай төстэй!'
  },
  {
    label: 'PC',
    icon: FaGamepad,
    description: 'Энэ газар илүү ПС тоглоомын газартай төстэй!'
  },
  {
    label: 'Паб',
    icon: BiBeer,
    description: 'Энэ газар илүү пабтай төстэй!'
  },
  {
    label: 'Бакери',
    icon: HiCake,
    description: 'Энэ газар илүү бакеритэй төстэй!'
  },
  {
    label: 'Шатахуун',
    icon: BiGasPump,
    description: 'Энэ газар илүү шатахуун түгээх газартай төстэй!'
  },
  {
    label: 'Кино',
    icon: BiCameraMovie,
    description: 'Энэ газар илүү кино театртай төстэй!'
  },
  {
    label: 'Эмнэлэг',
    icon: RiHospitalLine,
    description: 'Энэ газар илүү эмнэлэгтэй төстэй!'
  }
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