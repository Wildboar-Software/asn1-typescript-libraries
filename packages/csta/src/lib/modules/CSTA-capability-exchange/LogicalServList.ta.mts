/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { CallBackNonCallRel, _decode_CallBackNonCallRel, _encode_CallBackNonCallRel } from "../CSTA-capability-exchange/CallBackNonCallRel.ta.mjs";

import { CallBackMsgNonCallRel, _decode_CallBackMsgNonCallRel, _encode_CallBackMsgNonCallRel } from "../CSTA-capability-exchange/CallBackMsgNonCallRel.ta.mjs";

import { CancelCallBack, _decode_CancelCallBack, _encode_CancelCallBack } from "../CSTA-capability-exchange/CancelCallBack.ta.mjs";

import { CancelCallBackMsg, _decode_CancelCallBackMsg, _encode_CancelCallBackMsg } from "../CSTA-capability-exchange/CancelCallBackMsg.ta.mjs";

import { GetAgentState, _decode_GetAgentState, _encode_GetAgentState } from "../CSTA-capability-exchange/GetAgentState.ta.mjs";

import { GetAutoAnswer, _decode_GetAutoAnswer, _encode_GetAutoAnswer } from "../CSTA-capability-exchange/GetAutoAnswer.ta.mjs";

import { GetAutoWorkMode, _decode_GetAutoWorkMode, _encode_GetAutoWorkMode } from "../CSTA-capability-exchange/GetAutoWorkMode.ta.mjs";

import { GetCallerIDStatus, _decode_GetCallerIDStatus, _encode_GetCallerIDStatus } from "../CSTA-capability-exchange/GetCallerIDStatus.ta.mjs";

import { GetCallBack, _decode_GetCallBack, _encode_GetCallBack } from "../CSTA-capability-exchange/GetCallBack.ta.mjs";

import { GetDoNotDisturb, _decode_GetDoNotDisturb, _encode_GetDoNotDisturb } from "../CSTA-capability-exchange/GetDoNotDisturb.ta.mjs";

import { GetForwarding, _decode_GetForwarding, _encode_GetForwarding } from "../CSTA-capability-exchange/GetForwarding.ta.mjs";

import { GetLastNumberDialed, _decode_GetLastNumberDialed, _encode_GetLastNumberDialed } from "../CSTA-capability-exchange/GetLastNumberDialed.ta.mjs";

import { GetPresenceState, _decode_GetPresenceState, _encode_GetPresenceState } from "../CSTA-capability-exchange/GetPresenceState.ta.mjs";

import { GetRouteingMode, _decode_GetRouteingMode, _encode_GetRouteingMode } from "../CSTA-capability-exchange/GetRouteingMode.ta.mjs";

import { SetAgentState, _decode_SetAgentState, _encode_SetAgentState } from "../CSTA-capability-exchange/SetAgentState.ta.mjs";

import { SetAutoAnswer, _decode_SetAutoAnswer, _encode_SetAutoAnswer } from "../CSTA-capability-exchange/SetAutoAnswer.ta.mjs";

import { SetAutoWorkMode, _decode_SetAutoWorkMode, _encode_SetAutoWorkMode } from "../CSTA-capability-exchange/SetAutoWorkMode.ta.mjs";

import { SetCallerIDStatus, _decode_SetCallerIDStatus, _encode_SetCallerIDStatus } from "../CSTA-capability-exchange/SetCallerIDStatus.ta.mjs";

import { SetDoNotDisturb, _decode_SetDoNotDisturb, _encode_SetDoNotDisturb } from "../CSTA-capability-exchange/SetDoNotDisturb.ta.mjs";

import { SetForwarding, _decode_SetForwarding, _encode_SetForwarding } from "../CSTA-capability-exchange/SetForwarding.ta.mjs";

import { SetPresenceState, _decode_SetPresenceState, _encode_SetPresenceState } from "../CSTA-capability-exchange/SetPresenceState.ta.mjs";

import { SetRouteingMode, _decode_SetRouteingMode, _encode_SetRouteingMode } from "../CSTA-capability-exchange/SetRouteingMode.ta.mjs";



/**
 * @summary LogicalServList
 * @description
 * Logical Device Feature services the SF supports (ECMA-269 Annex C.14,
 * ECMA-285 §9.10). Omit unsupported services.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
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
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly callBackNonCallRel: OPTIONAL<CallBackNonCallRel>,
        /**
         * @summary `callBackMsgNonCallRel`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly callBackMsgNonCallRel: OPTIONAL<CallBackMsgNonCallRel>,
        /**
         * @summary `cancelCallBack`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly cancelCallBack: OPTIONAL<CancelCallBack>,
        /**
         * @summary `cancelCallBackMsg`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly cancelCallBackMsg: OPTIONAL<CancelCallBackMsg>,
        /**
         * @summary `getAgentState`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly getAgentState: OPTIONAL<GetAgentState>,
        /**
         * @summary `getAutoAnswer`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly getAutoAnswer: OPTIONAL<GetAutoAnswer>,
        /**
         * @summary `getAutoWorkMode`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly getAutoWorkMode: OPTIONAL<GetAutoWorkMode>,
        /**
         * @summary `getCallerIDStatus`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly getCallerIDStatus: OPTIONAL<GetCallerIDStatus>,
        /**
         * @summary `getCallBack`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly getCallBack: OPTIONAL<GetCallBack>,
        /**
         * @summary `getDoNotDisturb`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly getDoNotDisturb: OPTIONAL<GetDoNotDisturb>,
        /**
         * @summary `getForwarding`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly getForwarding: OPTIONAL<GetForwarding>,
        /**
         * @summary `getLastNumberDialed`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly getLastNumberDialed: OPTIONAL<GetLastNumberDialed>,
        /**
         * @summary `getPresenceState`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly getPresenceState: OPTIONAL<GetPresenceState>,
        /**
         * @summary `getRouteingMode`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly getRouteingMode: OPTIONAL<GetRouteingMode>,
        /**
         * @summary `setAgentState`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly setAgentState: OPTIONAL<SetAgentState>,
        /**
         * @summary `setAutoAnswer`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly setAutoAnswer: OPTIONAL<SetAutoAnswer>,
        /**
         * @summary `setAutoWorkMode`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly setAutoWorkMode: OPTIONAL<SetAutoWorkMode>,
        /**
         * @summary `setCallerIDStatus`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly setCallerIDStatus: OPTIONAL<SetCallerIDStatus>,
        /**
         * @summary `setDoNotDisturb`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly setDoNotDisturb: OPTIONAL<SetDoNotDisturb>,
        /**
         * @summary `setForwarding`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly setForwarding: OPTIONAL<SetForwarding>,
        /**
         * @summary `setPresenceState`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly setPresenceState: OPTIONAL<SetPresenceState>,
        /**
         * @summary `setRouteingMode`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
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
    new $.ComponentSpec("callBackNonCallRel", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("callBackMsgNonCallRel", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cancelCallBack", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("cancelCallBackMsg", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("getAgentState", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("getAutoAnswer", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("getAutoWorkMode", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("getCallerIDStatus", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("getCallBack", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("getDoNotDisturb", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("getForwarding", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("getLastNumberDialed", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("getPresenceState", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("getRouteingMode", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("setAgentState", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("setAutoAnswer", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("setAutoWorkMode", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("setCallerIDStatus", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("setDoNotDisturb", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("setForwarding", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("setPresenceState", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("setRouteingMode", true, $.hasTag(_TagClass.context, 18))
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
