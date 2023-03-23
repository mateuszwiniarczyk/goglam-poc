import CartIcon from '~/svg/cart.svg';
import CloseIcon from '~/svg/close.svg';
import MenuIcon from '~/svg/menu.svg';
import UserIcon from '~/svg/user.svg';

interface ActionsProps {
  isNavVisible: boolean;
  handleNavToggle: () => void;
}

export const Actions = ({ isNavVisible, handleNavToggle }: ActionsProps) => (
  <div className='flex items-center gap-4'>
    <UserIcon className='h-8 w-8' />
    <CartIcon className='h-8 w-8' />
    <button
      type='button'
      className='relative z-20 md:hidden'
      onClick={handleNavToggle}
    >
      {isNavVisible ? (
        <CloseIcon className='w-8 h-8' />
      ) : (
        <MenuIcon className='w-8 h-8' />
      )}
    </button>
  </div>
);
