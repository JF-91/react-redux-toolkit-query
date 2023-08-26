'use client'
import { useAppDispatch, useAppSelector  } from "@/redux/hooks";
import { increment, decrement } from "@/redux/features/counterSlice";
import {useGetUsersQuery, useGetUserByIdQuery} from '@/redux/services/userApi'


export default function Home() {
  
  const count = useAppSelector(state => state.counterReducer.counter)

const {data, error, isLoading, isFetching} = useGetUsersQuery(null)


if(isLoading || isFetching){
  return <p>cargando</p>
}
if(error){
  return <p>some error</p>
}



  const dispatch = useAppDispatch()
  return (
    <>
      <div>
        <h1>Redux : {count}</h1>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>

        {
          data?.map(user=>(
            <div key={user.id}>
              <p>{user.name}</p>
              <p>{user.username}</p>
              <p>{user.email}</p>
            </div>
          ))
        }

      </div>
    </>
  );
}
