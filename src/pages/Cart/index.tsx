import { CartContainer, Frame } from "./styles";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { Request } from "./components/Request";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { toast } from "react-toastify";
import { useEffect } from "react";

const newAddressFormValidationSchema = zod.object({
  cep: zod
    .string()
    .min(9, "Informe um CEP válido")
    .max(9, "Informe um CEP válido"),
  street: zod.string().min(3, "Informe uma rua válida"),
  number: zod.number().min(1, "Informe uma numeração válida"),
  complement: zod.string().min(3, "Informe um complemento válido").optional(),
  neighborhood: zod.string().min(3, "Informe um bairro válido"),
  city: zod.string().min(4, "Informe uma cidade válida"),
  state: zod.string().min(2, "Informe um estado válido").max(2),
});

type AddressFormData = zod.infer<typeof newAddressFormValidationSchema>;

export function Cart() {
  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(newAddressFormValidationSchema),
    defaultValues: {
      cep: "",
      street: "",
      number: undefined,
      neighborhood: "",
      city: "",
      state: "",
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = addressForm;

  function handleRequest(data: AddressFormData) {
    console.log(data);
  }

  useEffect(() => {
    if (Object.keys(errors).length == 6) {
      toast.warning("Verifique o formulário de endereço");
    } else {
      if (errors.cep?.type) {
        toast.warning(`${errors.cep.message}`);
      }
      if (errors.street?.type) {
        toast.warning(`${errors.street.message}`);
      }
      if (errors.number?.type) {
        errors.number.message === "Expected number, received nan"
          ? toast.warning("Informe o número da residência")
          : toast.warning(`${errors.number.message}`);
      }
      if (errors.complement?.type) {
        toast.warning(`${errors.complement.message}`);
      }
      if (errors.neighborhood?.type) {
        toast.warning(`${errors.neighborhood.message}`);
      }
      if (errors.city?.type) {
        toast.warning(`${errors.city.message}`);
      }
    }
  }, [errors]);

  return (
    <form onSubmit={handleSubmit(handleRequest)}>
      <CartContainer>
        <FormProvider {...addressForm}>
          <Frame>
            <h1>Complete seu pedido</h1>

            <Request />
          </Frame>

          <Frame>
            <h1>Cafés selecionados</h1>

            <SelectedCoffees />
          </Frame>
        </FormProvider>
      </CartContainer>
    </form>
  );
}
