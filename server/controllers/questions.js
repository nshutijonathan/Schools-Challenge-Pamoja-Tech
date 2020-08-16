import questionsList from "../database/questions";
class Questions {
  static displayQuestions(req, res) {
    return res.status(200).send({
      status: 200,
      data: questionsList,
    });
  }
}
export default Questions;
