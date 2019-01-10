var Likes = /** @class */ (function () {
    function Likes(userIds, activeId, count) {
        this.userIds = userIds;
        this.activeId = activeId;
        this.count = count;
    }
    Likes.prototype.toggleLikes = function () {
        for (var i = 0; i < this.userIds.length; i++) {
            if (this.userIds[i] == this.activeId) {
                this.userIds.splice(i, 1);
            }
            else {
                this.userIds.push(this.activeId);
            }
        }
    };
    Likes.prototype.log = function () { };
    return Likes;
}());
+this.userIds.length;
;
var startArray = [22334, 11225, 65558, 20202];
var liker = new Likes(startArray, 99999);
liker.recount();
