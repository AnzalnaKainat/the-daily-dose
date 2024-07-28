import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = ({ filterNews, filterCountry }) => {
  const [show, setShow] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('everything');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    filterNews(category);
  };

  return (
    <nav>
      <div className='logo'>
        <img src="/logo1.png" alt="logo" />
      </div>

      <div className='country-filter'>
        <select onChange={(e) => filterCountry(e.target.value)}>
          <option value="us">United States</option>
          <option value="ca">Canada</option>
          <option value="gb">United Kingdom</option>
          <option value="au">Australia</option>
          <option value="in">India</option>
          <option value="ae">United Arab Emirates</option>
          <option value="ar">Argentina</option>
          <option value="at">Austria</option>
          <option value="be">Belgium</option>
          <option value="bg">Bulgaria</option>
          <option value="br">Brazil</option>
          <option value="ch">Switzerland</option>
          <option value="cn">China</option>
          <option value="co">Colombia</option>
          <option value="cu">Cuba</option>
          <option value="cz">Czech Republic</option>
          <option value="de">Germany</option>
          <option value="eg">Egypt</option>
          <option value="fr">France</option>
          <option value="gr">Greece</option>
          <option value="hk">Hong Kong</option>
          <option value="hu">Hungary</option>
          <option value="id">Indonesia</option>
          <option value="ie">Ireland</option>
          <option value="il">Israel</option>
          <option value="it">Italy</option>
          <option value="jp">Japan</option>
          <option value="kr">South Korea</option>
          <option value="lt">Lithuania</option>
          <option value="lv">Latvia</option>
          <option value="ma">Morocco</option>
          <option value="mx">Mexico</option>
          <option value="my">Malaysia</option>
          <option value="ng">Nigeria</option>
          <option value="nl">Netherlands</option>
          <option value="no">Norway</option>
          <option value="nz">New Zealand</option>
          <option value="ph">Philippines</option>
          <option value="pl">Poland</option>
          <option value="pt">Portugal</option>
          <option value="ro">Romania</option>
          <option value="rs">Serbia</option>
          <option value="ru">Russia</option>
          <option value="sa">Saudi Arabia</option>
          <option value="se">Sweden</option>
          <option value="sg">Singapore</option>
          <option value="si">Slovenia</option>
          <option value="sk">Slovakia</option>
          <option value="th">Thailand</option>
          <option value="tr">Turkey</option>
          <option value="tw">Taiwan</option>
          <option value="ua">Ukraine</option>
          <option value="ve">Venezuela</option>
          <option value="za">South Africa</option>
        </select>
      </div>

      <ul className={show ? "show" : ""}>
        <li onClick={() => handleCategoryClick("everything")} className={selectedCategory === "everything" ? "selected" : ""}>All News</li>
        <li onClick={() => handleCategoryClick("business")} className={selectedCategory === "business" ? "selected" : ""}>Business</li>
        <li onClick={() => handleCategoryClick("entertainment")} className={selectedCategory === "entertainment" ? "selected" : ""}>Entertainment</li>
        <li onClick={() => handleCategoryClick("general")} className={selectedCategory === "general" ? "selected" : ""}>General</li>
        <li onClick={() => handleCategoryClick("health")} className={selectedCategory === "health" ? "selected" : ""}>Health</li>
        <li onClick={() => handleCategoryClick("science")} className={selectedCategory === "science" ? "selected" : ""}>Science</li>
        <li onClick={() => handleCategoryClick("sports")} className={selectedCategory === "sports" ? "selected" : ""}>Sports</li>
        <li onClick={() => handleCategoryClick("technology")} className={selectedCategory === "technology" ? "selected" : ""}>Technology</li>
      </ul>
      <GiHamburgerMenu onClick={() => setShow(!show)} />
    </nav>
  );
};

export default Navbar;
