import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
const getColor = (props) => {
  if (props.isDragAccept) {
    return '#00e676';
  }
  if (props.isDragReject) {
    return '#ff1744';
  }
  if (props.isFocused) {
    return '#2196f3';
  }
  return '#eeeeee';
};
const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border-width: 2px;
  border-radius: 10px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: black;
  font-weight: bold;
  font-size: 1.4rem;
  outline: none;
  transition: border 0.24s ease-in-out;
`;
function DropBox({ onDrop }) {
  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    open,
    isDragAccept,
    isFocused,
    isDragReject,
  } = useDropzone({
    accept: 'image/*',
    onDrop,
    noClick: true,
    noKeyboard: true,
  });
  const lists = acceptedFiles.map((list) => (
    <li key={list.path}>
      {list.path} - {list.size} bytes
    </li>
  ));
  return (
    <>
      {' '}
      <section className="dropbox border-dashed border-4 border-black rounded-lg">
        <Container
          className="dropbox "
          {...getRootProps({ isDragAccept, isFocused, isDragReject })}
        >
          <input {...getInputProps()} />
          <p className="lg:text-[23px] md:text-[20px] sm:text-[17px] text-[14px] mb-2">Upload or drag your property images here</p>
          <button type="button" className="btn lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]" onClick={open} >
            Click to select file
          </button>
        </Container>
      </section>
      <aside>
      </aside>
    </>
  );
}
export default DropBox;