# <a href = 'https://docs.google.com/presentation/d/1icdFPX73SFo--lDWT9SDbqE7cRhtN4meuuMX0mjYVng/edit?usp=sharing'> Earth Saviour <a/>

  
# Inspiration :

We deeply care about sustainability, climate change and carbon footprint. Currently, building owners charges fixed utility fee to their renters which disincentives them to adopt energy efficient living standards. Its unfair to have same utility fee for all renters as few of them might consume energy recklessly and few of them might be very conscious about sustainability lifestyle. Buildings contribute to roughly 40% of total energy consumption and green house emissions. If we adopt energy efficient lifestyle in our day to day behavior, it can lead to tremendous impact in climate change and sustainability globally.

![Dashboard](https://user-images.githubusercontent.com/77370233/172060784-eee87705-c455-42e8-b9b7-9aecc86400cf.PNG)

  
# What it does :

We have developed Waste2Lose model which incentives renters to reduce energy consumption and award tokens for their sustainable lifestyle by integrating their electricity consumption data and reward them Saviours tokens based on their usage leading to ecofriendly lifestyle with financial benefits. Its win-win situation for both building owners who will save energy bills and renters for being awarded and charged fairly.

![Wallet](https://user-images.githubusercontent.com/77370233/172060776-01d62218-cc50-47e0-bf81-8b24215492e2.gif)

# How we built it :

We have developed Lifestyle.sol smart contract which uses Chainlink Any Api to query daily energy consumption data offchain and Chainlink Keepers to automate Saviours tokens daily based on their usage [Great < 10 kWh (100 tokens), Good 10-20 kWh (50 tokens), Bad > 20 kWh (10 tokens) ]. The smart contracts is deployed on Polygon and Near. We have Data Visualization dashboard along EPNS channel integration to monitor daily performance and get notified. We have developed subgraph hosted service on Graph to efficient store daily performance data and plan to develop Sustainability Credibility DID on chain using soulbound and subgraph. Our Dapp uses Figment RPC, Chainlink Wallet for onchain integration and stored assets in decentralized database using IPFS Web3 Storage

# Challenges we ran into :

It was challenging to develop a hybrid smart contract which has both Chainlink Any api and Keeper integration. Get Iot data and 3d visualization viewer took some time and efforts.

# Accomplishments that we're proud of :

First Waste2Lose incentive mechanism that will lead to big disruptive change in the way we live and help world be more sustainable one day at a time. We have multichain integration that allows one to claim tokens in their preferred chains

# What we learned :

Hybrid offchain-onchain contract with smart contract automation and Subgraph efficient event emits has a big potential. Developing a totally innovative incentive model Waste2Lose and gamification.

#What's next for Earth Saviors :

We would like to add more chains integration and a world viewer to compare buildings performance and have leadership dashboard with social chat feature to bring together like minded people who cares about sustainability. AR feature to visualize building energy consumption would be cool.

# Built With
api
chainlink
coinbase
figment
material
multichain
near
node.js
polygon
react
solidity
ui

# Try it out :
GitHub Repo
<br/><a href='https://www.figma.com/proto/PNKmWhfOOrR33njhCYsTWp/Waste2Lose?node-id=315%3A1568&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=362%3A330'> Live Prototipe </a>
  Live demo : https://babivillanova.github.io/EarthSaviours/
