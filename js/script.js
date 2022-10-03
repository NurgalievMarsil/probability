window.addEventListener('DOMContentLoaded', () => {
  const selectCalculator = () => {
    const formOne = document.querySelector('.form__one'),
    formSecond = document.querySelector('.form__second'),
    formThird = document.querySelector('.form__third'),
    formFour = document.querySelector('.form__four'),
    formFive = document.querySelector('.form__five'),
    formSix = document.querySelector('.form__six'),
    formSeven = document.querySelector('.form__seven'),
    selectButton = document.querySelector('.select__button');
    selectButton.addEventListener('click', () => {
      const calcType = document.querySelector('.calc-type');
      const typeValue = +calcType.options[calcType.selectedIndex].value;
      if (typeValue === 0) {
        formOne.style.display = 'none';
        formSecond.style.display = 'none';
        formThird.style.display = 'none';
        formFour.style.display = 'none';
        formFive.style.display = 'none';
        formSix.style.display = 'none';
        formSeven.style.display = 'none';
      }
      if (typeValue === 1) {
        formOne.style.display = 'block';
        formSecond.style.display = 'none';
        formThird.style.display = 'none';
        formFour.style.display = 'none';
        formFive.style.display = 'none';
        formSix.style.display = 'none';
        formSeven.style.display = 'none';
      }
      if (typeValue === 2) {
        formOne.style.display = 'none';
        formSecond.style.display = 'block';
        formThird.style.display = 'none';
        formFour.style.display = 'none';
        formFive.style.display = 'none';
        formSix.style.display = 'none';
        formSeven.style.display = 'none';
      }
      if (typeValue === 3) {
        formOne.style.display = 'none';
        formSecond.style.display = 'none';
        formThird.style.display = 'block';
        formFour.style.display = 'none';
        formFive.style.display = 'none';
        formSix.style.display = 'none';
        formSeven.style.display = 'none';
      }
      if (typeValue === 4) {
        formOne.style.display = 'none';
        formSecond.style.display = 'none';
        formThird.style.display = 'none';
        formFour.style.display = 'block';
        formFive.style.display = 'none';
        formSix.style.display = 'none';
        formSeven.style.display = 'none';
      }
      if (typeValue === 5) {
        formOne.style.display = 'none';
        formSecond.style.display = 'none';
        formThird.style.display = 'none';
        formFour.style.display = 'none';
        formFive.style.display = 'block';
        formSix.style.display = 'none';
        formSeven.style.display = 'none';
      }
      if (typeValue === 6) {
        formOne.style.display = 'none';
        formSecond.style.display = 'none';
        formThird.style.display = 'none';
        formFour.style.display = 'none';
        formFive.style.display = 'none';
        formSix.style.display = 'block';
        formSeven.style.display = 'none';
      }
      if (typeValue === 7) {
        formOne.style.display = 'none';
        formSecond.style.display = 'none';
        formThird.style.display = 'none';
        formFour.style.display = 'none';
        formFive.style.display = 'none';
        formSix.style.display = 'none';
        formSeven.style.display = 'block';
      }
    });
  };
  selectCalculator();
  const calculatorOutcomes = document.getElementById('calculator__outcomes'),
      listOutcomesOne = document.getElementById('list__outcomes-1'),
      listOutcomesSecond = document.getElementById('list__outcomes-2'),
      calculatorOutcomesA = document.getElementById('calculator__outcomes-a'),
      calculatorOutcomesB = document.getElementById('calculator__outcomes-b'),
      piesOutcomes = document.getElementById('pies__outcomes'),
      olympiadOutcomes = document.getElementById('olympiad__outcomes'),
      examOutcomes = document.getElementById('exam__outcomes'),
      naturalOutcomes = document.getElementById('natural__outcomes'),
      calculatorGeneral = document.getElementById('calculator__general'),
      calculatorGeneralMany = document.getElementById('calculator__general-many'),
      piesGeneral = document.getElementById('pies__general'),
      olympiadGeneral = document.getElementById('olympiad__general'),
      examGeneral = document.getElementById('exam__general'),
      naturalGeneral = document.getElementById('natural__general'),
      centerCalculate = document.getElementById('center__calculate'),
      centerCalculateMany = document.getElementById('center__calculate-many'),
      centerCalculatePies = document.getElementById('center__calculate-pies'),
      centerCalculateOlympiad = document.getElementById('center__calculate-olympiad'),
      centerCalculateExam = document.getElementById('center__calculate-exam'),
      centerCalculateNatural = document.getElementById('center__calculate-natural'),
      centerCalculateList = document.getElementById('center__calculate-list'),
      centerReset = document.getElementById('center__reset'),
      centerResetMany = document.getElementById('center__reset-many'),
      centerResetPies = document.getElementById('center__reset-pies'),
      centerResetOlympiad = document.getElementById('center__reset-olympiad'),
      centerResetExam = document.getElementById('center__reset-exam'),
      centerResetNatural = document.getElementById('center__reset-natural'),
      centerResetList = document.getElementById('center__reset-list'),
      resultComing = document.getElementById('result__coming'),
      resultComingA = document.getElementById('result__coming-a'),
      resultComingB = document.getElementById('result__coming-b'),
      resultComingPies = document.getElementById('result__coming-pies'),
      resultComingOlympiad = document.getElementById('result__coming-olympiad'),
      resultComingExam = document.getElementById('result__coming-exam'),
      resultComingNatural = document.getElementById('result__coming-natural'),
      resultNotComing = document.getElementById('result__notcoming'),
      resultNotComingA = document.getElementById('result__notcoming-a'),
      resultNotComingB = document.getElementById('result__notcoming-b'),
      resultNotComingPies = document.getElementById('result__notcoming-pies'),
      resultNotComingOlympiad = document.getElementById('result__notcoming-olympiad'),
      resultNotComingExam = document.getElementById('result__notcoming-exam'),
      resultNotComingNatural = document.getElementById('result__notcoming-natural'),
      resultBoth = document.getElementById('result__both'),
      resultAny = document.getElementById('result__any'),
      resultConditional = document.getElementById('result__conditional'),
      resultOr = document.getElementById('result__or'),
      resultOrList = document.getElementById('result__or-list'),
      solution = document.querySelector('.solution'),
      solutionA = document.querySelector('.solution-a'),
      solutionB = document.querySelector('.solution-b'),
      solutionPies = document.querySelector('.solution-pies'),
      solutionOlympiad = document.querySelector('.solution-olympiad'),
      solutionExam = document.querySelector('.solution-exam'),
      solutionNatural = document.querySelector('.solution-natural'),
      solutionList = document.querySelector('.solution-list'),
      notSolution = document.querySelector('.not__solution'),
      notSolutionA = document.querySelector('.not__solution-a'),
      notSolutionB = document.querySelector('.not__solution-b'),
      notSolutionPies = document.querySelector('.not__solution-pies'),
      notSolutionOlympiad = document.querySelector('.not__solution-olympiad'),
      notSolutionExam = document.querySelector('.not__solution-exam'),
      notSolutionNatural = document.querySelector('.not__solution-natural'),
      solutionBoth = document.querySelector('.solution-both'),
      solutionAny = document.querySelector('.solution-any'),
      solutionConditional = document.querySelector('.solution-conditional'),
      solutionOr = document.querySelector('.solution-or');
  const calculatorFirst = () => {
    const coming = () => {
      const outcomesCalculator = calculatorOutcomes.value,
        generalCalculator = calculatorGeneral.value;
      let comingResult = outcomesCalculator / generalCalculator;
      let notComingResult = 1 - comingResult;
      if (isNaN(comingResult) & isNaN(notComingResult)) {
        resultComing.value = '';
        resultNotComing.value = '';
      } else {
        solution.textContent = '';
        notSolution.textContent = '';
        solution.insertAdjacentHTML('beforeend', 'P(A) = n / m <br>');
        solution.insertAdjacentHTML('beforeend', `P(A) = ${outcomesCalculator} / ${generalCalculator}`);
        resultComing.value = comingResult;
        notSolution.insertAdjacentHTML("beforeend", "P(A') = 1 - P(A) <br>");
        notSolution.insertAdjacentHTML("beforeend", `P(A') = 1 - ${comingResult}`);
        resultNotComing.value = notComingResult;
      }
    };
    const resetDelete = () => {
      solution.textContent = '';
      notSolution.textContent = '';
    };
    centerCalculate.addEventListener('click', coming);
    centerReset.addEventListener('click', resetDelete);
  };
  calculatorFirst();
  const calculatorSecond = () => {
    const coming = () => {
      const outcomesCalculatorA = calculatorOutcomesA.value,
        outcomesCalculatorB = calculatorOutcomesB.value,
        generalCalculator = calculatorGeneralMany.value;
      let comingResultA = outcomesCalculatorA / generalCalculator;
      let comingResultB = outcomesCalculatorB / generalCalculator;
      let notComingResultA = 1 - comingResultA;
      let notComingResultB = 1 - comingResultB;
      let bothResult = comingResultA * comingResultB;
      let anyResult = comingResultA + comingResultB - bothResult;
      let conditionalResult = bothResult / comingResultB;
      let orResult = comingResultA + comingResultB;
      comingResultA = comingResultA.toFixed(2);
      comingResultB = comingResultB.toFixed(2);
      notComingResultA = notComingResultA.toFixed(2);
      notComingResultB = notComingResultB.toFixed(2);
      bothResult = bothResult.toFixed(2);
      anyResult = anyResult.toFixed(2);
      conditionalResult = conditionalResult.toFixed(2);
      orResult = orResult.toFixed(2);
      console.log(outcomesCalculatorA);
      if (isNaN(comingResultA) & isNaN(notComingResultA)
      & isNaN(comingResultB) & isNaN(notComingResultB) ) {
        resultComingA.value = '';
        resultNotComingA.value = '';
        resultComingB.value = '';
        resultNotComingB.value = '';
      } else {
        solutionA.textContent = '';
        notSolutionA.textContent = '';
        solutionB.textContent = '';
        notSolutionB.textContent = '';
        solutionBoth.textContent = '';
        solutionAny.textContent = '';
        solutionOr.textContent = '';
        solutionConditional.textContent = '';
        solutionA.insertAdjacentHTML('beforeend', 'P(A) = n / m <br>');
        solutionA.insertAdjacentHTML('beforeend', `P(A) = ${outcomesCalculatorA} / ${generalCalculator}`);
        resultComingA.value = comingResultA;
        notSolutionA.insertAdjacentHTML("beforeend", "P(A') = 1 - P(A) <br>");
        notSolutionA.insertAdjacentHTML("beforeend", `P(A') = 1 - ${comingResultA}`);
        resultNotComingA.value = notComingResultA;
        solutionB.insertAdjacentHTML('beforeend', 'P(B) = n / m <br>');
        solutionB.insertAdjacentHTML('beforeend', `P(B) = ${outcomesCalculatorB} / ${generalCalculator}`);
        resultComingB.value = comingResultB;
        notSolutionB.insertAdjacentHTML("beforeend", "P(B') = 1 - P(B) <br>");
        notSolutionB.insertAdjacentHTML("beforeend", `P(B') = 1 - ${comingResultB}`);
        resultNotComingB.value = notComingResultB;
        solutionBoth.insertAdjacentHTML('beforeend', 'P(A ∩ B) = P(A) x P(B) <br>');
        solutionBoth.insertAdjacentHTML('beforeend', `P(A ∩ B) = ${comingResultA} x ${comingResultB}`);
        resultBoth.value = bothResult;
        solutionAny.insertAdjacentHTML('beforeend', 'P(A ∪ B) = P(A) + P(B) - P(A ∩ B) <br>');
        solutionAny.insertAdjacentHTML('beforeend', `P(A ∪ B) = ${comingResultA} + ${comingResultB} - ${bothResult}`);
        resultAny.value = anyResult;
        solutionConditional.insertAdjacentHTML('beforeend', 'P(A | B) = P(A ∩ B) / P(B) <br>');
        solutionConditional.insertAdjacentHTML('beforeend', `P(A | B) = ${bothResult} / ${comingResultB}`);
        resultConditional.value = conditionalResult;
        solutionOr.insertAdjacentHTML('beforeend', 'P(A или B) = P(A) + P(B) <br>');
        solutionOr.insertAdjacentHTML('beforeend', `P(A или B) = ${comingResultA} + ${comingResultB}`);
        resultOr.value = orResult;
      }
    };
    const resetDelete = () => {
      solutionA.textContent = '';
      notSolutionA.textContent = '';
      solutionB.textContent = '';
      notSolutionB.textContent = '';
      solutionBoth.textContent = '';
      solutionAny.textContent = '';
      solutionConditional.textContent = '';
      solutionOr.textContent = '';
    };
    centerCalculateMany.addEventListener('click', coming);
    centerResetMany.addEventListener('click', resetDelete);
  };
  calculatorSecond();
  const calculatorThird = () => {
    const coming = () => {
      const outcomesPies = piesOutcomes.value,
        generalPies = piesGeneral.value;
      let piesComingResult = outcomesPies / generalPies;
      let piesNotComingResult = 1 - piesComingResult;
      piesComingResult = piesComingResult.toFixed(2);
      piesNotComingResult = piesNotComingResult.toFixed(2);
      if (isNaN(piesComingResult) & isNaN(piesNotComingResult)) {
        resultComingPies.value = '';
        resultNotComingPies.value = '';
      } else {
        solutionPies.textContent = '';
        notSolutionPies.textContent = '';
        solutionPies.insertAdjacentHTML('beforeend', 'P(A) = n / m <br>');
        solutionPies.insertAdjacentHTML('beforeend', `P(A) = ${outcomesPies} / ${generalPies}`);
        resultComingPies.value = piesComingResult;
        notSolutionPies.insertAdjacentHTML("beforeend", "P(A') = 1 - P(A) <br>");
        notSolutionPies.insertAdjacentHTML("beforeend", `P(A') = 1 - ${piesComingResult}`);
        resultNotComingPies.value = piesNotComingResult;
      }
    };
    const resetDelete = () => {
      solutionPies.textContent = '';
      notSolutionPies.textContent = '';
    };
    centerCalculatePies.addEventListener('click', coming);
    centerResetPies.addEventListener('click', resetDelete);
  };
  calculatorThird();
  const calculatorFour = () => {
    const coming = () => {
      const outcomesNatural = naturalOutcomes.value,
        generalNatural = naturalGeneral.value;
      let naturalComingResult = outcomesNatural / generalNatural;
      let naturalNotComingResult = 1 - naturalComingResult;
      naturalComingResult = naturalComingResult.toFixed(2);
      naturalNotComingResult = naturalNotComingResult.toFixed(2);
      if (isNaN(naturalComingResult) & isNaN(naturalNotComingResult)) {
        resultComingNatural.value = '';
        resultNotComingNatural.value = '';
      } else {
        solutionNatural.textContent = '';
        notSolutionNatural.textContent = '';
        solutionNatural.insertAdjacentHTML('beforeend', 'P(A) = n / m <br>');
        solutionNatural.insertAdjacentHTML('beforeend', `P(A) = ${outcomesNatural} / ${generalNatural}`);
        resultComingNatural.value = naturalComingResult;
        notSolutionNatural.insertAdjacentHTML("beforeend", "P(A') = 1 - P(A) <br>");
        notSolutionNatural.insertAdjacentHTML("beforeend", `P(A') = 1 - ${naturalComingResult}`);
        resultNotComingNatural.value = naturalNotComingResult;
      }
    };
    const resetDelete = () => {
      solutionNatural.textContent = '';
      notSolutionNatural.textContent = '';
    };
    centerCalculateNatural.addEventListener('click', coming);
    centerResetNatural.addEventListener('click', resetDelete);
  };
  calculatorFour();
  const calculatorFive = () => {
    const coming = () => {
      const outcomesOlympiad = olympiadOutcomes.value,
        generalOlympiad = olympiadGeneral.value;
      let olympiadComingResult = outcomesOlympiad / generalOlympiad;
      let olympiadNotComingResult = 1 - olympiadComingResult;
      olympiadComingResult = olympiadComingResult.toFixed(2);
      olympiadNotComingResult = olympiadNotComingResult.toFixed(2);
      if (isNaN(olympiadComingResult) & isNaN(olympiadNotComingResult)) {
        resultComingOlympiad.value = '';
        resultNotComingOlympiad.value = '';
      } else {
        solutionOlympiad.textContent = '';
        notSolutionOlympiad.textContent = '';
        solutionOlympiad.insertAdjacentHTML('beforeend', 'P(A) = n / m <br>');
        solutionOlympiad.insertAdjacentHTML('beforeend', `P(A) = ${outcomesOlympiad} / ${generalOlympiad}`);
        resultComingOlympiad.value = olympiadComingResult;
        notSolutionOlympiad.insertAdjacentHTML("beforeend", "P(A') = 1 - P(A) <br>");
        notSolutionOlympiad.insertAdjacentHTML("beforeend", `P(A') = 1 - ${olympiadComingResult}`);
        resultNotComingOlympiad.value = olympiadNotComingResult;
      }
    };
    const resetDelete = () => {
      solutionOlympiad.textContent = '';
      notSolutionOlympiad.textContent = '';
    };
    centerCalculateOlympiad.addEventListener('click', coming);
    centerResetOlympiad.addEventListener('click', resetDelete);
  };
  calculatorFive();
  const calculatorSix = () => {
    const coming = () => {
      const outcomesExam = examOutcomes.value,
        generalExam = examGeneral.value;
      let examComingResult = outcomesExam / generalExam;
      let examNotComingResult = 1 - examComingResult;
      examComingResult = examComingResult.toFixed(2);
      examNotComingResult = examNotComingResult.toFixed(2);
      if (isNaN(examComingResult) & isNaN(examNotComingResult)) {
        resultComingExam.value = '';
        resultNotComingExam.value = '';
      } else {
        solutionExam.textContent = '';
        notSolutionExam.textContent = '';
        solutionExam.insertAdjacentHTML('beforeend', 'P(A) = n / m <br>');
        solutionExam.insertAdjacentHTML('beforeend', `P(A) = ${outcomesExam} / ${generalExam}`);
        resultComingExam.value = examComingResult;
        notSolutionExam.insertAdjacentHTML("beforeend", "P(A') = 1 - P(A) <br>");
        notSolutionExam.insertAdjacentHTML("beforeend", `P(A') = 1 - ${examComingResult}`);
        resultNotComingExam.value = examNotComingResult;
      }
    };
    const resetDelete = () => {
      solutionExam.textContent = '';
      notSolutionExam.textContent = '';
    };
    centerCalculateExam.addEventListener('click', coming);
    centerResetExam.addEventListener('click', resetDelete);
  };
  calculatorSix();
  const calculatorSeven = () => {
    const coming = () => {
      const outcomesListOne = +listOutcomesOne.value,
      outcomesListSecond = +listOutcomesSecond.value;
      let orResultList = outcomesListOne + outcomesListSecond;
      orResultList = orResultList.toFixed(2);
      if (isNaN(orResultList)) {
        resultOrList.value = '';
      } else {
        solutionList.textContent = '';
        solutionList.insertAdjacentHTML('beforeend', 'P(A или B) = P(A) + P(B) <br>');
        solutionList.insertAdjacentHTML('beforeend', `P(A или B) = ${outcomesListOne} + ${outcomesListSecond}`);
        resultOrList.value = orResultList;
      }
    };
    const resetDelete = () => {
      solutionList.textContent = '';
    };
    centerCalculateList.addEventListener('click', coming);
    centerResetList.addEventListener('click', resetDelete);
  };
  calculatorSeven();
});