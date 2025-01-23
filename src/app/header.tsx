export default function Header() {
  return (
    <header className="bg-white h-[53px]">
      <div className="flex justify-between px-10 items-center h-full">
        {/* Logo and Search */}
        <div className="flex space-x-5">
          <div>Logo</div>
          <div>Search</div>
        </div>

        {/* Tabs, Profile and Business */}
        <div className="flex space-x-10">
          <div className="flex space-x-5">
            <div>Home</div>
            <div>My Network</div>
            <div>Jobs</div>
            <div>Messaging</div>
            <div>Notifications</div>
            <div>Me</div>
          </div>

          <div className="flex space-x-5">
            <div>For Business</div>
            <div>Advertise</div>
          </div>
        </div>
      </div>
    </header>
  );
}
