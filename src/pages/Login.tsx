import { 
  IonAvatar,
  IonButton,
  IonContent, 
  IonIcon, 
  IonInput, 
  IonInputPasswordToggle, 
  IonItem, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  useIonRouter, 
  IonAlert 
} from '@ionic/react';
import { logoTwitter } from 'ionicons/icons';
import { useState } from 'react';

const Login: React.FC = () => {
  const navigation = useIonRouter();

  const [showAlert, setShowAlert] = useState(false);

  const doLogin = () => {
    setShowAlert(true); 
  }

  const doSignUp = () => {
    navigation.push('/it35-lab/register', 'forward', 'replace');
  }

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
            marginTop: '-10rem',
            marginBottom: '-18rem',
          }}
        >
          <IonAvatar
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              overflow: 'hidden',
            }}
          >
            <IonIcon
              icon={logoTwitter}
              color="primary"
              style={{ fontSize: '120px', color: '#6c757d' }}
            />
          </IonAvatar>
          <h1
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            USER LOGIN
          </h1>
        </div>

        <IonTitle>Login</IonTitle>
        <IonItem>
          <IonInput label="Email input" type="email" placeholder="email@domain.com" />
        </IonItem>

        <IonItem>
          <IonInput
            type="password"
            label="Password"
            value="NeverGonnaGiveYouUp"
          >
            <IonInputPasswordToggle slot="end" />
          </IonInput>
        </IonItem>

        <IonButton onClick={doLogin} expand="full">
          Login
        </IonButton>
        <IonButton onClick={doSignUp} expand="full">
          SignUp
        </IonButton>

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => {
            setShowAlert(false); 
            navigation.push('/it35-lab/app', 'forward', 'replace');
          }}
          header={'Login Successful'}
          message={'You have successfully logged in.'}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
