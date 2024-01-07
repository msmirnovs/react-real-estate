import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function About() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <nav className='navbar navbar-expand-lg navbar-light py-5'>
          <div className='container-fluid'>
            <a className='navbar-brand' href='#'>
              <img
                src='images/Group-3.svg'
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
            <ul className='d-none d-lg-flex me-auto navbar-nav'>
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
              <a className='btn me-2' href='#'>
                Call us at (223) 5674-2345
              </a>
              <a className='btn btn-secondary' href='#'>
                Write us
              </a>
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
                    src='images/Group-3.svg'
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
                    Write us
                  </a>
                  <a className='w-100 btn btn-secondary' href='#'>
                    Call us at (223) 5674-2345
                  </a>
                </div>
                <p className='mb-4 small text-center text-muted'>
                  © 2021 All rights reserved.
                </p>
              </div>
            </nav>
          </div>
        </nav>
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
                          src='cronos-assets/logos/brands/facebook.svg'
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

