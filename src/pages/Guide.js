import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Guide() {
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
            <div className='mw-2xl mx-auto'>
              <h3 className='mb-6'>
                When I was a developer, I often had a hundred questions when
              </h3>
              <p className='mb-8 lead lh-lg text-muted'>
                Building websites from wireframes that I had received. Some of
                those questions were:
              </p>
              <ul className='list-unstyled mb-8'>
                <li className='d-flex mb-6 align-items-center'>
                  <span
                    className='flex-shrink-0 d-flex me-3 align-items-center justify-content-center bg-primary rounded-circle text-light'
                    style={{ width: 28, height: 28 }}
                  >
                    1
                  </span>
                  <h6 className='fw-normal mb-0'>
                    How will this design scale when I shrink the browser window?
                  </h6>
                </li>
                <li className='d-flex mb-6 align-items-center'>
                  <span
                    className='flex-shrink-0 d-flex me-3 align-items-center justify-content-center bg-primary rounded-circle text-light'
                    style={{ width: 28, height: 28 }}
                  >
                    2
                  </span>
                  <h6 className='fw-normal mb-0'>
                    What happens when this shape is filled out incorrectly?
                  </h6>
                </li>
                <li className='d-flex align-items-center'>
                  <span
                    className='flex-shrink-0 d-flex me-3 align-items-center justify-content-center bg-primary rounded-circle text-light'
                    style={{ width: 28, height: 28 }}
                  >
                    3
                  </span>
                  <h6 className='fw-normal mb-0'>
                    What are the options in this sorting filter, and what do
                    they do?
                  </h6>
                </li>
              </ul>
              <p className='mb-6 lead lh-lg text-muted'>
                These types of questions led me to miss numerous deadlines, and
                I wasted time and energy in back-and-forth communication. Sadly,
                this situation could have been avoided if the wireframes had
                provided enough detail.
              </p>
              <p className='mb-6 lead lh-lg text-muted'>
                Now that I am a UX designer, I notice that some designers tend
                to forget that wireframes are equally creative and technical. We
                are responsible for designing great ideas, but we are also
                responsible for creating product specifications. I admit that
                there can be so many details to remember that it’s easy to lose
                track. To save time and energy for myself, I gathered all of my
                years of wireframing knowledge into a single checklist that I
                refer to throughout the process. And now I am sharing this
                knowledge with you, so that you can get back to being creative.
              </p>
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

