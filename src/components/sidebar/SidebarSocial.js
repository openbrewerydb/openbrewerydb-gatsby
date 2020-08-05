import React from 'react';
import styled from '@emotion/styled-base';
import Link from '../link';

const DiscordIcon = require('../images/Discord-Logo-Black.svg');

const SocialIconsContainer = styled('div')`
  margin-top: 0.5rem;
  display: flex;
`;

const SidebarSocialContainer = styled('div')`
  padding: 15px;
`;

const SidebarSocialHeading = styled('h4')`
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

const SocialIcon = styled('div')`
  width: 3rem;
`;

function SidebarSocial() {
  return (
    <SidebarSocialContainer>
      <SidebarSocialHeading>Social</SidebarSocialHeading>
      <SocialIconsContainer>
        <SocialIcon>
          <Link to="https://discord.gg/3G3syaD">
            <img
              src={DiscordIcon}
              alt="Discord Logo"
              className="img-responsive"
            />
          </Link>
        </SocialIcon>
      </SocialIconsContainer>
    </SidebarSocialContainer>
  );
}

export default SidebarSocial;
