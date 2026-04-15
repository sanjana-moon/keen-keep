import TimelineContextProvider from "@/app/context/TimelineContext";

const Providers = ({ children }) => {
    return (
        <TimelineContextProvider>
            {children}
        </TimelineContextProvider>
    );
};

export default Providers;