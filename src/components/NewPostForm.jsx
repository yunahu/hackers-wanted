export default function NewPostForm() {
  return (
    <form className="max-w-2xl mx-auto p-6 bg-green-50 shadow-lg rounded-lg space-y-6">
      {/* Project Title */}
      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="title"
        >
          Project Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter a short, descriptive title"
        />
      </div>

      {/* Project Description */}
      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="description"
        >
          Project Description
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows="5"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Describe the project idea in detail"
        />
      </div>

      {/* Project Category */}
      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="category"
        >
          Project Category
        </label>
        <select
          id="category"
          name="category"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Select a category</option>
          <option value="web-development">Web Development</option>
          <option value="mobile-app">Mobile App</option>
          <option value="ai-ml">AI / ML</option>
          <option value="blockchain">Blockchain</option>
        </select>
      </div>

      {/* Skills Required */}
      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="skills"
        >
          Skills Required
        </label>
        <div className="flex gap-3 flex-wrap">
          <div>
            <input
              type="checkbox"
              id="skill-js"
              name="skills"
              value="JavaScript"
            />
            <label htmlFor="skill-js" className="ml-2">
              JavaScript
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="skill-python"
              name="skills"
              value="Python"
            />
            <label htmlFor="skill-python" className="ml-2">
              Python
            </label>
          </div>
          {/* Add more skills */}
        </div>
      </div>

      {/* Timeline */}
      {/* Project Timeline */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Project Timeline
        </label>
        <div className="grid grid-cols-2 gap-4 mt-2">
          {/* Start Date */}
          <div>
            <label
              htmlFor="start-date"
              className="block text-xs font-medium text-gray-500"
            >
              Start Date
            </label>
            <input
              type="date"
              id="start-date"
              name="start-date"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>

          {/* End Date */}
          <div>
            <label
              htmlFor="end-date"
              className="block text-xs font-medium text-gray-500"
            >
              End Date
            </label>
            <input
              type="date"
              id="end-date"
              name="end-date"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-700 focus:ring focus:ring-green-500"
        >
          Submit Idea
        </button>
      </div>
    </form>
  );
}
