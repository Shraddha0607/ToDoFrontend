import './PopupWrapper.css'

interface Props extends React.PropsWithChildren {
  visible: boolean
  onClickHandler: (event :React.MouseEvent) => void
}

const PopupWrapper = (props: Props) => {
  return (
    <div className='popup-wrapper' style={{ display: props.visible ? 'block' : 'none' }} onClick={props.onClickHandler}>
      {props.children}
    </div>
  );
}


export default PopupWrapper;