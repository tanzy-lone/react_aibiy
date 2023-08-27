import styled from 'styled-components'

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin-right: 24px;
  font-size: 14px;

  .login-wrapper {
    display: flex;
    align-items: center;
    margin-right: 10px;
    color: ${(props) =>
      props.theme.isAlpha ? '#fff' : props.theme.textColor.primary};
    .btn {
      padding: 8px 12px;
      font-weight: 600;
      border-radius: 20px;
      transition: background-color 0.2s ease;
      &:hover {
        background-color: rgba(0, 0, 0, 0.07);
      }
    }
  }
  .profile {
    display: flex;
    position: relative;
    align-items: center;
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 20px;
    color: ${(props) =>
      props.theme.isAlpha ? '#fff' : props.theme.textColor.secondary};
    .c-profile {
      margin-left: 8px;
    }
    &::after {
      content: '';
      position: absolute;
      top: 4px;
      right: 10px;
      width: 10px;
      height: 10px;
      background-color: red;
      border-radius: 50%;
      z-index: 9;
    }
    ${(props) => props.theme.mixin.boxShadow}
    .panel {
      position: absolute;
      top: 50px;
      right: 0;
      width: 220px;
      border-radius: 12px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.09);
      background-color: #fff;
      z-index: 100;
      .item {
        padding: 16px 10px;
        cursor: pointer;
        &:hover {
          background-color: #eee;
        }
      }
      .top {
        display: flex;
        flex-direction: column;
        .register {
          font-weight: 600;
        }

        border-bottom: 1px solid #ccc;
      }
      .bottom {
        display: flex;
        flex-direction: column;
      }
    }
  }
`
