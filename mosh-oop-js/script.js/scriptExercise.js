// stopWatch exercise
function stopWatch() {
  let startWatch,
    endTime,
    running,
    duration = 0; // this are private variables startWatch, endTime,running,duration.

  this.start = function () {
    if (running) 
      throw new Error("stopWatch has already started.");
        //  or set to this
    running = true;  
    
    startTime = new Date();
  };

  this.stop = function () {
    if (!running)
      throw new Error('stopWatch has not started.');

      running = false;

      endTime = new Date(); 

    // then we calculate second between endTime and startTime
    const second = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += second;
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

// we have three methods start,stop and reset

// and we have a read only property called duration
// we have a getter which returns duration which is a local variable





// function stoptWatch(){
//   let startWatch,
//   endTime,
//   running,
//   duration = 0;

//   this.start = function(){
//     if (running)
//      throw new Error('stopwatch is already running');
    
//     running = true;

//     startTime = new Date();
//   };
//   this.stop = function(){
//     if (!running)
//      throw new Error('stopwatch has not started');
    
//     running = false;

//     endTime = new Date();

//     const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
//     duration += seconds;
//   };
//   this.reset = function(){
//     startWatch = null;
//     endTime = null;
//     running = false;
//     duration = 0;
//   };

//   Object.defineProperty(this, "duration", {
//     get: function(){
//       return duration;
//     }
//   });
// }