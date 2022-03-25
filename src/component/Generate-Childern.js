import inputList from './Child-Data';

const getItemBox = (nameOfClass, id) => {
  const itemBox = document.createElement('div');
  itemBox.className = `InputBox ${nameOfClass}`;
  itemBox.id = id;
  return itemBox;
};

const getElements = () => {
  const resultInput = ` <div className="ResultBox InputBox">
                                      <h3>0</h3>
                                  </div>
                              `;
  Object.entries(inputList).forEach((key) => {
    const typeOfItem = key[1].isOperation === true ? 'operator' : 'number';
    const itemBox = getItemBox(key, typeOfItem);
    itemBox.innerHTML = `<button type='button' className = ${typeOfItem}>${key[1].symbol}</button>`;
    resultInput.innerHTML += itemBox;
  });
  return resultInput;
};

export default getElements;
