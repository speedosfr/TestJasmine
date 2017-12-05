/*
 ** signe: '*', '+', '-', '/'
 ** gauche: un nombre non negatif
 ** droite: un nombre plus petit que 430
 **
 ** La fonction renvoie le resultat du calcul
 **
 ** La fonction renvoie null en cas d'erreur
 */
function calculatrice(signe, gauche, droite) {
    if (typeof gauche === 'number' && typeof droite === 'number') {
        if (gauche >= 0 && droite < 430 && droite != 0) {
            switch (signe) {
                case "*":
                    return gauche * droite;
                case "+":
                    return gauche + droite;
                case "-":
                    return gauche - droite;
                case "/":
                    return gauche / droite;
                default:
                    return null;
            }
        } else {
            return null;
        }
    } else {
        return null;
    }
}

module.exports = calculatrice;
