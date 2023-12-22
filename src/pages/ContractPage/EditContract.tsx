import axiosInstance from '@/api/axiosInstance'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const EditContract = () => {
  const { id } = useParams()

  const [contractForm, setContractForm] = useState({
    name: '',
    startDate: '',
    employeeID: '',
  })

  console.log('contractForm', contractForm)
  const getBasedOnID = async (contractIdParam: any) => {
    try {
      const response = await axiosInstance.get(
        `/api/v1/contract/basedOnID/test/${contractIdParam}`
      )
      setContractForm(response.data)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    getBasedOnID(id)
  }, [id])

  const updateContract = async () => {
    try {
      await axiosInstance.patch(`/api/v1/contract/${id}`, contractForm.name)
    } catch (error) {
      console.log('error', error)
    }
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target

    console.log('name', name + ' : ' + value)

    if (name === 'name') {
      setContractForm({ ...contractForm, [name]: value })
    } else {
      setContractForm({ ...contractForm, [name]: value })
    }
  }
  return (
    <div>
      <form onSubmit={updateContract}>
        <input
          type="text"
          name="name"
          value={contractForm.name}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default EditContract
