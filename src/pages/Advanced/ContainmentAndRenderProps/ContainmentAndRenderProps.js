import { useEffect, useState } from "react";

const Container = ({ Header, footer, children }) => {
  return (
    <div>
      <div style={{ marginBottom: "250px", backgroundColor: "#AAA" }}>
        <h1>
          <Header additionalText="test" />
        </h1>
      </div>
      {children}
      <div style={{ marginTop: "250px", backgroundColor: "#AAA" }}>
        {footer}
      </div>
    </div>
  );
};

const RenderProp = ({ header, footer, children }) => {
  const [additionalText, setAdditionalText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setAdditionalText(`Test ${Math.random()}`);
    }, 750);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div style={{ marginBottom: "250px", backgroundColor: "#AAA" }}>
        <h1>{header(additionalText)}</h1>
      </div>
      {children(additionalText)}
      <div style={{ marginTop: "250px", backgroundColor: "#AAA" }}>
        {footer(additionalText)}
      </div>
    </div>
  );
};

const Header = ({ additionalText }) => (
  <>
    This is <b>{additionalText} TEXT</b> displayed in header
  </>
);

export const ContainmentAndRenderProps = () => {
  return (
    <>
      <Container Header={Header} footer={<div>FOOTER content</div>}>
        <p>Content</p>
      </Container>
      <hr />
      <RenderProp
        header={(additionalText) => <Header additionalText={additionalText} />}
        footer={(additionalText) => (
          <div>FOOTER content with {additionalText}</div>
        )}
      >
        {(additionalText) => (
          <p>
            {additionalText} - Content - {additionalText}
          </p>
        )}
      </RenderProp>
    </>
  );
};
