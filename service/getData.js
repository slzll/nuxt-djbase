import Api from './api'
import fetch from './fetch'

/**
 *判断用户是否存在
 */
export const CheckUserIsExit = (data) => fetch.post(Api.CheckUserIsExit.url,
  { ...Api.CheckUserIsExit.data, ...data })

/**
 *判断用户在线状态
 */
export const CheckLoginStatus = (data) => fetch.post(Api.CheckLoginStatus.url,
  { ...Api.CheckLoginStatus.data, ...data })

/**
 * 登陆
 */
export const Login = (data) => fetch.post(Api.Login.url, { ...Api.Login.data, ...data })

/**
 * 登陆2
 */
export const Login2 = (data) => fetch.post(Api.Login2.url, { ...Api.Login2.data, ...data })

/**
 * 用户信息
 */
export const GetUserInfo = (data) => fetch.post(Api.GetUserInfo.url,
  { ...Api.GetUserInfo.data, ...data })
/**
 * 用户信息
 */
export const GetUserInfoById = (data) => fetch.post(Api.GetUserInfoById.url,
  { ...Api.GetUserInfoById.data, ...data })

/**
 * 轮播
 */
export const GetLink = (data) => fetch.post(Api.GetLink.url, { ...Api.GetLink.data, ...data })

/**
 * 课程列表
 */
export const GetCourseInfoList = (data) => fetch.post(Api.GetCourseInfoList.url,
  { ...Api.GetCourseInfoList.data, ...data })

/**
 * 热门课程
 */
export const RecommendCourse = (data) => fetch.post(Api.RecommendCourse.url,
  { ...Api.RecommendCourse.data, ...data })

/**
 * 课程分类
 */
export const GetChannelInfoList = (data) => fetch.post(Api.GetChannelInfoList.url,
  { ...Api.GetChannelInfoList.data, ...data })
/**
 * 考试分类
 */
export const GetExamType = (data) => fetch.post(Api.GetExamType.url,
  { ...Api.GetExamType.data, ...data })

/**
 * 考试列表
 */
export const GetExamList = (data) => fetch.post(Api.GetExamList.url,
  { ...Api.GetExamList.data, ...data })

/**
 * 我的考试列表
 */
export const GetMyExamList = (data) => fetch.post(Api.GetMyExamList.url,
  { ...Api.GetMyExamList.data, ...data })
/**
 * 获取考试题
 */
export const GetExam = (data) => fetch.post(Api.GetExam.url, { ...Api.GetExam.data, ...data })
/**
 * 获取在线练习
 */
export const GetExamPracticeList = (data) => fetch.post(Api.GetExamPracticeList.url,
  { ...Api.GetExamPracticeList.data, ...data })

/**
 * 提交考试题
 */
export const UpdateUserExam = (data) => fetch.post(Api.UpdateUserExam.url,
  { ...Api.UpdateUserExam.data, ...data })
/**
 * 提交考试题
 */
export const GetExamUserRank = (data) => fetch.post(Api.GetExamUserRank.url,
  { ...Api.GetExamUserRank.data, ...data })
/**
 * 退出登录
 */
export const LoginOut = (data) => fetch.post(Api.LoginOut.url, { ...Api.LoginOut.data, ...data })

/**
 * 解除微信绑定
 */
export const DelBind = (data) => fetch.post(Api.DelBind.url, { ...Api.DelBind.data, ...data })

/**
 * 消息中心
 */
export const GetMessageCenter = (data) => fetch.post(Api.GetMessageCenter.url,
  { ...Api.GetMessageCenter.data, ...data })
/**
 * 通知内容
 */
export const GetNoticeInfoContent = (data) => fetch.get(
  Api.GetNoticeInfoContent.url + '/' + data.Id, { ...Api.GetNoticeInfoContent.data, ...data })
/**
 * 课程详情
 */
export const GetCourseDetail = (data) => fetch.post(Api.GetCourseDetail.url,
  { ...Api.GetCourseDetail.data, ...data })

/**
 *  历史记录 Type => All:表示所有， Today:表示今天记录，Earlier:表示更早
 */
export const GetHistoryCourse = (data) => fetch.post(Api.GetHistoryCourse.url,
  { ...Api.GetHistoryCourse.data, ...data })

/**
 *  用户课程列表 Finish => 1：完成课程，0：未完成课程 ,2：表示全部
 */
export const GetUserCourseInfoList = (data) => fetch.post(Api.GetUserCourseInfoList.url,
  { ...Api.GetUserCourseInfoList.data, ...data })

/**
 *  文章频道
 */
export const GetArticleChannelInfoList = (data) => fetch.post(Api.GetArticleChannelInfoList.url,
  { ...Api.GetArticleChannelInfoList.data, ...data })

/**
 *  文章列表
 */
export const GetArticleInfoList = (data) => fetch.post(Api.GetArticleInfoList.url,
  { ...Api.GetArticleInfoList.data, ...data })

/**
 *  文章详情
 */
export const ArticleDetail = (data) => fetch.post(Api.ArticleDetail.url,
  { ...Api.ArticleDetail.data, ...data })

/**
 *  文章详情
 */
export const GetArticleDetailMore = (data) => fetch.post(Api.GetArticleDetailMore.url,
  { ...Api.GetArticleDetailMore.data, ...data })

/**
 *  通知公告
 */
export const GetNoticeInfoList = (data) => fetch.post(Api.GetNoticeInfoList.url,
  { ...Api.GetNoticeInfoList.data, ...data })

/**
 *  排行榜 RankType => 1：学时， 2：课程，3：单位
 */
export const GetRankInfoList = (data) => fetch.post(Api.GetRankInfoList.url,
  { ...Api.GetRankInfoList.data, ...data })

/**
 *  培训班分类
 */
export const GetTrainingTypeList = (data) => fetch.post(Api.GetTrainingTypeList.url,
  { ...Api.GetTrainingTypeList.data, ...data })

/**
 *  培训班列表 JoinStatus => Join：参加； UnJoin：未参加 ；UnAudit：审核中；
 */
export const GetTrainingClass = (data) => fetch.post(Api.GetTrainingClass.url,
  { ...Api.GetTrainingClass.data, ...data })

/**
 *  培训班详情
 */
export const GetTrainingDetail = (data) => fetch.post(Api.GetTrainingDetail.url,
  { ...Api.GetTrainingDetail.data, ...data })

/**
 *  签到列表
 */
export const GetClassUserSignList = (data) => fetch.post(Api.GetClassUserSignList.url,
  { ...Api.GetClassUserSignList.data, ...data })

/**
 *  获取微信签名
 */
export const GetWechatWxAuthModel = (data) => fetch.post(Api.GetWechatWxAuthModel.url,
  { ...Api.GetWechatWxAuthModel.data, ...data })

/**
 *  签到或签退
 */
export const TrainingSignIn = (data) => fetch.post(Api.TrainingSignIn.url,
  { ...Api.TrainingSignIn.data, ...data })

/**
 *  取消报名
 */
export const UpdateTrainingStudentdown = (data) => fetch.post(Api.UpdateTrainingStudentdown.url,
  { ...Api.UpdateTrainingStudentdown.data, ...data })

/**
 *  报名培训班
 */
export const UpdateTrainingStudentup = (data) => fetch.post(Api.UpdateTrainingStudentup.url,
  { ...Api.UpdateTrainingStudentup.data, ...data })

/**
 *  电子书
 */
export const GetBookInfoList = (data) => fetch.post(Api.GetBookInfoList.url,
  { ...Api.GetBookInfoList.data, ...data })

/**
 *  电子书章节
 */
export const GetBookChapterInfoList = (data) => fetch.post(Api.GetBookChapterInfoList.url,
  { ...Api.GetBookChapterInfoList.data, ...data })

/**
 *  电子书章节内容
 */
export const GetBookChapterContent = (data) => fetch.post(Api.GetBookChapterContent.url,
  { ...Api.GetBookChapterContent.data, ...data })

/**
 *  留言类型
 */
export const CommentType = (data) => fetch.post(Api.CommentType.url,
  { ...Api.CommentType.data, ...data })

/**
 *  添加留言
 */
export const AddMessage = (data) => fetch.post(Api.AddMessage.url,
  { ...Api.AddMessage.data, ...data })

/**
 *  修改用户信息
 */
export const UpdateUserInfo = (data) => fetch.post(Api.UpdateUserInfo.url,
  { ...Api.UpdateUserInfo.data, ...data })

/**
 *  获取职级列表
 */
export const GetGradeList = (data) => fetch.post(Api.GetGradeList.url,
  { ...Api.GetGradeList.data, ...data })

/**
 *  获取学历列表
 */
export const GetDegreeList = (data) => fetch.post(Api.GetDegreeList.url,
  { ...Api.GetDegreeList.data, ...data })

/**
 *  修改手机号
 */
export const UpdateMobile = (data) => fetch.post(Api.UpdateMobile.url,
  { ...Api.UpdateMobile.data, ...data })

/**
 *  发送验证码
 */
export const SendMsg = (data) => fetch.post(Api.SendMsg.url, { ...Api.SendMsg.data, ...data })

/**
 *  修改密码
 */
export const SetUserPassword = (data) => fetch.post(Api.SetUserPassword.url,
  { ...Api.SetUserPassword.data, ...data })

/**
 *  修改邮箱
 */
export const SetUserEmail = (data) => fetch.post(Api.SetUserEmail.url,
  { ...Api.SetUserEmail.data, ...data })

/**
 *  单位列表
 */
export const GetGroupList = (data) => fetch.post(Api.GetGroupList.url,
  { ...Api.GetGroupList.data, ...data })

/**
 *  注册
 */
export const Register = (data) => fetch.post(Api.Register.url, { ...Api.Register.data, ...data })

/**
 *  讨论列表
 */
export const DiscussList = (data) => fetch.post(Api.DiscussList.url,
  { ...Api.DiscussList.data, ...data })

/**
 *  添加讨论
 */
export const AddDiscuss = (data) => fetch.post(Api.AddDiscuss.url,
  { ...Api.AddDiscuss.data, ...data })

/**
 *  课程评论
 */
export const GetCourseCommentList = (data) => fetch.post(Api.GetCourseCommentList.url,
  { ...Api.GetCourseCommentList.data, ...data })

/**
 *  添加课程评论
 */
export const AddCourseComment = (data) => fetch.post(Api.AddCourseComment.url,
  { ...Api.AddCourseComment.data, ...data })

/**
 *  提交精品课程进度
 */
export const SyncUserStudyData = (data) => fetch.post(Api.SyncUserStudyData.url,
  { ...Api.SyncUserStudyData.data, ...data })

/**
 *  提交Mp4课程进度
 */
export const UploadTimeNode = (data) => fetch.post(Api.UploadTimeNode.url,
  { ...Api.UploadTimeNode.data, ...data })

/**
 *  相关课程
 */
export const RelatedCourse = (data) => fetch.post(Api.RelatedCourse.url,
  { ...Api.RelatedCourse.data, ...data })

/**
 *  成果展示分类
 */
export const GetProductionTypeInfoList = (data) => fetch.post(Api.GetProductionTypeInfoList.url,
  { ...Api.GetProductionTypeInfoList.data, ...data })

/**
 *  成果展示列表
 */
export const GetProductionInfoList = (data) => fetch.post(Api.GetProductionInfoList.url,
  { ...Api.GetProductionInfoList.data, ...data })

/**
 *  成果展示详情
 */
export const GetProductionInfo = (data) => fetch.post(Api.GetProductionInfo.url,
  { ...Api.GetProductionInfo.data, ...data })

/**
 *  学习档案
 */
export const GetUserRecordList = (data) => fetch.post(Api.GetUserRecordList.url,
  { ...Api.GetUserRecordList.data, ...data })

/**
 *  收藏列表
 */
export const GetCollectionList = (data) => fetch.post(Api.GetCollectionList.url,
  { ...Api.GetCollectionList.data, ...data })

/**
 *  添加收藏 Type 0：课程、1：文章、2：通知、3：电子 4：电子书章节收藏
 */
export const FavoriteAdd = (data) => fetch.post(Api.FavoriteAdd.url,
  { ...Api.FavoriteAdd.data, ...data })

/**
 *  删除收藏
 */
export const FavoriteDelete = (data) => fetch.post(Api.FavoriteDelete.url,
  { ...Api.FavoriteDelete.data, ...data })

/**
 *  考试记录
 */
export const GetPaperList = (data) => fetch.post(Api.GetPaperList.url,
  { ...Api.GetPaperList.data, ...data })

/**
 *  课程笔记列表
 */
export const GetExperience = (data) => fetch.post(Api.GetExperience.url,
  { ...Api.GetExperience.data, ...data })

/**
 *  添加课程笔记
 */
export const AddExperience = (data) => fetch.post(Api.AddExperience.url,
  { ...Api.AddExperience.data, ...data })

/**
 *  课程笔记详情
 */
export const GetExperienceById = (data) => fetch.post(Api.GetExperienceById.url,
  { ...Api.GetExperienceById.data, ...data })

/**
 *  获取收件箱，发件箱  0：收件、1：发件
 */
export const GetUserMessage = (data) => fetch.post(Api.GetUserMessage.url,
  { ...Api.GetUserMessage.data, ...data })

/**
 *  根据用户名查询用户
 */
export const GetUserByName = (data) => fetch.post(Api.GetUserByName.url,
  { ...Api.GetUserByName.data, ...data })

/**
 *  发送站内信
 */
export const AddUserMessage = (data) => fetch.post(Api.AddUserMessage.url,
  { ...Api.AddUserMessage.data, ...data })

/**
 *  站内信详情
 */
export const GetMessage = (data) => fetch.post(Api.GetMessage.url,
  { ...Api.GetMessage.data, ...data })

/**
 *  获取微信签名code
 */
export const Auth = (data) => fetch.post(Api.Auth.url, { ...Api.Auth.data, ...data })

/**
 *  点赞 0：文章 1：课程 2：电子书 3：学习圈 4：成果展示
 */
export const AddUserAiss = (data) => fetch.post(Api.AddUserAiss.url,
  { ...Api.AddUserAiss.data, ...data })
/**
 *  获取的未读消息数量
 */
export const GetMessageUnreadCount = (data) => fetch.get(Api.GetMessageUnreadCount.url,
  { ...Api.GetMessageUnreadCount.data, ...data })

/**
 *  获取在线抢答列表
 */
export const GetOnlineReplyPageList = (data) => fetch.post(Api.GetOnlineReplyPageList.url,
  { ...Api.GetOnlineReplyPageList.data, ...data })

/**
 *  获取在线抢答详情
 */
export const GetOnlineReplyDetail = (data) => fetch.post(Api.GetOnlineReplyDetail.url,
  { ...Api.GetOnlineReplyDetail.data, ...data })

/**
 *  修改在线抢答
 */
export const OnlineReplyEdit = (data) => fetch.post(Api.OnlineReplyEdit.url,
  { ...Api.OnlineReplyEdit.data, ...data })

/**
 *  删除在线抢答
 */
export const OnlineReplyDelete = (data) => fetch.post(Api.OnlineReplyDelete.url,
  { ...Api.OnlineReplyDelete.data, ...data })

/**
 *  在线抢答答案列表
 */
export const GetReplyPageList = (data) => fetch.post(Api.GetReplyPageList.url,
  { ...Api.GetReplyPageList.data, ...data })

/**
 *  新增在线抢答
 */
export const ReplyCreate = (data) => fetch.post(Api.ReplyCreate.url,
  { ...Api.ReplyCreate.data, ...data })

/**
 *  组织机构人员列表
 */
export const GetUserListByGroupId = (data) => fetch.post(Api.GetUserListByGroupId.url,
  { ...Api.GetUserListByGroupId.data, ...data })

/**
 *  任务列表查询
 */
export const TaskPlanPageList = (data) => fetch.post(Api.TaskPlanPageList.url,
  { ...Api.TaskPlanPageList.data, ...data })
/**
 *  我的任务列表
 */
export const MyTaskPlanPageList = (data) => fetch.post(Api.MyTaskPlanPageList.url,
  { ...Api.MyTaskPlanPageList.data, ...data })

/**
 *   会议人员列表 紧急任务人员列表
 */
export const UserList = (data) => fetch.post(Api.UserList.url, { ...Api.UserList.data, ...data })
/**
 *  新建任务
 */
export const TaskPlanCreate = (data) => fetch.post(Api.TaskPlanCreate.url,
  { ...Api.TaskPlanCreate.data, ...data })
/**
 *  任务详情
 */
export const TaskPlanDetail = (data) => fetch.post(Api.TaskPlanDetail.url,
  { ...Api.TaskPlanDetail.data, ...data })
/**
 *  手动点灯
 */
export const ManualLight = (data) => fetch.post(Api.ManualLight.url,
  { ...Api.ManualLight.data, ...data })

/**
 *  补充任务列表
 */
export const TaskSupplyPlanPageList = (data) => fetch.post(Api.TaskSupplyPlanPageList.url,
  { ...Api.TaskSupplyPlanPageList.data, ...data })

/**
 *  新建任务补充
 */
export const TaskSupplyPlanCreate = (data) => fetch.post(Api.TaskSupplyPlanCreate.url,
  { ...Api.TaskSupplyPlanCreate.data, ...data })
/**
 *  获取任务补充
 */
export const TaskSupplyPlanDetail = (data) => fetch.post(Api.TaskSupplyPlanDetail.url,
  { ...Api.TaskSupplyPlanDetail.data, ...data })
/**
 *  获取任务补充
 */
export const TaskSupplyPlanEdit = (data) => fetch.post(Api.TaskSupplyPlanEdit.url,
  { ...Api.TaskSupplyPlanEdit.data, ...data })
/**
 *  任务修改
 */
export const TaskPlanEdit = (data) => fetch.post(Api.TaskPlanEdit.url,
  { ...Api.TaskPlanEdit.data, ...data })
/**
 * 三会一课--会议计划列表
 */
export const MeetPlanPageList = (data) => fetch.post(Api.MeetPlanPageList.url,
  { ...Api.MeetPlanPageList.data, ...data })
/**
 * 三会一课--会议列表
 */
export const MeetPageList = (data) => fetch.post(Api.MeetPageList.url,
  { ...Api.MeetPageList.data, ...data })
/**
 * 三会一课--我的会议列表
 */
export const MyMeetPageList = (data) => fetch.post(Api.MyMeetPageList.url,
  { ...Api.MyMeetPageList.data, ...data })
/**
 * 三会一课--计划详情
 */
export const MeetPlanDetail = (data) => fetch.post(Api.MeetPlanDetail.url,
  { ...Api.MeetPlanDetail.data, ...data })
/**
 * 三会一课--计划发布
 */
export const MeetPlanCreate = (data) => fetch.post(Api.MeetPlanCreate.url,
  { ...Api.MeetPlanCreate.data, ...data })
/**
 * 三会一课--会议修改
 */
export const MeetPlanEdit = (data) => fetch.post(Api.MeetPlanEdit.url,
  { ...Api.MeetPlanEdit.data, ...data })
/**
 * 三会一课--会议详情
 */
export const MeetDetail = (data) => fetch.post(Api.MeetDetail.url,
  { ...Api.MeetDetail.data, ...data })
/**
 * 三会一课--会议类型
 */
export const MeetType = (data) => fetch.post(Api.MeetType.url, { ...data })
/**
 * 三会一课--会议计划状态
 */
export const MyMeetPlanStatus = (data) => fetch.post(Api.MyMeetPlanStatus.url, { ...data })
/**
 * 三会一课--会议状态
 */
export const MyMeetStatus = (data) => fetch.post(Api.MyMeetStatus.url, { ...data })
/**
 * 三会一课--签到方式
 */
export const SignType = (data) => fetch.post(Api.SignType.url, { ...data })
/**
 * 三会一课--提醒方式
 */
export const MeetRemindType = (data) => fetch.post(Api.MeetRemindType.url, { ...data })
/**
 * 三会一课--会议地点
 */
export const GroupRoomList = (data) => fetch.post(Api.GroupRoomList.url, { ...data })
/**
 *  上传附件（FileCode:文件名，FileType: TrainingAttachment）
 */
export const UploadAttachment = (data, config) => fetch.postFormData(Api.UploadAttachment.url, data,
  config)
/**
 * 三会一课--根据GroupId获取用户列表
 */
export const UserListByGroupId = (data) => fetch.post(Api.UserListByGroupId.url,
  { ...Api.UserListByGroupId.data, ...data })
/**
 * 三会一课--会议发布
 */
export const MeetCreate = (data) => fetch.post(Api.MeetCreate.url,
  { ...Api.MeetCreate.data, ...data })
/**
 * 三会一课--会议发布
 */
export const MeetEdit = (data) => fetch.post(Api.MeetEdit.url,
  { ...Api.MeetEdit.data, ...data })

/**
 * 三会一课--参与会议的人员
 */
export const MeetUserPageList = (data) => fetch.post(Api.MeetUserPageList.url,
  { ...Api.MeetUserPageList.data, ...data })
/**
 * 三会一课--签到与请假
 */
export const MeetSign = (data) => fetch.post(Api.MeetSign.url,
  { ...Api.MeetSign.data, ...data })
/**
 * 三会一课--会议纪要
 */
export const MeetSummaryCreate = (data) => fetch.post(Api.MeetSummaryCreate.url,
  { ...Api.MeetSummaryCreate.data, ...data })
/**
 * 三会一课--会议纪要
 */
export const MeetSummaryEdit = (data) => fetch.post(Api.MeetSummaryEdit.url,
  { ...Api.MeetSummaryEdit.data, ...data })
/**
 * 三会一课--会议纪要
 */
export const MeetSummaryDetail = (data) => fetch.post(Api.MeetSummaryDetail.url,
  { ...Api.MeetSummaryDetail.data, ...data })
/**
 * 三会一课--会议纪要
 */
export const MeetSummaryDelete = (data) => fetch.post(Api.MeetSummaryDelete.url,
  { ...Api.MeetSummaryDelete.data, ...data })
/**
 * 三会一课--会议纪要
 */
export const MeetSummaryPageList = (data) => fetch.post(Api.MeetSummaryPageList.url,
  { ...Api.MeetSummaryPageList.data, ...data })
/**
 * 群众走访--走访列表
 */
export const InterviewPageList = (data) => fetch.post(Api.InterviewPageList.url,
  { ...Api.InterviewPageList.data, ...data })
/**
 * 群众走访--走访列表(全部)
 */
export const InterviewPageListAll = (data) => fetch.post(Api.InterviewPageListAll.url,
  { ...Api.InterviewPageListAll.data, ...data })
/**
 * 群众走访--走访列表(与我相关)
 */
export const RelatedMeInterviewPageList = (data) => fetch.post(Api.RelatedMeInterviewPageList.url,
  { ...Api.RelatedMeInterviewPageList.data, ...data })
/**
 * 群众走访--新增走访
 */
export const InterviewCreate = (data) => fetch.post(Api.InterviewCreate.url,
  { ...Api.InterviewCreate.data, ...data })
/**
 * 群众走访--编辑走访
 */
export const InterviewEdit = (data) => fetch.post(Api.InterviewEdit.url,
  { ...Api.InterviewEdit.data, ...data })
/**
 * 群众走访--新增台账
 */
export const RecordCreate = (data) => fetch.post(Api.RecordCreate.url,
  { ...Api.RecordCreate.data, ...data })
/**
 * 群众走访--台账列表
 */
export const RecordPageList = (data) => fetch.post(Api.RecordPageList.url,
  { ...Api.RecordPageList.data, ...data })
/**
 * 群众走访--台账列表（用户）
 */
export const RecordPageListByUserId = (data) => fetch.post(Api.RecordPageListByUserId.url,
  { ...Api.RecordPageListByUserId.data, ...data })

/**
 * 群众走访--走访方式
 */
export const GetInterviewTypeTree = (data) => fetch.post(Api.GetInterviewTypeTree.url,
  { ...Api.GetInterviewTypeTree.data, ...data })
/**
 * 群众走访--走访状态
 */
export const InterviewStatus = (data) => fetch.post(Api.InterviewStatus.url, { ...data })
/**
 * 群众走访--走访详情
 */
export const InterviewDetail = (data) => fetch.post(Api.InterviewDetail.url,
  { ...Api.InterviewDetail.data, ...data })
/**
 * 群众走访--走访详情
 */
export const RecordDetail = (data) => fetch.post(Api.RecordDetail.url,
  { ...Api.RecordDetail.data, ...data })
/**
 * 三年规划--我的规划
 */
export const MyActionPlanPageList = (data) => fetch.post(Api.MyActionPlanPageList.url,
  { ...Api.MyActionPlanPageList.data, ...data })
/**
 * 三年规划--新增
 */
export const ActionPlanCreate = (data) => fetch.post(Api.ActionPlanCreate.url,
  { ...Api.ActionPlanCreate.data, ...data })
/**
 * 三年规划--新增规划修改
 */
export const ActionPlanEdit = (data) => fetch.post(Api.ActionPlanEdit.url,
  { ...Api.ActionPlanEdit.data, ...data })
/**
 * 三年规划--列表
 */
export const ActionPlanPageList = (data) => fetch.post(Api.ActionPlanPageList.url,
  { ...Api.ActionPlanPageList.data, ...data })
/**
 * 三年规划--获取三年行动规划补充
 */
export const ActionSupplyPlanDetail = (data) => fetch.post(Api.ActionSupplyPlanDetail.url,
  { ...Api.ActionSupplyPlanDetail, ...data })
/**
 * 三年规划--获取三年行动规划补充
 */
export const ActionPlanDetail = (data) => fetch.post(Api.ActionPlanDetail.url,
  { ...Api.ActionPlanDetail, ...data })
/**
 * 三年规划--新建三年行动规划补充
 */
export const ActionSupplyPlanCreate = (data) => fetch.post(Api.ActionSupplyPlanCreate.url,
  { ...Api.ActionSupplyPlanCreate, ...data })
/**
 * 三年规划--新建三年行动规划补充
 */
export const ActionSupplyPlanPageList = (data) => fetch.post(Api.ActionSupplyPlanPageList.url,
  { ...Api.ActionSupplyPlanPageList, ...data })
/**
 * 三年规划--新建三年行动规划补充
 */
export const ActionSupplyPlanEdit = (data) => fetch.post(Api.ActionSupplyPlanEdit.url,
  { ...Api.ActionSupplyPlanEdit, ...data })
/**
 * 蜂巢计划--新建蜂巢计划
 */
export const HivePlanCreate = (data) => fetch.post(Api.HivePlanCreate.url,
  { ...Api.HivePlanCreate.data, ...data })
/**
 * 蜂巢计划--修改蜂巢计划
 */
export const HivePlanEdit = (data) => fetch.post(Api.HivePlanEdit.url,
  { ...Api.HivePlanEdit.data, ...data })
/**
 * 蜂巢计划--蜂巢计划详情
 */
export const HivePlanDetail = (data) => fetch.post(Api.HivePlanDetail.url,
  { ...Api.HivePlanDetail.data, ...data })
/**
 * 蜂巢计划--蜂巢计划列表
 */
export const HivePlanPageList = (data) => fetch.post(Api.HivePlanPageList.url,
  { ...Api.HivePlanPageList.data, ...data })

/**
 * 蜂巢计划--新建蜂巢计划补充
 */
export const HiveSupplyPlanCreate = (data) => fetch.post(Api.HiveSupplyPlanCreate.url,
  { ...Api.HiveSupplyPlanCreate.data, ...data })

/**
 * 蜂巢计划--修改蜂巢计划补充
 */
export const HiveSupplyPlanEdit = (data) => fetch.post(Api.HiveSupplyPlanEdit.url,
  { ...Api.HiveSupplyPlanEdit.data, ...data })

/**
 * 蜂巢计划--蜂巢计划补充详细
 */
export const HiveSupplyPlanDetail = (data) => fetch.post(Api.HiveSupplyPlanDetail.url,
  { ...Api.HiveSupplyPlanDetail.data, ...data })

/**
 * 蜂巢计划--蜂巢计划补充列表
 */
export const HiveSupplyPlanPageList = (data) => fetch.post(Api.HiveSupplyPlanPageList.url,
  { ...Api.HiveSupplyPlanPageList.data, ...data })
/**
 * 蜂巢计划--我的蜂巢计划
 */
export const MyHivePlanPageList = (data) => fetch.post(Api.MyHivePlanPageList.url,
  { ...Api.MyHivePlanPageList.data, ...data })
// 党费缴纳--党费管理-我的（包含已缴，未缴）
export const GetPaymentItemList = (data) => fetch.post(Api.GetPaymentItemList.url,
  { ...Api.GetPaymentItemList.data, ...data })
// 党费缴纳--党费管理-我的（包含已缴，未缴）
export const GetMyPaymentItemList = (data) => fetch.post(Api.GetMyPaymentItemList.url,
  { ...Api.GetMyPaymentItemList.data, ...data })
// 党费缴纳-党费管理-我的（包含代缴）
export const GetMyPayerOtherPaymentItemList = (data) => fetch.post(
  Api.GetMyPayerOtherPaymentItemList.url,
  { ...Api.GetMyPayerOtherPaymentItemList.data, ...data })
// 党费缴纳-获取党费缴纳
export const PaymentItemDetail = (data) => fetch.post(Api.PaymentItemDetail.url,
  { ...Api.PaymentItemDetail.data, ...data })
// 党费缴纳-党费统计-查询登录人代缴的记录
export const GetPaymentItemRecordByPayerList = (data) => fetch.post(
  Api.GetPaymentItemRecordByPayerList.url,
  { ...Api.GetPaymentItemRecordByPayerList.data, ...data })
// 党费缴纳-党费统计-查询登录人代缴的记录
export const GetPaymentItemUserByPaymentItemId = (data) => fetch.post(
  Api.GetPaymentItemUserByPaymentItemId.url,
  { ...Api.GetPaymentItemUserByPaymentItemId.data, ...data })
// 党费缴纳-党费统计-查询登录人代缴的记录
export const GetPaymentItemUserByPaymentItem = (data) => fetch.post(
  Api.GetPaymentItemUserByPaymentItem.url,
  { ...Api.GetPaymentItemUserByPaymentItem.data, ...data })

/**
 * 民主测评--下拉类型
 */
export const EvalTypePageList = (data) => fetch.post(Api.EvalTypePageList.url,
  { ...Api.EvalTypePageList.data, ...data })

/**
 * 民主测评--评议管理列表
 */
export const EvaluatePageList = (data) => fetch.post(Api.EvaluatePageList.url,
  { ...Api.EvaluatePageList.data, ...data })

/**
 * 民主测评--评议管理新增
 */
export const EvalCreate = (data) => fetch.post(Api.EvalCreate.url,
  { ...Api.EvalCreate.data, ...data })

/**
 * 民主测评--评议管理修改
 */
export const EvalEdit = (data) => fetch.post(Api.EvalEdit.url,
  { ...Api.EvalEdit.data, ...data })

/**
 * 民主测评--评议管理详细
 */
export const EvalDetail = (data) => fetch.post(Api.EvalDetail.url,
  { ...Api.EvalDetail.data, ...data })

/**
 * 民主测评--我的评议 列表
 */
export const MyEvalPageList = (data) => fetch.post(Api.MyEvalPageList.url,
  { ...Api.MyEvalPageList.data, ...data })

/**
 * 民主测评--提交评议
 */
export const SubmitEval = (data) => fetch.post(Api.SubmitEval.url,
  { ...Api.SubmitEval.data, ...data })

/**
 * 民主测评--被评议单位 详细
 */
export const EvalGroupDetail = (data) => fetch.post(Api.EvalGroupDetail.url,
  { ...Api.EvalGroupDetail.data, ...data })

/**
 * 民主测评--被评议人员 详细更多（包含任务头像 职务等）
 */
export const EvalUserDetail = (data) => fetch.post(Api.EvalUserDetail.url,
  { ...Api.EvalUserDetail.data, ...data })

/**
 * 民主测评--被评议对象列表 详细更多（包含任务头像 职务等）
 */
export const EvalUserList = (data) => fetch.post(Api.EvalUserList.url,
  { ...Api.EvalUserList.data, ...data })
/**
 * 照片墙--新建照片墙
 */
export const PhotoWallCreate = (data) => fetch.post(Api.PhotoWallCreate.url,
  { ...Api.PhotoWallCreate.data, ...data })
/**
 * 照片墙--获取照片墙
 */
export const PhotoWallDetail = (data) => fetch.post(Api.PhotoWallDetail.url,
  { ...Api.PhotoWallDetail.data, ...data })
/**
 * 照片墙--修改照片墙
 */
export const PhotoWallEdit = (data) => fetch.post(Api.PhotoWallEdit.url,
  { ...Api.PhotoWallEdit.data, ...data })
/**
 * 照片墙--照片墙列表
 */
export const PhotoWallPageList = (data) => fetch.post(Api.PhotoWallPageList.url,
  { ...Api.PhotoWallPageList.data, ...data })
/**
 * 照片墙--我的照片墙列表
 */
export const MyPhotoWallPageList = (data) => fetch.post(Api.MyPhotoWallPageList.url,
  { ...Api.MyPhotoWallPageList.data, ...data })
/**
 * 照片墙--照片墙点赞
 */
export const ThumbsUpCreate = (data) => fetch.post(Api.ThumbsUpCreate.url,
  { ...Api.ThumbsUpCreate.data, ...data })
/**
 * 照片墙--浏览点击数接口
 */
export const PhotoWallBrowse = (data) => fetch.post(Api.PhotoWallBrowse.url,
  { ...Api.PhotoWallBrowse.data, ...data })
/**
 * 照片墙--照片墙评论、回复
 */
export const PhotoWallCommentAdd = (data) => fetch.post(Api.PhotoWallCommentAdd.url,
  { ...Api.PhotoWallCommentAdd.data, ...data })
/**
 * 照片墙--照片墙评论、回复列表
 */
export const PhotoWallCommentList = (data) => fetch.post(Api.PhotoWallCommentList.url,
  { ...Api.PhotoWallCommentList.data, ...data })
/**
 * 照片墙--获取评论回复记录
 */
export const PhotoWallCommentReplyList = (data) => fetch.post(Api.PhotoWallCommentReplyList.url,
  { ...Api.PhotoWallCommentReplyList.data, ...data })
/**
 * 照片墙--报名
 */
export const PhotoWallUpdateTrainingStudentup = (data) => fetch.post(
  Api.PhotoWallUpdateTrainingStudentup.url,
  { ...Api.PhotoWallUpdateTrainingStudentup.data, ...data })
/**
 * 照片墙--取消报名
 */
export const PhotoWallUpdateTrainingStudentdown = (data) => fetch.post(
  Api.PhotoWallUpdateTrainingStudentdown.url,
  { ...Api.PhotoWallUpdateTrainingStudentdown.data, ...data })
/**
 * 先锋指数--获取先锋指数
 */
export const GetVanIndex = (data) => fetch.post(Api.GetVanIndex.url,
  { ...Api.GetVanIndex.data, ...data })
/**
 * 志愿者活动--新建志愿者活动
 */
export const ActivityCreate = (data) => fetch.post(Api.ActivityCreate.url,
  { ...Api.ActivityCreate.data, ...data })
/**
 * 志愿者活动--获取志愿者活动
 */
export const ActivityDetail = (data) => fetch.post(Api.ActivityDetail.url,
  { ...Api.ActivityDetail.data, ...data })
/**
 * 志愿者活动--修改志愿者活动
 */
export const ActivityEdit = (data) => fetch.post(Api.ActivityEdit.url,
  { ...Api.ActivityEdit.data, ...data })
/**
 * 志愿者活动--志愿者活动列表
 */
export const ActivityPageList = (data) => fetch.post(Api.ActivityPageList.url,
  { ...Api.ActivityPageList.data, ...data })
/**
 * 志愿者活动--热门活动
 */
export const HotActivityList = (data) => fetch.post(Api.HotActivityList.url,
  { ...Api.HotActivityList.data, ...data })
/**
 * 志愿者活动--热门活动
 */
export const MyActivityList = (data) => fetch.post(Api.MyActivityList.url,
  { ...Api.MyActivityList.data, ...data })
/**
 * 志愿者活动--新建志愿者报名
 */
export const ActivitySignCreate = (data) => fetch.post(Api.ActivitySignCreate.url,
  { ...Api.ActivitySignCreate.data, ...data })
/**
 * 志愿者活动--志愿者报名列表
 */
export const ActivitySignPageList = (data) => fetch.post(Api.ActivitySignPageList.url,
  { ...Api.ActivitySignPageList.data, ...data })
/**
 * 志愿者活动--志愿者评价、回复列表
 */
export const ActivityCommentList = (data) => fetch.post(Api.ActivityCommentList.url,
  { ...Api.ActivityCommentList.data, ...data })
/**
 * 志愿者活动--获取评论回复记录
 */
export const ActivityCommentReplyList = (data) => fetch.post(Api.ActivityCommentReplyList.url,
  { ...Api.ActivityCommentReplyList.data, ...data })
/**
 * 志愿者活动--志愿者活动评价/回复
 */
export const ActivityCommentAdd = (data) => fetch.post(Api.ActivityCommentAdd.url,
  { ...Api.ActivityCommentAdd.data, ...data })
/**
 * 志愿者活动--志愿者活动签到
 */
export const ActivitySignIn = (data) => fetch.post(Api.ActivitySignIn.url,
  { ...Api.ActivitySignIn.data, ...data })
/**
 * 思想汇报--管理员列表
 */
export const MyIdeoPageList = (data) => fetch.post(Api.MyIdeoPageList.url,
  { ...Api.MyIdeoPageList.data, ...data })
/**
 * 思想汇报--新增
 */
export const IdeoCreate = (data) => fetch.post(Api.IdeoCreate.url,
  { ...Api.IdeoCreate.data, ...data })
/**
 * 思想汇报--新增
 */
export const IdeoEdit = (data) => fetch.post(Api.IdeoEdit.url,
  { ...Api.IdeoEdit.data, ...data })
/**
 * 思想汇报--审核
 */
export const IdeoAudit = (data) => fetch.post(Api.IdeoAudit.url,
  { ...Api.IdeoAudit.data, ...data })
/**
 * 思想汇报--删除
 */
export const IdeoDelete = (data) => fetch.post(Api.IdeoDelete.url,
  { ...Api.IdeoDelete.data, ...data })
/**
 * 思想汇报--详情
 */
export const IdeoDetail = (data) => fetch.post(Api.IdeoDetail.url,
  { ...Api.IdeoDetail.data, ...data })
/**
 * 通用 添加评论
 * 评论类型 PhotoWall-照片墙，Activity-志愿者活动，Article-新闻文章类等
 */
export const EnumCommentAdd = (data) => fetch.post(Api.EnumCommentAdd.url,
  { ...Api.EnumCommentAdd.data, ...data })
/**
 * 通用 评论列表
 * 评论类型 PhotoWall-照片墙，Activity-志愿者活动，Article-新闻文章类等
 */
export const EnumCommentList = (data) => fetch.post(Api.EnumCommentList.url,
  { ...Api.EnumCommentList.data, ...data })
/**
 * 通用 回复列表
 * 评论类型 PhotoWall-照片墙，Activity-志愿者活动，Article-新闻文章类等
 */
export const EnumCommentReplyList = (data) => fetch.post(Api.EnumCommentReplyList.url,
  { ...Api.EnumCommentReplyList.data, ...data })
/**
 * 通用 点赞
 *
 */
export const EnumThumbsUpCreate = (data) => fetch.post(Api.EnumThumbsUpCreate.url,
  { ...Api.EnumThumbsUpCreate.data, ...data })
/**
 * 通用 取消点赞
 */
export const EnumThumbsUpCancle = (data) => fetch.post(Api.EnumThumbsUpCancle.url,
  { ...Api.EnumThumbsUpCancle.data, ...data })
/**
 *  场地预约 查询
 */
export const PlaceReserve = (data) => fetch.post(Api.PlaceReserve.url,
  { ...Api.PlaceReserve.data, ...data })
/**
 *  场地预约 查询详情
 */
export const PlaceReserveDetails = (data) => fetch.post(Api.PlaceReserveDetails.url,
  { ...Api.PlaceReserveDetails.data, ...data })
/**
 *  场地 报名
 */
export const AddPlaceReserve = (data) => fetch.post(Api.AddPlaceReserve.url,
  { ...Api.AddPlaceReserve.data, ...data })
/**
 *  场地 取消报名
 */
export const DeletePlaceReserve = (data) => fetch.post(Api.DeletePlaceReserve.url,
  { ...Api.DeletePlaceReserve.data, ...data })
/**
 *  场地查询
 */
export const GetPlaceList = (data) => fetch.post(Api.GetPlaceList.url,
  { ...Api.GetPlaceList.data, ...data })
// 图书借阅记录添加
export const AddBookRecord = (data) => fetch.post(Api.AddBookRecord.url,
  { ...Api.AddBookRecord.data, ...data })
// 图书借阅记录查询
export const GetBookRecordList = (data) => fetch.post(Api.GetBookRecordList.url,
  { ...Api.GetBookRecordList.data, ...data })
// 还书
export const UpdateBookRecord = (data) => fetch.post(Api.UpdateBookRecord.url,
  { ...Api.UpdateBookRecord.data, ...data })
// 入党纪念列表
export const UserListPartyDay = (data) => fetch.post(Api.UserListPartyDay.url,
  { ...Api.UserListPartyDay.data, ...data })

/* 将所有的API封装起来 */
const allApi = {}
for (let key in Api) {
  if (Api[key].method === 'get') {
    if (key === 'GetNoticeInfoContent') {
      allApi[key] = (data) => fetch.get(Api[key].url + '/' + data.Id, { ...Api[key].data, ...data })
    } else {
      allApi[key] = (data) => fetch.get(Api[key].url, { ...Api[key].data, ...data })
    }
  } else if (Api[key].method === 'formData') {
    allApi[key] = (data, config) => fetch.postFormData(Api[key].url, data, config)
  } else {
    allApi[key] = (data) => fetch.post(Api[key].url, { ...Api[key].data, ...data })
  }
}
export default allApi
