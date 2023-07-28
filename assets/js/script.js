    // Clonar o conteúdo da scrolling-container e adicioná-lo no final da mesma div
    const container = document.querySelector(".scrolling-container");
    const cloneContent = container.innerHTML;
    container.innerHTML += cloneContent;