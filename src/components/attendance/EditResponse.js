import { useHistory } from "react-router-dom";
export default function EditResponse({ state, date, course }) {
  const history = useHistory();
  const loadEditResponsePage = () => {
    const path = {
      pathname: "/admin/edit",
      state: { state, date, course },
    };
    history.push(path);
  };
  return (
    <div className="text-center md:mt-48 space-y-8">
      <p className="text-3xl font-bold font-mono">Your Response Was Recorded</p>
      <p className="text-xl">
        If you want to edit your response click the link below
      </p>
      <button
        onClick={loadEditResponsePage}
        className="bg-indigo-300 p-2 text-white font-bold rounded-lg hover:bg-indigo-500"
      >
        Edit Response
      </button>
    </div>
  );
}
