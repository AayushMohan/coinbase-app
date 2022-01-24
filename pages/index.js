import { useWeb3 } from "@3rdweb/hooks";
import styled from "@emotion/styled";

export default function Home() {
  const { address, connectWallet } = useWeb3();

  return (
    <Wrapper>
      <WalletConnect>
        <button onClick={() => connectWallet("injected")}>
          Connect Wallet
        </button>
      </WalletConnect>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  max-width: 100vw;
  background-color: #0a0b0d;
  color: #fff;
  display: grid;
  place-items: center;
`;

const WalletConnect = styled.div``;
