import { Fragment } from "react";
import { personal_details } from "../data/personalData";
import SocialList from "./SocialList";

export default function AboutMeCV() {
  const {
    name: { first, last, middle, nickname },
    address,
    email,
    text,
    phone,
  } = personal_details;
  return (
    <Fragment>
      <section className="resume-section" id="about">
        <div className="resume-section-content">
          <h1 className="mb-1">
            <span className="text-alert">{nickname}</span>
            {` ${first}`}
          </h1>
          <span className="text-small text-muted">{`${first} ${middle} ${last}`}</span>

          <div className=" text-justify subheading mb-5">
            {address} · {phone} ·<a href={`mailto:${email}`}> {email}</a>
          </div>
          <p className="lead mb-5 text-justify">{text}</p>
          <SocialList />
        </div>
      </section>
      <hr className="m-0" />
    </Fragment>
  );
}
