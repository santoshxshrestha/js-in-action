import ContentPasteIcon from "@mui/icons-material/ContentPaste";

type ClipBoardProps = {
  setData: (data: string) => void;
};

// if we dont want to have the type alias then we can do some thing like
// export default function ClipBoard({setData}: {setData: (data: string) = > void})
// because the thinge that we are getting as props is an object with setData as a function that takes string and returns void

export default function ClipBoard({ setData }: ClipBoardProps) {
  return (
    <>
      <button
        onClick={async () => {
          const text = await navigator.clipboard.readText();
          setData(text);
        }}
      >
        <ContentPasteIcon style={{ color: "white", fontSize: 30 }} />
      </button>
    </>
  );
}
