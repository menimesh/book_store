import bookmodel from "../models/bookmodel.js";
export default class BookController {
  async addBook(req, res, imageName) {
    const data = await bookModel.create({ ...req.body, image: imageName });
    console.log(data);
    if (data) {
      res.json(data);
    } else {
      res.json({ sucess: false, messgage: "error " });
    }
  }
  async searchBook(req, res, id) {
    const data = await bookmodel.findByPk(id);
    if (data) {
      res.json(data);
    } else {
      res.json({ sucess: false, message: "error" });
    }
  }
  async updateBook(req, res, id) {
    if (id) {
      req.body;
      const data = await bookmodel.update(req.body, {
        where: {
          id: id,
        },
      });
      if (data[0]) {
        res.json({ sucess: true, message: "Book sucessfully updated" });
      } else {
        res.json({ sucess: false, message: "couldnot update the book" });
      }
    } else {
      res.json({ sucess: false, message: "Id is not provided" });
    }
  }
}
