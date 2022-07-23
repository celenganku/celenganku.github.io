import{s as c,r as p,$ as d,n as i}from"./index.680aebaf.js";var u=Object.defineProperty,h=Object.getOwnPropertyDescriptor,f=(o,e,n,a)=>{for(var t=a>1?void 0:a?h(e,n):e,s=o.length-1,r;s>=0;s--)(r=o[s])&&(t=(a?r(e,n,t):r(t))||t);return a&&t&&u(e,n,t),t};let l=class extends c{static get styles(){return p`

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
    `}constructor(){super()}async firstUpdated(){if(console.log("ssfirstUpdated"),localStorage.getItem("shareddated")===null)console.log("shareddated is null"),window.open("/sharebonus","_top");else{var o=localStorage.getItem("shareddated");const e=new Date;console.log(e);const n=new Date(e.getFullYear(),e.getMonth(),e.getDate());console.log(n);const a=Date.parse(n.toString());console.log(a),o!=null?parseInt(o)<a&&window.open("/sharebonus","_top"):window.open("/sharebonus","_top")}}render(){return d`
      <app-header ?enableBack="${!0}"></app-header>

      <div>
		<h2>Celenganku : Susunkata</h2>
		<fluent-card>
			<center><img alt="App Logo" src="/assets/icons/icon_512.png" style="width: 100%;height: auto;"></center>
			<p>...</p>
		</fluent-card>
		<fluent-anchor href="${"/"}main" appearance="accent">Menu Utama</fluent-anchor>
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
    `}};l=f([i("app-susunkata")],l);export{l as AppMain};
//# sourceMappingURL=app-susunkata.48e17bcd.js.map
