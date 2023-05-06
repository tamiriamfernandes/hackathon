import { FacebookLogo, InstagramLogo,YoutubeLogo,TwitterLogo } from "phosphor-react";


function Footer() {
	return (
		<>
			<footer className='mt-28 relative bg-[#708D81] pt-8'>
				<div className='container mx-auto px-4'>
					<div className='flex flex-wrap text-left lg:text-left'>
						<div className='w-full lg:w-6/12 px-4'>
							<h4 className='text-3xl fonat-semibold text-white'>
								Step Travel!
							</h4>
							<h5 className='text-lg mt-0 mb-2 text-white'>
								Find us on any of these platforms, we respond 1-2 business days.
							</h5>
							<div className='mt-6 lg:mb-0'>
								<button
									className='ml-2 text-lightBlue-600 shadow-lg font-normal h-5 w-5 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'
									type='button'
								>
									 <FacebookLogo  size={30} color="#eef0f1" weight="thin" />
								</button>
								<button
									className='ml-2 text-lightBlue-600 shadow-lg font-normal h-5 w-5 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'
									type='button'
								>
									 <InstagramLogo size={30} color="#eef0f1" weight="thin" />
								</button>
								<button
									className='ml-2 text-lightBlue-600 shadow-lg font-normal h-5 w-5 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'
									type='button'
								>
									 <YoutubeLogo size={30} color="#eef0f1" weight="thin" />
								</button>
								<button
									className='ml-2 text-lightBlue-600 shadow-lg font-normal h-5 w-5 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'
									type='button'
								>
									<TwitterLogo size={30} color="#eef0f1" weight="thin" />
								</button>
							</div>
						</div>
						<div className='w-full lg:w-6/12 grid grid-cols-2 px-4'>
							<div className='flex flex-wrap items-top '>
								<div className='w-full lg:w-4/12 px-4 ml-auto'>
									<ul className='list-unstyled'>
										<li>
											<a
												className='text-white  font-semibold block pb-2 text-sm'
												href='https://blog.creative-tim.com?ref=njs-profile'
											>
												Blog
											</a>
										</li>
									</ul>
								</div>
								<div className='w-full lg:w-4/12 px-4'>
									<ul className='list-unstyled'>
										<li>
											<a
												className='text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm'
												href='https://creative-tim.com/terms?ref=njs-profile'
											>
												Terms &amp; Conditions
											</a>
										</li>
										<li>
											<a
												className='text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm'
												href='https://creative-tim.com/privacy?ref=njs-profile'
											>
												Privacy Policy
											</a>
										</li>
										<li>
											<a
												className='text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm'
												href='https://creative-tim.com/contact-us?ref=njs-profile'
											>
												Contact Us
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className='flex flex-wrap items-top'>
								<div className='w-full lg:w-4/12 px-4 ml-auto -mb-4'>
									<ul className='list-unstyled'>
										<li>
											<a
												className='text-white  font-semibold block pb-2 text-sm'
												href='https://blog.creative-tim.com?ref=njs-profile'
											>
												Blog
											</a>
										</li>
									</ul>
								</div>
								<div className='w-full lg:w-4/12 px-4'>
									<ul className='list-unstyled'>
										<li>
											<a
												className='text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm'
												href='https://creative-tim.com/terms?ref=njs-profile'
											>
												Terms &amp; Conditions
											</a>
										</li>
										<li>
											<a
												className='text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm'
												href='https://creative-tim.com/privacy?ref=njs-profile'
											>
												Privacy Policy
											</a>
										</li>
										<li>
											<a
												className='text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm'
												href='https://creative-tim.com/contact-us?ref=njs-profile'
											>
												Contact Us
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<hr className='my-6 border-blueGray-300' />
					<div className='flex flex-wrap items-center md:justify-between justify-center mb-8'>
						<div className='w-full md:w-4/12 px-4 mx-auto text-center'>
							<div className='text-sm text-white font-semibold py-1'>
								Copyright © <span id='get-current-year'>2023</span> Hacatanga
								Desenvolvimento
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
export default Footer;
