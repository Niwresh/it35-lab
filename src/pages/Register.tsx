import React, { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonInput,
  IonInputPasswordToggle,
  IonPage,
  IonModal,
  IonText,
  IonCard,
  IonCardContent,
  IonAvatar,
  IonAlert,
  IonLoading,
  IonTitle,
  useIonRouter,
} from '@ionic/react';
import { supabase } from '../utils/supabaseClients';
import bcrypt from 'bcryptjs';

const Register: React.FC = () => {
  const router = useIonRouter();

  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const doRegister = async () => {
    setIsLoading(true);
    

    if (!username || !firstName || !lastName || !email || !password || !confirmPassword) {
      setAlertMessage('Please fill in all fields.');
      setShowAlert(true);
      setIsLoading(false);
      return;
    }

    if (!email.endsWith('@nbsc.edu.ph')) {
      setAlertMessage('Only @nbsc.edu.ph emails are allowed.');
      setShowAlert(true);
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setAlertMessage('Passwords do not match.');
      setShowAlert(true);
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw new Error(error.message);

      const hashedPassword = await bcrypt.hash(password, 10);
      await supabase.from('users').insert([
        {
          username,
          user_email: email,
          user_firstname: firstName,
          user_lastname: lastName,
          user_password: hashedPassword,
        },
      ]);

      setShowSuccessModal(true);
      setIsLoading(false);
    } catch (err) {
      setAlertMessage(err instanceof Error ? err.message : 'An error occurred.');
      setShowAlert(true);
      setIsLoading(false);
    }
  };

  const goToLogin = () => {
    router.push('/it35-lab', 'forward', 'replace');
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">

        {/* Avatar */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <IonAvatar style={{ width: '150px', height: '150px' }}>
            <img
              src="https://i.pinimg.com/originals/22/e6/cc/22e6cc48795a2c55e7b8eed39d0c5034.gif"
              alt="Avatar"
            />
          </IonAvatar>
        </div>

        {/* Card Form */}
        <IonCard style={{ maxWidth: '500px', margin: '20px auto' }}>
          <IonCardContent>

            <div style={{ textAlign: 'center', marginBottom: '15px' }}>
              <IonText style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>USER REGISTRATION</IonText>
            </div>

            <IonInput
              label="Username"
              labelPlacement="floating"
              fill="outline"
              placeholder="Enter a unique username"
              value={username}
              onIonChange={(e) => setUsername(e.detail.value!)}
            />
            <IonInput
              label="First Name"
              labelPlacement="floating"
              fill="outline"
              placeholder="Enter your first name"
              value={firstName}
              onIonChange={(e) => setFirstName(e.detail.value!)}
              style={{ marginTop: '15px' }}
            />
            <IonInput
              label="Last Name"
              labelPlacement="floating"
              fill="outline"
              placeholder="Enter your last name"
              value={lastName}
              onIonChange={(e) => setLastName(e.detail.value!)}
              style={{ marginTop: '15px' }}
            />
            <IonInput
              label="Email"
              labelPlacement="floating"
              fill="outline"
              type="email"
              placeholder="Enter your email"
              value={email}
              onIonChange={(e) => setEmail(e.detail.value!)}
              style={{ marginTop: '15px' }}
            />
            <IonInput
              label="Password"
              labelPlacement="floating"
              fill="outline"
              type="password"
              placeholder="Enter password"
              value={password}
              onIonChange={(e) => setPassword(e.detail.value!)}
              style={{ marginTop: '15px' }}
            >
              <IonInputPasswordToggle slot="end" />
            </IonInput>
            <IonInput
              label="Confirm Password"
              labelPlacement="floating"
              fill="outline"
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onIonChange={(e) => setConfirmPassword(e.detail.value!)}
              style={{ marginTop: '15px' }}
            >
              <IonInputPasswordToggle slot="end" />
            </IonInput>

            <div style={{ marginTop: '20px' }}>
  <IonButton expand="block" color="danger" onClick={doRegister}>
    Register
  </IonButton>
  <IonButton expand="block" fill="outline" color="danger" onClick={goToLogin}>
    Already have an account? Sign In
  </IonButton>
</div>


          </IonCardContent>
        </IonCard>

        {/* Loading Spinner */}
        <IonLoading
          isOpen={isLoading}
          message="Please wait..."
          spinner="circles"
          duration={0}
        />

        {/* Alerts */}
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header="Error"
          message={alertMessage}
          buttons={[{ text: 'OK', handler: () => setShowAlert(false) }]}
        />

        {/* Success Modal */}
        <IonModal isOpen={showSuccessModal} onDidDismiss={() => setShowSuccessModal(false)}>
          <IonContent className="ion-padding ion-text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <IonTitle>🎉 Registration Successful</IonTitle>
            <IonText>Your account has been created. Check your email.</IonText>
            <IonButton expand="block" onClick={goToLogin} style={{ marginTop: '20px' }}>Go to Login</IonButton>
          </IonContent>
        </IonModal>

      </IonContent>
    </IonPage>
  );
};

export default Register;
