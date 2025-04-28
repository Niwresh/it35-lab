import { 
  IonAlert,
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonInput,
  IonInputPasswordToggle,
  IonPage,
  IonText,
  IonToast,
  useIonRouter
} from '@ionic/react';
import { logoTwitter } from 'ionicons/icons';
import { useState } from 'react';
import { supabase } from '../utils/supabaseClients';

const AlertBox: React.FC<{ message: string; isOpen: boolean; onClose: () => void }> = ({ message, isOpen, onClose }) => {
  return (
    <IonAlert
      isOpen={isOpen}
      onDidDismiss={onClose}
      header="Notification"
      message={message}
      buttons={['OK']}
    />
  );
};

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const doLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setAlertMessage(error.message);
      setShowAlert(true);
      return;
    }

    setShowToast(true); 
    setTimeout(() => {
      navigation.push('/it35-lab/app', 'forward', 'replace');
    }, 1000);
  };

  return (
    <IonPage>
  <IonContent className="ion-padding">
    <IonCard style={{ maxWidth: '500px', margin: '20px auto', padding: '10px' }}>
      <IonCardContent>

        {/* Avatar (Moved inside CardContent) */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', marginBottom: '20px' }}>
          <IonAvatar style={{ width: '100px', height: '100px' }}>
            <img
              src="https://i.pinimg.com/originals/22/e6/cc/22e6cc48795a2c55e7b8eed39d0c5034.gif"
              alt="Avatar"
            />
          </IonAvatar>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '15px' }}>
          <IonText style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>USER LOGIN</IonText>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <IonInput
            label="Email"
            labelPlacement="floating"
            fill="outline"
            type="email"
            placeholder="Enter your email"
            value={email}
            onIonInput={(e) => setEmail(e.detail.value!)}
          />

          <IonInput
            label="Password"
            labelPlacement="floating"
            fill="outline"
            type="password"
            placeholder="Enter your password"
            value={password}
            onIonInput={(e) => setPassword(e.detail.value!)}
          >
            <IonInputPasswordToggle slot="end" />
          </IonInput>

          <IonButton onClick={doLogin} expand="block" color="danger" shape="round">
            Login
          </IonButton>

          <IonButton
            routerLink="/it35-lab/register"
            expand="block"
            fill="outline"
            shape="round"
            color="danger"
          >
            Don't have an account? Register here
          </IonButton>
        </div>

      </IonCardContent>
    </IonCard>

    {/* Alert for login error */}
    <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />

    {/* Toast for login success */}
    <IonToast
      isOpen={showToast}
      onDidDismiss={() => setShowToast(false)}
      message="Login successful! Redirecting..."
      duration={1500}
      position="top"
      color="success"
    />
  </IonContent>
</IonPage>

  );
};

export default Login;
