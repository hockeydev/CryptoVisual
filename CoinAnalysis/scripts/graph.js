// Set Camera Distance and Graph settings
let isRotationActive = true;
const distance = 10000;
const Graph = ForceGraph3D({ controlType: 'orbit' })(document.getElementById('3d-graph'))
  .jsonUrl(['../data/crypto.json'])
  .cooldownTicks(100)
  .nodeAutoColorBy('name')
  .nodeRelSize(1)
  .nodeOpacity(1)
  .linkOpacity(0.50)
  .backgroundColor('black')

  // Animate camera and create movement / Pause rotation fucntion
     let angle = 0;
       setInterval(() => {
         if (isRotationActive) {
           Graph.cameraPosition({
             x: distance * Math.sin(angle),
             z: distance * Math.cos(angle)
           });
           angle += Math.PI / 300;
         }
       }, 10);

        // Toggle Rotation DOM Settings
        document.getElementById('rotationToggle').addEventListener('click', event => {
            isRotationActive = !isRotationActive;
            event.target.innerHTML = `${(isRotationActive ? 'Pause' : 'Resume')} Rotation`;
          });


        // create link controls and GUI settings
        const linkForce = Graph
          .d3Force('link')
          .distance(link => link.color ? settings.xDistance : settings.yDistance);

        //Define GUI
        const Settings = function() {
          this.xDistance = 250;
          this.yDistance = 250;
        };

        const settings = new Settings();
        const gui = new dat.GUI();

        const controllerOne = gui.add(settings, 'xDistance', 0, 1000);
        const controllerTwo = gui.add(settings, 'yDistance', 0, 1000);

        controllerOne.onChange(updateLinkDistance);
        controllerTwo.onChange(updateLinkDistance);

        function updateLinkDistance() {
          linkForce.distance(link => link.color ? settings.xDistance : settings.yDistance);
          Graph.numDimensions(3); // Re-heat simulation
        }

// Reset graph to fit to canvas once loaded
// Graph.onEngineStop(() => Graph.zoomToFit(0, 400));
