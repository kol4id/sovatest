import { ClipLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div className="spinner-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <ClipLoader color="#36d7b7" loading={true} size={150} />
        </div>
      );
}

export default LoadingSpinner;