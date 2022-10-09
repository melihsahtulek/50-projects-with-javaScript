window.addEventListener("load", () => {
  /* question list */

  const questionList = [
    {
      id: 1,
      question: "Sinekli Bakkal” Romanının Yazarı Aşağıdakilerden Hangisidir?",
      options: [
        { opt_id: "a", option_txt: "Reşat Nuri Güntekin" },
        { opt_id: "b", option_txt: "Halide Edip Adıvar" },
        { opt_id: "c", option_txt: "Ziya Gökalp" },
        { opt_id: "d", option_txt: "Ömer Seyfettin" },
      ],
      answer_opt_id: "b",
    },
    {
      id: 2,
      question: "Aşağıda Verilen İlk Çağ Uygarlıklarından Hangisi Yazıyı İcat Etmiştir?",
      options: [
        { opt_id: "a", option_txt: "Hititler" },
        { opt_id: "b", option_txt: "Elamlar" },
        { opt_id: "c", option_txt: "Sümerler" },
        { opt_id: "d", option_txt: "Urartular" },
      ],
      answer_opt_id: "c",
    },
    {
      id: 3,
      question: "Tsunami Felaketinde En Fazla Zarar Gören Güney Asya Ülkesi Aşağıdakilerden Hangisidir?",
      options: [
        { opt_id: "a", option_txt: "Endonezya" },
        { opt_id: "b", option_txt: "Srilanka" },
        { opt_id: "c", option_txt: "Tayland" },
        { opt_id: "d", option_txt: "Hindistan" },
      ],
      answer_opt_id: "a",
    },
    {
      id: 4,
      question: "Aşağıdakilerden Hangisi Dünya Sağlık Örgütünün Kısaltılmış İsmidir?",
      options: [
        { opt_id: "a", option_txt: "Uhw" },
        { opt_id: "b", option_txt: "Unicef" },
        { opt_id: "c", option_txt: "Who" },
        { opt_id: "d", option_txt: "Nato" },
      ],
      answer_opt_id: "c",
    },
    {
      id: 5,
      question: "Bir Gün Kaç Saniyedir?",
      options: [
        { opt_id: "a", option_txt: "86000" },
        { opt_id: "b", option_txt: "88600" },
        { opt_id: "c", option_txt: "86400" },
        { opt_id: "d", option_txt: "84800" },
      ],
      answer_opt_id: "c",
    },
    {
      id: 6,
      question: "Üç Büyük Dince Kutsal Sayılan Şehir Hangisidir?",
      options: [
        { opt_id: "a", option_txt: "Mekke" },
        { opt_id: "b", option_txt: "Kudüs" },
        { opt_id: "c", option_txt: "Roma" },
        { opt_id: "d", option_txt: "İstanbul" },
      ],
      answer_opt_id: "b",
    },
    {
      id: 7,
      question: "Hangi Ülkenin İki Tane Başkenti Vardır?",
      options: [
        { opt_id: "a", option_txt: "Güney Afrika" },
        { opt_id: "b", option_txt: "Senegal" },
        { opt_id: "c", option_txt: "El Salvador" },
        { opt_id: "d", option_txt: "Venezuela" },
      ],
      answer_opt_id: "a",
    },
    {
      id: 8,
      question: "Aşağıdaki Ülkelerden Hangisinin Nüfusu Daha Fazladır?",
      options: [
        { opt_id: "a", option_txt: "İspanya" },
        { opt_id: "b", option_txt: "Fransa" },
        { opt_id: "c", option_txt: "İngiltere" },
        { opt_id: "d", option_txt: "Almanya" },
      ],
      answer_opt_id: "d",
    },
    {
      id: 9,
      question: '"18 Mart Kahramanı" ünvanı kime verilmiştir?',
      options: [
        { opt_id: "a", option_txt: "Cevat ÇOBANLI" },
        { opt_id: "b", option_txt: "Hicabi DURSUN" },
        { opt_id: "c", option_txt: "Mehmet AKARCA" },
        { opt_id: "d", option_txt: "Fahreddin Paşa" },
      ],
      answer_opt_id: "a",
    },
    {
      id: 10,
      question: "Atatürk döneminin son başbakanı kimdir?",
      options: [
        { opt_id: "a", option_txt: "Celal BAYAR" },
        { opt_id: "b", option_txt: "İsmet İNÖNÜ" },
        { opt_id: "c", option_txt: "Rauf ORBAY" },
        { opt_id: "d", option_txt: "Mehmet DURSUN" },
      ],
      answer_opt_id: "a",
    },
    {
      id: 11,
      question: "Dünyada en çok ülkeyle sınırı olan devlet aşağıdakilerden hangisidir?",
      options: [
        { opt_id: "a", option_txt: "Çin" },
        { opt_id: "b", option_txt: "Kanada" },
        { opt_id: "c", option_txt: "Hindistan" },
        { opt_id: "d", option_txt: "ABD" },
      ],
      answer_opt_id: "a",
    },
    {
      id: 12,
      question: "Devlet-i Aliyye, Tanzimat ve Bulgar Meselesi gibi kitapları ile tanınan, Tarihçilerin Şeyhi olarak bilinen ünlü tarihçi kimdir?",
      options: [
        { opt_id: "a", option_txt: "Halil İnalcık" },
        { opt_id: "b", option_txt: "Murat Bardakçı" },
        { opt_id: "c", option_txt: "Refik Turan" },
        { opt_id: "d", option_txt: "Fuat Köprülü" },
      ],
      answer_opt_id: "a",
    },
    {
      id: 13,
      question: "Aşağıdakl devletlerden hangisinin bayrağında hilal yer almaz?",
      options: [
        { opt_id: "a", option_txt: "Tunus" },
        { opt_id: "b", option_txt: "Türkmenistan" },
        { opt_id: "c", option_txt: "Özbekistan" },
        { opt_id: "d", option_txt: "Fas" },
      ],
      answer_opt_id: "d",
    },
    {
      id: 14,
      question:
        "5 Eylül 1938'de Mustafa Kemal Atatürk'ün el yazısıyla kaleme aldığı vasiyetnamesine göre aşağıdaki kurumlardan hangisine mirasından pay vermiştir?",
      options: [
        { opt_id: "a", option_txt: "Türk Hava Kurumu" },
        { opt_id: "b", option_txt: "Kızılay" },
        { opt_id: "c", option_txt: "Türk Tarih ve Dil Kurumu" },
        { opt_id: "d", option_txt: "Çocuk Esirgeme Kurumu" },
      ],
      answer_opt_id: "c",
    },
    {
      id: 15,
      question: "202 Türk Dünyası Kültür Başkenti seçilen yeraşağıdakilerden hangisidir?",
      options: [
        { opt_id: "a", option_txt: "Hive" },
        { opt_id: "b", option_txt: "Buhara" },
        { opt_id: "c", option_txt: "Semerkand" },
        { opt_id: "d", option_txt: "Ankara" },
      ],
      answer_opt_id: "a",
    },
  ];

  /* global variables */

  let mixedIndex = [];
  let qIndex = 0;
  let yourAnswerList = [];
  let quizFinished = false;

  /* control buttons */

  const nextQuestionBtn = document.getElementById("nextQuestionBtn");
  const previousQuestionBtn = document.getElementById("previousQuestionBtn");
  const finishTheQuizBtn = document.getElementById("finishTheQuizBtn");
  const newQuizBtn = document.getElementById("newQuizBtn");

  /* events */

  nextQuestionBtn.addEventListener("click", () => nextQuestion());
  previousQuestionBtn.addEventListener("click", () => previousQuestion());
  finishTheQuizBtn.addEventListener("click", () => finishTheQuiz());
  newQuizBtn.addEventListener("click", () => newQuiz());

  /* functions */

  const nextQuestion = () => {
    qIndex++;
    if (questionList.length - 1 >= qIndex) {
      question();
    } else {
      qIndex = questionList.length - 1;
      finishTheQuiz();
    }
  };

  const previousQuestion = () => {
    qIndex--;
    if (qIndex > -1) {
      question();
    } else {
      qIndex = 0;
    }
  };

  const question = () => {
    let currentQuestion = questionList[mixedIndex[qIndex]];
    const options = () => {
      let optionList = "";
      currentQuestion.options.forEach((option) => {
        optionList += `<div class="option" onclick="return true" data-option=${option.opt_id}>
          <span>${option.option_txt}</span>
        </div>`;
      });
      return optionList;
    };

    document.getElementsByClassName("qBox")[0].setAttribute("data-question-id", currentQuestion.id);
    document.getElementsByClassName("qBoxHeaderTitle")[0].innerHTML = currentQuestion.question;
    document.getElementsByClassName("options")[0].innerHTML = options();
    document.getElementsByClassName("questionN")[0].innerHTML = `soru ${qIndex + 1}/${questionList.length}`;
    checkAnswer(document.getElementsByClassName("option"), currentQuestion);
  };

  const checkAnswer = (options, currentQuestion) => {
    const active = () => {
      yourAnswerList.forEach((yourAnswer) => {
        if (yourAnswer.questionId == currentQuestion.id) {
          Array.from(options).forEach((__option) => {
            __option.classList.remove("yourAnswer");
            if (__option.getAttribute("data-option") == yourAnswer.yourAnswer) {
              __option.classList.add("yourAnswer");
            }
          });
        }
      });
    };

    Array.from(options).forEach((option) => {
      option.addEventListener("click", () => {
        if (yourAnswerList.length === 0) {
          yourAnswerList.push({
            questionId: currentQuestion.id,
            yourAnswer: option.getAttribute("data-option"),
            correctAnswer: currentQuestion.answer_opt_id,
          });
        } else {
          let find__id = false;
          yourAnswerList.forEach((answer) => {
            if (answer.questionId == currentQuestion.id) {
              find__id = true;
            }
          });

          if (find__id) {
            let filterResult = yourAnswerList.filter((answer) => answer.questionId == currentQuestion.id);
            filterResult[0].yourAnswer = option.getAttribute("data-option");
            let i = yourAnswerList.indexOf(filterResult[0]);
            yourAnswerList[i] = filterResult[0];
          } else {
            yourAnswerList.push({
              questionId: currentQuestion.id,
              yourAnswer: option.getAttribute("data-option"),
              correctAnswer: currentQuestion.answer_opt_id,
            });
          }
        }

        active();
      });
    });

    active();
  };

  const finishTheQuiz = () => {
    const timerTitle = document.getElementById("timerTitle");
    timerTitle.parentElement.style.display = "none";
    quizFinished = true;
    document.getElementsByClassName("qBox")[0].style.display = "none";

    const totalCorrect = document.getElementById("totalCorrect");
    const totalWrong = document.getElementById("totalWrong");
    const totalEmpty = document.getElementById("totalEmpty");
    const totalQuestion = document.getElementById("totalQuestion");
    const finishBoard = document.getElementsByClassName("finishBoard")[0];
    const finalScore = document.getElementById("finalScore");

    let total_c_a = 0; // correct
    let total_w_a = 0; // wrong
    let count = 0;

    finishBoard.style.display = "block";

    yourAnswerList.forEach((final) => {
      count++;
      if (final.yourAnswer == final.correctAnswer) {
        total_c_a++;
      } else {
        total_w_a++;
      }
    });

    totalQuestion.innerHTML = questionList.length;
    totalCorrect.innerHTML = total_c_a;
    totalWrong.innerHTML = total_w_a;
    totalEmpty.innerHTML = questionList.length - count;
    finalScore.innerHTML = ((100 / questionList.length) * total_c_a).toFixed(2);
  };

  const newQuiz = () => {
    quizFinished = false;
    const finishBoard = document.getElementsByClassName("finishBoard")[0];
    finishBoard.style.display = "none";
    mixedIndex = [];
    qIndex = 0;
    yourAnswerList = [];
    getRand(questionList.length - 1);
  };

  const timer = () => {
    let second = questionList.length * 10;
    const timerTitle = document.getElementById("timerTitle");
    timerTitle.parentElement.style.display = "flex";
    timerTitle.innerHTML = `<span class="material-icons">timer</span>${second}`;

    let timer = setInterval(() => {
      second--;
      timerTitle.innerHTML = `<span class="material-icons">timer</span>${second}`;

      if (second === 0) {
        clearInterval(timer);
        timerTitle.parentElement.style.display = "none";
        finishTheQuiz();
      }

      if (quizFinished) {
        clearInterval(timer);
      }
    }, 1000);
  };

  const getRand = (len) => {
    let index = Math.round(Math.random() * len);

    while (true) {
      mixedIndex.length === 0 && mixedIndex.push(index);

      if (mixedIndex.includes(index)) {
        index = Math.round(Math.random() * len);
      } else {
        mixedIndex.push(index);
      }

      if (mixedIndex.length === len + 1) {
        break;
      }
    }

    document.getElementsByClassName("qBox")[0].style.display = "block";
    question();
    timer();
  };

  getRand(questionList.length - 1);
});
