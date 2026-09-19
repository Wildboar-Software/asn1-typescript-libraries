/* eslint-disable */
import {
    BOOLEAN,
    INTEGER,
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AccessPolicyType, _decode_AccessPolicyType, _encode_AccessPolicyType } from "../EpsHI2Operations/AccessPolicyType.ta.mjs";
// export { AccessPolicyType, _decode_AccessPolicyType, _encode_AccessPolicyType } from "../EpsHI2Operations/AccessPolicyType.ta.mjs";
import { AlertIndicator, _decode_AlertIndicator, _encode_AlertIndicator, _enum_for_AlertIndicator } from "../EpsHI2Operations/AlertIndicator.ta.mjs";
// export { AlertIndicator, _enum_for_AlertIndicator, AlertIndicator_sent /* IMPORTED_LONG_ENUMERATION_ITEM */, sent /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertIndicator_received /* IMPORTED_LONG_ENUMERATION_ITEM */, AlertIndicator_cancelled /* IMPORTED_LONG_ENUMERATION_ITEM */, cancelled /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AlertIndicator, _encode_AlertIndicator } from "../EpsHI2Operations/AlertIndicator.ta.mjs";
import { AssociatePresenceStatus, _decode_AssociatePresenceStatus, _encode_AssociatePresenceStatus } from "../EpsHI2Operations/AssociatePresenceStatus.ta.mjs";
// export { AssociatePresenceStatus, _decode_AssociatePresenceStatus, _encode_AssociatePresenceStatus } from "../EpsHI2Operations/AssociatePresenceStatus.ta.mjs";
import { Bearer_capability_str, _decode_Bearer_capability_str, _encode_Bearer_capability_str } from "../EpsHI2Operations/Bearer-capability-str.ta.mjs";
// export { Bearer_capability_str, _decode_Bearer_capability_str, _encode_Bearer_capability_str } from "../EpsHI2Operations/Bearer-capability-str.ta.mjs";
import { Emergency, _decode_Emergency, _encode_Emergency, _enum_for_Emergency } from "../EpsHI2Operations/Emergency.ta.mjs";
// export { Emergency, _enum_for_Emergency, Emergency_imminent /* IMPORTED_LONG_ENUMERATION_ITEM */, imminent /* IMPORTED_SHORT_ENUMERATION_ITEM */, Emergency_peril /* IMPORTED_LONG_ENUMERATION_ITEM */, peril /* IMPORTED_SHORT_ENUMERATION_ITEM */, Emergency_cancel /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_Emergency, _encode_Emergency } from "../EpsHI2Operations/Emergency.ta.mjs";
import { EmergencyGroupState, _decode_EmergencyGroupState, _encode_EmergencyGroupState } from "../EpsHI2Operations/EmergencyGroupState.ta.mjs";
// export { EmergencyGroupState, _decode_EmergencyGroupState, _encode_EmergencyGroupState } from "../EpsHI2Operations/EmergencyGroupState.ta.mjs";
import { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
// export { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
import { PTCType, _decode_PTCType, _encode_PTCType, _enum_for_PTCType } from "../EpsHI2Operations/PTCType.ta.mjs";
// export { PTCType, _enum_for_PTCType, PTCType_pTCStartofInterception /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCStartofInterception /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCServinSystem /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCServinSystem /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCSessionInitiation /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCSessionInitiation /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCSessionAbandonEndRecord /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCSessionAbandonEndRecord /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCSessionStartContinueRecord /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCSessionStartContinueRecord /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCSessionEndRecord /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCSessionEndRecord /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCPre_EstablishedSessionSessionRecord /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCPre_EstablishedSessionSessionRecord /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCInstantPersonalAlert /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCInstantPersonalAlert /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCPartyJoin /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCPartyJoin /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCPartyDrop /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCPartyDrop /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCPartyHold_RetrieveRecord /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCPartyHold_RetrieveRecord /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCMediaModification /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCMediaModification /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCGroupAdvertizement /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCGroupAdvertizement /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCFloorConttrol /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCFloorConttrol /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCTargetPressence /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCTargetPressence /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCAssociatePressence /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCAssociatePressence /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCListManagementEvents /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCListManagementEvents /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCAccessPolicyEvents /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCAccessPolicyEvents /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCMediaTypeNotification /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCMediaTypeNotification /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCGroupCallRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCGroupCallRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCGroupCallCancel /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCGroupCallCancel /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCGroupCallResponse /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCGroupCallResponse /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCGroupCallInterrogate /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCGroupCallInterrogate /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCMCPTTImminentGroupCall /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCMCPTTImminentGroupCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCCC /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCCC /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCRegistration /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCRegistration /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCEncryption /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCEncryption /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PTCType, _encode_PTCType } from "../EpsHI2Operations/PTCType.ta.mjs";
import { FloorActivity, _decode_FloorActivity, _encode_FloorActivity } from "../EpsHI2Operations/FloorActivity.ta.mjs";
// export { FloorActivity, _decode_FloorActivity, _encode_FloorActivity } from "../EpsHI2Operations/FloorActivity.ta.mjs";
import { PTCAddress, _decode_PTCAddress, _encode_PTCAddress } from "../EpsHI2Operations/PTCAddress.ta.mjs";
// export { PTCAddress, _decode_PTCAddress, _encode_PTCAddress } from "../EpsHI2Operations/PTCAddress.ta.mjs";
import { GroupAuthRule, _decode_GroupAuthRule, _encode_GroupAuthRule, _enum_for_GroupAuthRule } from "../EpsHI2Operations/GroupAuthRule.ta.mjs";
// export { GroupAuthRule, _enum_for_GroupAuthRule, GroupAuthRule_allow_Initiating_PtcSession /* IMPORTED_LONG_ENUMERATION_ITEM */, allow_Initiating_PtcSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, GroupAuthRule_block_Initiating_PtcSession /* IMPORTED_LONG_ENUMERATION_ITEM */, block_Initiating_PtcSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, GroupAuthRule_allow_Joining_PtcSession /* IMPORTED_LONG_ENUMERATION_ITEM */, allow_Joining_PtcSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, GroupAuthRule_block_Joining_PtcSession /* IMPORTED_LONG_ENUMERATION_ITEM */, block_Joining_PtcSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, GroupAuthRule_allow_Add_Participants /* IMPORTED_LONG_ENUMERATION_ITEM */, allow_Add_Participants /* IMPORTED_SHORT_ENUMERATION_ITEM */, GroupAuthRule_block_Add_Participants /* IMPORTED_LONG_ENUMERATION_ITEM */, block_Add_Participants /* IMPORTED_SHORT_ENUMERATION_ITEM */, GroupAuthRule_allow_Subscription_PtcSession_State /* IMPORTED_LONG_ENUMERATION_ITEM */, allow_Subscription_PtcSession_State /* IMPORTED_SHORT_ENUMERATION_ITEM */, GroupAuthRule_block_Subscription_PtcSession_State /* IMPORTED_LONG_ENUMERATION_ITEM */, block_Subscription_PtcSession_State /* IMPORTED_SHORT_ENUMERATION_ITEM */, GroupAuthRule_allow_Anonymity /* IMPORTED_LONG_ENUMERATION_ITEM */, allow_Anonymity /* IMPORTED_SHORT_ENUMERATION_ITEM */, GroupAuthRule_forbid_Anonymity /* IMPORTED_LONG_ENUMERATION_ITEM */, forbid_Anonymity /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_GroupAuthRule, _encode_GroupAuthRule } from "../EpsHI2Operations/GroupAuthRule.ta.mjs";
import { ImminentPerilInd, _decode_ImminentPerilInd, _encode_ImminentPerilInd, _enum_for_ImminentPerilInd } from "../EpsHI2Operations/ImminentPerilInd.ta.mjs";
// export { ImminentPerilInd, _enum_for_ImminentPerilInd, ImminentPerilInd_request /* IMPORTED_LONG_ENUMERATION_ITEM */, request /* IMPORTED_SHORT_ENUMERATION_ITEM */, ImminentPerilInd_response /* IMPORTED_LONG_ENUMERATION_ITEM */, response /* IMPORTED_SHORT_ENUMERATION_ITEM */, ImminentPerilInd_cancel /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_ImminentPerilInd, _encode_ImminentPerilInd } from "../EpsHI2Operations/ImminentPerilInd.ta.mjs";
import { ImplicitFloorReq, _decode_ImplicitFloorReq, _encode_ImplicitFloorReq, _enum_for_ImplicitFloorReq } from "../EpsHI2Operations/ImplicitFloorReq.ta.mjs";
// export { ImplicitFloorReq, _enum_for_ImplicitFloorReq, ImplicitFloorReq_join /* IMPORTED_LONG_ENUMERATION_ITEM */, join /* IMPORTED_SHORT_ENUMERATION_ITEM */, ImplicitFloorReq_rejoin /* IMPORTED_LONG_ENUMERATION_ITEM */, rejoin /* IMPORTED_SHORT_ENUMERATION_ITEM */, ImplicitFloorReq_release /* IMPORTED_LONG_ENUMERATION_ITEM */, release /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ImplicitFloorReq, _encode_ImplicitFloorReq } from "../EpsHI2Operations/ImplicitFloorReq.ta.mjs";
import { InitiationCause, _decode_InitiationCause, _encode_InitiationCause, _enum_for_InitiationCause } from "../EpsHI2Operations/InitiationCause.ta.mjs";
// export { InitiationCause, _enum_for_InitiationCause, InitiationCause_requests /* IMPORTED_LONG_ENUMERATION_ITEM */, requests /* IMPORTED_SHORT_ENUMERATION_ITEM */, InitiationCause_received /* IMPORTED_LONG_ENUMERATION_ITEM */, InitiationCause_pTCOriginatingId /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCOriginatingId /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_InitiationCause, _encode_InitiationCause } from "../EpsHI2Operations/InitiationCause.ta.mjs";
import { IPADirection, _decode_IPADirection, _encode_IPADirection, _enum_for_IPADirection } from "../EpsHI2Operations/IPADirection.ta.mjs";
// export { IPADirection, _enum_for_IPADirection, IPADirection_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, IPADirection_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_IPADirection, _encode_IPADirection } from "../EpsHI2Operations/IPADirection.ta.mjs";
import { ListManagementAction, _decode_ListManagementAction, _encode_ListManagementAction, _enum_for_ListManagementAction } from "../EpsHI2Operations/ListManagementAction.ta.mjs";
// export { ListManagementAction, _enum_for_ListManagementAction, ListManagementAction_create /* IMPORTED_LONG_ENUMERATION_ITEM */, create /* IMPORTED_SHORT_ENUMERATION_ITEM */, ListManagementAction_modify /* IMPORTED_LONG_ENUMERATION_ITEM */, ListManagementAction_retrieve /* IMPORTED_LONG_ENUMERATION_ITEM */, retrieve /* IMPORTED_SHORT_ENUMERATION_ITEM */, ListManagementAction_delete /* IMPORTED_LONG_ENUMERATION_ITEM */, delete_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, ListManagementAction_notify /* IMPORTED_LONG_ENUMERATION_ITEM */, notify /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ListManagementAction, _encode_ListManagementAction } from "../EpsHI2Operations/ListManagementAction.ta.mjs";
import { ListManagementType, _decode_ListManagementType, _encode_ListManagementType, _enum_for_ListManagementType } from "../EpsHI2Operations/ListManagementType.ta.mjs";
// export { ListManagementType, _enum_for_ListManagementType, ListManagementType_contactListManagementAttempt /* IMPORTED_LONG_ENUMERATION_ITEM */, contactListManagementAttempt /* IMPORTED_SHORT_ENUMERATION_ITEM */, ListManagementType_groupListManagementAttempt /* IMPORTED_LONG_ENUMERATION_ITEM */, groupListManagementAttempt /* IMPORTED_SHORT_ENUMERATION_ITEM */, ListManagementType_contactListManagementResult /* IMPORTED_LONG_ENUMERATION_ITEM */, contactListManagementResult /* IMPORTED_SHORT_ENUMERATION_ITEM */, ListManagementType_groupListManagementResult /* IMPORTED_LONG_ENUMERATION_ITEM */, groupListManagementResult /* IMPORTED_SHORT_ENUMERATION_ITEM */, ListManagementType_requestSuccessful /* IMPORTED_LONG_ENUMERATION_ITEM */, requestSuccessful /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ListManagementType, _encode_ListManagementType } from "../EpsHI2Operations/ListManagementType.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../EpsHI2Operations/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../EpsHI2Operations/Location.ta.mjs";
import { Priority_Level, _decode_Priority_Level, _encode_Priority_Level, _enum_for_Priority_Level } from "../EpsHI2Operations/Priority-Level.ta.mjs";
// export { Priority_Level, _enum_for_Priority_Level, Priority_Level_pre_emptive /* IMPORTED_LONG_ENUMERATION_ITEM */, pre_emptive /* IMPORTED_SHORT_ENUMERATION_ITEM */, Priority_Level_high_priority /* IMPORTED_LONG_ENUMERATION_ITEM */, high_priority /* IMPORTED_SHORT_ENUMERATION_ITEM */, Priority_Level_normal_priority /* IMPORTED_LONG_ENUMERATION_ITEM */, normal_priority /* IMPORTED_SHORT_ENUMERATION_ITEM */, Priority_Level_listen_only /* IMPORTED_LONG_ENUMERATION_ITEM */, listen_only /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Priority_Level, _encode_Priority_Level } from "../EpsHI2Operations/Priority-Level.ta.mjs";
import { PreEstStatus, _decode_PreEstStatus, _encode_PreEstStatus, _enum_for_PreEstStatus } from "../EpsHI2Operations/PreEstStatus.ta.mjs";
// export { PreEstStatus, _enum_for_PreEstStatus, PreEstStatus_established /* IMPORTED_LONG_ENUMERATION_ITEM */, established /* IMPORTED_SHORT_ENUMERATION_ITEM */, PreEstStatus_modify /* IMPORTED_LONG_ENUMERATION_ITEM */, PreEstStatus_released /* IMPORTED_LONG_ENUMERATION_ITEM */, released /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PreEstStatus, _encode_PreEstStatus } from "../EpsHI2Operations/PreEstStatus.ta.mjs";
import { RegistrationRequest, _decode_RegistrationRequest, _encode_RegistrationRequest, _enum_for_RegistrationRequest } from "../EpsHI2Operations/RegistrationRequest.ta.mjs";
// export { RegistrationRequest, _enum_for_RegistrationRequest, RegistrationRequest_register /* IMPORTED_LONG_ENUMERATION_ITEM */, register /* IMPORTED_SHORT_ENUMERATION_ITEM */, RegistrationRequest_re_register /* IMPORTED_LONG_ENUMERATION_ITEM */, re_register /* IMPORTED_SHORT_ENUMERATION_ITEM */, RegistrationRequest_de_register /* IMPORTED_LONG_ENUMERATION_ITEM */, de_register /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RegistrationRequest, _encode_RegistrationRequest } from "../EpsHI2Operations/RegistrationRequest.ta.mjs";
import { RegistrationOutcome, _decode_RegistrationOutcome, _encode_RegistrationOutcome, _enum_for_RegistrationOutcome } from "../EpsHI2Operations/RegistrationOutcome.ta.mjs";
// export { RegistrationOutcome, _enum_for_RegistrationOutcome, RegistrationOutcome_success /* IMPORTED_LONG_ENUMERATION_ITEM */, success /* IMPORTED_SHORT_ENUMERATION_ITEM */, RegistrationOutcome_failure /* IMPORTED_LONG_ENUMERATION_ITEM */, failure /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RegistrationOutcome, _encode_RegistrationOutcome } from "../EpsHI2Operations/RegistrationOutcome.ta.mjs";
import { RTPSetting, _decode_RTPSetting, _encode_RTPSetting } from "../EpsHI2Operations/RTPSetting.ta.mjs";
// export { RTPSetting, _decode_RTPSetting, _encode_RTPSetting } from "../EpsHI2Operations/RTPSetting.ta.mjs";
import { Talk_burst_reason_code, _decode_Talk_burst_reason_code, _encode_Talk_burst_reason_code } from "../EpsHI2Operations/Talk-burst-reason-code.ta.mjs";
// export { Talk_burst_reason_code, _decode_Talk_burst_reason_code, _encode_Talk_burst_reason_code } from "../EpsHI2Operations/Talk-burst-reason-code.ta.mjs";
import { TalkburstControlSetting, _decode_TalkburstControlSetting, _encode_TalkburstControlSetting } from "../EpsHI2Operations/TalkburstControlSetting.ta.mjs";
// export { TalkburstControlSetting, _decode_TalkburstControlSetting, _encode_TalkburstControlSetting } from "../EpsHI2Operations/TalkburstControlSetting.ta.mjs";


/**
 * @summary PTC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTC ::= SEQUENCE {
 *  abandonCause [1] UTF8String OPTIONAL,
 *  accessPolicyFailure [2] UTF8String OPTIONAL,
 *  accessPolicyType [3] AccessPolicyType OPTIONAL,
 *  alertIndicator [5] AlertIndicator OPTIONAL,
 *  associatePresenceStatus [6] AssociatePresenceStatus OPTIONAL,
 *  bearer-capability-str [7] Bearer-capability-str OPTIONAL,
 *  -- identifies the Bearer capability information element (value part)
 *  broadcastIndicator [8] BOOLEAN OPTIONAL,
 *  -- default False, true indicates this is a braodcast to a group
 *  contactID [9] UTF8String OPTIONAL,
 *  emergency [10] Emergency OPTIONAL,
 *  emergencyGroupState [11] EmergencyGroupState OPTIONAL,
 *  timeStamp [12] TimeStamp,
 *  pTCType [13] PTCType OPTIONAL,
 *  failureCode [14] UTF8String OPTIONAL,
 *  floorActivity [15] FloorActivity OPTIONAL,
 *  floorSpeakerID [16] PTCAddress OPTIONAL,
 *  groupAdSender [17] UTF8String OPTIONAL,
 *  -- Identifies the group administrator who was the originator of the group call.
 *  -- tag [18] was used in r15 (15) version-4 (4)
 *  groupAuthRule [19] GroupAuthRule OPTIONAL,
 *  groupCharacteristics [20] UTF8String OPTIONAL,
 *  holdRetrieveInd [21] BOOLEAN OPTIONAL,
 *  -- true indicates target is placed on hold, false indicates target was retrived from hold.
 *  -- tag [22] was used in r15 (15) version-4 (4)
 *  imminentPerilInd [23] ImminentPerilInd OPTIONAL,
 *  implicitFloorReq [24] ImplicitFloorReq OPTIONAL,
 *  initiationCause [25] InitiationCause OPTIONAL,
 *  invitationCause [26] UTF8String OPTIONAL,
 *  iPAPartyID [27] UTF8String OPTIONAL,
 *  iPADirection [28] IPADirection OPTIONAL,
 *  listManagementAction [29] ListManagementAction OPTIONAL,
 *  listManagementFailure [30] UTF8String OPTIONAL,
 *  listManagementType [31] ListManagementType OPTIONAL,
 *  maxTBTime [32] UTF8String OPTIONAL, -- defined in seconds.
 *  mCPTTGroupID [33] UTF8String OPTIONAL,
 *  mCPTTID [34] UTF8String OPTIONAL,
 *  mCPTTInd [35] BOOLEAN OPTIONAL,
 *  -- default False indicates to associate from target, true indicates to the target.
 *  location [36] Location OPTIONAL,
 *  mCPTTOrganizationName [37] UTF8String OPTIONAL,
 *  mediaStreamAvail [38] BOOLEAN OPTIONAL,
 *  -- True indicates available for media, false indicates not able to accept media.
 *  priority-Level [40] Priority-Level OPTIONAL,
 *  preEstSessionID [41] UTF8String OPTIONAL,
 *  preEstStatus [42] PreEstStatus OPTIONAL,
 *  pTCGroupID [43] UTF8String OPTIONAL,
 *  pTCIDList [44] UTF8String OPTIONAL,
 *  pTCMediaCapability [45] UTF8String OPTIONAL,
 *  pTCOriginatingId [46] UTF8String OPTIONAL,
 *  pTCOther [47] UTF8String OPTIONAL,
 *  pTCParticipants [48] UTF8String OPTIONAL,
 *  pTCParty [49] UTF8String OPTIONAL,
 *  pTCPartyDrop [50] UTF8String OPTIONAL,
 *  pTCSessionInfo [51] UTF8String OPTIONAL,
 *  pTCServerURI [52] UTF8String OPTIONAL,
 *  pTCUserAccessPolicy [53] UTF8String OPTIONAL,
 *  pTCAddress [54] PTCAddress OPTIONAL,
 *  queuedFloorControl [55] BOOLEAN OPTIONAL,
 *  --Default FALSE,send TRUE if Queued floor control is used.
 *  queuedPosition [56] UTF8String OPTIONAL,
 *  -- indicates the queued position of the Speaker (Target or associate) who has the
 *  -- right to speak.
 *  registrationRequest [57] RegistrationRequest OPTIONAL,
 *  registrationOutcome [58] RegistrationOutcome OPTIONAL,
 *  retrieveID [59] UTF8String OPTIONAL,
 *  rTPSetting [60] RTPSetting OPTIONAL,
 *  talkBurstPriority [61] Priority-Level OPTIONAL,
 *  talkBurstReason [62] Talk-burst-reason-code OPTIONAL,
 *  -- Talk-burst-reason-code Defined according to the rules and procedures
 *  -- in (OMA-PoC-AD [97])
 *  talkburstControlSetting [63] TalkburstControlSetting OPTIONAL,
 *  targetPresenceStatus [64] UTF8String OPTIONAL,
 *  port-Number [65] INTEGER (0..65535) OPTIONAL,
 *  ...
 * }
 * ```
 * 
 * @class
 */
export
class PTC {
    constructor (
        /**
         * @summary `abandonCause`.
         * @public
         * @readonly
         */
        readonly abandonCause: OPTIONAL<UTF8String>,
        /**
         * @summary `accessPolicyFailure`.
         * @public
         * @readonly
         */
        readonly accessPolicyFailure: OPTIONAL<UTF8String>,
        /**
         * @summary `accessPolicyType`.
         * @public
         * @readonly
         */
        readonly accessPolicyType: OPTIONAL<AccessPolicyType>,
        /**
         * @summary `alertIndicator`.
         * @public
         * @readonly
         */
        readonly alertIndicator: OPTIONAL<AlertIndicator>,
        /**
         * @summary `associatePresenceStatus`.
         * @public
         * @readonly
         */
        readonly associatePresenceStatus: OPTIONAL<AssociatePresenceStatus>,
        /**
         * @summary `bearer_capability_str`.
         * @public
         * @readonly
         */
        readonly bearer_capability_str: OPTIONAL<Bearer_capability_str>,
        /**
         * @summary `broadcastIndicator`.
         * @public
         * @readonly
         */
        readonly broadcastIndicator: OPTIONAL<BOOLEAN>,
        /**
         * @summary `contactID`.
         * @public
         * @readonly
         */
        readonly contactID: OPTIONAL<UTF8String>,
        /**
         * @summary `emergency`.
         * @public
         * @readonly
         */
        readonly emergency: OPTIONAL<Emergency>,
        /**
         * @summary `emergencyGroupState`.
         * @public
         * @readonly
         */
        readonly emergencyGroupState: OPTIONAL<EmergencyGroupState>,
        /**
         * @summary `timeStamp`.
         * @public
         * @readonly
         */
        readonly timeStamp: TimeStamp,
        /**
         * @summary `pTCType`.
         * @public
         * @readonly
         */
        readonly pTCType: OPTIONAL<PTCType>,
        /**
         * @summary `failureCode`.
         * @public
         * @readonly
         */
        readonly failureCode: OPTIONAL<UTF8String>,
        /**
         * @summary `floorActivity`.
         * @public
         * @readonly
         */
        readonly floorActivity: OPTIONAL<FloorActivity>,
        /**
         * @summary `floorSpeakerID`.
         * @public
         * @readonly
         */
        readonly floorSpeakerID: OPTIONAL<PTCAddress>,
        /**
         * @summary `groupAdSender`.
         * @public
         * @readonly
         */
        readonly groupAdSender: OPTIONAL<UTF8String>,
        /**
         * @summary `groupAuthRule`.
         * @public
         * @readonly
         */
        readonly groupAuthRule: OPTIONAL<GroupAuthRule>,
        /**
         * @summary `groupCharacteristics`.
         * @public
         * @readonly
         */
        readonly groupCharacteristics: OPTIONAL<UTF8String>,
        /**
         * @summary `holdRetrieveInd`.
         * @public
         * @readonly
         */
        readonly holdRetrieveInd: OPTIONAL<BOOLEAN>,
        /**
         * @summary `imminentPerilInd`.
         * @public
         * @readonly
         */
        readonly imminentPerilInd: OPTIONAL<ImminentPerilInd>,
        /**
         * @summary `implicitFloorReq`.
         * @public
         * @readonly
         */
        readonly implicitFloorReq: OPTIONAL<ImplicitFloorReq>,
        /**
         * @summary `initiationCause`.
         * @public
         * @readonly
         */
        readonly initiationCause: OPTIONAL<InitiationCause>,
        /**
         * @summary `invitationCause`.
         * @public
         * @readonly
         */
        readonly invitationCause: OPTIONAL<UTF8String>,
        /**
         * @summary `iPAPartyID`.
         * @public
         * @readonly
         */
        readonly iPAPartyID: OPTIONAL<UTF8String>,
        /**
         * @summary `iPADirection`.
         * @public
         * @readonly
         */
        readonly iPADirection: OPTIONAL<IPADirection>,
        /**
         * @summary `listManagementAction`.
         * @public
         * @readonly
         */
        readonly listManagementAction: OPTIONAL<ListManagementAction>,
        /**
         * @summary `listManagementFailure`.
         * @public
         * @readonly
         */
        readonly listManagementFailure: OPTIONAL<UTF8String>,
        /**
         * @summary `listManagementType`.
         * @public
         * @readonly
         */
        readonly listManagementType: OPTIONAL<ListManagementType>,
        /**
         * @summary `maxTBTime`.
         * @public
         * @readonly
         */
        readonly maxTBTime: OPTIONAL<UTF8String>,
        /**
         * @summary `mCPTTGroupID`.
         * @public
         * @readonly
         */
        readonly mCPTTGroupID: OPTIONAL<UTF8String>,
        /**
         * @summary `mCPTTID`.
         * @public
         * @readonly
         */
        readonly mCPTTID: OPTIONAL<UTF8String>,
        /**
         * @summary `mCPTTInd`.
         * @public
         * @readonly
         */
        readonly mCPTTInd: OPTIONAL<BOOLEAN>,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: OPTIONAL<Location>,
        /**
         * @summary `mCPTTOrganizationName`.
         * @public
         * @readonly
         */
        readonly mCPTTOrganizationName: OPTIONAL<UTF8String>,
        /**
         * @summary `mediaStreamAvail`.
         * @public
         * @readonly
         */
        readonly mediaStreamAvail: OPTIONAL<BOOLEAN>,
        /**
         * @summary `priority_Level`.
         * @public
         * @readonly
         */
        readonly priority_Level: OPTIONAL<Priority_Level>,
        /**
         * @summary `preEstSessionID`.
         * @public
         * @readonly
         */
        readonly preEstSessionID: OPTIONAL<UTF8String>,
        /**
         * @summary `preEstStatus`.
         * @public
         * @readonly
         */
        readonly preEstStatus: OPTIONAL<PreEstStatus>,
        /**
         * @summary `pTCGroupID`.
         * @public
         * @readonly
         */
        readonly pTCGroupID: OPTIONAL<UTF8String>,
        /**
         * @summary `pTCIDList`.
         * @public
         * @readonly
         */
        readonly pTCIDList: OPTIONAL<UTF8String>,
        /**
         * @summary `pTCMediaCapability`.
         * @public
         * @readonly
         */
        readonly pTCMediaCapability: OPTIONAL<UTF8String>,
        /**
         * @summary `pTCOriginatingId`.
         * @public
         * @readonly
         */
        readonly pTCOriginatingId: OPTIONAL<UTF8String>,
        /**
         * @summary `pTCOther`.
         * @public
         * @readonly
         */
        readonly pTCOther: OPTIONAL<UTF8String>,
        /**
         * @summary `pTCParticipants`.
         * @public
         * @readonly
         */
        readonly pTCParticipants: OPTIONAL<UTF8String>,
        /**
         * @summary `pTCParty`.
         * @public
         * @readonly
         */
        readonly pTCParty: OPTIONAL<UTF8String>,
        /**
         * @summary `pTCPartyDrop`.
         * @public
         * @readonly
         */
        readonly pTCPartyDrop: OPTIONAL<UTF8String>,
        /**
         * @summary `pTCSessionInfo`.
         * @public
         * @readonly
         */
        readonly pTCSessionInfo: OPTIONAL<UTF8String>,
        /**
         * @summary `pTCServerURI`.
         * @public
         * @readonly
         */
        readonly pTCServerURI: OPTIONAL<UTF8String>,
        /**
         * @summary `pTCUserAccessPolicy`.
         * @public
         * @readonly
         */
        readonly pTCUserAccessPolicy: OPTIONAL<UTF8String>,
        /**
         * @summary `pTCAddress`.
         * @public
         * @readonly
         */
        readonly pTCAddress: OPTIONAL<PTCAddress>,
        /**
         * @summary `queuedFloorControl`.
         * @public
         * @readonly
         */
        readonly queuedFloorControl: OPTIONAL<BOOLEAN>,
        /**
         * @summary `queuedPosition`.
         * @public
         * @readonly
         */
        readonly queuedPosition: OPTIONAL<UTF8String>,
        /**
         * @summary `registrationRequest`.
         * @public
         * @readonly
         */
        readonly registrationRequest: OPTIONAL<RegistrationRequest>,
        /**
         * @summary `registrationOutcome`.
         * @public
         * @readonly
         */
        readonly registrationOutcome: OPTIONAL<RegistrationOutcome>,
        /**
         * @summary `retrieveID`.
         * @public
         * @readonly
         */
        readonly retrieveID: OPTIONAL<UTF8String>,
        /**
         * @summary `rTPSetting`.
         * @public
         * @readonly
         */
        readonly rTPSetting: OPTIONAL<RTPSetting>,
        /**
         * @summary `talkBurstPriority`.
         * @public
         * @readonly
         */
        readonly talkBurstPriority: OPTIONAL<Priority_Level>,
        /**
         * @summary `talkBurstReason`.
         * @public
         * @readonly
         */
        readonly talkBurstReason: OPTIONAL<Talk_burst_reason_code>,
        /**
         * @summary `talkburstControlSetting`.
         * @public
         * @readonly
         */
        readonly talkburstControlSetting: OPTIONAL<TalkburstControlSetting>,
        /**
         * @summary `targetPresenceStatus`.
         * @public
         * @readonly
         */
        readonly targetPresenceStatus: OPTIONAL<UTF8String>,
        /**
         * @summary `port_Number`.
         * @public
         * @readonly
         */
        readonly port_Number: OPTIONAL<INTEGER>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PTC
     * @description
     * 
     * This takes an `object` and converts it to a `PTC`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PTC`.
     * @returns {PTC}
     */
    public static _from_object (_o: { [_K in keyof (PTC)]: (PTC)[_K] }): PTC {
        return new PTC(_o.abandonCause, _o.accessPolicyFailure, _o.accessPolicyType, _o.alertIndicator, _o.associatePresenceStatus, _o.bearer_capability_str, _o.broadcastIndicator, _o.contactID, _o.emergency, _o.emergencyGroupState, _o.timeStamp, _o.pTCType, _o.failureCode, _o.floorActivity, _o.floorSpeakerID, _o.groupAdSender, _o.groupAuthRule, _o.groupCharacteristics, _o.holdRetrieveInd, _o.imminentPerilInd, _o.implicitFloorReq, _o.initiationCause, _o.invitationCause, _o.iPAPartyID, _o.iPADirection, _o.listManagementAction, _o.listManagementFailure, _o.listManagementType, _o.maxTBTime, _o.mCPTTGroupID, _o.mCPTTID, _o.mCPTTInd, _o.location, _o.mCPTTOrganizationName, _o.mediaStreamAvail, _o.priority_Level, _o.preEstSessionID, _o.preEstStatus, _o.pTCGroupID, _o.pTCIDList, _o.pTCMediaCapability, _o.pTCOriginatingId, _o.pTCOther, _o.pTCParticipants, _o.pTCParty, _o.pTCPartyDrop, _o.pTCSessionInfo, _o.pTCServerURI, _o.pTCUserAccessPolicy, _o.pTCAddress, _o.queuedFloorControl, _o.queuedPosition, _o.registrationRequest, _o.registrationOutcome, _o.retrieveID, _o.rTPSetting, _o.talkBurstPriority, _o.talkBurstReason, _o.talkburstControlSetting, _o.targetPresenceStatus, _o.port_Number, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `alertIndicator`
         * @public
         * @static
         */

    public static _enum_for_alertIndicator = _enum_for_AlertIndicator;        /**
         * @summary The enum used as the type of the component `emergency`
         * @public
         * @static
         */

    public static _enum_for_emergency = _enum_for_Emergency;        /**
         * @summary The enum used as the type of the component `pTCType`
         * @public
         * @static
         */

    public static _enum_for_pTCType = _enum_for_PTCType;        /**
         * @summary The enum used as the type of the component `groupAuthRule`
         * @public
         * @static
         */

    public static _enum_for_groupAuthRule = _enum_for_GroupAuthRule;        /**
         * @summary The enum used as the type of the component `imminentPerilInd`
         * @public
         * @static
         */

    public static _enum_for_imminentPerilInd = _enum_for_ImminentPerilInd;        /**
         * @summary The enum used as the type of the component `implicitFloorReq`
         * @public
         * @static
         */

    public static _enum_for_implicitFloorReq = _enum_for_ImplicitFloorReq;        /**
         * @summary The enum used as the type of the component `initiationCause`
         * @public
         * @static
         */

    public static _enum_for_initiationCause = _enum_for_InitiationCause;        /**
         * @summary The enum used as the type of the component `iPADirection`
         * @public
         * @static
         */

    public static _enum_for_iPADirection = _enum_for_IPADirection;        /**
         * @summary The enum used as the type of the component `listManagementAction`
         * @public
         * @static
         */

    public static _enum_for_listManagementAction = _enum_for_ListManagementAction;        /**
         * @summary The enum used as the type of the component `listManagementType`
         * @public
         * @static
         */

    public static _enum_for_listManagementType = _enum_for_ListManagementType;        /**
         * @summary The enum used as the type of the component `priority_Level`
         * @public
         * @static
         */

    public static _enum_for_priority_Level = _enum_for_Priority_Level;        /**
         * @summary The enum used as the type of the component `preEstStatus`
         * @public
         * @static
         */

    public static _enum_for_preEstStatus = _enum_for_PreEstStatus;        /**
         * @summary The enum used as the type of the component `registrationRequest`
         * @public
         * @static
         */

    public static _enum_for_registrationRequest = _enum_for_RegistrationRequest;        /**
         * @summary The enum used as the type of the component `registrationOutcome`
         * @public
         * @static
         */

    public static _enum_for_registrationOutcome = _enum_for_RegistrationOutcome;        /**
         * @summary The enum used as the type of the component `talkBurstPriority`
         * @public
         * @static
         */

    public static _enum_for_talkBurstPriority = _enum_for_Priority_Level;
}

/**
 * @summary The Leading Root Component Types of PTC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PTC: $.ComponentSpec[] = [
    new $.ComponentSpec("abandonCause", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("accessPolicyFailure", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("accessPolicyType", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("alertIndicator", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("associatePresenceStatus", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("bearer-capability-str", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("broadcastIndicator", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("contactID", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("emergency", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("emergencyGroupState", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("timeStamp", false, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("pTCType", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("failureCode", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("floorActivity", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("floorSpeakerID", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("groupAdSender", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("groupAuthRule", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("groupCharacteristics", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("holdRetrieveInd", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("imminentPerilInd", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("implicitFloorReq", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("initiationCause", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("invitationCause", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("iPAPartyID", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("iPADirection", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("listManagementAction", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("listManagementFailure", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("listManagementType", true, $.hasTag(_TagClass.context, 31)),
    new $.ComponentSpec("maxTBTime", true, $.hasTag(_TagClass.context, 32)),
    new $.ComponentSpec("mCPTTGroupID", true, $.hasTag(_TagClass.context, 33)),
    new $.ComponentSpec("mCPTTID", true, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("mCPTTInd", true, $.hasTag(_TagClass.context, 35)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 36)),
    new $.ComponentSpec("mCPTTOrganizationName", true, $.hasTag(_TagClass.context, 37)),
    new $.ComponentSpec("mediaStreamAvail", true, $.hasTag(_TagClass.context, 38)),
    new $.ComponentSpec("priority-Level", true, $.hasTag(_TagClass.context, 40)),
    new $.ComponentSpec("preEstSessionID", true, $.hasTag(_TagClass.context, 41)),
    new $.ComponentSpec("preEstStatus", true, $.hasTag(_TagClass.context, 42)),
    new $.ComponentSpec("pTCGroupID", true, $.hasTag(_TagClass.context, 43)),
    new $.ComponentSpec("pTCIDList", true, $.hasTag(_TagClass.context, 44)),
    new $.ComponentSpec("pTCMediaCapability", true, $.hasTag(_TagClass.context, 45)),
    new $.ComponentSpec("pTCOriginatingId", true, $.hasTag(_TagClass.context, 46)),
    new $.ComponentSpec("pTCOther", true, $.hasTag(_TagClass.context, 47)),
    new $.ComponentSpec("pTCParticipants", true, $.hasTag(_TagClass.context, 48)),
    new $.ComponentSpec("pTCParty", true, $.hasTag(_TagClass.context, 49)),
    new $.ComponentSpec("pTCPartyDrop", true, $.hasTag(_TagClass.context, 50)),
    new $.ComponentSpec("pTCSessionInfo", true, $.hasTag(_TagClass.context, 51)),
    new $.ComponentSpec("pTCServerURI", true, $.hasTag(_TagClass.context, 52)),
    new $.ComponentSpec("pTCUserAccessPolicy", true, $.hasTag(_TagClass.context, 53)),
    new $.ComponentSpec("pTCAddress", true, $.hasTag(_TagClass.context, 54)),
    new $.ComponentSpec("queuedFloorControl", true, $.hasTag(_TagClass.context, 55)),
    new $.ComponentSpec("queuedPosition", true, $.hasTag(_TagClass.context, 56)),
    new $.ComponentSpec("registrationRequest", true, $.hasTag(_TagClass.context, 57)),
    new $.ComponentSpec("registrationOutcome", true, $.hasTag(_TagClass.context, 58)),
    new $.ComponentSpec("retrieveID", true, $.hasTag(_TagClass.context, 59)),
    new $.ComponentSpec("rTPSetting", true, $.hasTag(_TagClass.context, 60)),
    new $.ComponentSpec("talkBurstPriority", true, $.hasTag(_TagClass.context, 61)),
    new $.ComponentSpec("talkBurstReason", true, $.hasTag(_TagClass.context, 62)),
    new $.ComponentSpec("talkburstControlSetting", true, $.hasTag(_TagClass.context, 63)),
    new $.ComponentSpec("targetPresenceStatus", true, $.hasTag(_TagClass.context, 64)),
    new $.ComponentSpec("port-Number", true, $.hasTag(_TagClass.context, 65))
];

/**
 * @summary The Trailing Root Component Types of PTC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PTC: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PTC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PTC: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PTC: $.ASN1Decoder<PTC> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTC
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTC (el: _Element): PTC {
    if (!_cached_decoder_for_PTC) { _cached_decoder_for_PTC = function (el: _Element): PTC {
    let abandonCause: OPTIONAL<UTF8String>;
    let accessPolicyFailure: OPTIONAL<UTF8String>;
    let accessPolicyType: OPTIONAL<AccessPolicyType>;
    let alertIndicator: OPTIONAL<AlertIndicator>;
    let associatePresenceStatus: OPTIONAL<AssociatePresenceStatus>;
    let bearer_capability_str: OPTIONAL<Bearer_capability_str>;
    let broadcastIndicator: OPTIONAL<BOOLEAN>;
    let contactID: OPTIONAL<UTF8String>;
    let emergency: OPTIONAL<Emergency>;
    let emergencyGroupState: OPTIONAL<EmergencyGroupState>;
    let timeStamp!: TimeStamp;
    let pTCType: OPTIONAL<PTCType>;
    let failureCode: OPTIONAL<UTF8String>;
    let floorActivity: OPTIONAL<FloorActivity>;
    let floorSpeakerID: OPTIONAL<PTCAddress>;
    let groupAdSender: OPTIONAL<UTF8String>;
    let groupAuthRule: OPTIONAL<GroupAuthRule>;
    let groupCharacteristics: OPTIONAL<UTF8String>;
    let holdRetrieveInd: OPTIONAL<BOOLEAN>;
    let imminentPerilInd: OPTIONAL<ImminentPerilInd>;
    let implicitFloorReq: OPTIONAL<ImplicitFloorReq>;
    let initiationCause: OPTIONAL<InitiationCause>;
    let invitationCause: OPTIONAL<UTF8String>;
    let iPAPartyID: OPTIONAL<UTF8String>;
    let iPADirection: OPTIONAL<IPADirection>;
    let listManagementAction: OPTIONAL<ListManagementAction>;
    let listManagementFailure: OPTIONAL<UTF8String>;
    let listManagementType: OPTIONAL<ListManagementType>;
    let maxTBTime: OPTIONAL<UTF8String>;
    let mCPTTGroupID: OPTIONAL<UTF8String>;
    let mCPTTID: OPTIONAL<UTF8String>;
    let mCPTTInd: OPTIONAL<BOOLEAN>;
    let location: OPTIONAL<Location>;
    let mCPTTOrganizationName: OPTIONAL<UTF8String>;
    let mediaStreamAvail: OPTIONAL<BOOLEAN>;
    let priority_Level: OPTIONAL<Priority_Level>;
    let preEstSessionID: OPTIONAL<UTF8String>;
    let preEstStatus: OPTIONAL<PreEstStatus>;
    let pTCGroupID: OPTIONAL<UTF8String>;
    let pTCIDList: OPTIONAL<UTF8String>;
    let pTCMediaCapability: OPTIONAL<UTF8String>;
    let pTCOriginatingId: OPTIONAL<UTF8String>;
    let pTCOther: OPTIONAL<UTF8String>;
    let pTCParticipants: OPTIONAL<UTF8String>;
    let pTCParty: OPTIONAL<UTF8String>;
    let pTCPartyDrop: OPTIONAL<UTF8String>;
    let pTCSessionInfo: OPTIONAL<UTF8String>;
    let pTCServerURI: OPTIONAL<UTF8String>;
    let pTCUserAccessPolicy: OPTIONAL<UTF8String>;
    let pTCAddress: OPTIONAL<PTCAddress>;
    let queuedFloorControl: OPTIONAL<BOOLEAN>;
    let queuedPosition: OPTIONAL<UTF8String>;
    let registrationRequest: OPTIONAL<RegistrationRequest>;
    let registrationOutcome: OPTIONAL<RegistrationOutcome>;
    let retrieveID: OPTIONAL<UTF8String>;
    let rTPSetting: OPTIONAL<RTPSetting>;
    let talkBurstPriority: OPTIONAL<Priority_Level>;
    let talkBurstReason: OPTIONAL<Talk_burst_reason_code>;
    let talkburstControlSetting: OPTIONAL<TalkburstControlSetting>;
    let targetPresenceStatus: OPTIONAL<UTF8String>;
    let port_Number: OPTIONAL<INTEGER>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "abandonCause": (_el: _Element): void => { abandonCause = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "accessPolicyFailure": (_el: _Element): void => { accessPolicyFailure = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "accessPolicyType": (_el: _Element): void => { accessPolicyType = $._decode_implicit<AccessPolicyType>(() => _decode_AccessPolicyType)(_el); },
        "alertIndicator": (_el: _Element): void => { alertIndicator = $._decode_implicit<AlertIndicator>(() => _decode_AlertIndicator)(_el); },
        "associatePresenceStatus": (_el: _Element): void => { associatePresenceStatus = $._decode_implicit<AssociatePresenceStatus>(() => _decode_AssociatePresenceStatus)(_el); },
        "bearer-capability-str": (_el: _Element): void => { bearer_capability_str = $._decode_implicit<Bearer_capability_str>(() => _decode_Bearer_capability_str)(_el); },
        "broadcastIndicator": (_el: _Element): void => { broadcastIndicator = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "contactID": (_el: _Element): void => { contactID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "emergency": (_el: _Element): void => { emergency = $._decode_implicit<Emergency>(() => _decode_Emergency)(_el); },
        "emergencyGroupState": (_el: _Element): void => { emergencyGroupState = $._decode_implicit<EmergencyGroupState>(() => _decode_EmergencyGroupState)(_el); },
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_explicit<TimeStamp>(() => _decode_TimeStamp)(_el); },
        "pTCType": (_el: _Element): void => { pTCType = $._decode_implicit<PTCType>(() => _decode_PTCType)(_el); },
        "failureCode": (_el: _Element): void => { failureCode = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "floorActivity": (_el: _Element): void => { floorActivity = $._decode_implicit<FloorActivity>(() => _decode_FloorActivity)(_el); },
        "floorSpeakerID": (_el: _Element): void => { floorSpeakerID = $._decode_implicit<PTCAddress>(() => _decode_PTCAddress)(_el); },
        "groupAdSender": (_el: _Element): void => { groupAdSender = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "groupAuthRule": (_el: _Element): void => { groupAuthRule = $._decode_implicit<GroupAuthRule>(() => _decode_GroupAuthRule)(_el); },
        "groupCharacteristics": (_el: _Element): void => { groupCharacteristics = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "holdRetrieveInd": (_el: _Element): void => { holdRetrieveInd = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "imminentPerilInd": (_el: _Element): void => { imminentPerilInd = $._decode_implicit<ImminentPerilInd>(() => _decode_ImminentPerilInd)(_el); },
        "implicitFloorReq": (_el: _Element): void => { implicitFloorReq = $._decode_implicit<ImplicitFloorReq>(() => _decode_ImplicitFloorReq)(_el); },
        "initiationCause": (_el: _Element): void => { initiationCause = $._decode_implicit<InitiationCause>(() => _decode_InitiationCause)(_el); },
        "invitationCause": (_el: _Element): void => { invitationCause = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "iPAPartyID": (_el: _Element): void => { iPAPartyID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "iPADirection": (_el: _Element): void => { iPADirection = $._decode_implicit<IPADirection>(() => _decode_IPADirection)(_el); },
        "listManagementAction": (_el: _Element): void => { listManagementAction = $._decode_implicit<ListManagementAction>(() => _decode_ListManagementAction)(_el); },
        "listManagementFailure": (_el: _Element): void => { listManagementFailure = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "listManagementType": (_el: _Element): void => { listManagementType = $._decode_implicit<ListManagementType>(() => _decode_ListManagementType)(_el); },
        "maxTBTime": (_el: _Element): void => { maxTBTime = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "mCPTTGroupID": (_el: _Element): void => { mCPTTGroupID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "mCPTTID": (_el: _Element): void => { mCPTTID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "mCPTTInd": (_el: _Element): void => { mCPTTInd = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "mCPTTOrganizationName": (_el: _Element): void => { mCPTTOrganizationName = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "mediaStreamAvail": (_el: _Element): void => { mediaStreamAvail = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "priority-Level": (_el: _Element): void => { priority_Level = $._decode_implicit<Priority_Level>(() => _decode_Priority_Level)(_el); },
        "preEstSessionID": (_el: _Element): void => { preEstSessionID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "preEstStatus": (_el: _Element): void => { preEstStatus = $._decode_implicit<PreEstStatus>(() => _decode_PreEstStatus)(_el); },
        "pTCGroupID": (_el: _Element): void => { pTCGroupID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "pTCIDList": (_el: _Element): void => { pTCIDList = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "pTCMediaCapability": (_el: _Element): void => { pTCMediaCapability = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "pTCOriginatingId": (_el: _Element): void => { pTCOriginatingId = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "pTCOther": (_el: _Element): void => { pTCOther = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "pTCParticipants": (_el: _Element): void => { pTCParticipants = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "pTCParty": (_el: _Element): void => { pTCParty = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "pTCPartyDrop": (_el: _Element): void => { pTCPartyDrop = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "pTCSessionInfo": (_el: _Element): void => { pTCSessionInfo = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "pTCServerURI": (_el: _Element): void => { pTCServerURI = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "pTCUserAccessPolicy": (_el: _Element): void => { pTCUserAccessPolicy = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "pTCAddress": (_el: _Element): void => { pTCAddress = $._decode_implicit<PTCAddress>(() => _decode_PTCAddress)(_el); },
        "queuedFloorControl": (_el: _Element): void => { queuedFloorControl = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "queuedPosition": (_el: _Element): void => { queuedPosition = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "registrationRequest": (_el: _Element): void => { registrationRequest = $._decode_implicit<RegistrationRequest>(() => _decode_RegistrationRequest)(_el); },
        "registrationOutcome": (_el: _Element): void => { registrationOutcome = $._decode_implicit<RegistrationOutcome>(() => _decode_RegistrationOutcome)(_el); },
        "retrieveID": (_el: _Element): void => { retrieveID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "rTPSetting": (_el: _Element): void => { rTPSetting = $._decode_implicit<RTPSetting>(() => _decode_RTPSetting)(_el); },
        "talkBurstPriority": (_el: _Element): void => { talkBurstPriority = $._decode_implicit<Priority_Level>(() => _decode_Priority_Level)(_el); },
        "talkBurstReason": (_el: _Element): void => { talkBurstReason = $._decode_implicit<Talk_burst_reason_code>(() => _decode_Talk_burst_reason_code)(_el); },
        "talkburstControlSetting": (_el: _Element): void => { talkburstControlSetting = $._decode_implicit<TalkburstControlSetting>(() => _decode_TalkburstControlSetting)(_el); },
        "targetPresenceStatus": (_el: _Element): void => { targetPresenceStatus = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "port-Number": (_el: _Element): void => { port_Number = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PTC,
        _extension_additions_list_spec_for_PTC,
        _root_component_type_list_2_spec_for_PTC,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PTC(
        abandonCause,
        accessPolicyFailure,
        accessPolicyType,
        alertIndicator,
        associatePresenceStatus,
        bearer_capability_str,
        broadcastIndicator,
        contactID,
        emergency,
        emergencyGroupState,
        timeStamp,
        pTCType,
        failureCode,
        floorActivity,
        floorSpeakerID,
        groupAdSender,
        groupAuthRule,
        groupCharacteristics,
        holdRetrieveInd,
        imminentPerilInd,
        implicitFloorReq,
        initiationCause,
        invitationCause,
        iPAPartyID,
        iPADirection,
        listManagementAction,
        listManagementFailure,
        listManagementType,
        maxTBTime,
        mCPTTGroupID,
        mCPTTID,
        mCPTTInd,
        location,
        mCPTTOrganizationName,
        mediaStreamAvail,
        priority_Level,
        preEstSessionID,
        preEstStatus,
        pTCGroupID,
        pTCIDList,
        pTCMediaCapability,
        pTCOriginatingId,
        pTCOther,
        pTCParticipants,
        pTCParty,
        pTCPartyDrop,
        pTCSessionInfo,
        pTCServerURI,
        pTCUserAccessPolicy,
        pTCAddress,
        queuedFloorControl,
        queuedPosition,
        registrationRequest,
        registrationOutcome,
        retrieveID,
        rTPSetting,
        talkBurstPriority,
        talkBurstReason,
        talkburstControlSetting,
        targetPresenceStatus,
        port_Number,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PTC(el);
}

let _cached_encoder_for_PTC: $.ASN1Encoder<PTC> | null = null;

/**
 * @summary Encodes a(n) PTC into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTC, encoded as an ASN.1 Element.
 */
export
function _encode_PTC (value: PTC, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTC) { _cached_encoder_for_PTC = function (value: PTC, elGetter: $.ASN1Encoder<PTC>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.abandonCause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.abandonCause, $.BER)),
            /* IF_ABSENT  */ ((value.accessPolicyFailure === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.accessPolicyFailure, $.BER)),
            /* IF_ABSENT  */ ((value.accessPolicyType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_AccessPolicyType, $.BER)(value.accessPolicyType, $.BER)),
            /* IF_ABSENT  */ ((value.alertIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_AlertIndicator, $.BER)(value.alertIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.associatePresenceStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_AssociatePresenceStatus, $.BER)(value.associatePresenceStatus, $.BER)),
            /* IF_ABSENT  */ ((value.bearer_capability_str === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_Bearer_capability_str, $.BER)(value.bearer_capability_str, $.BER)),
            /* IF_ABSENT  */ ((value.broadcastIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeBoolean, $.BER)(value.broadcastIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.contactID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeUTF8String, $.BER)(value.contactID, $.BER)),
            /* IF_ABSENT  */ ((value.emergency === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_Emergency, $.BER)(value.emergency, $.BER)),
            /* IF_ABSENT  */ ((value.emergencyGroupState === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_EmergencyGroupState, $.BER)(value.emergencyGroupState, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 12, () => _encode_TimeStamp, $.BER)(value.timeStamp, $.BER),
            /* IF_ABSENT  */ ((value.pTCType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_PTCType, $.BER)(value.pTCType, $.BER)),
            /* IF_ABSENT  */ ((value.failureCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => $._encodeUTF8String, $.BER)(value.failureCode, $.BER)),
            /* IF_ABSENT  */ ((value.floorActivity === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_FloorActivity, $.BER)(value.floorActivity, $.BER)),
            /* IF_ABSENT  */ ((value.floorSpeakerID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_PTCAddress, $.BER)(value.floorSpeakerID, $.BER)),
            /* IF_ABSENT  */ ((value.groupAdSender === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => $._encodeUTF8String, $.BER)(value.groupAdSender, $.BER)),
            /* IF_ABSENT  */ ((value.groupAuthRule === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => _encode_GroupAuthRule, $.BER)(value.groupAuthRule, $.BER)),
            /* IF_ABSENT  */ ((value.groupCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => $._encodeUTF8String, $.BER)(value.groupCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.holdRetrieveInd === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => $._encodeBoolean, $.BER)(value.holdRetrieveInd, $.BER)),
            /* IF_ABSENT  */ ((value.imminentPerilInd === undefined) ? undefined : $._encode_implicit(_TagClass.context, 23, () => _encode_ImminentPerilInd, $.BER)(value.imminentPerilInd, $.BER)),
            /* IF_ABSENT  */ ((value.implicitFloorReq === undefined) ? undefined : $._encode_implicit(_TagClass.context, 24, () => _encode_ImplicitFloorReq, $.BER)(value.implicitFloorReq, $.BER)),
            /* IF_ABSENT  */ ((value.initiationCause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 25, () => _encode_InitiationCause, $.BER)(value.initiationCause, $.BER)),
            /* IF_ABSENT  */ ((value.invitationCause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 26, () => $._encodeUTF8String, $.BER)(value.invitationCause, $.BER)),
            /* IF_ABSENT  */ ((value.iPAPartyID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 27, () => $._encodeUTF8String, $.BER)(value.iPAPartyID, $.BER)),
            /* IF_ABSENT  */ ((value.iPADirection === undefined) ? undefined : $._encode_implicit(_TagClass.context, 28, () => _encode_IPADirection, $.BER)(value.iPADirection, $.BER)),
            /* IF_ABSENT  */ ((value.listManagementAction === undefined) ? undefined : $._encode_implicit(_TagClass.context, 29, () => _encode_ListManagementAction, $.BER)(value.listManagementAction, $.BER)),
            /* IF_ABSENT  */ ((value.listManagementFailure === undefined) ? undefined : $._encode_implicit(_TagClass.context, 30, () => $._encodeUTF8String, $.BER)(value.listManagementFailure, $.BER)),
            /* IF_ABSENT  */ ((value.listManagementType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 31, () => _encode_ListManagementType, $.BER)(value.listManagementType, $.BER)),
            /* IF_ABSENT  */ ((value.maxTBTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 32, () => $._encodeUTF8String, $.BER)(value.maxTBTime, $.BER)),
            /* IF_ABSENT  */ ((value.mCPTTGroupID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 33, () => $._encodeUTF8String, $.BER)(value.mCPTTGroupID, $.BER)),
            /* IF_ABSENT  */ ((value.mCPTTID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 34, () => $._encodeUTF8String, $.BER)(value.mCPTTID, $.BER)),
            /* IF_ABSENT  */ ((value.mCPTTInd === undefined) ? undefined : $._encode_implicit(_TagClass.context, 35, () => $._encodeBoolean, $.BER)(value.mCPTTInd, $.BER)),
            /* IF_ABSENT  */ ((value.location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 36, () => _encode_Location, $.BER)(value.location, $.BER)),
            /* IF_ABSENT  */ ((value.mCPTTOrganizationName === undefined) ? undefined : $._encode_implicit(_TagClass.context, 37, () => $._encodeUTF8String, $.BER)(value.mCPTTOrganizationName, $.BER)),
            /* IF_ABSENT  */ ((value.mediaStreamAvail === undefined) ? undefined : $._encode_implicit(_TagClass.context, 38, () => $._encodeBoolean, $.BER)(value.mediaStreamAvail, $.BER)),
            /* IF_ABSENT  */ ((value.priority_Level === undefined) ? undefined : $._encode_implicit(_TagClass.context, 40, () => _encode_Priority_Level, $.BER)(value.priority_Level, $.BER)),
            /* IF_ABSENT  */ ((value.preEstSessionID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 41, () => $._encodeUTF8String, $.BER)(value.preEstSessionID, $.BER)),
            /* IF_ABSENT  */ ((value.preEstStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 42, () => _encode_PreEstStatus, $.BER)(value.preEstStatus, $.BER)),
            /* IF_ABSENT  */ ((value.pTCGroupID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 43, () => $._encodeUTF8String, $.BER)(value.pTCGroupID, $.BER)),
            /* IF_ABSENT  */ ((value.pTCIDList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 44, () => $._encodeUTF8String, $.BER)(value.pTCIDList, $.BER)),
            /* IF_ABSENT  */ ((value.pTCMediaCapability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 45, () => $._encodeUTF8String, $.BER)(value.pTCMediaCapability, $.BER)),
            /* IF_ABSENT  */ ((value.pTCOriginatingId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 46, () => $._encodeUTF8String, $.BER)(value.pTCOriginatingId, $.BER)),
            /* IF_ABSENT  */ ((value.pTCOther === undefined) ? undefined : $._encode_implicit(_TagClass.context, 47, () => $._encodeUTF8String, $.BER)(value.pTCOther, $.BER)),
            /* IF_ABSENT  */ ((value.pTCParticipants === undefined) ? undefined : $._encode_implicit(_TagClass.context, 48, () => $._encodeUTF8String, $.BER)(value.pTCParticipants, $.BER)),
            /* IF_ABSENT  */ ((value.pTCParty === undefined) ? undefined : $._encode_implicit(_TagClass.context, 49, () => $._encodeUTF8String, $.BER)(value.pTCParty, $.BER)),
            /* IF_ABSENT  */ ((value.pTCPartyDrop === undefined) ? undefined : $._encode_implicit(_TagClass.context, 50, () => $._encodeUTF8String, $.BER)(value.pTCPartyDrop, $.BER)),
            /* IF_ABSENT  */ ((value.pTCSessionInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 51, () => $._encodeUTF8String, $.BER)(value.pTCSessionInfo, $.BER)),
            /* IF_ABSENT  */ ((value.pTCServerURI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 52, () => $._encodeUTF8String, $.BER)(value.pTCServerURI, $.BER)),
            /* IF_ABSENT  */ ((value.pTCUserAccessPolicy === undefined) ? undefined : $._encode_implicit(_TagClass.context, 53, () => $._encodeUTF8String, $.BER)(value.pTCUserAccessPolicy, $.BER)),
            /* IF_ABSENT  */ ((value.pTCAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 54, () => _encode_PTCAddress, $.BER)(value.pTCAddress, $.BER)),
            /* IF_ABSENT  */ ((value.queuedFloorControl === undefined) ? undefined : $._encode_implicit(_TagClass.context, 55, () => $._encodeBoolean, $.BER)(value.queuedFloorControl, $.BER)),
            /* IF_ABSENT  */ ((value.queuedPosition === undefined) ? undefined : $._encode_implicit(_TagClass.context, 56, () => $._encodeUTF8String, $.BER)(value.queuedPosition, $.BER)),
            /* IF_ABSENT  */ ((value.registrationRequest === undefined) ? undefined : $._encode_implicit(_TagClass.context, 57, () => _encode_RegistrationRequest, $.BER)(value.registrationRequest, $.BER)),
            /* IF_ABSENT  */ ((value.registrationOutcome === undefined) ? undefined : $._encode_implicit(_TagClass.context, 58, () => _encode_RegistrationOutcome, $.BER)(value.registrationOutcome, $.BER)),
            /* IF_ABSENT  */ ((value.retrieveID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 59, () => $._encodeUTF8String, $.BER)(value.retrieveID, $.BER)),
            /* IF_ABSENT  */ ((value.rTPSetting === undefined) ? undefined : $._encode_implicit(_TagClass.context, 60, () => _encode_RTPSetting, $.BER)(value.rTPSetting, $.BER)),
            /* IF_ABSENT  */ ((value.talkBurstPriority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 61, () => _encode_Priority_Level, $.BER)(value.talkBurstPriority, $.BER)),
            /* IF_ABSENT  */ ((value.talkBurstReason === undefined) ? undefined : $._encode_implicit(_TagClass.context, 62, () => _encode_Talk_burst_reason_code, $.BER)(value.talkBurstReason, $.BER)),
            /* IF_ABSENT  */ ((value.talkburstControlSetting === undefined) ? undefined : $._encode_implicit(_TagClass.context, 63, () => _encode_TalkburstControlSetting, $.BER)(value.talkburstControlSetting, $.BER)),
            /* IF_ABSENT  */ ((value.targetPresenceStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 64, () => $._encodeUTF8String, $.BER)(value.targetPresenceStatus, $.BER)),
            /* IF_ABSENT  */ ((value.port_Number === undefined) ? undefined : $._encode_implicit(_TagClass.context, 65, () => $._encodeInteger, $.BER)(value.port_Number, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PTC(value, elGetter);
}


/* eslint-enable */
