document.querySelector('.button').addEventListener("click", receiveHoroscope)

function receiveHoroscope(){
    let month = document.querySelector('.month').value
    let day = document.querySelector('.day').value

        if ((month === 'March' && day >= 21) || (month === 'April' && day <= 19)){
        document.querySelector('.yourHoroscope').innerHTML = 'The Boldest, most Ambitious Aries'
        }
        else if ((month === 'April' && day >=20) || (month === 'May' && day <=20 )){
            document.querySelector('.yourHoroscope').innerHTML = "The head Taurean in charge, you're a Taurus"
        }
        else if((month === 'May' && day >=21) || (month === 'June' && day <= 20)){
                document.querySelector('.yourHoroscope').innerHTML = "The world may hate you for whatever reason, but I dont, You'\re a Gemini. I'm also a Gemini, so you're probably super cool and just go with the flow."
        }
        else if((month === 'June' && day >= 21) || (month === 'July' && day <= 22)){
            document.querySelector('.yourHoroscope').innerHTML = 'Reigning over the material world, and the realm, and the material realm, we have you, Cancer.'
        }
        else if((month === 'July' && day >= 23) || (month === 'August' && day <= 22)){
            document.querySelector('.yourHoroscope').innerHTML = 'You are the pinnacle of Royalty in the Celestial Jungle, the Firey Leo.'
        }
        else if ((month === 'August' && day >=23) || (month === 'September' && day <=22 )){
            document.querySelector('.yourHoroscope').innerHTML = 'The ever calculated, detail oriented, analyzer, The Virgo of all Virgos.'
        }
        else if((month === 'September' && day >=23) || (month === 'October' && day <= 22)){
                document.querySelector('.yourHoroscope').innerHTML = 'The most Loyal Libra the world has ever witnessed.'
        }
        else if((month === 'October' && day >= 23) || (month === 'November' && day <= 21)){
            document.querySelector('.yourHoroscope').innerHTML = 'When passion meets power, we conjure you, a Scorpio.'
        }
        else if ((month === 'November' && day >=22) || (month === 'December' && day <=21)){
            document.querySelector('.yourHoroscope').innerHTML = "The Final Raid Boss of Fire Signs, 'Flame Hashira' Sagittarius."
        }
        else if((month === 'December' && day >=22) || (month === 'January' && day <= 19)){
                document.querySelector('.yourHoroscope').innerHTML = 'Standing atop the ladder of both Ambition and Fearlessness, we have the mighty Capricorn.'
        }
        else if((month === 'January' && day >= 20) || (month === 'February' && day <= 18)){
            document.querySelector('.yourHoroscope').innerHTML = 'In the realms of Innovation, Progressiveness, Rebelliousness, and Humanitarianism you lead the way, Angelic Aquarius.'
        }
        else if((month === 'February' && day >= 19) || (month === 'March' && day >= 20)){
            document.querySelector('.yourHoroscope').innerHTML = 'The embodiment of the Ocean, no one flows quite like you, Pisces.'

        }

    }
