function newChatSubscribe(parent, args, context) {
  return context.pubsub.asyncIterator("NEW_CHAT");
}

const newChat = {
  subscribe: newChatSubscribe,
  resolve: payload => {
    return payload;
  },
}

module.exports = {
  newChat,
}