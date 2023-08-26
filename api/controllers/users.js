const UserModel = require('../../model/users')
const bcrypt = require('bcrypt')

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ username })
  if (!user) {
    return res.status(401).json({message: 'Usuario no encontrado'})
  }

  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) {
    return res.status(401).json({message: 'Contraseña incorrecta'})
  }

  res.json({ message: 'Login correcto' })
} 

/**
 * Creates a new user in the database.
 *
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @return {Promise<void>} - Resolves with the newly created user object or rejects with an error.
 */
exports.createUser = async (req, res) => {
  const { username, email, password } = req.body;
  const user = new UserModel({ username, email, password });

  try {
    await user.save();
    // TODO: Replace the following line with res.json(user) to return the newly created user object.
    res.json(user);
  } catch (err) {
    // TODO: Replace the following line with res.status(500).json({ message: err }) to handle the error properly.
    res.status(500).json({ message: err });
  }
}
