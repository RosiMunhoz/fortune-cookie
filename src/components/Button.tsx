interface ButtonProps{
  name: string;
  action: () => void;
}

function Button(props: ButtonProps){
  return(
    <button 
    onClick={props.action} className="
     bg-[#FF69B4]
     text-white
     text-2xl
     font-light
     py-2
     px-5
     rounded-full
     transition-all
     hover:scale-110
     duraion:300"
     >
      {props.name}
    </button>
  )
}

export default Button;