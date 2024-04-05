import Image from "next/image"

interface ImageLink {
  id: string
  profilePicPath: string
}

const Profile = ({ id, profilePicPath }: ImageLink) => {
  return (
    <>
      <div id={id} className="min-h-screen flex items-center justify-center">
        <div className="flex items-center justify-center py-8">
          <Image className="flex items-center rounded-full my-8" src={profilePicPath} alt="Profile Picture" width={360} height={360}></Image>
        </div>
        <div className="ms-16 flex flex-col items-center">
          <div className="font-semibold text-black text-2xl lg:text-4xl xl:text-5xl my-8">👋🏻 Hello, I&apos;m Ivan Wong </div>
          <div className="text-slate-500 text-md"> Web Developer, Software Engineer, Roboticist </div>
          <div className="text-slate-500 mt-8 mb-20 text-md"> 📍 Boston, MA </div>
        </div>
      </div>
    </>
  )
}

export default Profile