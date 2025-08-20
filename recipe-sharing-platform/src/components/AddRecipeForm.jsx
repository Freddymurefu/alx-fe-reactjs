import { useState } from "react";

function AddRecipeForm() {
  const [details, setDetails] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = (details) => {
    let errors = {};

    if (!details.title.trim()) {
      errors.title = "Title is required";
    }

    if (!details.ingredients.trim()) {
      errors.ingredients = "Ingredients are required";
    } else {
      const items = details.ingredients.split(",").map((i) => i.trim()).filter(Boolean);
      if (items.length < 2) {
        errors.ingredients = "Please list at least two ingredients";
      }
    }

    if (!details.steps.trim()) {
      errors.steps = "Steps are required";
    }

    return errors;
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = validate(details);
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
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">Recipe Title</label>
          <input
            type="text"
            name="title"
            value={details.title}
            onChange={handleChange}
            placeholder="Recipe Title"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">Ingredients</label>
          <textarea
            name="ingredients"
            value={details.ingredients}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200 resize-none"
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">Preparation Steps</label>
          <textarea
            name="steps"
            value={details.steps}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200 resize-none"
          />
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
