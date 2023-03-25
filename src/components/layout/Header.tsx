import { useState } from 'react';

import { Actions } from '@/components/layout/Actions';
import { Navigation } from '@/components/layout/Navigation';
import { Logo } from '@/components/Logo';

export const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleNavToggle = () => {
    setIsNavVisible((prevVal) => !prevVal);
  };

  return (
    <header>
      <div className='container mx-auto mb-12 flex items-center justify-between gap-2 px-4 py-4 md:mb-16 md:py-8 '>
        <Logo />
        <Navigation isNavVisible={isNavVisible} />
        <Actions
          handleNavToggle={handleNavToggle}
          isNavVisible={isNavVisible}
        />
      </div>
    </header>
  );
};
