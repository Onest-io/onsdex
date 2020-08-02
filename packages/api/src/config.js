const defaultConfig = {
  name: "Onest",
  coreAsset: "ONS",
  addressPrefix: "ONS",
  expireInSecs: 15,
  expireInSecsProposal: 24 * 60 * 60,
  reviewInSecsCommittee: 24 * 60 * 60,
  chainId: "f8d9da89c97d407e5b14f1d731700725002ba12d2f93cdb703512bf79158ea76"
};

let networks = [
    defaultConfig,
    {
      name: "TestNet",
      coreAsset: "TEST",
      addressPrefix: "TEST",
      expireInSecs: 15,
      expireInSecsProposal: 24 * 60 * 60,
      reviewInSecsCommittee: 24 * 60 * 60,
      chainId:
        "39f5e2ede1f8bc1a3a54a7914414e3779e33193f1f5693510e73cb7a87617447"
    }
  ],
  current = null;

export const addConfig = config =>
  networks.push({ ...defaultConfig, ...config });

export const setConfig = chainId =>
  (current = networks.find(net => net.chainId === chainId));

export const getConfig = () => current;
