import React from 'react';
import PropType from 'prop-types';
import './components/styles.css';

const CommunityAuthor = ({
  name,
  imageUrl,
  twitterUrl,
  githubUrl,
  description,
}) => (
  <>
    <h2 className="communitySection">About the community author</h2>
    <hr className="separator" />
    <div className="authorSection">
      <div className="authorImg">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="authorDetails">
        <div className="authorName">
          <strong>{name}</strong>
          {twitterUrl ? (
            <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
              <img
                src="https://storage.googleapis.com/graphql-engine-cdn.hasura.io/learn-hasura/assets/social-media/twitter-icon.svg"
                alt="Twitter icon"
              />
            </a>
          ) : null}
          {githubUrl ? (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <img
                src="https://storage.googleapis.com/graphql-engine-cdn.hasura.io/learn-hasura/assets/social-media/github-icon.svg"
                alt="Github icon"
              />
            </a>
          ) : null}
        </div>
        <div className="authorDesc">{description}</div>
      </div>
    </div>
    <hr className="separator" />
  </>
);

CommunityAuthor.propTypes = {
  name: PropType.string,
  imageUrl: PropType.string,
  twitterUrl: PropType.string,
  githubUrl: PropType.string,
  description: PropType.string,
};

export default CommunityAuthor;
