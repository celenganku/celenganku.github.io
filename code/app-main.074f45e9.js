import{s as d,r as f,$ as s,n as p}from"./index.2b41c0d8.js";var u=Object.defineProperty,h=Object.getOwnPropertyDescriptor,m=(e,t,a,n)=>{for(var i=n>1?void 0:n?h(t,a):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(i=(n?r(t,a,i):r(i))||i);return n&&i&&u(t,a,i),i},c=function(){var e,t;console.log("actifReadyNotif!"),new Notification("Celenganku sudah Aktif!"),(t=(e=navigator==null?void 0:navigator.serviceWorker)==null?void 0:e.controller)==null||t.postMessage({func:"setNotifAvailable",value:!0})};let l=class extends d{static get styles(){return f`

    fluent-card {
      padding: 0px 18px 18px;
    }

    @media(prefers-color-scheme: light) {
      fluent-card {
        --fill-color: #edebe9;
      }
    }

    @media(prefers-color-scheme: dark) {
      fluent-card {
        --fill-color: #4e4e4e;
        color: white;
        border: none;
      }
    }

    @media (min-width: 1024px) {
      fluent-card {
        width: 54%;
      }
    }
	.avatar {
	  vertical-align: middle;
	  width: 50px;
	  height: 50px;
	  border-radius: 50%;
	}
    `}constructor(){super()}async firstUpdated(){var t;var e=(t=this.shadowRoot)==null?void 0:t.querySelector("#btnaktifkan");console.log(e),e==null||e.addEventListener("click",this._notifyMe)}_notifyMe(){console.log("notify me!"),"Notification"in window?Notification.permission==="granted"?c():Notification.permission!=="denied"&&Notification.requestPermission().then(function(e){e==="granted"&&c()}):alert("This browser does not support desktop notification")}notifElement(){return"Notification"in window&&Notification.permission==="granted"?s``:s`<fluent-card><button id="btnaktifkan">Aktifkan celenganku</button></fluent-card>`}render(){return s`
      <app-header ?enableBack="${!1}"></app-header>

      <div>
		<h2>Celenganku</h2>
		<fluent-card>
			<center><img alt="App Logo" src="/assets/icons/icon_512.png" style="width: 100%;height: auto;"></center>
			<p>Celenganku sudah diisi <span id="diisicounter">...</span> kali.</p>
		</fluent-card>
    ${this.notifElement()}
    <fluent-card>
      <p>Apps ini disponsori oleh Purwana Networks @ Snack ,<a href="/susunkata">Susun Kata Solver</a>, &amp Aplikasi Mobile</p>
    </fluent-card>

		<!--


        <fluent-card>
          <h2>Did you know?</h2>

          <p>PWAs have access to many useful APIs in modern browsers! These
            APIs have enabled many new types of apps that can be built as PWAs, such as advanced graphics editing apps, games, apps that use machine learning and more!
          </p>

          <p>Check out <fluent-anchor href="https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/handle-files">these docs</fluent-anchor> to learn more about the advanced features that you can use in your PWA</p>

        </fluent-card>
		-->
      </div>
    `}};l=m([p("app-main")],l);export{l as AppMain};
//# sourceMappingURL=app-main.074f45e9.js.map
