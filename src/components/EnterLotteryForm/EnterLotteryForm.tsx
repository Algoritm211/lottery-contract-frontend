import React, {useContext} from 'react';
import {Field, Form} from 'react-final-form';
import './EnterLotteryForm.scss'
import {numberValidator} from "./validation";
import {UserWalletInfoContext} from "../../context/UserWalletInfoContext";
import {lottery} from "../../contractInfo/lottery";
import {web3} from "../../web3";

interface FormProps {
  amount: number
}

const EnterLotteryForm: React.FC = () => {
  const {userWallet} = useContext(UserWalletInfoContext);

  const onSubmit = async ({amount}: FormProps) => {
    await lottery.methods.enter().send({
      from: userWallet,
      value: web3.utils.toWei(amount.toString(), 'ether'),
    })
  }

  return (
    <Form<FormProps>
      onSubmit={onSubmit}
      render={({handleSubmit, form, errors, touched}) => {
        return (
          <form className="entry__form" onSubmit={handleSubmit}>
            <h2>
              Want to try your <strong>luck</strong>?
            </h2>
            <Field
              type="number"
              name="amount"
              placeholder="Please, enter amount in ETH"
              component="input"
              validate={numberValidator}
            />
            {errors?.amount && touched?.amount && (
              <span className="form_error">
                {errors.amount}
              </span>
            )}
            <div>
              <button className="submit__button">
                Send
              </button>
            </div>
          </form>
        )
      }}
    />
  );
};

export default EnterLotteryForm;
