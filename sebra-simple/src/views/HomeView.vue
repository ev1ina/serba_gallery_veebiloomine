<template>
    <main class="container home">
        <p class="eyebrow">KAASAEGNE KUNST TALLINNAS</p>
        <h1>Kunst sinus <em>eneses</em></h1>
        <p class="intro">Vaata. Avasta. Loo.</p>
        <div class="row home-layout">
            <div class="col-12 col-lg-7">
                <img
                    class="hero-image"
                    src="../assets/images/Images1/Galerii vaade.png"
                    alt="Sebra galerii, maalid ja puidust pink"
                />
            </div>

            <div class="col-12 col-lg-5 home-copy">
                <p>
                    Sebra on väike galerii ja kunstistuudio - koht kunsti
                    avastamiseks ja ise loomiseks. Tutvu meie kunstnike
                    loominguga või leia endale sobiv kursus.
                </p>

                <nav class="home-links" aria-label="Avasta Sebrat">
                    <RouterLink to="/#looming"
                        >Looming <span>→</span></RouterLink
                    ><RouterLink to="/artists"
                        >Kunstnikud <span>→</span></RouterLink
                    ><RouterLink to="/courses"
                        >Kursused <span>→</span></RouterLink
                    >
                </nav>

            </div>
        </div>
        <section
            id="looming"
            class="extra-section"
        >
            <h2>Looming</h2>
            <p>Avasta Sebra kunstnike loomingut.</p>

            <div class="row">
                <figure class="col-12 col-md-6">
                    <img
                        src="../assets/images/Images1/Teose foto.png"
                        alt="Vaikne hommik"
                    />
                    <figcaption>Vaikne hommik</figcaption>
                </figure>

                <figure class="col-12 col-md-6">
                    <img
                        src="../assets/images/Images1/Teose foto (1).png"
                        alt="Õhtu äärel"
                    />
                    <figcaption>Õhtu äärel</figcaption>
                </figure>
            </div>
            <RouterLink to="/artist">Tutvu Anne Kasega →</RouterLink>
        </section>
        
        <section id="meist" class="extra-section">
            <h2>Meist</h2>
            <p>Sebra on väike galerii ja kunstistuudio Tallinnas.</p>
            <p>Tallinn · Tänav 18<br />T-R 12-18, L 11-16</p>
        </section>
    </main>
</template>
