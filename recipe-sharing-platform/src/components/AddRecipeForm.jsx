import { useState } from "react";

function AddRecipeForm() {
  const [details, setDetails] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let newErrors = {};
    if (!details.title.trim()) {
      newErrors.title = "Title is required";
    }
    if (!details.ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required";
    } else {
      const items = details.ingredients
        .split(",")
        .map((i) => i.trim())
        .filter(Boolean);

      if (items.length < 2) {
        newErrors.ingredients = "Please list at least two ingredients";
      }
    }

    if (!details.steps.trim()) {
      newErrors.steps = "Steps are required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Success! Form Submitted!", details);

      setDetails({
        title: "",
        ingredients: "",
        steps: "",
      });
    }
  };

  
  return (
    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 font-medium text-gray-700">
          Recipe Title
          <input
            type="text"
            name="title"
            value={details.title}
            onChange={handleChange}
            placeholder="Recipe Title"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </label>

        <label className="block mb-2 font-medium text-gray-700">
          Ingredients
          <textarea
            name="ingredients"
            value={details.ingredients}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg rounded-md focus:outline-none focus:ring focus:ring-blue-200 resize-none"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </label>

        <label className="block mb-2 font-medium text-gray-700">
          Preparation Steps
          <textarea
            name="steps"
            value={details.steps}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200 resize-none"
          />
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </label>

        <button className="w-full sm:w-auto px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
