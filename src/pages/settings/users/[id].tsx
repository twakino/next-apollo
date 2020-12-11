import { useRouter } from 'next/router'
const User = () => {
  const router = useRouter()
  return <div>userId: {router.query.id}</div>
}
export default User
