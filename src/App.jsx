import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import React from 'react'
import HomePage from './components/pages/HomePage'
import JobsPage from './components/pages/JobsPage'
import JobPage from './components/pages/JobPage'
import MainLayout from './components/layouts/MainLayout'
import NotFoundPage from './components/pages/NotFoundPage'
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<MainLayout />}>
    <Route index element={<HomePage />}></Route>
    <Route path="/jobs" element={<JobsPage />}></Route>
    <Route path="/jobs/:id" element={<JobPage />}></Route>
    <Route path="*" element={<NotFoundPage />}></Route>
  </Route>
))
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App