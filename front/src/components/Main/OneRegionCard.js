import React from 'react';

function OneRegionCard({el}) {
  console.log(el);
  return (
    <>
    <div style={{border:'10px solid red',borderRadius:'10%',maxWidth:'700px',margin:'20px'}}>
    <div>Имя автора: {el.author.name}</div>
    <div>Бюджет рассчитаннный автором : {el.budget}</div>
    <div>Информация о мршруте: {el.tripInfo}</div>
    <div>Количество участников: {el.participants.length > 1 ? el.participants.length : 'Пока не откликнулись,успейте присоединиться первым!'}</div>
   <button>Связаться с автором</button>
    </div>
     </>
  );
}

export default OneRegionCard;
