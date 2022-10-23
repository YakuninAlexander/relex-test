import React from 'react';
import Authorization from '../components/Authorization';
import Personal from '../components/Personal';
import { useSelector} from 'react-redux'
import { RootState } from '..';



export default function AuthorizationPage() {
  const auth = useSelector((state: RootState) => state.root.app.authorize)

  return(
    <>
      {auth && <Personal />}
      {!auth && <Authorization />}
    </>
  )
}