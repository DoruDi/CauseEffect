const people = [
    {name: "Doru D.", street: "my Street", city: "Toplita", state: "state1", country: "Ro", telephone: "0757418580", birthday: "my birthday"},
    {name: "Cosmin G.", street: "your Srteet", city: "Timisoara", state: "state2", country: "Ro", telephone: "200300402", birthday: "your birthday"},
    {name: "Mihai", street: "street3", city: "city3", state: "state3", country: "UK", telephone: "200300403", birthday: "birthday3"},
    {name: "Mihaela", street: "street4", city: "city4", state: "state4", country: "UK", telephone: "200300404", birthday: "birthday4"},
    {name: "Andrei", street: "street5", city: "city5", state: "state5", country: "UK", telephone: "200300405", birthday: "birthday5"},
] 

const containerDiv = document.querySelector('.container') 

const peopleDiv = document.createElement('div')
peopleDiv.classList.add('people-container')

const detailsDiv = document.createElement('div')
detailsDiv.classList.add('details-container')

containerDiv.append(peopleDiv, detailsDiv)

people.forEach((person, index) => {
    const personDiv = document.createElement('div')
    personDiv.classList.add('person-name')
    personDiv.addEventListener('click', () => showDetails(index))
    const personName = document.createElement('h4')
    personName.innerText = person.name

    peopleDiv.append(personDiv)
    personDiv.append(personName)
})

people.forEach(item => {
    const personDetail = document.createElement('ul')
    personDetail.classList.add('person-detail')
    detailsDiv.append(personDetail)
 
    Object.entries(item).forEach(el => {
        const detailLi = document.createElement('li')
        personDetail.append(detailLi)
        detailLi.innerText = `${el[0]}: ${el[1]}`
    })
})

showDetails = (index) => {
    console.log(document.querySelectorAll('ul'))
    document.querySelectorAll('ul').forEach(el => {
        el.classList.remove('show')
    })
    document.querySelectorAll('ul')[index].classList.add("show")

    document.querySelectorAll('.person-name').forEach(el => {
        el.classList.remove('active')
    })
    document.querySelectorAll('.person-name')[index].classList.add('active')
}

