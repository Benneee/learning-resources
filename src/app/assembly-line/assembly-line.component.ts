import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-assembly-line',
  templateUrl: './assembly-line.component.html',
  styleUrls: ['./assembly-line.component.css'],
})
export class AssemblyLineComponent implements OnInit {
  @Input() stages!: readonly string[];
  entryForm!: FormGroup;
  stagesCollection!: Map<string, number>[];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    this.createStagesCollection();
  }

  createForm() {
    this.entryForm = this.fb.group({
      entry: [''],
    });
  }

  createStagesCollection() {
    this.stagesCollection = Array.from(
      this.stages,
      () => new Map<string, number>()
    );
  }

  submitEntry() {
    const { entry } = this.entryForm.value;
    this.stagesCollection[0]?.set(entry, 0);
    this.entryForm.reset();
  }

  moveToStage(entry: string, currentStage: number, direction = '') {
    const stage = direction === 'next' ? currentStage + 1 : currentStage - 1;
    this.stagesCollection[currentStage]?.delete(entry);
    this.stagesCollection[stage]?.set(entry, stage);
  }

  handleEvent(event: any, entry: any) {
    switch (event.type) {
      case 'click':
      case 'contextmenu':
        event.preventDefault();
        const direction = event.type === 'click' ? 'next' : '';
        this.moveToStage(entry.key, entry.value, direction);
        break;
    }
  }
}
