// // import React from 'react';
// import { useAuth } from '../store/auth';

// const Service = () => {
//   const { servicee } = useAuth();

//   return (
//     <section className='section-services'>
//       <div className='container'>
//         <h1 className='main-heading'>Services</h1>
//       </div>
//       <div className='container grid grid-three-cols'>
//         {servicee.map((curElem, index) => {
//           const { price, description, service, provider } = curElem;
//           return (
//             <div className="card" key={index}>
//               <div className="card-img">
//                 <img src='../../public/image/warli.jpg' alt='our services' width="200" />
//               </div>
//               <div className="card-details">
//                 <div className='grid grid-two-cols'>
//                   <p>{provider}</p>
//                   <p>{price}</p>
//                 </div>
//                 <h2>{service}</h2>
//                 <p>{description}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// export default Service;
import React from 'react';
import { useAuth } from '../store/auth';

const Service = () => {
  const { servicee } = useAuth();

  return (
    <section className='section-services'>
      <div className='container'>
        <h1 className='main-heading'>Services</h1>
      </div>
      <div className='container grid grid-three-cols'>
        {servicee.map((curElem, index) => {
          const { price, description, service, provider, img } = curElem;
          return (
            <div className="card" key={index}>
              <div className="card-img">
                <img src={img} />
              </div>
              <div className="card-details">
                <div className='grid grid-two-cols'>
                  <p>{provider}</p>
                  <p>{price}</p>
                </div>
                <h2>{service}</h2>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Service;
