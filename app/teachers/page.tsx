export default function Teachers() {
    return (
      <main className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <h1 className="text-2xl font-bold">Teacher Management</h1>
        </header>
  
        <section className="container mx-auto mt-12 p-6">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Manage Teachers</h2>
          <div className="bg-white p-6 shadow rounded">
            <h3 className="text-xl font-semibold text-gray-800">Add New Teacher</h3>
            <form className="space-y-4 mt-4">
              <input
                type="text"
                placeholder="Teacher Name"
                className="p-2 border border-gray-300 rounded w-full"
              />
              <input
                type="email"
                placeholder="Teacher Email"
                className="p-2 border border-gray-300 rounded w-full"
              />
              <input
                type="text"
                placeholder="Subject"
                className="p-2 border border-gray-300 rounded w-full"
              />
              <div className="flex justify-end space-x-4">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500"
                >
                  Add Teacher
                </button>
                <button
                  type="reset"
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    );
  }
  