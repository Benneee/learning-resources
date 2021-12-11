import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-resource',
  templateUrl: './add-new-resource.component.html',
  styleUrls: ['./add-new-resource.component.css'],
})
export class AddNewResourceComponent implements OnInit {
  resourceForm!: FormGroup;
  errorMessageAvailable = false;
  @Output() newResource = new EventEmitter();
  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.createResourceForm();
  }

  createResourceForm() {
    this.resourceForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      link: ['', Validators.required],
    });
  }

  addNewResource() {
    if (this.resourceForm.invalid) {
      this.errorMessageAvailable = true;
      return;
    }

    let resource = this.resourceForm.value;
    resource['id'] = new Date().toISOString();
    this.newResource.emit(resource);
  }
}
