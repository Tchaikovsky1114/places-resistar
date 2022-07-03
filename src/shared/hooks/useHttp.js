import {useState,useEffect,useCallback,useRef} from 'react'

export const useHttp = () => {
  const [isLoading,setIsLoading] = useState(false);
  const [error,setError] = useState();
  
  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback( async(url, method= 'GET',body,headers={}) => {
    setIsLoading(true)
    const httpAbortController = new AbortController();
    activeHttpRequests.current.push(httpAbortController);

    try{
      const response = await fetch(url,{
        method,
        body,
        headers,
        signal:httpAbortController.signal
      });

      const responseData = await response.json()
      activeHttpRequests.current = activeHttpRequests.current.filter(req => req !== httpAbortController)
      
      if(!response.ok){
        throw new Error(responseData.message);
      }

      setIsLoading(false)
      return responseData;
    }catch(err){
      setError(err.message)
      setIsLoading(false)
      throw err;
    }
  },[])
  const clearError = () => {
    setError(null)
  }

  useEffect(()=>{
    // 6. clean up function을 통해 다음 sendRequest가 실행 되기 전에,
    // 정확히는 useHttp hook이 unmount 될 때 ref에 저장된 AbortController를 삭제한다.
    return () => 
    {
      activeHttpRequests.current.forEach(abortController => abortController.abort())
    };
  },[])

  return {
    error,
    isLoading,
    sendRequest,
    clearError
  }
}
