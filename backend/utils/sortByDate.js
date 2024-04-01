export async function sortByDate(data) {
  data.forEach((obj) => {
    const dateParts = obj.date.split("/");
    obj.date = new Date(`${dateParts[2]}-${dateParts[0]}-${dateParts[1]}`);
    obj;
  });
  data.sort((a, b) => new Date(a.date).getDate() - new Date(b.date).getDate());
  data.forEach((obj) => {
    let month = (new Date(obj.date).getMonth() + 1).toString().padStart(2, "0");
    let day = new Date(obj.date).getDate().toString().padStart(2, "0");
    let year = new Date(obj.date).getFullYear();
    obj.date = `${month}/${day}/${year}`;
  });
}
