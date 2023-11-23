import { ReturnRequestInput, ReturnRequestProductDetail } from '@/utils/types'
import { useCreateOneMutation } from '@/store/returnRequests/returnRequestAPI'
import React, { FC, useState } from 'react'
import {
  Button,
  Form,
  FormGroup,
  FormLabel,
  InputGroup,
  Modal,
} from 'react-bootstrap'

type ReturnRequestTypes = {
  show: boolean
  onHide: () => void
  order: string
  productsDetails: ReturnRequestProductDetail[]
}

const ReturnRequestModal: FC<ReturnRequestTypes> = ({
  show,
  onHide,
  order,
  productsDetails,
}) => {
  const [createOne] = useCreateOneMutation()
  const [formData, setFormData] = useState<ReturnRequestInput>({
    order,
    reason: '',
    productsDetails,
    returningAction: '',
  })

  const handleChange = (e: any) => {
    if (e.target) {
      const { name, value } = e.target
      setFormData({ ...formData, [name]: value })
    }
  }

  const makeAReturnRequestHandler = async (e: any) => {
    e.preventDefault()

    try {
      const result = await createOne({ ...formData })
    } catch (error) {
      throw error
      console.log('error', error)
    }
    setFormData({
      order,
      reason: '',
      productsDetails,
      returningAction: '',
    })
  }

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FormLabel htmlFor="reason" id="inputGroup-sizing-default">
            Reason: *
          </FormLabel>
          <InputGroup className="mb-3">
            <Form.Control
              name="reason"
              aria-label="Default"
              value={formData.reason}
              onChange={(e) => handleChange(e)}
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <FormLabel htmlFor="description" id="inputGroup-sizing-default">
            Action: *
          </FormLabel>
          <select name="returningAction" onChange={(e) => handleChange(e)}>
            <option value={'refund'} selected>
              Refund
            </option>
            <option value={'credit'}>Credit</option>
            <option value={'exchange'}>Exchange</option>
          </select>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="btn btn-primary btn-primary-hover w-100"
          onClick={(e) => {
            makeAReturnRequestHandler(e)
            onHide()
          }}
        >
          Save Changes
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default ReturnRequestModal
