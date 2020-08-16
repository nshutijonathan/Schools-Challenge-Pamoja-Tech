import schoolsList from "../database/schools";
class Schools {
  static getSchools(req, res) {
    return res.status(200).send({
      message: "All schools fetched",
      data: schoolsList,
    });
  }
  static getSchool(req, res) {
    let schoolParams = req.params.name;
    const school = schoolsList.find((c) => c.name.includes(schoolParams));
    if (school) {
      return res.status(200).send({
        message: `school with name ${schoolParams} fetched successfully`,
        data: school,
      });
    }
    return res.status(404).send("school not found");
  }
  static getPrimaries(req, res) {
    const primaries = schoolsList.filter((s) => s.type == "primary");
    return res.status(200).send({
      message: "All primaries fetched",
      data: primaries,
    });
  }
  static getSecondaries(req, res) {
    const secondaries = schoolsList.filter((s) => s.type == "secondary");
    return res.status(200).send({
      message: "All secondaries fetched",
      data: secondaries,
    });
  }
  static getUniversities(req, res) {
    const universities = schoolsList.filter((s) => s.type == "university");
    return res.status(200).send({
      message: "All universties fetched",
      data: universities,
    });
  }
}
export default Schools;
