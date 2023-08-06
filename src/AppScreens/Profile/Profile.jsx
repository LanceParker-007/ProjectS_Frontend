import "./Profile.scss";
import SimilarProfiles from "./SimilarProfiles/SimilarProfiles";

const Profile = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <div className="profilePageContainer">
      <div className="profileDetails">
        <section className="sectionLeft">
          <img
            src="data:image/png;base64,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"
            alt="Avatar"
          />
          <div className="bio">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa,
            suscipit?
            <br />
            <br />
            <br />
            #cool #nice #funny #rich
          </div>
        </section>
        <section className="sectionRight">
          <div className="basicDetails">
            <div className="basicDetailsLeft">
              <h4>Your King</h4>
              <h4>yourKing@email.com</h4>
            </div>
            <div className="basicDetailsRight">
              <button>Edit Profile</button>
            </div>
          </div>
          <br />
          <br />
          <div className="subs">
            <h3>Subscritions</h3>
            <div>
              <h4>Active</h4>
              <p>Name 1</p>
              <p>Name 2</p>
              <p>Name 3</p>
              <p>Name 4</p>
              <p>Name 5</p>
              <p>Name 6</p>
              <p>Name 7</p>
              <p>Name 8</p>
              <p>Name 9</p>
              <p>Name 10</p>
              <h4>Inactive</h4>
              <p>Name 1</p>
              <p>Name 2</p>
              <p>Name 3</p>
              <p>Name 4</p>
              <p>Name 5</p>
              <p>Name 6</p>
            </div>
          </div>
        </section>
      </div>
      <div className="similarSubs">
        <h3>More profiles that you might like</h3>
        <div className="similarSubsProfiles">
          {arr.map((curProfile, index) => {
            return <SimilarProfiles key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
