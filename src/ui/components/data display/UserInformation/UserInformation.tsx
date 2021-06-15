import React from "react";
import {
  UserInformationContainer,
  UserName,
  UserDescription,
  AvatarStyLed,
  RatingStyLed,
} from "./UserInformation.style";

interface UserInformationProps {
  picture?: string;
  name: string;
  rating: number;
  description?: string;
}

const UserInformation: React.FC<UserInformationProps> = ({
  name,
  picture,
  rating,
  description,
}) => {
  return (
    <UserInformationContainer>
      <AvatarStyLed src={picture}>{name[0]}</AvatarStyLed>
      <UserName>{name}</UserName>
      <RatingStyLed readOnly value={rating} />
      <UserDescription>{description}</UserDescription>
    </UserInformationContainer>
  );
};

export default UserInformation;
