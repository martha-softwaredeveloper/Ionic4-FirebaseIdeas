import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IdeaService, Idea } from 'src/app/services/idea.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-idea-details',
  templateUrl: './idea-details.page.html',
  styleUrls: ['./idea-details.page.scss'],
})
export class IdeaDetailsPage implements OnInit {

  idea: Idea = {
    name: '',
    notes: ''
  };

  constructor(private activateRoute: ActivatedRoute, private ideaService: IdeaService,
    private toastCtrl: ToastController, private router: Router) { }

  ngOnInit() {
    let id = this.activateRoute.snapshot.paramMap.get('id');
    if (id) {
      this.ideaService.getIdea(id).subscribe(idea => {
        this.idea = idea;
      });
    }
  }

  addIdea() {
    this.ideaService.addIdea(this.idea).then( () => {
      this.router.navigateByUrl('/');
      this.showToast('Idea added');
    })
  }

  updateIdea() {
    this.ideaService.updateIdea(this.idea).then( () => {
      this.showToast('Idea updated');
    }, err => {
      this.showToast('There was a problem updating your idea :(');
    });
  }
  deleteIdea() {
    this.ideaService.deleteIdea(this.idea.id).then( () => {
      this.router.navigateByUrl('/'); 
      this.showToast('Idea deleted');
    }, err => {
      this.showToast('There was a problem deleting your idea :(');
    });
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }
}
