# This project is made under U HACK

![Screenshot from 2024-03-12 10-08-04](https://github.com/Vikash-8090-Yadav/UHACK/assets/85225156/aadc70ae-bf91-4486-8294-d77cf0bb42e0)



# TreasuryConflux


For years I have wanted to participate in fund initiatives to invest in projects (startups and others), but the bureaucracy, the high requirements, and many other problems make it very difficult. And it is something that not only I experience, but also many other people who have a little money and want to support projects in the medium/long term.

The exact size of the private investment fund market is difficult to determine, as there is no single, comprehensive source of data. However, it is estimated that this market has experienced significant growth in recent decades. According to Bain & Company's Global Private Equity Report 2021, assets under management in the private equity industry reached a record of approximately US$4.6 trillion in 2020. In addition to traditional private equity, there are also other types of private investment funds, such as hedge funds, venture capital funds, and private debt funds. Each of these segments has distinct characteristics and investment approaches.

Therefore, through DAO (decentralized organizations) we can create structures so that anyone can invest, through investment clubs (by affinity of ideas, professional relationship, etc.) through Blockchain from anywhere in the world and with fewer requirements. That is why TreasuryConflux  was born.

<br>

## 📋 Table of Contents

- [Introduction](#introduction)
- [Installation](#-setting-up-the-project-locally)
- [Challenges we ran into](#-challenges-we-ran-into)
- [Technologies we used](#%EF%B8%8Ftechnologies-we-used)
- [Video Demo](#-video-demo)
- [Contributing](#-contributing)
- 

</div>
<a href="#top">Back to top</a>




## Smart Contract deployed on Conflux testnet testnet
- Smart contract -0x2C8e10de89319BEdD4535fe668B659e6e1dF5593
- https://evmtestnet.confluxscan.net/address/0x2c8e10de89319bedd4535fe668b659e6e1df5593

![Screenshot from 2024-03-12 10-14-21](https://github.com/Vikash-8090-Yadav/UHACK/assets/85225156/766acb22-cf33-4e22-aa1b-7cf4c666c096)


- Particle Network EOA - 0x579d7FD1D8499D6b4Aa1e48aEEcb903ff9cd8D4F

https://evmtestnet.confluxscan.net/address/0x579d7fd1d8499d6b4aa1e48aeecb903ff9cd8d4f

![Screenshot from 2024-03-12 10-45-59](https://github.com/Vikash-8090-Yadav/TreasuryConflux/assets/85225156/c0282e65-3049-43f5-bb9e-055e640bebf0)


# Features of TreasuryConflux Club


- web2 user  onboard: I  am uisng particle network for the Login which show Common authentication mechnaism like Google,Discord,Facebook


![Screenshot from 2024-03-12 10-17-27](https://github.com/Vikash-8090-Yadav/UHACK/assets/85225156/d2cbddb4-3d7e-482c-be9f-a5ad0215279a)


**Particle Network EOA for onbaording **

![Screenshot from 2024-03-12 10-19-41](https://github.com/Vikash-8090-Yadav/UHACK/assets/85225156/a8a69992-cd1a-4163-b348-eefa3718d187)




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

All code for   Smart  Contract   & connnection to Particle network can be found here:  https://github.com/Vikash-8090-Yadav/UHACK/blob/main/Frontend/src/components/Hooks/Connection.jsx



## 💡Introduction

TreasuryConflux  Club allows you to manage investment clubs, and to spread access to participate in investment funds to anyone, decentralized, agile, and without bureaucracy.Implementing a comprehensive on-chain governance system allows DataDAO members to create and vote on proposals, covering aspects such as member management, dataset storage and distribution, and token distribution. This ensures a democratic and transparent decision-making process within the DAO.

## What you can currently do in this version is:

- Create investment clubs: Just define a name and the club will be associated with the account of the user who creates it (owner).

  ![Screenshot from 2024-03-12 10-34-14](https://github.com/Vikash-8090-Yadav/TreasuryConflux/assets/85225156/d38f9d3e-31c2-40a1-ae46-0a0532670841)

- Join or leave clubs: Anyone with an COnflux blockchain account can join the available investment clubs, as well as leave one, with just a couple of clicks.

  ![Screenshot from 2024-03-12 10-36-26](https://github.com/Vikash-8090-Yadav/TreasuryConflux/assets/85225156/881186e2-8b01-46a4-9df6-0d11146f0bbe)

- Contribute to the club: Any member of a club can contribute to the common fund (pool), depositing CFX coins that can be used in proposals.

  https://evmtestnet.confluxscan.net/tx/0x25753e64b4442b30384da4996e79286defb99de59705406b4388aeb9930c3550

![Screenshot from 2024-03-12 10-33-04](https://github.com/Vikash-8090-Yadav/TreasuryConflux/assets/85225156/ddd727f0-465f-4350-8706-1c9a3eaef938)

- Create and Vote on Proposals: Any member who has contributed funds to the club pool can create proposals, giving a description, amount (not to exceed the pool amount), and recipient, with a view to investing in any business/person in a project. Also, all members can approve or reject the proposal (only one vote per member is allowed on each proposal).

https://evmtestnet.confluxscan.net/tx/0xbb17c3f685de48ff629cd02f107ff89ff01ce93996fd71519057b210a27b09da

 ![Screenshot from 2024-03-12 10-38-12](https://github.com/Vikash-8090-Yadav/TreasuryConflux/assets/85225156/879eb640-f62e-455c-b951-166033ddfa67)

- Run Proposals: A proposal owner can execute a proposal (if approval is greater than rejection), which will cause the proposal amount to be sent to the specified recipient. The owner can also close a proposal, in case of not continuing with it, either as a cancellation, publication error or to avoid sending funds.

  https://evmtestnet.confluxscan.net/tx/0x25753e64b4442b30384da4996e79286defb99de59705406b4388aeb9930c3550

![Screenshot from 2024-03-12 10-48-46](https://github.com/Vikash-8090-Yadav/TreasuryConflux/assets/85225156/9649de72-d6ee-4f7c-8122-dce327aa71b8)


  
- Timing voting:  After  creation of proposal there is only about 5 min time is given to the  mmeber to  vote.


![Screenshot from 2024-03-12 10-41-43](https://github.com/Vikash-8090-Yadav/TreasuryConflux/assets/85225156/302b2201-f188-4820-a3c3-12359ecf3472)

## Restrictions
The club smart contract has some restrictions, similar to real hedge funds:

- Up to 99 members per club (in many jurisdictions, such as the USA and Chile, this is the maximum limit of club members for certain purposes and types of clubs).
- Only members can participate in club instances.
- Only members who contribute funds to a club have the right to create proposals.
- Only proposal creators can execute them.


## 💥 Challenges we ran into
- I faced issue with the accout abstraction  bundler and gas manager.
- I faced issue with the persistance of Particle network gets solved  by the particle mentor

    
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
      <td>Vercel(Conflux Network)</td>
      <td>
        https://uhack.vercel.app/
      </td>
    </tr>
   <tr>
      <td>The Graph(Matic Network)</td>
      <td>
       https://treasury-conflux.vercel.app/
      </td>
    </tr>
    </tr>
    </table>
</div>
<br><br>

## 🚀 Setting up the project locally

To run the  TreasuryConflux Club locally, follow these steps:
1. Clone the repository:
 ```bash
 https://github.com/Vikash-8090-Yadav/TreasuryConflux.git
 ```
 2. Navigate to the project directory:
```bash
cd  TreasuryConflux
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
[![Tailwind CSS](https://img.shields.io/badge/Styled_with-Tailwind_CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Powered by Ethereum](https://img.shields.io/badge/Powered_by-Ethereum-3C3C3D?logo=ethereum)](https://ethereum.org/)

| Technology        | Description                                                | Official Website                                     |
|-------------------|------------------------------------------------------------|------------------------------------------------------|
| React.js          | JavaScript library for building user interfaces, often used for server-rendered or statically-generated applications | [React.js](https://reactjs.org/)                      |
| Tailwind CSS      | Utility-first CSS framework for building custom designs   | [Tailwind CSS](https://tailwindcss.com/)              |
| Solidity | Programming language used for smart contract development on the Ethereum blockchain | https://docs.soliditylang.org/ |
|LightHouse | Store file Secure, Reliable, & Lightning-Fast with Lighthouse. |https://www.lighthouse.storage/|
| conflux |Building a multi-chain ecosystem to enable creators, communities, and markets to connect globally across borders and protocols. As the only regulatory compliant chain in China, Conflux is facilitating entry to the Asian market for other globally minded crypto projects.| https://confluxnetwork.org/|
| Particle Network |The Intent-Centric Modular Access Layer of Web |https://particle.network/|


<be>


## 🎥 Video Demo




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

