import axiosInstance from '@/api/axiosInstance'
import React, { useEffect, useState } from 'react'
import { Dropdown, Form } from 'react-bootstrap'

const Movies = () => {
  const [directors, setDirectors] = useState([])
  const [moviesBasedOnReleaseYear, setMoviesBasedOnReleaseYear] = useState([])
  const [moviesBasedOnDirectorName, setMoviesBasedOnDirectorName] = useState([])
  const [releaseYear, setReleaseYear] = useState(0)
  const [directorName, setDirectorName] = useState('')

  const [directorData, setDirectorData] = useState({
    name: '',
    birthYear: null,
  })
  const [movieData, setMovieData] = useState({
    title: '',
    releaseYear: null,
    directorID: '',
  })

  function handleChange(e: any) {
    const { name, value } = e.target
    if (name === 'name') {
      setDirectorData({ ...directorData, [name]: value })
    } else {
      setMovieData({ ...movieData, [name]: value })
    }
  }

  async function getAllDirectors() {
    try {
      const response = await axiosInstance.get('/api/v1/movies/all/directors')
      setDirectors(response.data)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    getAllDirectors()
  }, [])

  async function addNewDirector() {
    try {
      const response = await axiosInstance.post('/api/v1/movies', directorData)
      console.log('response', response)
    } catch (error) {
      console.log('error', error)
    }
  }
  async function addNewMovie() {
    try {
      const response = await axiosInstance.post(
        '/api/v1/movies/createMovie',
        movieData
      )
      console.log('response', response)
    } catch (error) {
      console.log('error', error)
    }
  }
  async function findMoviesBasedOnReleaseYear() {
    try {
      const response = await axiosInstance.get(`/api/v1/movies/${releaseYear}`)
      setMoviesBasedOnReleaseYear(response.data)
    } catch (error) {
      console.log('error', error)
    }
  }
  async function findMoviesBasedOnDirectorName() {
    try {
      const response = await axiosInstance.get(
        `/api/v1/movies/withDirectorName/${directorName}`
      )
      setMoviesBasedOnDirectorName(response.data)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <div
      className="d-flex justify-content-evenly align-items-center"
      style={{ minHeight: '70vh' }}
    >
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}
      >
        <div className="d-flex flex-col">
          <h2>Add new director</h2>
          <form onSubmit={addNewDirector} className="d-flex flex-col">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" onChange={handleChange} />
            <label htmlFor="birthYear">Birth Year:</label>
            <input
              type="number"
              id="birthYear"
              name="birthYear"
              onChange={handleChange}
            />
            <button className="mt-3" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="d-flex flex-col">
          <h2>Add new movie</h2>
          <form onSubmit={addNewMovie} className="d-flex flex-col">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={handleChange}
            />
            <label htmlFor="releaseYear">Release Year:</label>
            <input
              type="number"
              id="releaseYear"
              name="releaseYear"
              onChange={handleChange}
            />
            <Form.Select
              className="mt-1"
              aria-label="Director"
              name="directorID"
              onChange={handleChange}
            >
              {directors.map((director: any) => (
                <option value={director._id}>{director.name}</option>
              ))}
            </Form.Select>
            <button className="mt-3" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div>
          <h2>Find movies based on release year</h2>
          <input
            type="number"
            onChange={(e: any) => setReleaseYear(e.target.value)}
          />
          <button onClick={findMoviesBasedOnReleaseYear}>Submit</button>
          <Dropdown>
            <Dropdown.Toggle variant="danger" id="dropdown-basic">
              All movies finded
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {moviesBasedOnReleaseYear.map((movie: any) => (
                <Dropdown.Item href="#/action-1">{movie.title}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <h2>Find movies based on director name</h2>
          <input
            type="text"
            onChange={(e: any) => setDirectorName(e.target.value)}
          />
          <button onClick={findMoviesBasedOnDirectorName}>Submit</button>
          <Dropdown>
            <Dropdown.Toggle variant="danger" id="dropdown-basic">
              All movies finded
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {moviesBasedOnDirectorName.map((movie: any) => (
                <Dropdown.Item href="#/action-1">{movie.title}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}

export default Movies
