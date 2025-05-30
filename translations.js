const translations = {
    en: {
      titleMedal: "CS2 Medal Calculator",
      titleXP: "CS2 XP Calculator",
      switchToMedal: "Switch to Medal Calculator ->",
      switchToXP: "Switch to XP Calculator ->",
      currentMedal: "Current Medal",
      targetMedal: "Target Medal",
      noneMedal: "None",
      startingLevel: "Starting Level",
      currentXP: "Current XP",
      startDate: "Start Date",
      endDateXP: "End Date (not included)",
      averageDMScore: "Average Deathmatch Score",
      baseXP: "Base XP/h",
      useDeathmatch: "Use Deathmatch Score",
      useMissions: "Enable Missions XP",
      averageMissionsXP: "Average Missions Reward",
      calculateButton: "CALCULATE",
      resetButton: "RESET",
      totalXPNeeded: "Total XP Needed:",
      dailyXP: "Daily XP:",
      dailyPlaytime: "Daily Playtime:",
      dailyPlaytimeInput: "Daily Playtime",
      hoursInput: "h",
      minutesInput: "m",
      totalXPEarned: "Total XP Earned:",
      levelsEarned: "Levels Earned",
      medalsEarned: "Medals Earned",
      tooltip: "In-Game time (see FAQ)",
      playtime: "%{hours} hours %{minutes} minutes",

      howToUse: "How to use",
      help1: `The CS2 Service Medal Calculator allows you to know how much XP
              you need to earn in order to get your desired Service Medal.
              It also shows you how much time you need to play to earn that XP, based on:`,
      bullet1: "Your Current Level",
      bullet2: "Your Average Deathmatch Score",
      bullet3: "The Days Left in the Year",
      help2: `This tool is fairly easy to use, you only need to input a few things. 
              The first two values to select are the Service Medal that you're aiming for, 
              and the Medal you currently own, if any (check your Steam inventory to know that)`,
      help3: `Then, simply input your CS2 Level and your XP, you can find them by clicking your 
              profile while in the main menu (see picture below)`,
      help4: "Finally, select the day you're going to start playing, and the average score you get in a Deathmatch",
      help5: `The result is calculated assuming you play every day until the end of the year, especially during days 
              where the bonus XP is reset, maximizing your time's worth.`,
      faqTitle: "Frequently Asked Questions",
      faq1Question: "Q: Why Deathmatch score?",
      faq1Answer: `A: Deatmatch is the most consistent gamemode in CS2, as it has a fixed duration, and you can
                   easily figure out your average score per match. Also, it's the most efficient gamemode for XP
                   (according to me in <a href="https://youtu.be/FkpoZfvaaok">this video</a> at least, please let me know if I'm wrong).<br>
                   The only downside of Deathmatch is that it can be pretty boring and not ideal for sessions longer than 1-2 hours at a time.`,
      faq2Question: "Q: How accurate is the result?",
      faq2Answer: `A: The hours of daily playtime are calculated keeping in mind that XP is gained at an
                   increasingly slower rate as you accumulate XP through the week, with the penalty being reset every
                   Wednesday. Note that the result DOES NOT INCLUDE loading times, warmup or map voting. Therefore,
                   a fully completed Deathmatch game will count as 10 minutes of playtime.`,
      faq3Question: "Q: Why are you the greatest CS YouTuber there is?",
      faq3Answer: `A: bEcAUsE my cOntEnt Is dIffErEnt And I cAn Add vALUE tO thE cOmmUnIty.
                   🤓 🤠 (I totally didn't write this to myself)`,
    },
    ru: {
      titleMedal: "Калькулятор Медаль CS2",
      titleXP: "Калькулятор XP CS2",
      switchToMedal: "К Калькулятор Медалей ->",
      switchToXP: "К Калькулятор XP ->",
      currentMedal: "Текущая медаль",
      targetMedal: "Целевая медаль",
      noneMedal: "Нет",
      startingLevel: "Начальный уровень",
      currentXP: "Текущий XP",
      startDate: "Дата начала",
      endDateXP: "Дата окончания (не включен)",
      averageDMScore: "Средний счет Deathmatch",
      baseXP: "Базовый XP/ч",
      useDeathmatch: "Использовать счет Deathmatch",
      useMissions: "Позволить XP за Миссии",
      averageMissionsXP: "Средный XP Миссий",
      calculateButton: "РАССЧИТАТЬ",
      resetButton: "СБРОСИТЬ",
      totalXPNeeded: "Необходимый общий XP:",
      dailyXP: "Ежедневный XP:",
      dailyPlaytime: "Ежедневное время игры:",
      dailyPlaytimeInput: "Ежедневное время игры",
      hoursInput: "ч",
      minutesInput: "м",
      totalXPEarned: "Заработанный XP",
      levelsEarned: "Заработанные Уровни",
      medalsEarned: "Заработанные Медали",
      tooltip: "Время в игре (см. FAQ)",
      playtime: "%{hours} часов %{minutes} минут",

      howToUse: "Как использовать",
      help1: `Калькулятор медалей за службу CS2 позволяет узнать, сколько опыта (XP) вам нужно заработать, 
              чтобы получить желаемую медаль за службу. Он также показывает, сколько времени вам нужно играть, 
              чтобы заработать этот XP, основываясь на:`,

      bullet1: "Ваш текущий уровень",
      bullet2: "Ваш средний счет в Deathmatch",
      bullet3: "Оставшиеся дни в году",
      help2: `Этот инструмент довольно прост в использовании, вам нужно всего лишь ввести несколько параметров. 
              Первые два значения, которые нужно выбрать, — это медаль за службу, к которой вы стремитесь, 
              и медаль, которую вы уже имеете (если она есть, проверьте ваш инвентарь в Steam, чтобы узнать).`,
      help3: `Затем просто введите свой уровень в CS2 и количество опыта (XP). Вы можете найти их, нажав на свой профиль 
              в главном меню (см. изображение ниже).`,
      help4: "Наконец, выберите день, когда вы начнете играть, и средний результат, который вы получаете в Deathmatch.",
      help5: `Результат рассчитывается с предположением, что вы играете каждый день до конца года, особенно в дни, 
              когда сбрасывается бонусный XP, чтобы максимально эффективно использовать свое время.`,

      faqTitle: "Часто задаваемые вопросы",
      faq1Question: "В: Почему Deathmatch?",
      faq1Answer: `О: Deathmatch — это самый стабильный игровой режим в CS2, поскольку у 
                   него фиксированная продолжительность. Вы легко можете вычислить ваш средний 
                   счет за матч. Это также самый эффективный режим для получения XP.
                   (по крайней мере, согласно <a href="https://youtu.be/FkpoZfvaaok">этому видео</a>, 
                   но дайте знать, если я ошибаюсь). Однако он может быть скучным для долгих сессий (1-2 часа).`,
      faq2Question: "В: Насколько точен результат?",
      faq2Answer:
        `О: Калькулятор предполагает, что XP накапливается с уменьшающейся скоростью в течение недели, 
        и штрафы сбрасываются каждую среду. Он ИСКЛЮЧАЕТ время загрузки, разогревы и голосование за карты. 
        Полный матч Deathmatch учитывается как 10 минут игрового времени.`,
      faq3Question: "В: Почему вы лучший YouTuber по CS?",
      faq3Answer: "О: ПоТоМу ЧтО мОй КоНтЕнТ уНиКаЛеН, и Я сТаРаЮсЬ пРиНоСиТь ЦеНнОсТь СоОбЩеСтВу 🤓 🤠 (Точно не сам написал!)",
    },
  };
  // DON'T IGNORE THIS COMMENT IN THE FUTURE
  // REMOVE IF YOU WANT TO IMPLEMENT REMEMBERING LANGUAGE
  localStorage.setItem("language", "en");
  function switchLanguage(lang) {
    // Get all elements with the data-i18n attribute
    const elements = document.querySelectorAll("[data-i18n]");
  
    // Loop through each element and update its text content
    elements.forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (key === "playtime") {
        const template = translations[lang][key];
        element.textContent = template.replace("%{hours}", playtimeData.hours).replace("%{minutes}", playtimeData.minutes);
      }
      else if (key === "faq1Answer") {
        element.innerHTML = translations[lang][key];
      }
      else { element.textContent = translations[lang][key]; }
    });
  
    // Optionally, store the selected language in localStorage
    localStorage.setItem("language", lang);
  }