/* eslint-disable */
import {
    BOOLEAN,
    INTEGER,
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AccessPolicyType, _decode_AccessPolicyType, _encode_AccessPolicyType } from "../EpsHI2Operations/AccessPolicyType.ta.mjs";
// export { AccessPolicyType, _decode_AccessPolicyType, _encode_AccessPolicyType } from "../EpsHI2Operations/AccessPolicyType.ta.mjs";
import { AlertIndicator, _decode_AlertIndicator, _encode_AlertIndicator, _enum_for_AlertIndicator } from "../EpsHI2Operations/AlertIndicator.ta.mjs";
// export { AlertIndicator, _enum_for_AlertIndicator, AlertIndicator_sent /* IMPORTED_LONG_ENUMERATION_ITEM */, sent /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertIndicator_received /* IMPORTED_LONG_ENUMERATION_ITEM */, AlertIndicator_cancelled /* IMPORTED_LONG_ENUMERATION_ITEM */, cancelled /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AlertIndicator, _encode_AlertIndicator } from "../EpsHI2Operations/AlertIndicator.ta.mjs";
import { AssociatePresenceStatus, _decode_AssociatePresenceStatus, _encode_AssociatePresenceStatus } from "../EpsHI2Operations/AssociatePresenceStatus.ta.mjs";
// export { AssociatePresenceStatus, _decode_AssociatePresenceStatus, _encode_AssociatePresenceStatus } from "../EpsHI2Operations/AssociatePresenceStatus.ta.mjs";
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
 * Push-to-talk over cellular event, either PoC or MCPTT, in the IRI parameter
 * ptc (module comment). Clause 17. PTC events are delivered separately from
 * other services. Clause 17.2.0 applies the records to both PoC and MCPTT. Each
 * record's event type and timestamp are mandatory in the clause 17 tables;
 * stage 2 inclusion takes precedence over an OPTIONAL mark in the module. Annex
 * B.9.
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTC ::= SEQUENCE {
 *     abandonCause                [1] UTF8String OPTIONAL,
 *     accessPolicyFailure        [2] UTF8String    OPTIONAL,
 *     accessPolicyType            [3] AccessPolicyType OPTIONAL,
 *     alertIndicator                [5] AlertIndicator OPTIONAL,
 *     associatePresenceStatus    [6] AssociatePresenceStatus OPTIONAL,
 *     bearer-capability            [7] UTF8String OPTIONAL,
 *         -- identifies the Bearer capability information element (value part)
 *     broadcastIndicator            [8] BOOLEAN    OPTIONAL,
 *     -- default False, true indicates this is a braodcast to a group
 *     contactID                      [9] UTF8String OPTIONAL,
 *     emergency                     [10] Emergency OPTIONAL,
 *     emergencyGroupState        [11] EmergencyGroupState OPTIONAL,
 *     timeStamp                    [12] TimeStamp,
 *     pTCType                        [13] PTCType OPTIONAL,
 *     failureCode                    [14] UTF8String    OPTIONAL,
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
 *     talkBurstPriority            [61] Priority-Level    OPTIONAL,
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
     * Reason a PTC session was abandoned before end-to-end connectivity.
     * Mandatory on the session abandon END record (table 17.2.5) and on the
     * session end record (clause 17.2.7).
     * @public
     * @readonly
     */
    readonly abandonCause: OPTIONAL<UTF8String>;
    /**
     * @summary `accessPolicyFailure`.
     * @description
     * 
     * Error code or reason when an access-policy request fails (clause 17.1.5).
     * Provide it when the access-policy request is unsuccessful (table
     * 17.2.18).
     * @public
     * @readonly
     */
    readonly accessPolicyFailure: OPTIONAL<UTF8String>;
    /**
     * @summary `accessPolicyType`.
     * @description
     * 
     * Which access-policy list the target is managing or querying (clause
     * 17.1.5). Conditional on the access-policy record (table 17.2.18): report
     * the attempt or query when the target changes or queries the lists, and
     * report the result when the network answers.
     * @public
     * @readonly
     */
    readonly accessPolicyType: OPTIONAL<AccessPolicyType>;
    /**
     * @summary `alertIndicator`.
     * @description
     * 
     * An emergency alert was sent, received, or cancelled (clause 17.1.5).
     * Conditional on the group-call records when an emergency alert was
     * indicated (tables 17.3.2, 17.3.3, and 17.3.4).
     * @public
     * @readonly
     */
    readonly alertIndicator: OPTIONAL<AlertIndicator>;
    /**
     * @summary `associatePresenceStatus`.
     * @description
     * 
     * Presence of other PTC clients or of a PTC group: identity, whether that
     * identity is a client or a group, and whether it is connected.
     * Conditional. Report it when the PTC server supports presence and acts as
     * watcher for the target (clause 17.1.5 and the associate-presence record).
     * @public
     * @readonly
     */
    readonly associatePresenceStatus: OPTIONAL<AssociatePresenceStatus>;
    /**
     * @summary `bearer_capability`.
     * @description
     * 
     * Media characteristics of the PTC session, such as SDP, media format, or
     * vocoder, and the value part of the bearer-capability information (module
     * comment and clause 17.1.5). Conditional: provide when known.
     * @public
     * @readonly
     */
    readonly bearer_capability: OPTIONAL<UTF8String>;
    /**
     * @summary `broadcastIndicator`.
     * @description
     * 
     * This session is a broadcast to the group. Conditional on the group-call
     * records (clause 17.3). The module default is false; send true for a group
     * broadcast.
     * @public
     * @readonly
     */
    readonly broadcastIndicator: OPTIONAL<BOOLEAN>;
    /**
     * @summary `contactID`.
     * @description
     * 
     * One contact in a contact list, group list, or access-control list.
     * Conditional: report it when known, one contact at a time (tables 17.2.17
     * and 17.2.18).
     * @public
     * @readonly
     */
    readonly contactID: OPTIONAL<UTF8String>;
    /**
     * @summary `emergency`.
     * @description
     * 
     * MCPTT peril condition (module comment). Conditional on group-call
     * records: indicate a peril or imminent-peril alert, and on cancel indicate
     * the alert being cancelled (tables 17.3.2, 17.3.3, and 17.3.4).
     * @public
     * @readonly
     */
    readonly emergency: OPTIONAL<Emergency>;
    /**
     * @summary `emergencyGroupState`.
     * @description
     * 
     * Emergency state of an MCPTT emergency call. Conditional: include it when
     * an emergency is indicated (tables 17.3.2 and 17.3.4). The module requires
     * at least one of the client state or the group state.
     * @public
     * @readonly
     */
    readonly emergencyGroupState: OPTIONAL<EmergencyGroupState>;
    /**
     * @summary `timeStamp`.
     * @description
     * 
     * Date and time the PTC event was generated. Mandatory on every clause 17
     * record.
     * @public
     * @readonly
     */
    readonly timeStamp: TimeStamp;
    /**
     * @summary `pTCType`.
     * @description
     * 
     * Which clause 17 PTC record this is. Each record table requires the event
     * type. Stage 2 inclusion takes precedence over the OPTIONAL mark.
     * @public
     * @readonly
     */
    readonly pTCType: OPTIONAL<PTCType>;
    /**
     * @summary `failureCode`.
     * @description
     * 
     * Reason or code for a failure or for closing the session (clause 17.1.5).
     * On a pre-established session, provide it when the session cannot be
     * established or modified (table 17.2.20).
     * @public
     * @readonly
     */
    readonly failureCode: OPTIONAL<UTF8String>;
    /**
     * @summary `floorActivity`.
     * @description
     * 
     * Talk-burst control outcome: request, grant, deny, queue, release, revoke,
     * taken, or idle. Mandatory on the floor-control CONTINUE record (table
     * 17.2.14). Clause 17.2.14 lists the TBCP messages.
     * @public
     * @readonly
     */
    readonly floorActivity: OPTIONAL<FloorActivity>;
    /**
     * @summary `floorSpeakerID`.
     * @description
     * 
     * PTC client that holds the talk burst. Conditional on floor control:
     * include it when known, and omit it when the floor is idle (table
     * 17.2.14).
     * @public
     * @readonly
     */
    readonly floorSpeakerID: OPTIONAL<PTCAddress>;
    /**
     * @summary `groupAdSender`.
     * @description
     * 
     * Group administrator who originated the group call (module comment and
     * clause 17.1.5). The group-advertisement record reports advertisement the
     * target sends (clause 17.2.13).
     * @public
     * @readonly
     */
    readonly groupAdSender: OPTIONAL<UTF8String>;
    /**
     * @summary `groupAuthRule`.
     * @description
     * 
     * Action the target requested on the PTC group authorization rules (clause
     * 17.1.5). Conditional on the access-policy record: report it when the
     * target changes or queries those rules (table 17.2.18).
     * @public
     * @readonly
     */
    readonly groupAuthRule: OPTIONAL<GroupAuthRule>;
    /**
     * @summary `groupCharacteristics`.
     * @description
     * 
     * Identifying feature of the PTC group, including an MCPTT-specific
     * characteristic (clause 17.1.5). Conditional on the group-call records:
     * provide when known.
     * @public
     * @readonly
     */
    readonly groupCharacteristics: OPTIONAL<UTF8String>;
    /**
     * @summary `holdRetrieveInd`.
     * @description
     * 
     * True when the PTC session is placed on hold (media bursts deactivated,
     * talking and listening locked). False when it is retrieved from hold.
     * Mandatory on the hold-retrieve record (table 17.2.11). The module states
     * the same polarity.
     * @public
     * @readonly
     */
    readonly holdRetrieveInd: OPTIONAL<BOOLEAN>;
    /**
     * @summary `imminentPerilInd`.
     * @description
     * 
     * Imminent-peril group-call request, response, or cancel (module comment).
     * Mandatory on the MCPTT imminent-peril report (table 17.3.6): the
     * notification to or from the target.
     * @public
     * @readonly
     */
    readonly imminentPerilInd: OPTIONAL<ImminentPerilInd>;
    /**
     * @summary `implicitFloorReq`.
     * @description
     * 
     * Clause 17.1.5 says this indicates the client who requested the floor. The
     * module comment says it is a group-call request to join, rejoin, or
     * release. The record tables do not give a separate inclusion condition.
     * @public
     * @readonly
     */
    readonly implicitFloorReq: OPTIONAL<ImplicitFloorReq>;
    /**
     * @summary `initiationCause`.
     * @description
     * 
     * Who originated PTC session initiation. Mandatory on the
     * session-initiation BEGIN record (table 17.2.4). If an associate
     * originated it, include that associate's identity when known. The module
     * also uses this to identify the originating PTC party.
     * @public
     * @readonly
     */
    readonly initiationCause: OPTIONAL<InitiationCause>;
    /**
     * @summary `invitationCause`.
     * @description
     * 
     * The handover text does not define this component.
     * @public
     * @readonly
     */
    readonly invitationCause: OPTIONAL<UTF8String>;
    /**
     * @summary `iPAPartyID`.
     * @description
     * 
     * PTC associate that received or sent the instant personal alert. Mandatory
     * on the instant personal alert report (table 17.2.8). Clause 17.1.5.
     * @public
     * @readonly
     */
    readonly iPAPartyID: OPTIONAL<UTF8String>;
    /**
     * @summary `iPADirection`.
     * @description
     * 
     * Whether the instant personal alert is toward the target or from the
     * target. Mandatory on table 17.2.8.
     * @public
     * @readonly
     */
    readonly iPADirection: OPTIONAL<IPADirection>;
    /**
     * @summary `listManagementAction`.
     * @description
     * 
     * Create, modify, retrieve, delete, or notify on a contact list or group
     * list. Conditional on the list-management record: report the action when
     * the target changes a list, and report a notification when the network
     * tells the target of a change (table 17.2.17).
     * @public
     * @readonly
     */
    readonly listManagementAction: OPTIONAL<ListManagementAction>;
    /**
     * @summary `listManagementFailure`.
     * @description
     * 
     * Error code or reason a list-management request failed. Conditional:
     * report it when the request is unsuccessful (table 17.2.17).
     * @public
     * @readonly
     */
    readonly listManagementFailure: OPTIONAL<UTF8String>;
    /**
     * @summary `listManagementType`.
     * @description
     * 
     * Contact-list or group-list attempt or result, and whether the request
     * succeeded (clause 17.1.5). Conditional on table 17.2.17: report the
     * attempt when the target's client changes a list, and report the result
     * when the network notifies the target.
     * @public
     * @readonly
     */
    readonly listManagementType: OPTIONAL<ListManagementType>;
    /**
     * @summary `maxTBTime`.
     * @description
     * 
     * Maximum talk-burst duration, in seconds, before permission is revoked
     * (module comment and table 17.2.14). Conditional on floor control: provide
     * when known.
     * @public
     * @readonly
     */
    readonly maxTBTime: OPTIONAL<UTF8String>;
    /**
     * @summary `mCPTTGroupID`.
     * @description
     * 
     * Mission Critical Push To Talk group identity. Mandatory on the
     * imminent-peril report (table 17.3.6). Clause 17.1.5.
     * @public
     * @readonly
     */
    readonly mCPTTGroupID: OPTIONAL<UTF8String>;
    /**
     * @summary `mCPTTID`.
     * @description
     * 
     * MCPTT identity of the target, when available (clause 17.1.5). The
     * group-call tables list an observed MCPTT identity among the identities of
     * which at least one is required.
     * @public
     * @readonly
     */
    readonly mCPTTID: OPTIONAL<UTF8String>;
    /**
     * @summary `mCPTTInd`.
     * @description
     * 
     * Direction of an MCPTT emergency or imminent-peril condition: from the
     * target, or from an MCPTT group toward the target (clause 17.1.5).
     * Conditional on group-call records; mandatory on the imminent-peril report
     * (table 17.3.6). The module default is false for from the target, and true
     * for toward the target.
     * @public
     * @readonly
     */
    readonly mCPTTInd: OPTIONAL<BOOLEAN>;
    /**
     * @summary `location`.
     * @description
     * 
     * Location of the PTC target. Include it when reporting that location is
     * authorized (clause 17.1.5). On a pre-established session, report it when
     * the target establishes or terminates the session (table 17.2.20).
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<Location>;
    /**
     * @summary `mCPTTOrganizationName`.
     * @description
     * 
     * Name of the organization the MCPTT device belongs to, when known (clause
     * 17.1.5). Conditional on the group-call records.
     * @public
     * @readonly
     */
    readonly mCPTTOrganizationName: OPTIONAL<UTF8String>;
    /**
     * @summary `mediaStreamAvail`.
     * @description
     * 
     * Whether the target's PTC client can accept media immediately. True means
     * media can be accepted; false means it cannot (module comment).
     * Conditional: provide it when a pre-established session is established
     * (tables 17.2.2, 17.2.19, and 17.2.20).
     * @public
     * @readonly
     */
    readonly mediaStreamAvail: OPTIONAL<BOOLEAN>;
    /**
     * @summary `priority_Level`.
     * @description
     * 
     * Talk-burst priority of the PTC client when more than one level is
     * supported (clause 17.1.5, OMA-PoC-AD). Conditional on that support.
     * @public
     * @readonly
     */
    readonly priority_Level: OPTIONAL<Priority_Level>;
    /**
     * @summary `preEstSessionID`.
     * @description
     * 
     * Identity of a pre-established PTC session (session URI, session type, and
     * nickname in the clause 17.1.5 wording). Mandatory on the pre-established
     * session record (table 17.2.20). On start of interception, include it for
     * a pre-established session (table 17.2.2).
     * @public
     * @readonly
     */
    readonly preEstSessionID: OPTIONAL<UTF8String>;
    /**
     * @summary `preEstStatus`.
     * @description
     * 
     * Whether the pre-established session is established, modified, or
     * released. Mandatory on table 17.2.20. On session end, include it when a
     * pre-established session was used (clause 17.2.7).
     * @public
     * @readonly
     */
    readonly preEstStatus: OPTIONAL<PreEstStatus>;
    /**
     * @summary `pTCGroupID`.
     * @description
     * 
     * PTC group identity, nickname, and characteristics (clause 17.1.5).
     * Mandatory on the group-call request, cancel, response, and interrogate
     * records. Conditional on list management.
     * @public
     * @readonly
     */
    readonly pTCGroupID: OPTIONAL<UTF8String>;
    /**
     * @summary `pTCIDList`.
     * @description
     * 
     * Participants from the target's contact list and from the PTC group list
     * for a group call (clause 17.1.5). Mandatory on the group-call request
     * (table 17.3.2). Conditional on other group-call records.
     * @public
     * @readonly
     */
    readonly pTCIDList: OPTIONAL<UTF8String>;
    /**
     * @summary `pTCMediaCapability`.
     * @description
     * 
     * Codecs and media parameters the PTC server selected from the SDP offer of
     * the target's client (clause 17.1.5). Mandatory on the pre-established
     * session record (table 17.2.20).
     * @public
     * @readonly
     */
    readonly pTCMediaCapability: OPTIONAL<UTF8String>;
    /**
     * @summary `pTCOriginatingId`.
     * @description
     * 
     * Originating party, when known (clause 17.1.5). Conditional on start of
     * interception and on session end (tables 17.2.2 and 17.2.7).
     * @public
     * @readonly
     */
    readonly pTCOriginatingId: OPTIONAL<UTF8String>;
    /**
     * @summary `pTCOther`.
     * @description
     * 
     * Clause 17.1.5 defines PTC Other as other information required to decrypt
     * the data. Clause 18 attaches that role to the encryption parameter of the
     * same name. The handover text does not say when this component of the PTC
     * event is used.
     * @public
     * @readonly
     */
    readonly pTCOther: OPTIONAL<UTF8String>;
    /**
     * @summary `pTCParticipants`.
     * @description
     * 
     * Known individual PTC participants (clause 17.1.5). Mandatory on start of
     * interception, on several group-call records, and on the imminent-peril
     * report. Conditional on party join, party drop, and session end: include
     * them when known.
     * @public
     * @readonly
     */
    readonly pTCParticipants: OPTIONAL<UTF8String>;
    /**
     * @summary `pTCParty`.
     * @description
     * 
     * Associate who joined, dropped, was placed on hold, was retrieved, or is
     * the MCPTT emergency or imminent-peril associate of the target (clause
     * 17.1.5). Mandatory on hold-retrieve, on group-call cancel, and on the
     * imminent-peril report. Conditional when an associate requested or
     * cancelled the group call.
     * @public
     * @readonly
     */
    readonly pTCParty: OPTIONAL<UTF8String>;
    /**
     * @summary `pTCPartyDrop`.
     * @description
     * 
     * Associate that leaves the PTC session (clause 17.1.5). The party-drop
     * CONTINUE record is sent when an associate leaves a group session the
     * target is in (clause 17.2.10).
     * @public
     * @readonly
     */
    readonly pTCPartyDrop: OPTIONAL<UTF8String>;
    /**
     * @summary `pTCSessionInfo`.
     * @description
     * 
     * PTC session URI, session type, and nickname (clause 17.1.5). Mandatory on
     * session abandon, session end, instant personal alert, party join, party
     * drop, hold, floor control, and media-type notification. On start of
     * interception, include it when the session is not a pre-established
     * session (table 17.2.2).
     * @public
     * @readonly
     */
    readonly pTCSessionInfo: OPTIONAL<UTF8String>;
    /**
     * @summary `pTCServerURI`.
     * @description
     * 
     * PTC server that serves the target, or the server of a session the target
     * is in, when known (clause 17.1.5). Conditional on registration and on
     * session end. Mandatory on the pre-established session record: the server
     * associated with the client that originated the request (table 17.2.20).
     * @public
     * @readonly
     */
    readonly pTCServerURI: OPTIONAL<UTF8String>;
    /**
     * @summary `pTCUserAccessPolicy`.
     * @description
     * 
     * Action the target requested on the PTC user access policy (clause
     * 17.1.5). Conditional on the access-policy record: report it when the
     * target changes or queries that policy (table 17.2.18).
     * @public
     * @readonly
     */
    readonly pTCUserAccessPolicy: OPTIONAL<UTF8String>;
    /**
     * @summary `pTCAddress`.
     * @description
     * 
     * The handover text does not name this component. The floor speaker is a
     * separate component. The module comment on the address form (RFC 3261 URI,
     * privacy alias) is on the address type itself.
     * @public
     * @readonly
     */
    readonly pTCAddress: OPTIONAL<PTCAddress>;
    /**
     * @summary `queuedFloorControl`.
     * @description
     * 
     * Whether queued floor control is in use. Conditional on the floor-control
     * record: indicate whether the PTC server and the target's client support
     * queuing (table 17.2.14). The module default is false; send true when
     * queuing is used.
     * @public
     * @readonly
     */
    readonly queuedFloorControl: OPTIONAL<BOOLEAN>;
    /**
     * @summary `queuedPosition`.
     * @description
     * 
     * Queue position of the speaker who has the right to speak, target or
     * associate (module comment). Conditional: include it when queued floor
     * control is supported (table 17.2.14).
     * @public
     * @readonly
     */
    readonly queuedPosition: OPTIONAL<UTF8String>;
    /**
     * @summary `registrationRequest`.
     * @description
     * 
     * Register, re-register, or deregister. Mandatory on the PTC registration
     * report (table 17.2.1).
     * @public
     * @readonly
     */
    readonly registrationRequest: OPTIONAL<RegistrationRequest>;
    /**
     * @summary `registrationOutcome`.
     * @description
     * 
     * Success or failure of that registration, with the failure reason when it
     * fails. Mandatory on table 17.2.1.
     * @public
     * @readonly
     */
    readonly registrationOutcome: OPTIONAL<RegistrationOutcome>;
    /**
     * @summary `retrieveID`.
     * @description
     * 
     * PTC subscriber that retrieved an on-going session from hold (clause
     * 17.1.5). Mandatory on the hold-retrieve record (table 17.2.11).
     * @public
     * @readonly
     */
    readonly retrieveID: OPTIONAL<UTF8String>;
    /**
     * @summary `rTPSetting`.
     * @description
     * 
     * IP address and port of the target at the PTC server for the RTP session.
     * Mandatory on the pre-established session record (table 17.2.20).
     * @public
     * @readonly
     */
    readonly rTPSetting: OPTIONAL<RTPSetting>;
    /**
     * @summary `talkBurstPriority`.
     * @description
     * 
     * Talk-burst priority of the PTC client when more than one level is
     * supported (table 17.2.14, OMA-PoC-AD). Conditional on that support.
     * @public
     * @readonly
     */
    readonly talkBurstPriority: OPTIONAL<Priority_Level>;
    /**
     * @summary `talkBurstReason`.
     * @description
     * 
     * Reason code for denial or revoke of a talk burst. Conditional on floor
     * control: provide it when known (table 17.2.14). The module comment says
     * the code follows OMA-PoC-AD.
     * @public
     * @readonly
     */
    readonly talkBurstReason: OPTIONAL<Talk_burst_reason_code>;
    /**
     * @summary `talkburstControlSetting`.
     * @description
     * 
     * Talk-burst control protocol, the parameters the PTC server selected from
     * the SDP offer, and the server's port for that protocol (module comments).
     * Clause 17.2.14 describes floor control and does not name this parameter.
     * @public
     * @readonly
     */
    readonly talkburstControlSetting: OPTIONAL<TalkburstControlSetting>;
    /**
     * @summary `targetPresenceStatus`.
     * @description
     * 
     * PTC presence of the target, when it has changed (clause 17.1.5). The
     * target-presence report is sent when the PTC server, acting as presence
     * source, publishes presence for the target (clause 17.2.15). Table 17.2.18
     * also requires it on the access-policy record when presence changed.
     * @public
     * @readonly
     */
    readonly targetPresenceStatus: OPTIONAL<UTF8String>;
    /**
     * @summary `port_Number`.
     * @description
     * 
     * The handover text does not name this component. Table 17.2.20 carries the
     * RTP port in the RTP setting. The module allows a port from 0 to 65535
     * here.
     * @public
     * @readonly
     */
    readonly port_Number: OPTIONAL<INTEGER>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     * 
     * The specification does not define these components.
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
        pTCType: OPTIONAL<PTCType>,
        failureCode: OPTIONAL<UTF8String>,
        floorActivity: OPTIONAL<FloorActivity>,
        floorSpeakerID: OPTIONAL<PTCAddress>,
        groupAdSender: OPTIONAL<UTF8String>,
        groupAuthRule: OPTIONAL<GroupAuthRule>,
        groupCharacteristics: OPTIONAL<UTF8String>,
        holdRetrieveInd: OPTIONAL<BOOLEAN>,
        imminentPerilInd: OPTIONAL<ImminentPerilInd>,
        implicitFloorReq: OPTIONAL<ImplicitFloorReq>,
        initiationCause: OPTIONAL<InitiationCause>,
        invitationCause: OPTIONAL<UTF8String>,
        iPAPartyID: OPTIONAL<UTF8String>,
        iPADirection: OPTIONAL<IPADirection>,
        listManagementAction: OPTIONAL<ListManagementAction>,
        listManagementFailure: OPTIONAL<UTF8String>,
        listManagementType: OPTIONAL<ListManagementType>,
        maxTBTime: OPTIONAL<UTF8String>,
        mCPTTGroupID: OPTIONAL<UTF8String>,
        mCPTTID: OPTIONAL<UTF8String>,
        mCPTTInd: OPTIONAL<BOOLEAN>,
        location: OPTIONAL<Location>,
        mCPTTOrganizationName: OPTIONAL<UTF8String>,
        mediaStreamAvail: OPTIONAL<BOOLEAN>,
        priority_Level: OPTIONAL<Priority_Level>,
        preEstSessionID: OPTIONAL<UTF8String>,
        preEstStatus: OPTIONAL<PreEstStatus>,
        pTCGroupID: OPTIONAL<UTF8String>,
        pTCIDList: OPTIONAL<UTF8String>,
        pTCMediaCapability: OPTIONAL<UTF8String>,
        pTCOriginatingId: OPTIONAL<UTF8String>,
        pTCOther: OPTIONAL<UTF8String>,
        pTCParticipants: OPTIONAL<UTF8String>,
        pTCParty: OPTIONAL<UTF8String>,
        pTCPartyDrop: OPTIONAL<UTF8String>,
        pTCSessionInfo: OPTIONAL<UTF8String>,
        pTCServerURI: OPTIONAL<UTF8String>,
        pTCUserAccessPolicy: OPTIONAL<UTF8String>,
        pTCAddress: OPTIONAL<PTCAddress>,
        queuedFloorControl: OPTIONAL<BOOLEAN>,
        queuedPosition: OPTIONAL<UTF8String>,
        registrationRequest: OPTIONAL<RegistrationRequest>,
        registrationOutcome: OPTIONAL<RegistrationOutcome>,
        retrieveID: OPTIONAL<UTF8String>,
        rTPSetting: OPTIONAL<RTPSetting>,
        talkBurstPriority: OPTIONAL<Priority_Level>,
        talkBurstReason: OPTIONAL<Talk_burst_reason_code>,
        talkburstControlSetting: OPTIONAL<TalkburstControlSetting>,
        targetPresenceStatus: OPTIONAL<UTF8String>,
        port_Number: OPTIONAL<INTEGER>,
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
         * @description
         * 
         * Emergency alert sent, received, or cancelled (clause 17.1.5).
         * @public
         * @static
         */

    public static _enum_for_alertIndicator = _enum_for_AlertIndicator;        /**
         * @summary The enum used as the type of the component `emergency`
         * @description
         * 
         * MCPTT peril or imminent-peril alert on a group call (clause 17.3).
         * @public
         * @static
         */

    public static _enum_for_emergency = _enum_for_Emergency;        /**
         * @summary The enum used as the type of the component `pTCType`
         * @description
         * 
         * Which clause 17 PTC record this is. Each record table requires it.
         * @public
         * @static
         */

    public static _enum_for_pTCType = _enum_for_PTCType;        /**
         * @summary The enum used as the type of the component `groupAuthRule`
         * @description
         * 
         * Action requested on the PTC group authorization rules (clause
         * 17.2.18).
         * @public
         * @static
         */

    public static _enum_for_groupAuthRule = _enum_for_GroupAuthRule;        /**
         * @summary The enum used as the type of the component `imminentPerilInd`
         * @description
         * 
         * Imminent-peril request, response, or cancel (clause 17.3.6).
         * @public
         * @static
         */

    public static _enum_for_imminentPerilInd = _enum_for_ImminentPerilInd;        /**
         * @summary The enum used as the type of the component `implicitFloorReq`
         * @description
         * 
         * Clause 17.1.5: the client who requested the floor. The module comment
         * says join, rejoin, or release.
         * @public
         * @static
         */

    public static _enum_for_implicitFloorReq = _enum_for_ImplicitFloorReq;        /**
         * @summary The enum used as the type of the component `initiationCause`
         * @description
         * 
         * Who originated PTC session initiation (table 17.2.4).
         * @public
         * @static
         */

    public static _enum_for_initiationCause = _enum_for_InitiationCause;        /**
         * @summary The enum used as the type of the component `iPADirection`
         * @description
         * 
         * Instant personal alert toward the target or from the target (table
         * 17.2.8).
         * @public
         * @static
         */

    public static _enum_for_iPADirection = _enum_for_IPADirection;        /**
         * @summary The enum used as the type of the component `listManagementAction`
         * @description
         * 
         * Create, modify, retrieve, delete, or notify on a PTC list (table
         * 17.2.17).
         * @public
         * @static
         */

    public static _enum_for_listManagementAction = _enum_for_ListManagementAction;        /**
         * @summary The enum used as the type of the component `listManagementType`
         * @description
         * 
         * Contact-list or group-list attempt or result (table 17.2.17).
         * @public
         * @static
         */

    public static _enum_for_listManagementType = _enum_for_ListManagementType;        /**
         * @summary The enum used as the type of the component `priority_Level`
         * @description
         * 
         * Talk-burst priority when more than one level is supported (clause
         * 17.1.5).
         * @public
         * @static
         */

    public static _enum_for_priority_Level = _enum_for_Priority_Level;        /**
         * @summary The enum used as the type of the component `preEstStatus`
         * @description
         * 
         * Pre-established session established, modified, or released (table
         * 17.2.20).
         * @public
         * @static
         */

    public static _enum_for_preEstStatus = _enum_for_PreEstStatus;        /**
         * @summary The enum used as the type of the component `registrationRequest`
         * @description
         * 
         * PTC register, re-register, or deregister (table 17.2.1).
         * @public
         * @static
         */

    public static _enum_for_registrationRequest = _enum_for_RegistrationRequest;        /**
         * @summary The enum used as the type of the component `registrationOutcome`
         * @description
         * 
         * Success or failure of PTC registration (table 17.2.1).
         * @public
         * @static
         */

    public static _enum_for_registrationOutcome = _enum_for_RegistrationOutcome;        /**
         * @summary The enum used as the type of the component `talkBurstPriority`
         * @description
         * 
         * Talk-burst priority when more than one level is supported (table
         * 17.2.14).
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
