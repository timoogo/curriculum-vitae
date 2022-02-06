// import { Link } from 'react-router-dom';
import "../Scss/components/MemberInfoCV.scss";
import  SkillBar  from "./SkillBar.js";
import Detail from "./Detail"
import TitleSection from "./TitleSection";
import PersonalInfo from "./PersonalInfo";
import {faGraduationCap, faAddressBook,faChartBar, faCheck, faUser} from '@fortawesome/free-solid-svg-icons'

const MemberInfoCV = (props) =>{


return (
<div className="cv_container">

    <section className="memberInfo">
        <PersonalInfo name="Timothee Gaultier" age="22" promotion="2022" mail="tiimogo@gmail.com" />
    </section>
    <section className="aboutMe">
        <p>Il faut un ordinateur équipé d'un système d'exploitation.
        <TitleSection the_title="About me" icon={faUser}/>
                L'ordinateur doit disposer d'une mémoire et, idéalement, d'une sorte
                de stockage à long terme. Un dispositif d'entrée et un dispositif de
                sortie sont recommandés.</p>
    </section>
    <section className="educationAndTraining">
        <TitleSection the_title="Education and training" icon={faCheck}/>
            <ul>
            <Detail the_title="Nursery school"
                    info="Victor Hugo"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati at est corporis nesciunt. Velit quod natus laborum reiciendis facilis numquam nam ipsam, soluta ad, adipisci, quos excepturi! Nemo, dicta eum.
                    "
                    
        />
            <Detail the_title="Primay school"
                    info="Sainte Thérèse"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati at est corporis nesciunt. Velit quod natus laborum reiciendis facilis numquam nam ipsam, soluta ad, adipisci, quos excepturi! Nemo, dicta eum.
                    "
                    
        />
            <Detail the_title="Secondary school"
                    info="Collège Toulouse Lautrec"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati at est corporis nesciunt. Velit quod natus laborum reiciendis facilis numquam nam ipsam, soluta ad, adipisci, quos excepturi! Nemo, dicta eum.
                    "
                    
        />
           
            <Detail the_title="Highschool"
                    info="Lycée Toulouse Lautrec"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati at est corporis nesciunt. Velit quod natus laborum reiciendis facilis numquam nam ipsam, soluta ad, adipisci, quos excepturi! Nemo, dicta eum.
                    "
                    
        />
            <Detail the_title="University"
                    info="WebSchool Factory"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati at est corporis nesciunt. Velit quod natus laborum reiciendis facilis numquam nam ipsam, soluta ad, adipisci, quos excepturi! Nemo, dicta eum.
                    "
                    
        />
            <Detail the_title="University"
                    info="IIM"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati at est corporis nesciunt. Velit quod natus laborum reiciendis facilis numquam nam ipsam, soluta ad, adipisci, quos excepturi! Nemo, dicta eum.
                    "
                    
        />
           
        </ul>
    </section>
    <section className="skillsAndQualifications">
        <TitleSection the_title="Skills and Qualifications" icon={faChartBar}/>
        <SkillBar skillValue="25" skillName="React"/>
        <SkillBar skillValue="45" skillName="Laravel"/>
        <SkillBar skillValue="65" skillName="JavaScript"/>
        <SkillBar skillValue="25" skillName="Python"/>
    </section>
    <section className="diplomas">

        <TitleSection the_title="Diploma" icon={faGraduationCap}/>
        <Detail the_title="2017"
                    info="Baccalaureat"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati at est corporis nesciunt. Velit quod natus laborum reiciendis facilis numquam nam ipsam, soluta ad, adipisci, quos excepturi! Nemo, dicta eum.
                    "         
        />
        <Detail the_title="2018"
                    info="Voltaire"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati at est corporis nesciunt. Velit quod natus laborum reiciendis facilis numquam nam ipsam, soluta ad, adipisci, quos excepturi! Nemo, dicta eum.
                    "         
        />
        <Detail the_title="2018"
                    info="IELTS"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati at est corporis nesciunt. Velit quod natus laborum reiciendis facilis numquam nam ipsam, soluta ad, adipisci, quos excepturi! Nemo, dicta eum.
                    "         
        />
        <Detail the_title="2017-2019"
                    info="1rst Year at WebSchool Factory and half of the second year"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati at est corporis nesciunt. Velit quod natus laborum reiciendis facilis numquam nam ipsam, soluta ad, adipisci, quos excepturi! Nemo, dicta eum.
                    "         
        />
        <Detail the_title="2022"
                    info="Bacchelor at IIM"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati at est corporis nesciunt. Velit quod natus laborum reiciendis facilis numquam nam ipsam, soluta ad, adipisci, quos excepturi! Nemo, dicta eum.
                    "         
        />
    </section>
    <section className="internships">
    <TitleSection the_title="Internship" icon={faChartBar}/>
                   
      <Detail the_title="Freelance developer"  info="Songazine"
                    content="Création d'une interface web en VueJS pour représenter une carte intéractive de la France, sur laquelle on obtient des infos que les détenteurs peuvent fournir" />
      
      <Detail the_title="Graphic assistant"  info="Malakoff Mederic"
                    content="Conception et modernisation de maquettes pour l’Usine Front Digital et Data de la DSI
                    • Apprentissage des bases Figma 
                    • Mise en cohérence graphique des écrans existants (côté métier / côté client)  
                    • Création d’un document d’audit révélant les incohérences graphiques du CMS que l’équipe utilisait
                    • Proposition de maquette intégrale du site Prévoyance IEG
                    • Proposition d’amélioration du parcours utilisateur à travers un document expliquant les améliorations graphiques bénéfiques à l’utilisateur."         />
      
      <Detail the_title="Vice president"  info="FabLab, WebSchool Factory"
                    content="Conception et modernisation de maquettes pour l’Usine Front Digital et Data de la DSI
                    • Apprentissage des bases Figma 
                    • Mise en cohérence graphique des écrans existants (côté métier / côté client)  
                    • Création d’un document d’audit révélant les incohérences graphiques du CMS que l’équipe utilisait
                    • Proposition de maquette intégrale du site Prévoyance IEG
                    • Proposition d’amélioration du parcours utilisateur à travers un document expliquant les améliorations graphiques bénéfiques à l’utilisateur."         />
      
    </section>
</div>
)
}

export default MemberInfoCV;