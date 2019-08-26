import axios from 'axios';

export default {
  label: 'Synonyms',
  apply: function() {
    console.info(`[Plugin::apply] Synonyms`);
    const selection = document.getSelection().toString().trim();

    if (selection && selection !== '') {
      axios
        .get(`https://api.datamuse.com/words?rel_syn=${selection}`)
        .then(({ data }) => {
          if (!data.length) {
            alert(`No synonyms for ${selection}`);
            return;
          }

          if (!document.querySelector('.modal-overlay')) {
            const modalOverlay = document.createElement("div");
            modalOverlay.setAttribute('class', 'modal-overlay');
            document.body.appendChild(modalOverlay);
          }

          if (!document.querySelector('.modal')) {
            const modalDiv = document.createElement("div");
            modalDiv.setAttribute('class', 'modal');

            const listDiv = document.createElement("div");
            listDiv.setAttribute('class', 'list-container');

            const title = document.createElement("h1");
            title.innerText = "Available synonyms";
            listDiv.appendChild(title);

            modalDiv.appendChild(listDiv);

            document.body.appendChild(modalDiv);
          }

          const modal = document.querySelector('.modal');
          const overlay = document.querySelector('.modal-overlay');
          const list = document.querySelector('.list-container');

          data.forEach(({word}) => {
            const button = document.createElement("button");
            button.innerText = word;
            button.addEventListener('click', () => {
              document.execCommand("insertHTML", false, word);
              modal.style.display = 'none';
              overlay.style.display = 'none';
            });
            list.appendChild(button);
          });

          modal.style.display = 'block';
          overlay.style.display = 'block';
        });
    }
  }
}
