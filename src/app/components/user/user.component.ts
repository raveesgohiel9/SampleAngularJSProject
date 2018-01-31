import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  posts:Posts[];
  isEdit:boolean = false;

  constructor(private dataservice:DataService) { 

    console.log("Constructor ran");
  }

  ngOnInit() {

    
  
    console.log("Ng init ran!");
    this.name = "John doe";
    this.age = 30;
    this.email="ravi_gohil999@yahoo.com";
    this.address = {
      street : '23 Alice Springs',
      city : 'Brampton',
      state: 'Ontario'
    }
    this.hobbies = ['Write code', 'Watch movies','Listen to Music'];

    this.dataservice.getPosts().subscribe((posts)=>{
      console.log(posts);
      this.posts = posts;
    });
  }

  onClick()
  {
    console.log("I was clicked!");
    this.name="Ravi Gohil";

    this.hobbies.push("Watching documentaries");
  }

  addHobby(hobby)
  {
    console.log("Pushing hobby "+hobby);
    this.hobbies.push(hobby);
    return false;
  }

  deleteHobby(hobby)
  {
    console.log(hobby);
    for(let i = 0;i < this.hobbies.length;i++)
    {
        if(this.hobbies[i] == hobby)
        {
          this.hobbies.splice(i,1);
        }
    }
  }

toggleEdit(){
  this.isEdit = !this.isEdit;
}

}
interface Address
{
  street:string,city:string,state:string
}

interface Posts{
  userID:number;
  id:number;
  title:string;
  body:string;
}