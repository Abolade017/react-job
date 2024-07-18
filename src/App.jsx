import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import React from 'react'
import HomePage from './components/pages/HomePage'
import JobsPage from './components/pages/JobsPage'
import JobPage, { jobLoader } from './components/pages/JobPage'
import AddJobPage from './components/pages/AddJobPage'
import MainLayout from './components/layouts/MainLayout'
import NotFoundPage from './components/pages/NotFoundPage'
const addJob = async (newJob) => {
  const res = await fetch('/api/jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',

    },
    body: JSON.stringify(newJob)
  })
  console.log(newJob);
  return;
}
const deleteJob = async (id) => {
  console.log('delete', id)
  const res = await fetch(`/api/jobs/${id}`, {
    method: 'DELETE'
  });
  return;
}
const router = createBrowserRouter(createRoutesFromElements(

  <Route path="/" element={<MainLayout />}>
    <Route index element={<HomePage />}></Route>
    <Route path="/jobs" element={<JobsPage />}></Route>
    <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob} />} loader={jobLoader}></Route>
    <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />}></Route >
    <Route path="*" element={<NotFoundPage />}></Route>
  </Route >
))

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App