fetch ('json/temples.json')
    .then(
        (response) => response.json()
    )
    .then(
        (temples) => {
                temples.forEach(
                    temple => {
                        console.log(temple);
                    }
                )
            }
    )


