<template>
    <main class="container">
        <h1 class="red">Kursused</h1>
        <p class="muted course-intro">Leia aega loomiseks. Vali rahulik kunstiring või arenda oma oskusi samm-sammult.</p>

        <div class="row course-list">
            <article class="col-12 col-md-4">
                <div class="course-card">
                    <p class="course-category">RAHULIK LOOMING PÄRAST TÖÖD</p>
                    <h2>Kunstiring / Loovstuudio</h2>
                    <p>
                        Katsetame eri materjale ja loome ilma tulemust taga ajamata. Mõnus aeg iseendale, ka siis, kui pole varem kunstiga tegelenud.
                    </p>

                    <div class="course-meta">
                        <p>Algajale · täiskasvanud</p>
                        <p>K 18.00-20.00</p>
                        <p class="muted">Juhendaja Liis Saar</p>
                    </div>
                </div>
            </article>

            <article class="col-12 col-md-4">
                <div class="course-card">
                    <p class="course-category">OSKUSED JA PORTFOOLIO</p>
                    <h2>Maalistuudio</h2>
                    <p>Õpime maali põhitõdesid ning arendame tehnikat. Noortele alates 16. eluaastast ja täiskasvanutele, kes soovivad teadlikult edasi liikuda.</p>
                    <div class="course-meta">
                        <p>Alg- ja kesktase · 16+</p>
                        <p>T 17.30-20.00 · 10 kohtumist</p>
                        <p class="muted">Juhendaja Anne Kask</p>
                    </div>

                    <RouterLink to="/course">Vaata Maalistuudiot →</RouterLink>
                </div>
            </article>

            <article class="col-12 col-md-4">
                <div class="course-card">
                    <p class="course-category">VAATLEMINE JA HARJUTAMINE</p>
                    <h2>Joonistamine</h2>
                    <p>Harjutame joont, proportsiooni ning valgust ja varju. Sobib nii esimesteks sammudeks kui ka portfoolio täiendamiseks.</p>
                    <div class="course-meta">
                        <p>Kõik tasemed · 16+</p>
                        <p>N 17.30-19.30</p>
                        <p class="muted">Juhendaja Rasmus Tamm</p>
                    </div>
                </div>
            </article>
        </div>
    </main>
</template>
