import Component from "../core/component";
import Header from "./Header/Header";
import AuctionList from "./AuctionList/AuctionList";
import "./app.css";
import QuerySidebar from "./QuerySidebar/QuerySidebar";
import {whoIam} from "../store/user";
import MyPage from "./MyPage/MyPage";
import Modal from "./Modal/Modal";

class App extends Component<any> {
    template(): InnerHTML["innerHTML"] {
        return `
        <header data-component="Header"></header>
        <div class="main-container">
            <div data-component="QuerySidebar" hidden></div>
            <div data-component="AuctionList" hidden></div>
            <div data-component="MyPage"></div>
        </div>
        <div data-component="Modal"></div>
        `;
    }

    mounted() {
        const $header = this.$target.querySelector('[data-component="Header"]') as HTMLElement;
        new Header($header, {});

        const $auctionList = this.$target.querySelector('[data-component="AuctionList"]') as HTMLElement;
        new AuctionList($auctionList, {});

        const $querySidebar = this.$target.querySelector('[data-component="QuerySidebar"]') as HTMLElement;
        new QuerySidebar($querySidebar, {});

        const $myPage = document.querySelector('[data-component="MyPage"]') as HTMLElement;
        new MyPage($myPage, {});
        
        const $modal = this.$target.querySelector('[data-component="Modal"]') as HTMLElement;
        new Modal($modal, {});

        whoIam().then(() => {console.log('session user initialized')});
    }
}

export default App;