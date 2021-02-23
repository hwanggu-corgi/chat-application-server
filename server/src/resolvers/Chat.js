async function postedBy(parent, args, context) {
    return context.prisma.user.findUnique({ where: { id: parent.postedById } });
  }

module.exports = {
    postedBy,
}