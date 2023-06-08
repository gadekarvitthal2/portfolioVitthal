import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  projects: any = [
    {
      id: 1,
      title: 'Read data from Google spreadsheet in Angular',
      desc: '',
      livedemo: 'https://mehulk05.github.io/MyShop/#/',
      githurl: 'https://github.com/mehulk05/MyShop',
      mediumlink:
        'https://itnext.io/read-data-from-google-spreadsheet-in-angular-209ee74b6cb4',
      imgUrl: 'assets/images/z1.png',
      tech: 'Angular 10 , Google SpreadsheetApi',
    },

    {
      id: 2,
      title: 'Blog App Using MERN Stack',
      desc: '',
      livedemo: 'https://mehulk05.github.io/Blogapp-using-MERN/#/',
      githurl: 'https://github.com/mehulk05/Blogapp-using-MERN',
      mediumlink: 'https://itnext.io/blog-app-using-mern-stack-b0b4d69d7ea1',
      imgUrl: 'assets/images/z26.png',
      tech: 'Angular, Node, MongoDB, Express',
    },

    {
      id: 3,
      title: 'CRUD operation using MEAN stack',
      desc: '',
      livedemo: 'https://mehulk05.github.io/Blog-using-mean/#/',
      githurl: 'https://github.com/mehulk05/Blog-using-mean',
      mediumlink:
        'https://itnext.io/crud-operation-using-mean-stack-7dfa2f51ec8c',
      imgUrl: 'assets/images/z27.png',
      tech: 'Angular 10, Node, MongoDB, Express',
    },

    {
      id: 4,
      title: 'Multiroom Chat Application in Node JS',
      desc: '',
      livedemo: 'https://chatapp-using-node.herokuapp.com/',
      githurl: 'https://github.com/mehulk05/Chat-app-using-Nodejs',
      mediumlink:
        'https://medium.com/weekly-webtips/building-a-multiroom-chat-application-in-node-js-8a8adca5acf2',
      imgUrl: 'assets/images/z23.png',
      tech: 'Node JS,Socket IO',
    },

    {
      id: 5,
      title: 'Integrate Medium Blogs on your React App',
      desc: '',
      livedemo: 'https://mehulk05.github.io/Medium-Blog-On-React-App#/',
      githurl: 'https://github.com/mehulk05/Medium-Blog-On-React-App',
      mediumlink:
        'https://javascript.plainenglish.io/how-to-add-medium-blogs-on-your-react-app-a3898a729aad',
      imgUrl: 'assets/images/z4.png',
      tech: 'Angular nodeJS',
    },

    {
      id: 6,
      title: 'News App using Angular (Parsing XML to JSON)',
      desc: '',
      livedemo: 'https://mehulk05.github.io/NewsApp-using-React',
      githurl: 'https://github.com/mehulk05/NewsApp-using-React',
      mediumlink: 'https://codeburst.io/news-app-using-reactjs-f9752d7ab6ce',
      imgUrl: 'assets/images/z24.png',
      tech: 'Angular, XMl to JSON',
    },

    {
      id: 7,
      title: 'Medium-Like Blog App Using Angular 9 and Firebase',
      desc: '',
      livedemo: 'https://mehulk05.github.io/Blog-Book/',
      githurl: 'https://github.com/mehulk05/Blog-Book',
      mediumlink:
        'https://codeburst.io/blogging-app-using-angular-9-and-firebase-98e36168d850',
      imgUrl: 'assets/images/z21.png',
      tech: 'HTML, Bootstrap, CSS, Angular-9, Firebase',
    },

    {
      id: 8,
      title: 'COVID 19 Tracker (Statistics) app Using Angularr',
      desc: '',
      livedemo: 'https://mehulk05.github.io/COVOID-19/',
      githurl: 'https://github.com/mehulk05/COVOID-19',
      mediumlink:
        'https://codeburst.io/covoid-19-tracker-statistics-app-using-angular-2358347b3d1f',
      imgUrl: 'assets/images/z2.png',
      tech: 'Angular 10 ,Bootstrap,Javascript',
    },

    {
      id: 9,
      title: 'Weather App with Angular ',
      desc: '',
      livedemo: 'https://mehulk05.github.io/React-Weather/',
      githurl: 'https://github.com/mehulk05/React-Weather-App',
      mediumlink:
        'https://medium.com/analytics-vidhya/weather-app-with-react-adaa7268bbdb',
      imgUrl: 'assets/images/z9.png',
      tech: 'React, Open MAp Api',
    },

    {
      id: 10,
      title: 'Spring Boot + Angular 8 CRUD Example',
      desc: '',
      livedemo:
        'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
      githurl: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
      mediumlink:
        'https://medium.com/analytics-vidhya/spring-boot-angular-8-crud-example-8aeafd47b54',
      imgUrl: 'assets/images/z28.png',
      tech: 'Angular8, Java ,Hibernate',
    },
    {
      id: 12,
      title: 'Matrimonial Website',
      desc: '',
      livedemo: 'https://mehulkothari05.medium.com/',
      githurl: 'https://github.com/mehulk05/Matrimonial-Website.git',
      mediumlink:
        'https://mehulkothari05.medium.com/matrimonial-website-9cd5247f477d',
      imgUrl: 'assets/images/z14.png',
      tech: 'HTML, CSS, Bootstrap, Jquery',
    },
    {
      id: 13,
      title: 'Volaris Next Generation Website',
      desc: '',
      livedemo: 'https://mehulkothari05.medium.com/',
      githurl: 'https://github.com/mehulk05/Matrimonial-Website.git',
      mediumlink:
        'https://mehulkothari05.medium.com/matrimonial-website-9cd5247f477d',
      imgUrl: 'assets/images/volaris.jpg',
      tech: 'HTML, CSS, Bootstrap, Angular Material',
    },
    {
      id: 13,
      title: 'Lottosocial website',
      desc: '',
      livedemo: 'https://mehulkothari05.medium.com/',
      githurl: 'https://github.com/mehulk05/Matrimonial-Website.git',
      mediumlink:
        'https://mehulkothari05.medium.com/matrimonial-website-9cd5247f477d',
      imgUrl: 'assets/images/lottosocial.jpg',
      tech: 'HTML, CSS, Bootstrap, Angular Material',
    },
  ];
  about2 = `Software Developer with 1+ years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Angular 2+ All versions UI with Responsive Designs .
  Have good understanding of HTML, CSS, Javascript, Angular, Bootstrap, Firebase, SQL, Git`;

  about =
    'Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do.';
  resumeurl =
    'https://drive.google.com/file/d/1LQ3fpNrxNiYnxGx6lSgcnnje23INessg/view?usp=sharing';

  socialMediaLinks = {
    facebook: 'https://www.facebook.com/vitthal.gadekar.39',
    instagram: 'https://www.instagram.com/vitthalgadekar/',
    linkedIn: 'https://www.linkedin.com/in/vitthal-gadekar669/',
    github: 'https://github.com/gadekarvitthal2',
    twitter: 'https://twitter.com/vitthaldgadeka1',
  };

  skillsData: any = [
    {
      id: '1',
      skill: 'ANGULAR 2+',
      progress: '85%',
    },
    {
      id: '2',
      skill: 'HTML',
      progress: '80%',
    },
    {
      id: '3',
      skill: 'CSS',
      progress: '80%',
    },
    {
      id: '4',
      skill: 'JAVASCRIPT',
      progress: '85%',
    },
    {
      id: '5',
      skill: 'SQL , MYSQL, FIREBASE',
      progress: '75%',
    },
    {
      id: '6',
      skill: 'GIT',
      progress: '75%',
    },
  ];

  educationData: any = [
    {
      id: '1',
      from_to_year: '2016 - 2021',
      education: "Bachelor's Degree",
      stream: 'Bachelor of Engineering',
      info: `Savitribai Phule University Pune and ranks 10th in Maharashtra
              Completed B.E in Computer Engineering with 64%.`,
      institution: 'Sinhgad Institute of Technology, Lonavala',
    },
    {
      id: '2',
      from_to_year: '2012 - 2015',
      education: 'Diploma in Computer Engineering',
      stream: 'Computer Engineering',
      institution: 'Government Politechnic Collage Jalna',
      info: `This is Three year computer Engineering Polytechnic Diploma Course which includes all computer
      Engineering subjects`,
    },
  ];
  exprienceData: any = [
    {
      id: 3,
      company: 'Tagline Infotech LLP',
      location: 'Surat',
      timeline: 'Feb 2022 to may 2023',
      role: 'Angular Developer',
      work: `Technologies : Angular , Node JS , MongoDB .
      Worked on the web application built in Angular for different business and Campaigns .
      Contributed on developing the admin dashboard with different charts and insights for the application.`,
    },
    {
      id: 1,
      company: 'JSM Infosys India',
      location: 'Pune',
      timeline: 'May 2022 - Dec 2022',
      role: 'Softwate Developer Trainee',
      work: `Technologies : Angular , JavaSpring Boot , SQL, Firebase .

  Project 1 : Worked on uploading two excel sheets with bulk of data and finding the matches for each business .

  Project 2 : Worked on indexing the search results inside the application with bulk of data using Apache Solr and configuring the server with cron jobs and shell scripts .

  Worked on ranking the search results based on various criteria,features and delivering the accurate results based on generated scores.
  `,
    },
  ];

  extraCircularInfo: any = [
    {
      id: 1,
      title: 'Github',
      description: '',
      img: 'assets/images/githubImg.jpg',
      url: 'https://github.com/gadekarvitthal2',
    },
    {
      id: 1,
      title: 'Freelancing',
      description: '',
      img: 'assets/images/upworkProfile.jpg',
      url: 'https://www.upwork.com/freelancers/~015b2fdca5c419b98d?viewMode=1',
    },
  ];
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }
}
