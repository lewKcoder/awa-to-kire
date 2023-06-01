const CommonStyles = {
  alignItems: 'center',
  border: '3px solid #d86363',
  borderTop: 'none',
  backgroundColor: '#fff',
  borderRadius: '0 0 100px 100px',
  color: '#363636',
  display: 'flex',
  fontWeight: 'bold',
  height: '100px',
  justifyContent: 'center',
  width: '200px',
};

export const TextCircleStyles = {
  ...CommonStyles,
  margin: 'auto',
};

export const ImageCircleStyles = {
  ...CommonStyles,
  margin: '0 auto 54px',
};

export const ImageStyles = {
  transform: 'translate(5px, -5px) rotate(15deg)',
  height: '100%',
};

export const HoverStyles = {
  textDecoration: 'none',
  color: '#fff',
  backgroundColor: '#d86363',
};
