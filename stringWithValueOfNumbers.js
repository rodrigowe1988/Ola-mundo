function somaSimilaridade(s)
{
    let soma = 0;
    for(let i = 0; i < s.length; i++)
    {
        const sufixo = s.substr(i);
        for(let j = 0; j < sufixo.length; j++)
        {
            if(s[j] === sufixo[j])
                soma++;
            else
                break;
        }
    }
    return soma;
}
function main(valores) {
   for(var s of valores)
   {
       let soma = somaSimilaridade(s);
       console.log(soma);
   }
}
main("Rodrigo");