/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { CallBackNonCallRel, CallBackNonCallRel_privateData /* IMPORTED_LONG_NAMED_BIT */, CallBackNonCallRel_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, CallBackNonCallRel_additionalReqForbidden /* IMPORTED_LONG_NAMED_BIT */, CallBackNonCallRel_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_CallBackNonCallRel, _encode_CallBackNonCallRel } from "../CSTA-capability-exchange/CallBackNonCallRel.ta.mjs";
// export { CallBackNonCallRel, CallBackNonCallRel_privateData /* IMPORTED_LONG_NAMED_BIT */, CallBackNonCallRel_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, CallBackNonCallRel_additionalReqForbidden /* IMPORTED_LONG_NAMED_BIT */, CallBackNonCallRel_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_CallBackNonCallRel, _encode_CallBackNonCallRel } from "../CSTA-capability-exchange/CallBackNonCallRel.ta.mjs";
import { CallBackMsgNonCallRel, CallBackMsgNonCallRel_privateData /* IMPORTED_LONG_NAMED_BIT */, CallBackMsgNonCallRel_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, CallBackMsgNonCallRel_additionalReqForbidden /* IMPORTED_LONG_NAMED_BIT */, CallBackMsgNonCallRel_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_CallBackMsgNonCallRel, _encode_CallBackMsgNonCallRel } from "../CSTA-capability-exchange/CallBackMsgNonCallRel.ta.mjs";
// export { CallBackMsgNonCallRel, CallBackMsgNonCallRel_privateData /* IMPORTED_LONG_NAMED_BIT */, CallBackMsgNonCallRel_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, CallBackMsgNonCallRel_additionalReqForbidden /* IMPORTED_LONG_NAMED_BIT */, CallBackMsgNonCallRel_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_CallBackMsgNonCallRel, _encode_CallBackMsgNonCallRel } from "../CSTA-capability-exchange/CallBackMsgNonCallRel.ta.mjs";
import { CancelCallBack, CancelCallBack_privateData /* IMPORTED_LONG_NAMED_BIT */, CancelCallBack_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, CancelCallBack_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, CancelCallBack_supportsClearing /* IMPORTED_LONG_NAMED_BIT */, _decode_CancelCallBack, _encode_CancelCallBack } from "../CSTA-capability-exchange/CancelCallBack.ta.mjs";
// export { CancelCallBack, CancelCallBack_privateData /* IMPORTED_LONG_NAMED_BIT */, CancelCallBack_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, CancelCallBack_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, CancelCallBack_supportsClearing /* IMPORTED_LONG_NAMED_BIT */, _decode_CancelCallBack, _encode_CancelCallBack } from "../CSTA-capability-exchange/CancelCallBack.ta.mjs";
import { CancelCallBackMsg, CancelCallBackMsg_privateData /* IMPORTED_LONG_NAMED_BIT */, CancelCallBackMsg_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, CancelCallBackMsg_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, CancelCallBackMsg_supportsClearing /* IMPORTED_LONG_NAMED_BIT */, _decode_CancelCallBackMsg, _encode_CancelCallBackMsg } from "../CSTA-capability-exchange/CancelCallBackMsg.ta.mjs";
// export { CancelCallBackMsg, CancelCallBackMsg_privateData /* IMPORTED_LONG_NAMED_BIT */, CancelCallBackMsg_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, CancelCallBackMsg_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, CancelCallBackMsg_supportsClearing /* IMPORTED_LONG_NAMED_BIT */, _decode_CancelCallBackMsg, _encode_CancelCallBackMsg } from "../CSTA-capability-exchange/CancelCallBackMsg.ta.mjs";
import { GetAgentState, GetAgentState_acdGroup /* IMPORTED_LONG_NAMED_BIT */, acdGroup /* IMPORTED_SHORT_NAMED_BIT */, GetAgentState_privateData /* IMPORTED_LONG_NAMED_BIT */, GetAgentState_agentStateListAgentIDInAck /* IMPORTED_LONG_NAMED_BIT */, agentStateListAgentIDInAck /* IMPORTED_SHORT_NAMED_BIT */, GetAgentState_agentGroupInAck /* IMPORTED_LONG_NAMED_BIT */, agentGroupInAck /* IMPORTED_SHORT_NAMED_BIT */, GetAgentState_pendingAgentStateInAck /* IMPORTED_LONG_NAMED_BIT */, pendingAgentStateInAck /* IMPORTED_SHORT_NAMED_BIT */, GetAgentState_agentStateConditionForcedPauseInAck /* IMPORTED_LONG_NAMED_BIT */, agentStateConditionForcedPauseInAck /* IMPORTED_SHORT_NAMED_BIT */, GetAgentState_agentStateConditionPauseInAck /* IMPORTED_LONG_NAMED_BIT */, agentStateConditionPauseInAck /* IMPORTED_SHORT_NAMED_BIT */, GetAgentState_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetAgentState, _encode_GetAgentState } from "../CSTA-capability-exchange/GetAgentState.ta.mjs";
// export { GetAgentState, GetAgentState_acdGroup /* IMPORTED_LONG_NAMED_BIT */, acdGroup /* IMPORTED_SHORT_NAMED_BIT */, GetAgentState_privateData /* IMPORTED_LONG_NAMED_BIT */, GetAgentState_agentStateListAgentIDInAck /* IMPORTED_LONG_NAMED_BIT */, agentStateListAgentIDInAck /* IMPORTED_SHORT_NAMED_BIT */, GetAgentState_agentGroupInAck /* IMPORTED_LONG_NAMED_BIT */, agentGroupInAck /* IMPORTED_SHORT_NAMED_BIT */, GetAgentState_pendingAgentStateInAck /* IMPORTED_LONG_NAMED_BIT */, pendingAgentStateInAck /* IMPORTED_SHORT_NAMED_BIT */, GetAgentState_agentStateConditionForcedPauseInAck /* IMPORTED_LONG_NAMED_BIT */, agentStateConditionForcedPauseInAck /* IMPORTED_SHORT_NAMED_BIT */, GetAgentState_agentStateConditionPauseInAck /* IMPORTED_LONG_NAMED_BIT */, agentStateConditionPauseInAck /* IMPORTED_SHORT_NAMED_BIT */, GetAgentState_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetAgentState, _encode_GetAgentState } from "../CSTA-capability-exchange/GetAgentState.ta.mjs";
import { GetAutoAnswer, GetAutoAnswer_privateData /* IMPORTED_LONG_NAMED_BIT */, GetAutoAnswer_numberOfRingsInAck /* IMPORTED_LONG_NAMED_BIT */, numberOfRingsInAck /* IMPORTED_SHORT_NAMED_BIT */, GetAutoAnswer_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetAutoAnswer, _encode_GetAutoAnswer } from "../CSTA-capability-exchange/GetAutoAnswer.ta.mjs";
// export { GetAutoAnswer, GetAutoAnswer_privateData /* IMPORTED_LONG_NAMED_BIT */, GetAutoAnswer_numberOfRingsInAck /* IMPORTED_LONG_NAMED_BIT */, numberOfRingsInAck /* IMPORTED_SHORT_NAMED_BIT */, GetAutoAnswer_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetAutoAnswer, _encode_GetAutoAnswer } from "../CSTA-capability-exchange/GetAutoAnswer.ta.mjs";
import { GetAutoWorkMode, GetAutoWorkMode_privateData /* IMPORTED_LONG_NAMED_BIT */, GetAutoWorkMode_autoWorkIntervalInAck /* IMPORTED_LONG_NAMED_BIT */, autoWorkIntervalInAck /* IMPORTED_SHORT_NAMED_BIT */, GetAutoWorkMode_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetAutoWorkMode, _encode_GetAutoWorkMode } from "../CSTA-capability-exchange/GetAutoWorkMode.ta.mjs";
// export { GetAutoWorkMode, GetAutoWorkMode_privateData /* IMPORTED_LONG_NAMED_BIT */, GetAutoWorkMode_autoWorkIntervalInAck /* IMPORTED_LONG_NAMED_BIT */, autoWorkIntervalInAck /* IMPORTED_SHORT_NAMED_BIT */, GetAutoWorkMode_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetAutoWorkMode, _encode_GetAutoWorkMode } from "../CSTA-capability-exchange/GetAutoWorkMode.ta.mjs";
import { GetCallerIDStatus, GetCallerIDStatus_privateData /* IMPORTED_LONG_NAMED_BIT */, GetCallerIDStatus_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetCallerIDStatus, _encode_GetCallerIDStatus } from "../CSTA-capability-exchange/GetCallerIDStatus.ta.mjs";
// export { GetCallerIDStatus, GetCallerIDStatus_privateData /* IMPORTED_LONG_NAMED_BIT */, GetCallerIDStatus_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetCallerIDStatus, _encode_GetCallerIDStatus } from "../CSTA-capability-exchange/GetCallerIDStatus.ta.mjs";
import { GetCallBack, GetCallBack_privateData /* IMPORTED_LONG_NAMED_BIT */, GetCallBack_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetCallBack, _encode_GetCallBack } from "../CSTA-capability-exchange/GetCallBack.ta.mjs";
// export { GetCallBack, GetCallBack_privateData /* IMPORTED_LONG_NAMED_BIT */, GetCallBack_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetCallBack, _encode_GetCallBack } from "../CSTA-capability-exchange/GetCallBack.ta.mjs";
import { GetDoNotDisturb, GetDoNotDisturb_privateData /* IMPORTED_LONG_NAMED_BIT */, GetDoNotDisturb_callOriginParameterInAck /* IMPORTED_LONG_NAMED_BIT */, callOriginParameterInAck /* IMPORTED_SHORT_NAMED_BIT */, GetDoNotDisturb_callOriginInternInAck /* IMPORTED_LONG_NAMED_BIT */, callOriginInternInAck /* IMPORTED_SHORT_NAMED_BIT */, GetDoNotDisturb_callOriginExternInAck /* IMPORTED_LONG_NAMED_BIT */, callOriginExternInAck /* IMPORTED_SHORT_NAMED_BIT */, GetDoNotDisturb_callingDeviceListInAck /* IMPORTED_LONG_NAMED_BIT */, callingDeviceListInAck /* IMPORTED_SHORT_NAMED_BIT */, GetDoNotDisturb_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetDoNotDisturb, _encode_GetDoNotDisturb } from "../CSTA-capability-exchange/GetDoNotDisturb.ta.mjs";
// export { GetDoNotDisturb, GetDoNotDisturb_privateData /* IMPORTED_LONG_NAMED_BIT */, GetDoNotDisturb_callOriginParameterInAck /* IMPORTED_LONG_NAMED_BIT */, callOriginParameterInAck /* IMPORTED_SHORT_NAMED_BIT */, GetDoNotDisturb_callOriginInternInAck /* IMPORTED_LONG_NAMED_BIT */, callOriginInternInAck /* IMPORTED_SHORT_NAMED_BIT */, GetDoNotDisturb_callOriginExternInAck /* IMPORTED_LONG_NAMED_BIT */, callOriginExternInAck /* IMPORTED_SHORT_NAMED_BIT */, GetDoNotDisturb_callingDeviceListInAck /* IMPORTED_LONG_NAMED_BIT */, callingDeviceListInAck /* IMPORTED_SHORT_NAMED_BIT */, GetDoNotDisturb_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetDoNotDisturb, _encode_GetDoNotDisturb } from "../CSTA-capability-exchange/GetDoNotDisturb.ta.mjs";
import { GetForwarding, GetForwarding_privateData /* IMPORTED_LONG_NAMED_BIT */, GetForwarding_forwardListInAck /* IMPORTED_LONG_NAMED_BIT */, forwardListInAck /* IMPORTED_SHORT_NAMED_BIT */, GetForwarding_forwardListImmediateInAck /* IMPORTED_LONG_NAMED_BIT */, forwardListImmediateInAck /* IMPORTED_SHORT_NAMED_BIT */, GetForwarding_forwardListBusyInAck /* IMPORTED_LONG_NAMED_BIT */, forwardListBusyInAck /* IMPORTED_SHORT_NAMED_BIT */, GetForwarding_forwardListDNDInAck /* IMPORTED_LONG_NAMED_BIT */, forwardListDNDInAck /* IMPORTED_SHORT_NAMED_BIT */, GetForwarding_forwardListNoAnsInAck /* IMPORTED_LONG_NAMED_BIT */, forwardListNoAnsInAck /* IMPORTED_SHORT_NAMED_BIT */, GetForwarding_forwardListBusyIntInAck /* IMPORTED_LONG_NAMED_BIT */, forwardListBusyIntInAck /* IMPORTED_SHORT_NAMED_BIT */, GetForwarding_forwardListBusyExtInAck /* IMPORTED_LONG_NAMED_BIT */, forwardListBusyExtInAck /* IMPORTED_SHORT_NAMED_BIT */, GetForwarding_forwardListDNDIntInAck /* IMPORTED_LONG_NAMED_BIT */, forwardListDNDIntInAck /* IMPORTED_SHORT_NAMED_BIT */, GetForwarding_forwardListDNDExtInAck /* IMPORTED_LONG_NAMED_BIT */, forwardListDNDExtInAck /* IMPORTED_SHORT_NAMED_BIT */, GetForwarding_forwardListNoAnsIntInAck /* IMPORTED_LONG_NAMED_BIT */, forwardListNoAnsIntInAck /* IMPORTED_SHORT_NAMED_BIT */, GetForwarding_forwardListNoAnsExtInAck /* IMPORTED_LONG_NAMED_BIT */, forwardListNoAnsExtInAck /* IMPORTED_SHORT_NAMED_BIT */, GetForwarding_forwardListImmIntInAck /* IMPORTED_LONG_NAMED_BIT */, forwardListImmIntInAck /* IMPORTED_SHORT_NAMED_BIT */, GetForwarding_forwardListImmExtInAck /* IMPORTED_LONG_NAMED_BIT */, forwardListImmExtInAck /* IMPORTED_SHORT_NAMED_BIT */, GetForwarding_forwardDNInAck /* IMPORTED_LONG_NAMED_BIT */, forwardDNInAck /* IMPORTED_SHORT_NAMED_BIT */, GetForwarding_forwardDefaultInAck /* IMPORTED_LONG_NAMED_BIT */, forwardDefaultInAck /* IMPORTED_SHORT_NAMED_BIT */, GetForwarding_forwardDefaultTypeAndDNInAck /* IMPORTED_LONG_NAMED_BIT */, forwardDefaultTypeAndDNInAck /* IMPORTED_SHORT_NAMED_BIT */, GetForwarding_forwardDefaultTypeInAck /* IMPORTED_LONG_NAMED_BIT */, forwardDefaultTypeInAck /* IMPORTED_SHORT_NAMED_BIT */, GetForwarding_forwardDefaultDNInAck /* IMPORTED_LONG_NAMED_BIT */, forwardDefaultDNInAck /* IMPORTED_SHORT_NAMED_BIT */, GetForwarding_ringCountInAck /* IMPORTED_LONG_NAMED_BIT */, ringCountInAck /* IMPORTED_SHORT_NAMED_BIT */, GetForwarding_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetForwarding, _encode_GetForwarding } from "../CSTA-capability-exchange/GetForwarding.ta.mjs";
// export { GetForwarding, GetForwarding_privateData /* IMPORTED_LONG_NAMED_BIT */, GetForwarding_forwardListInAck /* IMPORTED_LONG_NAMED_BIT */, forwardListInAck /* IMPORTED_SHORT_NAMED_BIT */, GetForwarding_forwardListImmediateInAck /* IMPORTED_LONG_NAMED_BIT */, forwardListImmediateInAck /* IMPORTED_SHORT_NAMED_BIT */, GetForwarding_forwardListBusyInAck /* IMPORTED_LONG_NAMED_BIT */, forwardListBusyInAck /* IMPORTED_SHORT_NAMED_BIT */, GetForwarding_forwardListDNDInAck /* IMPORTED_LONG_NAMED_BIT */, forwardListDNDInAck /* IMPORTED_SHORT_NAMED_BIT */, GetForwarding_forwardListNoAnsInAck /* IMPORTED_LONG_NAMED_BIT */, forwardListNoAnsInAck /* IMPORTED_SHORT_NAMED_BIT */, GetForwarding_forwardListBusyIntInAck /* IMPORTED_LONG_NAMED_BIT */, forwardListBusyIntInAck /* IMPORTED_SHORT_NAMED_BIT */, GetForwarding_forwardListBusyExtInAck /* IMPORTED_LONG_NAMED_BIT */, forwardListBusyExtInAck /* IMPORTED_SHORT_NAMED_BIT */, GetForwarding_forwardListDNDIntInAck /* IMPORTED_LONG_NAMED_BIT */, forwardListDNDIntInAck /* IMPORTED_SHORT_NAMED_BIT */, GetForwarding_forwardListDNDExtInAck /* IMPORTED_LONG_NAMED_BIT */, forwardListDNDExtInAck /* IMPORTED_SHORT_NAMED_BIT */, GetForwarding_forwardListNoAnsIntInAck /* IMPORTED_LONG_NAMED_BIT */, forwardListNoAnsIntInAck /* IMPORTED_SHORT_NAMED_BIT */, GetForwarding_forwardListNoAnsExtInAck /* IMPORTED_LONG_NAMED_BIT */, forwardListNoAnsExtInAck /* IMPORTED_SHORT_NAMED_BIT */, GetForwarding_forwardListImmIntInAck /* IMPORTED_LONG_NAMED_BIT */, forwardListImmIntInAck /* IMPORTED_SHORT_NAMED_BIT */, GetForwarding_forwardListImmExtInAck /* IMPORTED_LONG_NAMED_BIT */, forwardListImmExtInAck /* IMPORTED_SHORT_NAMED_BIT */, GetForwarding_forwardDNInAck /* IMPORTED_LONG_NAMED_BIT */, forwardDNInAck /* IMPORTED_SHORT_NAMED_BIT */, GetForwarding_forwardDefaultInAck /* IMPORTED_LONG_NAMED_BIT */, forwardDefaultInAck /* IMPORTED_SHORT_NAMED_BIT */, GetForwarding_forwardDefaultTypeAndDNInAck /* IMPORTED_LONG_NAMED_BIT */, forwardDefaultTypeAndDNInAck /* IMPORTED_SHORT_NAMED_BIT */, GetForwarding_forwardDefaultTypeInAck /* IMPORTED_LONG_NAMED_BIT */, forwardDefaultTypeInAck /* IMPORTED_SHORT_NAMED_BIT */, GetForwarding_forwardDefaultDNInAck /* IMPORTED_LONG_NAMED_BIT */, forwardDefaultDNInAck /* IMPORTED_SHORT_NAMED_BIT */, GetForwarding_ringCountInAck /* IMPORTED_LONG_NAMED_BIT */, ringCountInAck /* IMPORTED_SHORT_NAMED_BIT */, GetForwarding_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetForwarding, _encode_GetForwarding } from "../CSTA-capability-exchange/GetForwarding.ta.mjs";
import { GetLastNumberDialed, GetLastNumberDialed_privateData /* IMPORTED_LONG_NAMED_BIT */, GetLastNumberDialed_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetLastNumberDialed, _encode_GetLastNumberDialed } from "../CSTA-capability-exchange/GetLastNumberDialed.ta.mjs";
// export { GetLastNumberDialed, GetLastNumberDialed_privateData /* IMPORTED_LONG_NAMED_BIT */, GetLastNumberDialed_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetLastNumberDialed, _encode_GetLastNumberDialed } from "../CSTA-capability-exchange/GetLastNumberDialed.ta.mjs";
import { GetPresenceState, GetPresenceState_privateData /* IMPORTED_LONG_NAMED_BIT */, GetPresenceState_fromTimeInAck /* IMPORTED_LONG_NAMED_BIT */, fromTimeInAck /* IMPORTED_SHORT_NAMED_BIT */, GetPresenceState_untilTimeInAck /* IMPORTED_LONG_NAMED_BIT */, untilTimeInAck /* IMPORTED_SHORT_NAMED_BIT */, GetPresenceState_placeInAck /* IMPORTED_LONG_NAMED_BIT */, placeInAck /* IMPORTED_SHORT_NAMED_BIT */, GetPresenceState_moodInAck /* IMPORTED_LONG_NAMED_BIT */, moodInAck /* IMPORTED_SHORT_NAMED_BIT */, GetPresenceState_namedPresenceStateInAck /* IMPORTED_LONG_NAMED_BIT */, namedPresenceStateInAck /* IMPORTED_SHORT_NAMED_BIT */, GetPresenceState_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetPresenceState, _encode_GetPresenceState } from "../CSTA-capability-exchange/GetPresenceState.ta.mjs";
// export { GetPresenceState, GetPresenceState_privateData /* IMPORTED_LONG_NAMED_BIT */, GetPresenceState_fromTimeInAck /* IMPORTED_LONG_NAMED_BIT */, fromTimeInAck /* IMPORTED_SHORT_NAMED_BIT */, GetPresenceState_untilTimeInAck /* IMPORTED_LONG_NAMED_BIT */, untilTimeInAck /* IMPORTED_SHORT_NAMED_BIT */, GetPresenceState_placeInAck /* IMPORTED_LONG_NAMED_BIT */, placeInAck /* IMPORTED_SHORT_NAMED_BIT */, GetPresenceState_moodInAck /* IMPORTED_LONG_NAMED_BIT */, moodInAck /* IMPORTED_SHORT_NAMED_BIT */, GetPresenceState_namedPresenceStateInAck /* IMPORTED_LONG_NAMED_BIT */, namedPresenceStateInAck /* IMPORTED_SHORT_NAMED_BIT */, GetPresenceState_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetPresenceState, _encode_GetPresenceState } from "../CSTA-capability-exchange/GetPresenceState.ta.mjs";
import { GetRouteingMode, GetRouteingMode_privateData /* IMPORTED_LONG_NAMED_BIT */, GetRouteingMode_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetRouteingMode, _encode_GetRouteingMode } from "../CSTA-capability-exchange/GetRouteingMode.ta.mjs";
// export { GetRouteingMode, GetRouteingMode_privateData /* IMPORTED_LONG_NAMED_BIT */, GetRouteingMode_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetRouteingMode, _encode_GetRouteingMode } from "../CSTA-capability-exchange/GetRouteingMode.ta.mjs";
import { SetAgentState, SetAgentState_requestedAgentStateLoggedOn /* IMPORTED_LONG_NAMED_BIT */, requestedAgentStateLoggedOn /* IMPORTED_SHORT_NAMED_BIT */, SetAgentState_requestedAgentStateLoggedOff /* IMPORTED_LONG_NAMED_BIT */, requestedAgentStateLoggedOff /* IMPORTED_SHORT_NAMED_BIT */, SetAgentState_requestedAgentStateNotReady /* IMPORTED_LONG_NAMED_BIT */, requestedAgentStateNotReady /* IMPORTED_SHORT_NAMED_BIT */, SetAgentState_requestedAgentStateReady /* IMPORTED_LONG_NAMED_BIT */, requestedAgentStateReady /* IMPORTED_SHORT_NAMED_BIT */, SetAgentState_requestedAgentStateWorkingAfterCall /* IMPORTED_LONG_NAMED_BIT */, requestedAgentStateWorkingAfterCall /* IMPORTED_SHORT_NAMED_BIT */, SetAgentState_agentID /* IMPORTED_LONG_NAMED_BIT */, agentID /* IMPORTED_SHORT_NAMED_BIT */, SetAgentState_password /* IMPORTED_LONG_NAMED_BIT */, password /* IMPORTED_SHORT_NAMED_BIT */, SetAgentState_group /* IMPORTED_LONG_NAMED_BIT */, group /* IMPORTED_SHORT_NAMED_BIT */, SetAgentState_privateData /* IMPORTED_LONG_NAMED_BIT */, SetAgentState_pendingAgentStateWorkingAfterCallInAck /* IMPORTED_LONG_NAMED_BIT */, pendingAgentStateWorkingAfterCallInAck /* IMPORTED_SHORT_NAMED_BIT */, SetAgentState_pendingAgentStateNotReadyInAck /* IMPORTED_LONG_NAMED_BIT */, pendingAgentStateNotReadyInAck /* IMPORTED_SHORT_NAMED_BIT */, SetAgentState_pendingAgentStateNullInAck /* IMPORTED_LONG_NAMED_BIT */, pendingAgentStateNullInAck /* IMPORTED_SHORT_NAMED_BIT */, SetAgentState_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SetAgentState_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, SetAgentState_groupDeviceAllowedInReq /* IMPORTED_LONG_NAMED_BIT */, SetAgentState_aCDDeviceAllowedInReq /* IMPORTED_LONG_NAMED_BIT */, SetAgentState_delayTransitionIfBusy /* IMPORTED_LONG_NAMED_BIT */, delayTransitionIfBusy /* IMPORTED_SHORT_NAMED_BIT */, SetAgentState_delayTransitionIfWorkingAfterCall /* IMPORTED_LONG_NAMED_BIT */, delayTransitionIfWorkingAfterCall /* IMPORTED_SHORT_NAMED_BIT */, _decode_SetAgentState, _encode_SetAgentState } from "../CSTA-capability-exchange/SetAgentState.ta.mjs";
// export { SetAgentState, SetAgentState_requestedAgentStateLoggedOn /* IMPORTED_LONG_NAMED_BIT */, requestedAgentStateLoggedOn /* IMPORTED_SHORT_NAMED_BIT */, SetAgentState_requestedAgentStateLoggedOff /* IMPORTED_LONG_NAMED_BIT */, requestedAgentStateLoggedOff /* IMPORTED_SHORT_NAMED_BIT */, SetAgentState_requestedAgentStateNotReady /* IMPORTED_LONG_NAMED_BIT */, requestedAgentStateNotReady /* IMPORTED_SHORT_NAMED_BIT */, SetAgentState_requestedAgentStateReady /* IMPORTED_LONG_NAMED_BIT */, requestedAgentStateReady /* IMPORTED_SHORT_NAMED_BIT */, SetAgentState_requestedAgentStateWorkingAfterCall /* IMPORTED_LONG_NAMED_BIT */, requestedAgentStateWorkingAfterCall /* IMPORTED_SHORT_NAMED_BIT */, SetAgentState_agentID /* IMPORTED_LONG_NAMED_BIT */, agentID /* IMPORTED_SHORT_NAMED_BIT */, SetAgentState_password /* IMPORTED_LONG_NAMED_BIT */, password /* IMPORTED_SHORT_NAMED_BIT */, SetAgentState_group /* IMPORTED_LONG_NAMED_BIT */, group /* IMPORTED_SHORT_NAMED_BIT */, SetAgentState_privateData /* IMPORTED_LONG_NAMED_BIT */, SetAgentState_pendingAgentStateWorkingAfterCallInAck /* IMPORTED_LONG_NAMED_BIT */, pendingAgentStateWorkingAfterCallInAck /* IMPORTED_SHORT_NAMED_BIT */, SetAgentState_pendingAgentStateNotReadyInAck /* IMPORTED_LONG_NAMED_BIT */, pendingAgentStateNotReadyInAck /* IMPORTED_SHORT_NAMED_BIT */, SetAgentState_pendingAgentStateNullInAck /* IMPORTED_LONG_NAMED_BIT */, pendingAgentStateNullInAck /* IMPORTED_SHORT_NAMED_BIT */, SetAgentState_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SetAgentState_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, SetAgentState_groupDeviceAllowedInReq /* IMPORTED_LONG_NAMED_BIT */, SetAgentState_aCDDeviceAllowedInReq /* IMPORTED_LONG_NAMED_BIT */, SetAgentState_delayTransitionIfBusy /* IMPORTED_LONG_NAMED_BIT */, delayTransitionIfBusy /* IMPORTED_SHORT_NAMED_BIT */, SetAgentState_delayTransitionIfWorkingAfterCall /* IMPORTED_LONG_NAMED_BIT */, delayTransitionIfWorkingAfterCall /* IMPORTED_SHORT_NAMED_BIT */, _decode_SetAgentState, _encode_SetAgentState } from "../CSTA-capability-exchange/SetAgentState.ta.mjs";
import { SetAutoAnswer, SetAutoAnswer_numberOfRings /* IMPORTED_LONG_NAMED_BIT */, numberOfRings /* IMPORTED_SHORT_NAMED_BIT */, SetAutoAnswer_privateData /* IMPORTED_LONG_NAMED_BIT */, SetAutoAnswer_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SetAutoAnswer_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_SetAutoAnswer, _encode_SetAutoAnswer } from "../CSTA-capability-exchange/SetAutoAnswer.ta.mjs";
// export { SetAutoAnswer, SetAutoAnswer_numberOfRings /* IMPORTED_LONG_NAMED_BIT */, numberOfRings /* IMPORTED_SHORT_NAMED_BIT */, SetAutoAnswer_privateData /* IMPORTED_LONG_NAMED_BIT */, SetAutoAnswer_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SetAutoAnswer_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_SetAutoAnswer, _encode_SetAutoAnswer } from "../CSTA-capability-exchange/SetAutoAnswer.ta.mjs";
import { SetAutoWorkMode, SetAutoWorkMode_autoWorkInterval /* IMPORTED_LONG_NAMED_BIT */, autoWorkInterval /* IMPORTED_SHORT_NAMED_BIT */, SetAutoWorkMode_privateData /* IMPORTED_LONG_NAMED_BIT */, SetAutoWorkMode_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SetAutoWorkMode_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, SetAutoWorkMode_groupDeviceAllowedInReq /* IMPORTED_LONG_NAMED_BIT */, SetAutoWorkMode_aCDDeviceAllowedInReq /* IMPORTED_LONG_NAMED_BIT */, _decode_SetAutoWorkMode, _encode_SetAutoWorkMode } from "../CSTA-capability-exchange/SetAutoWorkMode.ta.mjs";
// export { SetAutoWorkMode, SetAutoWorkMode_autoWorkInterval /* IMPORTED_LONG_NAMED_BIT */, autoWorkInterval /* IMPORTED_SHORT_NAMED_BIT */, SetAutoWorkMode_privateData /* IMPORTED_LONG_NAMED_BIT */, SetAutoWorkMode_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SetAutoWorkMode_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, SetAutoWorkMode_groupDeviceAllowedInReq /* IMPORTED_LONG_NAMED_BIT */, SetAutoWorkMode_aCDDeviceAllowedInReq /* IMPORTED_LONG_NAMED_BIT */, _decode_SetAutoWorkMode, _encode_SetAutoWorkMode } from "../CSTA-capability-exchange/SetAutoWorkMode.ta.mjs";
import { SetCallerIDStatus, SetCallerIDStatus_privateData /* IMPORTED_LONG_NAMED_BIT */, SetCallerIDStatus_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SetCallerIDStatus_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_SetCallerIDStatus, _encode_SetCallerIDStatus } from "../CSTA-capability-exchange/SetCallerIDStatus.ta.mjs";
// export { SetCallerIDStatus, SetCallerIDStatus_privateData /* IMPORTED_LONG_NAMED_BIT */, SetCallerIDStatus_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SetCallerIDStatus_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_SetCallerIDStatus, _encode_SetCallerIDStatus } from "../CSTA-capability-exchange/SetCallerIDStatus.ta.mjs";
import { SetDoNotDisturb, SetDoNotDisturb_callOriginationInternal /* IMPORTED_LONG_NAMED_BIT */, callOriginationInternal /* IMPORTED_SHORT_NAMED_BIT */, SetDoNotDisturb_callOriginationExternal /* IMPORTED_LONG_NAMED_BIT */, callOriginationExternal /* IMPORTED_SHORT_NAMED_BIT */, SetDoNotDisturb_callingDeviceList /* IMPORTED_LONG_NAMED_BIT */, callingDeviceList /* IMPORTED_SHORT_NAMED_BIT */, SetDoNotDisturb_privateData /* IMPORTED_LONG_NAMED_BIT */, SetDoNotDisturb_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SetDoNotDisturb_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_SetDoNotDisturb, _encode_SetDoNotDisturb } from "../CSTA-capability-exchange/SetDoNotDisturb.ta.mjs";
// export { SetDoNotDisturb, SetDoNotDisturb_callOriginationInternal /* IMPORTED_LONG_NAMED_BIT */, callOriginationInternal /* IMPORTED_SHORT_NAMED_BIT */, SetDoNotDisturb_callOriginationExternal /* IMPORTED_LONG_NAMED_BIT */, callOriginationExternal /* IMPORTED_SHORT_NAMED_BIT */, SetDoNotDisturb_callingDeviceList /* IMPORTED_LONG_NAMED_BIT */, callingDeviceList /* IMPORTED_SHORT_NAMED_BIT */, SetDoNotDisturb_privateData /* IMPORTED_LONG_NAMED_BIT */, SetDoNotDisturb_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SetDoNotDisturb_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_SetDoNotDisturb, _encode_SetDoNotDisturb } from "../CSTA-capability-exchange/SetDoNotDisturb.ta.mjs";
import { SetForwarding, SetForwarding_forwardingTypeBusy /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeBusy /* IMPORTED_SHORT_NAMED_BIT */, SetForwarding_forwardingTypeBusyInt /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeBusyInt /* IMPORTED_SHORT_NAMED_BIT */, SetForwarding_forwardingTypeBusyExt /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeBusyExt /* IMPORTED_SHORT_NAMED_BIT */, SetForwarding_forwardingTypeDND /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeDND /* IMPORTED_SHORT_NAMED_BIT */, SetForwarding_forwardingTypeDNDInt /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeDNDInt /* IMPORTED_SHORT_NAMED_BIT */, SetForwarding_forwardingTypeDNDExt /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeDNDExt /* IMPORTED_SHORT_NAMED_BIT */, SetForwarding_forwardingTypeNoAns /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeNoAns /* IMPORTED_SHORT_NAMED_BIT */, SetForwarding_forwardingTypeNoAnsInt /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeNoAnsInt /* IMPORTED_SHORT_NAMED_BIT */, SetForwarding_forwardingTypeNoAnsExt /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeNoAnsExt /* IMPORTED_SHORT_NAMED_BIT */, SetForwarding_forwardingTypeImmediate /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeImmediate /* IMPORTED_SHORT_NAMED_BIT */, SetForwarding_forwardingTypeImmInt /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeImmInt /* IMPORTED_SHORT_NAMED_BIT */, SetForwarding_forwardingTypeImmExt /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeImmExt /* IMPORTED_SHORT_NAMED_BIT */, SetForwarding_forwardDN /* IMPORTED_LONG_NAMED_BIT */, forwardDN /* IMPORTED_SHORT_NAMED_BIT */, SetForwarding_ringCount /* IMPORTED_LONG_NAMED_BIT */, ringCount /* IMPORTED_SHORT_NAMED_BIT */, SetForwarding_privateData /* IMPORTED_LONG_NAMED_BIT */, SetForwarding_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SetForwarding_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, SetForwarding_ringDuration /* IMPORTED_LONG_NAMED_BIT */, ringDuration /* IMPORTED_SHORT_NAMED_BIT */, _decode_SetForwarding, _encode_SetForwarding } from "../CSTA-capability-exchange/SetForwarding.ta.mjs";
// export { SetForwarding, SetForwarding_forwardingTypeBusy /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeBusy /* IMPORTED_SHORT_NAMED_BIT */, SetForwarding_forwardingTypeBusyInt /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeBusyInt /* IMPORTED_SHORT_NAMED_BIT */, SetForwarding_forwardingTypeBusyExt /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeBusyExt /* IMPORTED_SHORT_NAMED_BIT */, SetForwarding_forwardingTypeDND /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeDND /* IMPORTED_SHORT_NAMED_BIT */, SetForwarding_forwardingTypeDNDInt /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeDNDInt /* IMPORTED_SHORT_NAMED_BIT */, SetForwarding_forwardingTypeDNDExt /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeDNDExt /* IMPORTED_SHORT_NAMED_BIT */, SetForwarding_forwardingTypeNoAns /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeNoAns /* IMPORTED_SHORT_NAMED_BIT */, SetForwarding_forwardingTypeNoAnsInt /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeNoAnsInt /* IMPORTED_SHORT_NAMED_BIT */, SetForwarding_forwardingTypeNoAnsExt /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeNoAnsExt /* IMPORTED_SHORT_NAMED_BIT */, SetForwarding_forwardingTypeImmediate /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeImmediate /* IMPORTED_SHORT_NAMED_BIT */, SetForwarding_forwardingTypeImmInt /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeImmInt /* IMPORTED_SHORT_NAMED_BIT */, SetForwarding_forwardingTypeImmExt /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeImmExt /* IMPORTED_SHORT_NAMED_BIT */, SetForwarding_forwardDN /* IMPORTED_LONG_NAMED_BIT */, forwardDN /* IMPORTED_SHORT_NAMED_BIT */, SetForwarding_ringCount /* IMPORTED_LONG_NAMED_BIT */, ringCount /* IMPORTED_SHORT_NAMED_BIT */, SetForwarding_privateData /* IMPORTED_LONG_NAMED_BIT */, SetForwarding_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SetForwarding_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, SetForwarding_ringDuration /* IMPORTED_LONG_NAMED_BIT */, ringDuration /* IMPORTED_SHORT_NAMED_BIT */, _decode_SetForwarding, _encode_SetForwarding } from "../CSTA-capability-exchange/SetForwarding.ta.mjs";
import { SetPresenceState, SetPresenceState_fromTime /* IMPORTED_LONG_NAMED_BIT */, fromTime /* IMPORTED_SHORT_NAMED_BIT */, SetPresenceState_untilTime /* IMPORTED_LONG_NAMED_BIT */, untilTime /* IMPORTED_SHORT_NAMED_BIT */, SetPresenceState_place /* IMPORTED_LONG_NAMED_BIT */, place /* IMPORTED_SHORT_NAMED_BIT */, SetPresenceState_mood /* IMPORTED_LONG_NAMED_BIT */, mood /* IMPORTED_SHORT_NAMED_BIT */, SetPresenceState_namedPresenceState /* IMPORTED_LONG_NAMED_BIT */, namedPresenceState /* IMPORTED_SHORT_NAMED_BIT */, SetPresenceState_privateData /* IMPORTED_LONG_NAMED_BIT */, SetPresenceState_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SetPresenceState_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_SetPresenceState, _encode_SetPresenceState } from "../CSTA-capability-exchange/SetPresenceState.ta.mjs";
// export { SetPresenceState, SetPresenceState_fromTime /* IMPORTED_LONG_NAMED_BIT */, fromTime /* IMPORTED_SHORT_NAMED_BIT */, SetPresenceState_untilTime /* IMPORTED_LONG_NAMED_BIT */, untilTime /* IMPORTED_SHORT_NAMED_BIT */, SetPresenceState_place /* IMPORTED_LONG_NAMED_BIT */, place /* IMPORTED_SHORT_NAMED_BIT */, SetPresenceState_mood /* IMPORTED_LONG_NAMED_BIT */, mood /* IMPORTED_SHORT_NAMED_BIT */, SetPresenceState_namedPresenceState /* IMPORTED_LONG_NAMED_BIT */, namedPresenceState /* IMPORTED_SHORT_NAMED_BIT */, SetPresenceState_privateData /* IMPORTED_LONG_NAMED_BIT */, SetPresenceState_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SetPresenceState_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_SetPresenceState, _encode_SetPresenceState } from "../CSTA-capability-exchange/SetPresenceState.ta.mjs";
import { SetRouteingMode, SetRouteingMode_privateData /* IMPORTED_LONG_NAMED_BIT */, SetRouteingMode_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SetRouteingMode_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_SetRouteingMode, _encode_SetRouteingMode } from "../CSTA-capability-exchange/SetRouteingMode.ta.mjs";
// export { SetRouteingMode, SetRouteingMode_privateData /* IMPORTED_LONG_NAMED_BIT */, SetRouteingMode_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SetRouteingMode_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_SetRouteingMode, _encode_SetRouteingMode } from "../CSTA-capability-exchange/SetRouteingMode.ta.mjs";


/**
 * @summary LogicalServList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogicalServList ::= SEQUENCE
 * {     callBackNonCallRel         [ 0] IMPLICIT     CallBackNonCallRel         OPTIONAL,
 *     callBackMsgNonCallRel         [ 1] IMPLICIT     CallBackMsgNonCallRel         OPTIONAL,
 *     cancelCallBack             [ 2] IMPLICIT     CancelCallBack             OPTIONAL,
 *     cancelCallBackMsg         [ 3] IMPLICIT     CancelCallBackMsg         OPTIONAL,
 *     getAgentState             [ 4] IMPLICIT     GetAgentState             OPTIONAL,
 *     getAutoAnswer             [ 5] IMPLICIT     GetAutoAnswer             OPTIONAL,
 *     getAutoWorkMode         [ 6] IMPLICIT     GetAutoWorkMode         OPTIONAL,
 *     getCallerIDStatus         [ 7] IMPLICIT     GetCallerIDStatus         OPTIONAL,
 *     getCallBack            [19] IMPLICIT    GetCallBack            OPTIONAL,
 *     getDoNotDisturb         [ 8] IMPLICIT     GetDoNotDisturb         OPTIONAL,
 *     getForwarding             [ 9] IMPLICIT     GetForwarding             OPTIONAL,
 *     getLastNumberDialed         [10] IMPLICIT     GetLastNumberDialed         OPTIONAL,
 *     getPresenceState        [20] IMPLICIT     GetPresenceState        OPTIONAL,
 *     getRouteingMode         [11] IMPLICIT     GetRouteingMode         OPTIONAL,
 *     setAgentState             [12] IMPLICIT     SetAgentState             OPTIONAL,
 *     setAutoAnswer             [13] IMPLICIT     SetAutoAnswer             OPTIONAL,
 *     setAutoWorkMode         [14] IMPLICIT     SetAutoWorkMode         OPTIONAL,
 *     setCallerIDStatus         [15] IMPLICIT     SetCallerIDStatus         OPTIONAL,
 *     setDoNotDisturb         [16] IMPLICIT     SetDoNotDisturb         OPTIONAL,
 *     setForwarding             [17] IMPLICIT     SetForwarding             OPTIONAL,
 *     setPresenceState        [21] IMPLICIT     SetPresenceState        OPTIONAL,
 *     setRouteingMode         [18] IMPLICIT     SetRouteingMode         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class LogicalServList {
    constructor (
        /**
         * @summary `callBackNonCallRel`.
         * @public
         * @readonly
         */
        readonly callBackNonCallRel: OPTIONAL<CallBackNonCallRel>,
        /**
         * @summary `callBackMsgNonCallRel`.
         * @public
         * @readonly
         */
        readonly callBackMsgNonCallRel: OPTIONAL<CallBackMsgNonCallRel>,
        /**
         * @summary `cancelCallBack`.
         * @public
         * @readonly
         */
        readonly cancelCallBack: OPTIONAL<CancelCallBack>,
        /**
         * @summary `cancelCallBackMsg`.
         * @public
         * @readonly
         */
        readonly cancelCallBackMsg: OPTIONAL<CancelCallBackMsg>,
        /**
         * @summary `getAgentState`.
         * @public
         * @readonly
         */
        readonly getAgentState: OPTIONAL<GetAgentState>,
        /**
         * @summary `getAutoAnswer`.
         * @public
         * @readonly
         */
        readonly getAutoAnswer: OPTIONAL<GetAutoAnswer>,
        /**
         * @summary `getAutoWorkMode`.
         * @public
         * @readonly
         */
        readonly getAutoWorkMode: OPTIONAL<GetAutoWorkMode>,
        /**
         * @summary `getCallerIDStatus`.
         * @public
         * @readonly
         */
        readonly getCallerIDStatus: OPTIONAL<GetCallerIDStatus>,
        /**
         * @summary `getCallBack`.
         * @public
         * @readonly
         */
        readonly getCallBack: OPTIONAL<GetCallBack>,
        /**
         * @summary `getDoNotDisturb`.
         * @public
         * @readonly
         */
        readonly getDoNotDisturb: OPTIONAL<GetDoNotDisturb>,
        /**
         * @summary `getForwarding`.
         * @public
         * @readonly
         */
        readonly getForwarding: OPTIONAL<GetForwarding>,
        /**
         * @summary `getLastNumberDialed`.
         * @public
         * @readonly
         */
        readonly getLastNumberDialed: OPTIONAL<GetLastNumberDialed>,
        /**
         * @summary `getPresenceState`.
         * @public
         * @readonly
         */
        readonly getPresenceState: OPTIONAL<GetPresenceState>,
        /**
         * @summary `getRouteingMode`.
         * @public
         * @readonly
         */
        readonly getRouteingMode: OPTIONAL<GetRouteingMode>,
        /**
         * @summary `setAgentState`.
         * @public
         * @readonly
         */
        readonly setAgentState: OPTIONAL<SetAgentState>,
        /**
         * @summary `setAutoAnswer`.
         * @public
         * @readonly
         */
        readonly setAutoAnswer: OPTIONAL<SetAutoAnswer>,
        /**
         * @summary `setAutoWorkMode`.
         * @public
         * @readonly
         */
        readonly setAutoWorkMode: OPTIONAL<SetAutoWorkMode>,
        /**
         * @summary `setCallerIDStatus`.
         * @public
         * @readonly
         */
        readonly setCallerIDStatus: OPTIONAL<SetCallerIDStatus>,
        /**
         * @summary `setDoNotDisturb`.
         * @public
         * @readonly
         */
        readonly setDoNotDisturb: OPTIONAL<SetDoNotDisturb>,
        /**
         * @summary `setForwarding`.
         * @public
         * @readonly
         */
        readonly setForwarding: OPTIONAL<SetForwarding>,
        /**
         * @summary `setPresenceState`.
         * @public
         * @readonly
         */
        readonly setPresenceState: OPTIONAL<SetPresenceState>,
        /**
         * @summary `setRouteingMode`.
         * @public
         * @readonly
         */
        readonly setRouteingMode: OPTIONAL<SetRouteingMode>
    ) {}

    /**
     * @summary Restructures an object into a LogicalServList
     * @description
     * 
     * This takes an `object` and converts it to a `LogicalServList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LogicalServList`.
     * @returns {LogicalServList}
     */
    public static _from_object (_o: { [_K in keyof (LogicalServList)]: (LogicalServList)[_K] }): LogicalServList {
        return new LogicalServList(_o.callBackNonCallRel, _o.callBackMsgNonCallRel, _o.cancelCallBack, _o.cancelCallBackMsg, _o.getAgentState, _o.getAutoAnswer, _o.getAutoWorkMode, _o.getCallerIDStatus, _o.getCallBack, _o.getDoNotDisturb, _o.getForwarding, _o.getLastNumberDialed, _o.getPresenceState, _o.getRouteingMode, _o.setAgentState, _o.setAutoAnswer, _o.setAutoWorkMode, _o.setCallerIDStatus, _o.setDoNotDisturb, _o.setForwarding, _o.setPresenceState, _o.setRouteingMode);
    }


}

/**
 * @summary The Leading Root Component Types of LogicalServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LogicalServList: $.ComponentSpec[] = [
    new $.ComponentSpec("callBackNonCallRel", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("callBackMsgNonCallRel", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("cancelCallBack", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("cancelCallBackMsg", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("getAgentState", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("getAutoAnswer", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("getAutoWorkMode", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("getCallerIDStatus", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("getCallBack", true, $.hasTag(_TagClass.context, 19), undefined, undefined),
    new $.ComponentSpec("getDoNotDisturb", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("getForwarding", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("getLastNumberDialed", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("getPresenceState", true, $.hasTag(_TagClass.context, 20), undefined, undefined),
    new $.ComponentSpec("getRouteingMode", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("setAgentState", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("setAutoAnswer", true, $.hasTag(_TagClass.context, 13), undefined, undefined),
    new $.ComponentSpec("setAutoWorkMode", true, $.hasTag(_TagClass.context, 14), undefined, undefined),
    new $.ComponentSpec("setCallerIDStatus", true, $.hasTag(_TagClass.context, 15), undefined, undefined),
    new $.ComponentSpec("setDoNotDisturb", true, $.hasTag(_TagClass.context, 16), undefined, undefined),
    new $.ComponentSpec("setForwarding", true, $.hasTag(_TagClass.context, 17), undefined, undefined),
    new $.ComponentSpec("setPresenceState", true, $.hasTag(_TagClass.context, 21), undefined, undefined),
    new $.ComponentSpec("setRouteingMode", true, $.hasTag(_TagClass.context, 18), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of LogicalServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LogicalServList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LogicalServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LogicalServList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LogicalServList: $.ASN1Decoder<LogicalServList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LogicalServList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LogicalServList (el: _Element): LogicalServList {
    if (!_cached_decoder_for_LogicalServList) { _cached_decoder_for_LogicalServList = function (el: _Element): LogicalServList {
    let callBackNonCallRel: OPTIONAL<CallBackNonCallRel>;
    let callBackMsgNonCallRel: OPTIONAL<CallBackMsgNonCallRel>;
    let cancelCallBack: OPTIONAL<CancelCallBack>;
    let cancelCallBackMsg: OPTIONAL<CancelCallBackMsg>;
    let getAgentState: OPTIONAL<GetAgentState>;
    let getAutoAnswer: OPTIONAL<GetAutoAnswer>;
    let getAutoWorkMode: OPTIONAL<GetAutoWorkMode>;
    let getCallerIDStatus: OPTIONAL<GetCallerIDStatus>;
    let getCallBack: OPTIONAL<GetCallBack>;
    let getDoNotDisturb: OPTIONAL<GetDoNotDisturb>;
    let getForwarding: OPTIONAL<GetForwarding>;
    let getLastNumberDialed: OPTIONAL<GetLastNumberDialed>;
    let getPresenceState: OPTIONAL<GetPresenceState>;
    let getRouteingMode: OPTIONAL<GetRouteingMode>;
    let setAgentState: OPTIONAL<SetAgentState>;
    let setAutoAnswer: OPTIONAL<SetAutoAnswer>;
    let setAutoWorkMode: OPTIONAL<SetAutoWorkMode>;
    let setCallerIDStatus: OPTIONAL<SetCallerIDStatus>;
    let setDoNotDisturb: OPTIONAL<SetDoNotDisturb>;
    let setForwarding: OPTIONAL<SetForwarding>;
    let setPresenceState: OPTIONAL<SetPresenceState>;
    let setRouteingMode: OPTIONAL<SetRouteingMode>;
    const callbacks: $.DecodingMap = {
        "callBackNonCallRel": (_el: _Element): void => { callBackNonCallRel = $._decode_implicit<CallBackNonCallRel>(() => _decode_CallBackNonCallRel)(_el); },
        "callBackMsgNonCallRel": (_el: _Element): void => { callBackMsgNonCallRel = $._decode_implicit<CallBackMsgNonCallRel>(() => _decode_CallBackMsgNonCallRel)(_el); },
        "cancelCallBack": (_el: _Element): void => { cancelCallBack = $._decode_implicit<CancelCallBack>(() => _decode_CancelCallBack)(_el); },
        "cancelCallBackMsg": (_el: _Element): void => { cancelCallBackMsg = $._decode_implicit<CancelCallBackMsg>(() => _decode_CancelCallBackMsg)(_el); },
        "getAgentState": (_el: _Element): void => { getAgentState = $._decode_implicit<GetAgentState>(() => _decode_GetAgentState)(_el); },
        "getAutoAnswer": (_el: _Element): void => { getAutoAnswer = $._decode_implicit<GetAutoAnswer>(() => _decode_GetAutoAnswer)(_el); },
        "getAutoWorkMode": (_el: _Element): void => { getAutoWorkMode = $._decode_implicit<GetAutoWorkMode>(() => _decode_GetAutoWorkMode)(_el); },
        "getCallerIDStatus": (_el: _Element): void => { getCallerIDStatus = $._decode_implicit<GetCallerIDStatus>(() => _decode_GetCallerIDStatus)(_el); },
        "getCallBack": (_el: _Element): void => { getCallBack = $._decode_implicit<GetCallBack>(() => _decode_GetCallBack)(_el); },
        "getDoNotDisturb": (_el: _Element): void => { getDoNotDisturb = $._decode_implicit<GetDoNotDisturb>(() => _decode_GetDoNotDisturb)(_el); },
        "getForwarding": (_el: _Element): void => { getForwarding = $._decode_implicit<GetForwarding>(() => _decode_GetForwarding)(_el); },
        "getLastNumberDialed": (_el: _Element): void => { getLastNumberDialed = $._decode_implicit<GetLastNumberDialed>(() => _decode_GetLastNumberDialed)(_el); },
        "getPresenceState": (_el: _Element): void => { getPresenceState = $._decode_implicit<GetPresenceState>(() => _decode_GetPresenceState)(_el); },
        "getRouteingMode": (_el: _Element): void => { getRouteingMode = $._decode_implicit<GetRouteingMode>(() => _decode_GetRouteingMode)(_el); },
        "setAgentState": (_el: _Element): void => { setAgentState = $._decode_implicit<SetAgentState>(() => _decode_SetAgentState)(_el); },
        "setAutoAnswer": (_el: _Element): void => { setAutoAnswer = $._decode_implicit<SetAutoAnswer>(() => _decode_SetAutoAnswer)(_el); },
        "setAutoWorkMode": (_el: _Element): void => { setAutoWorkMode = $._decode_implicit<SetAutoWorkMode>(() => _decode_SetAutoWorkMode)(_el); },
        "setCallerIDStatus": (_el: _Element): void => { setCallerIDStatus = $._decode_implicit<SetCallerIDStatus>(() => _decode_SetCallerIDStatus)(_el); },
        "setDoNotDisturb": (_el: _Element): void => { setDoNotDisturb = $._decode_implicit<SetDoNotDisturb>(() => _decode_SetDoNotDisturb)(_el); },
        "setForwarding": (_el: _Element): void => { setForwarding = $._decode_implicit<SetForwarding>(() => _decode_SetForwarding)(_el); },
        "setPresenceState": (_el: _Element): void => { setPresenceState = $._decode_implicit<SetPresenceState>(() => _decode_SetPresenceState)(_el); },
        "setRouteingMode": (_el: _Element): void => { setRouteingMode = $._decode_implicit<SetRouteingMode>(() => _decode_SetRouteingMode)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LogicalServList,
        _extension_additions_list_spec_for_LogicalServList,
        _root_component_type_list_2_spec_for_LogicalServList,
        undefined,
    );
    return new LogicalServList(
        callBackNonCallRel,
        callBackMsgNonCallRel,
        cancelCallBack,
        cancelCallBackMsg,
        getAgentState,
        getAutoAnswer,
        getAutoWorkMode,
        getCallerIDStatus,
        getCallBack,
        getDoNotDisturb,
        getForwarding,
        getLastNumberDialed,
        getPresenceState,
        getRouteingMode,
        setAgentState,
        setAutoAnswer,
        setAutoWorkMode,
        setCallerIDStatus,
        setDoNotDisturb,
        setForwarding,
        setPresenceState,
        setRouteingMode
    );
}; }
    return _cached_decoder_for_LogicalServList(el);
}

let _cached_encoder_for_LogicalServList: $.ASN1Encoder<LogicalServList> | null = null;

/**
 * @summary Encodes a(n) LogicalServList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogicalServList, encoded as an ASN.1 Element.
 */
export
function _encode_LogicalServList (value: LogicalServList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LogicalServList) { _cached_encoder_for_LogicalServList = function (value: LogicalServList, elGetter: $.ASN1Encoder<LogicalServList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.callBackNonCallRel === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CallBackNonCallRel, $.BER)(value.callBackNonCallRel, $.BER)),
            /* IF_ABSENT  */ ((value.callBackMsgNonCallRel === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CallBackMsgNonCallRel, $.BER)(value.callBackMsgNonCallRel, $.BER)),
            /* IF_ABSENT  */ ((value.cancelCallBack === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CancelCallBack, $.BER)(value.cancelCallBack, $.BER)),
            /* IF_ABSENT  */ ((value.cancelCallBackMsg === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_CancelCallBackMsg, $.BER)(value.cancelCallBackMsg, $.BER)),
            /* IF_ABSENT  */ ((value.getAgentState === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_GetAgentState, $.BER)(value.getAgentState, $.BER)),
            /* IF_ABSENT  */ ((value.getAutoAnswer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_GetAutoAnswer, $.BER)(value.getAutoAnswer, $.BER)),
            /* IF_ABSENT  */ ((value.getAutoWorkMode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_GetAutoWorkMode, $.BER)(value.getAutoWorkMode, $.BER)),
            /* IF_ABSENT  */ ((value.getCallerIDStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_GetCallerIDStatus, $.BER)(value.getCallerIDStatus, $.BER)),
            /* IF_ABSENT  */ ((value.getCallBack === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => _encode_GetCallBack, $.BER)(value.getCallBack, $.BER)),
            /* IF_ABSENT  */ ((value.getDoNotDisturb === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_GetDoNotDisturb, $.BER)(value.getDoNotDisturb, $.BER)),
            /* IF_ABSENT  */ ((value.getForwarding === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_GetForwarding, $.BER)(value.getForwarding, $.BER)),
            /* IF_ABSENT  */ ((value.getLastNumberDialed === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_GetLastNumberDialed, $.BER)(value.getLastNumberDialed, $.BER)),
            /* IF_ABSENT  */ ((value.getPresenceState === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => _encode_GetPresenceState, $.BER)(value.getPresenceState, $.BER)),
            /* IF_ABSENT  */ ((value.getRouteingMode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_GetRouteingMode, $.BER)(value.getRouteingMode, $.BER)),
            /* IF_ABSENT  */ ((value.setAgentState === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_SetAgentState, $.BER)(value.setAgentState, $.BER)),
            /* IF_ABSENT  */ ((value.setAutoAnswer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_SetAutoAnswer, $.BER)(value.setAutoAnswer, $.BER)),
            /* IF_ABSENT  */ ((value.setAutoWorkMode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_SetAutoWorkMode, $.BER)(value.setAutoWorkMode, $.BER)),
            /* IF_ABSENT  */ ((value.setCallerIDStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_SetCallerIDStatus, $.BER)(value.setCallerIDStatus, $.BER)),
            /* IF_ABSENT  */ ((value.setDoNotDisturb === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_SetDoNotDisturb, $.BER)(value.setDoNotDisturb, $.BER)),
            /* IF_ABSENT  */ ((value.setForwarding === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_SetForwarding, $.BER)(value.setForwarding, $.BER)),
            /* IF_ABSENT  */ ((value.setPresenceState === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => _encode_SetPresenceState, $.BER)(value.setPresenceState, $.BER)),
            /* IF_ABSENT  */ ((value.setRouteingMode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => _encode_SetRouteingMode, $.BER)(value.setRouteingMode, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LogicalServList(value, elGetter);
}


/* eslint-enable */
