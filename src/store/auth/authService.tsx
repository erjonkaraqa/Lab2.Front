import {
  AuthPromise,
  ChangePasswordInput,
  LoginUserData,
  SignupUserData,
  UpdateMeTypes,
  User,
} from '@/utils/types'
import axiosInstance from '../../api/axiosInstance'
import axios, { AxiosResponse } from 'axios'

const API_URL = 'api/v1/users/'

type UserValidationResponse = {
  success: 'string'
  message: string
}

const signup = async (userData: User): Promise<User> => {
  const response = await axiosInstance.post(`${API_URL}/signup`, userData)

  console.log('response.data', response.data)

  if (response.data) {
    // localStorage.setItem('access_token', response.data.token)
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data as User
}

const login = async (userData: LoginUserData) => {
  const response = await axiosInstance.post(API_URL + '/login', userData)

  console.log('response.data', response.data)

  if (response.data) {
    localStorage.setItem('token', response.data.token)
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

const logout = () => {
  // const response = await axiosInstance.get(API_URL + '/logout')
  localStorage.removeItem('user')
  localStorage.removeItem('token')
}

const userLogin = async () => {
  const response = await axiosInstance.get(`${API_URL}/self`)

  if (response.data) {
    console.log('response', response.data)
  }

  return response.data
}

const refreshToken = async () => {
  const response = await axiosInstance.get(API_URL + '/refreshToken', {
    withCredentials: true,
  })

  return response.data
}

const fetchCountries = async () => {
  const response = await axiosInstance.get('api/v1/country')

  console.log('response.data', response.data)

  return response.data
}

const validateUserByEmail = async (
  email: string
): Promise<UserValidationResponse> => {
  const response: AxiosResponse<UserValidationResponse> =
    await axiosInstance.get(API_URL + `validateUserByEmail?email=${email}`)

  console.log('response', response)

  return response.data
}

const changePassword = async (
  body: ChangePasswordInput
): Promise<AuthPromise> => {
  const response: AxiosResponse<AuthPromise> = await axiosInstance.patch(
    API_URL + `updateMyPassword`,
    body
  )

  return response.data
}
const updateMe = async (body: UpdateMeTypes) => {
  try {
    const response = await axiosInstance.patch(API_URL + 'updateMe', body)
    console.log('response', response)

    const updatedUser = response.data

    const storedUser = JSON.parse(localStorage.getItem('user') || '{}')
    const updatedStoredUser = { ...storedUser, ...updatedUser }
    const userObject = {
      token: localStorage.getItem('token'),
      user: { ...storedUser, ...updatedUser },
    }
    localStorage.setItem('user', JSON.stringify(updatedStoredUser))

    return updatedUser
  } catch (error) {
    console.error('API call failed', error)
    throw error
  }
}

const authService = {
  signup,
  login,
  logout,
  userLogin,
  fetchCountries,
  refreshToken,
  validateUserByEmail,
  changePassword,
  updateMe
}

export default authService
