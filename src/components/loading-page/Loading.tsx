import CircularProgress from '@mui/material/CircularProgress'

/**
 * Função para esperar o carregamento da API
 * @returns {string}
 */

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <CircularProgress />
      <div>loading...</div>
    </div>
  )
}
export default Loading
