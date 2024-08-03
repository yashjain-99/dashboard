const ActionContainer = ({ children, shouldShowNotification = false }) => {
  return (
    <div className=" h-10 w-10 border rounded-full relative aspect-square flex items-center justify-center bg-muted hover:bg-muted-foreground cursor-pointer">
      {shouldShowNotification && (
        <div className=" p-1 bg-blue-700 absolute top-0 right-1 rounded-full" />
      )}
      {children}
    </div>
  );
};

export default ActionContainer;
