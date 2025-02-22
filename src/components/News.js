import React,{Component} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import './News.css';

export class News extends Component{
    static defaultProps={
        country:'in',
        pageSize:8,
        category:'general'
    }

    static propTypes={
       country:PropTypes.string,
       pageSize:PropTypes.number,
       category:PropTypes.string
    }
        

    // articles=[
    //     {
    //     "source": {
    //     "id": "wired",
    //     "name": "Wired"
    //     },
    //     "author": "Makena Kelly",
    //     "title": "Silicon Valley Hasn’t Embraced Trump. But It’s Wavering on Biden",
    //     "description": "Venture capitalists on both sides of the aisle suggest Silicon Valley is more anti-Biden than it is pro-Trump.",
    //     "url": "https://www.wired.com/story/silicon-valley-crypto-trump-biden-debate/",
    //     "urlToImage": "https://media.wired.com/photos/668d715c9004df7e67a59acd/191:100/w_1280,c_limit/Silicon-Valley-Trump-Biden-Politics.jpg",
    //     "publishedAt": "2024-07-11T09:30:00Z",
    //     "content": "The June fundraiser set off alarm bells suggesting that a new political movement needed to be accounted for, but little in the records of its organizers suggests deep fealty to MAGA doctrine. Palihap… [+3700 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Radek Zielinski",
    //     "title": "Mt. Gox to repay investors in Bitcoin",
    //     "description": "Mt. Gox, once the world’s leading Bitcoin (BTC) exchange, is set to begin repaying investors using Bitcoin and Bitcoin Cash (BCH).… Continue reading Mt. Gox to repay investors in Bitcoin\nThe post Mt. Gox to repay investors in Bitcoin appeared first on ReadWri…",
    //     "url": "https://readwrite.com/mt-gox-to-repay-investors-in-bitcoin/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/97b8c89d-4828-4803-b037-04d74e631a19.webp",
    //     "publishedAt": "2024-07-08T16:29:11Z",
    //     "content": "Mt. Gox, once the world’s leading Bitcoin (BTC) exchange, is set to begin repaying investors using Bitcoin and Bitcoin Cash (BCH).\r\nThe repayment was announced on July 5 over a decade after Mt. Gox’s… [+2101 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Radek Zielinski",
    //     "title": "Mt Gox Begins Creditor Repayments in Bitcoin and Bitcoin Cash",
    //     "description": "The rehabilitation trustee of Mt. Gox, the defunct cryptocurrency exchange, announced on Friday that it has initiated repayments to some… Continue reading Mt Gox Begins Creditor Repayments in Bitcoin and Bitcoin Cash\nThe post Mt Gox Begins Creditor Repayments…",
    //     "url": "https://readwrite.com/mt-gox-begins-creditor-repayments-in-bitcoin-and-bitcoin-cash/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/f7241310-8110-4543-8b45-18d74cf08d80.webp",
    //     "publishedAt": "2024-07-05T11:01:57Z",
    //     "content": "The rehabilitation trustee of Mt. Gox, the defunct cryptocurrency exchange, announced on Friday that it has initiated repayments to some creditors in Bitcoin (BTC) and Bitcoin Cash (BCH). These repay… [+2235 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Radek Zielinski",
    //     "title": "Bitcoin slumps below $59,000 amid market uncertainty",
    //     "description": "Bitcoin’s (BTC) value dropped below $59,000 on Thursday, trading at $58,827. Market data shows that Bitcoin has fallen 3.38% in… Continue reading Bitcoin slumps below $59,000 amid market uncertainty\nThe post Bitcoin slumps below $59,000 amid market uncertaint…",
    //     "url": "https://readwrite.com/bitcoin-slumps-below-59000-amid-market-uncertainty/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/ac64595c-37b6-452e-a1b5-541f05c92c0a.webp",
    //     "publishedAt": "2024-07-04T12:50:07Z",
    //     "content": "Bitcoin’s (BTC) value dropped below $59,000 on Thursday, trading at $58,827.\r\nMarket data shows that Bitcoin has fallen 3.38% in the past day, reaching its lowest point since early May despite expect… [+1999 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Radek Zielinski",
    //     "title": "German government continues Bitcoin transfers to exchanges",
    //     "description": "On Tuesday (July 9), the German government transferred $339.2 million worth of Bitcoin (BTC) to various centralized crypto exchanges and… Continue reading German government continues Bitcoin transfers to exchanges\nThe post German government continues Bitcoin …",
    //     "url": "https://readwrite.com/german-government-continues-bitcoin-transfers-to-exchanges/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/7bb172ea-9e63-4949-8eb9-bf3760dbda31.webp",
    //     "publishedAt": "2024-07-10T10:50:02Z",
    //     "content": "On Tuesday (July 9), the German government transferred $339.2 million worth of Bitcoin (BTC) to various centralized crypto exchanges and market makers, following significant transfers the previous da… [+1883 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Radek Zielinski",
    //     "title": "Bitcoin 2024 announces Donald Trump as speaker",
    //     "description": "The upcoming Bitcoin 2024 conference in Nashville, Tennessee, has added former U.S. President Donald Trump to its roster of speakers.… Continue reading Bitcoin 2024 announces Donald Trump as speaker\nThe post Bitcoin 2024 announces Donald Trump as speaker appe…",
    //     "url": "https://readwrite.com/bitcoin-2024-announces-donald-trump-as-speaker/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/b5c05c2f-24d0-46fb-bbc1-9f7f96fe7e38.webp",
    //     "publishedAt": "2024-07-11T16:19:23Z",
    //     "content": "The upcoming Bitcoin 2024 conference in Nashville, Tennessee, has added former U.S. President Donald Trump to its roster of speakers.\r\nScheduled for July 25-27, this event is among the largest global… [+1535 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Radek Zielinski",
    //     "title": "Bitcoin transaction cost hits four-year low",
    //     "description": "On July 7, the average cost per Bitcoin (BTC) transaction fell to its lowest level in four years, reaching $38.69,… Continue reading Bitcoin transaction cost hits four-year low\nThe post Bitcoin transaction cost hits four-year low appeared first on ReadWrite.",
    //     "url": "https://readwrite.com/bitcoin-transaction-cost-hits-four-year-low/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/c60cdffa-11df-4958-9ab7-799e5704104f.webp",
    //     "publishedAt": "2024-07-10T11:21:16Z",
    //     "content": "On July 7, the average cost per Bitcoin (BTC) transaction fell to its lowest level in four years, reaching $38.69, according to Blockchain.com.\r\nThis figure was last seen during the peak of the COVID… [+2079 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Radek Zielinski",
    //     "title": "VanEck Set to Launch Spot Bitcoin ETF on Australia’s ASX",
    //     "description": "Prominent investment management firm VanEck announced that it is about to list Australia’s first spot Bitcoin (BTC) exchange-traded fund (ETF)… Continue reading VanEck Set to Launch Spot Bitcoin ETF on Australia’s ASX\nThe post VanEck Set to Launch Spot Bitcoi…",
    //     "url": "https://readwrite.com/vaneck-set-to-launch-spot-bitcoin-etf-on-australias-asx/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/ea85a934-c8fc-4d65-9279-ff85bb79fbae.webp",
    //     "publishedAt": "2024-06-17T15:43:51Z",
    //     "content": "Prominent investment management firm VanEck announced that it is about to list\r\n Australia’s first spot Bitcoin (BTC) exchange-traded fund (ETF) listed on the domestic Australian Securities Exchange … [+1968 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Ali Rees",
    //     "title": "Japanese investment firm Metaplanet to sell $6m of bonds to buy Bitcoin",
    //     "description": "Japanese investment firm Metaplanet is planning to sell one billion yen in bonds to buy Bitcoin, as part of its… Continue reading Japanese investment firm Metaplanet to sell $6m of bonds to buy Bitcoin\nThe post Japanese investment firm Metaplanet to sell $6m …",
    //     "url": "https://readwrite.com/investment-firm-metaplanet-to-sell-bonds-to-buy-bitcoin/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/buying-bitcoin-EOjGRyFSSt2kLr3TzvPf4A-yRhAHjLMRUO9G2dq9yUp4g.jpeg",
    //     "publishedAt": "2024-06-24T13:47:08Z",
    //     "content": "Japanese investment firm Metaplanet is planning to sell one billion yen in bonds to buy Bitcoin, as part of its long-term strategy.\r\nThe move, which was approved by the company’s board of directors t… [+1764 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Radek Zielinski",
    //     "title": "Winklevoss twins donate $1M in Bitcoin to Trump’s campaign",
    //     "description": "Gemini CEO Tyler Winklevoss and his twin brother Cameron donated $1 million worth of Bitcoin (BTC) each to Donald Trump’s… Continue reading Winklevoss twins donate $1M in Bitcoin to Trump’s campaign\nThe post Winklevoss twins donate $1M in Bitcoin to Trump’s c…",
    //     "url": "https://readwrite.com/winklevoss-twins-donate-1m-in-bitcoin-to-trumps-campaign/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/GQij8RdakAU8Vor-min-scaled.jpeg",
    //     "publishedAt": "2024-06-21T16:32:19Z",
    //     "content": "Gemini CEO Tyler Winklevoss and his twin brother Cameron donated $1 million worth of Bitcoin (BTC) each to Donald Trump’s 2024 presidential campaign.\r\nThe presumptive Republican nominee’s campaign re… [+3507 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Olaleye Komolafe",
    //     "title": "Bitcoin and Ethereum Traders Flee Short-Term Bearish Trends, Rotating Funds To Alternative Cryptocurrencies",
    //     "description": "TLDR   Bitcoin (BTC) bears expect a prolonged negative trend for the leading cryptocurrency. Market experts believe Ethereum (ETH) could dip… Continue reading Bitcoin and Ethereum Traders Flee Short-Term Bearish Trends, Rotating Funds To Alternative Cryptocur…",
    //     "url": "https://readwrite.com/bitcoin-and-ethereum-traders-flee-short-term-bearish-trends-rotating-funds-to-alternative-cryptocurrencies/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/Featured-Image-for-Rebel-Satoshi.jpg",
    //     "publishedAt": "2024-06-20T03:37:47Z",
    //     "content": "TLDR  \r\n<ul><li>Bitcoin (BTC) bears expect a prolonged negative trend for the leading cryptocurrency.</li><li>Market experts believe Ethereum (ETH) could dip below the $2,900 price mark.</li><li>Rebe… [+3670 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Alvin Hemedez",
    //     "title": "Why Should You Invest in This Learn-to-Earn Bitcoin Alternative? – Cilinix Crypto Presale Update",
    //     "description": "While Bitcoin is still struggling to reach the $70,000 level, retail investors are flocking to this Learn-to-Earn crypto presale, boosting… Continue reading Why Should You Invest in This Learn-to-Earn Bitcoin Alternative? – Cilinix Crypto Presale Update\nThe p…",
    //     "url": "https://readwrite.com/why-should-you-invest-in-this-learn-to-earn-bitcoin-alternative-cilinix-crypto-presale-update/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/cilinix-crypto-99btc-presale-update.jpg",
    //     "publishedAt": "2024-06-15T15:43:59Z",
    //     "content": "While Bitcoin is still struggling to reach the $70,000 level, retail investors are flocking to this Learn-to-Earn crypto presale, boosting it to $2 million.\r\nThe new 99Bitcoins (99BTC) token is perfo… [+4730 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Radek Zielinski",
    //     "title": "Louisiana passes pro-Bitcoin, anti-CBDC crypto bill",
    //     "description": "On June 19, Louisiana quietly enacted House Bill 488, a crypto bill known as the “Blockchain Basics Act” or “Bitcoin… Continue reading Louisiana passes pro-Bitcoin, anti-CBDC crypto bill\nThe post Louisiana passes pro-Bitcoin, anti-CBDC crypto bill appeared fi…",
    //     "url": "https://readwrite.com/louisiana-passes-pro-bitcoin-anti-cbdc-crypto-bill/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/6f67013b-b8ea-44cb-a656-b32460a85347.webp",
    //     "publishedAt": "2024-06-26T13:29:43Z",
    //     "content": "On June 19, Louisiana quietly enacted House Bill 488, a crypto bill known as the “Blockchain Basics Act” or “Bitcoin Rights” bill.\r\nThe legislation, set to take effect on August 1, 2024, marks a sign… [+2341 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Radek Zielinski",
    //     "title": "Bitcoin ETF outflows reach $1.3B as price falls",
    //     "description": "Over the past two weeks, United States spot Bitcoin (BTC) exchange-traded funds (ETFs) have experienced outflows totaling $1.3 billion as… Continue reading Bitcoin ETF outflows reach $1.3B as price falls\nThe post Bitcoin ETF outflows reach $1.3B as price fall…",
    //     "url": "https://readwrite.com/bitcoin-etf-outflows-reach-1-3b-as-price-falls/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/304c4991-be59-40e6-8e3c-bed299286dbc.webp",
    //     "publishedAt": "2024-06-25T16:32:14Z",
    //     "content": "Over the past two weeks, United States spot Bitcoin (BTC) exchange-traded funds (ETFs) have experienced outflows totaling $1.3 billion as Bitcoin’s price continues to fall.\r\nFarside Investors reports… [+2047 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "Slashdot.org"
    //     },
    //     "author": "EditorDavid",
    //     "title": "$170 Billion Selloff in Cryptocurrencies Friday as Mt. Gox Payout Looms",
    //     "description": "At one point on Friday the entire cryptocurrency market shed more than $170 billion in capitalization within 24 hours, CNBC reported (citing data from CoinGecko). \n\n\"Cryptocurrencies plunged... as investors focused on the payout of nearly $9 billion to users …",
    //     "url": "https://slashdot.org/story/24/07/07/1546226/170-billion-selloff-in-cryptocurrencies-friday-as-mt-gox-payout-looms",
    //     "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
    //     "publishedAt": "2024-07-07T16:34:00Z",
    //     "content": "At one point on Friday the entire cryptocurrency market shed more than $170 billion in capitalization within 24 hours, CNBC reported (citing data from CoinGecko).\"Cryptocurrencies plunged... as inves… [+1630 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Radek Zielinski",
    //     "title": "Cryptocurrency market tumbles: $665M liquidated as Bitcoin falls",
    //     "description": "The crypto market experienced a significant downturn in the past 24 hours, with over $665 million in liquidations according to… Continue reading Cryptocurrency market tumbles: $665M liquidated as Bitcoin falls\nThe post Cryptocurrency market tumbles: $665M liq…",
    //     "url": "https://readwrite.com/cryptocurrency-market-tumbles-665m-liquidated-as-bitcoin-falls/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/6f6012c4-52ea-40f3-be2e-519a78109378.webp",
    //     "publishedAt": "2024-07-05T10:49:55Z",
    //     "content": "The crypto market experienced a significant downturn in the past 24 hours, with over $665 million in liquidations according to CoinGlass data.\r\nCoinMarketCap data shows that world’s top cryptocurrenc… [+2276 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "Slashdot.org"
    //     },
    //     "author": "BeauHD",
    //     "title": "Julian Assange Received $500,000 Bitcoin Donation To Cover Travel Costs",
    //     "description": "Earlier this week, WikiLeaks co-founder Julian Assange received a donation of 8.07 bitcoin (worth roughly $500,000) from an anonymous bitcoin whale, \"helping to cover the cost of a private jet that flew him out of the U.K. and ultimately to freedom in Austral…",
    //     "url": "https://slashdot.org/story/24/06/27/209220/julian-assange-received-500000-bitcoin-donation-to-cover-travel-costs",
    //     "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
    //     "publishedAt": "2024-06-27T21:30:00Z",
    //     "content": "Initially, Assange's wife Stella made an \"emergency appeal\" to raise 520,000 British pounds to pay for the transport, setting up a crowdfunding page that allowed people to donate in fiat currency via… [+922 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Radek Zielinski",
    //     "title": "Bitcoin plunge below $63k triggers wave of liquidations",
    //     "description": "The cryptocurrency market faced significant turbulence as Bitcoin’s (BTC) value fell below $63,000, leading to a surge in long position… Continue reading Bitcoin plunge below $63k triggers wave of liquidations\nThe post Bitcoin plunge below $63k triggers wave …",
    //     "url": "https://readwrite.com/bitcoin-plunge-below-63k-triggers-wave-of-liquidations/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/65e6f8d5-ef84-4b5c-84b6-e3ac21cedb77.webp",
    //     "publishedAt": "2024-06-24T16:38:30Z",
    //     "content": "The cryptocurrency market faced significant turbulence as Bitcoin’s (BTC) value fell below $63,000, leading to a surge in long position liquidations.\r\nCoinGlass data shows\r\n that over the past 24 hou… [+2379 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": "wired",
    //     "name": "Wired"
    //     },
    //     "author": "Andrew Couts",
    //     "title": "Spyware Users Exposed in Major Data Breach",
    //     "description": "Plus: The Heritage Foundation gets hacked over Project 2025, a car dealership software provider seems to have paid $25 million to a ransomware gang, and authorities disrupt a Russian bot farm.",
    //     "url": "https://www.wired.com/story/spyware-users-exposed-data-breach/",
    //     "urlToImage": "https://media.wired.com/photos/66914f232ce801f2e4f0d1e3/191:100/w_1280,c_limit/Spyware-Data-Breach-Roundup-Security-GettyImages-2001010887.jpg",
    //     "publishedAt": "2024-07-13T10:30:00Z",
    //     "content": "But thats not all. Each week, we round up the security news we didnt cover in depth ourselves. Click on the headlines to read the full stories. And stay safe out there.\r\nFor the third time since 2010… [+3741 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "Yahoo Entertainment"
    //     },
    //     "author": "Yashwardhan Jain",
    //     "title": "Is a $500K Bitcoin Rally Possible? Crypto ETFs to Consider",
    //     "description": "Is it time to consider Bitcoin ETFs with optimistic price forecasts for the cryptocurrency on the horizon? Look into ETFs to capitalize on the positive...",
    //     "url": "https://finance.yahoo.com/news/500k-bitcoin-rally-possible-crypto-211400691.html",
    //     "urlToImage": "https://media.zenfs.com/en/zacks.com/2677d4ba68204c51d83bcea4db6ae8b8",
    //     "publishedAt": "2024-07-02T21:14:00Z",
    //     "content": "Ever since getting the approval for spot ETFs in early January, Bitcoin has been a little volatile, a trend that may worry some investors. The cryptocurrency surged 70% following the approval, experi… [+3856 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Owen Good",
    //     "title": "Trump pledges more cryptocurrency support, putting distance between himself and Biden",
    //     "description": "Donald Trump is doubling down on cryptocurrency support, saying he wants all Bitcoin going forward to be mined in the… Continue reading Trump pledges more cryptocurrency support, putting distance between himself and Biden\nThe post Trump pledges more cryptocur…",
    //     "url": "https://readwrite.com/trump-pledges-more-cryptocurrency-support-putting-distance-between-himself-and-biden/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/5gPabAcZQ829oWArrj6otg.jpg",
    //     "publishedAt": "2024-06-12T21:56:40Z",
    //     "content": "Donald Trump is doubling down on cryptocurrency support, saying he wants all Bitcoin going forward to be mined in the United States.\r\nIn an all-caps rant posted to Trumps Truth Social platform, the R… [+961 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Radek Zielinski",
    //     "title": "Tether launches USDT for Filipino social security contributions",
    //     "description": "Tether (USDT) has launched a new payment option in the Philippines, enabling citizens to pay their Social Security System (SSS)… Continue reading Tether launches USDT for Filipino social security contributions\nThe post Tether launches USDT for Filipino social…",
    //     "url": "https://readwrite.com/tether-launches-usdt-for-filipino-social-security-contributions/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/046560f0-c2ba-4d37-b34f-14009a2779cb.webp",
    //     "publishedAt": "2024-07-02T18:24:17Z",
    //     "content": "Tether (USDT) has launched a new payment option in the Philippines, enabling citizens to pay their Social Security System (SSS) contributions using USDT, Tether’s stablecoin.\r\nThe SSS, a state-run so… [+2184 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "Fort Worth Star-Telegram"
    //     },
    //     "author": "Jaida Joyner",
    //     "title": "Elderly Texas woman withdrew $40K from bank for Bitcoin scam. Citizen, police intervened",
    //     "description": "A concerned bystander saw the woman depositing large amounts of money into a Bitcoin ATM. Here’s what the scammer did.",
    //     "url": "https://www.star-telegram.com/news/local/crime/article289280835.html",
    //     "urlToImage": "https://media.zenfs.com/en/fort_worth_star_telegram_mcclatchy_952/5c230a028d640b6d1938bc3cc8478e85",
    //     "publishedAt": "2024-06-14T18:50:11Z",
    //     "content": "A sharp-eyed citizens quick thinking saved an elderly North Texas woman from losing thousands of dollars in a Bitcoin scam, according to police.\r\nOfficers in White Settlement received a call from a c… [+1789 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "James Spillane",
    //     "title": "Did Altcoin Hunters Miss Meme Coin Season? KAI Cat Says Not Even Close.",
    //     "description": "Meme coins were absolutely soaring earlier this year, but are down in the dumps in June. Altcoins like Shiba Inu,… Continue reading Did Altcoin Hunters Miss Meme Coin Season? KAI Cat Says Not Even Close.\nThe post Did Altcoin Hunters Miss Meme Coin Season? KAI…",
    //     "url": "https://readwrite.com/did-altcoin-hunters-miss-meme-coin-season-kai-cat-says-not-even-close/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/KAI-Cat-Says-Not-Even-Close.jpg",
    //     "publishedAt": "2024-06-17T03:24:24Z",
    //     "content": "Meme coins were absolutely soaring earlier this year, but are down in the dumps in June. Altcoins like Shiba Inu, Dogwifhat, Bonk, Pepe, and PopCat were on top of the cryptocurrency leaderboards for … [+3105 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "Yahoo Entertainment"
    //     },
    //     "author": null,
    //     "title": "U.S. and German Government's Bitcoin Movements Raise Market Concerns",
    //     "description": null,
    //     "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_3b5ecbd9-e9a7-42c4-a0b8-6f74e1a0116a",
    //     "urlToImage": null,
    //     "publishedAt": "2024-07-02T04:57:10Z",
    //     "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "Yahoo Entertainment"
    //     },
    //     "author": null,
    //     "title": "MicroStrategy raises its bond sale to buy even more bitcoin",
    //     "description": null,
    //     "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_de419e95-ff2a-4ff9-98d8-6a6c716414a1",
    //     "urlToImage": null,
    //     "publishedAt": "2024-06-14T19:47:21Z",
    //     "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Alvin Hemedez",
    //     "title": "Could This New AI Meme Coin Lead the Market Rebound When It Launches?",
    //     "description": "Despite all the challenges and negative news about crypto, investors remain optimistic about some altcoins that may lead a market… Continue reading Could This New AI Meme Coin Lead the Market Rebound When It Launches?\nThe post Could This New AI Meme Coin Lead…",
    //     "url": "https://readwrite.com/could-this-new-meme-coin-lead-the-market-rebound-when-it-launches/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/could-wiener-ai-lead-the-major-market-rebound.jpg",
    //     "publishedAt": "2024-07-13T08:34:48Z",
    //     "content": "Despite all the challenges and negative news about crypto, investors remain optimistic about some altcoins that may lead a market recovery.\r\nRecently, investor confidence plummeted due to reports of … [+5613 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Alvin Hemedez",
    //     "title": "Top Learn-to-Earn Token Presale Now Raises $2.3 Million – Next Big Thing in Crypto?",
    //     "description": "As Telegram’s Play-to-Earn games gain popularity, the altcoin 99Bitcoins aims to flip the trend with its Learn-to-Earn narrative, leading to… Continue reading Top Learn-to-Earn Token Presale Now Raises $2.3 Million – Next Big Thing in Crypto?\nThe post Top Lea…",
    //     "url": "https://readwrite.com/top-learn-to-earn-token-presale-now-raises-2-3-million-next-big-thing-in-crypto/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/99btc-presale-now-raises-2.3-million.jpg",
    //     "publishedAt": "2024-07-07T10:03:26Z",
    //     "content": "As Telegram’s Play-to-Earn games gain popularity, the altcoin 99Bitcoins aims to flip the trend with its Learn-to-Earn narrative, leading to strong presale demand.\r\n99Bitcoins, a well-known platform … [+4177 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "Yahoo Entertainment"
    //     },
    //     "author": null,
    //     "title": "Bitcoin Drops as German Government Unloads Over $900M Worth of BTC",
    //     "description": null,
    //     "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_e26e3043-5b10-4cc8-bf5a-9c294a26865b",
    //     "urlToImage": null,
    //     "publishedAt": "2024-07-08T15:13:12Z",
    //     "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Alvin Hemedez",
    //     "title": "Solana ETF Applications Show Huge Potential for Low-Cap Crypto Like This New P2E Meme Coin",
    //     "description": "If some experts believe that Solana ETF applications could impact Solana’s price, then it might also positively influence altcoins. When… Continue reading Solana ETF Applications Show Huge Potential for Low-Cap Crypto Like This New P2E Meme Coin\nThe post Sola…",
    //     "url": "https://readwrite.com/solana-etf-applications-show-huge-potential-for-low-cap-crypto-like-this-new-p2e-meme-coin/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/solana-etf-applications-impact-on-this-play-to-earn-meme-coin-1.jpg",
    //     "publishedAt": "2024-06-29T09:54:25Z",
    //     "content": "If some experts believe that Solana ETF applications could impact Solana’s price, then it might also positively influence altcoins.\r\nWhen a major cryptocurrency like Solana performs well, it often bo… [+4340 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Radek Zielinski",
    //     "title": "Elon Musk DeepFakes peddle crypto scams on YouTube",
    //     "description": "A five-hour YouTube Live broadcast featuring a deepfake of Elon Musk promoted a cryptocurrency scam today, continuing a recent trend… Continue reading Elon Musk DeepFakes peddle crypto scams on YouTube\nThe post Elon Musk DeepFakes peddle crypto scams on YouTu…",
    //     "url": "https://readwrite.com/elon-musk-deepfakes-peddle-crypto-scams-on-youtube/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/424075a0-319a-11ef-beed-a2f4c78a60bf.webp",
    //     "publishedAt": "2024-06-24T16:37:09Z",
    //     "content": "A five-hour YouTube Live broadcast featuring a deepfake of Elon Musk promoted a cryptocurrency scam today, continuing a recent trend of similar fraudulent streams.\r\nAccording to a June 23 Engadget re… [+1792 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Owen Good",
    //     "title": "Brazil’s biggest bank opens investment app to crypto trades",
    //     "description": "Brazil’s largest bank has opened up cryptocurrency trading to all users of its investment platform, allowing them to sell Bitcoin… Continue reading Brazil’s biggest bank opens investment app to crypto trades\nThe post Brazil’s biggest bank opens investment app…",
    //     "url": "https://readwrite.com/brazil-cryptocurrency-crypto-trading-app/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/brazilCryopto.jpg",
    //     "publishedAt": "2024-06-12T19:16:39Z",
    //     "content": "Brazils largest bank has opened up cryptocurrency trading to all users of its investment platform, allowing them to sell Bitcoin and Ethereum directly.\r\nGuto Antunes, the chief executive of Itau Unib… [+924 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Alvin Hemedez",
    //     "title": "3 Best Crypto Presales to Invest in Today – Altcoin Gems with 100x Potential for 2024",
    //     "description": "Established cryptos such as Bitcoin, Ethereum, and BNB are seeing ongoing declines, leading crypto investors to turn to altcoins in… Continue reading 3 Best Crypto Presales to Invest in Today – Altcoin Gems with 100x Potential for 2024\nThe post 3 Best Crypto …",
    //     "url": "https://readwrite.com/3-best-crypto-presales-to-invest-in-today-altcoin-gems-with-100x-potential-for-2024/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/3-crypto-presale-with-100x-potential.jpg",
    //     "publishedAt": "2024-06-29T13:48:26Z",
    //     "content": "Established cryptos such as Bitcoin, Ethereum, and BNB are seeing ongoing declines, leading crypto investors to turn to altcoins in search of potential large gains despite these losses.\r\nThis article… [+6548 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Alvin Hemedez",
    //     "title": "VanEck SOL ETF Filing – Expert Predicts Solana Price’s Next Move",
    //     "description": "The crypto market saw major developments today that could signal a significant shift for the industry. VanEck has filed for… Continue reading VanEck SOL ETF Filing – Expert Predicts Solana Price’s Next Move\nThe post VanEck SOL ETF Filing – Expert Predicts Sol…",
    //     "url": "https://readwrite.com/vaneck-sol-etf-filing-expert-predicts-solana-prices-next-move/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/vaneck-sol-etf-filing-expert-predicts-solana-prices-next-move.jpg",
    //     "publishedAt": "2024-06-28T21:19:15Z",
    //     "content": "The crypto market saw major developments today that could signal a significant shift for the industry. VanEck has filed for the first Solana Exchange Traded Fund (ETF) in the United States.\r\nThis new… [+7118 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "Yahoo Entertainment"
    //     },
    //     "author": null,
    //     "title": "Bitcoin Mining Sector Is Attracting Growing Investor Interest Following Core Scientific Deal: JPMorgan",
    //     "description": null,
    //     "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_94295bc8-374f-4f31-9652-24ebea6877a8",
    //     "urlToImage": null,
    //     "publishedAt": "2024-06-24T10:42:43Z",
    //     "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Radek Zielinski",
    //     "title": "US Presidential debate impacts political memecoin market",
    //     "description": "As President Joe Biden and former President Donald Trump engaged in a historic televised debate, politically-themed memecoins experienced price fluctuations.… Continue reading US Presidential debate impacts political memecoin market\nThe post US Presidential d…",
    //     "url": "https://readwrite.com/us-presidential-debate-impacts-political-memecoin-market/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/c03702d8-0520-488c-9963-e45e14df2e89.webp",
    //     "publishedAt": "2024-06-28T15:57:05Z",
    //     "content": "As President Joe Biden and former President Donald Trump engaged in a historic televised debate, politically-themed memecoins experienced price fluctuations.\r\nThe market for these tokens, now valued … [+2267 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": "business-insider",
    //     "name": "Business Insider"
    //     },
    //     "author": "mfox@businessinsider.com (Matthew Fox)",
    //     "title": "Stock market today: Indexes test record highs as dovish jobs report sends bond yields lower",
    //     "description": "The June jobs \"should have Fed officials troubled that the desired cooling in the economy could transition into a frigid summer,\" LPL said.",
    //     "url": "https://markets.businessinsider.com/news/stocks/stock-market-today-dovish-june-jobs-report-bond-yields-decline-2024-7",
    //     "urlToImage": "https://i.insider.com/6687f1d71f0c1cd6d731bbbf?width=1200&format=jpeg",
    //     "publishedAt": "2024-07-05T13:39:38Z",
    //     "content": "US stocks tested record highs on Friday after the June jobs report sent bond yields lower.\r\nThe US economy added 206,000 jobs in June, which was slightly ahead of economist estimates of 200,000, but … [+1533 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "Slashdot.org"
    //     },
    //     "author": "BeauHD",
    //     "title": "New York Recovers $50 Million For Defrauded Gemini Earn Crypto Investors",
    //     "description": "An anonymous reader quotes a report from Reuters: New York Attorney General Letitia James has recovered $50 million from the cryptocurrency platform Gemini Trust to repay investors defrauded in its Gemini Earn program, she said on Friday. Gemini, run by billi…",
    //     "url": "https://slashdot.org/story/24/06/14/212206/new-york-recovers-50-million-for-defrauded-gemini-earn-crypto-investors",
    //     "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
    //     "publishedAt": "2024-06-14T22:00:00Z",
    //     "content": "New York Attorney General Letitia James has recovered $50 million from the cryptocurrency platform Gemini Trust to repay investors defrauded in its Gemini Earn program, she said on Friday. Gemini, ru… [+974 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "9to5Mac"
    //     },
    //     "author": "Ben Lovejoy",
    //     "title": "After FTX, Mt Gox customers will also get bitcoin back, in bittersweet news",
    //     "description": "Mt Gox customers will finally get some bitcoin back, a full decade after a large-scale theft led to the company announcing that it had almost no crypto left and filing for bankruptcy …\n\n\n\n more…",
    //     "url": "https://9to5mac.com/2024/07/05/mt-gox-customers-get-bitcoin-back/",
    //     "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/07/Mt-Gox-customers-will-get-bitcoin-back.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    //     "publishedAt": "2024-07-05T11:04:00Z",
    //     "content": "Mt Gox customers will finally get some bitcoin back, a full decade after a large-scale theft led to the company announcing that it had almost no crypto left and filing for bankruptcy …\r\nTokyo-based c… [+1755 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Michael Graw",
    //     "title": "BlockDAG Review ⭐⭐⭐⭐: Five Explosive Questions Transforming Crypto Mining",
    //     "description": "As the crypto world shifts towards greener solutions, BlockDAG is transforming the landscape of cryptocurrency mining with its forward-thinking and… Continue reading BlockDAG Review ⭐⭐⭐⭐: Five Explosive Questions Transforming Crypto Mining\nThe post BlockDAG R…",
    //     "url": "https://readwrite.com/blockdag-review-five-explosive-questions-transforming-crypto-mining/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/image1.png",
    //     "publishedAt": "2024-07-12T15:32:34Z",
    //     "content": "As the crypto world shifts towards greener solutions, BlockDAG is transforming the landscape of cryptocurrency mining with its forward-thinking and environmentally conscious approach. Offering early … [+4898 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": "business-insider",
    //     "name": "Business Insider"
    //     },
    //     "author": "mfox@businessinsider.com (Matthew Fox)",
    //     "title": "Stock market today: US stocks edge lower as AI-fueled tech rally stalls",
    //     "description": "Shares of Nvidia were down an additional 2% in early Friday trades, while Dell, Broadcom, and Super Micro Computer were down between 1% and 2%.",
    //     "url": "https://markets.businessinsider.com/news/stocks/stock-market-today-ai-fueled-tech-rally-stalls-nvidia-tops-2024-6",
    //     "urlToImage": "https://i.insider.com/66757c7c886e840164beb2f9?width=1200&format=jpeg",
    //     "publishedAt": "2024-06-21T13:35:45Z",
    //     "content": "US stocks moved slightly lower on Friday following a sharp reversal in tech stocks on Thursday.\r\nThe AI-fueled tech rally showed signs of exhaustion, with the stalwart Nvidia experiencing a near 7% s… [+1509 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "Anthropoce"
    //     },
    //     "author": "Sarah DeWeerdt",
    //     "title": "Cryptocurrency mining harms human health as much as traditional mining – study",
    //     "description": "The social costs of mining cryptocurrency will outstrip the value of the coins well before mining them becomes unprofitable, a new study suggests.",
    //     "url": "https://www.anthropocenemagazine.org/2019/11/the-increasing-toll-of-cryptocurrency-mining-on-climate-and-human-lives/",
    //     "urlToImage": "https://www.anthropocenemagazine.org/wp-content/uploads/2019/11/Unknown-1.jpeg",
    //     "publishedAt": "2024-07-10T22:59:02Z",
    //     "content": "Production of cryptocurrency units like Bitcoins is often referred to as mining. This is a metaphor: the coins are actually secured via computers solving algorithms. But this process has real-world i… [+3986 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Alvin Hemedez",
    //     "title": "Maximize Gains with This New Learn-to-Earn BRC-20 Crypto Presale",
    //     "description": "99Bitcoins, or $99BTC, is a new Learn-to-Earn project that allows users to acquire cryptocurrency by completing educational modules. With the… Continue reading Maximize Gains with This New Learn-to-Earn BRC-20 Crypto Presale \nThe post Maximize Gains with This…",
    //     "url": "https://readwrite.com/maximize-gains-with-this-new-learn-to-earn-brc-20-crypto-presale/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/maximize-gains-with-this-new-learn-to-earn-brc-20-crypto-presale-.jpg",
    //     "publishedAt": "2024-06-18T20:53:38Z",
    //     "content": "99Bitcoins, or $99BTC, is a new Learn-to-Earn project that allows users to acquire cryptocurrency by completing educational modules.\r\nWith the presale exceeding $2.2 million, early adopters might ben… [+4390 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Alvin Hemedez",
    //     "title": "New Coin Listing – Sealana Crypto Presale Hits $5 Million, 24 Hours Left",
    //     "description": "Investors have only 24 hours left to buy $SEAL at a low price and seize the chance to profit from… Continue reading New Coin Listing – Sealana Crypto Presale Hits $5 Million, 24 Hours Left\nThe post New Coin Listing – Sealana Crypto Presale Hits $5 Million, 24…",
    //     "url": "https://readwrite.com/new-coin-listing-sealana-crypto-presale-hits-5-million-24-hours-left/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/new-listing-coin.jpg",
    //     "publishedAt": "2024-06-24T18:10:27Z",
    //     "content": "Investors have only 24 hours left to buy $SEAL at a low price and seize the chance to profit from the hottest crypto presale of 2024.\r\nAfter the ICO, Sealana (SEAL) will be listed on exchanges, and i… [+4107 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Alvin Hemedez",
    //     "title": "Is It a Good Time to Sell or Hold $SHIB? New P2E Meme Coin Presale Raises Over $5 Million",
    //     "description": "One of the leading meme coins, Shiba Inu, now faces a continuous price dip, sparking discussions in the market about… Continue reading Is It a Good Time to Sell or Hold $SHIB? New P2E Meme Coin Presale Raises Over $5 Million\nThe post Is It a Good Time to Sell…",
    //     "url": "https://readwrite.com/is-it-a-good-time-to-sell-or-hold-shib-new-p2e-meme-coin-presale-raises-over-5-million/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/shib-price-prediction.jpg",
    //     "publishedAt": "2024-06-27T09:14:52Z",
    //     "content": "One of the leading meme coins, Shiba Inu, now faces a continuous price dip, sparking discussions in the market about whether investors should sell or hold.\r\nShiba Inu (SHIB) is experiencing the worst… [+4299 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "Slashdot.org"
    //     },
    //     "author": "BeauHD",
    //     "title": "$2.4 Million Texas Home Listing Boasts Built-In 5,786 sq ft Data Center",
    //     "description": "A Zillow listing for a $2.4 million house in a Dallas suburb is grabbing attention for its 5,786-square-foot data center with immersion cooling tanks, massive server racks, and two separate power grids. Tom's Hardware reports: With a brick exterior, cute pavi…",
    //     "url": "https://tech.slashdot.org/story/24/06/17/1937244/24-million-texas-home-listing-boasts-built-in-5786-sq-ft-data-center",
    //     "urlToImage": "https://a.fsdn.com/sd/topics/supercomputing_64.png",
    //     "publishedAt": "2024-06-17T22:40:00Z",
    //     "content": "With a brick exterior, cute paving, and mini-McMansion arch stylings, the building certainly looks to be a residential home for the archetypal Texas family. Prospective home-buyers will thus be disap… [+1434 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Alvin Hemedez",
    //     "title": "Possible Reasons for Crypto Market Drop Could Lead to a Bullish Breakout for This Token",
    //     "description": "The crypto market has experienced a significant drop in the past 24 to 48 hours, yet PlayDoge remains bullish as… Continue reading Possible Reasons for Crypto Market Drop Could Lead to a Bullish Breakout for This Token\nThe post Possible Reasons for Crypto Mar…",
    //     "url": "https://readwrite.com/possible-reasons-for-crypto-market-drop-could-lead-to-a-bullish-breakout-for-this-token/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/possible-reasons-for-crypto-market-drop-could-lead-to-a-bullish-breakout-for-this-token.jpg",
    //     "publishedAt": "2024-06-19T15:56:05Z",
    //     "content": "The crypto market has experienced a significant drop in the past 24 to 48 hours, yet PlayDoge remains bullish as investors rally to its presale, which has now reached nearly $5 million.\r\nThis article… [+3578 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Radek Zielinski",
    //     "title": "Republican party vows to end ‘crypto crackdown’",
    //     "description": "GOP organization Republican National Committee has unveiled a new platform that strongly supports crypto innovation, as revealed in a document released… Continue reading Republican party vows to end ‘crypto crackdown’\nThe post Republican party vows to end ‘cr…",
    //     "url": "https://readwrite.com/republicans-vows-to-end-crypto-crackdown/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/da463dbc-3419-4bc0-8551-94ebf1261f57.webp",
    //     "publishedAt": "2024-07-09T08:58:12Z",
    //     "content": "GOP organization Republican National Committee has unveiled a new platform that strongly supports crypto innovation, as revealed in a document released on Monday.\r\nThe document in question outlines t… [+1862 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": "business-insider",
    //     "name": "Business Insider"
    //     },
    //     "author": "Kelly Burch",
    //     "title": "I was scammed out of nearly $300,000 and was forced to abandon my retirement dreams",
    //     "description": "A 70-year-old man lost almost $300,000 — all of his savings — to a scam. He feels older people are more vulnerable to online scams than ever before.",
    //     "url": "https://www.businessinsider.com/scammed-all-savings-changed-retirement-plan-2024-7",
    //     "urlToImage": "https://i.insider.com/667dcdaa50b021b5caea2d4a?width=1200&format=jpeg",
    //     "publishedAt": "2024-07-08T13:21:58Z",
    //     "content": "Getty Images; Jenny Chang-Rodriguez/BI\r\nThis as-told-to essay is based on a conversation with Leonid Shteyn. It has been edited for length and clarity.Last year, I started looking for ways to make mo… [+4343 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Radek Zielinski",
    //     "title": "North Carolina Senate approves CBDC ban bill",
    //     "description": "On Wednesday (June 26), the North Carolina Senate passed a bill aimed at prohibiting central bank digital currencies (CBDCs) in… Continue reading North Carolina Senate approves CBDC ban bill\nThe post North Carolina Senate approves CBDC ban bill appeared first…",
    //     "url": "https://readwrite.com/north-carolina-senate-approves-cbdc-ban-bill/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/5934a5a9-e4d3-44e8-99db-649e9bceb331.webp",
    //     "publishedAt": "2024-06-27T14:44:13Z",
    //     "content": "On Wednesday (June 26), the North Carolina Senate passed a bill aimed at prohibiting central bank digital currencies (CBDCs) in the state. The legislation now awaits the Governor’s signature to becom… [+1673 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Radek Zielinski",
    //     "title": "US and German governments move $150M in crypto",
    //     "description": "Recent cryptocurrency transactions by the German and United States governments have caught the attention of the crypto community. Arkham Intelligence… Continue reading US and German governments move $150M in crypto\nThe post US and German governments move $150…",
    //     "url": "https://readwrite.com/us-and-german-governments-move-150m-in-crypto/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/6e88413d-8ec3-4d27-98ff-6729e8a77c5a.webp",
    //     "publishedAt": "2024-07-01T16:11:14Z",
    //     "content": "Recent cryptocurrency transactions by the German and United States governments have caught the attention of the crypto community.\r\nArkham Intelligence data shows that Germany has moved substantial am… [+1911 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "Yahoo Entertainment"
    //     },
    //     "author": "Hope C",
    //     "title": "Bitcoin’s Key Indicators Flash Bullish Signals, According to Trader",
    //     "description": "Popular trader Roman recently highlighted two classic technical indicators for BTC/USD, suggesting that Bitcoin (BTC) could be setting the stage for a...",
    //     "url": "https://finance.yahoo.com/news/bitcoin-key-indicators-flash-bullish-062132917.html",
    //     "urlToImage": "https://media.zenfs.com/en/coinmarketcap_783/7b85b6017b8299a38242d7fa828c52b1",
    //     "publishedAt": "2024-06-24T06:21:32Z",
    //     "content": "Bitcoins Key Indicators Flash Bullish Signals, According to Trader\r\nPopular trader Roman recently highlighted two classic technical indicators for BTC/USD, suggesting that Bitcoin (BTC) could be sett… [+1257 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Alvin Hemedez",
    //     "title": "Will This Trending Meme Coin Presale Achieve a 20x Increase at Launch?",
    //     "description": "The crypto market anticipates big gains in the coming weeks, with experts predicting that MoonBag, a new trending meme coin… Continue reading Will This Trending Meme Coin Presale Achieve a 20x Increase at Launch?\nThe post Will This Trending Meme Coin Presale …",
    //     "url": "https://readwrite.com/will-this-trending-meme-coin-presale-see-a-20x-surge-at-launch/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/trending-meme-coin-moonbag.jpg",
    //     "publishedAt": "2024-07-07T18:58:41Z",
    //     "content": "The crypto market anticipates big gains in the coming weeks, with experts predicting that MoonBag, a new trending meme coin presale, will offer high potential returns.\r\nAs major players like Bitcoin … [+4885 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Alvin Hemedez",
    //     "title": "Shiba Inu’s Whale Activity Signals Potential Price Recovery – Will the Newest Meme Coin SHIBASHOOT Follow SHIB’s Success?",
    //     "description": "Shiba Inu is currently striving to bounce back from the recent price drop, aiming to draw benefit from the recent… Continue reading Shiba Inu’s Whale Activity Signals Potential Price Recovery – Will the Newest Meme Coin SHIBASHOOT Follow SHIB’s Success?\nThe p…",
    //     "url": "https://readwrite.com/shiba-inus-whale-activity-signals-potential-price-recovery-will-the-newest-meme-coin-shibashoot-follow-shibs-success/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/shiba-inu-price-recovery-and-shiba-shootout-presale-update.jpg",
    //     "publishedAt": "2024-07-11T15:34:38Z",
    //     "content": "Shiba Inu is currently striving to bounce back from the recent price drop, aiming to draw benefit from the recent 4.29 trillion SHIB whale volume spike.\r\nWith bearish pressure slowing down, several c… [+4398 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Radek Zielinski",
    //     "title": "BitMEX admits guilt in Bank Secrecy Act violation case",
    //     "description": "Cryptocurrency exchange BitMEX has plead guilty to violating the Bank Secrecy Act (BSA), as announced by the U.S. Department of… Continue reading BitMEX admits guilt in Bank Secrecy Act violation case\nThe post BitMEX admits guilt in Bank Secrecy Act violation…",
    //     "url": "https://readwrite.com/bitmex-admits-guilt-in-bank-secrecy-act-violation-case/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/d185301e-1f45-41ab-8029-5902997046f0.webp",
    //     "publishedAt": "2024-07-11T16:17:06Z",
    //     "content": "Cryptocurrency exchange BitMEX has plead guilty to violating the Bank Secrecy Act (BSA), as announced by the U.S. Department of Justice (DOJ) on Wednesday.\r\nThe news follows Bitcoin (BTC)flash-crashi… [+2077 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Radek Zielinski",
    //     "title": "Coinbase launches all-in-one crypto wallet management app",
    //     "description": "Cryptocurrency exchange Coinbase has unveiled a new application designed to streamline wallet management and enhance user experience, particularly for crypto… Continue reading Coinbase launches all-in-one crypto wallet management app\nThe post Coinbase launche…",
    //     "url": "https://readwrite.com/coinbase-launches-all-in-one-crypto-wallet-management-app/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/31b7ebad-46bf-4f0f-83d3-2370f58f1b81.webp",
    //     "publishedAt": "2024-07-12T13:48:11Z",
    //     "content": "Cryptocurrency exchangeCoinbase has unveiled a new application designed to streamline wallet management and enhance user experience, particularly for crypto newcomers.\r\nThe app, announced on Thursday… [+2118 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "Yahoo Entertainment"
    //     },
    //     "author": null,
    //     "title": "Bitcoin Traders Target $50K as Billions in BTC Selling Pressure Looms",
    //     "description": null,
    //     "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_9757a169-ba15-4371-8e54-367be8446a61",
    //     "urlToImage": null,
    //     "publishedAt": "2024-07-05T11:21:47Z",
    //     "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Alvin Hemedez",
    //     "title": "2 Crypto Presale Gems Experts Bet on for Massive Success – $SEAL and $99BTC",
    //     "description": "Today’s market offers investors a chance to get in on the ground floor of two intriguing presales: Sealana, a meme… Continue reading 2 Crypto Presale Gems Experts Bet on for Massive Success – $SEAL and $99BTC\nThe post 2 Crypto Presale Gems Experts Bet on for …",
    //     "url": "https://readwrite.com/2-crypto-presale-gems-experts-bet-on-for-massive-success-seal-and-99btc/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/2-crypto-presale-gems-experts-bet-on-for-massive-success.jpg",
    //     "publishedAt": "2024-06-20T20:31:14Z",
    //     "content": "Today’s market offers investors a chance to get in on the ground floor of two intriguing presales: Sealana, a meme coin nearing its launch, and 99Bitcoins, with a comprehensive Learn-to-Earn program.… [+5209 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Alvin Hemedez",
    //     "title": "SMIDGE Surges 200% as Pepe Unchained Sees Strong Presale Demand – Which is the Better PEPE Alternative?",
    //     "description": "Smidge is currently trending due to a massive surge of over 200% today, while this new crypto presale, Pepe Unchained,… Continue reading SMIDGE Surges 200% as Pepe Unchained Sees Strong Presale Demand – Which is the Better PEPE Alternative?\nThe post SMIDGE Su…",
    //     "url": "https://readwrite.com/smidge-surges-200-as-pepe-unchained-sees-strong-presale-demand-which-is-the-better-pepe-alternative/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/smidge-price-prediction.jpg",
    //     "publishedAt": "2024-06-27T11:27:09Z",
    //     "content": "Smidge is currently trending due to a massive surge of over 200% today, while this new crypto presale, Pepe Unchained, has already raised $1 million.\r\nWhile other meme coins are struggling amidst a b… [+4500 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Alvin Hemedez",
    //     "title": "Dogecoin Price Aims for Recovery – Is It Time to Buy the Dip?",
    //     "description": "Over the past few days, Dogecoin has experienced a notable drop, prompting many investors to ask: is this a good… Continue reading Dogecoin Price Aims for Recovery – Is It Time to Buy the Dip?\nThe post Dogecoin Price Aims for Recovery – Is It Time to Buy the …",
    //     "url": "https://readwrite.com/dogecoin-price-aims-for-recovery-is-it-time-to-buy-the-dip/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/dogecoin-price-prediction.jpg",
    //     "publishedAt": "2024-06-19T08:51:21Z",
    //     "content": "Over the past few days, Dogecoin has experienced a notable drop, prompting many investors to ask: is this a good time to buy Dogecoin?\r\nIn this article, we’ll analyze the current state of Dogecoin us… [+4160 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Radek Zielinski",
    //     "title": "Sony acquires crypto exchange Whalefin, plans for relaunch",
    //     "description": "Sony Corporation is set to enter the cryptocurrency market by relaunching Whalefin, a crypto exchange it acquired from Amber Group… Continue reading Sony acquires crypto exchange Whalefin, plans for relaunch\nThe post Sony acquires crypto exchange Whalefin, pl…",
    //     "url": "https://readwrite.com/sony-acquires-crypto-exchange-whalefin-plans-for-relaunch/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/8b2241e7-fbea-43b4-939b-d0207024f93c.webp",
    //     "publishedAt": "2024-07-01T15:43:44Z",
    //     "content": "Sony Corporation is set to enter the cryptocurrency market by relaunching Whalefin, a crypto exchange it acquired from Amber Group in 2023. Financial details of the transaction remain undisclosed.\r\nT… [+2091 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Radek Zielinski",
    //     "title": "Crypto giants flex political muscle to reduce regulatory oversight",
    //     "description": "The crypto industry has emerged as a major force in US campaign finance, amassing a staggering $160 million war chest… Continue reading Crypto giants flex political muscle to reduce regulatory oversight\nThe post Crypto giants flex political muscle to reduce r…",
    //     "url": "https://readwrite.com/crypto-giants-flex-political-muscle-to-reduce-regulatory-oversight/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/piles-of-bitcoin-in-front-of-the-us-capitol-buildi-5lR06PVaT1mL7aIcKMw4Hg-TEUoCtpRSSe8x5zu8By1Xg.jpeg",
    //     "publishedAt": "2024-06-14T15:24:46Z",
    //     "content": "The crypto industry has emerged as a major force in US campaign finance, amassing a staggering $160 million war chest to support candidates favoring light-touch regulation.\r\nAccording to a June 14 Bl… [+2192 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "Yahoo Entertainment"
    //     },
    //     "author": null,
    //     "title": "Bitcoin Falls After U.S. Sends $240M Worth of Silk Road-Related BTC to Coinbase",
    //     "description": null,
    //     "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_b1f6b603-98d2-4507-b08e-d0eb7e1535c1",
    //     "urlToImage": null,
    //     "publishedAt": "2024-06-26T17:40:10Z",
    //     "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": "business-insider",
    //     "name": "Business Insider"
    //     },
    //     "author": "Lian Kit Wee",
    //     "title": "Rich people can buy their way into Hong Kong residency, and the majority of applicants come from 2 tiny countries",
    //     "description": "Vanuatu's cash-for-residency program has been the subject of international scrutiny, with several controversial figures gaining citizenship.",
    //     "url": "https://www.businessinsider.com/rich-buying-hong-kong-residency-investment-program-guinea-bissau-vanuatu-2024-7",
    //     "urlToImage": "https://i.insider.com/668f7474b2528216eeb54828?width=1200&format=jpeg",
    //     "publishedAt": "2024-07-11T07:37:29Z",
    //     "content": "Hong Kong's New Capital Investment Entrant Scheme offers residency for a certain amount of investment.Vernon Yuen/NurPhoto via Getty Images\r\n<ul><li>Hong Kong's latest residency program has drawn app… [+3854 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": "business-insider",
    //     "name": "Business Insider"
    //     },
    //     "author": "Kenneth Niemeyer",
    //     "title": "The number of Ozempic and Wegovy scams has grown by 183% so far this year",
    //     "description": "Scammers are posing as doctors to sell Ozempic and Wegovy weight loss drugs on Facebook and Craigslist, all in an effort to steal your personal info.",
    //     "url": "https://www.businessinsider.com/ozempic-wegovy-scams-phishing-cyber-security-mcafee-ai-facebook-craigslist-2024-6",
    //     "urlToImage": "https://i.insider.com/666b52bee07904901818eba8?width=1200&format=jpeg",
    //     "publishedAt": "2024-06-15T15:51:03Z",
    //     "content": "An example of a fake ad claiming to sell Ozempic on Facebook.McAfee\r\n<ul><li>Phishing scams targeting weight loss drugs like Ozempic rose 183% from January to April.</li><li>Social media sites like F… [+2951 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Alvin Hemedez",
    //     "title": "Analysts Predict Bullish Trends for Meme Coins, and This P2E Presale is Poised for Major Gains",
    //     "description": "Crypto expert ClayBro analyzes a new P2E presale positioned to capitalize on the resurgent meme coin trend. While the broader… Continue reading Analysts Predict Bullish Trends for Meme Coins, and This P2E Presale is Poised for Major Gains\nThe post Analysts Pr…",
    //     "url": "https://readwrite.com/analysts-predict-bullish-trends-for-meme-coins-and-this-p2e-presale-is-poised-for-major-gains/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/analysts-predict-bullish-trends-for-meme-coins-and-this-p2e-presale-is-poised-for-major-gains.jpg",
    //     "publishedAt": "2024-07-09T17:28:36Z",
    //     "content": "Crypto expert ClayBro analyzes a new P2E presale positioned to capitalize on the resurgent meme coin trend.\r\nWhile the broader market appears sluggish, with some meme coins experiencing price decline… [+3880 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "Quartz India"
    //     },
    //     "author": "Vinamrata Chaturvedi and Andy Mills",
    //     "title": "Mt. Gox is returning more than 140,000 Bitcoin to victims of a 2014 hack",
    //     "description": "Defunct crypto exchange Mt. Gox is about to return $9 billion worth of Bitcoin — and Bitcoin is nervous",
    //     "url": "https://qz.com/mt-gox-is-returning-more-than-140-000-bitcoin-to-victi-1851570336",
    //     "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/a3aa5e9d6d76c9aaf4c47420f194647c.png",
    //     "publishedAt": "2024-07-01T16:37:00Z",
    //     "content": "Our free, fast, and fun briefing on the global economy, delivered every weekday morning."
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Alvin Hemedez",
    //     "title": "Crypto Market Pullback Expected to Bounce Back Soon, PlayDoge Presale Still Going Strong",
    //     "description": "Over the past few days, the cryptocurrency market has experienced a pullback, but many traders and analysts are anticipating a… Continue reading Crypto Market Pullback Expected to Bounce Back Soon, PlayDoge Presale Still Going Strong\nThe post Crypto Market Pu…",
    //     "url": "https://readwrite.com/crypto-market-pullback-expected-to-bounce-back-soon-playdoge-presale-still-going-strong/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/crypto-market-pullback-expected-to-bounce-back-soon-playdoge-presale-still-going-strong.jpg",
    //     "publishedAt": "2024-06-21T16:56:38Z",
    //     "content": "Over the past few days, the cryptocurrency market has experienced a pullback, but many traders and analysts are anticipating a significant bounce soon.\r\nThe current dip in prices presents a potential… [+4004 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Radek Zielinski",
    //     "title": "‘Pharma Bro’ Martin Shkreli says he created Trumpcoin with Trump’s son",
    //     "description": "Martin Shkreli — known as the “Pharma Bro” — admitted on Tuesday to being behind the controversial TrumpCoin (DJT) token.… Continue reading ‘Pharma Bro’ Martin Shkreli says he created Trumpcoin with Trump’s son\nThe post ‘Pharma Bro’ Martin Shkreli says he cre…",
    //     "url": "https://readwrite.com/trumpcoin-martin-shkreli-djt-barron-trump-crypto-cryptocurrency/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/2fe1b805-6890-435e-abe5-4b83660e6de3.webp",
    //     "publishedAt": "2024-06-19T19:21:09Z",
    //     "content": "Martin Shkreli known as the “Pharma Bro” admitted on Tuesday to being behind the controversial TrumpCoin (DJT) token.\r\nAccording to a June 19 Coindesk report, Shkreli said during a recent X Space voi… [+3803 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Alvin Hemedez",
    //     "title": "Play-to-Earn Mobile Game with Virtual Doge Pets and Staking Rewards Poised for 1000x Gains",
    //     "description": "PlayDoge, a novel project in the crypto space, recently reached a notable milestone by raising over $5.2 million during its… Continue reading Play-to-Earn Mobile Game with Virtual Doge Pets and Staking Rewards Poised for 1000x Gains\nThe post Play-to-Earn Mobi…",
    //     "url": "https://readwrite.com/play-to-earn-mobile-game-with-virtual-doge-pets-and-staking-rewards-poised-for-1000x-gains/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/play-to-earn-mobile-game-with-virtual-doge-pets-and-staking-rewards-poised-for-1000x-gains.jpg",
    //     "publishedAt": "2024-06-30T16:40:35Z",
    //     "content": "PlayDoge, a novel project in the crypto space, recently reached a notable milestone by raising over $5.2 million during its presale phase since its launch on May 28th.\r\nThis achievement highlights st… [+3783 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "Yahoo Entertainment"
    //     },
    //     "author": "Josh Lipton",
    //     "title": "Tesla vs. Toyota: Kevin Paffrath compares automaker growth",
    //     "description": "Financial analyst and YouTuber Kevin Paffrath (\"Meet Kevin\") joins Market Domination to discuss Tesla's valuation as CEO Elon Musk touted the company's AI...",
    //     "url": "https://finance.yahoo.com/video/tesla-vs-toyota-kevin-paffrath-120012460.html",
    //     "urlToImage": "https://s.yimg.com/ny/api/res/1.2/27ZFfJow1uhhcUeEUtlUdw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzY-/https://s.yimg.com/os/creatr-uploaded-images/2024-06/dc1afe00-2aad-11ef-9fbf-500b7a964617",
    //     "publishedAt": "2024-06-16T12:00:12Z",
    //     "content": "Financial analyst and YouTuber Kevin Paffrath (\"Meet Kevin\") joins Market Domination to discuss Tesla's valuation as CEO Elon Musk touted the company's AI initiatives at Thursday's shareholder meetin… [+4517 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "Techmeme.com"
    //     },
    //     "author": null,
    //     "title": "Kaiko: spot bitcoin ETFs' launch in the US helped Bybit double its market share to 16% in March, crossing Coinbase to become the world's second-largest exchange (Benjamin Taubman/Bloomberg)",
    //     "description": "Benjamin Taubman / Bloomberg:\nKaiko: spot bitcoin ETFs' launch in the US helped Bybit double its market share to 16% in March, crossing Coinbase to become the world's second-largest exchange  —  - Bitcoin ETFs helped Bybit's market share rise, Kaiko says  — B…",
    //     "url": "https://www.techmeme.com/240626/p14",
    //     "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i5OGm0Pmpf7g/v0/1200x799.jpg",
    //     "publishedAt": "2024-06-26T12:30:00Z",
    //     "content": "About This Page\r\nThis is a Techmeme archive page.\r\nIt shows how the site appeared at 8:30 AM ET, June 26, 2024.\r\nThe most current version of the site as always is available at our home page.\r\nTo view… [+67 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "Quartz India"
    //     },
    //     "author": "Vinamrata Chaturvedi",
    //     "title": "Crypto exchange is preparing to return $9 billion worth of Bitcoin – and Bitcoin is nervous",
    //     "description": "A cryptocurrency exchange that went bankrupt a decade ago due to a hack is preparing to refund $9 billion worth of Bitcoin this month, sparking concerns among investors about its potential impact on Bitcoin’s price.Read more...",
    //     "url": "https://qz.com/crypto-exchange-mt-gox-is-preparing-to-return-9-billi-1851569848",
    //     "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/233523940e868e9c876a55a5c77ff8e9.jpg",
    //     "publishedAt": "2024-07-01T14:20:00Z",
    //     "content": "A cryptocurrency exchange that went bankrupt a decade ago due to a hack is preparing to refund $9 billion worth of Bitcoin this month, sparking concerns among investors about its potential impact on … [+1447 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "Quartz India"
    //     },
    //     "author": "Vinamrata Chaturvedi",
    //     "title": "Bitcoin rebounds to $57,000 after billions in Mt. Gox refunds fueled a selloff",
    //     "description": "Bitcoin experienced a slight rebound on Monday morning, increasing by 0.29% and trading at around $57,000. Read more...",
    //     "url": "https://qz.com/bitcoin-rebounds-mt-gox-selloff-1851580645",
    //     "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/0a919a62ed1e135a4c90224608b67a0f.jpg",
    //     "publishedAt": "2024-07-08T14:36:00Z",
    //     "content": "Bitcoin experienced a slight rebound on Monday morning, increasing by 0.29% and trading at around $57,000. \r\nThe top cryptocurrency had dropped to $55,000 on Friday as the now-defunct crypto exchange… [+1510 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "Quartz India"
    //     },
    //     "author": "Vinamrata Chaturvedi",
    //     "title": "Bitcoin drops to $55,000 as defunct crypto exchange Mt. Gox starts refunding billions",
    //     "description": "Bitcoin is bleeding as defunct crypto exchange Mt.Gox has started repaying its customers — and it’slikely that some of those customers have begun selling that Bitcoin. The leading cryptocurrency traded around $55,000 Friday morning, after falling more than 4%…",
    //     "url": "https://qz.com/bitcoin-price-cryptocurrency-exchange-mt-gox-refunds-1851578188",
    //     "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/f566c65bb6a03c3ab6308a005a6b4454.jpg",
    //     "publishedAt": "2024-07-05T13:34:00Z",
    //     "content": "Bitcoin is bleeding as defunct crypto exchange Mt.Gox has started repaying its customers and its likely that some of those customers have begun selling that Bitcoin. The leading cryptocurrency traded… [+1537 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "Quartz India"
    //     },
    //     "author": "Vinamrata Chaturvedi",
    //     "title": "Noisy Bitcoin miners are messing with Texas — and residents are sick of it",
    //     "description": "Hood County residents are suffering from hearing loss, headaches, and other health issues. This week, they testified in court.",
    //     "url": "https://qz.com/bitcoin-mining-is-so-loud-in-texas-that-it-is-making-pe-1851584695",
    //     "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/081151c5332271df894935d9a6551858.png",
    //     "publishedAt": "2024-07-11T14:40:00Z",
    //     "content": "Bitcoin is making noise in some parts of Texas literally. \r\nHood County, Texas, is making headlines after residents have fallen ill due to the excessive noise produced by a Bitcoin mining site acquir… [+5208 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "Quartz India"
    //     },
    //     "author": "Rocio Fabbro",
    //     "title": "Bitcoin falls below $61,000 after one of its worst weeks this year",
    //     "description": "Bitcoin briefly dropped below $61,000 on Monday morning as the cryptocurrency continues to shed value.Read more...",
    //     "url": "https://qz.com/bitcoin-cryptocurrency-market-price-declines-1851556355",
    //     "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/b3f1cb99725330cb044e7791c10d8896.jpg",
    //     "publishedAt": "2024-06-24T12:15:00Z",
    //     "content": "Bitcoin briefly dropped below $61,000 on Monday morning as the cryptocurrency continues to shed value.\r\nBitcoins price fell to as low as $60,860 its lowest level in more than a month before trading a… [+1821 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "Quartz India"
    //     },
    //     "author": "Vinamrata Chaturvedi",
    //     "title": "Top Bitcoin buyer just acquired another $800 worth of the cryptocurrency",
    //     "description": "MicroStrategy stock jumped nearly 2.5% to $1,504 shortly after the market opened on Thursday as the company acquired another 11,931 Bitcoin for nearly $786 million. Shares are up more than 137% so far in 2024. Read more...",
    //     "url": "https://qz.com/microstrategy-acquires-12-000-more-bitcoin-for-800-mil-1851550513",
    //     "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/ffb02ec36754965ca48b825ce82c2dc9.jpg",
    //     "publishedAt": "2024-06-20T14:25:00Z",
    //     "content": "MicroStrategy stock jumped nearly 2.5% to $1,504 shortly after the market opened on Thursday as the company acquired another 11,931 Bitcoin for nearly $786 million. Shares are up more than 137% so fa… [+1026 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "Quartz India"
    //     },
    //     "author": "Quartz Bot",
    //     "title": "Nvidia drives the market, stocks hit records, Trump talks Bitcoin: Markets news roundup",
    //     "description": "Finding a place that’s livable and feels like home can depend on a bunch of factors.Read more...",
    //     "url": "https://qz.com/nvidia-stock-market-dow-sp500-donald-trump-bitcoin-1851590046",
    //     "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/8a09f25fcbd04908cbf7780e3783ec09.jpg",
    //     "publishedAt": "2024-07-13T13:00:00Z",
    //     "content": "Bitcoin is making noise in some parts of Texas literally. \r\nHood County, Texas, is making headlines after residents have fallen ill due to the excessive noise produced by a Bitcoin mining site acquir… [+149 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Alvin Hemedez",
    //     "title": "Pepe Unchained Presale Raises Over $2 Million Despite Market Slump – Could This Be the Next 10x Crypto?",
    //     "description": "Despite a stagnant cryptocurrency market, Pepe Unchained, a new project with its own layer-2 blockchain, is experiencing a surge in… Continue reading Pepe Unchained Presale Raises Over $2 Million Despite Market Slump – Could This Be the Next 10x Crypto?\nThe p…",
    //     "url": "https://readwrite.com/pepe-unchained-presale-raises-over-2-million-despite-market-slump-could-this-be-the-next-10x-crypto/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/pepe-unchained-presale-raises-over-2-million-despite-market-slump.jpg",
    //     "publishedAt": "2024-07-05T20:03:25Z",
    //     "content": "Despite a stagnant cryptocurrency market, Pepe Unchained, a new project with its own layer-2 blockchain, is experiencing a surge in presale success, raising over $2 million.\r\nThis bullish momentum co… [+4774 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Alvin Hemedez",
    //     "title": "BONK Price Rally During Meme Coin Crash – Next Big Solana Meme Coin?",
    //     "description": "While many meme coins are currently facing downturns, BONK stands tall with an impressive 11% increase, outperforming most cryptos on… Continue reading BONK Price Rally During Meme Coin Crash – Next Big Solana Meme Coin?\nThe post BONK Price Rally During Meme …",
    //     "url": "https://readwrite.com/bonk-price-rally-during-meme-coin-crash-next-big-solana-meme-coin/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/bonk-price-prediction.jpg",
    //     "publishedAt": "2024-07-09T13:10:39Z",
    //     "content": "While many meme coins are currently facing downturns, BONK stands tall with an impressive 11% increase, outperforming most cryptos on the Solana ecosystem.\r\nBonk’s strong performance makes it a poten… [+4875 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Alvin Hemedez",
    //     "title": "FLOKI Price Analysis July 2024 – Could It Be the Top Meme Coin in This Coming Bull Run?",
    //     "description": "Despite recent dips in prices across the crypto market, Floki (FLOKI) stands out as a top crypto investment in the… Continue reading FLOKI Price Analysis July 2024 – Could It Be the Top Meme Coin in This Coming Bull Run?\nThe post FLOKI Price Analysis July 202…",
    //     "url": "https://readwrite.com/floki-july-2024-technical-analysis-could-it-be-the-top-meme-coin-in-this-coming-bull-run/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/floki-technical-analysis.jpg",
    //     "publishedAt": "2024-07-07T13:33:02Z",
    //     "content": "Despite recent dips in prices across the crypto market, Floki (FLOKI) stands out as a top crypto investment in the upcoming bull run.\r\nFueled by a strong community, growing adoption, and exciting pro… [+4625 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Alvin Hemedez",
    //     "title": "Best Dog Coins to Buy Now – Is Base Dawgz the Next to Explode?",
    //     "description": "Dog-themed meme coins are the best altcoins during this bear market, but which one should you buy for a chance… Continue reading Best Dog Coins to Buy Now – Is Base Dawgz the Next to Explode?\nThe post Best Dog Coins to Buy Now – Is Base Dawgz the Next to Expl…",
    //     "url": "https://readwrite.com/best-dog-coins-to-buy-now-is-base-dawgz-the-next-to-explode/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/is-base-dawgz-next-to-explode.jpg",
    //     "publishedAt": "2024-07-09T09:39:31Z",
    //     "content": "Dog-themed meme coins are the best altcoins during this bear market, but which one should you buy for a chance at 20x returns?\r\nLet’s talk about whether it’s the right time to invest in the crypto ma… [+4668 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Alvin Hemedez",
    //     "title": "Could Notcoin’s Recent Dip Be a Buying Opportunity, or Should You Consider $WAI Token for High Upside Potential Investment?",
    //     "description": "While Notcoin (NOT) has defied the overall downtrend in the cryptocurrency market, surging 45% in the past week, it experienced… Continue reading Could Notcoin’s Recent Dip Be a Buying Opportunity, or Should You Consider $WAI Token for High Upside Potential I…",
    //     "url": "https://readwrite.com/is-notcoins-recent-dip-a-buying-opportunity-or-should-you-consider-wai-token-for-high-upside-potential-investment/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/is-it-nots-recent-dip-a-buying-opportunity-or-should-you-consider-wai-token-for-high-upside-potential-investment.jpg",
    //     "publishedAt": "2024-07-12T20:17:12Z",
    //     "content": "While Notcoin (NOT) has defied the overall downtrend in the cryptocurrency market, surging 45% in the past week, it experienced a 4.29% dip today.\r\nHowever, some investors see this as a buying opport… [+4492 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "Quartz India"
    //     },
    //     "author": "Vinamrata Chaturvedi",
    //     "title": "Joe Biden may accept crypto campaign donations through Coinbase, following Donald Trump",
    //     "description": "It looks like President Biden’s re-election campaign is mirroring the Trump campaign by considering accepting Bitcoin and cryptocurrency donations.Read more...",
    //     "url": "https://qz.com/just-like-trump-the-biden-campaign-may-also-accept-cry-1851537487",
    //     "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/27ec70f7cad50a0c7c35327d28aa4070.jpg",
    //     "publishedAt": "2024-06-13T14:14:00Z",
    //     "content": "It looks like President Bidens re-election campaign is mirroring the Trump campaign by considering accepting Bitcoin and cryptocurrency donations.\r\nThe Biden campaign is considering accepting cryptoc… [+1368 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "Quartz India"
    //     },
    //     "author": "Vinamrata Chaturvedi",
    //     "title": "Donald Trump will speak at the Bitcoin conference. A former advisor to Biden says that’s a smart move",
    //     "description": "The presumptive Republican presidential nominee, Donald Trump, is scheduled to speak at the upcoming Bitcoin Conference in Nashville, Tennessee, later this month. While this would be the first time a presidential candidate would attend the conference, it has …",
    //     "url": "https://qz.com/danald-trump-will-speak-at-the-bitcoin-conference-in-na-1851587588",
    //     "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/2a7adb820347dc3c2eda28ac02908d0c.jpg",
    //     "publishedAt": "2024-07-11T18:11:00Z",
    //     "content": "The presumptive Republican presidential nominee, Donald Trump, is scheduled to speak at the upcoming Bitcoin Conference in Nashville, Tennessee, later this month. While this would be the first time a… [+4548 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "Quartz India"
    //     },
    //     "author": "Rocio Fabbro and Andy Mills",
    //     "title": "Bitcoin price continues decline as crypto market stumbles",
    //     "description": "The cryptocurrency market shed tens of billions in value last week leading to Bitcoin's drop below $60,000 on Monday",
    //     "url": "https://qz.com/bitcoin-price-continues-decline-as-crypto-market-stumbl-1851557631",
    //     "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/244c80e11fbb7f52fecec8b51e99f5fc.png",
    //     "publishedAt": "2024-06-24T19:10:00Z",
    //     "content": "Our free, fast, and fun briefing on the global economy, delivered every weekday morning."
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "Quartz India"
    //     },
    //     "author": "Rocio Fabbro",
    //     "title": "Bitcoin has dropped below $66,000, extending the cryptocurrency's decline",
    //     "description": "Bitcoin’s price fell below $66,000 in Monday morning trading, extending last week’s declines as a slew of new U.S. economic data put a damper on its earlier hot streak.Read more...",
    //     "url": "https://qz.com/bitcoin-660000-declines-crypto-markets-1851544087",
    //     "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/3dc28f60a3f4ca3dd0954963a8b05108.jpg",
    //     "publishedAt": "2024-06-17T15:57:20Z",
    //     "content": "Bitcoins price fell below $66,000 in Monday morning trading, extending last weeks declines as a slew of new U.S. economic data put a damper on its earlier hot streak.\r\nThe popular cryptocurrency trad… [+1700 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Alvin Hemedez",
    //     "title": "TURBO Soars Over 300% in the Past Month – Will This P2E Meme Coin Experience Similar Growth in the Weeks Ahead?",
    //     "description": "Turbo (TURBO), a meme coin created with a budget of only $69 by GPT-4, is experiencing a recent price rally… Continue reading TURBO Soars Over 300% in the Past Month – Will This P2E Meme Coin Experience Similar Growth in the Weeks Ahead?\nThe post TURBO Soars …",
    //     "url": "https://readwrite.com/turbo-soars-over-300-in-the-past-month-will-this-p2e-meme-coin-experience-similar-growth-in-the-weeks-ahead/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/turbo-price-prediction.jpg",
    //     "publishedAt": "2024-06-14T18:02:46Z",
    //     "content": "Turbo (TURBO), a meme coin created with a budget of only $69 by GPT-4, is experiencing a recent price rally as people wonder if it could hit $0.10 during this bullish cycle.\r\nWhat began as an experim… [+4127 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "James Spillane",
    //     "title": "Meme Coin Prices Plunge, But Here’s One That Might Outperform Them All",
    //     "description": "The crypto community is going through a rough period this month, with the majority of the meme coins now trading… Continue reading Meme Coin Prices Plunge, But Here’s One That Might Outperform Them All\nThe post Meme Coin Prices Plunge, But Here’s One That Mig…",
    //     "url": "https://readwrite.com/meme-coin-prices-plunge-but-heres-one-that-might-outperform-them-all/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/Fight-Night-Crypto-.jpg",
    //     "publishedAt": "2024-06-17T03:42:41Z",
    //     "content": "The crypto community is going through a rough period this month, with the majority of the meme coins now trading “in red”. The prices of several well-popular meme coins have taken a hit in recent wee… [+4147 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Alvin Hemedez",
    //     "title": "MEW Price Soars After Binance Futures Listing – Will PlayDoge See Similar Success at Launch?",
    //     "description": "Despite the current market dip, MEW shows potential for significant growth due to a recent Binance Futures listing announcement. This… Continue reading MEW Price Soars After Binance Futures Listing – Will PlayDoge See Similar Success at Launch?\nThe post MEW P…",
    //     "url": "https://readwrite.com/mew-price-soars-after-binance-futures-listing-will-playdoge-see-similar-success-at-launch/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/mew-binance-listing.jpg",
    //     "publishedAt": "2024-06-20T14:01:34Z",
    //     "content": "Despite the current market dip, MEW shows potential for significant growth due to a recent Binance Futures listing announcement.\r\nThis listing might be good for MEW, a cat-themed token that has emerg… [+5622 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Alvin Hemedez",
    //     "title": "Meme Coin Market Slumps, But Pepe (PEPE) Shows Resilience – Buying the Dip or Exploring Play-to-Earn Presale for Passive Income?",
    //     "description": "The cryptocurrency market is experiencing a slight correction, with most tokens trading in the red. Pepe (PEPE), a popular meme… Continue reading Meme Coin Market Slumps, But Pepe (PEPE) Shows Resilience – Buying the Dip or Exploring Play-to-Earn Presale for …",
    //     "url": "https://readwrite.com/meme-coin-market-slumps-but-pepe-pepe-shows-resilience-buying-the-dip-or-exploring-play-to-earn-presale-for-passive-income/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/meme-coin-market-slumps-but-pepe-shows-resilience.jpg",
    //     "publishedAt": "2024-06-21T07:32:28Z",
    //     "content": "The cryptocurrency market is experiencing a slight correction, with most tokens trading in the red. Pepe (PEPE), a popular meme coin, has been hit harder than most, dropping over 5% in the last day.\r… [+5387 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Alvin Hemedez",
    //     "title": "Can Pepe Make a Comeback? Exploring the Potential of the Newest PEPE Alternative, Pepe Unchained (PEPU)",
    //     "description": "With PEPE’s price experiencing ups and downs, a strong new altcoin has emerged, causing many traders to shift their attention… Continue reading Can Pepe Make a Comeback? Exploring the Potential of the Newest PEPE Alternative, Pepe Unchained (PEPU)\nThe post Ca…",
    //     "url": "https://readwrite.com/can-pepe-make-a-comeback-exploring-the-potential-of-the-newest-pepe-alternative-pepe-unchained-pepu/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/pepe-price-prediction-1.jpg",
    //     "publishedAt": "2024-06-26T08:54:29Z",
    //     "content": "With PEPE’s price experiencing ups and downs, a strong new altcoin has emerged, causing many traders to shift their attention to this meme coin called Pepe Unchained.\r\nToday, we explore the intriguin… [+3948 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Alvin Hemedez",
    //     "title": "Sealana Soars Past $6 Million in Presale, 4 Days Left – $SEAL Airdrop and Trading Start July 2nd",
    //     "description": "Sealana has raised over $6 million in its successful presale, initially set to close on June 25, 2024, but extended… Continue reading Sealana Soars Past $6 Million in Presale, 4 Days Left – $SEAL Airdrop and Trading Start July 2nd\nThe post Sealana Soars Past …",
    //     "url": "https://readwrite.com/sealana-soars-past-6-million-in-presale-4-days-left-seal-airdrop-and-trading-start-july-2nd/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/sealana-airdrop-on-july-2nd.jpg",
    //     "publishedAt": "2024-06-28T10:39:32Z",
    //     "content": "Sealana has raised over $6 million in its successful presale, initially set to close on June 25, 2024, but extended due to high demand, with only 4 days left for new backers to join before potential … [+4473 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Alvin Hemedez",
    //     "title": "Is the PEPE Dip a Buying Opportunity or Should You Consider SEAL for a Potential 100x Return?",
    //     "description": "Analysts predict a bullish 2024 for PEPE, especially following a substantial bull run last month, while the new meme coin… Continue reading Is the PEPE Dip a Buying Opportunity or Should You Consider SEAL for a Potential 100x Return?\nThe post Is the PEPE Dip …",
    //     "url": "https://readwrite.com/is-the-pepe-dip-a-buying-opportunity-or-should-you-consider-seal-for-a-potential-100x-return/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/pepe-price-prediction-2.jpg",
    //     "publishedAt": "2024-06-22T17:49:23Z",
    //     "content": "Analysts predict a bullish 2024 for PEPE, especially following a substantial bull run last month, while the new meme coin Sealana captures the spotlight with its upcoming launch.\r\nThis article will e… [+4783 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Alvin Hemedez",
    //     "title": "Is $SUBF the Next 100x Meme Coin or This $PEPU Token Presale Nearly Raises $900,000?",
    //     "description": "Super Best Friends (SUBF) is currently trending on CoinMarketCap, a promising sign for meme coins, and it has increased nearly… Continue reading Is $SUBF the Next 100x Meme Coin or This $PEPU Token Presale Nearly Raises $900,000?\nThe post Is $SUBF the Next 10…",
    //     "url": "https://readwrite.com/is-subf-the-next-100x-meme-coin-or-this-pepu-token-presale-nearly-raises-900000/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/super-best-friends-price-analysis.jpg",
    //     "publishedAt": "2024-06-26T15:02:08Z",
    //     "content": "Super Best Friends (SUBF) is currently trending on CoinMarketCap, a promising sign for meme coins, and it has increased nearly 30% from its all-time low.\r\nThis pump could signal positive potential fo… [+4300 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Alvin Hemedez",
    //     "title": "FLOKI Set to Flip WIF? Or Will Both Be Outperformed by This New P2E Meme Token, PLAY?",
    //     "description": "Floki (FLOKI) has big news that could potentially flip dogwifhat (WIF), positioning Floki to reach new heights. This popular meme… Continue reading FLOKI Set to Flip WIF? Or Will Both Be Outperformed by This New P2E Meme Token, PLAY?\nThe post FLOKI Set to Fli…",
    //     "url": "https://readwrite.com/floki-set-to-flip-wif-or-will-both-be-outperformed-by-this-new-p2e-meme-token-play/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/floki-will-set-to-flip-wif.jpg",
    //     "publishedAt": "2024-06-28T08:01:54Z",
    //     "content": "Floki (FLOKI) has big news that could potentially flip dogwifhat (WIF), positioning Floki to reach new heights.\r\nThis popular meme coin, a long-time favorite among cryptocurrency enthusiasts, recentl… [+5388 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Alvin Hemedez",
    //     "title": "Can These New Meme Coins 100x Your Investment? $BEER, $PLAY, $DOG, $WAI, and $DAWGZ",
    //     "description": "Five brand new meme coins are causing a stir in the crypto market, riding the current upswing where meme coins… Continue reading Can These New Meme Coins 100x Your Investment? $BEER, $PLAY, $DOG, $WAI, and $DAWGZ\nThe post Can These New Meme Coins 100x Your In…",
    //     "url": "https://readwrite.com/can-these-new-meme-coins-100x-your-investment-beer-play-dog-wai-and-dawgz/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/can-these-new-meme-coins-100x-your-money.jpg",
    //     "publishedAt": "2024-06-15T21:14:36Z",
    //     "content": "Five brand new meme coins are causing a stir in the crypto market, riding the current upswing where meme coins are showing strong performance.\r\nInvestors are hunting for potential gems that could off… [+6478 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Alvin Hemedez",
    //     "title": "Few Days Left to Participate in the Hottest SOL-Based Meme Coin Presale – Next 100x Crypto Gem?",
    //     "description": "Sealana (SEAL) has raised $5 million recently, and there are only 6 days left in its presale, so this is… Continue reading Few Days Left to Participate in the Hottest SOL-Based Meme Coin Presale – Next 100x Crypto Gem?\nThe post Few Days Left to Participate in…",
    //     "url": "https://readwrite.com/few-days-left-to-participate-in-the-hottest-sol-based-meme-coin-presale-next-100x-crypto-gem/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/six-days-left-to-participate-in-sealana-presale.jpg",
    //     "publishedAt": "2024-06-19T10:02:23Z",
    //     "content": "Sealana (SEAL) has raised $5 million recently, and there are only 6 days left in its presale, so this is your final opportunity to invest in this promising project.\r\nThe project team has set the pres… [+4476 chars]"
    //     },
    //    {
    //     "source": {
    //     "id": null,
    //     "name": "ReadWrite"
    //     },
    //     "author": "Alvin Hemedez",
    //     "title": "WIF Price Plunges – Can This Solana Meme Coin Bounce Back and Reach $5?",
    //     "description": "Over the past 24 hours, WIF, a Solana-based meme coin, has seen a significant price decrease, leading investors to wonder… Continue reading WIF Price Plunges – Can This Solana Meme Coin Bounce Back and Reach $5?\nThe post WIF Price Plunges – Can This Solana Me…",
    //     "url": "https://readwrite.com/wif-price-plunges-can-this-solana-meme-coin-bounce-back-and-reach-5/",
    //     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/wif-price-prediction.jpg",
    //     "publishedAt": "2024-06-22T16:03:29Z",
    //     "content": "Over the past 24 hours, WIF, a Solana-based meme coin, has seen a significant price decrease, leading investors to wonder whether the drop will continue or if it can reach $5 in the coming weeks.\r\nTo… [+4598 chars]"
    //     }
    //     ]
        constructor(){
            super();
            console.log('I am a constructor')
            this.state={
             articles :[],
             loading: false,
             page:1
            }
        }

    async componentDidMount(){
            console.log("component");
            let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=707f8a078fa44133a45c01467e80577b&page=1&pageSize=${this.props.pageSize}`;
            this.setState({loading:true})
            let data=await fetch(url);
            let parsedData=await data.json();
            console.log(parsedData);
            this.setState({articles :parsedData.articles,totalResults: parsedData.totalResults,loading:false} );
          
        }
       
        handlePrevious=async ()=>{
             console.log("previous")
            
            let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=707f8a078fa44133a45c01467e80577b&page=${this.state.page-1}&pagesize=${this.props.pageSize} `;
            this.setState({loading:true})

            let data=await fetch(url);
            let parsedData=await data.json();
            console.log(parsedData);
            this.setState({
                page:this.state.page- 1,
               articles :parsedData.articles,
              loading:false


        })
    }
        handleNext=async ()=>{
               console.log("Next");
              
              
               console.log("component");
               if(!(this.state.page+1 >Math.ceil(this.state.totalResults/this.props.pageSize))){
               
            let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=707f8a078fa44133a45c01467e80577b&page=${this.state.page+1}&pageSize=${this.props.pageSize} `;
            this.setState({loading:true})
            let data=await fetch(url);
            let parsedData=await data.json();
            console.log(parsedData);
            this.setState({loading:false})

            this.setState({
                page:this.state.page + 1,
               articles :parsedData.articles

        })
    }
        }


    
    render(){
        return(
            <div className="container1 my-0">
                <div className="container">
                 <h2 className="g text-center">News📰-Top Headlines</h2>
                 {this.state.loading && <Spinner/>}
                 <div className="row">
                 {!this.state.loading && this.state.articles.map((ele)=>{
                    return  <div className="col-md-4" key={ele.url}>
                     <NewsItem title={ele.title} description={ele.description} imageUrl={ele.urlToImage} newsUrl={ele.url} />
                      
                     </div>
                 })}
                      
               </div>
              <div className="container d-flex justify-content-between">
              <button hidden={this.state.page<=1} type="button" className="btn btn-primary m-lg-2" onClick={this.handlePrevious}>👈Previous</button>
              <button hidden={this.state.page > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-primary m-lg-2" onClick={this.handleNext}>Next👉</button>
              </div>
              </div> 
              <footer className="foot-panel text-centre">
              <p className="author">News-Application developed by Er.Jashanpreeet Singh
              <p className="para">Copyright©️2024</p>
              </p>
              </footer>
            </div>

           
        )
    }
} 

export default News;