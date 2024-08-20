'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import PropTypes from 'prop-types'; // Import PropTypes for type checking
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick, link }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img src={imgUrl} alt={title} className="absolute w-full h-full object-cover rounded-[24px]" />

    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
        {link && (
          <Link href={link}>
            <button type="submit" className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-md transition">
              Go to Page
            </button>
          </Link>
        )}
      </div>
    )}
  </motion.div>
);

// Set default props
ExploreCard.defaultProps = {
  link: '/', // Default to home page if link is not provided
};

// Add prop types validation
ExploreCard.propTypes = {
  id: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  link: PropTypes.string,
};

export default ExploreCard;
