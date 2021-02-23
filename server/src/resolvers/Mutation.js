const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET } = require('../utils');

async function post(parent, args, context) {
    console.log("I am here");
    console.log(args.texts);
    const { userId } = context;
    const chat = context.prisma.chat.create({
        data: {
          "postedBy": { connect: { id: userId } },
          "texts": args.texts
        }
    });

    return chat
}

async function signup(parent, args, context) {
    const password = await bcrypt.hash(args.password, 10)
    const user = await context.prisma.user.create({ data: { ...args, password } })
    const token = jwt.sign({ userId: user.id }, APP_SECRET)

    return {
      token,
      user,
    }
}

async function login(parent, args, context) {
    const user = await context.prisma.user.findUnique({ where: { username: args.username } })
    if (!user) {
      throw new Error('No such user found')
    }

    const valid = await bcrypt.compare(args.password, user.password)
    if (!valid) {
      throw new Error('Invalid password')
    }

    const token = jwt.sign({ userId: user.id }, APP_SECRET)

    return {
      token,
      user,
    }
}

module.exports = {
    post,
    signup,
    login,
}