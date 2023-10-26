interface PhraseProps{
  phrase: string;
}

function Phrase(props: PhraseProps){
  return(
    <h3 className="text-[#FFF] text-4xl italic">
      "{props.phrase}"
      </h3>
  )
}

export default Phrase;