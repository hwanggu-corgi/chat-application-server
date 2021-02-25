async function chats(parent, args, context) {
  return context.prisma.chat.findMany();
}

async function participants(parent, args, context) {
  return context.prisma.user.findMany({
    where: {
      loggedIn: true
    }
  });
}

async function user(parent, args, context) {
  const { userId } = context;
  return context.prisma.user.findUnique({ where: { id: userId } });
}


module.exports = {
    chats,
    user,
    participants,
}