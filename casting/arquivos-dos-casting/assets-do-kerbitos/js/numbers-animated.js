document.addEventListener("DOMContentLoaded", () => {
  const animateNumber = (element, originalText, duration = 2000) => {
    // Regex para extrair o número, prefixo, sufixo não numérico e sufixo de porcentagem
    // Grupo 1: prefixo opcional (+ ou -)
    // Grupo 2: a parte numérica principal (ex: "4.6", "318", "1.2")
    // Grupo 3: parte decimal opcional (ex: ".6")
    // Grupo 4: quaisquer caracteres não numéricos/não porcentagem após o número (ex: "M", "MIL", "K", " views")
    // Grupo 5: sinal de porcentagem opcional (%)
    const match = originalText.match(/([+-]?)(\d+(\.\d+)?)([^\d%]*)(%?)/)

    if (!match) {
      console.warn("Não foi possível analisar o número para animação:", originalText)
      element.textContent = originalText // Volta ao texto original se a análise falhar
      return
    }

    const prefix = match[1] || ""
    const numberPartString = match[2]
    const nonNumericSuffix = match[4] || ""
    const percentageSuffix = match[5] || ""

    let targetValue
    let decimalPlaces = 0

    // Determina o valor numérico real e as casas decimais iniciais da parte numérica
    const parsedNumber = Number.parseFloat(numberPartString)

    if (nonNumericSuffix.includes("M")) {
      targetValue = parsedNumber * 1000000
      decimalPlaces = 1 // Comum para milhões (ex: 4.6M)
    } else if (nonNumericSuffix.includes("MIL")) {
      targetValue = parsedNumber * 1000
      decimalPlaces = 0 // Comum para milhares (ex: 318MIL)
    } else if (nonNumericSuffix.includes("K")) {
      targetValue = parsedNumber * 1000
      decimalPlaces = 0 // Comum para milhares (ex: 8K)
    } else {
      targetValue = parsedNumber
      const decimalMatch = numberPartString.match(/\.(\d+)/)
      if (decimalMatch) {
        decimalPlaces = decimalMatch[1].length
      }
    }

    if (isNaN(targetValue)) {
      console.warn("Valor alvo inválido após conversão numérica:", originalText)
      element.textContent = originalText
      return
    }

    const startValue = 0
    const startTime = performance.now()

    const updateNumber = (currentTime) => {
      const elapsedTime = currentTime - startTime
      const progress = Math.min(elapsedTime / duration, 1)
      const currentValue = startValue + (targetValue - startValue) * progress

      let formattedNumberPart

      // Formata a parte numérica com base na sua escala original e casas decimais
      if (nonNumericSuffix.includes("M")) {
        formattedNumberPart = (currentValue / 1000000).toFixed(decimalPlaces)
        // Remove .0 final se era originalmente um número inteiro (ex: 4.0M -> 4M)
        if (formattedNumberPart.endsWith(".0")) formattedNumberPart = formattedNumberPart.slice(0, -2)
      } else if (nonNumericSuffix.includes("MIL") || nonNumericSuffix.includes("K")) {
        formattedNumberPart = Math.floor(currentValue / 1000)
      } else {
        formattedNumberPart = currentValue.toFixed(decimalPlaces)
        // Se era originalmente um número inteiro, garante que permaneça inteiro durante a animação
        if (decimalPlaces === 0 && !percentageSuffix) {
          formattedNumberPart = Math.floor(currentValue)
        }
      }

      // Reconstrói o conteúdo de texto completo
      element.textContent = `${prefix}${formattedNumberPart}${nonNumericSuffix}${percentageSuffix}`

      if (progress < 1) {
        requestAnimationFrame(updateNumber)
      }
    }

    requestAnimationFrame(updateNumber)
  }

  const elementsToAnimate = document.querySelectorAll(".metric-value, .number-highlight, .stat span")

  elementsToAnimate.forEach((element) => {
    // Armazena o conteúdo de texto original como um atributo de dados para recuperá-lo mais tarde
    if (!element.dataset.originalValue) {
      element.dataset.originalValue = element.textContent
    }

    // Define o texto inicial para uma versão "0" do texto original
    const originalText = element.dataset.originalValue
    const match = originalText.match(/([+-]?)(\d+(\.\d+)?)([^\d%]*)(%?)/)
    if (match) {
      const prefix = match[1] || ""
      const nonNumericSuffix = match[4] || ""
      const percentageSuffix = match[5] || ""
      // Começa com "0" e mantém as partes não numéricas originais
      element.textContent = `${prefix}0${nonNumericSuffix}${percentageSuffix}`
    } else {
      element.textContent = "0" // Fallback para texto não analisável
    }
  })

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target
          const originalText = element.dataset.originalValue // Obtém o valor original do atributo de dados
          if (originalText) {
            animateNumber(element, originalText)
            observer.unobserve(element) // Para de observar uma vez animado
          }
        }
      })
    },
    {
      threshold: 0.5, // Aciona quando 50% do elemento está visível
    },
  )

  elementsToAnimate.forEach((element) => {
    observer.observe(element)
  })
})
