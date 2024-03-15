export enum Attribute {
    'name'= 'name',
  'uid'= 'uid',
  'image'='image',
  'age'= 'age',
  'gender'='gender',
  'area'='area',
  'position'='position',
  'timeincompany'='timeincompany',
  'experience'='experience',
}

class Profile extends HTMLElement{
    name?:string;
    uid?: number;
    image?: string;
    age?:number;
    gender?:string;
    area?: string;
    position?: string;
    timeincompany?: number;
    experience?: number;


    constructor (){
        super();
        this.attachShadow ({mode: 'open'});
    }
static get observedAttributes (){
    const attrs: Record<Attribute,null> = {
    name:null,
    uid: null,
    image: null,
    age:null,
    gender:null,
    area: null,
    position: null,
    timeincompany: null,
    experience: null,
    };
    return Object.keys(attrs);
}

 attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue:string | undefined) {
    switch (propName) {
        case Attribute.uid:
				this.uid = newValue ? Number(newValue) : undefined;
				break;
                case Attribute.age:
				this.age = newValue ? Number(newValue) : undefined;
				break;
                case Attribute.timeincompany:
				this.timeincompany = newValue ? Number(newValue) : undefined;
				break;
                case Attribute.experience:
                    this.experience = newValue ? Number(newValue) : undefined;
                    break;


			default:
				this[propName] = newValue;
				break;
		}

        this.render();
  
this.render();
}

connectedCallback (){
    this.render();
}
    render(){
        if(this.shadowRoot) {
        this.shadowRoot.innerHTML = `
        <section class="carta">
        <h1>${this.name}</h1>
        <p>${this.uid}</p>
        <p>${this.age}</p>
        <img src=${this.image}></img>
        <p>${this.gender}</p>
        <p>${this.area}</p>
        <p>${this.position}</p>
        <p>${this.timeincompany}</p>
        <p>${this.experience}</p>
        </section>
        `;
    } 
    }
}

export default Profile;
customElements.define('my-profile', Profile);