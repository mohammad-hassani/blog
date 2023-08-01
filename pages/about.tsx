import type { NextPage } from "next";
import { Page } from "@/components/Page";
import { Prose } from "@/components/Prose";

const About: NextPage = () => {
  return (
    <>
      <Page
        title="About"
      >
        <Prose>
          <p>
            Welcome to My Blog This is where I share my thoughts, ideas, and experiences on various topics. You can find articles, tutorials, and more on subjects like technology, science, lifestyle, and personal development
          </p>
          <p>
            My name is Mohammad, I&apos;m 23 and a computer science student based in Rafsanjan. I have a strong passion for the technologies related to the Front-end web development
            Outside of my regular activities, I&apos;m into designing, making content in my channel, develoaping npm packages, SEO and learning new stuff whenever I have some free time. .
            I&apos;m continuously thrilled to partner with individuals and teams who wholeheartedly embrace my fervor for crafting extraordinary experiences. Your visit to my portfolio is deeply appreciated !
          </p>
          <p>
            Here, you will find a collection of articles and blog posts written by me on a regular basis. I aim to publish new content every week, so make sure to check back regularly for updates.
          </p>
          <p>
            Thank you for visiting my blog repository! If you have any questions or suggestions, feel free to reach out to me through GitHub or contact me via email at hasani9821.mh[at]gmail.com .
          </p>
          <p>
            Happy reading! 🚀
          </p>
          <p>
            made with ❤ by <a href="https://hasani.id.ir">Mohammad Hassani</a>
          </p>
        </Prose>
      </Page>
    </>
  );
};

export default About;
