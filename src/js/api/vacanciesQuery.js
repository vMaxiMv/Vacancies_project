export default async function getVacanciesQuery(page) {
    try {
    const response = await fetch(`https://api.hh.ru/vacancies?page=${page}`)
    const data = await response.json()
    const filteredVacancies = 
        data.items.map(item => ({
            id: item.id,
            name: item.name,
            area: item.area.name,
            schedule: item.employment.name,
            employer: item.employer,
            snippet: item.snippet.requirement
        }))
        return  filteredVacancies  
    }
    catch(err) {
        console.log('Error', err)
    }
}
