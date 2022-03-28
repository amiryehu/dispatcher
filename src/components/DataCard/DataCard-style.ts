import styled from "styled-components";
import { colors, cardrRadius } from "../../Utils/Constances";

export const DataCardContainer = styled.div`
  display: flex;
  width: 412px;
  height: 378px;
  border: solid ${colors.gray} 1px;
  font-size: 1.5rem;
  border-radius: ${cardrRadius};
  background: ${colors.white};
  font-family: 'Roboto';
  font-weight: 700;
  padding-top: 15px;
  padding-left: 15px;
  box-shadow: 0px 32px 64px 0px #0000000D ;
`;

export const DataCardHeader = styled.div`
    color: ${colors.black};
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 9px;
`;

export const BottomLineStyle = styled.div`
    width: 20px;
    border-bottom: solid 4px ${colors.darkGray};
    border-radius: 20px;
`;