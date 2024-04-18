export default function Friends() {
  return (
    <div className="friends-container">
      <div className="friends-text">
        <h2>Friends</h2>
        <p>
          You can invite your friends to
          <br />
          CookieBitten and earn 20 % from each
          <br />
          of their claim.
        </p>
      </div>
      <div className="friends-balance-container">
        <div className="friends-balance-card">
            <div className="friends-balance-text">
              <h2>@cookie</h2>
              <h2>Balance: 12.3</h2>
            </div>
            <div className="friends-balance">
              <h3>You earn:</h3>
              <h3>2,46</h3>
            </div>
        </div>
        <div className="friends-balance-card">
            <div className="friends-balance-text">
              <h2>@durov</h2>
              <h2>Balance: 345.5</h2>
            </div>
            <div className="friends-balance">
              <h3>You earn:</h3>
              <h3>7,16</h3>
            </div>
        </div>
        <div className="friends-balance-card">
            <div className="friends-balance-text">
              <h2>@friend</h2>
              <h2>Balance: 32.5</h2>
            </div>
            <div className="friends-balance">
              <h3>You earn:</h3>
              <h3>4,46</h3>
            </div>
        </div>
      </div>
    </div>
  );
}
