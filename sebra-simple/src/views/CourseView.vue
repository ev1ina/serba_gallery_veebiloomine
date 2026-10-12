<script>
export default {
    data() {
        return {
            showRegistration: false,
            registrationSubmitted: false,
        };
    },
    methods: {
        submitRegistration() {
            this.registrationSubmitted = true;
        },
    },
};
</script>

<template>
    <main class="container course-detail">
        <RouterLink class="back-link" to="/courses"
            >← &nbsp; Tagasi kursuste juurde</RouterLink
        >
        <h1>Maalistuudio</h1>
        <p class="muted subtitle">Samm-sammult oma käekirjani</p>
        <img
            class="course-image"
            src="../assets/images/Images1/Maalitunni foto.png"
            alt="Maalistuudio osalejad maalimas"
        />
        <div class="row course-columns">
            <div class="col-12 col-md-7">
                <section>
                    <h2>Kellele?</h2>
                    <p>
                        Noortele ja täiskasvanutele, kes tahavad õppida
                        maalimist süsteemselt. Sobib ka kunstikooli
                        sisseastumiseks valmistujale, kes soovib oma portfooliot
                        täiendada. Varasem kogemus ei ole vajalik.
                    </p>
                </section>
                <section>
                    <h2>Mida teeme?</h2>
                    <ul class="course-topics">
                        <li>Värviõpetus ja värvide segamine</li>
                        <li>Kompositsioon, valgus ja vari</li>
                        <li>Natüürmort ja maastikumaal</li>
                        <li>Iseseisev töö ja portfoolio tagasiside</li>
                    </ul>
                </section>
                <section>
                    <h2>Juhendaja Anne Kask</h2>
                    <p>
                        Meie galerii maalikunstnik Anne aitab leida kindlust
                        pintsliga ja julgust oma ideid katsetada.
                    </p>
                    <RouterLink to="/artist"
                        >Tutvu Annega <span class="arrow">→</span></RouterLink
                    >
                </section>
            </div>
            <div class="col-12 col-md-5 course-sidebar">
                <dl>
                    <dt>Tase</dt>
                    <dd>Alg- ja kesktase · alates 16. eluaastast</dd>
                    <dt>Aeg</dt>
                    <dd>
                        13.10-15.12.2026<br />Teisipäeviti 17.30-20.00<br />10
                        kohtumist
                    </dd>
                    <dt>Hind</dt>
                    <dd>450 € / kogu kursus</dd>
                    <dt>Materjalid</dt>
                    <dd>
                        Värvid, pintslid ja paber hinna sees.<br />Oma lõuend
                        tuleb kaasa võtta.
                    </dd>
                </dl>
                <blockquote>
                    <p>
                        „Sain juurde kindlust oma tehnikas ja õppisin oma ideid
                        teadlikumalt väljendama. Kursuse jooksul valmisid ka
                        tööd, mille sain lisada oma portfooliosse.“
                    </p>
                    <cite>Kertu, 19 · kevadise rühma osaleja</cite>
                </blockquote>
                <button
                    type="button"
                    class="register-button"
                    @click="showRegistration = !showRegistration"
                    :aria-expanded="showRegistration"
                    aria-controls="registration-form"
                    >{{ showRegistration ? 'Sulge vorm' : 'Registreeru' }}
                </button>

                <p class="button-caption">
                    Väike rühm · kuni 10 osalejat
                </p>

                <form
                    v-if="showRegistration"
                    id="registration-form"
                    class="registration-form"
                    @submit.prevent="submitRegistration"
                    @input="registrationSubmitted = false"
                >
                    <h2>Registreeru Maalistuudiosse</h2>

                    <label for="name">Nimi</label>
                    <input
                        id="name"
                        class="form-control"
                        type="text"
                        pattern=".*\p{L}.*"
                        required
                        autocomplete="name"
                        title="Sisesta nimi tähtedega."
                        @input="($event.target.value = $event.target.value.replace(/[^\p{L} ]/gu, ''))"
                    />

                    <label for="email">E-post</label>
                    <input
                        id="email"
                        class="form-control"
                        type="email"
                        required
                        autocomplete="email"
                        placeholder="nimi@example.com"
                    />

                    <p class="form-note">
                        See on näidisvorm. Andmeid ei saadeta.
                    </p>

                    <button type="submit" class="register-button">
                        Kinnita
                    </button>

                    <p
                        v-if="registrationSubmitted"
                        class="form-message"
                        role="status"
                    >
                        Vorm on õigesti täidetud! See oli testregistreerimine.
                    </p>
                </form>
            </div>
        </div>
    </main>
</template>
