import styled from './app.module.scss'
import {Visuals} from "./components/Visuals/Visuals.tsx";
import {MainButton} from "./components/MainButton/MainButton.tsx";
import {UpgradesList} from "./components/UpgradesList/UpgradesList.tsx";

function App() {

    return (
        <div className={styled.AppWrapper}>
            <div className={styled.AppWrapperTop}>
                <Visuals/>
                <MainButton/>
            </div>

            <UpgradesList/>
        </div>
    )
}

export default App
