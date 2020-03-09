let texte = "Bonjour tout le monde,je suis Christian Lisangola,développeur logiciels à Kinshasa Digital.Mon numéro de téléphone est le +243840964176 qui un numéro vodacom,et mon adresse email privé est le christian.lisangola@gmail.com. Par le passé j'ai eu à utiliser d'autres numéros de téléphones à l'instar d'un numéro Airtel qui fut le +243971151294 mais qui ne passe plus je suppose et aussi un numéro Tigo,le +243895602911. Ici à Kinshasa Digital,j'utilise une adresse mail d'entreprise qui est le christian@kinshasadigital.com."

const supprimerLePointALaFin = (tableau)=>{
    for(let i = 0; i < tableau.length; i++){
       if(tableau[i].endsWith('.')){
        tableau[i] = tableau[i].slice(0, tableau[i].length - 1);
       }
    }
}

texte = texte.toLowerCase().split(/[ ,]/);
const toutesLesAdressesMails = texte.filter((mails)=>{
    return mails.includes('@');
});
supprimerLePointALaFin(toutesLesAdressesMails);
console.log(toutesLesAdressesMails);

console.log(`Le nombre des adresses mails : ${toutesLesAdressesMails.length}`);

const tousLesNumberTelephone = texte.filter((number)=>{
    return number.startsWith('+243');
});
console.log(`le nombre de numéros est de ${tousLesNumberTelephone.length}`);
supprimerLePointALaFin(tousLesNumberTelephone);
console.log(tousLesNumberTelephone);

const tousNumeroVodacom = tousLesNumberTelephone.filter((numberVoda)=>{
    return numberVoda.startsWith('+24381');
});
if(tousNumeroVodacom.length === 0){
    console.log('Pas de numéro vodacom');
}else{
    console.log(toutNumeroVodacom);
}

const numeroTigo = tousLesNumberTelephone.filter((numeroTigo)=>{
    return numeroTigo.startsWith('+24389');
});
console.log(numeroTigo);


const numeroOrange = tousLesNumberTelephone.filter((numOrange)=>{
    return numOrange.startsWith('+24384');
});
if(numeroOrange.length === 0){
    console.log('Aucun numéro orange');
}else{
    console.log(numeroOrange);
}

const adressesMailProfessionnelle = toutesLesAdressesMails.filter((mailPro)=>{
    return !mailPro.includes('@gmail');
});
console.log(adressesMailProfessionnelle);

const adresseMailPrivee = toutesLesAdressesMails.filter((mailPrive)=>{
    return mailPrive.includes('@gmail');
});

console.log(adresseMailPrivee);

let tabIgnore = ['le', 'la', 'les', 'des', 'du', 'un', 'une', '+243', '@', 'je', 'tu', 'il', 'elle', 'nous', 'vous', 'elles', 'ils', 'à', 'qui'];

for(motAignore of tabIgnore){
    texte = texte.filter((mot)=>{
        return !mot.includes(motAignore);
    });
}
console.log(`Le nombre de mots restant est de : ${texte.length}`);