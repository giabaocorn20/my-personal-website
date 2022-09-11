import { Stack } from "react-bootstrap";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { social_links } from "../data/personalData";

export default function SocialList() {
  return (
    <Stack direction="horizontal" gap={5} className=" text-center my-3">
      {social_links.map((value, index) => {
        const { icon, link } = value;
        return (
          <a key = {index} className="fa" href={link}>
            {icon}
          </a>
        );
      })}
    </Stack>
  );
}


