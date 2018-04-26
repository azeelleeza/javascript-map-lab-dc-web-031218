const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];

const sortedRobots = robots.map((x)=>
  {
    return Object.assign(
      {},
        {
          name:x.name,
          alliance: (()=>
          {if (knownDecepticons.includes(x.name)) {
            return  'autobot';
          } else {
            return  'decepticon';
          }})()
        }
    );
  }
);

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null }
];

const coloredZebraStripes = zebraStripes.map((x)=>
{
  return Object.assign(
    {},
      {
        width:x.width,
        color: (()=>
        {if (zebraStripes.indexOf(x)%2===0) {
          return  'black';
        } else {
          return  'white';
        }})()
      }
  );
}
);
