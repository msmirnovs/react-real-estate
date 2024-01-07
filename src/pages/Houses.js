import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Houses() {
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
        <section className='py-20 position-relative overflow-hidden'>
          <div className='container'>
            <div className='row align-items-center py-lg-20'>
              <div className='col-12 col-lg-6 mb-12 mb-lg-0'>
                <div className='d-flex align-items-center mb-4'>
                  <a
                    className='text-muted text-decoration-none fw-bold'
                    style={{ fontSize: 12 }}
                    href='#'
                  >
                    Home
                  </a>
                  <svg
                    className='mx-2'
                    width={4}
                    height={8}
                    viewBox='0 0 4 8'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M0.12038 7.17461C-0.0593306 7.38428 -0.0350499 7.69993 0.174613 7.87964C0.384276 8.05935 0.699926 8.03507 0.879637 7.8254L3.87964 4.3254C4.04013 4.13816 4.04013 3.86186 3.87964 3.67461L0.879637 0.174613C0.699926 -0.0350495 0.384276 -0.0593303 0.174613 0.120381C-0.0350496 0.300092 -0.0593303 0.615742 0.120381 0.825405L2.84147 4.00001L0.12038 7.17461Z'
                      fill='#A8A29E'
                    />
                  </svg>
                  <a
                    className='text-muted text-decoration-none fw-bold'
                    style={{ fontSize: 12 }}
                    href='#'
                  >
                    Blog
                  </a>
                  <svg
                    className='mx-2'
                    width={4}
                    height={8}
                    viewBox='0 0 4 8'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M0.12038 7.17461C-0.0593306 7.38428 -0.0350499 7.69993 0.174613 7.87964C0.384276 8.05935 0.699926 8.03507 0.879637 7.8254L3.87964 4.3254C4.04013 4.13816 4.04013 3.86186 3.87964 3.67461L0.879637 0.174613C0.699926 -0.0350495 0.384276 -0.0593303 0.174613 0.120381C-0.0350496 0.300092 -0.0593303 0.615742 0.120381 0.825405L2.84147 4.00001L0.12038 7.17461Z'
                      fill='#A8A29E'
                    />
                  </svg>
                  <a
                    className='text-muted text-decoration-none fw-bold'
                    style={{ fontSize: 12 }}
                    href='#'
                  >
                    Article
                  </a>
                </div>
                <h3 className='mw-md mb-4'>
                  Big rustic house in Vermont Area{' '}
                </h3>
                <div className='d-flex align-items-center'>
                  <div className='me-4'>
                    <img
                      className='img-fluid rounded-circle'
                      style={{ width: 64, height: 64 }}
                      src='images/amy-hirschi-b3AYk8HKCl0-unsplash-1.jpg'
                      alt=''
                    />
                  </div>
                  <div className='text-start'>
                    <h6 className='text-muted'>Danny Bailey</h6>
                    <h6 className='fw-normal text-muted mb-0'>
                      February 26, 2021
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='d-lg-none position-relative'>
            <img
              className='img-fluid'
              style={{ objectFit: 'cover' }}
              src='images/house-g3ecea742f-1920.jpg'
              alt=''
            />
          </div>
          <div
            className='d-none d-lg-block position-absolute top-0 mt-20 end-0 me-n32 col-6'
            style={{ height: 490 }}
          >
            <img
              className='position-absolute top-0 end-0 me-8'
              src='cronos-assets/elements/green-light-left.svg'
              alt=''
            />
            <img
              className='position-absolute bottom-0 start-0 translate-middle-x'
              src='cronos-assets/elements/green-light-left.svg'
              alt=''
            />
            <img
              className='img-fluid'
              style={{ height: '100%', objectFit: 'cover' }}
              src='images/house-g3ecea742f-1920.jpg'
              alt=''
            />
          </div>
          <div className='container mt-12 mt-lg-40'>
            <div className='mw-2xl mx-auto'>
              <p className='mb-6 lead lh-lg text-muted'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Facilisis volutpat est velit egestas dui id. Nisl nisi
                scelerisque eu ultrices vitae auctor. Mauris augue neque gravida
                in fermentum et sollicitudin. Imperdiet proin fermentum leo vel
                orci porta non pulvinar. Eu feugiat pretium nibh ipsum
                consequat. Nibh tellus molestie nunc non blandit massa enim nec
                dui. Congue eu consequat ac felis donec. Mi sit amet mauris
                commodo quis imperdiet. Dictum varius duis at consectetur lorem
                donec massa sapien. Velit egestas dui id ornare. Vivamus arcu
                felis bibendum ut tristique et.
              </p>
              <p className='mb-6 lead lh-lg text-muted'>
                Porta lorem mollis aliquam ut porttitor. Non nisi est sit amet
                facilisis magna. Viverra nam libero justo laoreet sit amet
                cursus sit. Amet risus nullam eget felis eget nunc. Amet
                volutpat consequat mauris nunc congue nisi. Rutrum quisque non
                tellus orci. Magna eget est lorem ipsum dolor sit. Dui faucibus
                in ornare quam viverra orci sagittis eu volutpat. Enim facilisis
                gravida neque convallis a cras semper. Massa tincidunt dui ut
                ornare lectus. Facilisis volutpat est velit egestas dui id
                ornare arcu odio. Enim ut sem viverra aliquet eget sit amet.
                Erat nam at lectus urna duis convallis convallis tellus. A diam
                sollicitudin tempor id. Suspendisse faucibus interdum posuere
                lorem ipsum dolor sit. Ut placerat orci nulla pellentesque
                dignissim enim sit. Sed faucibus turpis in eu mi bibendum neque
                egestas. Laoreet sit amet cursus sit. Risus in hendrerit gravida
                rutrum quisque non tellus orci ac. Interdum posuere lorem ipsum
                dolor sit amet.
              </p>
              <p className='lead lh-lg text-muted'>
                Nibh tellus molestie nunc non blandit. Congue nisi vitae
                suscipit tellus mauris a diam maecenas. Lacus sed turpis
                tincidunt id aliquet risus feugiat in ante. Cras pulvinar mattis
                nunc sed.
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

