import { useReadContract } from "wagmi";
import { SALES_CONTRACT_ABI } from "../utils/primary-sales/abis/salesContractAbi";
import { useGetContractInfo } from "@0xsequence/hooks";
import { UnpackedSaleConfigurationProps } from "../utils/primary-sales/helpers";

export const useSalesCurrency = (
  saleConfiguration: UnpackedSaleConfigurationProps,
) => {
  const { data: paymentTokenData, isLoading: paymentTokenIsLoading } =
    useReadContract({
      abi: SALES_CONTRACT_ABI,
      functionName: "paymentToken",
      chainId: saleConfiguration.chainId,
      address: saleConfiguration.salesContractAddress,
    });

  const paymentTokenAddress = (paymentTokenData as string) || "";

  const {
    data: currencyContractInfoData,
    isLoading: currencyContractInfoIsLoading,
  } = useGetContractInfo({
    chainID: String(saleConfiguration.chainId),
    contractAddress: paymentTokenAddress,
  });

  return {
    data: currencyContractInfoData,
    isLoading: paymentTokenIsLoading || currencyContractInfoIsLoading,
  };
};
