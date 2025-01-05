import React from 'react';
import Marquee from 'react-fast-marquee';

/*
color: #fff;
  background: #041019;
  font-size: 15.03px;
  font-weight: 500;*/
const MarqueeBar = () => {
  return (
    <Marquee pauseOnHover={true} speed={50}>
      <div className="text-sm" >🚀 Remittix Presale is LIVE! Join Today and claim a 10% Welcome Bonus 🤑 Use Promo Code RTX10WB - The future of payments is here 🔥</div>
    </Marquee>
  );
};

export default MarqueeBar;
