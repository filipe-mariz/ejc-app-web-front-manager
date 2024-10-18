import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import axios from 'axios'

@Component({
  selector: 'app-worker-enrollment',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './worker-enrollment.component.html',
  styleUrl: './worker-enrollment.component.scss'
})
export class WorkerEnrollmentComponent {
  public login: string | undefined;
  public password: string | undefined;

  public async sendLoginData() {
    try {
      const response = await axios.post('http://localhost:3000/health', {
        login: this.login,
        password: this.password
      });

      console.log('response', response)
      return response;
    } catch (error) {
      throw new Error('AxiosError')
    }
  }
}
