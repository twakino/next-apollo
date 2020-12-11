import Link from 'next/link'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
const PaperItem = styled(Paper)`
  margin: 0 0 1.25rem;
  padding: ${(props) => props.theme.spacing(2)}px;
`
const Users = () => {
  // Linkを使って動的ルーティングを
  return (
    <ul>
      {[1, 2, 3, 4].map((v) => (
        <PaperItem component="li" key={v} variant="outlined">
          <Link href="/users/[id]" as={`/users/${v}`}>
            <a>user{v}</a>
          </Link>
        </PaperItem>
      ))}
    </ul>
  )
}
export default Users
