import { useState } from 'react';

const LoadingHooks = () => {
  const [loading, setLoading] = useState(true);
  return { loading, setLoading };
}

export default LoadingHooks;
