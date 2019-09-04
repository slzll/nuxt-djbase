// 多人互评
export const getCommentDataOne = () => [
  {
    title: '政治素质',
    children: [
      {
        title: '政治方向',
        subTitle: '坚持党的路线、方针、政策，积极贯彻企业发展战略，主动落实上级工作部署',
        id: 't-1-1',
        selectedValue: 0,
        score: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
      },
      {
        title: '企业党建',
        subTitle: '充分发挥党组织的政治核心作用，加强基层党组织建设，弘扬企业文化',
        id: 't-1-2',
        selectedValue: 0,
        score: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
      },
      {
        title: '社会责任',
        subTitle: '模范遵守法律法规，确保安全质量环保，处理好企业与社会的关系，实现和谐发展',
        id: 't-1-3',
        selectedValue: 0,
        score: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
      }
    ]
  },
  {
    title: '经营业绩',
    children: [
      {
        title: '经济效益',
        subTitle: '发展业绩突出，经营状况和经济效益良好，收益指标在同行业中位于前列',
        id: 't-2-1',
        selectedValue: 0,
        score: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
      },
      {
        title: '可持续发展',
        subTitle: '注重战略引领，优化业务结构，核心竞争力强，发展前景广阔，可持续发展能力强',
        id: 't-2-2',
        selectedValue: 0,
        score: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
      },
      {
        title: '创新成效',
        subTitle: '深化企业改革，加强适应性组织建设；注重科技创新、管理创新、商业模式创新',
        id: 't-2-3',
        selectedValue: 0,
        score: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
      },
      {
        title: '科学管理',
        subTitle: '决策机制健全，执行能力强；风险管控机制和安全生产制度健全；有效处理突发事件',
        id: 't-2-4',
        selectedValue: 0,
        score: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
      }
    ]
  },
  {
    title: '团结合作',
    children: [
      {
        title: '发扬民主',
        subTitle: '坚持民主集中制和“三重一大”决策制度；主要领导能听取不同意见；班子氛围良好',
        id: 't-3-1',
        selectedValue: 0,
        score: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
      },
      {
        title: '整体合力',
        subTitle: '班子坚强有力，统揽全局；党政正职相互支持配合，副职作用有效发挥，形成合力',
        id: 't-3-2',
        selectedValue: 0,
        score: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
      },
      {
        title: '运行机制',
        subTitle: '班子分工合理、职责明确、各负其责，工作制度和议事规则健全，工作效率高',
        id: 't-3-3',
        selectedValue: 0,
        score: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
      }
    ]
  },
  {
    title: '作风形象',
    children: [
      {
        title: '联系群众',
        subTitle: '贯彻中央八项规定，坚决反对“四风”；坚持以人为本，切实维护职工群众合法权益',
        id: 't-4-1',
        selectedValue: 0,
        score: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
      },
      {
        title: '选人用人',
        subTitle: '落实党管干部原则和用人标准，坚持正确用人导向，公道正派、知人善任、人尽其才，统筹好各类人才队伍建设',
        id: 't-4-2',
        selectedValue: 0,
        score: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
      },
      {
        title: '廉洁自律',
        subTitle: '健全廉洁从业各项规定，落实党风廉政建设“一岗双责”，班子成员无违法违纪现象',
        id: 't-4-3',
        selectedValue: 0,
        score: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
      }
    ]
  }
]
// 上级对支部评
export const getCommentDataTwo = () => [
  {
    title: '贯彻党的路线、方针、政策，发挥政治核心作用的状况',
    id: 't-1',
    selectedOption: '',
    options: ['A', 'B', 'C', 'D']
  },
  {
    title: '党政班子贯彻民主集中制原则，团结、协调的状况',
    id: 't-2',
    selectedOption: '',
    options: ['A', 'B', 'C', 'D']
  },
  {
    title: '围绕生产经营中心，开展思想政治工作和精神文明建设的状况',
    id: 't-3',
    selectedOption: '',
    options: ['A', 'B', 'C', 'D']
  },
  {
    title: '企业党风廉政建设的状况',
    id: 't-4',
    selectedOption: '',
    options: ['A', 'B', 'C', 'D']
  },
  {
    title: '正确处理改革、发展、稳定三者关系的状况',
    id: 't-5',
    selectedOption: '',
    options: ['A', 'B', 'C', 'D']
  },
  {
    title: '企业文化建设和企业凝聚力的状况',
    id: 't-6',
    selectedOption: '',
    options: ['A', 'B', 'C', 'D']
  },
  {
    title: '求真务实、开拓创新的状况',
    id: 't-7',
    selectedOption: '',
    options: ['A', 'B', 'C', 'D']
  },
  {
    title: '党员队伍日常教育管理的状况',
    id: 't-8',
    selectedOption: '',
    options: ['A', 'B', 'C', 'D']
  },
  {
    title: '领导班子和干部队伍建设的状况',
    id: 't-9',
    selectedOption: '',
    options: ['A', 'B', 'C', 'D']
  },
  {
    title: '基层组织和党员发挥战斗堡垒和先锋模范作用的状况',
    id: 't-10',
    selectedOption: '',
    options: ['A', 'B', 'C', 'D']
  },
  {
    title: '工作绩效的综合评价',
    id: 't-11',
    selectedOption: '',
    options: ['A', 'B', 'C', 'D']
  }
]
// 上级对党员评
export const getCommentDataThree = () => [
  {
    title: '靠得住',
    children: [
      {
        title: '政治素质',
        id: 't-1-1',
        selectedValue: 0,
        score: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
      },
      {
        title: '忠诚企业',
        id: 't-1-2',
        selectedValue: 0,
        score: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
      },
      {
        title: '廉洁自律',
        id: 't-1-3',
        selectedValue: 0,
        score: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
      }
    ]
  },
  {
    title: '能干事',
    children: [
      {
        title: '履职绩效',
        id: 't-2-1',
        selectedValue: 0,
        score: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
      },
      {
        title: '内控管理',
        id: 't-2-2',
        selectedValue: 0,
        score: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
      },
      {
        title: '改革创新',
        id: 't-2-3',
        selectedValue: 0,
        score: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
      }
    ]
  },
  {
    title: '在状态',
    children: [
      {
        title: '战略认同',
        id: 't-3-1',
        selectedValue: 0,
        score: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
      },
      {
        title: '担当意思',
        id: 't-3-2',
        selectedValue: 0,
        score: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
      },
      {
        title: '身心健康',
        id: 't-3-3',
        selectedValue: 0,
        score: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
      }
    ]
  },
  {
    title: '善合作',
    children: [
      {
        title: '团结协作',
        id: 't-4-1',
        selectedValue: 0,
        score: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
      },
      {
        title: '团队建设',
        id: 't-4-2',
        selectedValue: 0,
        score: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
      }
    ]
  },
  {
    title: '综合判断',
    id: 't-5',
    selectedValue: 0,
    score: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
  }
]
