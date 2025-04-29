export default function BookList() {
  const bookDetails = ()=> console.log("book details");
  
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author name</th>
            <th>First publish year</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr onClick={bookDetails} className="hover:bg-primary hover:text-primary-content cursor-pointer">
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
          <tr onClick={bookDetails} className="hover:bg-primary hover:text-primary-content cursor-pointer">
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
          <tr onClick={bookDetails} className="hover:bg-primary hover:text-primary-content cursor-pointer">
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}