/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { AcceptCall, _decode_AcceptCall, _encode_AcceptCall } from "../CSTA-capability-exchange/AcceptCall.ta.mjs";

import { AlternateCall, _decode_AlternateCall, _encode_AlternateCall } from "../CSTA-capability-exchange/AlternateCall.ta.mjs";

import { AnswerCall, _decode_AnswerCall, _encode_AnswerCall } from "../CSTA-capability-exchange/AnswerCall.ta.mjs";

import { CallBack, _decode_CallBack, _encode_CallBack } from "../CSTA-capability-exchange/CallBack.ta.mjs";

import { CallBackMessage, _decode_CallBackMessage, _encode_CallBackMessage } from "../CSTA-capability-exchange/CallBackMessage.ta.mjs";

import { CampOnCall, _decode_CampOnCall, _encode_CampOnCall } from "../CSTA-capability-exchange/CampOnCall.ta.mjs";

import { ClearCall, _decode_ClearCall, _encode_ClearCall } from "../CSTA-capability-exchange/ClearCall.ta.mjs";

import { ClearConnection, _decode_ClearConnection, _encode_ClearConnection } from "../CSTA-capability-exchange/ClearConnection.ta.mjs";

import { ConferenceCall, _decode_ConferenceCall, _encode_ConferenceCall } from "../CSTA-capability-exchange/ConferenceCall.ta.mjs";

import { ConsultationCall, _decode_ConsultationCall, _encode_ConsultationCall } from "../CSTA-capability-exchange/ConsultationCall.ta.mjs";

import { DeflectCall, _decode_DeflectCall, _encode_DeflectCall } from "../CSTA-capability-exchange/DeflectCall.ta.mjs";

import { DialDigits, _decode_DialDigits, _encode_DialDigits } from "../CSTA-capability-exchange/DialDigits.ta.mjs";

import { DirectedPickupCall, _decode_DirectedPickupCall, _encode_DirectedPickupCall } from "../CSTA-capability-exchange/DirectedPickupCall.ta.mjs";

import { GroupPickupCall, _decode_GroupPickupCall, _encode_GroupPickupCall } from "../CSTA-capability-exchange/GroupPickupCall.ta.mjs";

import { HoldCall, _decode_HoldCall, _encode_HoldCall } from "../CSTA-capability-exchange/HoldCall.ta.mjs";

import { IntrudeCall, _decode_IntrudeCall, _encode_IntrudeCall } from "../CSTA-capability-exchange/IntrudeCall.ta.mjs";

import { JoinCall, _decode_JoinCall, _encode_JoinCall } from "../CSTA-capability-exchange/JoinCall.ta.mjs";

import { MakeCall, _decode_MakeCall, _encode_MakeCall } from "../CSTA-capability-exchange/MakeCall.ta.mjs";

import { MakeConnection, _decode_MakeConnection, _encode_MakeConnection } from "../CSTA-capability-exchange/MakeConnection.ta.mjs";

import { MakePredictiveCall, _decode_MakePredictiveCall, _encode_MakePredictiveCall } from "../CSTA-capability-exchange/MakePredictiveCall.ta.mjs";

import { ParkCall, _decode_ParkCall, _encode_ParkCall } from "../CSTA-capability-exchange/ParkCall.ta.mjs";

import { ReconnectCall, _decode_ReconnectCall, _encode_ReconnectCall } from "../CSTA-capability-exchange/ReconnectCall.ta.mjs";

import { RetrieveCall, _decode_RetrieveCall, _encode_RetrieveCall } from "../CSTA-capability-exchange/RetrieveCall.ta.mjs";

import { SendMessage, _decode_SendMessage, _encode_SendMessage } from "../CSTA-capability-exchange/SendMessage.ta.mjs";

import { SingleStepConference, _decode_SingleStepConference, _encode_SingleStepConference } from "../CSTA-capability-exchange/SingleStepConference.ta.mjs";

import { SingleStepTransfer, _decode_SingleStepTransfer, _encode_SingleStepTransfer } from "../CSTA-capability-exchange/SingleStepTransfer.ta.mjs";

import { TransferCall, _decode_TransferCall, _encode_TransferCall } from "../CSTA-capability-exchange/TransferCall.ta.mjs";



/**
 * @summary CallControlServList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallControlServList ::= SEQUENCE
 * {     acceptCall             [ 0] IMPLICIT AcceptCall             OPTIONAL,
 *     alternateCall             [ 1] IMPLICIT AlternateCall             OPTIONAL,
 *     answerCall             [ 2] IMPLICIT AnswerCall             OPTIONAL,
 *     callBack             [ 3] IMPLICIT CallBack                 OPTIONAL,
 *     callBackMessage         [ 4] IMPLICIT CallBackMessage             OPTIONAL,
 *     campOnCall             [ 5] IMPLICIT CampOnCall             OPTIONAL,
 *     clearCall             [ 6] IMPLICIT ClearCall             OPTIONAL,
 *     clearConnection         [ 7] IMPLICIT ClearConnection             OPTIONAL,
 *     conferenceCall             [ 8] IMPLICIT ConferenceCall             OPTIONAL,
 *     consultationCall         [ 9] IMPLICIT ConsultationCall             OPTIONAL,
 *     deflectCall             [10] IMPLICIT DeflectCall             OPTIONAL,
 *     dialDigits             [11] IMPLICIT DialDigits             OPTIONAL,
 *     directedPickupCall         [12] IMPLICIT DirectedPickupCall         OPTIONAL,
 *     groupPickupCall         [13] IMPLICIT GroupPickupCall             OPTIONAL,
 *     holdCall             [14] IMPLICIT HoldCall                 OPTIONAL,
 *     intrudeCall             [15] IMPLICIT IntrudeCall             OPTIONAL,
 *     joinCall             [16] IMPLICIT JoinCall                 OPTIONAL,
 *     makeCall             [17] IMPLICIT MakeCall                 OPTIONAL,
 *     makeConnection            [25] IMPLICIT MakeConnection            OPTIONAL,
 *     makePredictiveCall         [18] IMPLICIT MakePredictiveCall         OPTIONAL,
 *     parkCall             [19] IMPLICIT ParkCall                 OPTIONAL,
 *     reconnectCall             [20] IMPLICIT ReconnectCall             OPTIONAL,
 *     retrieveCall             [21] IMPLICIT RetrieveCall             OPTIONAL,
 *     sendMessage            [26] IMPLICIT SendMessage            OPTIONAL,
 *     singleStepConference         [22] IMPLICIT SingleStepConference         OPTIONAL,
 *     singleStepTransfer         [23] IMPLICIT SingleStepTransfer         OPTIONAL,
 *     transferCall             [24] IMPLICIT TransferCall             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class CallControlServList {
    constructor (
        /**
         * @summary `acceptCall`.
         * @public
         * @readonly
         */
        readonly acceptCall: OPTIONAL<AcceptCall>,
        /**
         * @summary `alternateCall`.
         * @public
         * @readonly
         */
        readonly alternateCall: OPTIONAL<AlternateCall>,
        /**
         * @summary `answerCall`.
         * @public
         * @readonly
         */
        readonly answerCall: OPTIONAL<AnswerCall>,
        /**
         * @summary `callBack`.
         * @public
         * @readonly
         */
        readonly callBack: OPTIONAL<CallBack>,
        /**
         * @summary `callBackMessage`.
         * @public
         * @readonly
         */
        readonly callBackMessage: OPTIONAL<CallBackMessage>,
        /**
         * @summary `campOnCall`.
         * @public
         * @readonly
         */
        readonly campOnCall: OPTIONAL<CampOnCall>,
        /**
         * @summary `clearCall`.
         * @public
         * @readonly
         */
        readonly clearCall: OPTIONAL<ClearCall>,
        /**
         * @summary `clearConnection`.
         * @public
         * @readonly
         */
        readonly clearConnection: OPTIONAL<ClearConnection>,
        /**
         * @summary `conferenceCall`.
         * @public
         * @readonly
         */
        readonly conferenceCall: OPTIONAL<ConferenceCall>,
        /**
         * @summary `consultationCall`.
         * @public
         * @readonly
         */
        readonly consultationCall: OPTIONAL<ConsultationCall>,
        /**
         * @summary `deflectCall`.
         * @public
         * @readonly
         */
        readonly deflectCall: OPTIONAL<DeflectCall>,
        /**
         * @summary `dialDigits`.
         * @public
         * @readonly
         */
        readonly dialDigits: OPTIONAL<DialDigits>,
        /**
         * @summary `directedPickupCall`.
         * @public
         * @readonly
         */
        readonly directedPickupCall: OPTIONAL<DirectedPickupCall>,
        /**
         * @summary `groupPickupCall`.
         * @public
         * @readonly
         */
        readonly groupPickupCall: OPTIONAL<GroupPickupCall>,
        /**
         * @summary `holdCall`.
         * @public
         * @readonly
         */
        readonly holdCall: OPTIONAL<HoldCall>,
        /**
         * @summary `intrudeCall`.
         * @public
         * @readonly
         */
        readonly intrudeCall: OPTIONAL<IntrudeCall>,
        /**
         * @summary `joinCall`.
         * @public
         * @readonly
         */
        readonly joinCall: OPTIONAL<JoinCall>,
        /**
         * @summary `makeCall`.
         * @public
         * @readonly
         */
        readonly makeCall: OPTIONAL<MakeCall>,
        /**
         * @summary `makeConnection`.
         * @public
         * @readonly
         */
        readonly makeConnection: OPTIONAL<MakeConnection>,
        /**
         * @summary `makePredictiveCall`.
         * @public
         * @readonly
         */
        readonly makePredictiveCall: OPTIONAL<MakePredictiveCall>,
        /**
         * @summary `parkCall`.
         * @public
         * @readonly
         */
        readonly parkCall: OPTIONAL<ParkCall>,
        /**
         * @summary `reconnectCall`.
         * @public
         * @readonly
         */
        readonly reconnectCall: OPTIONAL<ReconnectCall>,
        /**
         * @summary `retrieveCall`.
         * @public
         * @readonly
         */
        readonly retrieveCall: OPTIONAL<RetrieveCall>,
        /**
         * @summary `sendMessage`.
         * @public
         * @readonly
         */
        readonly sendMessage: OPTIONAL<SendMessage>,
        /**
         * @summary `singleStepConference`.
         * @public
         * @readonly
         */
        readonly singleStepConference: OPTIONAL<SingleStepConference>,
        /**
         * @summary `singleStepTransfer`.
         * @public
         * @readonly
         */
        readonly singleStepTransfer: OPTIONAL<SingleStepTransfer>,
        /**
         * @summary `transferCall`.
         * @public
         * @readonly
         */
        readonly transferCall: OPTIONAL<TransferCall>
    ) {}

    /**
     * @summary Restructures an object into a CallControlServList
     * @description
     * 
     * This takes an `object` and converts it to a `CallControlServList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallControlServList`.
     * @returns {CallControlServList}
     */
    public static _from_object (_o: { [_K in keyof (CallControlServList)]: (CallControlServList)[_K] }): CallControlServList {
        return new CallControlServList(_o.acceptCall, _o.alternateCall, _o.answerCall, _o.callBack, _o.callBackMessage, _o.campOnCall, _o.clearCall, _o.clearConnection, _o.conferenceCall, _o.consultationCall, _o.deflectCall, _o.dialDigits, _o.directedPickupCall, _o.groupPickupCall, _o.holdCall, _o.intrudeCall, _o.joinCall, _o.makeCall, _o.makeConnection, _o.makePredictiveCall, _o.parkCall, _o.reconnectCall, _o.retrieveCall, _o.sendMessage, _o.singleStepConference, _o.singleStepTransfer, _o.transferCall);
    }


}

/**
 * @summary The Leading Root Component Types of CallControlServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallControlServList: $.ComponentSpec[] = [
    new $.ComponentSpec("acceptCall", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("alternateCall", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("answerCall", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("callBack", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("callBackMessage", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("campOnCall", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("clearCall", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("clearConnection", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("conferenceCall", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("consultationCall", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("deflectCall", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("dialDigits", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("directedPickupCall", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("groupPickupCall", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("holdCall", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("intrudeCall", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("joinCall", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("makeCall", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("makeConnection", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("makePredictiveCall", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("parkCall", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("reconnectCall", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("retrieveCall", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("sendMessage", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("singleStepConference", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("singleStepTransfer", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("transferCall", true, $.hasTag(_TagClass.context, 24))
];

/**
 * @summary The Trailing Root Component Types of CallControlServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallControlServList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallControlServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallControlServList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallControlServList: $.ASN1Decoder<CallControlServList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallControlServList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallControlServList (el: _Element): CallControlServList {
    if (!_cached_decoder_for_CallControlServList) { _cached_decoder_for_CallControlServList = function (el: _Element): CallControlServList {
    let acceptCall: OPTIONAL<AcceptCall>;
    let alternateCall: OPTIONAL<AlternateCall>;
    let answerCall: OPTIONAL<AnswerCall>;
    let callBack: OPTIONAL<CallBack>;
    let callBackMessage: OPTIONAL<CallBackMessage>;
    let campOnCall: OPTIONAL<CampOnCall>;
    let clearCall: OPTIONAL<ClearCall>;
    let clearConnection: OPTIONAL<ClearConnection>;
    let conferenceCall: OPTIONAL<ConferenceCall>;
    let consultationCall: OPTIONAL<ConsultationCall>;
    let deflectCall: OPTIONAL<DeflectCall>;
    let dialDigits: OPTIONAL<DialDigits>;
    let directedPickupCall: OPTIONAL<DirectedPickupCall>;
    let groupPickupCall: OPTIONAL<GroupPickupCall>;
    let holdCall: OPTIONAL<HoldCall>;
    let intrudeCall: OPTIONAL<IntrudeCall>;
    let joinCall: OPTIONAL<JoinCall>;
    let makeCall: OPTIONAL<MakeCall>;
    let makeConnection: OPTIONAL<MakeConnection>;
    let makePredictiveCall: OPTIONAL<MakePredictiveCall>;
    let parkCall: OPTIONAL<ParkCall>;
    let reconnectCall: OPTIONAL<ReconnectCall>;
    let retrieveCall: OPTIONAL<RetrieveCall>;
    let sendMessage: OPTIONAL<SendMessage>;
    let singleStepConference: OPTIONAL<SingleStepConference>;
    let singleStepTransfer: OPTIONAL<SingleStepTransfer>;
    let transferCall: OPTIONAL<TransferCall>;
    const callbacks: $.DecodingMap = {
        "acceptCall": (_el: _Element): void => { acceptCall = $._decode_implicit<AcceptCall>(() => _decode_AcceptCall)(_el); },
        "alternateCall": (_el: _Element): void => { alternateCall = $._decode_implicit<AlternateCall>(() => _decode_AlternateCall)(_el); },
        "answerCall": (_el: _Element): void => { answerCall = $._decode_implicit<AnswerCall>(() => _decode_AnswerCall)(_el); },
        "callBack": (_el: _Element): void => { callBack = $._decode_implicit<CallBack>(() => _decode_CallBack)(_el); },
        "callBackMessage": (_el: _Element): void => { callBackMessage = $._decode_implicit<CallBackMessage>(() => _decode_CallBackMessage)(_el); },
        "campOnCall": (_el: _Element): void => { campOnCall = $._decode_implicit<CampOnCall>(() => _decode_CampOnCall)(_el); },
        "clearCall": (_el: _Element): void => { clearCall = $._decode_implicit<ClearCall>(() => _decode_ClearCall)(_el); },
        "clearConnection": (_el: _Element): void => { clearConnection = $._decode_implicit<ClearConnection>(() => _decode_ClearConnection)(_el); },
        "conferenceCall": (_el: _Element): void => { conferenceCall = $._decode_implicit<ConferenceCall>(() => _decode_ConferenceCall)(_el); },
        "consultationCall": (_el: _Element): void => { consultationCall = $._decode_implicit<ConsultationCall>(() => _decode_ConsultationCall)(_el); },
        "deflectCall": (_el: _Element): void => { deflectCall = $._decode_implicit<DeflectCall>(() => _decode_DeflectCall)(_el); },
        "dialDigits": (_el: _Element): void => { dialDigits = $._decode_implicit<DialDigits>(() => _decode_DialDigits)(_el); },
        "directedPickupCall": (_el: _Element): void => { directedPickupCall = $._decode_implicit<DirectedPickupCall>(() => _decode_DirectedPickupCall)(_el); },
        "groupPickupCall": (_el: _Element): void => { groupPickupCall = $._decode_implicit<GroupPickupCall>(() => _decode_GroupPickupCall)(_el); },
        "holdCall": (_el: _Element): void => { holdCall = $._decode_implicit<HoldCall>(() => _decode_HoldCall)(_el); },
        "intrudeCall": (_el: _Element): void => { intrudeCall = $._decode_implicit<IntrudeCall>(() => _decode_IntrudeCall)(_el); },
        "joinCall": (_el: _Element): void => { joinCall = $._decode_implicit<JoinCall>(() => _decode_JoinCall)(_el); },
        "makeCall": (_el: _Element): void => { makeCall = $._decode_implicit<MakeCall>(() => _decode_MakeCall)(_el); },
        "makeConnection": (_el: _Element): void => { makeConnection = $._decode_implicit<MakeConnection>(() => _decode_MakeConnection)(_el); },
        "makePredictiveCall": (_el: _Element): void => { makePredictiveCall = $._decode_implicit<MakePredictiveCall>(() => _decode_MakePredictiveCall)(_el); },
        "parkCall": (_el: _Element): void => { parkCall = $._decode_implicit<ParkCall>(() => _decode_ParkCall)(_el); },
        "reconnectCall": (_el: _Element): void => { reconnectCall = $._decode_implicit<ReconnectCall>(() => _decode_ReconnectCall)(_el); },
        "retrieveCall": (_el: _Element): void => { retrieveCall = $._decode_implicit<RetrieveCall>(() => _decode_RetrieveCall)(_el); },
        "sendMessage": (_el: _Element): void => { sendMessage = $._decode_implicit<SendMessage>(() => _decode_SendMessage)(_el); },
        "singleStepConference": (_el: _Element): void => { singleStepConference = $._decode_implicit<SingleStepConference>(() => _decode_SingleStepConference)(_el); },
        "singleStepTransfer": (_el: _Element): void => { singleStepTransfer = $._decode_implicit<SingleStepTransfer>(() => _decode_SingleStepTransfer)(_el); },
        "transferCall": (_el: _Element): void => { transferCall = $._decode_implicit<TransferCall>(() => _decode_TransferCall)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallControlServList,
        _extension_additions_list_spec_for_CallControlServList,
        _root_component_type_list_2_spec_for_CallControlServList,
        undefined,
    );
    return new CallControlServList(
        acceptCall,
        alternateCall,
        answerCall,
        callBack,
        callBackMessage,
        campOnCall,
        clearCall,
        clearConnection,
        conferenceCall,
        consultationCall,
        deflectCall,
        dialDigits,
        directedPickupCall,
        groupPickupCall,
        holdCall,
        intrudeCall,
        joinCall,
        makeCall,
        makeConnection,
        makePredictiveCall,
        parkCall,
        reconnectCall,
        retrieveCall,
        sendMessage,
        singleStepConference,
        singleStepTransfer,
        transferCall
    );
}; }
    return _cached_decoder_for_CallControlServList(el);
}

let _cached_encoder_for_CallControlServList: $.ASN1Encoder<CallControlServList> | null = null;

/**
 * @summary Encodes a(n) CallControlServList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallControlServList, encoded as an ASN.1 Element.
 */
export
function _encode_CallControlServList (value: CallControlServList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallControlServList) { _cached_encoder_for_CallControlServList = function (value: CallControlServList, elGetter: $.ASN1Encoder<CallControlServList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.acceptCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_AcceptCall, $.BER)(value.acceptCall, $.BER)),
            /* IF_ABSENT  */ ((value.alternateCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_AlternateCall, $.BER)(value.alternateCall, $.BER)),
            /* IF_ABSENT  */ ((value.answerCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_AnswerCall, $.BER)(value.answerCall, $.BER)),
            /* IF_ABSENT  */ ((value.callBack === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_CallBack, $.BER)(value.callBack, $.BER)),
            /* IF_ABSENT  */ ((value.callBackMessage === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_CallBackMessage, $.BER)(value.callBackMessage, $.BER)),
            /* IF_ABSENT  */ ((value.campOnCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_CampOnCall, $.BER)(value.campOnCall, $.BER)),
            /* IF_ABSENT  */ ((value.clearCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_ClearCall, $.BER)(value.clearCall, $.BER)),
            /* IF_ABSENT  */ ((value.clearConnection === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_ClearConnection, $.BER)(value.clearConnection, $.BER)),
            /* IF_ABSENT  */ ((value.conferenceCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_ConferenceCall, $.BER)(value.conferenceCall, $.BER)),
            /* IF_ABSENT  */ ((value.consultationCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_ConsultationCall, $.BER)(value.consultationCall, $.BER)),
            /* IF_ABSENT  */ ((value.deflectCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_DeflectCall, $.BER)(value.deflectCall, $.BER)),
            /* IF_ABSENT  */ ((value.dialDigits === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_DialDigits, $.BER)(value.dialDigits, $.BER)),
            /* IF_ABSENT  */ ((value.directedPickupCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_DirectedPickupCall, $.BER)(value.directedPickupCall, $.BER)),
            /* IF_ABSENT  */ ((value.groupPickupCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_GroupPickupCall, $.BER)(value.groupPickupCall, $.BER)),
            /* IF_ABSENT  */ ((value.holdCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_HoldCall, $.BER)(value.holdCall, $.BER)),
            /* IF_ABSENT  */ ((value.intrudeCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_IntrudeCall, $.BER)(value.intrudeCall, $.BER)),
            /* IF_ABSENT  */ ((value.joinCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_JoinCall, $.BER)(value.joinCall, $.BER)),
            /* IF_ABSENT  */ ((value.makeCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_MakeCall, $.BER)(value.makeCall, $.BER)),
            /* IF_ABSENT  */ ((value.makeConnection === undefined) ? undefined : $._encode_implicit(_TagClass.context, 25, () => _encode_MakeConnection, $.BER)(value.makeConnection, $.BER)),
            /* IF_ABSENT  */ ((value.makePredictiveCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => _encode_MakePredictiveCall, $.BER)(value.makePredictiveCall, $.BER)),
            /* IF_ABSENT  */ ((value.parkCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => _encode_ParkCall, $.BER)(value.parkCall, $.BER)),
            /* IF_ABSENT  */ ((value.reconnectCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => _encode_ReconnectCall, $.BER)(value.reconnectCall, $.BER)),
            /* IF_ABSENT  */ ((value.retrieveCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => _encode_RetrieveCall, $.BER)(value.retrieveCall, $.BER)),
            /* IF_ABSENT  */ ((value.sendMessage === undefined) ? undefined : $._encode_implicit(_TagClass.context, 26, () => _encode_SendMessage, $.BER)(value.sendMessage, $.BER)),
            /* IF_ABSENT  */ ((value.singleStepConference === undefined) ? undefined : $._encode_implicit(_TagClass.context, 22, () => _encode_SingleStepConference, $.BER)(value.singleStepConference, $.BER)),
            /* IF_ABSENT  */ ((value.singleStepTransfer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 23, () => _encode_SingleStepTransfer, $.BER)(value.singleStepTransfer, $.BER)),
            /* IF_ABSENT  */ ((value.transferCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 24, () => _encode_TransferCall, $.BER)(value.transferCall, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CallControlServList(value, elGetter);
}


/* eslint-enable */
