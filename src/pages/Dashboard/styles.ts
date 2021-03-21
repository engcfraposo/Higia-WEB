import styled from 'styled-components';
import { shade } from 'polished';
import { colors } from '../../styles/mixin';

export const Container = styled.div`
  background-color: #fff;
  height: 100vh;
`;

export const Header = styled.header`
  padding: 32px 0;
  background: ${colors.secondary};
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    height: 80px;
  }

  button {
    margin-left: auto;
    background: none;
    border: none;

    svg {
      color: #999591;
    }
  }
`;

export const HeaderProfile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #f4ede8;
    }

    a {
      text-decoration: none;
      color: #fff;

      transition: opacity 0.3s;
      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
`;

export const Schedule = styled.div`
  flex: 1;
  margin-right: 120px;

  h1 {
    font-size: 36px;
    color: ${colors.secondary};
  }

  p {
    border-top: 3px solid ${colors.primary};
    padding-top: 25px;
    margin-top: 25px;
    color: ${colors.secondary};
    display: flex;
    align-items: center;
    font-weight: 500;

    span {
      display: flex;
      align-items: center;
    }

    span + span::before {
      content: '';
      width: 1px;
      height: 12px;
      background: ${colors.primary};
      margin: 0 8px;
    }
  }
`;

export const NextAppointment = styled.div`
  margin-top: 64px;

  > strong {
    color: #999591;
    font-size: 20px;
    font-weight: normal;
  }

  div {
    background: ${colors.primary};
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-top: 24px;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      height: 80%;
      width: 2px;
      border-radius: 0 10px 10px 0;
      left: 0;
      top: 10%;
      background: ${colors.secondary};
    }

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      font-size: 24px;
      color: ${colors.secondary};
    }

    span {
      margin-left: auto;
      display: flex;
      align-items: center;
      color: #fff;

      svg {
        color: green;
        margin-right: 8px;
      }
    }
  }
`;

export const Section = styled.section`
  margin-top: 48px;

  > strong {
    color: #999591;
    font-size: 20px;
    line-height: 26px;
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }

  > p {
    color: #999591;
  }
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.primary};
  border-radius: 10px;
  & + div {
    margin-top: 16px;
  }

  span {
    margin-left: auto;
    display: flex;
    
    align-items: center;
    color: ${colors.secondary};
    width: 72px;

    svg {
      color: #fff;
      margin-left: 20px;
      margin-right: 2px;
    }
  }

  div {
    flex: 1;
    background: ${colors.secondary};
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-left: 24px;

    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      font-size: 20px;
      color: #f4ede8;
    }
  }
`;

export const Calendar = styled.aside`
  width: 380px;

  .DayPicker {
    background: #fff;
    border-radius: 10px;
  }

  .DayPicker-wrapper {
    .DayPicker-NavBar{
      span{
        margin-top: 14px;
      }
    }
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    border-bottom-left-radius: 15px;
    border: 3px solid #ccc;
    border-bottom-right-radius: 15px;
    .DayPicker-Caption{
      background: ${colors.secondary};
      padding: 10px;
      //border: 3px solid #ccc;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
    }
  }

  .DayPicker-Day {
    width: 40px;
    height: 40px;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: ${colors.secondary};
    border-radius: 10px;
    color: #fff;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.2, colors.primary)};
  }

  .DayPicker-Day--today {
    font-weight: normal;
  }

  .DayPicker-Day--disabled {
    color: #666360 !important;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: ${shade(0.2, colors.primary)} !important;
    border-radius: 10px;
    color: #fff !important;
  }
`;

export const ValueContainer = styled.div`
  display: flex;
  align-items: center;
  height: 5vh;
  background-color: ${colors.secondary};
  border-radius: 10px;
  h1{
    text-align: center;
    padding-left: 10px;
  }
`

export const ValueContainerSecondary = styled(ValueContainer)`
  margin-top: 15px;
  background-color: ${colors.primary};
  border-radius: 10px;
`