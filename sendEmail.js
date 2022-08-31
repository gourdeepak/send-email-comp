import { LightningElement, api, wire, track } from 'lwc';
import sendEmail from '@salesforce/apex/EmailHandler.sendEmail';

export default class SendEmail extends LightningElement {
    @track toemail = '';
    @track ccemail = '';
    @track emailSubject = '';
    @track emailBody;
    @track  ishuman = false;
 
    handleChange(event) {
        if (event.target.label === 'To') {
            this.toemail = event.target.value;
        }
        if(event.target.label === 'CC'){
            this.ccemail = event.target.value;
        }

    }
    handleSubjectChange(event){
        this.emailSubject = event.target.value;
    }
    handleBodyChange(event){
        this.emailBody = event.target.value;
    }
    sendEmailHandler(event) {
        // send mail
        console.log("Sending email to", this.email);
        sendEmail({ toAddress: this.toemail, ccAddress :this.ccemail,  subject: this.emailSubject, body: this.emailBody});
    }
}