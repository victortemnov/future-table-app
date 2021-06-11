import React from "react";

const MemberDetail = ({ person }) => {
  return (
    <div>
      <p>
        Выбран пользователь <b>{`${person.firstName} ${person.lastName}`}</b>
      </p>
      <p>Описание:</p>
      <textarea>{person.description}</textarea>
      <p>
        Адрес проживания: <b>{person.address.streetAddress}</b>
      </p>
      <p>
        Город: <b>{person.address.city}</b>
      </p>
      <p>
        Провинция/штат: <b>{person.address.state}</b>
      </p>
      Индекс: <b>{person.address.zip}</b>
    </div>
  );
};

export default MemberDetail;
