export const setSavedSession = (session) => {
    sessionStorage.removeItem('userName');
    sessionStorage.setItem('userName', (session));
}

export const getSavedSession = () => {
    const savedSession = sessionStorage.getItem('userName');
    
    if(savedSession === undefined) {
        return ('');
    } else {
        return (savedSession);
    }
}