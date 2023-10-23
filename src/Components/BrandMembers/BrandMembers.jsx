import React from 'react'

const BrandMembers = () => {
  return (
    <div className='max-w-7xl mx-auto mt-10'>
        <h2 className='text-center text-3xl md:text-5xl font-serif mb-10 pb-8 border-b w-2/4 mx-auto'>Shop Mentors</h2>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        </th>
        <th className='text-4xl pb-5'>Name</th>
        <th className='text-4xl pb-5'>Works</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://i.ibb.co/g30W3NF/17-20221228083542-10058751-large.jpg" />
              </div>
            </div>
            <div>
              <div className="md:text-lg font-bold">Hart Hagerty</div>
              <div className="opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td className='md:text-base font-medium'>
          Zemlak, Daniel and Leannon
          <br/>
          <span className="badge badge-ghost  badge-md"> <span>Fashion</span> Designer</span>
        </td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://i.ibb.co/Qpsbfth/Getty-Images-1327773042.webp"/>
              </div>
            </div>
            <div>
              <div className="text-lg font-bold">Brice Swyre</div>
              <div className="opacity-50">China</div>
            </div>
          </div>
        </td>
        <td className='text-base font-medium'>
          Carroll Group
          <br/>
          <span className="badge badge-ghost badge-md">Tax Accountant</span>
        </td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://i.ibb.co/pZgkTyS/Administrative-Assistant.webp" />
              </div>
            </div>
            <div>
              <div className="text-lg font-bold">Marjy Ferencz</div>
              <div className="opacity-50">Russia</div>
            </div>
          </div>
        </td>
        <td className='text-base font-medium'>
          Rowe-Schoen
          <br/>
          <span className="badge badge-ghost badge-md">Office Assistant</span>
        </td>
      </tr>
      {/* row 4 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://i.ibb.co/gFJmjY4/download.jpg" />
              </div>
            </div>
            <div>
              <div className="text-lg font-bold">Yancy Tear</div>
              <div className="text-sm opacity-50">Brazil</div>
            </div>
          </div>
        </td>
        <td className='text-base font-medium'>
          Wyman-Ledner
          <br/>
          <span className="badge badge-ghost badge-md">Community Outreach Specialist</span>
        </td>
      </tr>
    </tbody>
    
  </table>
</div>
    </div>
  )
}

export default BrandMembers