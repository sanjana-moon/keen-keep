
import { MdMissedVideoCall, MdOutlineTextsms, MdWifiCalling2 } from "react-icons/md";

const TimelineCard = ({friend}) => {
    return (
        <div className="bg-white w-full rounded-lg flex items-center my-5 p-5 gap-10">
            <div>
                {friend.communicationType === "call" && <MdWifiCalling2 className="text-3xl font-bold" />}
                {friend.communicationType === "text" && <MdOutlineTextsms className="text-3xl font-bold" />}
                {friend.communicationType === "video" && <MdMissedVideoCall className="text-3xl font-bold" />}
            </div>
            <div className="text-gray-600">
                <p>
                    <span className=" text-lg font-medium text-[#244D3F]">
                        {friend.communicationType === "call" && "Call"}
                        {friend.communicationType === "text" && "Text"}
                        {friend.communicationType === "video" && "Video call"}
                    </span> with {friend.friend.name}</p>
                <p>
                    {new Date().toLocaleString()}
                </p>
            </div>
        </div>
    );
};

export default TimelineCard;