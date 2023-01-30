
import classNames from "classnames/bind"

import style from "./Sidebar.module.scss"

const cx = classNames.bind(style)

function Sidebar() {
    return (
        <aside className={cx("wrapper")}>
            <h1>Sidebar page</h1>
        </aside>
    )
}

export default Sidebar