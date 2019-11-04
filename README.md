# Ionic 4 - Firebase 7 Ideas Note-Taking App

I followed Simon Grimm's Tutorial: [How to Build An Ionic 4 App with Firebase and AngularFire 5](https://www.youtube.com/watch?v=SHRjQA3lvNk)

<img src="https://github.com/martha-softwaredeveloper/Ionic4-FirebaseIdeas/blob/master/src/assets/screenshot.png" width="500"/>

## App Configuration

ionic start appName blank —type=angular
npm install firebase @angular/fire

ionic g page pages/idea-list
ionic g page pages/idea-details
ionic g service services/idea

Remove the home folder

## Routing Setup

1. At environment.ts, add firebase configuration
2. At app.module.ts, import AngularFireModule, AngularFirestoreModule and environment
3. At app-routing.module.ts, replace home with idea-list and create two paths for idea-details, one to create a new idea and the other one to load the idea by its id

## Service Setup

At idea.service.ts, pasted code from blog @6:12
 a) Set Idea's interface and references to firebase data
 b) To get document ID, we must use Pipe and Map
 c) We could call snapshotchanges or value changes
 d) Declare other funcs
 f) To get single ideas, take(1) takes 1 value from the observables b/c we don't need real-time live update binding

 ##  Ideas List Page

1. At idea-list.page.ts, import IdeaService and call getIdeas func in ngOnInit
2. At idea-list.page.html, add fab button, list of items and router link

## Idea Details Page

At idea-details.page.ts:
 a) import ActivatedRoute, IdeaService, ToastMessage and Router
 b) Create idea variable with Idea type
 c) Create funcs to CRUD and toast message

At idea-details.page.html:
 a) add idea as items for name and notes.
 b) Add footer to CRUD

 ## Author
 
 Simon Grimm