import { Fragment } from "react";
import { personal_details } from "../data/personalData";
import SocialList from "./SocialList";
import { Heading, Link } from "@chakra-ui/react";
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
          <Heading as="h1" size="xl" className="mb-1">
            <span className="text-alert">{nickname}</span>
            {` ${first}`}
          </Heading>
          <span className="text-small text-muted">{`${first} ${middle} ${last}`}</span>

          <div className=" text-justify subheading mb-4">
            {address} · {phone}{" "}
            <u>
              <Link href={`mailto:${email}`}> {email}</Link>
            </u>
          </div>
          <p className="lead mb-5 text-justify">{text}</p>
          <SocialList />
        </div>
      </section>
      <hr className="m-0" />
    </Fragment>
  );
}
