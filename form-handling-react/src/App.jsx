import './App.css'
import RegistrationForm from './components/RegistrationForm'
import FormikForm from './components/formikForm'

function App() {
  return (
    <div className="App">
      <h1>User Registration</h1>

      <h2>Basic Controlled Form</h2>
      <RegistrationForm />

      <h2>Formik + Yup Form</h2>
      <FormikForm />
    </div>
  )
}

export default App
