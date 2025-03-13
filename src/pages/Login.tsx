import React, { useState } from 'react';
import { 
  IonAvatar,
  IonButton,
  IonContent, 
  IonIcon, 
  IonInput, 
  IonInputPasswordToggle, 
  IonItem, 
  IonPage, 
  IonText, 
  IonToolbar, 
  IonTitle, 
  useIonRouter, 
  IonAlert, 
  IonModal, 
  IonToast
} from '@ionic/react';
import { logoTwitter } from 'ionicons/icons';

const Login: React.FC = () => {
  const navigation = useIonRouter();

  // State for login
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Predefined valid credentials for login validation
  const validUsername = 'user123';
  const validPassword = 'password123';

  // Login function
  const doLogin = () => {
    if (!username || !password) {
      setShowAlert(true); // Show alert if username or password is missing
    } else {
      if (username === validUsername && password === validPassword) {
        setShowSuccessModal(true); // Show success modal on correct credentials
        setShowToast(true);
      } else {
        setLoginError(true); // Set login error if credentials are incorrect
      }
    }
  };

  // Handle alert confirm button click
  const handleAlertConfirm = () => {
    setShowAlert(false); // Close the alert
  };

  // Handle closing of success modal and redirect to the dashboard
  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
    navigation.push('/it35-lab/app', 'forward', 'replace');
  };

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

        {/* Login Form */}
        <IonItem>
          <IonInput
            labelPlacement="floating"
            value={username}
            onIonChange={(e) => setUsername(e.detail.value!)}
            placeholder="Enter username"
          />
        </IonItem>
        <IonItem>
          <IonInput
            labelPlacement="floating"
            value={password}
            onIonChange={(e) => setPassword(e.detail.value!)}
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter password"
          >
            <IonInputPasswordToggle slot="end" onClick={() => setShowPassword(!showPassword)} />
          </IonInput>
        </IonItem>
        {loginError && (
          <IonText color="danger">
            <p>Incorrect username or password. Please try again.</p>
          </IonText>
        )}
        <IonButton onClick={doLogin} expand="full">Login</IonButton>

        {/* Button to navigate to register page */}
        <IonButton 
          onClick={() => navigation.push('/it35-lab/register', 'forward', 'replace')}
          expand="full" 
          color="secondary"
        >
          Create Account
        </IonButton>

        {/* Success Modal after successful login */}
        <IonModal isOpen={showSuccessModal} onDidDismiss={handleSuccessModalClose}>
          <IonContent className="ion-padding">
            <h2>Login Successful!</h2>
            <IonButton expand="full" onClick={handleSuccessModalClose}>Go to Dashboard</IonButton>
          </IonContent>
        </IonModal>

        {/* Toast message for successful login */}
        <IonToast
          isOpen={showToast}
          message="Login successful! Redirecting to the dashboard..."
          onDidDismiss={() => setShowToast(false)}
          duration={3000}
        />

        {/* Alert when any field is missing or validation fails */}
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header="Please Fill in All Fields"
          message="All fields are required. Please fill in all fields."
          buttons={[{
            text: 'OK',
            handler: handleAlertConfirm,
          }]}
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
