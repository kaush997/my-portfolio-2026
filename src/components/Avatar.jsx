import avatarVideo from "../assets/avatar.webm";

export default function Avatar() {
  return (
    <div className="relative w-full h-full">
      <style>{`
        @keyframes avatarBob {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(-1deg); }
        }
        .avatar-bob {
          animation: avatarBob 4s ease-in-out infinite;
        }
      `}</style>
      <div className="w-full h-full avatar-bob">
        <video
          src={avatarVideo}
          autoPlay
          loop
          muted
          playsInline
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
}