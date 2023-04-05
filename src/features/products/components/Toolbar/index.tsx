import GridIcon from '~/svg/grid.svg';
import ListIcon from '~/svg/list.svg';

const sortBy = ['Title, DESC', 'Title, ASC', 'Price, DESC', 'Price, ASC'];

export const Toolbar = () => (
  <div className='col-span-3 flex items-center justify-end gap-5'>
    {/* SHOWING RESULTS AS GRID OR LIST */}
    <div className='flex divide-x divide-gray-100 rounded border border-gray-100'>
      <button className='inline-flex h-10 w-10 items-center justify-center text-gray-600 transition hover:bg-gray-50 hover:text-gray-700'>
        <GridIcon className='h-5 w-5' />
      </button>

      <button className='inline-flex h-10 w-10 items-center justify-center text-gray-600 transition hover:bg-gray-50 hover:text-gray-700'>
        <ListIcon className='h-5 w-5' />
      </button>
    </div>

    {/* SORTING RESULTS */}
    <select className='h-10 rounded border-none bg-transparent text-sm focus:ring-0'>
      <option value='' defaultChecked>
        Sort by
      </option>
      {sortBy.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  </div>
);
