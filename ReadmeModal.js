let readmeModalContainer;

// eslint-disable-next-line no-unused-vars, no-redeclare
function openReadmeModal(title, readme) {
    if (readmeModalContainer) {
        Spicetify.PopupModal.display({
            title: `README for ${title}`,
            content: readmeModalContainer,
        });
        return;
    }

    readmeModalContainer = document.createElement("div");
    readmeModalContainer.id = "marketplace-reload-container";

    // const optionHeader = document.createElement("h2");
    // optionHeader.innerText = MODAL_SUBTITLE;

    // <!-- Simply set the `src` attribute to your MD file and win -->
    // <zero-md src="README.md"></zero-md>
    const mdContainer = document.createElement("zero-md");
    mdContainer.setAttribute("src", readme);

    readmeModalContainer.append(
        mdContainer,
    );

    Spicetify.PopupModal.display({
        title: `README for ${title}`,
        content: readmeModalContainer,
    });
}
