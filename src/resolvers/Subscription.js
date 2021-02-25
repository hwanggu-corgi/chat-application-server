function newChatSubscribe(parent, args, context) {
  return context.pubsub.asyncIterator("NEW_CHAT");
}

const newChat = {
  subscribe: newChatSubscribe,
  resolve: payload => {
    return payload;
  },
}

function newUserSubscribe(parent, args, context) {
  return context.pubsub.asyncIterator("NEW_USER");
}

const newUser = {
  subscribe: newUserSubscribe,
  resolve: payload => {
    return payload;
  },
}

function removeUserSubscribe(parent, args, context) {
  return context.pubsub.asyncIterator("REMOVE_USER");
}

const removeUser = {
  subscribe: removeUserSubscribe,
  resolve: payload => {
    return payload;
  },
}


module.exports = {
  newChat,
  newUser,
  removeUser,
}