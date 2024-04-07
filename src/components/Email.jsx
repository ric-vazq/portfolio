import { Html } from "@react-email/html";
import { Head, Body, Section, Heading, Text } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

export function Email(props) {
  const { firstName, lastName, message, email } = props;

  return (
    <Html lang="en">
      <Head>
        <title>Contact Form</title>
      </Head>
      <Tailwind>
        <Body className="text-white bg-blue-900 my-auto mx-auto font-sans px-2">
          <Section className="mt-10">
            <Heading className="text-center font-normal">
              {firstName} {lastName} hast reached out!
            </Heading>
            <Text>Here is what they had to say: {message}</Text>
            <Text>Answer them at the following address: {email}</Text>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
}
