// App.jsx
import React, { useState } from "react";

const State = () => {
  /* ------------------ SIMPLE EXAMPLE ------------------ */
  // Single number state (counter)
  const [count, setCount] = useState(0);

  /* ------------------ MEDIUM EXAMPLE ------------------ */
  // Object state for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  /* ------------------ HARD EXAMPLE ------------------ */
  // Array of objects with nested updates
  const [students, setStudents] = useState([
    { id: 1, name: "Alice", grades: [85, 90, 78] },
    { id: 2, name: "Bob", grades: [70, 88, 92] }
  ]);

  // Update a specific grade in nested array
  const updateGrade = (studentId, gradeIndex, newGrade) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === studentId
          ? {
              ...student,
              grades: student.grades.map((g, i) =>
                i === gradeIndex ? newGrade : g
              )
            }
          : student
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 p-8 font-sans text-slate-800">
      <header className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-4xl font-extrabold mb-2">React State Examples</h1>
        <p className="text-slate-600">
          Simple → Medium → Hard — each section shows a practical use of React{" "}
          <span className="font-medium">useState</span> with clean Tailwind UI.
        </p>
      </header>

      <main className="max-w-4xl mx-auto space-y-8">
        {/* SIMPLE */}
        <section className="bg-white rounded-2xl shadow-md p-6 border border-slate-100">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-rose-600">Simple</h2>
              <p className="text-sm text-slate-500">
                Counter example — a single numeric state.
              </p>
            </div>
            <div className="text-slate-500 text-sm">useState(&quot;number&quot;)</div>
          </div>

          <div className="mt-4 flex items-center gap-4">
            <div className="text-3xl font-bold text-rose-700">{count}</div>

            <div className="flex gap-2">
              <button
                onClick={() => setCount(count + 1)}
                className="px-4 py-2 bg-rose-500 text-white rounded-lg shadow hover:bg-rose-600 transition"
              >
                Increment
              </button>
              <button
                onClick={() => setCount(count - 1)}
                className="px-4 py-2 bg-rose-100 text-rose-700 rounded-lg border border-rose-200 hover:bg-rose-50 transition"
              >
                Decrement
              </button>
              <button
                onClick={() => setCount(0)}
                className="px-3 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition"
              >
                Reset
              </button>
            </div>
          </div>
        </section>

        {/* MEDIUM */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-md p-6 border border-indigo-100">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-indigo-700">Medium</h2>
              <p className="text-sm text-indigo-500">
                Form state example — controlled inputs stored in an object.
              </p>
            </div>
            <div className="text-indigo-500 text-sm">useState(&quot;object&quot;)</div>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div className="md:col-span-2 space-y-3">
              <div>
                <label className="block text-sm text-indigo-600 mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Enter name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
              </div>

              <div>
                <label className="block text-sm text-indigo-600 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-indigo-100">
              <h3 className="text-sm font-medium text-indigo-700">Preview</h3>
              <p className="text-sm text-indigo-600 mt-2">
                <span className="font-medium">Name:</span>{" "}
                {formData.name || <span className="text-slate-400">N/A</span>}
              </p>
              <p className="text-sm text-indigo-600">
                <span className="font-medium">Email:</span>{" "}
                {formData.email || <span className="text-slate-400">N/A</span>}
              </p>
              <button
                onClick={() => setFormData({ name: "", email: "" })}
                className="mt-3 px-3 py-2 bg-indigo-50 text-indigo-700 rounded hover:bg-indigo-100 transition text-sm"
              >
                Clear
              </button>
            </div>
          </div>
        </section>

        {/* HARD */}
        <section className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-2xl shadow-md p-6 border border-emerald-100">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-emerald-700">Hard</h2>
              <p className="text-sm text-emerald-500">
                Nested array state — students with grades. Update a nested grade.
              </p>
            </div>
            <div className="text-emerald-500 text-sm">useState(&quot;array of objects&quot;)</div>
          </div>

          <div className="mt-4 space-y-4">
            {students.map((student) => (
              <div
                key={student.id}
                className="bg-white rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-sm border border-emerald-100"
              >
                <div>
                  <h3 className="text-lg font-semibold text-emerald-800">{student.name}</h3>
                  <p className="text-sm text-emerald-600">ID: {student.id}</p>
                </div>

                <div className="flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {student.grades.map((grade, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-emerald-50 p-3 rounded-lg border border-emerald-100"
                      >
                        <div>
                          <div className="text-sm text-emerald-700">Grade {index + 1}</div>
                          <div className="text-lg font-medium text-emerald-900">{grade}</div>
                        </div>

                        <div className="flex gap-2">
                          <button
                            onClick={() => updateGrade(student.id, index, grade + 1)}
                            className="px-3 py-1 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition text-sm"
                          >
                            +1
                          </button>
                          <button
                            onClick={() => updateGrade(student.id, index, grade - 1)}
                            className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded hover:bg-emerald-200 transition text-sm"
                          >
                            -1
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <button
                    onClick={() =>
                      setStudents((prev) =>
                        prev.map((s) =>
                          s.id === student.id ? { ...s, grades: [...s.grades, 75] } : s
                        )
                      )
                    }
                    className="px-3 py-2 bg-emerald-50 border border-emerald-200 rounded hover:bg-emerald-100 text-emerald-700 text-sm"
                  >
                    Add Grade
                  </button>
                  <button
                    onClick={() =>
                      setStudents((prev) => prev.filter((s) => s.id !== student.id))
                    }
                    className="px-3 py-2 bg-red-50 border border-red-200 rounded hover:bg-red-100 text-red-700 text-sm"
                  >
                    Remove Student
                  </button>
                </div>
              </div>
            ))}

            <div className="flex gap-3">
              <button
                onClick={() =>
                  setStudents((prev) => [
                    ...prev,
                    { id: Date.now(), name: `Student ${prev.length + 1}`, grades: [80] }
                  ])
                }
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
              >
                Add Student
              </button>

              <button
                onClick={() =>
                  setStudents((prev) =>
                    prev.map((s) => ({
                      ...s,
                      grades: s.grades.map((g) => g + 1)
                    }))
                  )
                }
                className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-lg hover:bg-emerald-200 transition"
              >
                +1 All Grades
              </button>
            </div>
          </div>
        </section>

        <footer className="text-center text-sm text-slate-500 mt-6">
          <p>
            Tip: Tailwind CSS classes are used for quick, responsive styling. Replace them
            with your own styles if needed.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default State;
