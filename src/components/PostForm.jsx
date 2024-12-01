import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PostForm(props) {
  const [title, setTitle] = useState(props.post?.title ?? "");
  const [description, setDescription] = useState(props.post?.description ?? "");
  const [category, setCategory] = useState("");
  const [skills, setSkills] = useState(props.post?.skills ?? []);
  const [startDate, setStartDate] = useState(props.post?.startDate ?? "");
  const [endDate, setEndDate] = useState(props.post?.endDate ?? "");
  const [status, setStatus] = useState(props.post?.status);
  const navigate = useNavigate();

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (props.post) {
      const response = await axios.patch(
        `${import.meta.env.VITE_BACKEND_URL}/posts/${props.post.id}`,
        {
          title,
          description,
          category,
          tags: skills.join(","),
          startDate,
          endDate,
          status,
        },
        {
          withCredentials: true,
        }
      );

      navigate(`/post/${props.post.id}`);
    } else {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/posts`,
        {
          title,
          description,
          category,
          tags: skills.join(","),
          startDate,
          endDate,
        },
        {
          withCredentials: true,
        }
      );

      const postId = response?.data?.post?.insertId;

      if (postId) {
        navigate(`/post/${postId}`);
      }
    }
  };

  const handleSkills = (e) => {
    if (e.target.checked) {
      setSkills((prevSkills) => [...prevSkills, e.target.value]);
    } else {
      setSkills((prevSkills) =>
        prevSkills.filter((skill) => skill !== e.target.value)
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-green-50 shadow-lg rounded-lg space-y-6"
    >
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
          onChange={(e) => setTitle(e.target.value)}
          value={title}
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
          onChange={(e) => setDescription(e.target.value)}
          value={description}
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
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          <option value="">Select a category</option>
          <option value="web-development">Web Development</option>
          <option value="mobile-app">Mobile App</option>
          <option value="ai-ml">AI / ML</option>
          <option value="blockchain">Blockchain</option>
        </select>
      </div>

      {/* Status */}
      {props.post && (
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="status"
          >
            Search Status
          </label>
          <select
            id="status"
            name="status"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={(e) => setStatus(e.target.value)}
            value={status}
          >
            <option value={1}>Active</option>
            <option value={0}>Closed</option>
          </select>
        </div>
      )}
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
              onChange={handleSkills}
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
              onChange={handleSkills}
            />
            <label htmlFor="skill-python" className="ml-2">
              Python
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="skill-java"
              name="skills"
              value="Java"
              onChange={handleSkills}
            />
            <label htmlFor="skill-java" className="ml-2">
              Java
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              onChange={(e) => setStartDate(e.target.value)}
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button className="bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-700 focus:ring focus:ring-green-500">
          {props.post ? "Edit Post" : "Submit Idea"}
        </button>
      </div>
    </form>
  );
}
