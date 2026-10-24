/* eslint-disable */
import {
    type BOOLEAN,
    type INTEGER,
    type OPTIONAL,
    type UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AccessPolicyType, _decode_AccessPolicyType, _encode_AccessPolicyType } from "../UmtsHI2Operations/AccessPolicyType.ta.mjs";
// export { AccessPolicyType, _decode_AccessPolicyType, _encode_AccessPolicyType } from "../UmtsHI2Operations/AccessPolicyType.ta.mjs";
import { type AlertIndicator, _decode_AlertIndicator, _encode_AlertIndicator, _enum_for_AlertIndicator } from "../UmtsHI2Operations/AlertIndicator.ta.mjs";
// export { AlertIndicator, _enum_for_AlertIndicator, AlertIndicator_sent /* IMPORTED_LONG_ENUMERATION_ITEM */, sent /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertIndicator_received /* IMPORTED_LONG_ENUMERATION_ITEM */, AlertIndicator_cancelled /* IMPORTED_LONG_ENUMERATION_ITEM */, cancelled /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AlertIndicator, _encode_AlertIndicator } from "../UmtsHI2Operations/AlertIndicator.ta.mjs";
import { AssociatePresenceStatus, _decode_AssociatePresenceStatus, _encode_AssociatePresenceStatus } from "../UmtsHI2Operations/AssociatePresenceStatus.ta.mjs";
// export { AssociatePresenceStatus, _decode_AssociatePresenceStatus, _encode_AssociatePresenceStatus } from "../UmtsHI2Operations/AssociatePresenceStatus.ta.mjs";
import { type Emergency, _decode_Emergency, _encode_Emergency, _enum_for_Emergency } from "../UmtsHI2Operations/Emergency.ta.mjs";
// export { Emergency, _enum_for_Emergency, Emergency_imminent /* IMPORTED_LONG_ENUMERATION_ITEM */, imminent /* IMPORTED_SHORT_ENUMERATION_ITEM */, Emergency_peril /* IMPORTED_LONG_ENUMERATION_ITEM */, peril /* IMPORTED_SHORT_ENUMERATION_ITEM */, Emergency_cancel /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_Emergency, _encode_Emergency } from "../UmtsHI2Operations/Emergency.ta.mjs";
import { EmergencyGroupState, _decode_EmergencyGroupState, _encode_EmergencyGroupState } from "../UmtsHI2Operations/EmergencyGroupState.ta.mjs";
// export { EmergencyGroupState, _decode_EmergencyGroupState, _encode_EmergencyGroupState } from "../UmtsHI2Operations/EmergencyGroupState.ta.mjs";
import { type TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
// export { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
import { type PTCType, _decode_PTCType, _encode_PTCType, _enum_for_PTCType } from "../UmtsHI2Operations/PTCType.ta.mjs";
// export { PTCType, _enum_for_PTCType, PTCType_pTCStartofInterception /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCStartofInterception /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCServinSystem /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCServinSystem /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCSessionInitiation /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCSessionInitiation /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCSessionAbandonEndRecord /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCSessionAbandonEndRecord /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCSessionStartContinueRecord /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCSessionStartContinueRecord /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCSessionEndRecord /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCSessionEndRecord /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCPre_EstablishedSessionSessionRecord /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCPre_EstablishedSessionSessionRecord /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCInstantPersonalAlert /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCInstantPersonalAlert /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCPartyJoin /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCPartyJoin /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCPartyDrop /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCPartyDrop /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCPartyHold_RetrieveRecord /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCPartyHold_RetrieveRecord /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCMediaModification /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCMediaModification /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCGroupAdvertizement /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCGroupAdvertizement /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCFloorConttrol /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCFloorConttrol /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCTargetPressence /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCTargetPressence /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCAssociatePressence /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCAssociatePressence /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCListManagementEvents /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCListManagementEvents /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCAccessPolicyEvents /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCAccessPolicyEvents /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCMediaTypeNotification /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCMediaTypeNotification /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCGroupCallRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCGroupCallRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCGroupCallCancel /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCGroupCallCancel /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCGroupCallResponse /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCGroupCallResponse /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCGroupCallInterrogate /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCGroupCallInterrogate /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCMCPTTImminentGroupCall /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCMCPTTImminentGroupCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCCC /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCCC /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCRegistration /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCRegistration /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCType_pTCEncryption /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCEncryption /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PTCType, _encode_PTCType } from "../UmtsHI2Operations/PTCType.ta.mjs";
import { FloorActivity, _decode_FloorActivity, _encode_FloorActivity } from "../UmtsHI2Operations/FloorActivity.ta.mjs";
// export { FloorActivity, _decode_FloorActivity, _encode_FloorActivity } from "../UmtsHI2Operations/FloorActivity.ta.mjs";
import { PTCAddress, _decode_PTCAddress, _encode_PTCAddress } from "../UmtsHI2Operations/PTCAddress.ta.mjs";
// export { PTCAddress, _decode_PTCAddress, _encode_PTCAddress } from "../UmtsHI2Operations/PTCAddress.ta.mjs";
import { type GroupAuthRule, _decode_GroupAuthRule, _encode_GroupAuthRule, _enum_for_GroupAuthRule } from "../UmtsHI2Operations/GroupAuthRule.ta.mjs";
// export { GroupAuthRule, _enum_for_GroupAuthRule, GroupAuthRule_allow_Initiating_PtcSession /* IMPORTED_LONG_ENUMERATION_ITEM */, allow_Initiating_PtcSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, GroupAuthRule_block_Initiating_PtcSession /* IMPORTED_LONG_ENUMERATION_ITEM */, block_Initiating_PtcSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, GroupAuthRule_allow_Joining_PtcSession /* IMPORTED_LONG_ENUMERATION_ITEM */, allow_Joining_PtcSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, GroupAuthRule_block_Joining_PtcSession /* IMPORTED_LONG_ENUMERATION_ITEM */, block_Joining_PtcSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, GroupAuthRule_allow_Add_Participants /* IMPORTED_LONG_ENUMERATION_ITEM */, allow_Add_Participants /* IMPORTED_SHORT_ENUMERATION_ITEM */, GroupAuthRule_block_Add_Participants /* IMPORTED_LONG_ENUMERATION_ITEM */, block_Add_Participants /* IMPORTED_SHORT_ENUMERATION_ITEM */, GroupAuthRule_allow_Subscription_PtcSession_State /* IMPORTED_LONG_ENUMERATION_ITEM */, allow_Subscription_PtcSession_State /* IMPORTED_SHORT_ENUMERATION_ITEM */, GroupAuthRule_block_Subscription_PtcSession_State /* IMPORTED_LONG_ENUMERATION_ITEM */, block_Subscription_PtcSession_State /* IMPORTED_SHORT_ENUMERATION_ITEM */, GroupAuthRule_allow_Anonymity /* IMPORTED_LONG_ENUMERATION_ITEM */, allow_Anonymity /* IMPORTED_SHORT_ENUMERATION_ITEM */, GroupAuthRule_forbid_Anonymity /* IMPORTED_LONG_ENUMERATION_ITEM */, forbid_Anonymity /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_GroupAuthRule, _encode_GroupAuthRule } from "../UmtsHI2Operations/GroupAuthRule.ta.mjs";
import { type ImminentPerilInd, _decode_ImminentPerilInd, _encode_ImminentPerilInd, _enum_for_ImminentPerilInd } from "../UmtsHI2Operations/ImminentPerilInd.ta.mjs";
// export { ImminentPerilInd, _enum_for_ImminentPerilInd, ImminentPerilInd_request /* IMPORTED_LONG_ENUMERATION_ITEM */, request /* IMPORTED_SHORT_ENUMERATION_ITEM */, ImminentPerilInd_response /* IMPORTED_LONG_ENUMERATION_ITEM */, response /* IMPORTED_SHORT_ENUMERATION_ITEM */, ImminentPerilInd_cancel /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_ImminentPerilInd, _encode_ImminentPerilInd } from "../UmtsHI2Operations/ImminentPerilInd.ta.mjs";
import { type ImplicitFloorReq, _decode_ImplicitFloorReq, _encode_ImplicitFloorReq, _enum_for_ImplicitFloorReq } from "../UmtsHI2Operations/ImplicitFloorReq.ta.mjs";
// export { ImplicitFloorReq, _enum_for_ImplicitFloorReq, ImplicitFloorReq_join /* IMPORTED_LONG_ENUMERATION_ITEM */, join /* IMPORTED_SHORT_ENUMERATION_ITEM */, ImplicitFloorReq_rejoin /* IMPORTED_LONG_ENUMERATION_ITEM */, rejoin /* IMPORTED_SHORT_ENUMERATION_ITEM */, ImplicitFloorReq_release /* IMPORTED_LONG_ENUMERATION_ITEM */, release /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ImplicitFloorReq, _encode_ImplicitFloorReq } from "../UmtsHI2Operations/ImplicitFloorReq.ta.mjs";
import { type InitiationCause, _decode_InitiationCause, _encode_InitiationCause, _enum_for_InitiationCause } from "../UmtsHI2Operations/InitiationCause.ta.mjs";
// export { InitiationCause, _enum_for_InitiationCause, InitiationCause_requests /* IMPORTED_LONG_ENUMERATION_ITEM */, requests /* IMPORTED_SHORT_ENUMERATION_ITEM */, InitiationCause_received /* IMPORTED_LONG_ENUMERATION_ITEM */, InitiationCause_pTCOriginatingId /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCOriginatingId /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_InitiationCause, _encode_InitiationCause } from "../UmtsHI2Operations/InitiationCause.ta.mjs";
import { type IPADirection, _decode_IPADirection, _encode_IPADirection, _enum_for_IPADirection } from "../UmtsHI2Operations/IPADirection.ta.mjs";
// export { IPADirection, _enum_for_IPADirection, IPADirection_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, IPADirection_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_IPADirection, _encode_IPADirection } from "../UmtsHI2Operations/IPADirection.ta.mjs";
import { type ListManagementAction, _decode_ListManagementAction, _encode_ListManagementAction, _enum_for_ListManagementAction } from "../UmtsHI2Operations/ListManagementAction.ta.mjs";
// export { ListManagementAction, _enum_for_ListManagementAction, ListManagementAction_create /* IMPORTED_LONG_ENUMERATION_ITEM */, create /* IMPORTED_SHORT_ENUMERATION_ITEM */, ListManagementAction_modify /* IMPORTED_LONG_ENUMERATION_ITEM */, ListManagementAction_retrieve /* IMPORTED_LONG_ENUMERATION_ITEM */, retrieve /* IMPORTED_SHORT_ENUMERATION_ITEM */, ListManagementAction_delete /* IMPORTED_LONG_ENUMERATION_ITEM */, delete_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, ListManagementAction_notify /* IMPORTED_LONG_ENUMERATION_ITEM */, notify /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ListManagementAction, _encode_ListManagementAction } from "../UmtsHI2Operations/ListManagementAction.ta.mjs";
import { type ListManagementType, _decode_ListManagementType, _encode_ListManagementType, _enum_for_ListManagementType } from "../UmtsHI2Operations/ListManagementType.ta.mjs";
// export { ListManagementType, _enum_for_ListManagementType, ListManagementType_contactListManagementAttempt /* IMPORTED_LONG_ENUMERATION_ITEM */, contactListManagementAttempt /* IMPORTED_SHORT_ENUMERATION_ITEM */, ListManagementType_groupListManagementAttempt /* IMPORTED_LONG_ENUMERATION_ITEM */, groupListManagementAttempt /* IMPORTED_SHORT_ENUMERATION_ITEM */, ListManagementType_contactListManagementResult /* IMPORTED_LONG_ENUMERATION_ITEM */, contactListManagementResult /* IMPORTED_SHORT_ENUMERATION_ITEM */, ListManagementType_groupListManagementResult /* IMPORTED_LONG_ENUMERATION_ITEM */, groupListManagementResult /* IMPORTED_SHORT_ENUMERATION_ITEM */, ListManagementType_requestSuccessful /* IMPORTED_LONG_ENUMERATION_ITEM */, requestSuccessful /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ListManagementType, _encode_ListManagementType } from "../UmtsHI2Operations/ListManagementType.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../UmtsHI2Operations/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../UmtsHI2Operations/Location.ta.mjs";
import { type Priority_Level, _decode_Priority_Level, _encode_Priority_Level, _enum_for_Priority_Level } from "../UmtsHI2Operations/Priority-Level.ta.mjs";
// export { Priority_Level, _enum_for_Priority_Level, Priority_Level_pre_emptive /* IMPORTED_LONG_ENUMERATION_ITEM */, pre_emptive /* IMPORTED_SHORT_ENUMERATION_ITEM */, Priority_Level_high_priority /* IMPORTED_LONG_ENUMERATION_ITEM */, high_priority /* IMPORTED_SHORT_ENUMERATION_ITEM */, Priority_Level_normal_priority /* IMPORTED_LONG_ENUMERATION_ITEM */, normal_priority /* IMPORTED_SHORT_ENUMERATION_ITEM */, Priority_Level_listen_only /* IMPORTED_LONG_ENUMERATION_ITEM */, listen_only /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Priority_Level, _encode_Priority_Level } from "../UmtsHI2Operations/Priority-Level.ta.mjs";
import { type PreEstStatus, _decode_PreEstStatus, _encode_PreEstStatus, _enum_for_PreEstStatus } from "../UmtsHI2Operations/PreEstStatus.ta.mjs";
// export { PreEstStatus, _enum_for_PreEstStatus, PreEstStatus_established /* IMPORTED_LONG_ENUMERATION_ITEM */, established /* IMPORTED_SHORT_ENUMERATION_ITEM */, PreEstStatus_modify /* IMPORTED_LONG_ENUMERATION_ITEM */, PreEstStatus_released /* IMPORTED_LONG_ENUMERATION_ITEM */, released /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PreEstStatus, _encode_PreEstStatus } from "../UmtsHI2Operations/PreEstStatus.ta.mjs";
import { type RegistrationRequest, _decode_RegistrationRequest, _encode_RegistrationRequest, _enum_for_RegistrationRequest } from "../UmtsHI2Operations/RegistrationRequest.ta.mjs";
// export { RegistrationRequest, _enum_for_RegistrationRequest, RegistrationRequest_register /* IMPORTED_LONG_ENUMERATION_ITEM */, register /* IMPORTED_SHORT_ENUMERATION_ITEM */, RegistrationRequest_re_register /* IMPORTED_LONG_ENUMERATION_ITEM */, re_register /* IMPORTED_SHORT_ENUMERATION_ITEM */, RegistrationRequest_de_register /* IMPORTED_LONG_ENUMERATION_ITEM */, de_register /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RegistrationRequest, _encode_RegistrationRequest } from "../UmtsHI2Operations/RegistrationRequest.ta.mjs";
import { type RegistrationOutcome, _decode_RegistrationOutcome, _encode_RegistrationOutcome, _enum_for_RegistrationOutcome } from "../UmtsHI2Operations/RegistrationOutcome.ta.mjs";
// export { RegistrationOutcome, _enum_for_RegistrationOutcome, RegistrationOutcome_success /* IMPORTED_LONG_ENUMERATION_ITEM */, success /* IMPORTED_SHORT_ENUMERATION_ITEM */, RegistrationOutcome_failure /* IMPORTED_LONG_ENUMERATION_ITEM */, failure /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RegistrationOutcome, _encode_RegistrationOutcome } from "../UmtsHI2Operations/RegistrationOutcome.ta.mjs";
import { RTPSetting, _decode_RTPSetting, _encode_RTPSetting } from "../UmtsHI2Operations/RTPSetting.ta.mjs";
// export { RTPSetting, _decode_RTPSetting, _encode_RTPSetting } from "../UmtsHI2Operations/RTPSetting.ta.mjs";
import { type Talk_burst_reason_code, _decode_Talk_burst_reason_code, _encode_Talk_burst_reason_code } from "../UmtsHI2Operations/Talk-burst-reason-code.ta.mjs";
// export { Talk_burst_reason_code, _decode_Talk_burst_reason_code, _encode_Talk_burst_reason_code } from "../UmtsHI2Operations/Talk-burst-reason-code.ta.mjs";
import { TalkburstControlSetting, _decode_TalkburstControlSetting, _encode_TalkburstControlSetting } from "../UmtsHI2Operations/TalkburstControlSetting.ta.mjs";
// export { TalkburstControlSetting, _decode_TalkburstControlSetting, _encode_TalkburstControlSetting } from "../UmtsHI2Operations/TalkburstControlSetting.ta.mjs";


/**
 * @summary PTC
 * @description
 * 
 * IRI parameters for Push-to-talk over Cellular, covering both PoC and MCPTT.
 * PTC is intercepted and delivered separately from other services. The event is
 * pTCType; clause 17 states which events are begin, continue, end, or report
 * records. The timestamp is required. Other parameters are included under the
 * conditions in clause 17 and clause 18.
 * 
 * Carried on the IRI as the PTC event parameter (annex B.3). 3GPP TS 33.108,
 * clauses 17 and 18; annex B.3. https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTC ::= SEQUENCE {
 *     abandonCause                [1] UTF8String OPTIONAL,
 *     accessPolicyFailure        [2] UTF8String    type OPTIONAL,
 *     accessPolicyType            [3] AccessPolicyType OPTIONAL,
 *     alertIndicator                [5] AlertIndicator OPTIONAL,
 *     associatePresenceStatus    [6] AssociatePresenceStatus OPTIONAL,
 *     bearer-capability            [7] UTF8String OPTIONAL,
 *         -- identifies the Bearer capability information element (value part)
 *     broadcastIndicator            [8] BOOLEAN    type OPTIONAL,
 *     -- default False, true indicates this is a braodcast to a group
 *     contactID                      [9] UTF8String OPTIONAL,
 *     emergency                     [10] Emergency OPTIONAL,
 *     emergencyGroupState        [11] EmergencyGroupState OPTIONAL,
 *     timeStamp                    [12] TimeStamp,
 *     pTCType                        [13] PTCType OPTIONAL,
 *     failureCode                    [14] UTF8String    type OPTIONAL,
 *     floorActivity                [15] FloorActivity OPTIONAL,
 *     floorSpeakerID                [16] PTCAddress OPTIONAL,
 *     groupAdSender                [17] UTF8String OPTIONAL,
 *     -- Identifies the group administrator who was the originator of the group call.
 *     -- tag [18] was used in r15 (15) version-4 (4)
 *     groupAuthRule                [19] GroupAuthRule OPTIONAL,
 *     groupCharacteristics        [20] UTF8String OPTIONAL,
 *     holdRetrieveInd                [21] BOOLEAN OPTIONAL,
 *     -- true indicates target is placed on hold, false indicates target was retrived from hold.
 *     -- tag [22] was used in r15 (15) version-4 (4)
 *     imminentPerilInd             [23] ImminentPerilInd OPTIONAL,
 *     implicitFloorReq            [24] ImplicitFloorReq OPTIONAL,
 *     initiationCause                [25] InitiationCause OPTIONAL,
 *     invitationCause                [26] UTF8String OPTIONAL,
 *     iPAPartyID                    [27] UTF8String OPTIONAL,
 *     iPADirection                [28] IPADirection OPTIONAL,
 *     listManagementAction        [29] ListManagementAction OPTIONAL,
 *     listManagementFailure        [30] UTF8String OPTIONAL,
 *     listManagementType            [31] ListManagementType OPTIONAL,
 *     maxTBTime                    [32] UTF8String OPTIONAL,  -- defined in seconds.
 *     mCPTTGroupID                [33] UTF8String OPTIONAL,
 *     mCPTTID                        [34] UTF8String OPTIONAL,
 *     mCPTTInd                    [35] BOOLEAN OPTIONAL,
 *     -- default False indicates to associate from target, true indicates to the target.
 *     location                    [36] Location OPTIONAL,
 *     mCPTTOrganizationName        [37] UTF8String OPTIONAL,
 *     mediaStreamAvail             [38] BOOLEAN OPTIONAL,
 *     -- True indicates available for media, false indicates not able to accept media.
 *     priority-Level                [40] Priority-Level OPTIONAL,
 *     preEstSessionID                [41] UTF8String OPTIONAL,
 *     preEstStatus                [42] PreEstStatus OPTIONAL,
 *     pTCGroupID                    [43] UTF8String OPTIONAL,
 *     pTCIDList                    [44] UTF8String OPTIONAL,
 *     pTCMediaCapability            [45] UTF8String OPTIONAL,
 *     pTCOriginatingId           [46] UTF8String OPTIONAL,
 *     pTCOther                    [47] UTF8String OPTIONAL,
 *     pTCParticipants              [48] UTF8String OPTIONAL,
 *     pTCParty                    [49] UTF8String OPTIONAL,
 *     pTCPartyDrop                [50] UTF8String OPTIONAL,
 *     pTCSessionInfo               [51] UTF8String OPTIONAL,
 *     pTCServerURI                [52] UTF8String OPTIONAL,
 *     pTCUserAccessPolicy        [53] UTF8String OPTIONAL,
 *     pTCAddress                    [54] PTCAddress OPTIONAL,
 *     queuedFloorControl            [55] BOOLEAN OPTIONAL,
 *     --Default FALSE,send TRUE if Queued floor control is used.
 *     queuedPosition                [56] UTF8String OPTIONAL,
 *     -- indicates the queued position of the Speaker (Target or associate) who has the
 *     -- right to speak.
 *     registrationRequest        [57] RegistrationRequest OPTIONAL,
 *     registrationOutcome        [58] RegistrationOutcome OPTIONAL,
 *     retrieveID                    [59] UTF8String OPTIONAL,
 *     rTPSetting                    [60] RTPSetting OPTIONAL,
 *     talkBurstPriority            [61] Priority-Level    type OPTIONAL,
 *     talkBurstReason                [62] Talk-burst-reason-code OPTIONAL,
 *     -- Talk-burst-reason-code Defined according to the rules and procedures
 *     -- in (OMA-PoC-AD [97])
 *     talkburstControlSetting    [63] TalkburstControlSetting OPTIONAL,
 *     targetPresenceStatus        [64] UTF8String OPTIONAL,
 *     port-Number                    [65] INTEGER (0..65535) OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class PTC {
    /**
     * @summary `abandonCause`.
     * @description
     * 
     * Reason the PTC session was abandoned. Mandatory on the session-abandon
     * end record (table 17.2.5). Table 17.2.7 also marks it mandatory on the
     * session-end record, with the same wording.
     * 
     * 3GPP TS 33.108, clause 17.1.5, tables 17.2.5 and 17.2.7.
     * 
     * @public
     * @readonly
     */
    readonly abandonCause: OPTIONAL<UTF8String>;
    /**
     * @summary `accessPolicyFailure`.
     * @description
     * 
     * Error code or reason when an access-policy request fails. Conditional on
     * the access-policy record (table 17.2.18). Annex B.3 does not list the
     * code values.
     * 
     * 3GPP TS 33.108, clause 17.1.5, table 17.2.18, and annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly accessPolicyFailure: OPTIONAL<UTF8String>;
    /**
     * @summary `accessPolicyType`.
     * @description
     * 
     * Which access-policy list the target is managing or querying: the user
     * access policy or the group authorization rules, and whether this report
     * is an attempt, a query, a network result, or an unsuccessful request.
     * Report an attempt or query when the target changes or queries the lists.
     * Report a result when the network notifies the target, or when the request
     * failed.
     * 
     * 3GPP TS 33.108, clause 17.2.18, table 17.2.18, and annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly accessPolicyType: OPTIONAL<AccessPolicyType>;
    /**
     * @summary `alertIndicator`.
     * @description
     * 
     * An emergency alert was sent, received, or cancelled. Conditional on
     * group-call request, cancel, and response. On cancel it means the alert
     * signalling was cancelled.
     * 
     * 3GPP TS 33.108, clause 17.1.5, tables 17.3.2, 17.3.3, and 17.3.4.
     * 
     * @public
     * @readonly
     */
    readonly alertIndicator: OPTIONAL<AlertIndicator>;
    /**
     * @summary `associatePresenceStatus`.
     * @description
     * 
     * Presence of PTC clients or groups that the PTC server watches for the
     * target: each identity, whether it is a client or a group, and its
     * presence state. Include it when presence is supported and the server is
     * the watcher. Used on session initiation, session start, party join, party
     * drop, and the associate-presence report.
     * 
     * 3GPP TS 33.108, clause 17.1.5 and the tables in clause 17.2 that list it.
     * 
     * @public
     * @readonly
     */
    readonly associatePresenceStatus: OPTIONAL<AssociatePresenceStatus>;
    /**
     * @summary `bearer_capability`.
     * @description
     * 
     * Bearer-capability information element, value part: media characteristics
     * of the PTC session, such as SDP, media format, and vocoder, when known.
     * Conditional on start of interception, session initiation, session start,
     * and party join. On media modification, table 17.2.12 marks it mandatory
     * and still says to provide it when known.
     * 
     * 3GPP TS 33.108, clause 17.1.5, clause 17.2, and annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly bearer_capability: OPTIONAL<UTF8String>;
    /**
     * @summary `broadcastIndicator`.
     * @description
     * 
     * False by default. True means this is a broadcast to the group.
     * Conditional on group-call request, cancel, and response.
     * 
     * 3GPP TS 33.108, tables 17.3.2, 17.3.3, and 17.3.4; annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly broadcastIndicator: OPTIONAL<BOOLEAN>;
    /**
     * @summary `contactID`.
     * @description
     * 
     * Identity of one contact in a contact list or group list. One contact per
     * list. Conditional, and only when known, on list-management and
     * access-policy records.
     * 
     * 3GPP TS 33.108, clause 17.1.5, tables 17.2.17 and 17.2.18.
     * 
     * @public
     * @readonly
     */
    readonly contactID: OPTIONAL<UTF8String>;
    /**
     * @summary `emergency`.
     * @description
     * 
     * Emergency type when the group call is a peril or imminent-peril alert, or
     * the cancellation of that alert. Conditional on the group-call request,
     * cancel, response, and interrogate records.
     * 
     * 3GPP TS 33.108, tables 17.3.2, 17.3.3, 17.3.4, and 17.3.5.
     * 
     * @public
     * @readonly
     */
    readonly emergency: OPTIONAL<Emergency>;
    /**
     * @summary `emergencyGroupState`.
     * @description
     * 
     * Emergency state of an MCPTT emergency call, when an emergency is
     * indicated. On a group-call cancel it means the group's emergency state
     * was cancelled. Conditional on the group-call records in clause 17.3.
     * 
     * 3GPP TS 33.108, tables 17.3.2, 17.3.3, 17.3.4, and 17.3.5.
     * 
     * @public
     * @readonly
     */
    readonly emergencyGroupState: OPTIONAL<EmergencyGroupState>;
    /**
     * @summary `timeStamp`.
     * @description
     * 
     * Date and time the PTC event was generated at the PTC server or client.
     * Required on the PTC records in clause 17. Annex B.3 does not mark the
     * component optional.
     * 
     * 3GPP TS 33.108, clause 17 and annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly timeStamp: TimeStamp;
    /**
     * @summary `pTCType`.
     * @description
     * 
     * Which PTC event this record reports. Stage 2 requires the event type. The
     * named values in clause 17 say whether the record is a begin, continue,
     * end, or report, except where that clause does not (the pre-established
     * session record, encryption, and CC).
     * 
     * 3GPP TS 33.108, clauses 17 and 18; annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly pTCType: OPTIONAL<PTCType>;
    /**
     * @summary `failureCode`.
     * @description
     * 
     * Reason or code for failure or closing of the session. Conditional on the
     * pre-established session record when that session cannot be established or
     * modified (table 17.2.20). Annex B.3 does not list the code values.
     * 
     * 3GPP TS 33.108, clause 17.1.5, table 17.2.20, and annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly failureCode: OPTIONAL<UTF8String>;
    /**
     * @summary `floorActivity`.
     * @description
     * 
     * Talk-burst control action. Mandatory on a floor-control continue record.
     * The actions in table 17.2.14 are: request (client asks to send a talk
     * burst); granted (permission given); deny (permission refused); idle
     * (nobody holds the floor and a request may be accepted); taken (another
     * client holds the floor); revoke (the server takes the floor back,
     * including pre-emption and over-long use); queued (the request is queued,
     * when queuing is supported); release (the talk request has completed).
     * 
     * 3GPP TS 33.108, clause 17.2.14, table 17.2.14.
     * 
     * @public
     * @readonly
     */
    readonly floorActivity: OPTIONAL<FloorActivity>;
    /**
     * @summary `floorSpeakerID`.
     * @description
     * 
     * PTC client that currently has the talk burst, when known. Omit it when
     * the floor is idle. Conditional on a floor-control continue record.
     * 
     * 3GPP TS 33.108, clause 17.1.5 and table 17.2.14.
     * 
     * @public
     * @readonly
     */
    readonly floorSpeakerID: OPTIONAL<PTCAddress>;
    /**
     * @summary `groupAdSender`.
     * @description
     * 
     * Group administrator who originated the group advertisement. Mandatory on
     * the group-advertisement report.
     * 
     * 3GPP TS 33.108, clause 17.1.5, table 17.2.13, and annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly groupAdSender: OPTIONAL<UTF8String>;
    /**
     * @summary `groupAuthRule`.
     * @description
     * 
     * Action the target requested on the PTC group authorization rules: allow
     * or block initiating a session, joining a session, adding participants,
     * subscribing to session state, or anonymity. Report it when the target
     * requests the action or attempts a change or query of the access control
     * list. Also conditional on the group-advertisement report.
     * 
     * 3GPP TS 33.108, tables 17.2.13 and 17.2.18.
     * 
     * @public
     * @readonly
     */
    readonly groupAuthRule: OPTIONAL<GroupAuthRule>;
    /**
     * @summary `groupCharacteristics`.
     * @description
     * 
     * Identifying feature of the PTC group, including an MCPTT-specific
     * characteristic. Conditional when reported on group advertisement and on
     * the group-call records.
     * 
     * 3GPP TS 33.108, clause 17.1.5 and clause 17.3.
     * 
     * @public
     * @readonly
     */
    readonly groupCharacteristics: OPTIONAL<UTF8String>;
    /**
     * @summary `holdRetrieveInd`.
     * @description
     * 
     * True means the PTC session was placed on hold: media bursts are
     * deactivated and the session is locked for talking and listening. False
     * means the session was retrieved from hold. Mandatory on the party
     * hold/retrieve record.
     * 
     * 3GPP TS 33.108, table 17.2.11 and annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly holdRetrieveInd: OPTIONAL<BOOLEAN>;
    /**
     * @summary `imminentPerilInd`.
     * @description
     * 
     * The call is an imminent-peril notification, and this report is the
     * request toward the target, the response from the target, or the cancel.
     * Mandatory on the MCPTT imminent-peril group-call report.
     * 
     * 3GPP TS 33.108, table 17.3.6 and annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly imminentPerilInd: OPTIONAL<ImminentPerilInd>;
    /**
     * @summary `implicitFloorReq`.
     * @description
     * 
     * Annex B.3: a group-call request to join, to rejoin, or to release the
     * group call. The named values are join, rejoin, and release, which match
     * the group-call request in clause 17.3.2. Clause 17.1.5 instead says this
     * parameter indicates the client who requested the floor.
     * 
     * 3GPP TS 33.108, clause 17.1.5, clause 17.3.2, and annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly implicitFloorReq: OPTIONAL<ImplicitFloorReq>;
    /**
     * @summary `initiationCause`.
     * @description
     * 
     * Who originated PTC session initiation. If an associate originated it,
     * include that associate's identity when known. Mandatory on the
     * session-initiation begin record. Conditional on the session-start
     * continue record. Annex B.3: the target requests a session, or receives
     * initiation from the network or from another party.
     * 
     * 3GPP TS 33.108, tables 17.2.4 and 17.2.6; annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly initiationCause: OPTIONAL<InitiationCause>;
    /**
     * @summary `invitationCause`.
     * @description
     * 
     * Annex B.3 includes this parameter and does not define its contents.
     * Clause 17 does not name it. TS 33.108 does not further define it.
     * 
     * @public
     * @readonly
     */
    readonly invitationCause: OPTIONAL<UTF8String>;
    /**
     * @summary `iPAPartyID`.
     * @description
     * 
     * PTC associate that received an instant personal alert from the target, or
     * that sent the alert to the target. Mandatory on the instant personal
     * alert report (table 17.2.8). Table 17.2.9 also lists it as mandatory on
     * party join, with the same alert wording.
     * 
     * 3GPP TS 33.108, clause 17.1.5, table 17.2.8, and table 17.2.9.
     * 
     * @public
     * @readonly
     */
    readonly iPAPartyID: OPTIONAL<UTF8String>;
    /**
     * @summary `iPADirection`.
     * @description
     * 
     * Direction of an instant personal alert: toward the PTC target, or from
     * the PTC target. Mandatory on the instant personal alert report.
     * 
     * 3GPP TS 33.108, table 17.2.8 and annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly iPADirection: OPTIONAL<IPADirection>;
    /**
     * @summary `listManagementAction`.
     * @description
     * 
     * What the target, or the network notification, did to a contact list or a
     * PTC group list: create, modify, retrieve, delete, or notify. Conditional.
     * Report it when the target attempts the change and when the network
     * notifies the target of a change.
     * 
     * 3GPP TS 33.108, table 17.2.17 and annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly listManagementAction: OPTIONAL<ListManagementAction>;
    /**
     * @summary `listManagementFailure`.
     * @description
     * 
     * Error code or reason when a list-management request fails. Conditional on
     * the list-management report. Annex B.3 does not list the codes.
     * 
     * 3GPP TS 33.108, clause 17.1.5 and table 17.2.17.
     * 
     * @public
     * @readonly
     */
    readonly listManagementFailure: OPTIONAL<UTF8String>;
    /**
     * @summary `listManagementType`.
     * @description
     * 
     * Whether the target attempted to manage a contact list or a group list, or
     * the network is reporting the result of that management. Conditional.
     * Attempts are reported when the target's client changes the lists. Results
     * are reported when the network notifies the target. Table 17.2.17 item (e)
     * says "Request unsuccessful"; annex B.3 names the fifth value
     * requestSuccessful.
     * 
     * 3GPP TS 33.108, table 17.2.17 and annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly listManagementType: OPTIONAL<ListManagementType>;
    /**
     * @summary `maxTBTime`.
     * @description
     * 
     * Maximum talk-burst duration, in seconds, before the server revokes
     * permission. Conditional on a floor-control record, when known.
     * 
     * 3GPP TS 33.108, table 17.2.14 and annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly maxTBTime: OPTIONAL<UTF8String>;
    /**
     * @summary `mCPTTGroupID`.
     * @description
     * 
     * Mission Critical Push To Talk group identity. Mandatory on the
     * imminent-peril group-call report.
     * 
     * 3GPP TS 33.108, clause 17.1.5 and table 17.3.6.
     * 
     * @public
     * @readonly
     */
    readonly mCPTTGroupID: OPTIONAL<UTF8String>;
    /**
     * @summary `mCPTTID`.
     * @description
     * 
     * MCPTT identity of the target, when available. The registration and
     * group-call tables include observed MCPTT identity among the identities of
     * which at least one shall be provided.
     * 
     * 3GPP TS 33.108, clause 17.1.5 and clause 17.2.1.
     * 
     * @public
     * @readonly
     */
    readonly mCPTTID: OPTIONAL<UTF8String>;
    /**
     * @summary `mCPTTInd`.
     * @description
     * 
     * Direction of an MCPTT emergency or imminent-peril condition: from the
     * MCPTT target, or from an MCPTT group toward the target. Annex B.3: false
     * means from the target toward an associate, and true means toward the
     * target. Default false. Conditional on the group-call records; mandatory
     * on the imminent-peril report (table 17.3.6).
     * 
     * 3GPP TS 33.108, clause 17.3 and annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly mCPTTInd: OPTIONAL<BOOLEAN>;
    /**
     * @summary `location`.
     * @description
     * 
     * Location of the PTC target. Include it when reporting that location is
     * authorized. The clause 17 tables that list it include session initiation,
     * abandon, start, and end; pre-established session establishment or
     * release; and the group-call request, cancel, and imminent-peril reports.
     * 
     * 3GPP TS 33.108, clause 17.1.5 and annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<Location>;
    /**
     * @summary `mCPTTOrganizationName`.
     * @description
     * 
     * Name of the organization the MCPTT device belongs to, if known.
     * Conditional on the group-call records in clause 17.3.
     * 
     * 3GPP TS 33.108, clause 17.1.5 and clause 17.3.
     * 
     * @public
     * @readonly
     */
    readonly mCPTTOrganizationName: OPTIONAL<UTF8String>;
    /**
     * @summary `mediaStreamAvail`.
     * @description
     * 
     * True means the target's PTC client can accept media. False means it
     * cannot. Annex B.3. Clause 17 uses it to say the client is not able or not
     * willing to receive media immediately. Provide it when a pre-established
     * session is established, and on the other session records in clause 17.2
     * that list it (start of interception, party join, media modification,
     * media-type notification).
     * 
     * 3GPP TS 33.108, clause 17.1.5, clause 17.2, and annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly mediaStreamAvail: OPTIONAL<BOOLEAN>;
    /**
     * @summary `priority_Level`.
     * @description
     * 
     * Talk-burst priority of the PTC client when more than one priority level
     * is supported (OMA-PoC-AD [97]). Clause 17.1.5 maps "Priority Level" to
     * this parameter. Table 17.2.14 maps the same description to the talk-burst
     * priority parameter.
     * 
     * 3GPP TS 33.108, clause 17.1.5, table 17.2.14, and annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly priority_Level: OPTIONAL<Priority_Level>;
    /**
     * @summary `preEstSessionID`.
     * @description
     * 
     * Identity of a pre-established PTC session: session URI, session type, and
     * nickname. Mandatory on the pre-established session record. Conditional on
     * start of interception when the session is pre-established.
     * 
     * 3GPP TS 33.108, clause 17.1.5, tables 17.2.2 and 17.2.20.
     * 
     * @public
     * @readonly
     */
    readonly preEstSessionID: OPTIONAL<UTF8String>;
    /**
     * @summary `preEstStatus`.
     * @description
     * 
     * Whether the pre-established session is established, modified, or
     * released. Mandatory on the pre-established session record. On session
     * end, conditional: whether a pre-established session used for the released
     * PTC session remains established or was released.
     * 
     * 3GPP TS 33.108, tables 17.2.7 and 17.2.20.
     * 
     * @public
     * @readonly
     */
    readonly preEstStatus: OPTIONAL<PreEstStatus>;
    /**
     * @summary `pTCGroupID`.
     * @description
     * 
     * PTC group identity, nickname, and characteristics. Mandatory on
     * group-call request, cancel, response, and interrogate. Conditional on
     * group advertisement and on list management.
     * 
     * 3GPP TS 33.108, clause 17.1.5, clause 17.2.13, clause 17.2.17, and clause
     * 17.3.
     * 
     * @public
     * @readonly
     */
    readonly pTCGroupID: OPTIONAL<UTF8String>;
    /**
     * @summary `pTCIDList`.
     * @description
     * 
     * Participants taken from the target's contact list and from the target's
     * PTC group list, for a group call. Mandatory on a group-call request.
     * Conditional on group advertisement, list management, group-call cancel,
     * and group interrogate.
     * 
     * 3GPP TS 33.108, clause 17.1.5 and the tables that list PTCIDList.
     * 
     * @public
     * @readonly
     */
    readonly pTCIDList: OPTIONAL<UTF8String>;
    /**
     * @summary `pTCMediaCapability`.
     * @description
     * 
     * Codecs and media parameters the PTC server selected from the original SDP
     * offer of the target's PTC client. Mandatory on the pre-established
     * session record.
     * 
     * 3GPP TS 33.108, clause 17.1.5 and table 17.2.20.
     * 
     * @public
     * @readonly
     */
    readonly pTCMediaCapability: OPTIONAL<UTF8String>;
    /**
     * @summary `pTCOriginatingId`.
     * @description
     * 
     * Originating party, when known. Conditional on start of interception,
     * session initiation, and session start.
     * 
     * 3GPP TS 33.108, clause 17.1.5, tables 17.2.2, 17.2.4, and 17.2.6.
     * 
     * @public
     * @readonly
     */
    readonly pTCOriginatingId: OPTIONAL<UTF8String>;
    /**
     * @summary `pTCOther`.
     * @description
     * 
     * Other information required to decrypt the data (clause 17.1.5). Clause 18
     * gives that role to the same-named component of the encryption parameters.
     * Annex B.3 also places the string on the PTC event itself and does not add
     * a condition.
     * 
     * 3GPP TS 33.108, clause 17.1.5, clause 18, and annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly pTCOther: OPTIONAL<UTF8String>;
    /**
     * @summary `pTCParticipants`.
     * @description
     * 
     * Known individual PTC participants. Mandatory on start of interception,
     * group-call response, group interrogate, and the imminent-peril report.
     * Conditional, when known, on session initiation, session start, party
     * hold, and group-call request.
     * 
     * 3GPP TS 33.108, clause 17.1.5 and the tables in clauses 17.2 and 17.3.
     * 
     * @public
     * @readonly
     */
    readonly pTCParticipants: OPTIONAL<UTF8String>;
    /**
     * @summary `pTCParty`.
     * @description
     * 
     * PTC associate who joined, dropped, was placed on hold, or was retrieved,
     * including an MCPTT emergency or imminent-peril associate of the target.
     * Mandatory as the associate who placed the session on hold (table
     * 17.2.11), who cancelled the group call (table 17.3.3), and who initiated
     * an imminent-peril session toward the target (table 17.3.6). Conditional
     * when an associate requested the group-call response or the interrogate.
     * 
     * 3GPP TS 33.108, clause 17.1.5 and clause 17.3.
     * 
     * @public
     * @readonly
     */
    readonly pTCParty: OPTIONAL<UTF8String>;
    /**
     * @summary `pTCPartyDrop`.
     * @description
     * 
     * Identity of the associate that leaves the PTC session. Mandatory on the
     * party-drop continue record.
     * 
     * 3GPP TS 33.108, clause 17.1.5 and table 17.2.10.
     * 
     * @public
     * @readonly
     */
    readonly pTCPartyDrop: OPTIONAL<UTF8String>;
    /**
     * @summary `pTCSessionInfo`.
     * @description
     * 
     * PTC session URI, session type, and nickname. Mandatory on the session
     * records in clause 17.2 that establish, abandon, start, end, join, or
     * otherwise describe a session. On start of interception, required when the
     * session is not pre-established; a pre-established session uses the
     * pre-established session identity instead.
     * 
     * 3GPP TS 33.108, clause 17.1.5 and table 17.2.2.
     * 
     * @public
     * @readonly
     */
    readonly pTCSessionInfo: OPTIONAL<UTF8String>;
    /**
     * @summary `pTCServerURI`.
     * @description
     * 
     * PTC server serving the target, or the server of a session the target
     * participates in, when known. Conditional on registration, session
     * initiation, session start, and session end. Mandatory on the
     * pre-established session record: the participating server of the client
     * that originated the pre-established session request.
     * 
     * 3GPP TS 33.108, clause 17.1.5, table 17.2.1, and table 17.2.20.
     * 
     * @public
     * @readonly
     */
    readonly pTCServerURI: OPTIONAL<UTF8String>;
    /**
     * @summary `pTCUserAccessPolicy`.
     * @description
     * 
     * Action the target requested on the PTC user access policy. Table 17.2.18
     * lists: allow or block an incoming PTC session request, allow auto-answer
     * mode, and allow override of manual answer mode. Report it when the target
     * requests the action or attempts a change or query of the access control
     * list. Annex B.3 carries the value as a string and does not list the
     * allowed strings.
     * 
     * 3GPP TS 33.108, clause 17.1.5 and table 17.2.18.
     * 
     * @public
     * @readonly
     */
    readonly pTCUserAccessPolicy: OPTIONAL<UTF8String>;
    /**
     * @summary `pTCAddress`.
     * @description
     * 
     * A PTC client address: SIP URI, privacy indication, and optional nickname
     * (annex B.3). Floor-speaker identity uses this structure (table 17.2.14).
     * Annex B.3 also allows the address on the PTC record itself; clause 17
     * does not give that parameter its own condition.
     * 
     * 3GPP TS 33.108, annex B.3 and table 17.2.14.
     * 
     * @public
     * @readonly
     */
    readonly pTCAddress: OPTIONAL<PTCAddress>;
    /**
     * @summary `queuedFloorControl`.
     * @description
     * 
     * False by default. Send true when queued floor control is used.
     * Conditional on a floor-control continue record: whether queuing is
     * supported by the PTC server and by the target's client.
     * 
     * 3GPP TS 33.108, table 17.2.14 and annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly queuedFloorControl: OPTIONAL<BOOLEAN>;
    /**
     * @summary `queuedPosition`.
     * @description
     * 
     * Queue position when queued floor control is supported (table 17.2.14).
     * Annex B.3 says it is the queued position of the speaker, target or
     * associate, who has the right to speak. Conditional.
     * 
     * 3GPP TS 33.108, table 17.2.14 and annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly queuedPosition: OPTIONAL<UTF8String>;
    /**
     * @summary `registrationRequest`.
     * @description
     * 
     * Register, re-register, or de-register. Mandatory on the PTC registration
     * report, whether the attempt succeeds or fails.
     * 
     * 3GPP TS 33.108, clause 17.2.1 and table 17.2.1.
     * 
     * @public
     * @readonly
     */
    readonly registrationRequest: OPTIONAL<RegistrationRequest>;
    /**
     * @summary `registrationOutcome`.
     * @description
     * 
     * Success or failure of the PTC registration. Mandatory on the registration
     * report. The clause 17.1.5 mapping also says the outcome identifies the
     * failure reason; the enumeration only distinguishes success from failure.
     * 
     * 3GPP TS 33.108, clause 17.2.1 and table 17.1.5.
     * 
     * @public
     * @readonly
     */
    readonly registrationOutcome: OPTIONAL<RegistrationOutcome>;
    /**
     * @summary `retrieveID`.
     * @description
     * 
     * PTC subscriber that retrieved an ongoing session from hold. Table 17.2.11
     * marks it mandatory on the hold/retrieve record, in the same record as the
     * identity of the associate who placed the session on hold.
     * 
     * 3GPP TS 33.108, clause 17.1.5 and table 17.2.11.
     * 
     * @public
     * @readonly
     */
    readonly retrieveID: OPTIONAL<UTF8String>;
    /**
     * @summary `rTPSetting`.
     * @description
     * 
     * IP address and port at the PTC server for the RTP session. Mandatory on
     * the pre-established session record. Table 17.2.20 describes them as the
     * IP address and port number of the target at the PTC server.
     * 
     * 3GPP TS 33.108, clause 17.1.5, table 17.2.20, and annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly rTPSetting: OPTIONAL<RTPSetting>;
    /**
     * @summary `talkBurstPriority`.
     * @description
     * 
     * Talk-burst priority of the PTC client on a floor-control continue record,
     * when more than one priority level is supported (OMA-PoC-AD [97]).
     * Conditional (table 17.2.14). Clause 17.1.5 uses the same description for
     * the priority-level parameter.
     * 
     * 3GPP TS 33.108, table 17.2.14 and annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly talkBurstPriority: OPTIONAL<Priority_Level>;
    /**
     * @summary `talkBurstReason`.
     * @description
     * 
     * Reason code for denial or revoke of a talk burst, when known. Conditional
     * on a floor-control record. Coded by OMA-PoC-AD [97]. TS 33.108 does not
     * list the code strings.
     * 
     * 3GPP TS 33.108, table 17.2.14 and annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly talkBurstReason: OPTIONAL<Talk_burst_reason_code>;
    /**
     * @summary `talkburstControlSetting`.
     * @description
     * 
     * Talk-burst control protocol, the parameters the PTC server selected from
     * the client's SDP offer, and the server port for that protocol. Clause
     * 17.2.14 defines floor control as talk-burst control (TBCP) and does not
     * say on which record this parameter is required.
     * 
     * 3GPP TS 33.108, clause 17.2.14 and annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly talkburstControlSetting: OPTIONAL<TalkburstControlSetting>;
    /**
     * @summary `targetPresenceStatus`.
     * @description
     * 
     * PTC-related presence of the target, if it changed. Conditional on the
     * target-presence report and on list management. Table 17.2.18 marks it
     * mandatory on the access-policy record, with the same "if changed"
     * description.
     * 
     * 3GPP TS 33.108, clause 17.1.5, tables 17.2.15, 17.2.17, and 17.2.18.
     * 
     * @public
     * @readonly
     */
    readonly targetPresenceStatus: OPTIONAL<UTF8String>;
    /**
     * @summary `port_Number`.
     * @description
     * 
     * Optional port number on the PTC record, range 0..65535. Annex B.3 does
     * not say when it is sent or which port it is. The RTP port and the
     * talk-burst control port are separate parameters.
     * 
     * 3GPP TS 33.108, annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly port_Number: OPTIONAL<INTEGER>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        abandonCause: OPTIONAL<UTF8String>,
        accessPolicyFailure: OPTIONAL<UTF8String>,
        accessPolicyType: OPTIONAL<AccessPolicyType>,
        alertIndicator: OPTIONAL<AlertIndicator>,
        associatePresenceStatus: OPTIONAL<AssociatePresenceStatus>,
        bearer_capability: OPTIONAL<UTF8String>,
        broadcastIndicator: OPTIONAL<BOOLEAN>,
        contactID: OPTIONAL<UTF8String>,
        emergency: OPTIONAL<Emergency>,
        emergencyGroupState: OPTIONAL<EmergencyGroupState>,
        timeStamp: TimeStamp,
        pTCType?: OPTIONAL<PTCType>,
        failureCode?: OPTIONAL<UTF8String>,
        floorActivity?: OPTIONAL<FloorActivity>,
        floorSpeakerID?: OPTIONAL<PTCAddress>,
        groupAdSender?: OPTIONAL<UTF8String>,
        groupAuthRule?: OPTIONAL<GroupAuthRule>,
        groupCharacteristics?: OPTIONAL<UTF8String>,
        holdRetrieveInd?: OPTIONAL<BOOLEAN>,
        imminentPerilInd?: OPTIONAL<ImminentPerilInd>,
        implicitFloorReq?: OPTIONAL<ImplicitFloorReq>,
        initiationCause?: OPTIONAL<InitiationCause>,
        invitationCause?: OPTIONAL<UTF8String>,
        iPAPartyID?: OPTIONAL<UTF8String>,
        iPADirection?: OPTIONAL<IPADirection>,
        listManagementAction?: OPTIONAL<ListManagementAction>,
        listManagementFailure?: OPTIONAL<UTF8String>,
        listManagementType?: OPTIONAL<ListManagementType>,
        maxTBTime?: OPTIONAL<UTF8String>,
        mCPTTGroupID?: OPTIONAL<UTF8String>,
        mCPTTID?: OPTIONAL<UTF8String>,
        mCPTTInd?: OPTIONAL<BOOLEAN>,
        location?: OPTIONAL<Location>,
        mCPTTOrganizationName?: OPTIONAL<UTF8String>,
        mediaStreamAvail?: OPTIONAL<BOOLEAN>,
        priority_Level?: OPTIONAL<Priority_Level>,
        preEstSessionID?: OPTIONAL<UTF8String>,
        preEstStatus?: OPTIONAL<PreEstStatus>,
        pTCGroupID?: OPTIONAL<UTF8String>,
        pTCIDList?: OPTIONAL<UTF8String>,
        pTCMediaCapability?: OPTIONAL<UTF8String>,
        pTCOriginatingId?: OPTIONAL<UTF8String>,
        pTCOther?: OPTIONAL<UTF8String>,
        pTCParticipants?: OPTIONAL<UTF8String>,
        pTCParty?: OPTIONAL<UTF8String>,
        pTCPartyDrop?: OPTIONAL<UTF8String>,
        pTCSessionInfo?: OPTIONAL<UTF8String>,
        pTCServerURI?: OPTIONAL<UTF8String>,
        pTCUserAccessPolicy?: OPTIONAL<UTF8String>,
        pTCAddress?: OPTIONAL<PTCAddress>,
        queuedFloorControl?: OPTIONAL<BOOLEAN>,
        queuedPosition?: OPTIONAL<UTF8String>,
        registrationRequest?: OPTIONAL<RegistrationRequest>,
        registrationOutcome?: OPTIONAL<RegistrationOutcome>,
        retrieveID?: OPTIONAL<UTF8String>,
        rTPSetting?: OPTIONAL<RTPSetting>,
        talkBurstPriority?: OPTIONAL<Priority_Level>,
        talkBurstReason?: OPTIONAL<Talk_burst_reason_code>,
        talkburstControlSetting?: OPTIONAL<TalkburstControlSetting>,
        targetPresenceStatus?: OPTIONAL<UTF8String>,
        port_Number?: OPTIONAL<INTEGER>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.abandonCause = abandonCause;
        this.accessPolicyFailure = accessPolicyFailure;
        this.accessPolicyType = accessPolicyType;
        this.alertIndicator = alertIndicator;
        this.associatePresenceStatus = associatePresenceStatus;
        this.bearer_capability = bearer_capability;
        this.broadcastIndicator = broadcastIndicator;
        this.contactID = contactID;
        this.emergency = emergency;
        this.emergencyGroupState = emergencyGroupState;
        this.timeStamp = timeStamp;
        this.pTCType = pTCType;
        this.failureCode = failureCode;
        this.floorActivity = floorActivity;
        this.floorSpeakerID = floorSpeakerID;
        this.groupAdSender = groupAdSender;
        this.groupAuthRule = groupAuthRule;
        this.groupCharacteristics = groupCharacteristics;
        this.holdRetrieveInd = holdRetrieveInd;
        this.imminentPerilInd = imminentPerilInd;
        this.implicitFloorReq = implicitFloorReq;
        this.initiationCause = initiationCause;
        this.invitationCause = invitationCause;
        this.iPAPartyID = iPAPartyID;
        this.iPADirection = iPADirection;
        this.listManagementAction = listManagementAction;
        this.listManagementFailure = listManagementFailure;
        this.listManagementType = listManagementType;
        this.maxTBTime = maxTBTime;
        this.mCPTTGroupID = mCPTTGroupID;
        this.mCPTTID = mCPTTID;
        this.mCPTTInd = mCPTTInd;
        this.location = location;
        this.mCPTTOrganizationName = mCPTTOrganizationName;
        this.mediaStreamAvail = mediaStreamAvail;
        this.priority_Level = priority_Level;
        this.preEstSessionID = preEstSessionID;
        this.preEstStatus = preEstStatus;
        this.pTCGroupID = pTCGroupID;
        this.pTCIDList = pTCIDList;
        this.pTCMediaCapability = pTCMediaCapability;
        this.pTCOriginatingId = pTCOriginatingId;
        this.pTCOther = pTCOther;
        this.pTCParticipants = pTCParticipants;
        this.pTCParty = pTCParty;
        this.pTCPartyDrop = pTCPartyDrop;
        this.pTCSessionInfo = pTCSessionInfo;
        this.pTCServerURI = pTCServerURI;
        this.pTCUserAccessPolicy = pTCUserAccessPolicy;
        this.pTCAddress = pTCAddress;
        this.queuedFloorControl = queuedFloorControl;
        this.queuedPosition = queuedPosition;
        this.registrationRequest = registrationRequest;
        this.registrationOutcome = registrationOutcome;
        this.retrieveID = retrieveID;
        this.rTPSetting = rTPSetting;
        this.talkBurstPriority = talkBurstPriority;
        this.talkBurstReason = talkBurstReason;
        this.talkburstControlSetting = talkburstControlSetting;
        this.targetPresenceStatus = targetPresenceStatus;
        this.port_Number = port_Number;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

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
        return new PTC(_o.abandonCause, _o.accessPolicyFailure, _o.accessPolicyType, _o.alertIndicator, _o.associatePresenceStatus, _o.bearer_capability, _o.broadcastIndicator, _o.contactID, _o.emergency, _o.emergencyGroupState, _o.timeStamp, _o.pTCType, _o.failureCode, _o.floorActivity, _o.floorSpeakerID, _o.groupAdSender, _o.groupAuthRule, _o.groupCharacteristics, _o.holdRetrieveInd, _o.imminentPerilInd, _o.implicitFloorReq, _o.initiationCause, _o.invitationCause, _o.iPAPartyID, _o.iPADirection, _o.listManagementAction, _o.listManagementFailure, _o.listManagementType, _o.maxTBTime, _o.mCPTTGroupID, _o.mCPTTID, _o.mCPTTInd, _o.location, _o.mCPTTOrganizationName, _o.mediaStreamAvail, _o.priority_Level, _o.preEstSessionID, _o.preEstStatus, _o.pTCGroupID, _o.pTCIDList, _o.pTCMediaCapability, _o.pTCOriginatingId, _o.pTCOther, _o.pTCParticipants, _o.pTCParty, _o.pTCPartyDrop, _o.pTCSessionInfo, _o.pTCServerURI, _o.pTCUserAccessPolicy, _o.pTCAddress, _o.queuedFloorControl, _o.queuedPosition, _o.registrationRequest, _o.registrationOutcome, _o.retrieveID, _o.rTPSetting, _o.talkBurstPriority, _o.talkBurstReason, _o.talkburstControlSetting, _o.targetPresenceStatus, _o.port_Number, _o._unrecognizedExtensionsList);
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
    new $.ComponentSpec("bearer-capability", true, $.hasTag(_TagClass.context, 7)),
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
    let bearer_capability: OPTIONAL<UTF8String>;
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
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "abandonCause": (_el: _Element): void => { abandonCause = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "accessPolicyFailure": (_el: _Element): void => { accessPolicyFailure = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "accessPolicyType": (_el: _Element): void => { accessPolicyType = $._decode_implicit<AccessPolicyType>(() => _decode_AccessPolicyType)(_el); },
        "alertIndicator": (_el: _Element): void => { alertIndicator = $._decode_implicit<AlertIndicator>(() => _decode_AlertIndicator)(_el); },
        "associatePresenceStatus": (_el: _Element): void => { associatePresenceStatus = $._decode_implicit<AssociatePresenceStatus>(() => _decode_AssociatePresenceStatus)(_el); },
        "bearer-capability": (_el: _Element): void => { bearer_capability = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
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
        "port-Number": (_el: _Element): void => {
            port_Number = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof port_Number === "bigint" ? port_Number : BigInt(port_Number);
            if (_n < 0n || _n > 65535n) {
                throw new ASN1OverflowError("PTC.port_Number violates INTEGER range");
            }
        }
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
        bearer_capability,
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
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(61 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.abandonCause !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.abandonCause, $.BER);
    }
    if (value.accessPolicyFailure !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.accessPolicyFailure, $.BER);
    }
    if (value.accessPolicyType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_AccessPolicyType, $.BER)(value.accessPolicyType, $.BER);
    }
    if (value.alertIndicator !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_AlertIndicator, $.BER)(value.alertIndicator, $.BER);
    }
    if (value.associatePresenceStatus !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_AssociatePresenceStatus, $.BER)(value.associatePresenceStatus, $.BER);
    }
    if (value.bearer_capability !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeUTF8String, $.BER)(value.bearer_capability, $.BER);
    }
    if (value.broadcastIndicator !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeBoolean, $.BER)(value.broadcastIndicator, $.BER);
    }
    if (value.contactID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeUTF8String, $.BER)(value.contactID, $.BER);
    }
    if (value.emergency !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_Emergency, $.BER)(value.emergency, $.BER);
    }
    if (value.emergencyGroupState !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_EmergencyGroupState, $.BER)(value.emergencyGroupState, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 12, () => _encode_TimeStamp, $.BER)(value.timeStamp, $.BER);
    if (value.pTCType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_PTCType, $.BER)(value.pTCType, $.BER);
    }
    if (value.failureCode !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeUTF8String, $.BER)(value.failureCode, $.BER);
    }
    if (value.floorActivity !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_FloorActivity, $.BER)(value.floorActivity, $.BER);
    }
    if (value.floorSpeakerID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => _encode_PTCAddress, $.BER)(value.floorSpeakerID, $.BER);
    }
    if (value.groupAdSender !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeUTF8String, $.BER)(value.groupAdSender, $.BER);
    }
    if (value.groupAuthRule !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => _encode_GroupAuthRule, $.BER)(value.groupAuthRule, $.BER);
    }
    if (value.groupCharacteristics !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeUTF8String, $.BER)(value.groupCharacteristics, $.BER);
    }
    if (value.holdRetrieveInd !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => $._encodeBoolean, $.BER)(value.holdRetrieveInd, $.BER);
    }
    if (value.imminentPerilInd !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => _encode_ImminentPerilInd, $.BER)(value.imminentPerilInd, $.BER);
    }
    if (value.implicitFloorReq !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => _encode_ImplicitFloorReq, $.BER)(value.implicitFloorReq, $.BER);
    }
    if (value.initiationCause !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => _encode_InitiationCause, $.BER)(value.initiationCause, $.BER);
    }
    if (value.invitationCause !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => $._encodeUTF8String, $.BER)(value.invitationCause, $.BER);
    }
    if (value.iPAPartyID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => $._encodeUTF8String, $.BER)(value.iPAPartyID, $.BER);
    }
    if (value.iPADirection !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 28, () => _encode_IPADirection, $.BER)(value.iPADirection, $.BER);
    }
    if (value.listManagementAction !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => _encode_ListManagementAction, $.BER)(value.listManagementAction, $.BER);
    }
    if (value.listManagementFailure !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => $._encodeUTF8String, $.BER)(value.listManagementFailure, $.BER);
    }
    if (value.listManagementType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 31, () => _encode_ListManagementType, $.BER)(value.listManagementType, $.BER);
    }
    if (value.maxTBTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 32, () => $._encodeUTF8String, $.BER)(value.maxTBTime, $.BER);
    }
    if (value.mCPTTGroupID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 33, () => $._encodeUTF8String, $.BER)(value.mCPTTGroupID, $.BER);
    }
    if (value.mCPTTID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 34, () => $._encodeUTF8String, $.BER)(value.mCPTTID, $.BER);
    }
    if (value.mCPTTInd !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 35, () => $._encodeBoolean, $.BER)(value.mCPTTInd, $.BER);
    }
    if (value.location !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 36, () => _encode_Location, $.BER)(value.location, $.BER);
    }
    if (value.mCPTTOrganizationName !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 37, () => $._encodeUTF8String, $.BER)(value.mCPTTOrganizationName, $.BER);
    }
    if (value.mediaStreamAvail !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 38, () => $._encodeBoolean, $.BER)(value.mediaStreamAvail, $.BER);
    }
    if (value.priority_Level !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 40, () => _encode_Priority_Level, $.BER)(value.priority_Level, $.BER);
    }
    if (value.preEstSessionID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 41, () => $._encodeUTF8String, $.BER)(value.preEstSessionID, $.BER);
    }
    if (value.preEstStatus !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 42, () => _encode_PreEstStatus, $.BER)(value.preEstStatus, $.BER);
    }
    if (value.pTCGroupID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 43, () => $._encodeUTF8String, $.BER)(value.pTCGroupID, $.BER);
    }
    if (value.pTCIDList !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 44, () => $._encodeUTF8String, $.BER)(value.pTCIDList, $.BER);
    }
    if (value.pTCMediaCapability !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 45, () => $._encodeUTF8String, $.BER)(value.pTCMediaCapability, $.BER);
    }
    if (value.pTCOriginatingId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 46, () => $._encodeUTF8String, $.BER)(value.pTCOriginatingId, $.BER);
    }
    if (value.pTCOther !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 47, () => $._encodeUTF8String, $.BER)(value.pTCOther, $.BER);
    }
    if (value.pTCParticipants !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 48, () => $._encodeUTF8String, $.BER)(value.pTCParticipants, $.BER);
    }
    if (value.pTCParty !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 49, () => $._encodeUTF8String, $.BER)(value.pTCParty, $.BER);
    }
    if (value.pTCPartyDrop !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 50, () => $._encodeUTF8String, $.BER)(value.pTCPartyDrop, $.BER);
    }
    if (value.pTCSessionInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 51, () => $._encodeUTF8String, $.BER)(value.pTCSessionInfo, $.BER);
    }
    if (value.pTCServerURI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 52, () => $._encodeUTF8String, $.BER)(value.pTCServerURI, $.BER);
    }
    if (value.pTCUserAccessPolicy !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 53, () => $._encodeUTF8String, $.BER)(value.pTCUserAccessPolicy, $.BER);
    }
    if (value.pTCAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 54, () => _encode_PTCAddress, $.BER)(value.pTCAddress, $.BER);
    }
    if (value.queuedFloorControl !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 55, () => $._encodeBoolean, $.BER)(value.queuedFloorControl, $.BER);
    }
    if (value.queuedPosition !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 56, () => $._encodeUTF8String, $.BER)(value.queuedPosition, $.BER);
    }
    if (value.registrationRequest !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 57, () => _encode_RegistrationRequest, $.BER)(value.registrationRequest, $.BER);
    }
    if (value.registrationOutcome !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 58, () => _encode_RegistrationOutcome, $.BER)(value.registrationOutcome, $.BER);
    }
    if (value.retrieveID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 59, () => $._encodeUTF8String, $.BER)(value.retrieveID, $.BER);
    }
    if (value.rTPSetting !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 60, () => _encode_RTPSetting, $.BER)(value.rTPSetting, $.BER);
    }
    if (value.talkBurstPriority !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 61, () => _encode_Priority_Level, $.BER)(value.talkBurstPriority, $.BER);
    }
    if (value.talkBurstReason !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 62, () => _encode_Talk_burst_reason_code, $.BER)(value.talkBurstReason, $.BER);
    }
    if (value.talkburstControlSetting !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 63, () => _encode_TalkburstControlSetting, $.BER)(value.talkburstControlSetting, $.BER);
    }
    if (value.targetPresenceStatus !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 64, () => $._encodeUTF8String, $.BER)(value.targetPresenceStatus, $.BER);
    }
    if (value.port_Number !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 65, () => $._encodeInteger, $.BER)(value.port_Number, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PTC(value, elGetter);
}


/* eslint-enable */
