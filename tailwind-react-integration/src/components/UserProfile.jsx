function UserProfile() {
  return (
    <div className="bg-gray-100 p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-sm md:max-w-sm mx-auto my-10 sm:my-16 md:my-20 rounded-lg shadow-lg hover:shadow-xl">
      <img className="rounded-full sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out" src="https://placehold.co/150" alt="User" />
      <h1 className="text-xl text-blue-800 my-4 sm:text-lg md:text-xl hover:text-blue-500">John Doe</h1>
      <p className="text-gray-600 md:text-base sm:text-sm">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;