import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { toast } from "react-toastify";
import { normalizeCEP } from "../../../../utils/formMasks";
import {
  ButtonsPaymentContainer,
  FormAddressContainer,
  RequestContainer,
} from "./styles";

export function Order() {
  const { register, setValue, setFocus, watch } = useFormContext();

  register("cep", {
    onBlur: (e) => {
      if (e.target.value != "") {
        fetch(`https://viacep.com.br/ws/${e.target.value}/json/`)
          .then((res) => res.json())
          .then((data) => {
            if (data.erro === "true") {
              toast.warning("Informe um CEP válido");
              setValue("cep", "");
              setFocus("cep");
            } else {
              setValue("street", data.logradouro);
              setValue("neighborhood", data.bairro);
              setValue("city", data.localidade);
              setValue("state", data.uf);
              setFocus("number");
            }
          });
      }
    },
  });

  const cep = watch("cep");
  useEffect(() => {
    const nomalizedCEP = normalizeCEP(cep);
    setValue("cep", nomalizedCEP);
  }, [cep]);

  return (
    <>
      <RequestContainer>
        <div className="header">
          <MapPinLine size={22} className="icon-yellow_dark" />
          <div>
            <h2>Endereço de entrega</h2>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </div>

        <FormAddressContainer>
          <input
            type="text"
            placeholder="CEP"
            id="cep"
            {...register("cep")}
            maxLength={9}
          />

          <input type="text" placeholder="Rua" {...register("street")} />

          <div>
            <input
              type="number"
              placeholder="Número"
              id="numero"
              {...register("number", { valueAsNumber: true })}
              min={1}
            />

            <div className="complement-input">
              <input
                type="text"
                placeholder="Complemento"
                id="complemento"
                {...register("complement")}
              />
              <i className="tag-optional">Opcional</i>
            </div>
          </div>
          <div>
            <input
              type="text"
              placeholder="Bairro"
              id="bairro"
              {...register("neighborhood")}
            />

            <input
              type="text"
              placeholder="Cidade"
              id="cidade"
              {...register("city")}
            />

            <input
              type="text"
              placeholder="UF"
              id="uf"
              maxLength={2}
              {...register("state")}
            />
          </div>
        </FormAddressContainer>
      </RequestContainer>

      <RequestContainer>
        <div className="header">
          <CurrencyDollar size={22} className="icon-purple" />
          <div>
            <h2>Pagamento</h2>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </div>

        <ButtonsPaymentContainer>
          <div>
            <input
              type="radio"
              id="credit"
              {...register("payment")}
              value="creditCard"
            />
            <label htmlFor="credit">
              <CreditCard className="icon" /> CARTÃO DE CRÉDITO
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="debit"
              {...register("payment")}
              value="debitCard"
            />
            <label htmlFor="debit">
              <Bank className="icon" /> CARTÃO DE DÉBITO
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="money"
              {...register("payment")}
              value="money"
            />
            <label htmlFor="money">
              <Money className="icon" /> DINHEIRO
            </label>
          </div>
        </ButtonsPaymentContainer>
      </RequestContainer>
    </>
  );
}
