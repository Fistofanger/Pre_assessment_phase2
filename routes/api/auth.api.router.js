const router = require('express').Router();
const bcrytp = require('bcrypt');

const jwtConfig = require('../../config/jwtConfig');
const generateToken = require('../../utils/authutils');

const { User } = require('../../db/models');

router.post('/registration', async (req, res) => {
  try {
    const { userName, email, password, role } = req.body;

    let userInDb;
    userInDb = await User.findOne({ where: { email } });

    if (userInDb) {
      res.status(400).json('Друг, такой email уже зареган');
      return;
    }

    const hashPassword = await bcrytp.hash(password, 10);

    userInDb = await User.create({
      userName: userName,
      email: email,
      password: hashPassword,
      role,
    });

    const user = await User.findOne({
      where: { id: userInDb.id },
    });
    if (user) {
      const { accessToken, refreshToken } = generateToken({ user });
      res.locals.user = user;
      res
        .cookie('access', accessToken, {
          maxAge: jwtConfig.access.expiresIn,
          httpOnly: true,
        })
        .cookie('refresh', refreshToken, {
          maxAge: jwtConfig.refresh.expiresIn,
          httpOnly: true,
        })
        .status(201)
        .json({ message: 'success' });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.post('/authorization', async (req, res) => {
  try {
    const { email, password } = req.body;
    const userInDb = await User.findOne({ where: { email } });

    const isLogin = await bcrytp.compare(password, userInDb.password);

    if (isLogin) {
      const user = await User.findOne({
        where: { id: userInDb.id },
      });
      if (user) {
        const { accessToken, refreshToken } = generateToken({ user });
        res.locals.user = user;

        res
          .cookie('access', accessToken, {
            maxAge: jwtConfig.access.expiresIn,
            httpOnly: true,
          })
          .cookie('refresh', refreshToken, {
            maxAge: jwtConfig.refresh.expiresIn,
            httpOnly: true,
          })
          .status(201)
          .json({ message: 'success' });
      } else {
        res.json({ message: 'Wrong data, enter correct information' });
      }
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
