import React from 'react'
import Navbar from '@/components/navBar/navBar'
import styles from './seniorPastors.module.scss'
import examplePP from '@/assets/pastors/HOS_5842.jpg'
import PastorCard from '@/components/pastor card/PastorCard'

const SeniorPastors = () => {

  const pastors = [
    {
      id: 0,
      name: 'Pastor John Doe',
      mail: 'johndoe@example.com',
      facebook: undefined,
      profile:  `
                  Lorem ipsum dolor sit amet consectetur, 
                  adipisicing elit. Laborum consequatur in esse optio sequi veritatis, 
                  et ipsum ullam maiores rerum quae. A incidunt laboriosam veritatis 
                  molestias sed laborum ipsum nostrum?
                  Lorem ipsum dolor sit amet consectetur, 
                  adipisicing elit. Laborum consequatur in esse optio sequi veritatis, 
                  et ipsum ullam maiores rerum quae. A incidunt laboriosam veritatis 
                  molestias sed laborum ipsum nostrum?
                `,
      educational_background: ` 
                                Lorem ipsum dolor sit amet consectetur, 
                                adipisicing elit. Laborum consequatur in esse optio sequi veritatis, 
                                et ipsum ullam maiores rerum quae. A incidunt laboriosam veritatis 
                                molestias sed laborum ipsum nostrum?
                                Lorem ipsum dolor sit amet consectetur, 
                                adipisicing elit. Laborum consequatur in esse optio sequi veritatis, 
                                et ipsum ullam maiores rerum quae. A incidunt laboriosam veritatis 
                                molestias sed laborum ipsum nostrum?
                              `,
      profile_picture: examplePP,
    },
        {
          id: 1,
      name: 'Pastor Jane Doe',
      mail: 'janedoe@example.com',
      facebook: undefined,
      profile:  `
                  Lorem ipsum dolor sit amet consectetur, 
                  adipisicing elit. Laborum consequatur in esse optio sequi veritatis, 
                  et ipsum ullam maiores rerum quae. A incidunt laboriosam veritatis 
                  molestias sed laborum ipsum nostrum?
                  Lorem ipsum dolor sit amet consectetur, 
                  adipisicing elit. Laborum consequatur in esse optio sequi veritatis, 
                  et ipsum ullam maiores rerum quae. A incidunt laboriosam veritatis 
                  molestias sed laborum ipsum nostrum?
                `,
      educational_background: ` 
                                Lorem ipsum dolor sit amet consectetur, 
                                adipisicing elit. Laborum consequatur in esse optio sequi veritatis, 
                                et ipsum ullam maiores rerum quae. A incidunt laboriosam veritatis 
                                molestias sed laborum ipsum nostrum?
                                Lorem ipsum dolor sit amet consectetur, 
                                adipisicing elit. Laborum consequatur in esse optio sequi veritatis, 
                                et ipsum ullam maiores rerum quae. A incidunt laboriosam veritatis 
                                molestias sed laborum ipsum nostrum?
                              `,
      profile_picture: examplePP,
    },
        {
          id: 2,
      name: 'Pastor Alex Doe',
      mail: 'alexdoe@example.com',
      facebook: undefined,
      profile:  `
                  Lorem ipsum dolor sit amet consectetur, 
                  adipisicing elit. Laborum consequatur in esse optio sequi veritatis, 
                  et ipsum ullam maiores rerum quae. A incidunt laboriosam veritatis 
                  molestias sed laborum ipsum nostrum?
                  Lorem ipsum dolor sit amet consectetur, 
                  adipisicing elit. Laborum consequatur in esse optio sequi veritatis, 
                  et ipsum ullam maiores rerum quae. A incidunt laboriosam veritatis 
                  molestias sed laborum ipsum nostrum?
                `,
      educational_background: ` 
                                Lorem ipsum dolor sit amet consectetur, 
                                adipisicing elit. Laborum consequatur in esse optio sequi veritatis, 
                                et ipsum ullam maiores rerum quae. A incidunt laboriosam veritatis 
                                molestias sed laborum ipsum nostrum?
                                Lorem ipsum dolor sit amet consectetur, 
                                adipisicing elit. Laborum consequatur in esse optio sequi veritatis, 
                                et ipsum ullam maiores rerum quae. A incidunt laboriosam veritatis 
                                molestias sed laborum ipsum nostrum?
                              `,
      profile_picture: examplePP,
      phone: undefined
    },
  ]
  return (
    <main className={styles.page}>
      <Navbar/>
      <section className={styles.mainSection}>
        {pastors.map((pastor) => (
          <PastorCard key={pastor.id} pastor={pastor}/>
        ))}
      </section>
    </main>
  )
}

export default SeniorPastors
