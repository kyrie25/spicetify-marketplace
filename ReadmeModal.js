let readmeModalContainer;

// TODO: this seems to get stuck after you open a modal. it's always the same one, even if you click a different extension

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
    readmeModalContainer.id = "marketplace-readme-container";

    // const optionHeader = document.createElement("h2");
    // optionHeader.innerText = MODAL_SUBTITLE;

    // <!-- Simply set the `src` attribute to your MD file and win -->
    // <zero-md src="README.md"></zero-md>
    // <!-- Wrap with a <template> tag -->
    // <template>
    //     <!-- Define your own styles inside a `<style>` tag -->
    //     <style>
    //     h1 {
    //         color: red;
    //     }
    //     ...
    //     </style>
    // </template>

    const mdContainer = document.createElement("zero-md");
    mdContainer.setAttribute("src", readme);

    // TODO: this doesn't work?
    const styleTemplate = document.createElement("template");
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
    #marketplace-readme-container p { color: red !important; }
    `;
    styleTemplate.append(styleTag);
    mdContainer.append(styleTemplate);

    readmeModalContainer.append(
        mdContainer,
    );

    Spicetify.PopupModal.display({
        title: `README for ${title}`,
        content: readmeModalContainer,
    });
}
