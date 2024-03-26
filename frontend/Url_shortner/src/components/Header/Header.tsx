import * as React from 'react';

interface IheaderProps {
}

const header: React.FunctionComponent<IheaderProps> = () => {
  return(
    <>
    <div className='bg-slate-900'>
        <div className='container p-2 mx-auto'>
            <nav className='py-5'>
                <div className='text-base text-white'>
                    URL Shortner
                </div>
            </nav>
        </div>
    </div>
    </>
  ) ;
};

export default header;
