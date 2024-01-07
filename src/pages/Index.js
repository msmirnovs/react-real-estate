import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section
          className='position-relative pb-20'
          style={{
            backgroundImage:
              'url("images/houses.png")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div
            className='position-absolute top-0 bottom-0 start-0 end-0 bg-dark'
            style={{ opacity: '80%' }}
          />
          <div className='position-relative'>
            <nav className='navbar navbar-expand-lg navbar-dark py-5 mb-10 mb-lg-16'>
              <div className='container-fluid'>
                <a className='navbar-brand' href='#'>
                  <img
                    src='images/Group-2.svg'
                    alt=''
                    width={200}
                  />
                </a>
                <button className='btn p-0 d-lg-none navbar-burger'>
                  <svg
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M3.5 7C3.22386 7 3 6.77614 3 6.5C3 6.22386 3.22386 6 3.5 6H20.5C20.7761 6 21 6.22386 21 6.5C21 6.77614 20.7761 7 20.5 7H3.5ZM3.5 12C3.22386 12 3 11.7761 3 11.5C3 11.2239 3.22386 11 3.5 11H20.5C20.7761 11 21 11.2239 21 11.5C21 11.7761 20.7761 12 20.5 12H3.5ZM3 16.5C3 16.7761 3.22386 17 3.5 17H20.5C20.7761 17 21 16.7761 21 16.5C21 16.2239 20.7761 16 20.5 16H3.5C3.22386 16 3 16.2239 3 16.5Z'
                      fill='#006251'
                    />
                  </svg>
                </button>
                <ul className='d-none d-lg-flex position-absolute top-50 start-50 translate-middle navbar-nav'>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>
                      About
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>
                      Houses
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>
                      Guide
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>
                      Testimonials
                    </a>
                  </li>
                </ul>
                <div className='d-none d-lg-block'>
                  <a className='btn text-light' href='#'>
                    Call us at (223) 5674-2345
                  </a>
                  <a className='btn btn-secondary' href='#'>
                    Write us
                  </a>
                </div>
              </div>
            </nav>
            <div className='container'>
              <div className='mw-2xl mx-auto text-center mb-20 mb-lg-32'>
                <span className='text-light'>Honest Family Business</span>
                <h1 className='text-white mt-2'>
                  <span>Real Estate Agency</span>
                  <span className='d-block text-secondary'>with a </span>
                  <span>Personal Touch</span>
                </h1>
              </div>
              <div className='row'>
                <div className='col-12 col-lg-4 mb-10 mb-lg-0'>
                  <div className='d-flex'>
                    <span className='mt-n2 me-5'>
                      <svg
                        width={80}
                        height={80}
                        viewBox='0 0 80 80'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect
                          x='39.598'
                          y='0.707107'
                          width={55}
                          height={55}
                          transform='rotate(45 39.598 0.707107)'
                          stroke='#FBDC8E'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M30.9313 42.2646H39.4108L36.9512 52.103C36.7735 52.8139 37.7061 53.2494 38.1371 52.6568L48.8038 37.9901C49.1243 37.5494 48.8095 36.9313 48.2646 36.9313H39.7852L42.2447 27.093C42.4225 26.3821 41.4898 25.9466 41.0588 26.5392L30.3922 41.2059C30.0717 41.6465 30.3865 42.2646 30.9313 42.2646ZM32.2405 40.9313L40.119 30.0983L38.2846 37.4363C38.1794 37.8571 38.4976 38.2646 38.9313 38.2646H46.9555L39.0769 49.0977L40.9114 41.7597C41.0166 41.3389 40.6984 40.9313 40.2646 40.9313H32.2405Z'
                          fill='#FBDC8E'
                        />
                      </svg>
                    </span>
                    <div>
                      <h5 className='text-white'>Quick response</h5>
                      <p className='text-light lead lh-lg'>
                        We have hundreds of listings waiting for you!
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-12 col-lg-4 mb-10 mb-lg-0'>
                  <div className='d-flex'>
                    <span className='mt-n2 me-5'>
                      <svg
                        width={80}
                        height={80}
                        viewBox='0 0 80 80'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect
                          x='39.598'
                          y='0.707107'
                          width={55}
                          height={55}
                          transform='rotate(45 39.598 0.707107)'
                          stroke='#FBDC8E'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M30.6667 28.6667C30.6667 28.2985 30.3682 28 30 28C28.1591 28 26.6667 29.4924 26.6667 31.3333C26.6667 31.7015 26.9652 32 27.3334 32C27.7015 32 28 31.7015 28 31.3333C28 30.2288 28.8955 29.3333 30 29.3333C30.3682 29.3333 30.6667 29.0349 30.6667 28.6667ZM32.6667 40H43.0572L40.1953 42.8619C39.9349 43.1223 39.9349 43.5444 40.1953 43.8047C40.4556 44.0651 40.8777 44.0651 41.1381 43.8047L45.1381 39.8047C45.3984 39.5444 45.3984 39.1223 45.1381 38.8619L41.1381 34.8619C40.8777 34.6016 40.4556 34.6016 40.1953 34.8619C39.9349 35.1223 39.9349 35.5444 40.1953 35.8047L43.0572 38.6667H32.6667C32.2985 38.6667 32 38.9651 32 39.3333C32 39.7015 32.2985 40 32.6667 40ZM26.6667 35.3333C26.6667 34.9651 26.9652 34.6667 27.3334 34.6667C27.7015 34.6667 28 34.9651 28 35.3333V38C28 38.3682 27.7015 38.6667 27.3334 38.6667C26.9652 38.6667 26.6667 38.3682 26.6667 38V35.3333ZM27.3334 41.3333C26.9652 41.3333 26.6667 41.6318 26.6667 42V44.6667C26.6667 45.0349 26.9652 45.3333 27.3334 45.3333C27.7015 45.3333 28 45.0349 28 44.6667V42C28 41.6318 27.7015 41.3333 27.3334 41.3333ZM26.6667 48.6667C26.6667 48.2985 26.9652 48 27.3334 48C27.7015 48 28 48.2985 28 48.6667C28 49.7712 28.8955 50.6667 30 50.6667C30.3682 50.6667 30.6667 50.9651 30.6667 51.3333C30.6667 51.7015 30.3682 52 30 52C28.1591 52 26.6667 50.5076 26.6667 48.6667ZM36.6667 32C37.0349 32 37.3334 31.7015 37.3334 31.3333C37.3334 30.2288 38.2288 29.3333 39.3334 29.3333H50C51.1046 29.3333 52 30.2288 52 31.3333V48.6667C52 49.7712 51.1046 50.6667 50 50.6667H39.3334C38.2288 50.6667 37.3334 49.7712 37.3334 48.6667C37.3334 48.2985 37.0349 48 36.6667 48C36.2985 48 36 48.2985 36 48.6667C36 50.5076 37.4924 52 39.3334 52H50C51.841 52 53.3334 50.5076 53.3334 48.6667V31.3333C53.3334 29.4924 51.841 28 50 28H39.3334C37.4924 28 36 29.4924 36 31.3333C36 31.7015 36.2985 32 36.6667 32ZM35.3334 50.6667C35.7015 50.6667 36 50.9651 36 51.3333C36 51.7015 35.7015 52 35.3334 52H32.6667C32.2985 52 32 51.7015 32 51.3333C32 50.9651 32.2985 50.6667 32.6667 50.6667H35.3334ZM36 28.6667C36 28.2985 35.7015 28 35.3334 28H32.6667C32.2985 28 32 28.2985 32 28.6667C32 29.0349 32.2985 29.3333 32.6667 29.3333H35.3334C35.7015 29.3333 36 29.0349 36 28.6667Z'
                          fill='#FBDC8E'
                        />
                      </svg>
                    </span>
                    <div>
                      <h5 className='text-white'>Showing every day</h5>
                      <p className='text-light lead lh-lg'>
                        See your new home tomorrow
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-12 col-lg-4'>
                  <div className='d-flex'>
                    <span className='mt-n2 me-5'>
                      <svg
                        width={80}
                        height={80}
                        viewBox='0 0 80 80'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect
                          x='39.598'
                          y='0.707107'
                          width={55}
                          height={55}
                          transform='rotate(45 39.598 0.707107)'
                          stroke='#FBDC8E'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M31.3333 28C29.4924 28 28 29.4924 28 31.3333V48.6667C28 50.5076 29.4924 52 31.3333 52H48.6667C50.5076 52 52 50.5076 52 48.6667V32.6667C52 32.4899 51.9298 32.3203 51.8047 32.1953L47.8047 28.1953C47.6797 28.0702 47.5101 28 47.3333 28H31.3333ZM33.3333 50.6667V40.6667C33.3333 40.2985 33.6318 40 34 40H46C46.3682 40 46.6667 40.2985 46.6667 40.6667V50.6667H48.6667C49.7712 50.6667 50.6667 49.7712 50.6667 48.6667V32.9428L47.0572 29.3333H44V34C44 34.3682 43.7015 34.6667 43.3333 34.6667H32.6667C32.2985 34.6667 32 34.3682 32 34V29.3333H31.3333C30.2288 29.3333 29.3333 30.2288 29.3333 31.3333V48.6667C29.3333 49.7712 30.2288 50.6667 31.3333 50.6667H33.3333ZM34.6667 41.3333V50.6667H45.3333V41.3333H34.6667ZM33.3333 29.3333H40V33.3333H33.3333V29.3333ZM41.3333 33.3333H42.6667V29.3333H41.3333V33.3333Z'
                          fill='#FBDC8E'
                        />
                      </svg>
                    </span>
                    <div>
                      <h5 className='text-white'>Be a part of family</h5>
                      <p className='text-light lead lh-lg'>
                        We are a family business and we treat our customers as
                        such.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='d-none navbar-menu position-fixed top-0 start-0 bottom-0 w-75 mw-sm'
            style={{ zIndex: 9999 }}
          >
            <div
              className='navbar-backdrop position-fixed top-0 start-0 end-0 bottom-0 bg-primary'
              style={{ opacity: '90%' }}
            />
            <nav className='position-relative h-100 w-100 d-flex flex-column py-6 px-6 navbar-light bg-white overflow-auto'>
              <div className='d-flex align-items-center mb-10'>
                <a className='me-auto navbar-brand' href='#'>
                  <img
                    src='images/Group-2.svg'
                    alt=''
                    width={200}
                  />
                </a>
                <button
                  className='navbar-close btn-close'
                  type='button'
                  aria-label='Close'
                />
              </div>
              <div>
                <ul className='nav flex-column'>
                  <li className='nav-item mb-4'>
                    <a className='nav-link' href='#'>
                      About
                    </a>
                  </li>
                  <li className='nav-item mb-4'>
                    <a className='nav-link' href='#'>
                      Houses
                    </a>
                  </li>
                  <li className='nav-item mb-4'>
                    <a className='nav-link' href='#'>
                      Guide
                    </a>
                  </li>
                  <li className='nav-item mb-4'>
                    <a className='nav-link' href='#'>
                      Testimonials
                    </a>
                  </li>
                </ul>
              </div>
              <div className='mt-auto'>
                <div className='py-6'>
                  <a className='w-100 btn btn-primary mb-2' href='#'>
                    Call us at (223) 5674-2345
                  </a>
                  <a className='w-100 btn btn-secondary' href='#'>
                    Write us
                  </a>
                </div>
                <p className='mb-4 small text-center text-muted'>
                  © 2021 All rights reserved.
                </p>
              </div>
            </nav>
          </div>
        </section>
        <section className='py-20 overflow-hidden'>
          <div className='container'>
            <div className='mw-xl mx-auto mb-12 text-center'>
              <span className='badge bg-secondary-light'>
                Vermont- Shelburne, Burlington, South Burlington, Winooski,
                Williston, Essex Junction{' '}
              </span>
              <h2 className='mt-6'>Looking for a home? Contact us!</h2>
            </div>
            <div className='mw-xl mx-auto mb-8 mb-lg-16 d-flex flex-wrap justify-content-between'>
              <button className='btn border-0 px-8 pb-4 col-12 col-md-auto border-2 border-success border-bottom fw-bold'>
                Bungalow
              </button>
              <button className='btn border-0 px-8 pb-4 col-12 col-md-auto text-muted'>
                Contemporary
              </button>
              <button className='btn border-0 px-8 pb-4 col-12 col-md-auto text-muted'>
                Ranch
              </button>
              <button className='btn border-0 px-8 pb-4 col-12 col-md-auto text-muted'>
                Art Deco
              </button>
            </div>
            <div className='row mb-10 mb-lg-16'>
              <div className='col-12 col-lg-6 p-4'>
                <div className='row mb-n4'>
                  <div className='col-12 col-lg-6 p-4'>
                    <img
                      className='img-fluid w-100'
                      style={{ height: 255, objectFit: 'cover' }}
                      src='images/francesca-tosolini-3LjBfGTbTJY-unsplash.jpg'
                      alt=''
                    />
                  </div>
                  <div className='col-12 col-lg-6 p-4'>
                    <img
                      className='img-fluid w-100'
                      style={{ height: 255, objectFit: 'cover' }}
                      src='images/scott-webb-1ddol8rgUH8-unsplash.jpg'
                      alt=''
                    />
                  </div>
                  <div className='col-12 p-4'>
                    <div className='position-relative'>
                      <img
                        className='d-none d-lg-block position-absolute top-100 start-0 translate-middle-y'
                        src='cronos-assets/elements/dark-green-dark-warning.svg'
                        alt=''
                      />
                      <img
                        className='img-fluid w-100'
                        style={{ height: 510, objectFit: 'cover' }}
                        src='images/spacejoy-qGNgjHQjO2k-unsplash.jpg'
                        alt=''
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-6 p-4'>
                <div className='row mb-n4'>
                  <div className='col-12 p-4'>
                    <div className='position-relative'>
                      <img
                        className='d-none d-lg-block position-absolute top-0 end-0'
                        src='cronos-assets/elements/dark-green-dark-warning-right.svg'
                        alt=''
                      />
                      <img
                        className='img-fluid w-100'
                        style={{ height: 510, objectFit: 'cover' }}
                        src='images/house-g3ecea742f-1920.jpg'
                        alt=''
                      />
                    </div>
                  </div>
                  <div className='col-12 col-lg-6 p-4'>
                    <img
                      className='img-fluid w-100'
                      style={{ height: 255, objectFit: 'cover' }}
                      src='images/evelyn-paris-QR-vT8-hBZM-unsplash.jpg'
                      alt=''
                    />
                  </div>
                  <div className='col-12 col-lg-6 p-4'>
                    <img
                      className='img-fluid w-100'
                      style={{ height: 255, objectFit: 'cover' }}
                      src='images/travel-cents-WYLuNY5JG4E-unsplash.jpg'
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='text-center'>
              <a className='btn btn-primary' href='#'>
                Load More
              </a>
            </div>
          </div>
        </section>
        <section className='position-relative py-20 pb-lg-32'>
          <div className='container'>
            <div className='row'>
              <div
                className='d-none d-lg-block position-absolute top-0 start-0 bottom-0 w-50'
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80")',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
              >
                <img
                  className='position-absolute top-0 end-0'
                  src='cronos-assets/elements/dark-green-dark-warning-right.svg'
                  alt=''
                />
                <img
                  className='position-absolute bottom-0 start-0'
                  src='cronos-assets/elements/dark-green-dark-warning.svg'
                  alt=''
                />
              </div>
              <div className='col-12 col-lg-6 ms-auto'>
                <div className='mw-lg-md ms-lg-auto'>
                  <h3 className='mb-4'>
                    Every client deserves the best advice
                  </h3>
                  <p className='lead lh-lg text-muted mb-8'>
                    Our business motto is: the client is always right and we do
                    everything so that our customers feel as such. We consider
                    Home in Vermont as a family and we integrate new team
                    members with warmth and efficiency. It matters to us that
                    our clients feel part of the team.
                  </p>
                  <ul className='list-unstyled'>
                    <li className='d-flex align-items-center mb-6'>
                      <span
                        className='d-inline-flex me-4 align-items-center justify-content-center bg-light rounded-circle'
                        style={{ width: 48, height: 48 }}
                      >
                        <svg
                          style={{ width: 24, height: 24 }}
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M7 20H20'
                            stroke='#006251'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M4 20V17L17 4L20 7L7 20H4Z'
                            stroke='#006251'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M17 10L14 7'
                            stroke='#006251'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </span>
                      <h6 className='fw-normal mb-0'>Family values</h6>
                    </li>
                    <li className='d-flex align-items-center mb-6'>
                      <span
                        className='d-inline-flex me-4 align-items-center justify-content-center bg-light rounded-circle'
                        style={{ width: 48, height: 48 }}
                      >
                        <svg
                          style={{ width: 24, height: 24 }}
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z'
                            stroke='#006251'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M8 11.5L11 14.5L17 8.5'
                            stroke='#006251'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </span>
                      <h6 className='fw-normal mb-0'>Trust as business base</h6>
                    </li>
                    <li className='d-flex align-items-center'>
                      <span
                        className='d-inline-flex me-4 align-items-center justify-content-center bg-light rounded-circle'
                        style={{ width: 48, height: 48 }}
                      >
                        <svg
                          style={{ width: 24, height: 24 }}
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M12 15C13.933 15 15.5 13.433 15.5 11.5C15.5 9.567 13.933 8 12 8C10.067 8 8.5 9.567 8.5 11.5C8.5 13.433 10.067 15 12 15Z'
                            stroke='#006251'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M21 11.9999C21.003 14.3428 20.0892 16.594 18.454 18.2719C17.6162 19.1363 16.6131 19.8232 15.5043 20.2919C14.3955 20.7606 13.2038 21.0013 12 20.9999C10.7962 21.0013 9.6045 20.7606 8.49571 20.2919C7.38693 19.8232 6.38379 19.1363 5.546 18.2719C4.51822 17.2144 3.76604 15.9206 3.35561 14.5042C2.94518 13.0878 2.88908 11.5922 3.19223 10.1491C3.49539 8.7059 4.14852 7.35934 5.09418 6.22781C6.03984 5.09629 7.24906 4.21447 8.61547 3.65991C9.98189 3.10535 11.4636 2.89504 12.9304 3.04749C14.3972 3.19994 15.804 3.71046 17.0272 4.53417C18.2503 5.35787 19.2523 6.46952 19.9451 7.77133C20.6378 9.07314 21.0001 10.5252 21 11.9999V11.9999Z'
                            stroke='#006251'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M5.5459 18.272C6.28829 17.2572 7.25974 16.432 8.38121 15.8634C9.50269 15.2948 10.7425 14.999 11.9999 15C13.2573 14.999 14.4971 15.2948 15.6186 15.8634C16.7401 16.432 17.7115 17.2572 18.4539 18.272'
                            stroke='#006251'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </span>
                      <h6 className='fw-normal mb-0'>Rooted in community</h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className='py-20 bg-secondary'
          style={{
            backgroundImage: 'url("cronos-assets/elements/lines2.svg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div className='container'>
            <div className='mw-4xl mx-auto text-center'>
              <span className='badge bg-secondary-light'>
                A real estate agency that will take you there
              </span>
              <h2 className='mt-6 mb-4'>
                Start your journey to the dream house now!
              </h2>
              <p className='mb-6 mw-2xl mx-auto lead lh-lg'>
                We believe that every client deserves the best advice and that
                is why we engage on a continuous basis to implement new tools
                and services, offered on demand and at the lowest cost.
              </p>
              <a
                className='btn btn-primary w-100 d-md-inline mb-2 mb-lg-0 me-sm-4'
                href='#'
              >
                Activate your demo
              </a>
              <a className='btn btn-dark w-100 d-md-inline' href='#'>
                Share with friends
              </a>
            </div>
          </div>
        </section>
        <section className='py-20'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-12 col-lg-6 mb-10 mb-lg-0'>
                <div
                  className='position-relative mw-lg-md'
                  style={{ height: 536 }}
                >
                  <img
                    className='d-none d-xl-block position-absolute bottom-0 start-0 translate-middle-x'
                    src='cronos-assets/elements/green-light-left.svg'
                    alt=''
                  />
                  <img
                    className='d-none d-xl-block position-absolute top-0 end-0'
                    src='cronos-assets/elements/warning-light-small.svg'
                    alt=''
                  />
                  <img
                    className='img-fluid h-100 w-100'
                    style={{ objectFit: 'cover' }}
                    src='images/pexels-photomix-company-101808.jpg'
                    alt=''
                  />
                </div>
              </div>
              <div className='col-12 col-lg-6 mb-10 mb-lg-0'>
                <div className='mw-lg-md'>
                  <h3 className='mb-14'>
                    3 Reasons To Remember Us When Looking for Real Estate
                  </h3>
                  <div className='row'>
                    <div className='col-12 col-lg-6 mb-10'>
                      <span
                        className='d-flex mb-6 align-items-center justify-content-center h6 bg-light'
                        style={{ width: 64, height: 64 }}
                      >
                        1
                      </span>
                      <h6 className='mb-3'>Commitment</h6>
                      <p className='lead lh-lg text-muted'>
                        Our commitment to providing excellent service at all
                        times is what kept us in business all these years.
                        Valuable experience of our brokers will let us keep to
                        our promises.
                      </p>
                    </div>
                    <div className='col-12 col-lg-6 mb-10'>
                      <span
                        className='d-flex mb-6 align-items-center justify-content-center h6 bg-light'
                        style={{ width: 64, height: 64 }}
                      >
                        2
                      </span>
                      <h6 className='mb-3'>Empathy</h6>
                      <p className='lead lh-lg text-muted'>
                        We will listen to what you have to say and go beyond
                        just showing houses. We negotiate with sellers to get
                        their consent on price and terms in order to meet your
                        current budget.
                      </p>
                    </div>
                    <div className='col-12 col-lg-6 mb-10 mb-lg-0'>
                      <span
                        className='d-flex mb-6 align-items-center justify-content-center h6 bg-light'
                        style={{ width: 64, height: 64 }}
                      >
                        3
                      </span>
                      <h6 className='mb-3'>Community</h6>
                      <p className='lead lh-lg text-muted'>
                        Trust we have gained over the years lets us present the
                        best offers from small communities.{' '}
                      </p>
                    </div>
                    <div className='col-12 col-lg-6'>
                      <span
                        className='d-flex mb-6 align-items-center justify-content-center h6 bg-light'
                        style={{ width: 64, height: 64 }}
                      >
                        4
                      </span>
                      <h6 className='mb-3'>You can rest</h6>
                      <p className='lead lh-lg text-muted'>
                        We will take care of all your needs so you can relax and
                        sleep well. We will contact you regularly with updates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='position-relative py-20'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-12 col-lg-auto me-lg-8'>
                <button
                  className='d-none btn btn-primary me-16 d-lg-flex align-items-center justify-content-center p-0'
                  style={{ width: 64, height: 64 }}
                >
                  <svg
                    className='text-light'
                    style={{ width: 24, height: 24 }}
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M8.70711 12H18.5C18.7761 12 19 12.2239 19 12.5C19 12.7761 18.7761 13 18.5 13H8.70711L11.8536 16.1464C12.0488 16.3417 12.0488 16.6583 11.8536 16.8536C11.6583 17.0488 11.3417 17.0488 11.1464 16.8536L7.14645 12.8536C6.95118 12.6583 6.95118 12.3417 7.14645 12.1464L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L8.70711 12Z'
                      fill='white'
                    />
                  </svg>
                </button>
              </div>
              <div className='col-12 col-lg-8 mx-auto'>
                <div className='row align-items-center'>
                  <div className='col-12 col-lg-6 mb-10 mb-lg-0'>
                    <h2 className='text-primary mb-2'>Sybil Smith</h2>
                    <h3 className='mb-4'>Your Agent</h3>
                    <p className='lead lh-lg text-muted mb-6'>
                      15 years of experience as realtor lets Sybil be a best
                      partner in that quest.{' '}
                    </p>
                    <div className='d-flex align-items-center'>
                      <a className='me-8' href='#'>
                        <img
                          src='images/amy-hirschi-b3AYk8HKCl0-unsplash-1.jpg'
                          alt=''
                        />
                      </a>
                      <a className='me-8' href='#'>
                        <img
                          src='cronos-assets/logos/brands/twitter.svg'
                          alt=''
                        />
                      </a>
                      <a className='me-8' href='#'>
                        <img
                          src='cronos-assets/logos/brands/Instagram.svg'
                          alt=''
                        />
                      </a>
                      <a href='#'>
                        <img
                          src='cronos-assets/logos/brands/LinkedIn.svg'
                          alt=''
                        />
                      </a>
                    </div>
                  </div>
                  <div className='col-12 col-lg-6'>
                    <img
                      className='mb-5 img-fluid h-100'
                      style={{ objectFit: 'cover' }}
                      src='images/amy-hirschi-b3AYk8HKCl0-unsplash-1.jpg'
                      alt=''
                    />
                    <div className='text-center'>
                      <button
                        className='btn btn-light p-0 me-2'
                        style={{
                          width: 12,
                          height: 12,
                          transform: 'rotate(45deg)',
                        }}
                      />
                      <button
                        className='btn btn-light p-0 me-2'
                        style={{
                          width: 12,
                          height: 12,
                          transform: 'rotate(45deg)',
                        }}
                      />
                      <button
                        className='btn btn-primary p-0 me-2'
                        style={{
                          width: 12,
                          height: 12,
                          transform: 'rotate(45deg)',
                        }}
                      />
                      <button
                        className='btn btn-light p-0'
                        style={{
                          width: 12,
                          height: 12,
                          transform: 'rotate(45deg)',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-auto ms-lg-8'>
                <button
                  className='d-none btn btn-primary me-16 d-lg-flex align-items-center justify-content-center p-0'
                  style={{ width: 64, height: 64 }}
                >
                  <svg
                    className='text-light'
                    style={{ width: 24, height: 24 }}
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M17.2929 13H7.5C7.22386 13 7 12.7761 7 12.5C7 12.2239 7.22386 12 7.5 12H17.2929L14.1464 8.85355C13.9512 8.65829 13.9512 8.34171 14.1464 8.14645C14.3417 7.95118 14.6583 7.95118 14.8536 8.14645L18.8536 12.1464C19.0488 12.3417 19.0488 12.6583 18.8536 12.8536L14.8536 16.8536C14.6583 17.0488 14.3417 17.0488 14.1464 16.8536C13.9512 16.6583 13.9512 16.3417 14.1464 16.1464L17.2929 13Z'
                      fill='white'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className='py-20'>
          <div className='container'>
            <div className='row align-items-center mb-8 mb-lg-16'>
              <div className='col-12 col-lg-6 mb-8 mb-lg-0'>
                <div className='mw-lg-md'>
                  <span className='badge bg-secondary-light'>
                    How to Find Your House
                  </span>
                  <h3 className='mt-6 mb-6'>
                    6 Steps to Make Your Dream Come True
                  </h3>
                  <p className='lead lh-lg text-muted'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque massa nibh, pulvinar vitae aliquet nec,
                    accumsan aliquet orci.
                  </p>
                </div>
              </div>
              <div className='col-12 col-lg-6'>
                <div className='position-relative' style={{ height: 304 }}>
                  <button className='position-absolute top-50 start-50 translate-middle btn'>
                    <svg
                      width={74}
                      height={74}
                      viewBox='0 0 74 74'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M0.333374 37C0.333374 57.2504 16.7496 73.6667 37 73.6667C57.2505 73.6667 73.6667 57.2504 73.6667 37C73.6667 16.7495 57.2505 0.333313 37 0.333313C16.7496 0.333313 0.333374 16.7495 0.333374 37ZM70 37C70 55.2254 55.2254 70 37 70C18.7747 70 4.00005 55.2254 4.00005 37C4.00005 18.7746 18.7747 3.99998 37 3.99998C55.2254 3.99998 70 18.7746 70 37ZM22.3334 25.3325C22.3334 24.1181 22.6684 22.9272 23.3017 21.891C25.2024 18.7807 29.2647 17.8002 32.3749 19.7009L52.491 31.9941C53.2852 32.4794 53.9525 33.1467 54.4378 33.9408C56.1273 36.7055 55.2557 40.3164 52.491 42.0059L32.3749 54.2991C31.3387 54.9323 30.1478 55.2674 28.9334 55.2674C25.2883 55.2674 22.3334 52.3125 22.3334 48.6674V25.3325ZM26 48.6674V25.3325C26 24.7928 26.149 24.2635 26.4304 23.8029C27.2752 22.4206 29.0806 21.9848 30.463 22.8296L50.5791 35.1227C50.8769 35.3047 51.1271 35.555 51.3091 35.8528C51.9427 36.8895 51.6158 38.2436 50.5791 38.8772L30.463 51.1704C30.0024 51.4518 29.4731 51.6007 28.9334 51.6007C27.3133 51.6007 26 50.2874 26 48.6674Z'
                        fill='white'
                      />
                    </svg>
                  </button>
                  <img
                    className='d-none d-lg-block position-absolute bottom-0 start-0 translate-middle-x'
                    src='cronos-assets/elements/green-light-left.svg'
                    alt=''
                  />
                  <img
                    className='d-none d-lg-block position-absolute top-0 start-100 translate-middle-x'
                    src='cronos-assets/elements/warning-light-small.svg'
                    alt=''
                  />
                  <img
                    className='img-fluid w-100 h-100'
                    style={{ objectFit: 'cover' }}
                    src='images/pexels-cottonbro-4569902.jpg'
                    alt=''
                  />
                </div>
              </div>
            </div>
            <div className='row mb-n8'>
              <div className='col-12 col-lg-4 mb-8'>
                <span
                  className='d-flex align-items-center justify-content-center h6 bg-primary text-white'
                  style={{ width: 64, height: 64 }}
                >
                  1
                </span>
                <h6 className='mt-6 mb-3'>Research your future</h6>
                <p className='lead lh-lg text-muted'>
                  Etiam pellentesque non nibh non pulvinar. Mauris posuere,
                  tellus sit amet tempus vestibulum.
                </p>
              </div>
              <div className='col-12 col-lg-4 mb-8'>
                <span
                  className='d-flex align-items-center justify-content-center h6 bg-primary text-white'
                  style={{ width: 64, height: 64 }}
                >
                  2
                </span>
                <h6 className='mt-6 mb-3'>
                  Design the floor plan to reflect your family and lifestyle
                </h6>
                <p className='lead lh-lg text-muted'>
                  Etiam pellentesque non nibh non pulvinar. Mauris posuere,
                  tellus sit amet tempus vestibulum.
                </p>
              </div>
              <div className='col-12 col-lg-4 mb-8'>
                <span
                  className='d-flex align-items-center justify-content-center h6 bg-primary text-white'
                  style={{ width: 64, height: 64 }}
                >
                  3
                </span>
                <h6 className='mt-6 mb-3'>
                  Make a list of what you like and do not like
                </h6>
                <p className='lead lh-lg text-muted'>
                  Etiam pellentesque non nibh non pulvinar. Mauris posuere,
                  tellus sit amet tempus vestibulum.
                </p>
              </div>
              <div className='col-12 col-lg-4 mb-8 mb-lg-0'>
                <span
                  className='d-flex align-items-center justify-content-center h6 bg-primary text-white'
                  style={{ width: 64, height: 64 }}
                >
                  4
                </span>
                <h6 className='mt-6 mb-3'>Analyze the needs and budgets</h6>
                <p className='lead lh-lg text-muted'>
                  Etiam pellentesque non nibh non pulvinar. Mauris posuere,
                  tellus sit amet tempus vestibulum.
                </p>
              </div>
              <div className='col-12 col-lg-4 mb-8 mb-lg-0'>
                <span
                  className='d-flex align-items-center justify-content-center h6 bg-primary text-white'
                  style={{ width: 64, height: 64 }}
                >
                  5
                </span>
                <h6 className='mt-6 mb-3'>
                  Register in our real estate agency
                </h6>
                <p className='lead lh-lg text-muted'>
                  Etiam pellentesque non nibh non pulvinar. Mauris posuere,
                  tellus sit amet tempus vestibulum.
                </p>
              </div>
              <div className='col-12 col-lg-4'>
                <span
                  className='d-flex align-items-center justify-content-center h6 bg-primary text-white'
                  style={{ width: 64, height: 64 }}
                >
                  6
                </span>
                <h6 className='mt-6 mb-3'>
                  We find the ideal property for you to buy
                </h6>
                <p className='lead lh-lg text-muted'>
                  Etiam pellentesque non nibh non pulvinar. Mauris posuere,
                  tellus sit amet tempus vestibulum.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='py-20'>
          <div className='container'>
            <div className='row justify-content-between align-items-center'>
              <div className='col-12 col-lg-auto pe-lg-5'>
                <button
                  className='d-none d-lg-inline-flex btn btn-primary align-items-center justify-content-center p-0'
                  style={{ width: 64, height: 64 }}
                >
                  <svg
                    style={{ width: 24, height: 24 }}
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M8.70711 12H18.5C18.7761 12 19 12.2239 19 12.5C19 12.7761 18.7761 13 18.5 13H8.70711L11.8536 16.1464C12.0488 16.3417 12.0488 16.6583 11.8536 16.8536C11.6583 17.0488 11.3417 17.0488 11.1464 16.8536L7.14645 12.8536C6.95118 12.6583 6.95118 12.3417 7.14645 12.1464L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L8.70711 12Z'
                      fill='white'
                    />
                  </svg>
                </button>
              </div>
              <div className='col-12 col-lg-8'>
                <div className='d-flex flex-wrap align-items-center mx-auto'>
                  <div className='row align-items-center'>
                    <div className='col-12 col-lg-5'>
                      <img
                        className='img-fluid rounded-circle mb-4'
                        style={{
                          width: 88,
                          height: 88,
                          objectFit: 'cover',
                          objectPosition: 'right',
                        }}
                        src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80'
                        alt=''
                      />
                      <h6 className='text-primary'>Danny Bailey</h6>
                      <p className='fw-bold'>Local artist</p>
                    </div>
                    <div className='d-lg-none mb-4'>
                      <button
                        className='d-inline-flex btn btn-primary align-items-center justify-content-center p-0'
                        style={{ width: 48, height: 48 }}
                      >
                        <svg
                          style={{ width: 24, height: 24 }}
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M8.70711 12H18.5C18.7761 12 19 12.2239 19 12.5C19 12.7761 18.7761 13 18.5 13H8.70711L11.8536 16.1464C12.0488 16.3417 12.0488 16.6583 11.8536 16.8536C11.6583 17.0488 11.3417 17.0488 11.1464 16.8536L7.14645 12.8536C6.95118 12.6583 6.95118 12.3417 7.14645 12.1464L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L8.70711 12Z'
                            fill='white'
                          />
                        </svg>
                      </button>
                      <button
                        className='d-inline-flex btn btn-primary align-items-center justify-content-center p-0'
                        style={{ width: 48, height: 48 }}
                      >
                        <svg
                          style={{ width: 24, height: 24 }}
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M17.2929 13H7.5C7.22386 13 7 12.7761 7 12.5C7 12.2239 7.22386 12 7.5 12H17.2929L14.1464 8.85355C13.9512 8.65829 13.9512 8.34171 14.1464 8.14645C14.3417 7.95118 14.6583 7.95118 14.8536 8.14645L18.8536 12.1464C19.0488 12.3417 19.0488 12.6583 18.8536 12.8536L14.8536 16.8536C14.6583 17.0488 14.3417 17.0488 14.1464 16.8536C13.9512 16.6583 13.9512 16.3417 14.1464 16.1464L17.2929 13Z'
                            fill='white'
                          />
                        </svg>
                      </button>
                    </div>
                    <div className='col-12 col-lg-7'>
                      <p className='lead lh-lg text-muted'>
                        Home in Vermont is a fantastic real estate agency. The
                        team is very professional and the service is great. I am
                        making my purchase thanks to them, they gave me
                        excellent advice and quality service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-auto ps-lg-5'>
                <button
                  className='d-none d-lg-inline-flex btn btn-primary align-items-center justify-content-center p-0'
                  style={{ width: 64, height: 64 }}
                >
                  <svg
                    style={{ width: 24, height: 24 }}
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M17.2929 13H7.5C7.22386 13 7 12.7761 7 12.5C7 12.2239 7.22386 12 7.5 12H17.2929L14.1464 8.85355C13.9512 8.65829 13.9512 8.34171 14.1464 8.14645C14.3417 7.95118 14.6583 7.95118 14.8536 8.14645L18.8536 12.1464C19.0488 12.3417 19.0488 12.6583 18.8536 12.8536L14.8536 16.8536C14.6583 17.0488 14.3417 17.0488 14.1464 16.8536C13.9512 16.6583 13.9512 16.3417 14.1464 16.1464L17.2929 13Z'
                      fill='white'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className='py-20'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-12 col-lg-6 mb-10 mb-lg-0'>
                <div className='mw-lg-sm mx-auto'>
                  <h2 className='mb-6'>
                    Tell us more about the home you are looking for
                  </h2>
                  <p className='lead lh-lg text-muted mb-6'>
                    What type of house would you like to live in? How has your
                    real estate experience been? What is the most important
                    thing in a house? What is your favorite room in your house?
                    Why do you want to move? What is your biggest fear?
                  </p>
                  <a
                    className='btn btn-primary d-block d-md-inline-block mb-6 mb-md-0 mb-lg-0 me-md-4'
                    href='#'
                  >
                    Write to us
                  </a>
                  <a
                    className='link-dark text-decoration-none fw-bold'
                    href='#'
                  >
                    Call us at (223) 2445-5467
                  </a>
                </div>
              </div>
              <div className='col-12 col-lg-6 position-relative'>
                <img
                  className='d-none d-lg-block position-absolute top-0 start-0 ms-n3'
                  style={{ width: 296, height: 296 }}
                  src='cronos-assets/elements/dark-green-dark-warning-right.svg'
                  alt=''
                />
                <div
                  className='d-flex flex-column mx-auto'
                  style={{ width: 296 }}
                >
                  <img
                    className='ms-auto'
                    style={{ width: 148, height: 148 }}
                    src='cronos-assets/elements/grey-square.svg'
                    alt=''
                  />
                  <div className='d-flex justify-content-end align-items-end'>
                    <img
                      className='d-none d-lg-block'
                      style={{ width: 148, height: 148 }}
                      src='cronos-assets/elements/grey-square.svg'
                      alt=''
                    />
                    <img
                      className='ms-auto img-fluid'
                      style={{ width: 296, height: 296, objectFit: 'cover' }}
                      src='https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=890&q=80'
                      alt=''
                    />
                  </div>
                  <div className='d-flex justify-content-end'>
                    <img
                      style={{ width: 148, height: 148 }}
                      src='cronos-assets/elements/grey-square.svg'
                      alt=''
                    />
                    <img
                      className='img-fluid'
                      style={{ height: 148, width: 148, objectFit: 'cover' }}
                      src='https://images.unsplash.com/photo-1600275669439-14e40452d20b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80'
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-20'>
          <div className='container'>
            <div className='max-w-xl mx-auto'>
              <div className='text-center pb-10 border-bottom'>
                <a className='d-inline-block mb-10 navbar-brand' href='#'>
                  <img
                    src='images/Group-3.svg'
                    alt=''
                    width={200}
                  />
                </a>
                <ul className='list-unstyled d-flex flex-wrap justify-content-center mb-10'>
                  <li className='mb-5 mb-lg-0 me-6 me-lg-12'>
                    <a
                      className='small link-dark text-decoration-none fw-bold'
                      href='#'
                    >
                      About
                    </a>
                  </li>
                  <li className='mb-5 mb-lg-0 me-6 me-lg-12'>
                    <a
                      className='small link-dark text-decoration-none fw-bold'
                      href='#'
                    >
                      Company
                    </a>
                  </li>
                  <li className='mb-5 mb-lg-0 me-6 me-lg-12'>
                    <a
                      className='small link-dark text-decoration-none fw-bold'
                      href='#'
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      className='small link-dark text-decoration-none fw-bold'
                      href='#'
                    >
                      Testimonials
                    </a>
                  </li>
                </ul>
                <div className='d-flex flex-wrap justify-content-center align-items-center'>
                  <a className='text-decoration-none me-10' href='#'>
                    <img src='cronos-assets/logos/brands/facebook.svg' alt='' />
                  </a>
                  <a className='text-decoration-none me-10' href='#'>
                    <img src='cronos-assets/logos/brands/twitter.svg' alt='' />
                  </a>
                  <a className='text-decoration-none me-10' href='#'>
                    <img
                      src='cronos-assets/logos/brands/Instagram.svg'
                      alt=''
                    />
                  </a>
                  <a className='text-decoration-none me-10' href='#'>
                    <img src='cronos-assets/logos/brands/github.svg' alt='' />
                  </a>
                  <a className='text-decoration-none' href='#'>
                    <img src='cronos-assets/logos/brands/LinkedIn.svg' alt='' />
                  </a>
                </div>
              </div>
              <p className='pt-10 small text-muted text-center'>
                All rights reserved © Shuffle 2022
              </p>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}

