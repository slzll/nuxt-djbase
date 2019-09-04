/**
 * 页面接口api
 */
const API_URL = '/api'
const Platform = '/Wechat'
const Platform1 = '/mobile'
const Platform2 = '/AppOnlineReply' // 在线抢答
const Meet = '/AppMeet' // 三会一课
const Platform4 = '/AppTask' // 紧急任务
const Interview = '/AppInterview' // 群众走访
const Platform6 = '/AppAction' // 三年规划
const Hive = '/AppHive' // 蜂巢计划
const Payment = '/AppPaymentItem' // 党费缴纳
const Eval = '/AppEval' // 民主测评
const PhotoWall = '/AppPhotoWall' // 照片墙
const Van = '/AppVan' // 先锋指数
const Activity = '/AppActivity' // 志愿者活动
const Ideo = '/AppIdeo' // 思想汇报
const Enum = '/AppEnum'
const PlaceReserve = '/AppPlaceReserve' // 场地预约
const Place = '/AppPlace' // 场地
const BookRecord = '/AppBookRecord' // 图书

export default {
  // 判断用户是否存在
  CheckUserIsExit: {
    url: API_URL + Platform + '/CheckUserIsExit',
    data: { Account: '' }
  },
  // 判断用户在线状态
  CheckLoginStatus: {
    url: API_URL + Platform + '/CheckLoginStatus',
    data: { Mac: '' }
  },
  // 登陆微信
  Login: {
    url: API_URL + Platform + '/Login',
    data: { Code: '', Account: '', Password: '', Mac: '', CId: '' }
  },
  // 登陆2
  Login2: {
    url: API_URL + Platform1 + '/ValidateUser',
    data: { Account: '', Password: '', Mac: '', CId: '' }
  },
  // 获取用户信息
  GetUserInfo: {
    url: API_URL + Platform + '/GetUserInfo',
    data: {}
  },
  // 获取用户信息
  GetUserInfoById: {
    url: API_URL + Platform1 + '/GetUserInfoById',
    data: {}
  },
  // 轮播
  GetLink: {
    url: API_URL + Platform1 + '/GetLink',
    data: { Page: 1, Rows: 5 }
  },
  // 课程列表
  GetCourseInfoList: {
    url: API_URL + Platform + '/GetCourseInfoList',
    data: {
      TeacherName: '',
      ChannelId: '',
      Keyword: '',
      Sort: 'Id',
      Order: 'desc',
      Page: '1',
      Rows: '10'
    }
  },
  // 推荐课程
  RecommendCourse: {
    url: API_URL + Platform + '/RecommendCourse',
    data: {
      TeacherName: '',
      ChannelId: '',
      Keyword: '',
      Sort: 'Id',
      Order: 'desc',
      Page: '1',
      Rows: '4'
    }
  },
  // 课程分类
  GetChannelInfoList: {
    url: API_URL + Platform + '/GetChannelInfoList',
    data: { ParentId: 0 }
  },
  // 考试分类
  GetExamType: {
    url: API_URL + Platform + '/GetExamType',
    data: { ParentId: 0, ParentCode: '' }
  },
  // 考试列表
  GetExamList: {
    url: API_URL + Platform + '/GetExamList',
    data: { ExamType: 'All', TypeId: '', Keyword: '', Page: 1, Rows: 10 }
  },
  // 获取考试题
  GetExam: {
    url: API_URL + Platform + '/GetExam',
    data: { Id: '' }
  },
  // 我的考试列表
  GetMyExamList: {
    url: API_URL + Platform + '/GetMyExamList',
    data: { Id: '' }
  },
  // 获取在线练习考试题
  GetExamPracticeList: {
    url: API_URL + Platform + '/GetExamPracticeList',
    data: { Id: '' }
  },
  // 提交考试题
  UpdateUserExam: {
    url: API_URL + Platform + '/UpdateUserExam',
    data: { ExamId: '', Data: null }
  },
  // 获取考试用户排行榜
  GetExamUserRank: {
    url: API_URL + Platform + '/GetExamUserRank',
    data: {}
  },
  // 退出登录
  LoginOut: {
    url: API_URL + Platform + '/LoginOut',
    data: { Mac: '' }
  },
  // 解除微信绑定
  DelBind: {
    url: API_URL + Platform + '/DelBind',
    data: {}
  },
  // 消息中心
  GetMessageCenter: {
    url: API_URL + Platform + '/GetMessageCenter',
    data: { Page: 1, Rows: 10, Keyword: '' }
  },
  // 通知内容
  GetNoticeInfoContent: {
    url: API_URL + Platform + '/GetNoticeInfoContent',
    data: {},
    method: 'get'
  },
  // 课程详情
  GetCourseDetail: {
    url: API_URL + Platform + '/GetCourseDetail',
    data: { Id: '' }
  },
  // 历史记录 Type => All:表示所有， Today:表示今天记录，Earlier:表示更早
  GetHistoryCourse: {
    url: API_URL + Platform + '/GetHistoryCourse',
    data: { Type: '', Keyword: '', Sort: 'sort', Order: 'desc', Page: 1, Rows: 20 }
  },
  // 用户课程列表 Finish => 1：完成课程，0：未完成课程 ,2：表示全部
  GetUserCourseInfoList: {
    url: API_URL + Platform + '/GetUserCourseInfoList',
    data: { Finish: '2', Keyword: '', Page: 1, Rows: 10 }
  },
  // 文章频道
  GetArticleChannelInfoList: {
    url: API_URL + Platform + '/GetArticleChannelInfoList',
    data: { ParentId: '', ParentCode: '' }
  },
  // 文章列表
  GetArticleInfoList: {
    url: API_URL + Platform + '/GetArticleInfoList',
    data: { CategoryId: '', Keyword: '', CategoryCode: '', Page: '1', Rows: '10' }
  },
  // 文章数
  GetActicleInfoCount: {
    url: API_URL + Platform1 + '/GetActicleInfoCount',
    data: { CategoryCode: '' }
  },
  // 文章详情
  ArticleDetail: {
    url: API_URL + Platform + '/ArticleDetail',
    data: { Id: '' }
  },
  // 文章详情
  GetArticleDetailMore: {
    url: API_URL + Platform + '/GetArticleDetailMore',
    data: { Id: '', CategoryId: '', Sort: 'Id', Order: 'desc' }
  },
  // 通知公告
  GetNoticeInfoList: {
    url: API_URL + Platform + '/GetNoticeInfoList',
    data: { Keyword: '', Page: '1', Rows: '10' }
  },
  // 排行榜 RankType => 1：学时， 2：课程，3：单位
  GetRankInfoList: {
    url: API_URL + Platform + '/GetRankInfoList',
    data: { RankType: '', TotalCount: '20' }
  },
  // 培训班分类
  GetTrainingTypeList: {
    url: API_URL + Platform + '/GetTrainingTypeList',
    data: {}
  },
  // 培训班列表 JoinStatus => Join：参加； UnJoin：未参加 ；UnAudit：审核中；
  GetTrainingClass: {
    url: API_URL + Platform + '/GetTrainingClass',
    data: { TypeId: '', TrainName: '', JoinStatus: '', Page: '1', Rows: '20' }
  },
  // 培训班详情
  GetTrainingDetail: {
    url: API_URL + Platform + '/GetTrainingDetail',
    data: { Id: '' }
  },
  // 签到列表
  GetClassUserSignList: {
    url: API_URL + Platform + '/GetClassUserSignList',
    data: { TrainingId: '', TodayFlag: '', Order: 'desc', Page: '1', Rows: '20' }
  },
  // 获取微信签名
  GetWechatWxAuthModel: {
    url: API_URL + Platform + '/GetWechatWxAuthModel',
    data: { Url: '' }
  },
  // 签到或签退
  TrainingSignIn: {
    url: API_URL + Platform + '/TrainingSignIn',
    data: { TrainingId: '', SignType: '', Longitude: '', Latitude: '', Position: '' }
  },
  // 取消报名培训班
  UpdateTrainingStudentdown: {
    url: API_URL + Platform + '/UpdateTrainingStudentdown',
    data: { Id: '' }
  },
  // 报名培训班
  UpdateTrainingStudentup: {
    url: API_URL + Platform + '/UpdateTrainingStudentup',
    data: { Id: '' }
  },
  // 电子书
  GetBookInfoList: {
    url: API_URL + Platform + '/GetBookInfoList',
    data: { Keyword: '', BookTypeId: '', BookTypeCode: '', Page: '1', Rows: '10' }
  },
  // 电子书章节
  GetBookChapterInfoList: {
    url: API_URL + Platform + '/GetBookChapterInfoList',
    data: { BookId: '', Page: '1', Rows: '30' }
  },
  // 电子书章节内容
  GetBookChapterContent: {
    url: API_URL + Platform + '/GetBookChapterContent',
    data: { Id: '' }
  },
  // 留言类型
  CommentType: {
    url: API_URL + Platform + '/CommentType',
    data: {}
  },
  // 添加留言
  AddMessage: {
    url: API_URL + Platform + '/AddMessage',
    data: { MainId: '', ParentId: '', Title: '', Content: '', ClassCode: '' }
  },
  // 修改用户信息
  /*
  * {
  *   "Account": "sample string 1",
      "Name": "sample string 2",
      "DepartmentName": "sample string 3",
      "GroupId": 4,
      "IdCard": "sample string 5",
      "Email": "sample string 6",
      "Grade": 7,
      "Business": "sample string 8",
      "Sex": "sample string 9",
      "Nation": "sample string 10",
      "Degree": 11,
      "Party": "sample string 12",
      "Birthday": "2017-12-07 14:11:25",
      "Tel": "sample string 14",
      "Mobile": "sample string 15",
      "SmgCode": "sample string 16"
  * }
  * */
  UpdateUserInfo: {
    url: API_URL + Platform + '/UpdateUserInfo',
    data: {}
  },
  // 获取职级列表
  GetGradeList: {
    url: API_URL + Platform + '/GetGradeList',
    data: {}
  },
  // 获取学历列表
  GetDegreeList: {
    url: API_URL + Platform + '/GetDegreeList',
    data: {}
  },
  // 修改手机号
  UpdateMobile: {
    url: API_URL + Platform + '/UpdateMobile',
    data: { OldMobile: '', NewMobile: '', SmgCode: '' }
  },
  // 发送验证码
  SendMsg: {
    url: API_URL + Platform + '/SendMsg',
    data: { MobileNo: '' }
  },
  // 修改密码
  SetUserPassword: {
    url: API_URL + Platform + '/SetUserPassword',
    data: { OldPassword: '', Password: '' }
  },
  // 修改密码
  SetUserEmail: {
    url: API_URL + Platform + '/SetUserEmail',
    data: { OldEmail: '', Email: '' }
  },
  // 单位列表
  GetGroupList: {
    url: API_URL + Platform + '/GetGroupList',
    data: { ParentId: '1' }
  },
  // 注册
  Register: {
    url: API_URL + Platform + '/Register',
    data: {
      Account: '',
      Password: '',
      Name: '',
      GroupId: '',
      IdCard: '',
      Grade: '',
      Mobile: '',
      SmgCode: '',
      PortalId: 1
    }
  },
  // 讨论列表
  DiscussList: {
    url: API_URL + Platform + '/DiscussList',
    data: { MainId: '0', Sort: 'CreateDate', Order: 'desc', Page: '1', Rows: '10' }
  },
  // 添加讨论
  AddDiscuss: {
    url: API_URL + Platform + '/AddDiscuss',
    data: { MainId: '0', ParentId: '0', Content: '' }
  },
  // 课程评论
  GetCourseCommentList: {
    url: API_URL + Platform + '/getCourseCommentList',
    data: { courseId: '', Keyword: '', Page: '1', Rows: '10' }
  },
  // 添加课程评论
  AddCourseComment: {
    url: API_URL + Platform + '/AddCourseComment',
    data: { CourseId: '', Content: '', Score: '' }
  },
  // 提交精品课程进度
  SyncUserStudyData: {
    url: API_URL + Platform + '/SyncUserStudyData',
    data: { CourseId: '', Data: { NodeId: '', Time: '', Status: '' } }
  },
  // 提交Mp4课程进度
  UploadTimeNode: {
    url: API_URL + Platform + '/UploadTimeNode',
    data: { CourseId: '', TimeNode: '' }
  },
  // 相关课程
  RelatedCourse: {
    url: API_URL + Platform + '/RelatedCourse',
    data: { CourseId: '', Page: 1, Rows: 10 }
  },
  // 成果展示分类
  GetProductionTypeInfoList: {
    url: API_URL + Platform + '/GetProductionTypeInfoList',
    data: { ParentId: '', ParentCode: '' }
  },
  // 成果展示列表
  GetProductionInfoList: {
    url: API_URL + Platform + '/GetProductionInfoList',
    data: { CategoryId: '', CategoryCode: '0', Keyword: '', Page: 1, Rows: 10 }
  },
  // 成果展示详情
  GetProductionInfo: {
    url: API_URL + Platform + '/GetProductionInfo',
    data: { Id: '' }
  },
  // 学习档案
  GetUserRecordList: {
    url: API_URL + Platform + '/GetUserRecordList',
    data: { Page: 1, Rows: 10, OrderType: '1', OrderDesc: 'desc' }
  },
  // 收藏列表
  GetCollectionList: {
    url: API_URL + Platform + '/GetCollectionList',
    data: { startTime: '', endTime: '' }
  },
  // 添加收藏 Type 0：课程、1：文章、2：通知、3：电子 4：电子书章节收藏
  FavoriteAdd: {
    url: API_URL + Platform + '/FavoriteAdd',
    data: { MainId: '', Type: '', Title: '' }
  },
  // 删除收藏
  FavoriteDelete: {
    url: API_URL + Platform + '/FavoriteDelete',
    data: { Id: '' }
  },
  // 考试记录
  GetPaperList: {
    url: API_URL + Platform + '/GetPaperList',
    data: {}
  },
  // 课程笔记列表
  GetExperience: {
    url: API_URL + Platform + '/GetExperience',
    data: { CourseId: '' }
  },
  // 添加课程笔记
  AddExperience: {
    url: API_URL + Platform + '/AddExperience',
    data: { CourseId: '', ExperienceContent: '', ExperienceTitle: '' }
  },
  // 课程笔记详情
  GetExperienceById: {
    url: API_URL + Platform + '/GetExperienceById  ',
    data: { ExperienceId: '' }
  },
  // 获取收件箱，发件箱  0：收件、1：发件
  GetUserMessage: {
    url: API_URL + Platform + '/GetUserMessage',
    data: { MessageType: '' }
  },
  // 根据用户名查询用户
  GetUserByName: {
    url: API_URL + Platform + '/GetUserByName',
    data: { UserName: '' }
  },
  // 发送站内信
  AddUserMessage: {
    url: API_URL + Platform + '/AddUserMessage',
    data: { ToUser: '', MessageContent: '', MessageTitle: '' }
  },
  // 站内信详情
  GetMessage: {
    url: API_URL + Platform + '/GetMessage',
    data: { MessageId: '' }
  },
  // 获取微信签名code
  Auth: {
    url: API_URL + Platform + '/Auth',
    data: null
  },
  // 点赞 0：文章 1：课程 2：电子书 3：学习圈 4：成果展示
  AddUserAiss: {
    url: API_URL + Platform + '/AddUserAiss',
    data: { ObjId: '', ObjType: 4 }
  },
  // 获取未读消息数量
  GetMessageUnreadCount: {
    url: API_URL + Platform + '/GetMessageUnreadCount',
    data: {}
  },
  // 获取在线抢答列表
  GetOnlineReplyPageList: {
    url: API_URL + Platform2 + '/OnlineReplyPageList',
    data: { OnlineReplyStatus: '', id: '', Title: '' }
  },
  // 获取在线抢答详情
  GetOnlineReplyDetail: {
    url: API_URL + Platform2 + '/OnlineReplyDetail',
    data: { id: '' }
  },
  // 修改在线抢答
  OnlineReplyEdit: {
    url: API_URL + Platform2 + '/OnlineReplyEdit',
    data: {}
  },
  // 新增在线抢答回答
  ReplyCreate: {
    url: API_URL + Platform2 + '/ReplyCreate',
    data: {}
  },
  // 删除在线抢答
  OnlineReplyDelete: {
    url: API_URL + Platform2 + '/OnlineReplyDelete',
    data: {}
  },
  // 在线抢答答案列表
  GetReplyPageList: {
    url: API_URL + Platform2 + '/ReplyPageList',
    data: { Page: '1', Rows: '4', OnlineReplyId: '', userId: '' }
  },
  // 组织机构人员列表
  GetUserListByGroupId: {
    url: API_URL + Meet + '/UserListByGroupId',
    data: { Page: '1', Rows: '4', GroupId: '' }
  },
  //  任务列表查询
  TaskPlanPageList: {
    url: API_URL + Platform4 + '/TaskPlanPageList',
    data: { Page: '1', Rows: '10' }
  },
  // 我的任务列表
  MyTaskPlanPageList: {
    url: API_URL + Platform4 + '/MyTaskPlanPageList',
    data: { Page: '1', Rows: '10' }
  },
  // 会议人员列表 紧急任务人员列表
  UserList: {
    url: API_URL + Meet + '/UserList',
    data: { Page: '1', Rows: '1000' }
  },
  // 紧急任务新建任务
  TaskPlanCreate: {
    url: API_URL + Platform4 + '/TaskPlanCreate',
    data: {}
  },
  // 任务详情
  TaskPlanDetail: {
    url: API_URL + Platform4 + '/TaskPlanDetail',
    data: {}
  },
  // 手动点灯
  ManualLight: {
    url: API_URL + Platform4 + '/ManualLight',
    data: {}
  },
  // 补充任务列表
  TaskSupplyPlanPageList: {
    url: API_URL + Platform4 + '/TaskSupplyPlanPageList',
    data: {}
  },
  // 新建任务补充
  TaskSupplyPlanCreate: {
    url: API_URL + Platform4 + '/TaskSupplyPlanCreate',
    data: {}
  },
  // 获取任务补充
  TaskSupplyPlanDetail: {
    url: API_URL + Platform4 + '/TaskSupplyPlanDetail',
    data: {}
  },
  // 获取任务补充
  TaskSupplyPlanEdit: {
    url: API_URL + Platform4 + '/TaskSupplyPlanEdit',
    data: {}
  },
  // 任务修改
  TaskPlanEdit: {
    url: API_URL + Platform4 + '/TaskPlanEdit',
    data: {}
  },
  // 三会一课--会议计划列表
  MeetPlanPageList: {
    url: API_URL + Meet + '/MeetPlanPageList',
    data: { Page: 1, Rows: '4', Sort: 'Sort', Order: 'desc' }
  },
  // 三会一课--会议列表
  MeetPageList: {
    url: API_URL + Meet + '/MeetPageList',
    data: { Page: 1, Rows: '4', Sort: 'Sort', Order: 'desc' }
  },
  // 三会一课--我的会议列表
  MyMeetPageList: {
    url: API_URL + Meet + '/MyMeetPageList',
    data: { Page: 1, Rows: 4, Sort: 'Sort', Order: 'desc', Status: '' }
  },
  // 三会一课--计划详情
  MeetPlanDetail: {
    url: API_URL + Meet + '/MeetPlanDetail',
    data: { Id: '' }
  },
  // 三会一课--计划发布
  MeetPlanCreate: {
    url: API_URL + Meet + '/MeetPlanCreate',
    data: {}
  },
  // 三会一课-会议修改
  MeetPlanEdit: {
    url: API_URL + Meet + '/MeetPlanEdit',
    data: {}
  },
  // 三会一课--会议发布
  MeetCreate: {
    url: API_URL + Meet + '/MeetCreate',
    data: {}
  },
  // 三会一课--会议发布
  MeetEdit: {
    url: API_URL + Meet + '/MeetEdit',
    data: {}
  },
  // 三会一课--会议详情
  MeetDetail: {
    url: API_URL + Meet + '/MeetDetail',
    data: { Id: '' }
  },
  // 三会一课--会议地点
  GroupRoomList: {
    url: API_URL + Meet + '/GetGroupRoomList',
    data: {}
  },
  // 三会一课 -- 会议类型
  MeetType: {
    url: API_URL + '/admin/appcommon/enumtype?type=MeetType',
    data: {}
  },
  MyMeetPlanStatus: {
    url: API_URL + '/admin/appcommon/EnumStatus?type=MyMeetPlanStatus',
    data: {}
  },
  MyMeetStatus: {
    url: API_URL + '/admin/appcommon/EnumStatus?type=MyMeetStatus',
    data: {}
  },
  SignType: {
    url: API_URL + '/admin/appcommon/enumtype?type=SignType',
    data: {}
  },
  MeetRemindType: {
    url: API_URL + '/admin/appcommon/enumtype?type=MeetRemindType',
    data: {}
  },
  // 上传文件
  UploadAttachment: {
    url: API_URL + '/AppFile/UploadAttachment',
    data: {},
    method: 'formData'
  },
  // 根据GroupId获取用户列表
  UserListByGroupId: {
    url: API_URL + Meet + '/UserListByGroupId',
    data: { GroupId: '' }
  },
  // 获取参与会议的用户列表
  MeetUserPageList: {
    url: API_URL + Meet + '/MeetUserPageList',
    data: { MeetId: '', Order: 'desc', Sort: 'sort' }
  },
  // 三会一课--签到与请假
  MeetSign: {
    url: API_URL + Meet + '/MeetSign',
    data: { MeetId: '' }
  },
  // 三会一课--会议纪要创建
  MeetSummaryCreate: {
    url: API_URL + Meet + '/MeetSummaryCreate',
    data: { MeetId: '' }
  },
  // 三会一课--会议纪要修改
  MeetSummaryEdit: {
    url: API_URL + Meet + '/MeetSummaryEdit',
    data: { MeetId: '' }
  },
  // 三会一课--会议纪要详情
  MeetSummaryDetail: {
    url: API_URL + Meet + '/MeetSummaryDetail',
    data: { MeetId: '' }
  },
  // 三会一课--会议纪要详情
  MeetSummaryDelete: {
    url: API_URL + Meet + '/MeetSummaryDelete',
    data: {}
  },
  // 三会一课--会议纪要列表
  MeetSummaryPageList: {
    url: API_URL + Meet + '/MeetSummaryPageList',
    data: { MeetId: '' }
  },
  // 群众走访-走访列表
  InterviewPageList: {
    url: API_URL + Interview + '/InterviewPageList',
    data: { Page: 1, Rows: 10 }
  },
  // 群众走访-走访列表(全部)
  InterviewPageListAll: {
    url: API_URL + Interview + '/InterviewPageListAll',
    data: { Page: 1, Rows: 10 }
  },
  // 群众走访-走访列表(与我相关)
  RelatedMeInterviewPageList: {
    url: API_URL + Interview + '/RelatedMeInterviewPageList',
    data: { Page: 1, Rows: 10 }
  },
  // 群众走访-新增走访
  InterviewCreate: {
    url: API_URL + Interview + '/InterviewCreate',
    data: {}
  },
  // 群众走访-编辑走访
  InterviewEdit: {
    url: API_URL + Interview + '/InterviewEdit',
    data: {}
  },
  // 群众走访-新增台账
  RecordCreate: {
    url: API_URL + Interview + '/RecordCreate',
    data: {}
  },
  // 群众走访-台账列表
  RecordPageList: {
    url: API_URL + Interview + '/RecordPageList',
    data: {}
  },
  // 群众走访-台账列表（用户）
  RecordPageListByUserId: {
    url: API_URL + Interview + '/RecordPageListByUserId',
    data: {}
  },
  // 群众走访-走访方式
  GetInterviewTypeTree: {
    url: API_URL + Interview + '/GetInterviewTypeTree',
    data: {}
  },
  // 群众走访-走访状态
  InterviewStatus: {
    url: '/api/admin/appcommon/enumtype?=InterviewStatus',
    data: {}
  },
  // 群众走访-走访详情
  InterviewDetail: {
    url: API_URL + Interview + '/InterviewDetail',
    data: {}
  },
  // 群众走访-台账登记详情
  RecordDetail: {
    url: API_URL + Interview + '/RecordDetail',
    data: {}
  },
  // 三年规划-列表查询
  ActionPlanPageList: {
    url: API_URL + Platform6 + '/ActionPlanPageList',
    data: {}
  },
  // 三年规划-我的规划
  MyActionPlanPageList: {
    url: API_URL + Platform6 + '/MyActionPlanPageList',
    data: {}
  },
  // 三年规划-新增规划
  ActionPlanCreate: {
    url: API_URL + Platform6 + '/ActionPlanCreate',
    data: {}
  },
  // 三年规划-获取三年行动规划补充详情
  ActionSupplyPlanDetail: {
    url: API_URL + Platform6 + '/ActionSupplyPlanDetail',
    data: {}
  },
  // 三年规划-新增规划修改
  ActionPlanEdit: {
    url: API_URL + Platform6 + '/ActionPlanEdit',
    data: {}
  },
  // 三年规划-获取三年行动规划补充
  ActionPlanDetail: {
    url: API_URL + Platform6 + '/ActionPlanDetail',
    data: {}
  },
  // 三年规划-修改三年行动规划补充
  ActionSupplyPlanEdit: {
    url: API_URL + Platform6 + '/ActionSupplyPlanEdit',
    data: {}
  },
  // 三年规划-新建三年行动规划补充
  ActionSupplyPlanCreate: {
    url: API_URL + Platform6 + '/ActionSupplyPlanCreate',
    data: {}
  },
  // 三年规划-三年行动规划补充列表-查询
  ActionSupplyPlanPageList: {
    url: API_URL + Platform6 + '/ActionSupplyPlanPageList',
    data: {}
  },
  // 蜂巢计划-新建蜂巢计划
  HivePlanCreate: {
    url: API_URL + Hive + '/HivePlanCreate',
    data: {}
  },
  // 蜂巢计划-修改蜂巢计划
  HivePlanEdit: {
    url: API_URL + Hive + '/HivePlanEdit',
    data: {}
  },
  // 蜂巢计划-蜂巢计划详情
  HivePlanDetail: {
    url: API_URL + Hive + '/HivePlanDetail',
    data: {}
  },
  // 蜂巢计划-蜂巢计划列表
  HivePlanPageList: {
    url: API_URL + Hive + '/HivePlanPageList',
    data: {}
  },
  // 蜂巢计划-新建蜂巢计划补充
  HiveSupplyPlanCreate: {
    url: API_URL + Hive + '/HiveSupplyPlanCreate',
    data: {}
  },
  // 蜂巢计划-修改蜂巢计划补充
  HiveSupplyPlanEdit: {
    url: API_URL + Hive + '/HiveSupplyPlanEdit',
    data: {}
  },
  // 蜂巢计划-蜂巢计划补充详细
  HiveSupplyPlanDetail: {
    url: API_URL + Hive + '/HiveSupplyPlanDetail',
    data: {}
  },
  // 蜂巢计划-蜂巢计划补充列表
  HiveSupplyPlanPageList: {
    url: API_URL + Hive + '/HiveSupplyPlanPageList',
    data: {}
  },
  // 蜂巢计划-我的蜂巢计划
  MyHivePlanPageList: {
    url: API_URL + Hive + '/MyHivePlanPageList',
    data: {}
  },
  // 党费缴纳-党费管理-我的（包含已缴，未缴）
  GetPaymentItemList: {
    url: API_URL + Payment + '/GetPaymentItemList',
    data: {}
  },
  // 党费缴纳-党费管理-我的（包含已缴，未缴）
  GetMyPaymentItemList: {
    url: API_URL + Payment + '/GetMyPaymentItemList',
    data: {}
  },
  // 党费缴纳-党费管理-我的（包含代缴）
  GetMyPayerOtherPaymentItemList: {
    url: API_URL + Payment + '/GetMyPayerOtherPaymentItemList',
    data: {}
  },
  // 党费缴纳-获取党费缴纳
  PaymentItemDetail: {
    url: API_URL + Payment + '/PaymentItemDetail',
    data: {}
  },
  // 党费缴纳-党费统计-查询登录人代缴的记录
  GetPaymentItemRecordByPayerList: {
    url: API_URL + Payment + '/GetPaymentItemRecordByPayerList',
    data: {}
  },
  // 党费缴纳--获取缴费项目指定的人员
  GetPaymentItemUserByPaymentItemId: {
    url: API_URL + Payment + '/GetPaymentItemUserByPaymentItemId',
    data: {}
  },
  // 党费缴纳--获取缴费项目指定的人员
  GetPaymentItemUserByPaymentItem: {
    url: API_URL + Payment + '/GetPaymentItemUserByPaymentItem',
    data: {}
  },
  // 民主测评-下拉类型
  EvalTypePageList: {
    url: API_URL + Eval + '/EvalTypePageList',
    data: {}
  },
  // 民主测评--评议管理列表
  EvaluatePageList: {
    url: API_URL + Eval + '/EvaluatePageList',
    data: {}
  },
  // 民主测评--评议管理新增
  EvalCreate: {
    url: API_URL + Eval + '/EvalCreate',
    data: {}
  },
  // 民主测评--评议管理修改
  EvalEdit: {
    url: API_URL + Eval + '/EvalEdit',
    data: {}
  },
  // 民主测评--评议管理详细
  EvalDetail: {
    url: API_URL + Eval + '/EvalDetail',
    data: {}
  },
  // 民主测评--我的评议 列表
  MyEvalPageList: {
    url: API_URL + Eval + '/MyEvalPageList',
    data: { Sort: 'id' }
  },
  // 民主测评--提交评议
  SubmitEval: {
    url: API_URL + Eval + '/SubmitEval',
    data: {}
  },
  // 民主测评--被评议单位 详细
  EvalGroupDetail: {
    url: API_URL + Eval + '/EvalGroupDetail',
    data: {}
  },
  // 民主测评--被评议人员 详细更多（包含任务头像 职务等）
  EvalUserDetail: {
    url: API_URL + Eval + '/EvalUserDetail',
    data: {}
  },
  // 民主测评--被评议对象列表 详细更多（包含任务头像 职务等）
  EvalUserList: {
    url: API_URL + Eval + '/EvalUserList',
    data: {}
  },
  // 照片墙--新建照片墙
  PhotoWallCreate: {
    url: API_URL + PhotoWall + '/PhotoWallCreate',
    data: {}
  },
  // 照片墙--获取照片墙
  PhotoWallDetail: {
    url: API_URL + PhotoWall + '/PhotoWallDetail',
    data: {}
  },
  // 照片墙--修改照片墙
  PhotoWallEdit: {
    url: API_URL + PhotoWall + '/PhotoWallEdit',
    data: {}
  },
  // 照片墙--照片墙列表
  PhotoWallPageList: {
    url: API_URL + PhotoWall + '/PhotoWallPageList',
    data: {}
  },
  // 照片墙--我的照片墙列表
  MyPhotoWallPageList: {
    url: API_URL + PhotoWall + '/MyPhotoWallPageList',
    data: {}
  },
  // 照片墙--照片墙点赞
  ThumbsUpCreate: {
    url: API_URL + PhotoWall + '/ThumbsUpCreate',
    data: {}
  },
  // 照片墙--浏览点击数接口
  PhotoWallBrowse: {
    url: API_URL + PhotoWall + '/PhotoWallBrowse',
    data: {}
  },
  // 照片墙--照片墙评论、回复
  PhotoWallCommentAdd: {
    url: API_URL + PhotoWall + '/PhotoWallCommentAdd',
    data: {}
  },
  // 照片墙--照片墙评论、回复列表
  PhotoWallCommentList: {
    url: API_URL + PhotoWall + '/PhotoWallCommentList',
    data: {}
  },
  // 照片墙--获取评论回复记录
  PhotoWallCommentReplyList: {
    url: API_URL + PhotoWall + '/PhotoWallCommentReplyList',
    data: {}
  },
  // 照片墙--报名
  PhotoWallUpdateTrainingStudentup: {
    url: API_URL + PhotoWall + '/UpdateTrainingStudentup',
    data: {}
  },
  // 照片墙--取消报名
  PhotoWallUpdateTrainingStudentdown: {
    url: API_URL + PhotoWall + '/UpdateTrainingStudentdown',
    data: {}
  },
  // 先锋指数--获取用户先锋指数
  GetVanIndex: {
    url: API_URL + Van + '/GetVanIndex',
    data: {}
  },
  // 志愿者活动 -- 新建志愿者活动
  ActivityCreate: {
    url: API_URL + Activity + '/ActivityCreate',
    data: {}
  },
  // 志愿者活动 --获取志愿者活动
  ActivityDetail: {
    url: API_URL + Activity + '/ActivityDetail',
    data: {}
  },
  // 志愿者活动 --修改志愿者活动
  ActivityEdit: {
    url: API_URL + Activity + '/ActivityEdit',
    data: {}
  },
  // 志愿者活动 --志愿者活动列表
  ActivityPageList: {
    url: API_URL + Activity + '/ActivityPageList',
    data: {}
  },
  // 志愿者活动 --热门活动
  HotActivityList: {
    url: API_URL + Activity + '/HotActivityList',
    data: {}
  },
  // 志愿者活动 --我的活动
  MyActivityList: {
    url: API_URL + Activity + '/MyActivityList',
    data: {}
  },
  // 志愿者活动 --新建志愿者报名
  ActivitySignCreate: {
    url: API_URL + Activity + '/ActivitySignCreate',
    data: {}
  },
  // 志愿者活动 --获取志愿者报名
  ActivitySignDetail: {
    url: API_URL + Activity + '/ActivitySignDetail',
    data: {}
  },
  // 志愿者活动 --修改志愿者报名
  ActivitySignEdit: {
    url: API_URL + Activity + '/ActivitySignEdit',
    data: {}
  },
  // 志愿者活动 --志愿者报名列表
  ActivitySignPageList: {
    url: API_URL + Activity + '/ActivitySignPageList',
    data: {}
  },
  // 志愿者活动 --新建志愿者活动浏览记录
  ActivityBrowseCreate: {
    url: API_URL + Activity + '/ActivityBrowseCreate',
    data: {}
  },
  // 志愿者活动 --获取志愿者活动浏览记录
  ActivityBrowseDetail: {
    url: API_URL + Activity + '/ActivityBrowseDetail',
    data: {}
  },
  // 志愿者活动 --修改志愿者活动浏览记录
  ActivityBrowseEdit: {
    url: API_URL + Activity + '/ActivityBrowseEdit',
    data: {}
  },
  // 志愿者活动 --志愿者活动浏览记录列表-查询
  ActivityBrowsePageList: {
    url: API_URL + Activity + '/ActivityBrowsePageList',
    data: {}
  },
  // 志愿者活动 --签到接口
  ActivitySignIn: {
    url: API_URL + Activity + '/ActivitySignIn',
    data: {}
  },
  // 志愿者活动 --签退接口
  ActivitySignBack: {
    url: API_URL + Activity + '/ActivitySignBack',
    data: {}
  },
  // 志愿者活动 --志愿者活动评价/回复
  ActivityCommentAdd: {
    url: API_URL + Activity + '/ActivityCommentAdd',
    data: {}
  },
  // 志愿者活动 --志愿者评价、回复列表
  ActivityCommentList: {
    url: API_URL + Activity + '/ActivityCommentList',
    data: {}
  },
  // 志愿者活动 --获取评论回复记录
  ActivityCommentReplyList: {
    url: API_URL + Activity + '/ActivityCommentReplyList',
    data: {}
  },
  // 思想汇报 --管理员列表
  IdeoPageList: {
    url: API_URL + Ideo + '/IdeoPageList',
    data: {}
  },
  // 思想汇报 --普通学员列表
  MyIdeoPageList: {
    url: API_URL + Ideo + '/MyIdeoPageList',
    data: {}
  },
  // 思想汇报 -- 新增
  IdeoCreate: {
    url: API_URL + Ideo + '/IdeoCreate',
    data: {}
  },
  // 思想汇报 -- 编辑
  IdeoEdit: {
    url: API_URL + Ideo + '/IdeoEdit',
    data: {}
  },
  // 思想汇报 -- 详细
  IdeoDetail: {
    url: API_URL + Ideo + '/IdeoDetail',
    data: {}
  },
  // 思想汇报 -- 审核
  IdeoAudit: {
    url: API_URL + Ideo + '/IdeoAudit',
    data: {}
  },
  // 思想汇报 -- 删除
  IdeoDelete: {
    url: API_URL + Ideo + '/IdeoDelete',
    data: {}
  },
  // 通用评价添加
  EnumCommentAdd: {
    url: API_URL + Enum + '/CommentAdd',
    data: {}
  },
  // 通用评价列表
  EnumCommentList: {
    url: API_URL + Enum + '/CommentList',
    data: {}
  },
  // 通用回复列表
  EnumCommentReplyList: {
    url: API_URL + Enum + '/CommentReplyList',
    data: {}
  },
  // 通用点赞
  EnumThumbsUpCreate: {
    url: API_URL + Enum + '/ThumbsUpCreate',
    data: {}
  },
  // 通用取消点赞
  EnumThumbsUpCancle: {
    url: API_URL + Enum + '/ThumbsUpCancle',
    data: {}
  },
  // 党史人物列表
  FigurePageList: {
    url: API_URL + Enum + '/FigurePageList',
    data: { Page: 1, Rows: 10, Sort: 'Id', Order: 'desc' }
  },
  // 党史人物详情
  GetFigureDetail: {
    url: API_URL + Enum + '/GetFigureDetail',
    data: { Id: '' }
  },
  // 党史人物诞辰纪念
  CheckFigureDate: {
    url: API_URL + Enum + '/CheckFigureDate',
    data: {}
  },
  // 入党纪念
  CheckPartyDate: {
    url: API_URL + Enum + '/CheckPartyDate',
    data: {}
  },
  // 场地查询
  PlaceReserve: {
    url: API_URL + PlaceReserve + '/PlaceReserve',
    data: {}
  },
  // 场地查询详情
  PlaceReserveDetails: {
    url: API_URL + PlaceReserve + '/PlaceReserveDetails',
    data: {}
  },
  // 场地预约
  AddPlaceReserve: {
    url: API_URL + PlaceReserve + '/AddPlaceReserve',
    data: {}
  },
  // 取消预约
  DeletePlaceReserve: {
    url: API_URL + PlaceReserve + '/DeletePlaceReserve',
    data: {}
  },
  // 场地查询
  GetPlaceList: {
    url: API_URL + Place + '/GetPlaceList',
    data: {}
  },
  // 图书借阅记录添加
  AddBookRecord: {
    url: API_URL + BookRecord + '/AddBookRecord',
    data: {}
  },
  // 图书借阅记录查询
  GetBookRecordList: {
    url: API_URL + BookRecord + '/GetBookRecordList',
    data: {}
  },
  // 还书
  UpdateBookRecord: {
    url: API_URL + BookRecord + '/UpdateBookRecord',
    data: {}
  },
  // 获取当前月的入党纪念日人员 - 查询 Account Name为备用查询条件，不查询则为空 其他参数默认
  UserListPartyDay: {
    url: API_URL + Meet + '/UserListPartyDay',
    data: {}
  }
}
