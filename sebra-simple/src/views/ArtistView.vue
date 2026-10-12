<template>
    <main class="container">
        <RouterLink class="back-link" to="/artists"
            >← &nbsp; Tagasi kunstnike juurde</RouterLink
        >

        <h1>Anne Kask</h1>

        <p class="muted subtitle">Maalikunstnik ja juhendaja</p>
        <div class="row artist-detail">
            <div class="col-12 col-md-6">
                <img
                    class="portrait"
                    src="../assets/images/Images1/Kunstniku portree (3).png"
                    alt="Anne Kask"
                />
            </div>
            <div class="col-12 col-md-6">
                <p class="biography">Anne elab Laulasmaal ja töötab Tallinnas. Tema maalid saavad alguse looduses märgatud valgusest ja väikestest hetkedest. Ta kasutab pehmeid värve ning otsib tasakaalu äratuntava maastiku ja abstraktse vormi vahel.</p>
            </div>
        </div>

        <section  class="work-section">
            <h2>Valik loomingust</h2>
            
            <div class="row">
                <figure class="col-12 col-md-6">
                    <img
                        src="../assets/images/Images1/Teose foto.png"
                        alt="Anne Kask: Vaikne hommik"
                    />
                    <figcaption>
                        Vaikne hommik<small>2025 · akrüül lõuendil</small>
                    </figcaption>
                </figure>
                <figure class="col-12 col-md-6">
                    <img
                        src="../assets/images/Images1/Teose foto (1).png"
                        alt="Anne Kask: Õhtu äärel"
                    />
                    <figcaption>
                        Õhtu äärel<small>2025 · õli lõuendil</small>
                    </figcaption>
                </figure>
            </div>

        </section>
    </main>
</template>
