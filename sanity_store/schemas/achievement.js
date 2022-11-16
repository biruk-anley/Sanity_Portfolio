export default{
 name:'Achievements',
 title:'Achievement',
 type:'document',
 fields:[{
    name:'title',
    title:'Title',
    type:'string',
 },
 {
    name:'description',
    title: 'Description',
    type: 'string',
 },
 {
    name: 'AchievemntLink',
    title: 'Achievement LInk',
    type: 'string',
  },
  {
    name: 'imgUrl',
    title: 'ImageUrl',
    type: 'image',
    options: {
      hotspot: true,
    },
  },
  {
    name: 'tags',
    title: 'Tags',
   type:'array',
   of: [
     {
       name:'tag',
       title:'Tag',
       type:'string'
     }
   ]
  },

]

}