import { useGetConversations } from "../../hooks/useGetConversations.js";
import { getRandomEmoji } from "../../utils/emojis.js";
import { Conversation } from "./Conversation.jsx";

export const Conversations = () => {
  const { conversations, loading } = useGetConversations();

  return (
    <div className="flex flex-col py-2 overflow-auto">
      {conversations.map((c, idx) => (
        <Conversation
          key={c._id}
          conversation={c}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
      ))}
      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  );
};
