# This project is made under Avalanche Frontier: Decentralized Consumer Application Hackathon

![image](https://github.com/Vikash-8090-Yadav/TreasuryAvlanch/assets/85225156/751cd465-f947-438b-873d-3920f33481f3)




# TreasuryAvlanch


For years I have wanted to participate in fund initiatives to invest in projects (startups and others), but the bureaucracy, the high requirements, and many other problems make it very difficult. And it is something that not only I experience, but also many other people who have a little money and want to support projects in the medium/long term.

The exact size of the private investment fund market is difficult to determine, as there is no single, comprehensive source of data. However, it is estimated that this market has experienced significant growth in recent decades. According to Bain & Company's Global Private Equity Report 2021, assets under management in the private equity industry reached a record of approximately US$4.6 trillion in 2020. In addition to traditional private equity, there are also other types of private investment funds, such as hedge funds, venture capital funds, and private debt funds. Each of these segments has distinct characteristics and investment approaches.

Therefore, through DAO (decentralized organizations) we can create structures so that anyone can invest, through investment clubs (by affinity of ideas, professional relationship, etc.) through Blockchain from anywhere in the world and with fewer requirements. That is why TreasuryAvlanch  was born.

<br>

## 📋 Table of Contents

- [Introduction](#introduction)
- [Installation](#-setting-up-the-project-locally)
- [Challenges we ran into](#-challenges-we-ran-into)
- [ChainLink](#ChainLinkCCIP)
- [Technologies we used](#%EF%B8%8Ftechnologies-we-used)
- [Video Demo](#-video-demo)
- [Contributing](#-contributing)
- 

</div>
<a href="#top">Back to top</a>




## Smart Contract deployed on Polygon testnet
- Smart contract Account - 0xbB40AfFB62bD0e5Df0933624B9B193B218197C6e
- https://testnet.snowtrace.io/address/0xbB40AfFB62bD0e5Df0933624B9B193B218197C6e
![Screenshot from 2024-02-18 05-40-52](https://github.com/Vikash-8090-Yadav/TreasuryAvlanch/assets/85225156/332a2246-2ed2-4950-9d3a-b5bd54e50938)


# Features of TreasuryAvlanch Club

- Gasless Transaction:  The gas Manager will pay for the gas fee to execute this userOp demonstrating the sponsorship part. and this is provided by the particle Gas manager



**Transaction**

![Screenshot from 2024-02-18 05-46-00](https://github.com/Vikash-8090-Yadav/TreasuryAvlanch/assets/85225156/dd3f3c00-7f77-45b9-b2f5-91c16c000c2f)


- web2 user  onboard: I  am uisng particle network for the Login which show Common authentication mechnaism like Google,Discord,Facebook

![Screenshot from 2024-02-18 05-55-43](https://github.com/Vikash-8090-Yadav/TreasuryAvlanch/assets/85225156/555b5684-4594-4173-933f-34e6ff25e0e4)


  **SCA inbuilt wallet for easy acess for naive users**

![Screenshot from 2024-02-18 05-48-43](https://github.com/Vikash-8090-Yadav/TreasuryAvlanch/assets/85225156/3cb7c6aa-edc3-428b-86c6-b10efa66de13)



-- User Operation :  All useroperation started with this code 

```
 const signer = provider.getSigner();

              console.log("singer",signer);
              const tx = {
                to: marketplaceAddress,
                data: encodedData,
              };
              const txResponse = await signer.sendTransaction(tx);
              const txReceipt = await txResponse.wait();

              );
```
All code for   Smart  Contract Account  & connnection to Particle network can be found here:  https://github.com/Vikash-8090-Yadav/TreasuryAvlanch/blob/main/Frontend/src/components/Hooks/Connection.jsx
<be>


## ChainLinkCCIP

Whenever anyone creates the  proposal he/ she will get automatically incentivized by CCIP-BnM. It's just to  support  members to create and onboard more and more club members. 

However, each member has the option to choose on which chain and address they want  the tokens. 

The flow for this is:

```
sourceChain: AvlancheFuji (Fixed)
destinationChain (User choice)
 destinationAccount (User Choice)
 tokenAddress (Avalanche BnM)
 amount (FIXED 0.001)
 feeTokenAddress (FIXED LINK ON AVALANCHE)
```

Here's the transaction details: https://ccip.chain.link/msg/0xdec6efc53c798163c704be31e1ffe6a483e83d2147175c2ebd7e77daf121cf8a

![Screenshot from 2024-02-19 07-38-00](https://github.com/Vikash-8090-Yadav/TreasuryAvlanch/assets/85225156/0606b5f8-7d77-44b4-8d62-1816d10861f4)



## 💡Introduction

TreasuryAvlanch  Club allows you to manage investment clubs, and to spread access to participate in investment funds to anyone, decentralized, agile, and without bureaucracy.Implementing a comprehensive on-chain governance system allows DataDAO members to create and vote on proposals, covering aspects such as member management, dataset storage and distribution, and token distribution. This ensures a democratic and transparent decision-making process within the DAO.

## What you can currently do in this version is:

- Create investment clubs: Just define a name and the club will be associated with the account of the user who creates it (owner).
- Join or leave clubs: Anyone with an Avlanche blockchain account can join the available investment clubs, as well as leave one, with just a couple of clicks.
- Contribute to the club: Any member of a club can contribute to the common fund (pool), depositing AVAX coins that can be used in proposals.
- Create and Vote on Proposals: Any member who has contributed funds to the club pool can create proposals, giving a description, amount (not to exceed the pool amount), and recipient, with a view to investing in any business/person in a project. Also, all members can approve or reject the proposal (only one vote per member is allowed on each proposal).
- Run Proposals: A proposal owner can execute a proposal (if approval is greater than rejection), which will cause the proposal amount to be sent to the specified recipient. The owner can also close a proposal, in case of not continuing with it, either as a cancellation, publication error or to avoid sending funds.
- Timing voting:  After  creation of proposal there is only about 5 min time is given to the  mmeber to  vote.


## Restrictions
The club smart contract has some restrictions, similar to real hedge funds:

- Up to 99 members per club (in many jurisdictions, such as the USA and Chile, this is the maximum limit of club members for certain purposes and types of clubs).
- Only members can participate in club instances.
- Only members who contribute funds to a club have the right to create proposals.
- Only proposal creators can execute them.


## 💥 Challenges we ran into
I faced issue with the accout abstraction  bundler and gas manager.
I faced issue with the persistance of Particle network gets solved  by the particle mentor
Faced issue with the idea of CCIP as my dapp controls  and based on Dao. 
    
<br>

<a href = "#top">Back to top</a>



### 	▶️ Experience the Live Site by Clicking the Link Below
<br>
<div align="center">
  <table>
    <tr>
      <th>Deployed On</th>
      <th>URL</th>
    </tr>
    <tr>
      <td>Vercel</td>
      <td>
        https://treasury-avlanch.vercel.app/
      </td>
    </tr>
    </tr>
    </table>
</div>
<br><br>

## 🚀 Setting up the project locally

To run the  TreasuryAvlanch Club locally, follow these steps:
1. Clone the repository:
 ```bash
 git clone  https://github.com/Vikash-8090-Yadav/TreasuryAvlanch.git
 ```
 2. Navigate to the project directory:
```bash
cd  TreasuryAvlanch
```
3. Node Re-versioning

```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

4. Install the dependencies:
```bash
npm install --legacy-peer-deps
```

6. Access the dApp:
```bash
npm start
```
Open your web browser and visit the URL SHOWING IN UR TERMINAL to interact with the Trasure  DAO CLUB

<br>

## 🛠️Technologies we used


[![Powered by Lighthouse](https://img.shields.io/badge/Powered_by-Lighthouse-ff69b4?logo=lighthouse)](https://lighthouse.filecoin.io/)
[![Built with React.js](https://img.shields.io/badge/Built_with-React.js-61DAFB?logo=react)](https://reactjs.org/)
[![Developed in Motoko](https://img.shields.io/badge/Developed_in-Motoko-2196F3?logo=dfinity)](https://sdk.dfinity.org/)
[![Tailwind CSS](https://img.shields.io/badge/Styled_with-Tailwind_CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Powered by Ethereum](https://img.shields.io/badge/Powered_by-Ethereum-3C3C3D?logo=ethereum)](https://ethereum.org/)

| Technology        | Description                                                | Official Website                                     |
|-------------------|------------------------------------------------------------|------------------------------------------------------|
| React.js          | JavaScript library for building user interfaces, often used for server-rendered or statically-generated applications | [React.js](https://reactjs.org/)                      |
| Tailwind CSS      | Utility-first CSS framework for building custom designs   | [Tailwind CSS](https://tailwindcss.com/)              |
| Solidity | Programming language used for smart contract development on the Ethereum blockchain | https://docs.soliditylang.org/ |
|LightHouse | Store file Secure, Reliable, & Lightning-Fast with Lighthouse. |https://www.lighthouse.storage/|
| Avlanche |Avalanche is a decentralized platform and blockchain protocol that aims to provide a highly scalable and customizable network for decentralized applications (dApps) and custom blockchain networks. .| https://www.avax.network/|
| Particle Network |The Intent-Centric Modular Access Layer of Web |https://particle.network/|
| ChainLink  |ChainLink aims to facilitate smart contracts on various blockchain platforms to securely interact with external data sources, APIs, and payment systems. |https://chain.link/|



<be>


## 🎥 Video Demo

https://youtu.be/bWRefTx7hUo


## 🤝 Contributing

Contributions to TreasryAvlanch are always welcome! If you'd like to contribute, please follow these guidelines:
Fork the repository.

Create a new branch for your feature or bug fix:

```
git checkout -b feature/your-feature-name
```
Commit your changes:

```
git commit -m 'Add some feature'
```
Push the branch:

```
git push origin feature/your-feature-name
```
Open a pull request.

We appreciate your contributions and thank you for helping us improve Algo-Media!

<br >
</div>

## LICENSE

```
MIT
```

## Project Contributor (Member)

<table>
<tr>
<td align="center"><a href="https://github.com/Vikash-8090-Yadav"><img src="https://avatars.githubusercontent.com/u/85225156?s=400&u=3363e9db42792ae40a18b3119c745930bb85cf47&v=4" width=150px height=150px /></a></br> <h4 style="color:red;">Vikash Kumar Yadav</h4>
<a href="https://www.linkedin.com/in/vikash-kumar-yadav-8090/"><img src="https://mpng.subpng.com/20180324/vhe/kisspng-linkedin-computer-icons-logo-social-networking-ser-facebook-5ab6ebfe5f5397.2333748215219374063905.jpg" width="32px" height="32px"></a>
   </td>
  
   
</div>
<a href="#top">Back to top ⬆️</a>

