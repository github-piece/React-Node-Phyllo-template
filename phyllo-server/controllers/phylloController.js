const { uuid } = require("uuidv4");
const phylloRequest = require("../utils/phyllo-request");

exports.healthz = async (req, res) => {
  res.status(200).send("Phyllo Route works well!");
};

exports.users = async (req, res) => {
  try {
    const { page } = req.query;
    const { data } = await phylloRequest.get("/v1/users?offset=" + (page - 1));
    res
      .status(200)
      .send({ success: true, users: data.data, metadata: data.metadata });
  } catch (err) {
    console.log("Get Token Error: ", err);
    res.status(400).send({
      success: false,
      message: err?.message || "Something went wrong",
    });
  }
};

exports.addNewUser = async (req, res) => {
  try {
    let { name, external_id } = req.body;

    if (!name)
      return res.status(400).send({
        success: false,
        message: "User Name required",
      });

    if (!external_id) external_id = uuid();
    const { data } = await phylloRequest.post("/v1/users", {
      name,
      external_id,
    });
    console.log(data);
    res.status(200).send({ success: true });
  } catch (err) {
    console.log("Get Token Error: ", err);
    res.status(400).send({
      success: false,
      message: err?.message || "Something went wrong",
    });
  }
};

exports.userById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id)
      return res.status(400).send({
        success: false,
        message: "User ID required",
      });

    const { data } = await phylloRequest.get("/v1/users/" + id);
    console.log(data);
    res.status(200).send({ success: true, data });
  } catch (err) {
    console.log("Get Token Error: ", err);
    res.status(400).send({
      success: false,
      message: err?.message || "Something went wrong",
    });
  }
};
