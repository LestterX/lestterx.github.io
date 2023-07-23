var SocialMediaLinks = /** @class */ (function () {
    function SocialMediaLinks() {
        this.gitHubIMG = document.querySelector('.github');
        this.linkedinIMG = document.querySelector('.linkedin');
        this.instagramIMG = document.querySelector('.instagram');
    }
    SocialMediaLinks.prototype.getGitHub = function () {
        return 'https://github.com/LestterX';
    };
    SocialMediaLinks.prototype.getLinkedIn = function () {
        return '#';
    };
    SocialMediaLinks.prototype.getInstagram = function () {
        return '#';
    };
    return SocialMediaLinks;
}());
export default SocialMediaLinks;
