import { Component,OnInit } from '@angular/core';
import { Comment } from './class/comment';  // commentsデータタイプインターフェース。
import { Observable } from 'rxjs'; // 正式名称「Reactive Extensions for JavaScript」
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   title = 'app';
// }
export class AppComponent implements OnInit {
  title = 'app';

  commentRef: AngularFirestoreCollection<Comment>; //Commentsはcomments.tsからエキスポートされているよ！
  comment: Observable<Comment[]>; // これも意味わからんが呪文と思っとけ！

  constructor(private db: AngularFirestore) {
    this.commentRef = this.db.collection<Comment>('comment');
    this.comment = this.commentRef.valueChanges();
   }

   ngOnInit() {
  }

}