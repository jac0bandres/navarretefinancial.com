export default function SelectionText({children} : any) {
  return (
    <>
      <div
        className="flex hover:border-4 border-green-950 bg-gradient-to-r h-4/5 mx-5 items-center bg-teal-800 rounded-full shadow-2xl"
      >
        {children}
      </div>
    </>
  );
}
