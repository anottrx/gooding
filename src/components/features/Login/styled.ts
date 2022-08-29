import { Palette } from '@/constants';
import styled from '@emotion/styled';

export const Container = styled.section`
  // display: flex;
  // justify-content: center;
  // align-items: center;
  width: 100%;
  height: 100vh;
  // background-color: #7d70fa;
`;

export const IntroduceMainPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 72px;
`;

export const IntroducTitleText = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  justify-content: center;
  line-height: 1.5;
`;

export const IntroducMainPageeText = styled.div`
  font-size: 22px;
  font-weight: 600;
  width: 250px;
  line-height: 1.5;
  color: rgb(51, 61, 75);
`;

export const Img = styled.img`
  width: 500px;
  height: auto;
`;

export const Logo = styled.img`
  width: 200px;
  height: 200px;
  margin-right: 50px;
`;

export const Header = styled.div`
  padding: 16px 28px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const TitleLogo = styled.img`
  width: 120px;
  height: auto;
`;

export const GithubButton = styled.div`
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  padding: 8px 20px 8px 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 0 40px 0;
`;

export const TitleText = styled.div`
  margin-bottom: 36px;
  font-size: 3.4rem;
  font-weight: 700;
  text-align: center;
`;

export const PointText = styled.span`
  color: ${Palette.purple};
  font-weight: 800;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 300px;
`;

export const Input = styled.input`
  border: 3px solid ${Palette.purple};
  border-radius: 20px;
  // height: 30px;
  padding: 8px 10px;
  font-weight: 600;
  font-size: 1.5rem;
  &::placeholder {
    text-align: center;
    // position: absolute;
    // top: 50%;
    // left: 0;
    // transform: translateY(-50%);
    // width: 100%;
    // color: #7d70fa;
  }
  // color: #7d70fa;
`;
