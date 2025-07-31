import { MessageContainer } from "../../components/messages/MessageContainer.jsx";
import { Sidebar } from "../../components/sidebar/Sidebar.jsx";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px]  rounded-lg overflow-hidden backdrop-filter backdrop-blur-lg">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
