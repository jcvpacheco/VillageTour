import * as React from 'react';
import { IBrands } from '../VillageTourApp.types';
interface ITourFooterProps {
  clear: () => void;
  brands: IBrands;
}

export const TourFooter = (props: ITourFooterProps) => {
  const itemCount = Object.keys(props.brands).filter(id => !props.brands[id].selected).length;
  const ON_CLICK = () => {
    props.clear();
  };

  return (
    <footer>
      <span>
        {itemCount} item{itemCount === 1 ? '' : 's'} left
      </span>
      <button onClick={ON_CLICK} className="submit">
        Clear Completed
      </button>
    </footer>
  );
};
