import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Testimonials() {
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
        <section className='position-relative py-20 overflow-hidden'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-lg-6 mb-8 mb-lg-0'>
                <div className='mw-lg-md'>
                  <div
                    className='position-relative mb-6'
                    style={{ height: 445 }}
                  >
                    <img
                      className='position-absolute bottom-0 start-0 translate-middle-x'
                      src='cronos-assets/elements/green-light-left.svg'
                      alt=''
                    />
                    <img
                      className='position-absolute top-0 end-0'
                      src='cronos-assets/elements/dark-green-dark-warning.svg'
                      alt=''
                    />
                    <img
                      className='img-fluid h-100'
                      style={{ objectFit: 'cover' }}
                      src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80'
                      alt=''
                    />
                  </div>
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
              <div className='col-12 col-lg-6 h-100'>
                <img
                  className='mb-8'
                  style={{ width: 64 }}
                  src='cronos-assets/elements/quote.svg'
                  alt=''
                />
                <h2 className='mb-4'>
                  Home in Vermont is a fantastic real estate agency.{' '}
                </h2>
                <p className='lead lh-lg text-muted mb-8'>
                  The team is very professional and the service is great. I am
                  making my purchase thanks to hem, they gave me excellent
                  advice and quality service.
                </p>
                <h6 className='text-primary'>Danny Bailey</h6>
                <p className='text-bold'>Local artist</p>
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

