import { 
  IonAvatar,
    IonButton,
    IonButtons,
      IonContent, 
      IonHeader, 
      IonIcon, 
      IonInput, 
      IonInputPasswordToggle, 
      IonItem, 
      IonMenuButton, 
      IonPage, 
      IonTitle, 
      IonToolbar, 
      useIonRouter
  } from '@ionic/react';
import { logoFacebook, logoIonic } from 'ionicons/icons';
  
  const Login: React.FC = () => {
    const navigation = useIonRouter();
  
    const doLogin = () => {
        navigation.push('/it35-lab/app','forward','replace');
    }
    return (
      <IonPage>
        <IonContent className='ion-padding'>

        <div style={{
                  display: 'flex',
                  flexDirection:'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  width:'100%',
                  marginTop:'-10rem',
                  marginBottom:'-18rem',
                }}>
             <IonAvatar
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '150px',
                      height: '150px',
                      borderRadius: '50%', 
                      overflow: 'hidden' 
                    }}
                  >
                    <img alt="Silhouette of a person's head" src="https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/375296634_1390642304853808_2483613067550794028_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=9CIp2pQ3kDcQ7kNvgELeYCP&_nc_oc=AdheI3naDkDWjT_HCIuDm-vjbmIRP3oXOvXFytRJlZTQ_b3O1mDxpDpr668HV0gBU_g&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&_nc_gid=AdxPHoTpayDo_2Pblj2bdjX&oh=00_AYAW5HUoLnkzpVkmshMw6TVOU_m7iwRlbPNlZ6HubmlnKA&oe=67C5BEBD" />
                    {/*
                     <IonIcon 
                      icon={logoFacebook}
                      color='primary'
                      style={{ fontSize: '120px', color: '#6c757d' }} 
                    />
                    */}
                  </IonAvatar>
                  <h1 style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>USER LOGIN</h1>
                    
          </div>
          
            <IonTitle>Login</IonTitle>
          <IonItem>
        <IonInput label="Email input" type="email" placeholder="email@domain.com"></IonInput>
      </IonItem>

        <IonInput type="password" label="Password" value="NeverGonnaGiveYouUp">
      <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
    </IonInput>
            <IonButton onClick={() => doLogin()} expand="full">
                Login
            </IonButton>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Login;