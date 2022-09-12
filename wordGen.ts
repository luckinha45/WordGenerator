const consonants: string = 'bcdefghjklmnpqrstvwxz';
const vowels: string = 'aeiouy';
const vowAccents: string = 'áéíýóúàâêîôû';

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function randomInt(min: number, max:number): number {
    return Math.floor(Math.random() * (max-min+1)) + min;
}

function genChance(prob: number): boolean {
    return (Math.random() <= prob) ? true : false;
}

function formSyllable(): string {
    let con = '';
    let vow = '';
    let notCons = true;

    // chance de ter uma consanante ou uma vogal
    if(!genChance(0.1)) {
        con = consonants[randomInt(0, consonants.length-1)];
        notCons = false;

        // adiciona um 'h' entra a consonante e a vogal
        if(genChance(0.2)) {
            con += 'h'
        }
    }

    
    // Entra caso tenha chance ou uma consoante nn tenha cido gerada
    if(!genChance(0.1) || notCons) {

        // chance de ter acento na vogal
        if(genChance(0.1)) {
            vow = vowAccents[randomInt(0, vowAccents.length-1)];
        }
        else {
            vow = vowels[randomInt(0, vowels.length-1)];
        }
    }

    return con + vow;
}

function formWord(nSylls: number): string {
    let word = '';
    for(let j = 0; j < nSylls; j++) {
        let syll = formSyllable();
        word += syll;
    }

    return word;
}

async function genNome() {
    while(true) {
        let name: Array<string> = [];
        let nSylls: number;

        // let nSylls = randomInt(2, 5);
        // name.push(formWord(nSylls));
    
        nSylls = randomInt(2, 5);
        name.push(formWord(nSylls));
    
        console.log(name.join(' '));
        await sleep(1500);
    }
}

genNome();