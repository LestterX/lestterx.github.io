"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SocialMediaLinks {
    constructor() {
        this.gitHubIMG = document.querySelector('.github');
        this.linkedinIMG = document.querySelector('.linkedin');
        this.instagramIMG = document.querySelector('.instagram');
    }
    getGitHub() {
        return 'https://github.com/LestterX';
    }
    getLinkedIn() {
        return '#';
    }
    getInstagram() {
        return '#';
    }
}
exports.default = SocialMediaLinks;
