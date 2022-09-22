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

export function Request() {
  const { register, setValue, setFocus, watch } = useFormContext();

  register("cep", {
    onBlur: (e) => {
      if (e.target.value != "") {
        fetch(`https://viacep.com.br/ws/${e.target.value}/json/`)
          .then((res) => res.json())
          .then((data) => {
            setValue("street", data.logradouro);
            setValue("neighborhood", data.bairro);
            setValue("city", data.localidade);
            setValue("state", data.uf);
            setFocus("number");
          })
          .catch((error) => {
            toast.warning("Informe um cep válido");
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
          <input type="text" placeholder="CEP" id="cep" {...register("cep")} />

          <input type="text" placeholder="Rua" {...register("street")} />

          <div>
            <input
              type="number"
              placeholder="Número"
              id="numero"
              {...register("number", { valueAsNumber: true })}
              min={1}
            />

            <input type="text" placeholder="Complemento" id="complemento" />
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
            <input type="radio" id="credit" name="payment" />
            <label htmlFor="credit">
              <CreditCard className="icon" /> CARTÃO DE CRÉDITO
            </label>
          </div>
          <div>
            <input type="radio" id="debit" name="payment" />
            <label htmlFor="debit">
              <Bank className="icon" /> CARTÃO DE DÉBITO
            </label>
          </div>
          <div>
            <input type="radio" id="money" name="payment" />
            <label htmlFor="money">
              <Money className="icon" /> DINHEIRO
            </label>
          </div>
        </ButtonsPaymentContainer>
      </RequestContainer>
    </>
  );
}
