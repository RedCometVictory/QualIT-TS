import React from 'react'

// project details
//  id, title, decription, created on

// ticket details
//  id, title, decription, created on
// id admin or manager see additional info"
// username of dev assigned to ticket

const ListItems = () => {
  return (
    <section>
      <ul className="item__list">
        <li className="item__list-item">
          ID#:{" "}849513562
        </li>
        <li className="item__list-item">
          <h4>
            <span>Title:{" "}Project or Ticket Name</span>
          </h4>
        </li>
        <li className="item__list-item">
          <h4>
            Description:{" "}
          </h4>
          <div className="item__content">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error optio illo hic, molestias, pariatur sint fugit assumenda eum enim quos quae sequi obcaecati! Magni recusandae dicta at in velit nam?
            </p>
          </div>
        </li>
        <li className="item__list-item">
          <div className="item__group">
            <h4>Created On:{" "}</h4>
            <div className="item__content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In iure repellendus quam. Atque laborum molestiae ad corrupti mollitia itaque excepturi harum optio beatae sed saepe, repellendus repellat eligendi fuga porro?
              </p>
            </div>
          </div>
        </li>
        <li className="item__list-item">
          <div className="item__group">
            <h4>User:{" "}</h4>
            <div className="item__content">
              <p>
                Show Fullname or username of developer of manager assigned to project or ticket. This can only be viewed by users who have the role of admin or manager as devs will only see the tickets that are assigned to them. Devs can only see the projects they are assigned to.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  )
}
export default ListItems;