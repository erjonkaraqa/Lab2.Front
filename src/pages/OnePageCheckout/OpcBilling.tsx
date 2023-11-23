import React, { useEffect, useState } from 'react'
import './style.css'
import { getCartProducts } from '@/store/cart/cartSlice'
import {
  createAddress,
  getAllAddresses,
} from '@/store/addresses/addressesSlice'
import { fetchCountries } from '@/store/auth/authSlice'
import { Address, CreateAddress } from '@/utils/types'
import { toast } from 'react-toastify'
import AddressForms from './AddressForms'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'

type OpcBillinPropTypes = {
  handleContinue: (activeStep: string) => void
  selectedAddress: Address
  handleAddressSelection: (address: string) => void
  sameAddress: boolean
  setSameAddress: React.Dispatch<React.SetStateAction<boolean>>
  setSelectedAddress: React.Dispatch<React.SetStateAction<Address>>
}

const OpcBilling: React.FC<OpcBillinPropTypes> = ({
  handleContinue,
  handleAddressSelection,
  sameAddress,
  setSameAddress,
  selectedAddress,
  setSelectedAddress,
}) => {
  const dispatch = useAppDispatch()
  const [newAddress, setNewAddress] = useState<boolean>(false)
  const { addresses } = useAppSelector((state) => state.address)
  const { countries } = useAppSelector((state) => state.auth)
  const [selectedType, setSelectedType] = useState<string>('Bussines')
  const [formData, setFormData] = useState<CreateAddress>({
    name: '',
    surname: '',
    type: selectedType,
    company: '',
    fiscalNumber: '',
    country: '',
    city: '',
    address: '',
    email: '',
    telephone: '',
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  useEffect(() => {
    dispatch(fetchCountries())
    dispatch(getAllAddresses())
    dispatch(getCartProducts())
  }, [])

  const handleAddressChange = (event: any) => {
    if (event.target.value === 'new') {
      setNewAddress(true)
    } else {
      console.log('event.target.value', event.target.value)
      if (newAddress) {
        setNewAddress(false)
      }
      handleAddressSelection(event.target.value)
    }
  }
  const continueHandler = async () => {
    if (!selectedAddress && !newAddress) {
      return toast.error('You have to select one billing address')
    } else {
      if (newAddress) {
        await dispatch(createAddress(formData)).then((res: any) => {
          if (res.meta.requestStatus === 'fulfilled') {
            setSelectedAddress(res.payload)
            handleContinue(sameAddress ? 'opc-shipping_method' : 'opc-shipping')
          } else {
            toast.error('Something went wrong!')
          }
        })
      } else {
        handleContinue(sameAddress ? 'opc-shipping_method' : 'opc-shipping')
      }
    }
  }

  return (
    <>
      <form id="co-billing-form">
        <div id="checkout-billing-load">
          <div className="checkout-data">
            <div className="section ship-to-same-address mb-5">
              <div className="selector d-flex items-center">
                <input
                  type="checkbox"
                  data-val="true"
                  data-val-required="The ShipToSameAddress field is required."
                  id="ShipToSameAddress"
                  name="ShipToSameAddress"
                  checked={sameAddress}
                  onChange={() => setSameAddress((state) => !state)}
                />
                <label
                  className="text-sm text-gray-700 pl-4"
                  htmlFor="ShipToSameAddress"
                >
                  Transporto në të njejtën adresë
                </label>
              </div>
            </div>
            {addresses.length ? (
              <div className="section select-billing-address mb-6 d-flex flex-col gap-2 p-2 bg-gray-100">
                <label
                  htmlFor="billing-address-select"
                  className="text-sm text-gray-600 px-0.5"
                >
                  Zgjedh një adresë të faturimit nga lista juaj e adresave, ose
                  shkruani një adresë të re.
                </label>
                <select
                  name="billing_address_id"
                  id="billing-address-select"
                  className="address-select border truncate w-100"
                  title=""
                  onChange={handleAddressChange}
                >
                  {addresses.map((address, index) => {
                    const countryName = countries?.find(
                      (item) => item._id === address.country
                    )?.name
                    const cityName = countries?.map(
                      (country) =>
                        country.cities.find(
                          (item: any) => item._id === address.city
                        )?.name
                    )
                    return (
                      <option
                        key={index}
                        className="selected-billing-address"
                        value={address.id}
                        data-clienttype="Individual"
                        data-firstname={address.name}
                        data-lastname={address.surname}
                        data-streetaddress="hamdi gashi"
                        data-city={address.name}
                        data-country={address.name}
                        data-email={address.email}
                        data-number={address.telephone}
                        data-company=""
                        data-fiscalnumber=""
                      >
                        {address.name + '' + address.surname}, {address.address}
                        , {cityName}, {countryName} ...
                      </option>
                    )
                  })}
                  <option value="new">Të re</option>
                </select>
                <span className="d-flex flex-col p-2">
                  <a
                    className="text-gray-600 text-sm hover:underline edit-current-billing-address"
                    href=""
                  >
                    Ndrysho adresën ekzistuese
                  </a>
                  <span className="text-xs text-gray-600 pt-1">
                    *Kliko linkun për të ndryshuar adresën aktuale
                  </span>
                </span>
              </div>
            ) : null}

            {(newAddress || !addresses.length) && (
              <AddressForms
                formData={formData}
                setFormData={setFormData}
                countries={countries}
                selectedType={selectedType}
                setSelectedType={setSelectedType}
                handleChange={handleChange}
              />
            )}
          </div>
        </div>
        <input name="ShipToSameAddress" type="hidden" value="false" />
      </form>
      <div
        className="buttons d-flex align-items-end flex-col"
        id="billing-buttons-container"
        style={{ opacity: '1' }}
      >
        <button
          id="next-step"
          type="button"
          name="save"
          className="new-address-next-step-button btn btn-primary btn-primary-hover mt-3 shadow-sm"
          onClick={continueHandler}
        >
          Vazhdo
        </button>
        <div
          id="billing-please-wait"
          className="w-100 justify-content-center align-items-center hidden text-xs"
          style={{ display: 'none' }}
        >
          Duke u ngarkuar hapi i ardhshëm ...
          <span className="please-wait ml-2"></span>
        </div>
      </div>
    </>
  )
}

export default OpcBilling
