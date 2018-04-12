
myApp.controller('LandingController',['alertify', '$scope', function(alertify, $scope) {

  const self = this;

  // defining alertify options
  alertify.delay(5000);
  alertify.logPosition('top right');

  // gallary images w/info
  self.gallaryInfo = [
    {
      id: 1,
      image: './assets/images/gallary/1.jpg',
      tooltip: 'Three thread tiger wrap, 5" cork grip'
    },
    {
      id: 2,
      image: './assets/images/gallary/2.jpg',
      tooltip: 'Three thread tiger wrap, split cork grip'
    },
    {
      id: 3,
      image: './assets/images/gallary/3.jpg',
      tooltip: 'Four thread tiger, 6`6" RodGeeks C266MLXF'
    },
    {
      id: 4,
      image: './assets/images/gallary/4.jpg',
      tooltip: 'Fully closed off wrap, 5" 3D printed grip'
    },
    {
      id: 5,
      image: './assets/images/gallary/5.jpg',
      tooltip: 'Three thread tiger wrap, White camo hydrodipped noodle blank, 3" cork grip'
    },
    {
      id: 6,
      image: './assets/images/gallary/6.jpg',
      tooltip: 'Three thread tiger, 6`6" RodGeeks C266MLXF'
    },
    {
      id: 7,
      image: './assets/images/gallary/7.jpg',
      tooltip: 'Three thread tiger wrap, Orange camo hydrodipped noodle blank, 3" cork grip'
    },
    {
      id: 8,
      image: './assets/images/gallary/8.jpg',
      tooltip: 'Razor pink spiral wrap'
    },
    {
      id: 9,
      image: './assets/images/gallary/9.jpg',
      tooltip: 'Green Bay Packers razor spiral wrap'
    },
    {
      id: 10,
      image: './assets/images/gallary/10.jpg',
      tooltip: 'Open water tiger wrapped rods'
    },
    {
      id: 11,
      image: './assets/images/gallary/11.jpg',
      tooltip: '3 matching MN Vikings tiger wrapped noodle rods'
    },
    {
      id: 12,
      image: './assets/images/gallary/12.jpg',
      tooltip: 'Four thread tiger with one off custom modlded fiberglass grip'
    }
  ];



}]); // end myAPP.controller
