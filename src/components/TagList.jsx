import { useApp } from '../context/AppContext';

const tags = [
    "CSS", "JavaScript", "React.js", "Vue.js", "Angular", "TypeScript", "C#", "C++", "Python", "Node.js", "Django", "Ruby on Rails", "PHP", "ASP.NET Core", "Spring Boot", "Laravel", "MySQL", "PostgreSQL", "MongoDB", "SQLite", "GraphQL", "Unity", "Unreal Engine", "Godot"
]

function TagList() {
    const { selectedTags, setSelectedTags } = useApp();

    const toggleTag = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(selectedTag => selectedTag !== tag));
          } else {
            setSelectedTags([...selectedTags, tag]);
          }
    }

  return (
    <div className="flex flex-wrap self-start mt-4">
        {tags.map((tag, index) => (
            <div key={index} className={`hover:cursor-pointer ${selectedTags.includes(tag) ? "bg-green-200" : "bg-[#d9d9d9]"} rounded-2xl p-2 m-2`} onClick={() => toggleTag(tag)}>
                {tag}
            </div>
        ))}
    </div>
  );
}
export default TagList;
