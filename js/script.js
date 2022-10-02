window.addEventListener('DOMContentLoaded', () => {
  const selectCalculator = () => {
    const formOne = document.querySelector('.form__one'),
    formSecond = document.querySelector('.form__second'),
    selectButton = document.querySelector('.select__button');
    selectButton.addEventListener('click', () => {
      const calcType = document.querySelector('.calc-type');
      const typeValue = +calcType.options[calcType.selectedIndex].value;
      if (typeValue === 0) {
        formOne.style.display = 'none';
        formSecond.style.display = 'none';
      }
      if (typeValue === 1) {
        formOne.style.display = 'block';
        formSecond.style.display = 'none';
      }
      if (typeValue === 2) {
        formOne.style.display = 'none';
        formSecond.style.display = 'block';
      }
    });
  };
  selectCalculator();
  const calculatorOutcomes = document.getElementById('calculator__outcomes'),
      calculatorOutcomesA = document.getElementById('calculator__outcomes-a'),
      calculatorOutcomesB = document.getElementById('calculator__outcomes-b'),
      calculatorGeneral = document.getElementById('calculator__general'),
      calculatorGeneralMany = document.getElementById('calculator__general-many'),
      centerCalculate = document.getElementById('center__calculate'),
      centerCalculateMany = document.getElementById('center__calculate-many'),
      centerReset = document.getElementById('center__reset'),
      centerResetMany = document.getElementById('center__reset-many'),
      resultComing = document.getElementById('result__coming'),
      resultComingA = document.getElementById('result__coming-a'),
      resultComingB = document.getElementById('result__coming-b'),
      resultNotComing = document.getElementById('result__notcoming'),
      resultNotComingA = document.getElementById('result__notcoming-a'),
      resultNotComingB = document.getElementById('result__notcoming-b'),
      resultBoth = document.getElementById('result__both'),
      resultAny = document.getElementById('result__any'),
      resultConditional = document.getElementById('result__conditional'),
      resultOr = document.getElementById('result__or'),
      solution = document.querySelector('.solution'),
      solutionA = document.querySelector('.solution-a'),
      solutionB = document.querySelector('.solution-b'),
      notSolution = document.querySelector('.not__solution'),
      notSolutionA = document.querySelector('.not__solution-a'),
      notSolutionB = document.querySelector('.not__solution-b'),
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
        solutionOr  .insertAdjacentHTML('beforeend', `P(A или B) = ${comingResultA} + ${comingResultB}`);
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
    };
    centerCalculateMany.addEventListener('click', coming);
    centerResetMany.addEventListener('click', resetDelete);
  };
  calculatorSecond();
});