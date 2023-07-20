const quotes = [
    {
        quote: "인생에 뜻을 세우는데 적당한 때는 없다.",
        author: "볼드윈"
    },
    {
        quote: "실패는 잊어라. 하지만 그것이 준 교훈은 절대 잊으면 안 된다.",
        author: "하버트 개서"
    },
    {
        quote: "우리는 행복하기 때문에 웃는 게 아니라, 웃기 때문에 행복하다.",
        author: "윌리엄 제임스"
    },
    {
        quote: "우리는 행복하기 때문에 웃는 게 아니라, 웃기 때문에 행복하다.",
        author: "윌리엄 제임스"
    },
    {
        quote: "너 자신이 돼라. 다른 사람은 이미 있으니까.",
        author: "오스카 와일드"
    },
    {
        quote: "인생은 가까이서 보면 비극, 멀리서 보면 희극이다.",
        author: "찰리 채플린"
    },
    {
        quote: "인생을 다시 산다면 다음번에는 더 많은 실수를 저지르리라.",
        author: "나딘 스테어"
    },
    {
        quote: "최고에 도달하려면 최저에서 시작해라.",
        author: "P. 시루스"
    },
    {
        quote: "행동의 가치는 그 행동을 끝까지 이루는 데 있다.",
        author: "칭기즈칸"
    },
    {
        quote: "아무것도 하지 않으면 아무 일도 일어나지 않는다.",
        author: "기시미 이치로"
    },
    {
        quote: "일단 시작해라. 나중에 완벽해지면 된다.",
        author: "론 무어"
    },
    {
        quote: "겨울이 오면 봄이 멀지 않으리.",
        author: "셀리"
    },
    {
        quote: "내 비장의 무기는 아직 손안에 있다. 그것은 희망이다.",
        author: "나폴레옹"
    },
    {
        quote: "가장 큰 위험은 위험 없는 삶이다.",
        author: "스티븐 코비"
    },
    {
        quote: "오늘 할 수 있는 일을 내일로 미루지 마라.",
        author: "벤자민 프랭클린"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author}`;