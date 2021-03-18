import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Pasarela'
  formGroup: FormGroup

 // constructor (private formBuilder: FormBuilder) {}
  
  ngOnInit () {
    /*LLAVE_PUBLICA_DEL_COMERCIO = 'pub_test_X0zDA9xoKdePzhd8a0x9HAez7HgGO2fH'
  MONEDA='COP'
  MONTO_EN_CENTAVOS=7890000
  REFERENCIA_DE_PAGO='37DNKF84S92N1S'this.formGroup = this.formBuilder.group({
      LLAVE_PUBLICA_DEL_COMERCIO: new FormControl('', [Validators.required]),
      MONTO_EN_CENTAVOS: new FormControl('', [Validators.required]),
      REFERENCIA_DE_PAGO: new FormControl('', [Validators.required]),
      URL_REDIRECCION: new FormControl('', [Validators.required]),
      MONEDA: new FormControl('', [Validators.required])
    })
    this.formGroup
      .get('LLAVE_PUBLICA_DEL_COMERCIO')
      .setValue('pub_test_X0zDA9xoKdePzhd8a0x9HAez7HgGO2fH')
    this.formGroup.get('MONEDA').setValue('COP')
    this.formGroup.get('MONTO_EN_CENTAVOS').setValue(7890000)
    this.formGroup.get('REFERENCIA_DE_PAGO').setValue('37DNKF84S92N1S')
    this.formGroup
      .get('URL_REDIRECCION')
      .setValue('https://transaction-redirect.wompi.co/check')
  */}
}
