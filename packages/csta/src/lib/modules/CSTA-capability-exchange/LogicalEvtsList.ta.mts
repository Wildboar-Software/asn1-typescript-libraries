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
import { AgentBusy, AgentBusy_agentID /* IMPORTED_LONG_NAMED_BIT */, AgentBusy_acdGroup /* IMPORTED_LONG_NAMED_BIT */, AgentBusy_pendingAgentStateWorkingAfterCall /* IMPORTED_LONG_NAMED_BIT */, pendingAgentStateWorkingAfterCall /* IMPORTED_SHORT_NAMED_BIT */, AgentBusy_pendingAgentStateNotReady /* IMPORTED_LONG_NAMED_BIT */, AgentBusy_pendingAgentStateReady /* IMPORTED_LONG_NAMED_BIT */, AgentBusy_pendingAgentStateNull /* IMPORTED_LONG_NAMED_BIT */, AgentBusy_cause /* IMPORTED_LONG_NAMED_BIT */, AgentBusy_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_AgentBusy, _encode_AgentBusy } from "../CSTA-capability-exchange/AgentBusy.ta.mjs";
// export { AgentBusy, AgentBusy_agentID /* IMPORTED_LONG_NAMED_BIT */, AgentBusy_acdGroup /* IMPORTED_LONG_NAMED_BIT */, AgentBusy_pendingAgentStateWorkingAfterCall /* IMPORTED_LONG_NAMED_BIT */, pendingAgentStateWorkingAfterCall /* IMPORTED_SHORT_NAMED_BIT */, AgentBusy_pendingAgentStateNotReady /* IMPORTED_LONG_NAMED_BIT */, AgentBusy_pendingAgentStateReady /* IMPORTED_LONG_NAMED_BIT */, AgentBusy_pendingAgentStateNull /* IMPORTED_LONG_NAMED_BIT */, AgentBusy_cause /* IMPORTED_LONG_NAMED_BIT */, AgentBusy_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_AgentBusy, _encode_AgentBusy } from "../CSTA-capability-exchange/AgentBusy.ta.mjs";
import { AgentLoggedOff, AgentLoggedOff_agentID /* IMPORTED_LONG_NAMED_BIT */, AgentLoggedOff_acdGroup /* IMPORTED_LONG_NAMED_BIT */, AgentLoggedOff_agentPassword /* IMPORTED_LONG_NAMED_BIT */, AgentLoggedOff_cause /* IMPORTED_LONG_NAMED_BIT */, AgentLoggedOff_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_AgentLoggedOff, _encode_AgentLoggedOff } from "../CSTA-capability-exchange/AgentLoggedOff.ta.mjs";
// export { AgentLoggedOff, AgentLoggedOff_agentID /* IMPORTED_LONG_NAMED_BIT */, AgentLoggedOff_acdGroup /* IMPORTED_LONG_NAMED_BIT */, AgentLoggedOff_agentPassword /* IMPORTED_LONG_NAMED_BIT */, AgentLoggedOff_cause /* IMPORTED_LONG_NAMED_BIT */, AgentLoggedOff_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_AgentLoggedOff, _encode_AgentLoggedOff } from "../CSTA-capability-exchange/AgentLoggedOff.ta.mjs";
import { AgentLoggedOn, AgentLoggedOn_agentID /* IMPORTED_LONG_NAMED_BIT */, AgentLoggedOn_acdGroup /* IMPORTED_LONG_NAMED_BIT */, AgentLoggedOn_agentPassword /* IMPORTED_LONG_NAMED_BIT */, AgentLoggedOn_cause /* IMPORTED_LONG_NAMED_BIT */, AgentLoggedOn_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_AgentLoggedOn, _encode_AgentLoggedOn } from "../CSTA-capability-exchange/AgentLoggedOn.ta.mjs";
// export { AgentLoggedOn, AgentLoggedOn_agentID /* IMPORTED_LONG_NAMED_BIT */, AgentLoggedOn_acdGroup /* IMPORTED_LONG_NAMED_BIT */, AgentLoggedOn_agentPassword /* IMPORTED_LONG_NAMED_BIT */, AgentLoggedOn_cause /* IMPORTED_LONG_NAMED_BIT */, AgentLoggedOn_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_AgentLoggedOn, _encode_AgentLoggedOn } from "../CSTA-capability-exchange/AgentLoggedOn.ta.mjs";
import { AgentNotReady, AgentNotReady_agentID /* IMPORTED_LONG_NAMED_BIT */, AgentNotReady_acdGroup /* IMPORTED_LONG_NAMED_BIT */, AgentNotReady_cause /* IMPORTED_LONG_NAMED_BIT */, AgentNotReady_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_AgentNotReady, _encode_AgentNotReady } from "../CSTA-capability-exchange/AgentNotReady.ta.mjs";
// export { AgentNotReady, AgentNotReady_agentID /* IMPORTED_LONG_NAMED_BIT */, AgentNotReady_acdGroup /* IMPORTED_LONG_NAMED_BIT */, AgentNotReady_cause /* IMPORTED_LONG_NAMED_BIT */, AgentNotReady_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_AgentNotReady, _encode_AgentNotReady } from "../CSTA-capability-exchange/AgentNotReady.ta.mjs";
import { AgentReady, AgentReady_agentID /* IMPORTED_LONG_NAMED_BIT */, AgentReady_acdGroup /* IMPORTED_LONG_NAMED_BIT */, AgentReady_cause /* IMPORTED_LONG_NAMED_BIT */, AgentReady_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_AgentReady, _encode_AgentReady } from "../CSTA-capability-exchange/AgentReady.ta.mjs";
// export { AgentReady, AgentReady_agentID /* IMPORTED_LONG_NAMED_BIT */, AgentReady_acdGroup /* IMPORTED_LONG_NAMED_BIT */, AgentReady_cause /* IMPORTED_LONG_NAMED_BIT */, AgentReady_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_AgentReady, _encode_AgentReady } from "../CSTA-capability-exchange/AgentReady.ta.mjs";
import { AgentWorkingAfterCall, AgentWorkingAfterCall_agentID /* IMPORTED_LONG_NAMED_BIT */, AgentWorkingAfterCall_acdGroup /* IMPORTED_LONG_NAMED_BIT */, AgentWorkingAfterCall_pendingAgentStateNotReady /* IMPORTED_LONG_NAMED_BIT */, AgentWorkingAfterCall_pendingAgentStateReady /* IMPORTED_LONG_NAMED_BIT */, AgentWorkingAfterCall_pendingAgentStateNull /* IMPORTED_LONG_NAMED_BIT */, AgentWorkingAfterCall_cause /* IMPORTED_LONG_NAMED_BIT */, AgentWorkingAfterCall_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_AgentWorkingAfterCall, _encode_AgentWorkingAfterCall } from "../CSTA-capability-exchange/AgentWorkingAfterCall.ta.mjs";
// export { AgentWorkingAfterCall, AgentWorkingAfterCall_agentID /* IMPORTED_LONG_NAMED_BIT */, AgentWorkingAfterCall_acdGroup /* IMPORTED_LONG_NAMED_BIT */, AgentWorkingAfterCall_pendingAgentStateNotReady /* IMPORTED_LONG_NAMED_BIT */, AgentWorkingAfterCall_pendingAgentStateReady /* IMPORTED_LONG_NAMED_BIT */, AgentWorkingAfterCall_pendingAgentStateNull /* IMPORTED_LONG_NAMED_BIT */, AgentWorkingAfterCall_cause /* IMPORTED_LONG_NAMED_BIT */, AgentWorkingAfterCall_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_AgentWorkingAfterCall, _encode_AgentWorkingAfterCall } from "../CSTA-capability-exchange/AgentWorkingAfterCall.ta.mjs";
import { AutoAnswer, AutoAnswer_numberOfRings /* IMPORTED_LONG_NAMED_BIT */, numberOfRings /* IMPORTED_SHORT_NAMED_BIT */, AutoAnswer_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_AutoAnswer, _encode_AutoAnswer } from "../CSTA-capability-exchange/AutoAnswer.ta.mjs";
// export { AutoAnswer, AutoAnswer_numberOfRings /* IMPORTED_LONG_NAMED_BIT */, numberOfRings /* IMPORTED_SHORT_NAMED_BIT */, AutoAnswer_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_AutoAnswer, _encode_AutoAnswer } from "../CSTA-capability-exchange/AutoAnswer.ta.mjs";
import { AutoWorkMode, AutoWorkMode_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_AutoWorkMode, _encode_AutoWorkMode } from "../CSTA-capability-exchange/AutoWorkMode.ta.mjs";
// export { AutoWorkMode, AutoWorkMode_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_AutoWorkMode, _encode_AutoWorkMode } from "../CSTA-capability-exchange/AutoWorkMode.ta.mjs";
import { CallBackEvent, CallBackEvent_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_CallBackEvent, _encode_CallBackEvent } from "../CSTA-capability-exchange/CallBackEvent.ta.mjs";
// export { CallBackEvent, CallBackEvent_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_CallBackEvent, _encode_CallBackEvent } from "../CSTA-capability-exchange/CallBackEvent.ta.mjs";
import { CallBackMessageEvent, CallBackMessageEvent_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_CallBackMessageEvent, _encode_CallBackMessageEvent } from "../CSTA-capability-exchange/CallBackMessageEvent.ta.mjs";
// export { CallBackMessageEvent, CallBackMessageEvent_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_CallBackMessageEvent, _encode_CallBackMessageEvent } from "../CSTA-capability-exchange/CallBackMessageEvent.ta.mjs";
import { CallerIDStatus, CallerIDStatus_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_CallerIDStatus, _encode_CallerIDStatus } from "../CSTA-capability-exchange/CallerIDStatus.ta.mjs";
// export { CallerIDStatus, CallerIDStatus_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_CallerIDStatus, _encode_CallerIDStatus } from "../CSTA-capability-exchange/CallerIDStatus.ta.mjs";
import { DoNotDisturb, DoNotDisturb_callOriginationParameter /* IMPORTED_LONG_NAMED_BIT */, callOriginationParameter /* IMPORTED_SHORT_NAMED_BIT */, DoNotDisturb_callOriginationInternal /* IMPORTED_LONG_NAMED_BIT */, callOriginationInternal /* IMPORTED_SHORT_NAMED_BIT */, DoNotDisturb_callOriginationExternal /* IMPORTED_LONG_NAMED_BIT */, callOriginationExternal /* IMPORTED_SHORT_NAMED_BIT */, DoNotDisturb_callingDeviceList /* IMPORTED_LONG_NAMED_BIT */, callingDeviceList /* IMPORTED_SHORT_NAMED_BIT */, DoNotDisturb_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_DoNotDisturb, _encode_DoNotDisturb } from "../CSTA-capability-exchange/DoNotDisturb.ta.mjs";
// export { DoNotDisturb, DoNotDisturb_callOriginationParameter /* IMPORTED_LONG_NAMED_BIT */, callOriginationParameter /* IMPORTED_SHORT_NAMED_BIT */, DoNotDisturb_callOriginationInternal /* IMPORTED_LONG_NAMED_BIT */, callOriginationInternal /* IMPORTED_SHORT_NAMED_BIT */, DoNotDisturb_callOriginationExternal /* IMPORTED_LONG_NAMED_BIT */, callOriginationExternal /* IMPORTED_SHORT_NAMED_BIT */, DoNotDisturb_callingDeviceList /* IMPORTED_LONG_NAMED_BIT */, callingDeviceList /* IMPORTED_SHORT_NAMED_BIT */, DoNotDisturb_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_DoNotDisturb, _encode_DoNotDisturb } from "../CSTA-capability-exchange/DoNotDisturb.ta.mjs";
import { Forwarding, Forwarding_forwardingTypeBusy /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeBusy /* IMPORTED_SHORT_NAMED_BIT */, Forwarding_forwardingTypeBusyInt /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeBusyInt /* IMPORTED_SHORT_NAMED_BIT */, Forwarding_forwardingTypeBusyExt /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeBusyExt /* IMPORTED_SHORT_NAMED_BIT */, Forwarding_forwardingTypeDND /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeDND /* IMPORTED_SHORT_NAMED_BIT */, Forwarding_forwardingTypeDNDInt /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeDNDInt /* IMPORTED_SHORT_NAMED_BIT */, Forwarding_forwardingTypeDNDExt /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeDNDExt /* IMPORTED_SHORT_NAMED_BIT */, Forwarding_forwardingTypeNoAns /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeNoAns /* IMPORTED_SHORT_NAMED_BIT */, Forwarding_forwardingTypeNoAnsInt /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeNoAnsInt /* IMPORTED_SHORT_NAMED_BIT */, Forwarding_forwardingTypeNoAnsExt /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeNoAnsExt /* IMPORTED_SHORT_NAMED_BIT */, Forwarding_forwardingTypeImmediate /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeImmediate /* IMPORTED_SHORT_NAMED_BIT */, Forwarding_forwardingTypeImmInt /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeImmInt /* IMPORTED_SHORT_NAMED_BIT */, Forwarding_forwardingTypeImmExt /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeImmExt /* IMPORTED_SHORT_NAMED_BIT */, Forwarding_forwardTo /* IMPORTED_LONG_NAMED_BIT */, forwardTo /* IMPORTED_SHORT_NAMED_BIT */, Forwarding_forwardDefaultTypeAndDN /* IMPORTED_LONG_NAMED_BIT */, forwardDefaultTypeAndDN /* IMPORTED_SHORT_NAMED_BIT */, Forwarding_forwardDefaultType /* IMPORTED_LONG_NAMED_BIT */, forwardDefaultType /* IMPORTED_SHORT_NAMED_BIT */, Forwarding_forwardDefaultDN /* IMPORTED_LONG_NAMED_BIT */, forwardDefaultDN /* IMPORTED_SHORT_NAMED_BIT */, Forwarding_ringCount /* IMPORTED_LONG_NAMED_BIT */, ringCount /* IMPORTED_SHORT_NAMED_BIT */, Forwarding_privateData /* IMPORTED_LONG_NAMED_BIT */, Forwarding_ringDuration /* IMPORTED_LONG_NAMED_BIT */, ringDuration /* IMPORTED_SHORT_NAMED_BIT */, _decode_Forwarding, _encode_Forwarding } from "../CSTA-capability-exchange/Forwarding.ta.mjs";
// export { Forwarding, Forwarding_forwardingTypeBusy /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeBusy /* IMPORTED_SHORT_NAMED_BIT */, Forwarding_forwardingTypeBusyInt /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeBusyInt /* IMPORTED_SHORT_NAMED_BIT */, Forwarding_forwardingTypeBusyExt /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeBusyExt /* IMPORTED_SHORT_NAMED_BIT */, Forwarding_forwardingTypeDND /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeDND /* IMPORTED_SHORT_NAMED_BIT */, Forwarding_forwardingTypeDNDInt /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeDNDInt /* IMPORTED_SHORT_NAMED_BIT */, Forwarding_forwardingTypeDNDExt /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeDNDExt /* IMPORTED_SHORT_NAMED_BIT */, Forwarding_forwardingTypeNoAns /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeNoAns /* IMPORTED_SHORT_NAMED_BIT */, Forwarding_forwardingTypeNoAnsInt /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeNoAnsInt /* IMPORTED_SHORT_NAMED_BIT */, Forwarding_forwardingTypeNoAnsExt /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeNoAnsExt /* IMPORTED_SHORT_NAMED_BIT */, Forwarding_forwardingTypeImmediate /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeImmediate /* IMPORTED_SHORT_NAMED_BIT */, Forwarding_forwardingTypeImmInt /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeImmInt /* IMPORTED_SHORT_NAMED_BIT */, Forwarding_forwardingTypeImmExt /* IMPORTED_LONG_NAMED_BIT */, forwardingTypeImmExt /* IMPORTED_SHORT_NAMED_BIT */, Forwarding_forwardTo /* IMPORTED_LONG_NAMED_BIT */, forwardTo /* IMPORTED_SHORT_NAMED_BIT */, Forwarding_forwardDefaultTypeAndDN /* IMPORTED_LONG_NAMED_BIT */, forwardDefaultTypeAndDN /* IMPORTED_SHORT_NAMED_BIT */, Forwarding_forwardDefaultType /* IMPORTED_LONG_NAMED_BIT */, forwardDefaultType /* IMPORTED_SHORT_NAMED_BIT */, Forwarding_forwardDefaultDN /* IMPORTED_LONG_NAMED_BIT */, forwardDefaultDN /* IMPORTED_SHORT_NAMED_BIT */, Forwarding_ringCount /* IMPORTED_LONG_NAMED_BIT */, ringCount /* IMPORTED_SHORT_NAMED_BIT */, Forwarding_privateData /* IMPORTED_LONG_NAMED_BIT */, Forwarding_ringDuration /* IMPORTED_LONG_NAMED_BIT */, ringDuration /* IMPORTED_SHORT_NAMED_BIT */, _decode_Forwarding, _encode_Forwarding } from "../CSTA-capability-exchange/Forwarding.ta.mjs";
import { PresenceStateEvent, PresenceStateEvent_fromTime /* IMPORTED_LONG_NAMED_BIT */, fromTime /* IMPORTED_SHORT_NAMED_BIT */, PresenceStateEvent_untilTime /* IMPORTED_LONG_NAMED_BIT */, untilTime /* IMPORTED_SHORT_NAMED_BIT */, PresenceStateEvent_place /* IMPORTED_LONG_NAMED_BIT */, place /* IMPORTED_SHORT_NAMED_BIT */, PresenceStateEvent_mood /* IMPORTED_LONG_NAMED_BIT */, mood /* IMPORTED_SHORT_NAMED_BIT */, PresenceStateEvent_namedPresenceState /* IMPORTED_LONG_NAMED_BIT */, namedPresenceState /* IMPORTED_SHORT_NAMED_BIT */, PresenceStateEvent_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_PresenceStateEvent, _encode_PresenceStateEvent } from "../CSTA-capability-exchange/PresenceStateEvent.ta.mjs";
// export { PresenceStateEvent, PresenceStateEvent_fromTime /* IMPORTED_LONG_NAMED_BIT */, fromTime /* IMPORTED_SHORT_NAMED_BIT */, PresenceStateEvent_untilTime /* IMPORTED_LONG_NAMED_BIT */, untilTime /* IMPORTED_SHORT_NAMED_BIT */, PresenceStateEvent_place /* IMPORTED_LONG_NAMED_BIT */, place /* IMPORTED_SHORT_NAMED_BIT */, PresenceStateEvent_mood /* IMPORTED_LONG_NAMED_BIT */, mood /* IMPORTED_SHORT_NAMED_BIT */, PresenceStateEvent_namedPresenceState /* IMPORTED_LONG_NAMED_BIT */, namedPresenceState /* IMPORTED_SHORT_NAMED_BIT */, PresenceStateEvent_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_PresenceStateEvent, _encode_PresenceStateEvent } from "../CSTA-capability-exchange/PresenceStateEvent.ta.mjs";
import { RouteingMode, RouteingMode_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_RouteingMode, _encode_RouteingMode } from "../CSTA-capability-exchange/RouteingMode.ta.mjs";
// export { RouteingMode, RouteingMode_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_RouteingMode, _encode_RouteingMode } from "../CSTA-capability-exchange/RouteingMode.ta.mjs";


/**
 * @summary LogicalEvtsList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogicalEvtsList ::= SEQUENCE
 * {     agentBusy             [ 0] IMPLICIT     AgentBusy             OPTIONAL,
 *     agentLoggedOff             [ 1] IMPLICIT     AgentLoggedOff             OPTIONAL,
 *     agentLoggedOn             [ 2] IMPLICIT     AgentLoggedOn             OPTIONAL,
 *     agentNotReady             [ 3] IMPLICIT     AgentNotReady             OPTIONAL,
 *     agentReady             [ 4] IMPLICIT     AgentReady             OPTIONAL,
 *     agentWorkingAfterCall         [ 5] IMPLICIT     AgentWorkingAfterCall         OPTIONAL,
 *     autoAnswer             [ 6] IMPLICIT     AutoAnswer             OPTIONAL,
 *     autoWorkMode             [ 7] IMPLICIT     AutoWorkMode             OPTIONAL,
 *     callBack             [ 8] IMPLICIT     CallBackEvent             OPTIONAL,
 *     callBackMessage         [ 9] IMPLICIT     CallBackMessageEvent         OPTIONAL,
 *     callerIDStatus             [10] IMPLICIT     CallerIDStatus             OPTIONAL,
 *     doNotDisturb             [11] IMPLICIT     DoNotDisturb             OPTIONAL,
 *     forwarding             [12] IMPLICIT     Forwarding             OPTIONAL,
 *     presenceState            [14] IMPLICIT     PresenceStateEvent        OPTIONAL,
 *     routeingMode             [13] IMPLICIT     RouteingMode             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class LogicalEvtsList {
    constructor (
        /**
         * @summary `agentBusy`.
         * @public
         * @readonly
         */
        readonly agentBusy: OPTIONAL<AgentBusy>,
        /**
         * @summary `agentLoggedOff`.
         * @public
         * @readonly
         */
        readonly agentLoggedOff: OPTIONAL<AgentLoggedOff>,
        /**
         * @summary `agentLoggedOn`.
         * @public
         * @readonly
         */
        readonly agentLoggedOn: OPTIONAL<AgentLoggedOn>,
        /**
         * @summary `agentNotReady`.
         * @public
         * @readonly
         */
        readonly agentNotReady: OPTIONAL<AgentNotReady>,
        /**
         * @summary `agentReady`.
         * @public
         * @readonly
         */
        readonly agentReady: OPTIONAL<AgentReady>,
        /**
         * @summary `agentWorkingAfterCall`.
         * @public
         * @readonly
         */
        readonly agentWorkingAfterCall: OPTIONAL<AgentWorkingAfterCall>,
        /**
         * @summary `autoAnswer`.
         * @public
         * @readonly
         */
        readonly autoAnswer: OPTIONAL<AutoAnswer>,
        /**
         * @summary `autoWorkMode`.
         * @public
         * @readonly
         */
        readonly autoWorkMode: OPTIONAL<AutoWorkMode>,
        /**
         * @summary `callBack`.
         * @public
         * @readonly
         */
        readonly callBack: OPTIONAL<CallBackEvent>,
        /**
         * @summary `callBackMessage`.
         * @public
         * @readonly
         */
        readonly callBackMessage: OPTIONAL<CallBackMessageEvent>,
        /**
         * @summary `callerIDStatus`.
         * @public
         * @readonly
         */
        readonly callerIDStatus: OPTIONAL<CallerIDStatus>,
        /**
         * @summary `doNotDisturb`.
         * @public
         * @readonly
         */
        readonly doNotDisturb: OPTIONAL<DoNotDisturb>,
        /**
         * @summary `forwarding`.
         * @public
         * @readonly
         */
        readonly forwarding: OPTIONAL<Forwarding>,
        /**
         * @summary `presenceState`.
         * @public
         * @readonly
         */
        readonly presenceState: OPTIONAL<PresenceStateEvent>,
        /**
         * @summary `routeingMode`.
         * @public
         * @readonly
         */
        readonly routeingMode: OPTIONAL<RouteingMode>
    ) {}

    /**
     * @summary Restructures an object into a LogicalEvtsList
     * @description
     * 
     * This takes an `object` and converts it to a `LogicalEvtsList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LogicalEvtsList`.
     * @returns {LogicalEvtsList}
     */
    public static _from_object (_o: { [_K in keyof (LogicalEvtsList)]: (LogicalEvtsList)[_K] }): LogicalEvtsList {
        return new LogicalEvtsList(_o.agentBusy, _o.agentLoggedOff, _o.agentLoggedOn, _o.agentNotReady, _o.agentReady, _o.agentWorkingAfterCall, _o.autoAnswer, _o.autoWorkMode, _o.callBack, _o.callBackMessage, _o.callerIDStatus, _o.doNotDisturb, _o.forwarding, _o.presenceState, _o.routeingMode);
    }


}

/**
 * @summary The Leading Root Component Types of LogicalEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LogicalEvtsList: $.ComponentSpec[] = [
    new $.ComponentSpec("agentBusy", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("agentLoggedOff", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("agentLoggedOn", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("agentNotReady", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("agentReady", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("agentWorkingAfterCall", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("autoAnswer", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("autoWorkMode", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("callBack", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("callBackMessage", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("callerIDStatus", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("doNotDisturb", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("forwarding", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("presenceState", true, $.hasTag(_TagClass.context, 14), undefined, undefined),
    new $.ComponentSpec("routeingMode", true, $.hasTag(_TagClass.context, 13), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of LogicalEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LogicalEvtsList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LogicalEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LogicalEvtsList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LogicalEvtsList: $.ASN1Decoder<LogicalEvtsList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LogicalEvtsList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LogicalEvtsList (el: _Element): LogicalEvtsList {
    if (!_cached_decoder_for_LogicalEvtsList) { _cached_decoder_for_LogicalEvtsList = function (el: _Element): LogicalEvtsList {
    let agentBusy: OPTIONAL<AgentBusy>;
    let agentLoggedOff: OPTIONAL<AgentLoggedOff>;
    let agentLoggedOn: OPTIONAL<AgentLoggedOn>;
    let agentNotReady: OPTIONAL<AgentNotReady>;
    let agentReady: OPTIONAL<AgentReady>;
    let agentWorkingAfterCall: OPTIONAL<AgentWorkingAfterCall>;
    let autoAnswer: OPTIONAL<AutoAnswer>;
    let autoWorkMode: OPTIONAL<AutoWorkMode>;
    let callBack: OPTIONAL<CallBackEvent>;
    let callBackMessage: OPTIONAL<CallBackMessageEvent>;
    let callerIDStatus: OPTIONAL<CallerIDStatus>;
    let doNotDisturb: OPTIONAL<DoNotDisturb>;
    let forwarding: OPTIONAL<Forwarding>;
    let presenceState: OPTIONAL<PresenceStateEvent>;
    let routeingMode: OPTIONAL<RouteingMode>;
    const callbacks: $.DecodingMap = {
        "agentBusy": (_el: _Element): void => { agentBusy = $._decode_implicit<AgentBusy>(() => _decode_AgentBusy)(_el); },
        "agentLoggedOff": (_el: _Element): void => { agentLoggedOff = $._decode_implicit<AgentLoggedOff>(() => _decode_AgentLoggedOff)(_el); },
        "agentLoggedOn": (_el: _Element): void => { agentLoggedOn = $._decode_implicit<AgentLoggedOn>(() => _decode_AgentLoggedOn)(_el); },
        "agentNotReady": (_el: _Element): void => { agentNotReady = $._decode_implicit<AgentNotReady>(() => _decode_AgentNotReady)(_el); },
        "agentReady": (_el: _Element): void => { agentReady = $._decode_implicit<AgentReady>(() => _decode_AgentReady)(_el); },
        "agentWorkingAfterCall": (_el: _Element): void => { agentWorkingAfterCall = $._decode_implicit<AgentWorkingAfterCall>(() => _decode_AgentWorkingAfterCall)(_el); },
        "autoAnswer": (_el: _Element): void => { autoAnswer = $._decode_implicit<AutoAnswer>(() => _decode_AutoAnswer)(_el); },
        "autoWorkMode": (_el: _Element): void => { autoWorkMode = $._decode_implicit<AutoWorkMode>(() => _decode_AutoWorkMode)(_el); },
        "callBack": (_el: _Element): void => { callBack = $._decode_implicit<CallBackEvent>(() => _decode_CallBackEvent)(_el); },
        "callBackMessage": (_el: _Element): void => { callBackMessage = $._decode_implicit<CallBackMessageEvent>(() => _decode_CallBackMessageEvent)(_el); },
        "callerIDStatus": (_el: _Element): void => { callerIDStatus = $._decode_implicit<CallerIDStatus>(() => _decode_CallerIDStatus)(_el); },
        "doNotDisturb": (_el: _Element): void => { doNotDisturb = $._decode_implicit<DoNotDisturb>(() => _decode_DoNotDisturb)(_el); },
        "forwarding": (_el: _Element): void => { forwarding = $._decode_implicit<Forwarding>(() => _decode_Forwarding)(_el); },
        "presenceState": (_el: _Element): void => { presenceState = $._decode_implicit<PresenceStateEvent>(() => _decode_PresenceStateEvent)(_el); },
        "routeingMode": (_el: _Element): void => { routeingMode = $._decode_implicit<RouteingMode>(() => _decode_RouteingMode)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LogicalEvtsList,
        _extension_additions_list_spec_for_LogicalEvtsList,
        _root_component_type_list_2_spec_for_LogicalEvtsList,
        undefined,
    );
    return new LogicalEvtsList(
        agentBusy,
        agentLoggedOff,
        agentLoggedOn,
        agentNotReady,
        agentReady,
        agentWorkingAfterCall,
        autoAnswer,
        autoWorkMode,
        callBack,
        callBackMessage,
        callerIDStatus,
        doNotDisturb,
        forwarding,
        presenceState,
        routeingMode
    );
}; }
    return _cached_decoder_for_LogicalEvtsList(el);
}

let _cached_encoder_for_LogicalEvtsList: $.ASN1Encoder<LogicalEvtsList> | null = null;

/**
 * @summary Encodes a(n) LogicalEvtsList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogicalEvtsList, encoded as an ASN.1 Element.
 */
export
function _encode_LogicalEvtsList (value: LogicalEvtsList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LogicalEvtsList) { _cached_encoder_for_LogicalEvtsList = function (value: LogicalEvtsList, elGetter: $.ASN1Encoder<LogicalEvtsList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.agentBusy === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_AgentBusy, $.BER)(value.agentBusy, $.BER)),
            /* IF_ABSENT  */ ((value.agentLoggedOff === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_AgentLoggedOff, $.BER)(value.agentLoggedOff, $.BER)),
            /* IF_ABSENT  */ ((value.agentLoggedOn === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_AgentLoggedOn, $.BER)(value.agentLoggedOn, $.BER)),
            /* IF_ABSENT  */ ((value.agentNotReady === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_AgentNotReady, $.BER)(value.agentNotReady, $.BER)),
            /* IF_ABSENT  */ ((value.agentReady === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_AgentReady, $.BER)(value.agentReady, $.BER)),
            /* IF_ABSENT  */ ((value.agentWorkingAfterCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_AgentWorkingAfterCall, $.BER)(value.agentWorkingAfterCall, $.BER)),
            /* IF_ABSENT  */ ((value.autoAnswer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_AutoAnswer, $.BER)(value.autoAnswer, $.BER)),
            /* IF_ABSENT  */ ((value.autoWorkMode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_AutoWorkMode, $.BER)(value.autoWorkMode, $.BER)),
            /* IF_ABSENT  */ ((value.callBack === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_CallBackEvent, $.BER)(value.callBack, $.BER)),
            /* IF_ABSENT  */ ((value.callBackMessage === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_CallBackMessageEvent, $.BER)(value.callBackMessage, $.BER)),
            /* IF_ABSENT  */ ((value.callerIDStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_CallerIDStatus, $.BER)(value.callerIDStatus, $.BER)),
            /* IF_ABSENT  */ ((value.doNotDisturb === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_DoNotDisturb, $.BER)(value.doNotDisturb, $.BER)),
            /* IF_ABSENT  */ ((value.forwarding === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_Forwarding, $.BER)(value.forwarding, $.BER)),
            /* IF_ABSENT  */ ((value.presenceState === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_PresenceStateEvent, $.BER)(value.presenceState, $.BER)),
            /* IF_ABSENT  */ ((value.routeingMode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_RouteingMode, $.BER)(value.routeingMode, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LogicalEvtsList(value, elGetter);
}


/* eslint-enable */
