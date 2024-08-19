import { Contact } from './Contact'
import { ContactFooter } from './ContactFotter'
import { Form } from './Form'
import { Grid } from './Grid'
import { NavBars } from '../NavBar/NavBars'
import React from 'react'

export function MainContact() {
  return (
    <div>
    
      <Contact></Contact>
      <Form></Form>
      <Grid></Grid>
      <ContactFooter></ContactFooter>
    </div>
  )
}

export default MainContact
