import React, {useContext, useState} from 'react';
import {Field, Form} from 'react-final-form';
import './EnterLotteryForm.scss'
import {numberValidator} from "./validation";
import {UserWalletInfoContext} from "../../context/UserWalletInfoContext";
import {LotteryContext} from "../../context/LotteryContext";

interface FormProps {
  amount: number
}

const EnterLotteryForm: React.FC = () => {
  const {enterLottery} = useContext(LotteryContext)
  const {userWallet} = useContext(UserWalletInfoContext);
  const [contractLoadingMessage, setContractLoadingMessage] = useState('');

  const onSubmit = async ({amount}: FormProps) => {
    setContractLoadingMessage('Joining to lottery')
    await enterLottery(userWallet, amount);
    setContractLoadingMessage('')
  }

  return (
    <React.Fragment>
      <Form<FormProps>
        onSubmit={onSubmit}
        subscription={{submitting: true}}
        render={({handleSubmit, form, errors, touched, submitting}) => {
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
                <button disabled={submitting} className="submit__button">
                  {contractLoadingMessage || 'Send'}
                </button>
              </div>
            </form>
          )
        }}
      />
    </React.Fragment>
  );
};

export default EnterLotteryForm;
