import reactDOM from 'react-dom/client'
import { Suspense } from 'react'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@/store'
import { ThemeProvider } from 'styled-components'
import theme from '@/assets/theme'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './store'

import App from './App'

// import '@/assets/css/variables.css'
// import '@/assets/css/common.css'
import '@/assets/css/index.css'

const root = reactDOM.createRoot(document.querySelector('#root'))
root.render(
  // <StrictMode>

  <Provider store={store}>
    {/* 如果suspense在provider的外面 那么异步加载的组件在通过dispatch改变store中的数据时 store.subscribe无法订阅/侦听数据的改变 */}
    <Suspense fallback={<h1>loading</h1>}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </HashRouter>
      </ThemeProvider>
    </Suspense>
  </Provider>

  // </StrictMode>
)
