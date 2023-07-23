export default class SocialMediaLinks {
  public gitHubIMG: any;
  public linkedinIMG: any;
  public instagramIMG: any;
  constructor(){
    this.gitHubIMG = document.querySelector('.github');
    this.linkedinIMG = document.querySelector('.linkedin');
    this.instagramIMG = document.querySelector('.instagram');
  }
  public getGitHub(): string{
    return 'https://github.com/LestterX'
  }
  public getLinkedIn(): string{
    return '#'
  }
  public getInstagram(): string{
    return '#'
  }
}
