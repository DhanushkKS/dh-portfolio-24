import {
  Html,
  Head,
  Preview,
  Tailwind,
  Body,
  Section,
  Heading,
  Text,
  Hr,
  Container,
} from "@react-email/components";

type ContactFormProps = {
  message: string;
  senderEmail: string;
};

export const ContactForm = ({ message, senderEmail }: ContactFormProps) => {
  //

  return (
    <>
      <Html>
        <Head />
        <Preview>New message from your portfolio web site</Preview>
        <Tailwind>
          <Body className="bg-gray-100 text-black">
            <Container>
              <Section className="bg-white border border-black/[10] my-10 px-10 py-4 rounded-md ">
                <Heading className="leading-tight">
                  You received the following message from your contact form
                </Heading>
                <Text>{message}</Text>
                <Hr />
                <Text>The sender's Email is {senderEmail}</Text>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    </>
  );
};
