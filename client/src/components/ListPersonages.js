import React, { useEffect, useState } from 'react';

const ListPersonages = ({
  list,
  choicePersonage,
  getNextList
}) => {

  const titles = ['Номер', 'Имя', 'Вид', 'Фото'];
  let properties = [];

  const [personages, setPersonages] = useState('');
  const [state, setState] = useState(false);

  useEffect(() => {
    setPersonages('');
  }, [list])

  const getPersonages = (id) => {
    choicePersonage(id);
  }

  const setNormalList = () => {
    setPersonages('');
    setState(false);
  }

  const sortList = (arr) => {
    let newList = arr.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setPersonages(newList);
    setState(true);
  }

  if (list && !personages) {
    list.results.map(item => (
      properties.push({
        id: item.id,
        name: item.name,
        species: item.species,
        img: item.image
      })
    ));
    setPersonages(properties);
  }

  return (
    <div className="list-personages">
      <div className="wrapper-personages">
        <div className="inner-personages">
          {
            state ? <button onClick={() => setNormalList()}>Обычный список</button>
              : <button onClick={() => sortList(personages)}>Сортировать по имени</button>
          }
          <button onClick={getNextList} className="next-btn">Следующий список</button>

        </div>
        <table>
          <caption>Список персонажей</caption>
          <thead>
            <tr>{titles.map(item => <th key={item}>{item}</th>)}</tr>
          </thead>
          <tbody>{personages ? personages.map(item => (
            <tr key={item.id} className="table-row" onClick={() => getPersonages(item.id)}>
              <td className="table-row__id">{item.id}</td>
              <td className="table-row__name">{item.name}</td>
              <td className="table-row__species">{item.species}</td>
              <td className="table-row__img"><img src={item.img} logo='logo' width="30px" /></td></tr>)) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListPersonages;