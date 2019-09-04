import threeSession from '~/assets/img/hq-home-three-sessions.png'
import partyPayMent from '~/assets/img/partypayment@2x.png'
import volunteerActivity from '~/assets/img/volunteeractivities@2x.png'
import dangjianInfo from '~/assets/img/dangjian_info.png'
import dangwuGuide from '~/assets/img/dangwu_guide.png'
import fenglingShow from '~/assets/img/fengling_show.png'
import Notice from '~/assets/img/home_more_notice.png'
import TopicPartyDate from '~/assets/img/topic_party_day.png'
import Organise from '~/assets/img/home_more_organise.png'
import PartyHome from '~/assets/img/home_more_partyhome.png'
import Exam from '~/assets/img/examination@2x.png'
import QRCode from '~/assets/img/home_more_erweima.png'
import ContactUs from '~/assets/img/home_more_kefu.png'
import Setting from '~/assets/img/home_more_setting.png'
import PartyFile from '~/assets/img/home_more_dangan.png'
import JoinParty from '~/assets/img/home_more_joinparty.png'

export const iconList = [
  {
    title: '新闻资讯',
    list: [
      {
        id: '1-1',
        icon: Notice,
        name: '通知公告',
        link: { name: 'notice' }
      },
      {
        id: '1-2',
        icon: dangjianInfo,
        name: '党建资讯',
        link: { name: 'newsCenter', query: { title: '党建资讯', code: 'djzx' } }
      },
      {
        id: '1-3',
        icon: dangwuGuide,
        name: '党务指南',
        link: { name: 'newsCenter', query: { title: '党务指南', code: 'dwzn' } }
      },
      {
        id: '1-4',
        icon: fenglingShow,
        name: '锋领展示',
        link: { name: 'newsCenter', query: { title: '锋领展示', code: 'flzs' } }
      }
    ]
  },
  {
    title: '组织管理',
    list: [
      {
        id: '2-1',
        icon: threeSession,
        name: '三会一课',
        link: { name: 'threeSession' }
      },
      {
        id: '2-2',
        icon: partyPayMent,
        name: '党费缴纳',
        link: { name: 'partyPayment' }
      },
      {
        id: '2-3',
        icon: TopicPartyDate,
        name: '主题党日',
        link: { name: 'topicPartyDate' }
      },
      {
        id: '2-4',
        icon: volunteerActivity,
        name: '志愿者活动',
        link: { name: 'volunteerActivity' }
      },
      {
        id: '2-5',
        icon: Organise,
        name: '组织结构',
        link: { name: 'organise' }
      },
      {
        id: '2-6',
        icon: PartyFile,
        name: '党员档案',
        link: { name: 'partyMemberFile' }
      },
      {
        id: '2-7',
        icon: JoinParty,
        name: '入党纪念',
        link: { name: 'joinPartyList' }
      }
    ]
  },
  {
    title: '党员之家',
    list: [
      {
        id: '3-1',
        icon: PartyHome,
        name: '党员之家',
        link: { name: 'partyHome' }
      },
      {
        id: '3-2',
        icon: Exam,
        name: '在线考试',
        link: { name: 'examCenter' }
      }
    ]
  },
  {
    title: '个人中心',
    list: [
      {
        id: '4-1',
        name: 'APP二维码',
        icon: QRCode,
        link: { name: 'personalCenter' }
      },
      {
        id: '4-2',
        name: '联系我们',
        icon: ContactUs,
        link: { name: 'setting' }
      },
      {
        id: '4-3',
        name: '更多设置',
        icon: Setting,
        link: { name: 'setting' }
      }
    ]
  }
]

// 中医药大学： 通知公告、党建资讯、三会一课、志愿者活动、党费缴纳、党员档案、锋领展示、在线考试、主题党日活动，“更多”。
export const defaultIcons = ['1-1', '1-2', '2-1', '2-4', '2-2', '2-6', '1-4', '3-2', '2-3']
