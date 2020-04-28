import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import styled from '@emotion/styled-base';

const NewsletterFormContainer = styled('div')`
  padding: 15px;
`;

const NewsletterFormHeading = styled('h4')`
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

const Input = styled('input')`
  margin-bottom: 0.5rem;
`;

const NewsletterFormResult = styled('div')`
  margin-top: 0.5rem;

  a {
    color: #000;
    text-decoration: underline;

    &:hover {
      color: #333;
    }
  }
`;

function NewsletterSignup() {
  const [email, setEmail] = React.useState('');
  const [resultMessage, setResultMessage] = React.useState('');

  const handleChange = e => {
    setEmail(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    addToMailchimp(email)
      .then(({ msg, result }) => {
        setResultMessage(msg);
        console.log('msg', `${result}: ${msg}`);
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <NewsletterFormContainer>
      <NewsletterFormHeading>Newsletter Signup</NewsletterFormHeading>
      <form
        name="contact"
        method="post"
        action="/thanks/"
        onSubmit={handleSubmit}
      >
        <div>
          <Input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <button type="submit">Subscribe</button>
        </div>
        {resultMessage && (
          <NewsletterFormResult
            dangerouslySetInnerHTML={{ __html: resultMessage }}
          />
        )}
      </form>
    </NewsletterFormContainer>
  );
}

export default NewsletterSignup;
