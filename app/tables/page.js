import React from 'react'

const page = () => {
  return (
    <div className="row">
      <div className="col-md-12 col-lg-12">
        <div className="card">
          <div className="card-header">
            <div>
              <h3 className="card-title">Full color variations2</h3>
            </div>
            <div className="card-options">
              <a
                href=""
                className="mr-4 text-default"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <span className="fe fe-more-horizontal fs-20" />
              </a>
              <ul className="dropdown-menu dropdown-menu-right" role="menu">
                <li>
                  <a href="#">
                    <i className="fe fe-eye mr-2" />
                    View
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fe fe-plus-circle mr-2" />
                    Add
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fe fe-trash-2 mr-2" />
                    Remove
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fe fe-download-cloud mr-2" />
                    Download
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fe fe-settings mr-2" />
                    More
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table card-table table-vcenter text-nowrap table-nowrap">
              <thead className="bg-blue text-white">
                <tr>
                  <th className="text-white">ID</th>
                  <th className="text-white">Name</th>
                  <th className="text-white">Position</th>
                  <th className="text-white">Salary</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Joan Powell</td>
                  <td>Associate Developer</td>
                  <td>$450,870</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Gavin Gibson</td>
                  <td>Account manager</td>
                  <td>$230,540</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Julian Kerr</td>
                  <td>Senior Javascript Developer</td>
                  <td>$55,300</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Cedric Kelly</td>
                  <td>Accountant</td>
                  <td>$234,100</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Samantha May</td>
                  <td>Junior Technical Author</td>
                  <td>$43,198</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* table-responsive */}
        </div>
      </div>
      {/* col end */}
    </div>
  );
}

export default page