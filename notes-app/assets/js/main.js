window.addEventListener("load", () => {
  const container = document.querySelector("#container");
  const createNewNoteBtn = document.querySelector(".create-new-note-btn");

  const init = () => {
    if (checkLsSupport()) {
      if (localStorage.getItem("notes") === null) {
        localStorage.setItem("notes", JSON.stringify([]));
      } else {
        const data = JSON.parse(localStorage.getItem("notes"));
        writeNotesToHtml(data);
      }
    }
  };

  const createNewNote = () => {
    let id = generatePrimaryKey();

    container.insertAdjacentHTML(
      "beforeend",
      `
      <div class="note">
        <div class="header">
          <input type="text" name="note_title" placeholder="note title" value="unnamed note" data-id=${id} />
          <button type="button" data-id=${id}>
            <i class="bx bx-edit"></i>
          </button>
          <button type="button" data-id=${id}>
            <i class='bx bxs-save'></i>
          </button>
          <button type="button" data-id=${id}>
            <i class="bx bx-trash"></i>
          </button>
        </div>
        <textarea name="note_textarea" data-id=${id}>
          Your note... ${id}
        </textarea>
      </div>
    `
    );

    removeWhiteSpaceIndents();
    addNewNoteToLs(id);
  };

  const generatePrimaryKey = () => {
    let id = 0;
    const data = JSON.parse(localStorage.getItem("notes"));
    if (data.length === 0) {
      id = 1;
    } else {
      let newIndex = data.length + 1;
      let filtered = data.findIndex((note) => note.id === newIndex);
      while (filtered >= 0) {
        newIndex++;
        filtered = data.findIndex((note) => note.id === newIndex);
      }
      id = newIndex;
    }

    return id;
  };

  const addNewNoteToLs = (id) => {
    const data = JSON.parse(localStorage.getItem("notes"));
    data.push({
      id: id,
      title: "Unnamed Note",
      note: "Your note... " + id + "",
      isSaved: false,
    });

    localStorage.setItem("notes", JSON.stringify(data));
  };

  const checkLsSupport = () => {
    if (typeof localStorage !== undefined) {
      return true;
    } else {
      return false;
    }
  };

  const writeNotesToHtml = (data) => {
    for (const note of data) {
      container.insertAdjacentHTML(
        "beforeend",
        `
        <div class="note">
          <div class="header">
            <input type="text" name="note_title" placeholder="note title" value=${note.title} data-id=${note.id} />
            <button type="button" data-id=${note.id}>
              <i class="bx bx-edit"></i>
            </button>
            <button type="button" data-id=${note.id}>
              <i class='bx bxs-save'></i>
            </button>
            <button type="button" data-id=${note.id}>
              <i class="bx bx-trash"></i>
            </button>
          </div>
          <textarea name="note_textarea" data-id=${note.id}>
            ${note.note}
          </textarea>
        </div>
      `
      );
    }

    removeWhiteSpaceIndents();
  };

  const removeWhiteSpaceIndents = () => {
    document.querySelectorAll("textarea").forEach((element) => {
      element.value = element.value.replace(/\s{2,}/gi, "");
    });
  };

  createNewNoteBtn.addEventListener("click", createNewNote);
  init();
});
