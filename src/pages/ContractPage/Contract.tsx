import axiosInstance from '@/api/axiosInstance'
import React, { useEffect, useState } from 'react'
import { Dropdown, Form, Table } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'

const Contract = () => {
  const navigate = useNavigate()
  const [employess, setEmployees] = useState([])
  const [contracts, setContracts] = useState([])
  const [employeeName, setEmployeeName] = useState('')
  const [employeeId, setEmployeeId] = useState('')
  const [contractId, setContractId] = useState('')
  const [isEditable, setIsEditable] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [editName, setEditName] = React.useState('')
  const [isVisible, setIsVisible] = React.useState(false)

  const [editNameValue, setEditNameValue] = React.useState('')

  const [editableContract, setEditableContract] = useState([])

  const [contractsBasedOnStartDate, setContractsBasedOnStartDate] = useState([])
  const [contractsBasedOnEmployee, setContractsBasedOnEmployee] = useState([])
  const [employeeForm, setEmployeeForm] = useState({
    fullName: '',
    isActive: 'true',
  })
  const [contractForm, setContractForm] = useState({
    name: '',
    startDate: '',
    employeeID: '',
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target

    console.log('name', name + ' : ' + value)

    if (name === 'name' || name === 'startDate' || name === 'employeeID') {
      setContractForm({ ...contractForm, [name]: value })
    } else {
      setEmployeeForm({ ...employeeForm, [name]: value })
    }
  }

  const findContractBasedOnEmployeeID = async () => {
    try {
      const response = await axiosInstance.get(
        `/api/v1/contract/basedOnEmployee/${employeeId}`
      )
      setContractsBasedOnEmployee(response.data)
    } catch (error) {
      console.log('error', error)
    }
  }

  console.log('contractsBasedOnEmployee', contractsBasedOnEmployee)

  const getAllEmployees = async () => {
    try {
      await axiosInstance
        .get('/api/v1/contract/')
        .then(({ data }) => setEmployees(data))
    } catch (error) {
      console.log('error', error)
    }
  }
  const getAllContracts = async () => {
    try {
      await axiosInstance
        .get('/api/v1/contract/contracts/')
        .then(({ data }) => setContracts(data))
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    getAllEmployees()
    getAllContracts()
  }, [])

  const handleEmployeeSubmit = async (e: any) => {
    e.preventDefault()

    try {
      axiosInstance.post('/api/v1/contract', employeeForm).then((res) => {
        if (res.status === 200) {
          toast.success('Contract inserted successfuly')
          setEmployeeForm({
            fullName: '',
            isActive: 'true',
          })
        }
      })
    } catch (error) {
      console.log('error', error)
    }
  }
  const handleContractSubmit = async (e: any) => {
    e.preventDefault()

    try {
      axiosInstance
        .post('/api/v1/contract/insertContract', contractForm)
        .then((res) => {
          if (res.status === 200) {
            toast.success('Contract inserted successfuly')
            setEmployeeForm({
              fullName: '',
              isActive: 'true',
            })
          }
        })
    } catch (error) {
      console.log('error', error)
    }
  }

  const getBasedOnID = async (contractIdParam: any) => {
    try {
      const response = await axiosInstance.get(
        `/api/v1/contract/basedOnID/test/${contractIdParam}`
      )
      setEditableContract(response.data)
    } catch (error) {
      console.log('error', error)
    }
  }

  const updateContract = async (contractIdParam: any) => {
    try {
      const response = await axiosInstance.patch(
        `/api/v1/contract/${contractIdParam}`
      )
    } catch (error) {
      console.log('error', error)
    }
  }

  const findContractsBasedOnStartDate = async () => {
    try {
      console.log('selectedDate', selectedDate)
      const formattedDate = encodeURIComponent(selectedDate.toISOString())
      console.log('formattedDate', formattedDate)
      const response = await axiosInstance.get(
        `/api/v1/contract/basedOnStartDate/${formattedDate}`
      )
      setContractsBasedOnStartDate(response.data)
      // Handle the response as needed
    } catch (error) {
      console.error('Error finding contracts based on start date:', error)
    }
  }

  console.log('contractsBasedOnStartDate', contractsBasedOnStartDate)

  console.log('employess', employess)
  console.log('contractForm', contractForm)

  async function editDirector(id: any) {
    try {
      await axiosInstance.patch('/api/v1/contract/' + id, {
        name: editNameValue,
      })
      setEditName('')
      await getAllContracts()
    } catch (error) {
      console.log(error)
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
          <h3>Create Employee</h3>
          <form onSubmit={handleEmployeeSubmit} className="d-flex flex-col">
            <input type="text" name="fullName" onChange={handleChange} />
            <div className="d-flex">
              <label>
                Active:
                <input
                  type="radio"
                  name="isActive"
                  value="true"
                  checked={employeeForm.isActive === 'true'}
                  onChange={handleChange}
                />
              </label>

              <label>
                Inactive:
                <input
                  type="radio"
                  name="isActive"
                  value="false"
                  checked={employeeForm.isActive === 'false'}
                  onChange={handleChange}
                />
              </label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div>
          <h3>Create Contract</h3>
          <form onSubmit={handleContractSubmit} className="d-flex flex-col">
            <input type="text" name="name" onChange={handleChange} />
            <input
              type="date"
              name="startDate"
              value={
                contractForm.startDate
                // ? format(contractForm.startDate, 'yyyy-MM-dd')
                // : 'DD/MM/YYYY'
              }
              onChange={handleChange}
            />
            <Form.Select
              className="mt-1"
              aria-label="Employees"
              name="employeeID"
              onChange={handleChange}
            >
              {employess.map((employee: any) => (
                <option value={employee._id}>{employee.fullName}</option>
              ))}
            </Form.Select>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div>
          <h3>All contracts</h3>
          <Dropdown>
            <Dropdown.Toggle
              variant="danger"
              className="text-primary"
              id="dropdown-basic"
            >
              All movies finded
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {contracts.map((contract: any) => (
                <Dropdown.Item href="#/action-1">{contract.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <h2>Find Contract based on startDate</h2>
          <input
            type="date"
            onChange={(e) => setSelectedDate(new Date(e.target.value))}
          />
          <button onClick={findContractsBasedOnStartDate}>Submit</button>
          <Dropdown>
            <Dropdown.Toggle
              variant="danger"
              className="text-primary"
              id="dropdown-basic"
            >
              All movies finded
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {contractsBasedOnStartDate.map((employee: any) => (
                <Dropdown.Item href="#/action-1">{employee.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <h2>Find Contracts based on employee</h2>
          <input
            type="text"
            onChange={(e: any) => setEmployeeId(e.target.value)}
          />
          <button onClick={findContractBasedOnEmployeeID}>Submit</button>
          <Dropdown>
            <Dropdown.Toggle
              variant="danger"
              className="text-primary"
              id="dropdown-basic"
            >
              All movies finded
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {contractsBasedOnEmployee.map((employee: any) => (
                <Dropdown.Item href="#/action-1">{employee.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <h3>All employees</h3>
          <Dropdown>
            <Dropdown.Toggle
              variant="danger"
              className="text-primary"
              id="dropdown-basic"
            >
              All movies finded
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {employess.map((employee: any) => (
                <Dropdown.Item href="#/action-1">
                  {employee.fullName}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <h3>Update contract</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Start Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {contracts.map((contract: any) => (
                <tr>
                  <td>{contract.name}</td>
                  <td>{format(new Date(contract.startDate), 'yyyy-MM-dd')}</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faPencil}
                      onClick={() => navigate(`/edit/${contract._id}`)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {contracts.map((director: any) => (
            <div>
              {editName === director.name ? (
                <div
                  style={{ width: '300px', paddingLeft: '150px' }}
                  className="d-flex justify-content-between"
                >
                  <input
                    type="text"
                    value={editNameValue}
                    name="name"
                    className="mr-4"
                    onChange={(e: any) => setEditNameValue(e.target.value)}
                  />
                  <button onClick={() => setEditName('')}>Cancel</button>
                  <button onClick={() => editDirector(director._id)}>
                    Save
                  </button>
                </div>
              ) : (
                <div className="directors">
                  {director.name}
                  <FontAwesomeIcon
                    icon={faPencil}
                    onClick={() => {
                      setEditName(director.name)
                      setEditNameValue(director.name)
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div>
          <h3>forma</h3>
        </div>
      </div>
    </div>
  )
}

export default Contract
