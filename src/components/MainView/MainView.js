import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import KeyCollection from '../KeyCollection/KeyCollection';
import KeyInput from '../KeyInput/KeyInput';
import Template from '../Template/Template';
import ButtonOptions from '../ButtonOptions/ButtonOptions';
import Modal from '../Modal/Modal';
import './mainView.css';

const storedKeyTemplatePairs = 'storedKeyTemplatePairs';
const initialActivePair = {
  id: null,
  keyText: '',
  templateText: '',
};
const initialButtons = [
  {
    type: 'save',
    name: 'Save',
  },
];

const MainView = () => {
  const [keyTemplatePairs, setKeyTemplatePairs] = useState([]);
  const [activePair, setActivePair] = useState(initialActivePair);
  const [selectedPair, setSelectedPair] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [werePairsUpdated, setWerePairsUpdated] = useState(false);
  const [buttons, setButtons] = useState(initialButtons);
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
      setSelectedPair({});
      setWerePairsUpdated(false);
    }
  }, [keyTemplatePairs]);

  // - If existing key was selected, set that key's pair as
  //   the activePair.
  // - This triggers an "editing mode", so different buttons
  //   will appear.
  useEffect(() => {
    if (Object.keys(selectedPair).length === 0) {
      setButtons(initialButtons);
    } else {
      setButtons([
        {
          type: 'edit',
          name: 'Edit',
        },
        {
          type: 'delete',
          name: 'Delete',
        },
        {
          type: 'cancel',
          name: 'Cancel',
        },
      ]);
      setActivePair({ ...selectedPair });
    }
  }, [selectedPair]);

  // - Updates available buttons depending on whether or not the user
  //   is editing a saved key/template pair.
  useEffect(() => {
    if (isEditing === false) {
      return;
    }

    if (isEditing === true) {
      setButtons([
        {
          type: 'save',
          name: 'Save',
        },
        {
          type: 'cancel',
          name: 'Cancel',
        },
      ]);
    }
  }, [isEditing]);

  // - Renders different button options depending on whether
  //   editing mode is entered or exited.
  // - Also assigns appropriate click handlers to the buttons
  //   whenever the available buttons are changed.
  const renderButtonOptions = (details, pair) => {
    let buttonDetails = [...details];
    buttonDetails = buttonDetails.map((detail) => {
      switch (detail.type) {
        case 'save':
          return { ...detail, buttonAction: saveNewActivePair };
        case 'edit':
          return { ...detail, buttonAction: () => enterEditing() };
        case 'delete':
          return {
            ...detail,
            buttonAction: confirmButtonAction,
          };
        case 'cancel':
          return { ...detail, buttonAction: () => exitEditing() };
        default:
          return null;
      }
    });
    return <ButtonOptions buttons={buttonDetails} activePair={pair} />;
  };

  // - Enter editing mode.
  // - Only applies when an existing/saved key is clicked.
  const enterEditing = () => {
    setIsEditing(true);
  };

  // - Exit editing mode.
  const exitEditing = () => {
    setActivePair(initialActivePair);
    setSelectedPair({});
    setIsEditing(false);
  };

  // - Display modal to confirm button
  const confirmButtonAction = () => {
    setModalDetails({
      type: 'warning',
      heading: `Delete Pair`,
      message: `Are you sure you want to delete this key/template pair? This action cannot be undone.`,
      buttons: [
        {
          type: 'delete',
          text: 'Delete pair',
          buttonAction: deleteSelectedPair,
        },
        { type: 'cancel', text: 'Cancel' },
      ],
    });
  };

  // - Delete selected key/template pair.
  const deleteSelectedPair = (pairtToDelete) => {
    const allPairs = [...keyTemplatePairs];
    setKeyTemplatePairs(
      allPairs.filter((pair) => pair.id !== pairtToDelete.id)
    );
    setWerePairsUpdated(true);
  };

  // - Updates keyTemplatePairs, resulting in updating stored data in localStorage.
  // - Validation done here as well.
  const saveNewActivePair = (pair) => {
    // - Check if activePair key and template values are valid.
    if (pair.keyText === '' || pair.templateText === '') {
      if (pair.keyText === '') {
        setModalDetails({
          type: 'default',
          heading: `Check Key`,
          message: `The Key field cannot be left blank.`,
        });
      } else if (pair.templateText === '') {
        setModalDetails({
          type: 'default',
          heading: `Check Template`,
          message: `The Template field cannot be left blank. `,
        });
        return;
      }
    } else if (pair.keyText.length !== 0) {
      // - Check length of key. Key length must be 3 characters, minimum.
      if (pair.keyText.length < 3) {
        setModalDetails({
          type: 'default',
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
            type: 'default',
            heading: `Invalid Key Name`,
            message: `Your Key must only contain numbers or letters.`,
          });
          return;
        } else {
          // - Check if activePair.keyText is a duplicate of an existing key name.
          const allPairs = [...keyTemplatePairs];
          let currentActivePair = { ...pair };
          let isKeyDuplicate = false;
          for (let i = 0; i < allPairs.length; i++) {
            if (allPairs[i].keyText === currentActivePair.keyText) {
              isKeyDuplicate = true;
              break;
            }
          }
          // - If key name of pair is a duplicate of an existing key, still do additional check on pair id.
          // - We check the pair id because the user just might be trying to change the template text of
          //   the existing key.
          if (isKeyDuplicate === true) {
            // - If key name is duplicate, AND the pair being saved has an id === null, this is a sign that
            //   the user is trying to create a  new key/template pair. If this is the case, we alert
            //   the user that the key name they are trying to use is a duplicate, and is not allowed.
            if (currentActivePair.id === null) {
              setModalDetails({
                type: 'default',
                heading: `Duplicate Key Name`,
                message: `A Key with the name, "${currentActivePair.keyText}", already exists. Enter a different Key name.`,
              });
              return;
              // - If the key name is a duplicate, BUT the pair being being saved has an id !== null, this is a sign
              //   that the user is trying to edit something in an existing/saved key/template pair. This is OK.
            } else if (currentActivePair.id !== null) {
              let updatedKeyTemplatePairs = [
                ...allPairs.filter(
                  (pairItem) => pairItem.id !== currentActivePair.id
                ),
                currentActivePair,
              ];
              setKeyTemplatePairs(updatedKeyTemplatePairs);
              setWerePairsUpdated(true);
            }
          } else if (isKeyDuplicate === false) {
            // - All final checks passed, OK to update keyTemplatePairs.
            if (pair.id === null) {
              const newPair = { ...pair, id: uuidv4() };
              setKeyTemplatePairs([...keyTemplatePairs, newPair]);
              setWerePairsUpdated(true);
            } else if (pair.id !== null) {
              setKeyTemplatePairs([
                ...keyTemplatePairs.filter(
                  (pairItem) => pairItem.id !== pair.id
                ),
                pair,
              ]);
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
        selectedPair={selectedPair}
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
            selectedPair={selectedPair}
            isEditing={isEditing}
          />
          <Template
            onActiveTemplateChange={updateActivePairTemplate}
            templateText={activePair.templateText}
            selectedPair={selectedPair}
            isEditing={isEditing}
          />
          {renderButtonOptions(buttons, activePair)}
        </div>
      </div>
    </>
  );
};

export default MainView;
