import UpgradeIMG from '../assets/cookie-upgrade.svg'

export default function Upgrade() {
    return (
        <div className="upgrade-container">
            <div className="upgrade-text">
                <h2>Upgrade</h2>
                <p>Upgrade the cookie in the Upgrade tab.<br/>And getting more cookies per bite</p>
            </div>
            <div className="upgrade-img">
                <img src={UpgradeIMG} alt='img' />
            </div>
        </div>
    )
}