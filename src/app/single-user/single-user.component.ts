import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUSerComponent implements OnInit {
  userId: string;

  constructor(private route: ActivatedRoute ) {
  }


  ngOnInit() {
    //we get our parameters through subscribe after the injection 
    this.route.params.subscribe(params => {
      this.userId = params.id;
   })
  }

}
