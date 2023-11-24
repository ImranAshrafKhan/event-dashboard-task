export default function () {
  return (
    <main className="h-full w-full flex md:flex-row flex-col-reverse border-2 border-black border-solid">
      <div className="md:me-7 md:w-4/6 w-full h-full flex flex-col border-2 border-black border-solid">
        <div className="mb-5 h-full w-full bg-white ">lol</div>

        <div className="h-2/6 w-full bg-white ">haha</div>
      </div>

      <div className="md:w-2/6 w-full flex flex-col border-2 border-black border-solid">
        <div className="mb-4 h-full w-full bg-white ">lol</div>

        <div className="h-3/5 w-full bg-white hidden md:block">haha</div>
      </div>
    </main>
  );
}
