import React from 'react';
import './keyCollection.css';

const KeyCollection = ({
  keyTemplatePairs,
  selectedPair,
  onSelectedPairChange,
}) => {
  const selecteKey = (pair) => {
    onSelectedPairChange(pair);
  };

  return (
    <div className="keyCollectionContainer">
      <h3>All Keys</h3>
      <ul>
        <div>
          {keyTemplatePairs.map(({ id, keyText, templateText }) => (
            <li
              key={id}
              className={`keyItem ${selectedPair.id === id ? `selected` : ``}`}
              onClick={() =>
                selecteKey({
                  id: id,
                  keyText: keyText,
                  templateText: templateText,
                })
              }
            >
              <span>{keyText}</span>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default KeyCollection;
