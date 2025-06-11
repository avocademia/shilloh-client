'use client'

import style from "./Accordion.module.scss"
import { useState } from "react"


const Accordion = () => {
    
    const [accordionOpen1, setAccordionOpen1] = useState(false)
    const [accordionOpen2, setAccordionOpen2] = useState(false)
    const [accordionOpen3, setAccordionOpen3] = useState(false)
        
    const accordionClass1 = `${accordionOpen1 ? style.visible : style.hidden}`
    const accordionClass2 = `${accordionOpen2 ? style.visible : style.hidden}`
    const accordionClass3 = `${accordionOpen3 ? style.visible : style.hidden}`
    return (
        <article className={style.accordionContainer}>
            <div className={style.accordion}>
                <button onClick={() => setAccordionOpen1(!accordionOpen1)} className={style.question}>
                    <h6>Courses</h6>
                    {accordionOpen1? <span>-</span> : <span>+</span>}
                </button>
                <div className={accordionClass1}>
                    <div className={style.courses}>
                        <h2>CERTIFICATE COURSE</h2>
                        <h4>OLD TESTAMENT</h4>
                        <ul>
                            <li>1. OT 100 Old Testament Survey</li>
                        </ul>
                        <h4>NEW TESTAMENT</h4>
                        <ul>
                            <li>2. NT 100 New Testament Survey</li>
                            <li>3. NT 205 The Life of Christ in the Synoptic Gospels</li>
                        </ul>
                        <h4>THEOLOGY</h4>
                        <ul>
                            <li>4. TH 100 Bible Doctrines</li>
                            <li>5. TH 110 Hermeneutics</li>
                            <li>6. TH 120 Power Ministry</li>
                            <li>7. TH 130 The Power of God</li>
                        </ul>
                        <h4>LEADERSHIP DEVELOPMENT</h4>
                        <ul>
                            <li>8. LD 100 Preparing to Learn</li>
                            <li>9. LD 130 Foundations of Leadership</li>
                            <li>10. Communication Skills</li>
                            <li>11. Digital Learning</li>
                        </ul>
                        <h4>Practicum/Applied Ministry</h4>
                        <ul>
                            <li>12. MIN 100 Evangelism</li>
                            <li>13. MIN 110 Discipleship</li>
                        </ul>
                        <h2>DIPLOMA</h2>
                        <h4>OLD TESTAMENT</h4>
                        <ul>
                            <li>1. OT 205 The Old Testament Historical Books</li>
                        </ul>
                        <h4>NEW TESTAMENT</h4>
                        <ul>
                            <li>2. NT 205 The Life of Christ in the Synoptic Gospels</li>
                            <li>3. NT 215 The Spirit of God in mission</li>
                            <li>4. NT 225 The Corinthian Letters</li>
                            <li>5. NT 300 New Testament Backgrounds</li>
                        </ul>
                        <h4>THEOLOGY</h4>
                        <ul>
                            <li>6. TH 200 Abundant life in the Son</li>
                            <li>7. TH 220 A Biblical Theology of Missions</li>
                            <li>8. TH 310 Adavnced Hermeneutics</li>
                            <li>9. TH 100 Bible Doctrines (multiple choice)</li>
                        </ul>
                        <h4>APPLIED MINISTRY</h4>
                        <ul>
                            <li>10. MIN 215 Muslim Ministry in the African Context</li>
                        </ul>
                        <h4>LEADERSHIP DEVELOPMENT</h4>
                        <ul>
                            <li>11. LD 100 Preparing to Learn</li>
                            <li>12. LD 130 Foundations of Leadership</li>
                            <li>13. LD 205 Biblical Principles of Marriage</li>
                            <li>14. LD 220 Principles of Teaching</li>
                            <li>15. LD 230 Principles of Counselling</li>
                            <li>16. Communication Skills</li>
                            <li>17. Digital Learning</li>
                            <li>19. Work ethics</li>
                            <li>20. Entrepreneurship</li>
                        </ul>
                        <h4>Practicum</h4>
                        <ul>
                            <li>21. Discipleship</li>
                            <li>22. Evangelism</li>
                            <li>23. Pastoral Ministry</li>
                        </ul>
                        
                    </div>
                    
                </div>
        </div> 
        <div className={style.accordion}>
                <button onClick={() => setAccordionOpen3(!accordionOpen3)} className={style.question}>
                    <h6>Legal</h6>
                    {accordionOpen3? <span>-</span> : <span>+</span>}
                </button>
                <div className={accordionClass3}>
                    <p>
                        Shiloh Leadership Training Institute is registered under Cap 499 Sec 14 with Business No. BN-
                        E2CKPJE in accordance with the provision of the Registration of Business names Act.
                    </p>
                    <p>
                        Shiloh leadership applied for registration with Technical and Vocational Education and Training
                        Authority on 27th September, 2019. Ref TVETA/REG/1/2 (1343) and a letter of no objection to
                        Registration was obtained.
                    </p>
                </div>
        </div>
        </article>
    )
}

export default Accordion