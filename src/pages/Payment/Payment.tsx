import { useEffect } from "react";

function Payment() {
	
	useEffect(() => {
		window.scrollTo(0, 0);
	  }, []);
	  
	return (
		<>
			<div className=' '>
				<div className=' p-4 mt-4 -mb-6 ml-2 bg-[#800000] border border-gray-200 rounded-sm w-[341px] '></div>
				<div className='ml-2 mt-6 tblock max-w-sm p-6 bg-white border border-gray-200 rounded-sm w-[340px] h-[100px]'>
					<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
						Noteworthy technology acquisitions 2021
					</h5>
				</div>
            </div>
            <div className=' '>
				<div className=' p-4 mt-4 -mb-6 ml-2 bg-[#800000] border border-gray-200 rounded-sm w-[341px] '></div>
				<div className='ml-2 mt-6 tblock max-w-sm p-6 bg-white border border-gray-200 rounded-sm w-[340px] h-[100px]'>
					<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
						Noteworthy technology acquisitions 2021
					</h5>
				</div>
			</div>
		</>
	);
}
export default Payment;
