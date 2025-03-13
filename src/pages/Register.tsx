import React, { useState } from 'react';
import { 
  IonButton,
  IonContent, 
  IonInput, 
  IonItem, 
  IonTextarea, 
  IonPage, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonAlert,
  useIonRouter
} from '@ionic/react';

const Register: React.FC = () => {
  const navigation = useIonRouter();

  // State for registration form
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  // Handle registration logic
  const handleRegister = () => {
    // Check if any fields are empty
    if (!firstName || !lastName || !address || !email || !password || !confirmPassword) {
      setAlertMessage("Please fill in all fields.");
      setShowAlert(true);
      return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setAlertMessage("Passwords do not match.");
      setShowAlert(true);
      return;
    }

    // Handle successful registration (you can add backend logic here)
    setAlertMessage("Registration successful! Redirecting to login.");
    setShowAlert(true);

    // Simulate redirecting after registration
    setTimeout(() => {
      navigation.push('/it35-lab', 'forward', 'replace');
    }, 2000); // Wait 2 seconds before redirecting
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItem>
          <IonTextarea
            label="First Name"
            labelPlacement="floating"
            fill="solid"
            placeholder="Enter your first name"
            value={firstName}
            onIonChange={(e) => setFirstName(e.detail.value!)}
          />
        </IonItem>
        <IonItem>
          <IonTextarea
            label="Last Name"
            labelPlacement="floating"
            fill="solid"
            placeholder="Enter your last name"
            value={lastName}
            onIonChange={(e) => setLastName(e.detail.value!)}
          />
        </IonItem>
        <IonItem>
          <IonTextarea
            label="Address"
            labelPlacement="floating"
            fill="solid"
            placeholder="Enter your address"
            value={address}
            onIonChange={(e) => setAddress(e.detail.value!)}
          />
        </IonItem>
        <IonItem>
          <IonInput
            label="Email"
            labelPlacement="floating"
            fill="solid"
            type="email"
            placeholder="Enter your email"
            value={email}
            onIonChange={(e) => setEmail(e.detail.value!)}
          />
        </IonItem>
        <IonItem>
          <IonInput
            label="Password"
            labelPlacement="floating"
            fill="solid"
            type="password"
            placeholder="Enter password"
            value={password}
            onIonChange={(e) => setPassword(e.detail.value!)}
          />
        </IonItem>
        <IonItem>
          <IonInput
            label="Confirm Password"
            labelPlacement="floating"
            fill="solid"
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onIonChange={(e) => setConfirmPassword(e.detail.value!)}
          />
        </IonItem>
        <IonButton onClick={handleRegister} expand="full">Register</IonButton>

        {/* Alert for showing validation or success messages */}
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={alertMessage.includes("successful") ? "Success" : "Error"}
          message={alertMessage}
          buttons={[{ text: 'OK', handler: () => setShowAlert(false) }]}
        />
      </IonContent>
    </IonPage>
  );
};

export default Register;
