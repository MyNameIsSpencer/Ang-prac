class Likes {
  constructor(private userIds: number[], private activeId?: number, private count?: number[]) {
  }

  toggleLikes() {
    for ( let i = 0; i < this.userIds.length; i++) {
      if (this.userIds[i] == this.activeId) {
        this.userIds.splice(i, 1);
      } else {
        this.userIds.push(this.activeId);
      }
    }
  }

  recount()
    console.log('put count here... 4 for now.. is it: ' +  this.userIds.length);
  
}

let startArray = [22334, 11225, 65558, 20202]

let liker = new Likes(startArray, 99999);
liker.recount();
