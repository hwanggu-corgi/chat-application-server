function newChatSubscribe(parent, args, context) {
  return context.pubsub.asyncIterator("NEW_CHAT");
}

const newChat = {
  subscribe: newChatSubscribe,
  resolve: payload => {
    return payload;
  },
}

function newParticipantSubscribe(parent, args, context) {
  return context.pubsub.asyncIterator("NEW_PARTICIPANT");
}

const newParticipant = {
  subscribe: newParticipantSubscribe,
  resolve: payload => {
    return payload;
  },
}

function removeParticipantSubscribe(parent, args, context) {
  return context.pubsub.asyncIterator("REMOVE_PARTICIPANT");
}

const removeParticipant = {
  subscribe: removeParticipantSubscribe,
  resolve: payload => {
    return payload;
  },
}


module.exports = {
  newChat,
  newParticipant,
  removeParticipant,
}