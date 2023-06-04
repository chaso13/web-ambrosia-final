import styles from "../style"

import loadable from "@loadable/component"
const Performance = loadable(() => import("../sections/OurWork/Performance/Performance"))

export default function OurWork() {
  return (
    <div className="w-full h-96 overflow-hidden m-60">
      <div className={`${styles.paddingX} ${styles.flexLeft}`}>
        <div className={`${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Performance />
          </div>
        </div>
      </div>
    </div>
  )
}
