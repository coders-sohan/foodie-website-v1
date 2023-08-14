const MegaMenu = () => {
  return (
    <div className="hidden bg-white border-t border-gray-200 p-4 absolute mt-3 w-full">
      <div className="container mx-auto grid grid-cols-3 gap-4">
        <div>
          <h3 className="font-bold mb-2">Categories</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Category 1
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Category 2
              </a>
            </li>
            {/* Add more categories */}
          </ul>
        </div>
        {/* Add more menu columns */}
      </div>
    </div>
  );
};

export default MegaMenu;
