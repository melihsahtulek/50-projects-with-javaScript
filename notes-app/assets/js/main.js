window.addEventListener("load", () => {
  const container = document.querySelector("#container");
  const createNewNoteBtn = document.querySelector(".create-new-note-btn");

  const createNewNote = () => {
    container.insertAdjacentHTML(
      "beforeend",
      `
      <div class="note">
        <div class="header">
          <input type="text" name="note_title" placeholder="note title" value="unnamed note" />
          <button type="button">
            <i class="bx bx-edit"></i>
          </button>
          <button type="button">
            <i class='bx bxs-save'></i>
          </button>
          <button type="button">
            <i class="bx bx-trash"></i>
          </button>
        </div>
        <textarea name="note_textarea">
          Your notes...
        </textarea>
      </div>
    `
    );
  };

  createNewNoteBtn.addEventListener("click", createNewNote);
});
