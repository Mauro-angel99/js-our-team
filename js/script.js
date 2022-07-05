const teamSpace = document.getElementById(`team`)



const team = [
    {
        name: `Wayne Barnett`,
        job: `Founder & CEO`,
        image: `wayne-barnett-founder-ceo.jpg`,
    },
    {
        name: `Angela Caroll`,
        job: `Chief Editor`,
        image: `angela-caroll-chief-editor.jpg`,
    },
    {
        name: `Walter Gordon`,
        job: `Office Manager`,
        image: `walter-gordon-office-manager.jpg`,
    },
    {
        name: `Angela Lopez`,
        job: `Social Media Manager`,
        image: `angela-lopez-social-media-manager.jpg`,
    },
    {
        name: `Scott Estrada`,
        job: `Developer`,
        image: `scott-estrada-developer.jpg`,
    },
    {
        name: `Barbara Ramos`,
        job: `Graphic Designer`,
        image: `barbara-ramos-graphic-designer.jpg`,
    },
]

let cards = ``

for (let i = 0; i < team.length; i++) {

    cards += `<p><img src="img/${team[i].image}" alt=""><span id="name">${team[i].name}</span><span id="job">${team[i].job}</span></p>`

    console.log(team[i].name)
    console.log(team[i].job)
    console.log(team[i].image)
}



teamSpace.innerHTML = cards
