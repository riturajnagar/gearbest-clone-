let navbar = () => {
  return `<div id="top_nav">
    <select name="" id="">
      <option value="">Save $3 with App</option>
    </select>
    <a href="">Support Center</a>
    <select name="" id="">
      <option value="">Ship to / INR</option>
    </select>
    <select name="" id="">
      <option value="">Language</option>
    </select>
    <select name="" id="">
      <option value="">Country Website</option>
    </select>
  </div>
  <div id="middle_nav">
    <div id="icon">
      <img
        src="https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png"
        alt=""
      />
    </div>
    <div id="search">
      <select name="" id="s_select">
        <option value="">All</option>
      </select>
      <input type="text" placeholder="Search" id="s_bar" onchange="searchData()"/>
      <button id="s-btn" onclick="searchData()">
        <img
          src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-1.png"
          alt=""
        />
      </button>
    </div>
    <div id="options">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
          alt=""
        />
        <p  id="sign_in" onclick="checkLogin()">Sign In</p>
      </div>
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/73/73814.png"
          alt=""
        />
        <a href="">Favorites<sup id="bag1">0</sup></a>
      </div>
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
          alt=""
        />
        
        <a   onclick='location.href="cart.html"'>Cart<sup id="bag">0</sup></a>
        
      </div>
    </div>
  </div>

  <div id="categories">
    <div id="categ"><a href=""> Categories</a></div>
    <div id="super_deals"><a href="./superdeal.html"> Super Deals</a></div>
    <div id="app_only"><a href="./apponly.html"> App Only</a></div>
    <div id="new_arrivals"><a href="./new.html"> New Arrivals</a></div>
  </div>`;
};

export default navbar;
