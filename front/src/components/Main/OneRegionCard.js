import React, { useState } from 'react';
import moment from 'moment'
import ModalUserProfile from './ModalSearch/ModalUserProfile'
import ModalRequest from './ModalSearch/ModalRequest'

import { useDispatch } from "react-redux"
import { fetchModalUserInfoAC } from '../../redux/actions'

function OneRegionCard({ el }) {
  const dispatch = useDispatch()
  let [modalclick, setModalclick] = useState(false)
  let [modalprops, setModalprops] = useState()
  let [modalclickRequest, setModalclickRequest] = useState(false)
  let Handleclicker = id => {
    dispatch(fetchModalUserInfoAC(id))
    setModalclick(modalclick = true)
    setModalprops((modalprops) => modalprops = id)
  }

  let ButtonHandler = id => {
    setModalclickRequest(modalclickRequest = true)
    setModalprops((modalprops) => modalprops = id)
  }

  return (
    <>
      { modalclick && <ModalUserProfile props={modalprops} isOpened={true}
        onModalClose={() => setModalclick(modalclick = false)}
      />}
   
      <div  className="tiles">

        <article className="style1">
          <span className="image">
            <img src={el.author.file} alt="" />
          </span>
          <div>
            <h4 onClick={() => Handleclicker(el.author._id)}>{el.author.name}</h4>
            <div className="content">
              <div className='cardText'>Путешествие с: {moment(el.startDate).format("DD.MM.YYYY")}</div>
              <div className='cardText'>До: {moment(el.endDate).format("DD.MM.YYYY")}</div>
              <div className='cardText'>Бюджет: {el.budget}</div>
              {/* <div>Информация о мршруте: {el.tripInfo}</div> */}
              <div className='cardText'><b>Участники:</b> {el.participants.length > 1 ? el.participants.length : 'Успейте присоединиться первым!'}</div>
              <button onClick={() => ButtonHandler(el)}>Связаться с автором</button>
            </div>
          </div>
        </article>

        </div>

      { modalclickRequest && <ModalRequest props={modalprops} isOpened={true}
        onModalClose={() => setModalclickRequest(modalclick = false)}
      />}
    </>
  );
}

export default OneRegionCard;
