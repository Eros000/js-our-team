const companyEmployees = [

        {
            nome: 'Wayne Barnett' ,
            ruolo: 'Founder & CEO' ,
            immagine: 'wayne-barnett-founder-ceo.jpg' ,
        },

        {
            nome: 'Angela Caroll' ,
            ruolo: 'Chief Editor' ,
            immagine: 'angela-caroll-chief-editor.jpg' ,
        },

        {
            nome: 'Walter Gordon' ,
            ruolo: 'Office Manager' ,
            immagine: 'walter-gordon-office-manager.jpg' ,
        },

        {
            nome: 'Angela Lopez' ,
            ruolo: 'Social Media Manager' ,
            immagine: 'angela-lopez-social-media-manager.jpg' ,
        },

        {
            nome: 'Scott Estrada' ,
            ruolo: 'Developer' ,
            immagine: 'scott-estrada-developer.jpg' ,
        },

        {
            nome: 'Barbara Ramos' ,
            ruolo: 'Graphic Designer' ,
            immagine: 'barbara-ramos-graphic-designer.jpg' ,
        },
]


for (let index = 0; index < companyEmployees.length; index++) {
    const element = companyEmployees[index];
    
    for (const key in element) {
        console.log (key, element[key])

    }    

}
















