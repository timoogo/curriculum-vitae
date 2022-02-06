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
        <TitleSection title="About me" icon={faUser}/>
                L'ordinateur doit disposer d'une mémoire et, idéalement, d'une sorte
                de stockage à long terme. Un dispositif d'entrée et un dispositif de
                sortie sont recommandés.</p>
    </section>
    <section className="educationAndTraining">
        <TitleSection title="Education and training" icon={faCheck}/>
            <ul>
            <Detail title="Nursery school"
                    info="Victor Hugo"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati at est corporis nesciunt. Velit quod natus laborum reiciendis facilis numquam nam ipsam, soluta ad, adipisci, quos excepturi! Nemo, dicta eum.
                    "
                    
        />
            <Detail title="Primay school"
                    info="Sainte Thérèse"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati at est corporis nesciunt. Velit quod natus laborum reiciendis facilis numquam nam ipsam, soluta ad, adipisci, quos excepturi! Nemo, dicta eum.
                    "
                    
        />
            <Detail title="Secondary school"
                    info="Collège Toulouse Lautrec"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati at est corporis nesciunt. Velit quod natus laborum reiciendis facilis numquam nam ipsam, soluta ad, adipisci, quos excepturi! Nemo, dicta eum.
                    "
                    
        />
           
            <Detail title="Highschool"
                    info="Lycée Toulouse Lautrec"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati at est corporis nesciunt. Velit quod natus laborum reiciendis facilis numquam nam ipsam, soluta ad, adipisci, quos excepturi! Nemo, dicta eum.
                    "
                    
        />
            <Detail title="University"
                    info="WebSchool Factory"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati at est corporis nesciunt. Velit quod natus laborum reiciendis facilis numquam nam ipsam, soluta ad, adipisci, quos excepturi! Nemo, dicta eum.
                    "
                    
        />
            <Detail title="University"
                    info="IIM"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati at est corporis nesciunt. Velit quod natus laborum reiciendis facilis numquam nam ipsam, soluta ad, adipisci, quos excepturi! Nemo, dicta eum.
                    "
                    
        />
           
        </ul>
    </section>
    <section className="skillsAndQualifications">
        <TitleSection title="Skills and Qualifications" icon={faChartBar}/>
        <SkillBar skillValue="25" skillName="React"/>
        <SkillBar skillValue="45" skillName="Laravel"/>
        <SkillBar skillValue="65" skillName="JavaScript"/>
        <SkillBar skillValue="25" skillName="Python"/>
    </section>
    <section className="diplomas">

        <TitleSection title="Diploma" icon={faGraduationCap}/>
        <Detail title="2017"
                    info="Baccalaureat"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati at est corporis nesciunt. Velit quod natus laborum reiciendis facilis numquam nam ipsam, soluta ad, adipisci, quos excepturi! Nemo, dicta eum.
                    "         
        />
        <Detail title="2018"
                    info="Voltaire"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati at est corporis nesciunt. Velit quod natus laborum reiciendis facilis numquam nam ipsam, soluta ad, adipisci, quos excepturi! Nemo, dicta eum.
                    "         
        />
        <Detail title="2018"
                    info="IELTS"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati at est corporis nesciunt. Velit quod natus laborum reiciendis facilis numquam nam ipsam, soluta ad, adipisci, quos excepturi! Nemo, dicta eum.
                    "         
        />
        <Detail title="2017-2019"
                    info="1rst Year at WebSchool Factory and half of the second year"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati at est corporis nesciunt. Velit quod natus laborum reiciendis facilis numquam nam ipsam, soluta ad, adipisci, quos excepturi! Nemo, dicta eum.
                    "         
        />
        <Detail title="2022"
                    info="Bacchelor at IIM"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati at est corporis nesciunt. Velit quod natus laborum reiciendis facilis numquam nam ipsam, soluta ad, adipisci, quos excepturi! Nemo, dicta eum.
                    "         
        />
    </section>
  
</div>
)
}

export default MemberInfoCV;