import getVacanciesQuery from "./api/vacanciesQuery.js"


function generateVacancyCard(vacancy, index) {
    const logoUrl = vacancy.employer.logo_urls && vacancy.employer.logo_urls.original
    const companyName = vacancy.employer.name
    const web = vacancy.employer.alternate_url

    return `
    <li class="vacancies__item">
            <article class="vacancies-card">
                <div class="vacancies-card__header">
                    <div class="vacancies-card__title-info">
                        <h3 class="vacancies-card__title">${vacancy.name}</h3>
                        <img class="vacancies-card__logo" src=${logoUrl} alt="${companyName} logo"/>
                    </div>
                    <button class="vacancies-card__respond">Respond</button>
                </div>
                <dl class="vacancies-card__info">
                    <div class="vacancies-card__item">
                        <dt class="vacancies-card__label">Form</dt>
                        <dd class="vacancies-card__value">${vacancy.schedule}</dd>
                    </div>
                    <div class="vacancies-card__item">
                        <dt class="vacancies-card__label">Company</dt>
                        <dd class="vacancies-card__value">${companyName}</dd>
                    </div>
                    <div class="vacancies-card__item">
                        <dt class="vacancies-card__label">Web</dt>
                        <dd class="vacancies-card__value">${web}</dd>
                    </div>
                    <div class="vacancies-card__item">
                        <dt class="vacancies-card__label">Address</dt>
                        <dd class="vacancies-card__value">${vacancy.area}</dd>
                    </div>
                </dl>
                <div class="vacancies-card__description-section">
                    <p class="vacancies-card__desc">${vacancy.snippet}</p>
                    <div class="toggle-list">
                        <input type="checkbox" id="toggle-details-${index}" class="toggle-list__checkbox" hidden>
                        <p class="toggle-list__snapshot-title">Success Snapshot</p>
                        <ul class="toggle-list__list">
                            <li class="toggle-list__item toggle-list__item--blur">Develop solutions for product offerings using relevant technologies;</li>
                            <li class="toggle-list__item toggle-list__item--hidden">Work closely with a Team Lead and a UI team to deliver stable, efficient, and scalable solutions;</li>
                            <li class="toggle-list__item toggle-list__item--hidden">Be proud of stable, reliable, and secure code.</li>
                        </ul>
                        <label for="toggle-details-${index}" class="toggle-list__btn"></label>
                    </div>
                </div>
            </article>
        </li>
    `
}

function renderVacanciesList(vacancies, container){
    const vacanciesHtml = vacancies.map((vacancy, index)=>generateVacancyCard(vacancy, index + 1))
    container.innerHTML = vacanciesHtml
}


function renderPagination(currentPage, container, onPageChange){
    console.log('currentPage', currentPage)
    console.log('container', container)
    container.innerHTML = ''
    const prevBtns = Math.max(0, currentPage - 5)
    const nextBtns = Math.max(currentPage, prevBtns + 10)
    console.log('prevBtns', prevBtns)
    console.log('nextBtns', nextBtns)
    for(let i = prevBtns; i < nextBtns; i++){
        const pageNumberBtn = document.createElement('button')
        pageNumberBtn.textContent = i + 1;
        pageNumberBtn.className = 'pagination-container__btn' + (i === currentPage ? '--active' : '')
        pageNumberBtn.addEventListener('click', () => onPageChange(i))
        container.appendChild(pageNumberBtn)
    }
}

async function renderPage(page = 0){
    const vacanciesList = document.querySelector('.vacancies ul')
    const paginationContainer = document.querySelector('.pagination-container')
    const vacancies = await getVacanciesQuery(page)

    
    if(vacancies && vacancies.length > 0){
        renderVacanciesList(vacancies, vacanciesList)
        renderPagination(page, paginationContainer, renderPage)
    }
    else{
        vacanciesList.innerHTML = `<li>Вакансии не найдены</li>`
    }
}

window.addEventListener('DOMContentLoaded', () => {
    renderPage(0)
})
