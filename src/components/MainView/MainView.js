import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import KeyCollection from '../KeyCollection/KeyCollection';
import KeyInput from '../KeyInput/KeyInput';
import Template from '../Template/Template';
import Modal from '../Modal/Modal';
import './mainView.css';

const storedKeyTemplatePairs = 'storedKeyTemplatePairs';
const initialActivePair = {
  id: null,
  keyText: '',
  templateText: '',
};
const MainView = () => {
  const [keyTemplatePairs, setKeyTemplatePairs] = useState([]);
  const [activePair, setActivePair] = useState(initialActivePair);
  const [selectedPair, setSelectedPair] = useState({});
  const [werePairsUpdated, setWerePairsUpdated] = useState(false);
  const [modalDetails, setModalDetails] = useState({});

  // - Initial load of stored key/template pairs.
  // - This will either get stored data of key from localStorage, or set the initial
  //   key value pair in localStorage.
  useEffect(() => {
    const storedPairs = JSON.parse(
      localStorage.getItem(storedKeyTemplatePairs)
    );
    if (storedPairs) {
      setKeyTemplatePairs([...storedPairs]);
    } else {
      localStorage.setItem(
        storedKeyTemplatePairs,
        JSON.stringify(keyTemplatePairs)
      );
    }
  }, []);

  // - Replaces current key/template pairs in localStorage with updated value.
  useEffect(() => {
    localStorage.setItem(
      storedKeyTemplatePairs,
      JSON.stringify(keyTemplatePairs)
    );

    // - Reset activePair to initial value after updating keyTemplatePairs (both in app and in localStorage)
    if (werePairsUpdated === true) {
      setActivePair(initialActivePair);
      setWerePairsUpdated(false);
    }
  }, [keyTemplatePairs]);

  useEffect(() => {
    if (Object.keys(selectedPair).length === 0) {
      return;
    } else {
      setActivePair({ ...selectedPair });
    }
  }, [selectedPair]);

  // - Updates keyTemplatePairs, resulting in updating stored data in localStorage.
  // - Validation done here as well.
  const saveNewActivePair = (pair) => {
    // - Check if activePair key and template values are valid.
    if (pair.keyText === '' || pair.templateText === '') {
      if (pair.keyText === '') {
        setModalDetails({
          heading: `Check Key`,
          message: `The Key field cannot be left blank.`,
        });
      } else if (pair.templateText === '') {
        setModalDetails({
          heading: `Check Template`,
          message: `The Template field cannot be left blank. `,
        });
        return;
      }
    } else if (pair.keyText.length !== 0) {
      // - Check length of key. Key length must be 3 characters, minimum.
      if (pair.keyText.length < 3) {
        setModalDetails({
          heading: `Check Key Length`,
          message: `Your Key must be 3 to 4 characters.`,
        });
        return;
      } else if (pair.keyText.length >= 3) {
        const regex = /^[A-Za-z0-9]*$/; // - Regular expression for only numbers and letters.
        // - Check if keyText contains characters other than
        //   numbers or letters.
        if (regex.test(pair.keyText) === false) {
          setModalDetails({
            heading: `Invalid Key Name`,
            message: `Your Key must only contain numbers or letters.`,
          });
          return;
        } else {
          // - Check if activePair.keyText is a duplicate of an existing key name.
          const allPairs = [...keyTemplatePairs];
          let isKeyDuplicate = false;
          for (let i = 0; i < allPairs.length; i++) {
            if (allPairs[i].keyText === pair.keyText) {
              isKeyDuplicate = true;
              break;
            }
          }
          if (isKeyDuplicate === true) {
            setModalDetails({
              heading: `Duplicate Key Name`,
              message: `A Key with the name, "${pair.keyText}", already exists. Enter a different Key name.`,
            });
            return;
          } else {
            // - All final checks passed, OK to update keyTemplatePairs.
            if (pair.id === null) {
              const newPair = { ...pair, id: uuidv4() };
              setKeyTemplatePairs([...keyTemplatePairs, newPair]);
              setWerePairsUpdated(true);
            }
          }
        }
      }
    }
  };

  const updateSelectedPair = (pair) => {
    setSelectedPair({ ...pair });
  };

  // - Updates activePair.keyText value.
  const updateActivePairKey = (keyText) => {
    setActivePair({ ...activePair, keyText: keyText });
  };

  // - Updates activePair.templateText value.
  const updateActivePairTemplate = (templateText) => {
    setActivePair({ ...activePair, templateText: templateText });
  };

  return (
    <>
      <Modal
        modalDetails={
          Object.keys(modalDetails).length === 0 ? null : modalDetails
        }
      />
      <div className="mainContainer">
        <div>
          <KeyCollection
            keyTemplatePairs={keyTemplatePairs}
            selectedPair={selectedPair}
            onSelectedPairChange={updateSelectedPair}
          />
        </div>
        <div>
          <KeyInput
            onActiveKeyChange={updateActivePairKey}
            keyText={activePair.keyText}
          />
          <Template
            onActiveTemplateChange={updateActivePairTemplate}
            templateText={activePair.templateText}
          />
          <div>
            <span onClick={() => saveNewActivePair({ ...activePair })}>
              Save
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainView;
