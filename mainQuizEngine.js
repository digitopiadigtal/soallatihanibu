let currentIndex = 0;
let correctCount = 0;
let answered = false;

// TIMER
let timerDuration = 20 * 60; // 20 menit (dalam detik)
let timerInterval = null;

// REKAP JAWABAN
let answerRecap = [];

function startTimer() {
  const timerDisplay = document.getElementById("timer");

  timerInterval = setInterval(() => {
    let minutes = Math.floor(timerDuration / 60);
    let seconds = timerDuration % 60;

    timerDisplay.textContent =
      `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;

    timerDuration--;

    // Jika waktu habis
    if (timerDuration < 0) {
      clearInterval(timerInterval);
      showResult(true); // TRUE = waktu habis
    }
  }, 1000);
}

function updateProgress() {
  document.getElementById("progress-text").innerText =
    `Soal ${currentIndex + 1} dari ${questions.length}`;
}

function loadQuestion() {
  if (currentIndex === 0 && !timerInterval) {
    startTimer();
  }

  const q = questions[currentIndex];
  const container = document.getElementById("quiz-container");
  answered = false;

  container.innerHTML = `
    <section class="question-card">
      <h2 class="question-text">${currentIndex + 1}. ${q.question}</h2>

      <ul class="options-list">
        ${q.options
          .map(
            (opt, i) => `
          <li>
            <button class="option-btn" onclick="checkAnswer(${i})">
              ${String.fromCharCode(65 + i)}. ${opt}
            </button>
          </li>`
          )
          .join("")}
      </ul>

      <p id="feedback" class="feedback"></p>
    </section>
  `;

  updateProgress();
}

function checkAnswer(selected) {
  if (answered) return;
  answered = true;

  const q = questions[currentIndex];
  const feedback = document.getElementById("feedback");

  // Simpan rekap jawaban
  answerRecap.push({
    question: q.question,
    selected: selected,
    correct: q.answer,
    explanation: q.explanation,
    options: q.options
  });

  const btns = document.querySelectorAll(".option-btn");

  btns.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.answer) btn.classList.add("correct-btn");
    if (idx === selected && selected !== q.answer)
      btn.classList.add("wrong-btn");
  });

  if (selected === q.answer) {
    correctCount++;

    feedback.innerHTML = `
      <span class="correct-text">
        Buset Bu Syafiraaaa 😎🔥<br>
        Jawaban Ibu BENER lagi!<br>
        Arsip sampe ikut senyum liat Ibu jawaban tepat mulu~
      </span>
    `;
  } else {
    feedback.innerHTML = `
      <span class="wrong-text">
        Aduh Bu Syafira salah nih 😭🤣<br>
        Jawaban benar: <b>${q.options[q.answer]}</b><br>
        <i>${q.explanation}</i><br><br>
        Tapi gapapa Bu... orang cantik mikirnya kadang slow motion 🥹✨
      </span>
    `;
  }
}

function nextQuestion() {
  if (!answered) {
    alert("Jawab salah satu dulu ya Bu 😄");
    return;
  }

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult(timeUp = false) {
  // Hentikan timer
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  const container = document.getElementById("quiz-container");
  const score = Math.round((correctCount / questions.length) * 100);

  let message = "";

  if (timeUp) {
    message = "Waktu habis Bu 😭 Tapi tetap semangat, hasilnya masih bisa diliat kok!";
  } else if (score < 70) {
    message = "Nilai Ibu belum tembus 😭 Belajar lagi ya, biar besok bisa ngegas kayak Ferrari!";
  } else {
    message = "GILA SIH BU SYAFIRA!! Anda calon Arsiparis Legendaris 🔥🔥";
  }

  let recapHTML = `
    <h3>Rekap Jawaban</h3>
    <div class="recap-list">
  `;

  answerRecap.forEach((r, i) => {
    recapHTML += `
      <div class="recap-item">
        <p><b>Soal ${i + 1}:</b> ${r.question}</p>
        <p>Jawaban Ibu: <span style="color:${r.selected === r.correct ? 'green':'red'};">
          ${r.selected !== undefined && r.selected !== null ? r.options[r.selected] : 'Tidak dijawab'}
        </span></p>
        <p>Jawaban Benar: <b>${r.options[r.correct]}</b></p>
        <p class="explain">Pembahasan: ${r.explanation}</p>
        <hr>
      </div>
    `;
  });

  recapHTML += `</div>`;

  container.innerHTML = `
    <section class="result-card">
      <h2>🎉 Hasil Akhir</h2>
      <p>Benar: <b>${correctCount}</b> dari <b>${questions.length}</b> soal</p>
      <p class="score-text">Nilai: <b>${score}</b></p>
      <p>${message}</p>
      <br>
      ${recapHTML}
      <button class="retry-btn" onclick="restartQuiz()">Ulangi Latihan</button>
    </section>
  `;

  document.getElementById("next-btn").style.display = "none";
}

function restartQuiz() {
  currentIndex = 0;
  correctCount = 0;
  answered = false;

  // Reset timer
  timerDuration = 20 * 60;
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  // Reset rekap
  answerRecap = [];

  document.getElementById("next-btn").style.display = "inline-block";
  loadQuestion();
}

