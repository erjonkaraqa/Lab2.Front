import React from 'react'
import Logo from '../../../assets/images/gjirafa50.png'
import './style.css'
import LoadingBar from '@/ui/Loading/LoadingBar'

function Footer() {
  const currentURL = window.location.href
  const dashboardURL = 'http://localhost:3000/'
  const isDashboard = currentURL === dashboardURL

  return (
    <div className="footer text-gray-600">
      {isDashboard && (
        <div className="w-100 footer-manufacturers">
          <div className="footer-upper mx-auto d-flex gap-2 md:gap-4 pb-6 overflow-x-scroll md:overflow-hidden px-3 md:px-0">
            <div className="d-flex bg-white shadow-md rounded p-3 md:p-4">
              <a
                href="https://gjirafa50.com/apple"
                className="d-flex mx-auto "
                style={{ width: '10rem', height: '3rem' }}
              >
                <img
                  alt="https://hhstsyoejx.gjirafa.net/gjirafa50core/images/d242fc19-6303-4e38-8d92-cdd1ac6c9074/d242fc19-6303-4e38-8d92-cdd1ac6c9074"
                  src="https://hhstsyoejx.gjirafa.net/gjirafa50core/images/d242fc19-6303-4e38-8d92-cdd1ac6c9074/d242fc19-6303-4e38-8d92-cdd1ac6c9074.webp?w=160"
                  loading="lazy"
                  className="position-relative mx-auto"
                />
              </a>
            </div>
            <div className="d-flex bg-white shadow-md rounded p-3 md:p-4">
              <a
                href=""
                className="d-flex mx-auto w-[10rem] h-[3rem]"
              >
                <img
                  alt="https://hhstsyoejx.gjirafa.net/gjirafa50core/images/ad46de6e-1abd-4f28-af6b-f771c3c1abc7/ad46de6e-1abd-4f28-af6b-f771c3c1abc7"
                  src="https://hhstsyoejx.gjirafa.net/gjirafa50core/images/ad46de6e-1abd-4f28-af6b-f771c3c1abc7/ad46de6e-1abd-4f28-af6b-f771c3c1abc7.webp?w=160"
                  loading="lazy"
                  className="position-relative mx-auto"
                />
              </a>
            </div>
            <div className="d-flex bg-white shadow-md rounded p-3 md:p-4">
              <a
                href=""
                className="d-flex mx-auto w-[10rem] h-[3rem]"
              >
                <img
                  alt="https://hhstsyoejx.gjirafa.net/gjirafa50core/images/0cf9ad8e-4b82-431d-84b5-5888d02d1269/0cf9ad8e-4b82-431d-84b5-5888d02d1269"
                  src="https://hhstsyoejx.gjirafa.net/gjirafa50core/images/0cf9ad8e-4b82-431d-84b5-5888d02d1269/0cf9ad8e-4b82-431d-84b5-5888d02d1269.webp?w=160"
                  loading="lazy"
                  className="position-relative mx-auto"
                />
              </a>
            </div>
            <div className="d-flex bg-white shadow-md rounded p-3 md:p-4">
              <a
                href=""
                className="d-flex mx-auto w-[10rem] h-[3rem]"
              >
                <img
                  alt="https://hhstsyoejx.gjirafa.net/gjirafa50core/images/68d0c46e-b7e5-4cdd-9d4a-0bf116412e70/68d0c46e-b7e5-4cdd-9d4a-0bf116412e70"
                  src="https://hhstsyoejx.gjirafa.net/gjirafa50core/images/68d0c46e-b7e5-4cdd-9d4a-0bf116412e70/68d0c46e-b7e5-4cdd-9d4a-0bf116412e70.webp?w=160"
                  loading="lazy"
                  className="position-relative mx-auto"
                />
              </a>
            </div>
            <div className="d-flex bg-white shadow-md rounded p-3 md:p-4">
              <a
                href=""
                className="d-flex mx-auto w-[10rem] h-[3rem]"
              >
                <img
                  alt="https://hhstsyoejx.gjirafa.net/gjirafa50core/images/fd0626eb-00e1-4808-8400-d517c8b28381/fd0626eb-00e1-4808-8400-d517c8b28381"
                  src="https://hhstsyoejx.gjirafa.net/gjirafa50core/images/fd0626eb-00e1-4808-8400-d517c8b28381/fd0626eb-00e1-4808-8400-d517c8b28381.webp?w=160"
                  loading="lazy"
                  className="position-relative mx-auto"
                />
              </a>
            </div>
            <div className="d-flex bg-white shadow-md rounded p-3 md:p-4">
              <a
                href=""
                className="d-flex mx-auto w-[10rem] h-[3rem]"
              >
                <img
                  alt="https://hhstsyoejx.gjirafa.net/gjirafa50core/images/c89f142d-e980-4a59-8704-a379ab99abeb/c89f142d-e980-4a59-8704-a379ab99abeb"
                  src="https://hhstsyoejx.gjirafa.net/gjirafa50core/images/c89f142d-e980-4a59-8704-a379ab99abeb/c89f142d-e980-4a59-8704-a379ab99abeb.webp?w=160"
                  loading="lazy"
                  className="position-relative mx-auto"
                />
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="footer-upper text-left mx-auto px-3 md:px-0 py-4">
        <img src={Logo} alt="gjirafa50" style={{ width: '150px' }} />
      </div>
      <div className="footer-upper mx-auto d-flex flex-col-reverse md:flex-row-reverse footer-lists p-2 md:p-0 md:mb-4">
        <div className="footer-block information mb-3">
          <div className="text-left">
            <h5 className="mb-2 text-base font-medium text-gray-700">
              Kontakti
            </h5>
            <ul className="d-flex flex-col gap-2">
              <li className="text-sm hover:underline">
                <a href="mailto:contact@gjirafa50.com">contact@gjirafa50.com</a>
              </li>
              <li className="text-sm hover:underline">
                <a href="tel:+383 38 616 161">+383 38 616 161</a>
              </li>
              <li className="text-sm ">apo Viber / WhatsApp</li>
              <li className="text-sm hover:underline">
                <a href="tel:+383 45 101 953">+383 45 101 953</a>
              </li>
              <li className="text-sm">Për kërkesa të ofertave:</li>
              <li className="text-sm hover:underline">
                <a href="mailto:b2b@gjirafa50.com">b2b@gjirafa50.com</a>
              </li>
              <li className="text-sm ">
                Magjistralja Prishtinë-Ferizaj, kilometri i 6-të (Lapnasellë),
                Prishtinë, Kosovë
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-block customer-service mb-3">
          <div className="text-left">
            <h5 className="mb-2 text-base font-medium text-gray-700">
              Pyetje të shpeshta
            </h5>
            <ul className="d-flex flex-col gap-2">
              <li className="text-sm hover:underline">
                <a
                  className="topic-link"
                  id="#forus-faq"
                  href=""
                >
                  Për Gjirafa50
                </a>
              </li>
              <li className="text-sm hover:underline">
                <a
                  className="topic-link"
                  id="#payment-faq"
                  href=""
                >
                  Pagesat
                </a>
              </li>
              <li className="text-sm hover:underline">
                <a
                  className="topic-link"
                  id="#replace-faq"
                  href=""
                >
                  Çështje teknike
                </a>
              </li>
              <li className="text-sm hover:underline">
                <a
                  className="topic-link"
                  id="#transport-faq"
                  href=""
                >
                  Transporti
                </a>
              </li>
              <li className="text-sm hover:underline">
                <a
                  className="topic-link"
                  id="#products-faq"
                  href=""
                >
                  Porositë
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-block my-account mb-3">
          <div className="text-left">
            <h6 className="mb-2 text-base font-medium text-gray-700">
              Llogaria
            </h6>
            <ul className="d-flex flex-col gap-2">
              <li className="text-sm hover:underline">
                <a href="/cart">Shporta ime</a>
              </li>
              <li className="text-sm hover:underline">
                <a href="/order/history">Porositë</a>
              </li>
              <li className="text-sm hover:underline">
                <a href="/wishlist">Lista e dëshirave</a>
              </li>
              <li className="text-sm hover:underline">
                <a href="/customer/info">Llogaria ime</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-block text-left d-flex flex-col mb-3">
          <div className="follow-us d-flex flex-col gap-2">
            <div className="social">
              <div className="flex">
                <p className="text-base font-medium text-gray-700">
                  Rri i lidhur me Gjirafa50
                </p>
              </div>
              <ul className="d-flex gap-2">
                <li className="facebook">
                  <a
                    href="https://www.facebook.com/Gjirafa50"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <i className="icon-facebook text-gray-700 text-4xl"></i>
                  </a>
                </li>
                <li className="twitter">
                  <a
                    href="https://twitter.com/gjirafa50"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <i className="icon-twitter text-gray-700 text-4xl"></i>
                  </a>
                </li>
                <li className="youtube">
                  <a
                    href="https://www.instagram.com/gjirafa50"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Youtube"
                  >
                    <i className="icon-instagram text-gray-700 text-4xl"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="d-flex flex-col gap-2">
              <p className="text-base text-gray-700">
                Mundësuar nga Gjirafa, Inc.
              </p>
              <p className="text-sm">Të gjitha të drejtat e rezervuara</p>
            </div>
            <div className="d-flex flex-col gap-2">
              <a
                className="text-sm hover:underline"
                href="/conditions-of-use-2"
              >
                Kushtet e përdorimit – Gjirafa
              </a>
              <a
                href="https://gjirafa.com/Top/Terms#Privacy"
                className="text-sm hover:underline"
              >
                Politika e Privatësisë
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-lower md:mx-auto px-3 md:px-0">
        <div className="w-100 d-flex justify-content-between overflow-auto md:overflow-hidden pb-4 mb-1 text-sm text-gray-700 font-medium">
          <a
            className="gjirafa-products d-flex align-items-center justify-content-start"
            href=""
            target="_blank"
          >
            <img
              className="pr-2 h-6"
              loading="lazy"
              src=""
              alt="gjirafa"
            />
            gjirafa.com
          </a>
          <a
            className="gjirafa-products d-flex align-items-center justify-content-center"
            href=""
            target="_blank"
          >
            <img
              className="pr-2 h-6"
              loading="lazy"
              src=""
              alt="gjirafa50"
            />
            gjirafa50
          </a>
          <a
            className="gjirafa-products d-flex align-items-center justify-content-center"
            href=""
            target="_blank"
          >
            <img
              className="pr-2 h-6"
              loading="lazy"
              src="https://hhstsyoejx.gjirafa.net/gjirafa50core/gjirafa_products_logo/gjmall.png?w=24"
              alt="gjirafaMall"
            />
            gjirafaMall
          </a>
          <a
            className="gjirafa-products d-flex align-items-center justify-content-center"
            href=""
            target="_blank"
          >
            <img
              className="pr-2 h-6"
              loading="lazy"
              src="https://hhstsyoejx.gjirafa.net/gjirafa50core/gjirafa_products_logo/gjvideo.png?w=24"
              alt="gjirafaVideo"
            />
            gjirafaVideo
          </a>
          <a
            className="gjirafa-products d-flex align-items-center justify-content-center"
            href=""
            target="_blank"
          >
            <img
              className="pr-2 h-6"
              loading="lazy"
              src="https://hhstsyoejx.gjirafa.net/gjirafa50core/gjirafa_products_logo/gjpikbiz.png?w=24"
              alt="gjirafaPikBiz"
            />
            gjirafaPikBiz
          </a>
          <a
            className="gjirafa-products d-flex align-items-center justify-content-start"
            href=""
            target="_blank"
          >
            <img
              className="pr-2 h-6"
              loading="lazy"
              src="https://hhstsyoejx.gjirafa.net/gjirafa50core/gjirafa_products_logo/gjadnetwork.png?w=24"
              alt="gjirafaAdNetwork"
            />
            gjirafaAdNetwork
          </a>
          <a
            className="gjirafa-products d-flex align-items-center justify-content-center"
            href=""
            target="_blank"
          >
            <img
              className="pr-2 h-6"
              loading="lazy"
              src="https://hhstsyoejx.gjirafa.net/gjirafa50core/gjirafa_products_logo/gjlab.png?w=24"
              alt="gjirafaLab"
            />
            gjirafaLab

          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
