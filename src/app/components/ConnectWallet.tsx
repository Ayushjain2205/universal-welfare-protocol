import { Icons } from "@/app/lib/ui/components";
import { ComethWallet } from "@cometh/connect-sdk";
import { CheckIcon } from "@radix-ui/react-icons";

interface ConnectWalletProps {
  connectionError: string | null;
  isConnecting: boolean;
  isConnected: boolean;
  connect: () => Promise<void>;
  wallet: ComethWallet;
}

function ConnectWallet({
  connectionError,
  isConnecting,
  isConnected,
  connect,
  wallet,
}: ConnectWalletProps): JSX.Element {
  const getTextButton = () => {
    if (isConnected) {
      return (
        <>
          <CheckIcon width={20} height={20} />
          <a
            href={`https://mumbai.polygonscan.com/address/${wallet.getAddress()}`}
            target="_blank"
          >
            {"Wallet connected"}
          </a>
        </>
      );
    } else if (isConnecting) {
      return (
        <>
          <Icons.spinner className="h-6 w-6 animate-spin" />
          {"Creating Universal ID..."}
        </>
      );
    } else {
      return "Create Universal ID";
    }
  };

  return (
    <>
      {!connectionError ? (
        <button
          disabled={isConnecting || isConnected || !!connectionError}
          className="flex items-center justify-center gap-x-2.5 px-[38px] py-[16px] font-medium text-white hover:bg-gray-100 disabled:bg-white text-[16px]"
          onClick={connect}
        >
          {getTextButton()}
        </button>
      ) : (
        <p className="flex items-center justify-center text-gray-900 bg-red-50">
          Connection denied
        </p>
      )}
    </>
  );
}

export default ConnectWallet;
