/* eslint-disable */
import {
    OPTIONAL,
    VisibleString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CaseId, _decode_CaseId, _encode_CaseId } from "../PCESP/CaseId.ta.mjs";
// export { CaseId, _decode_CaseId, _encode_CaseId } from "../PCESP/CaseId.ta.mjs";
import { AccessingElementId, _decode_AccessingElementId, _encode_AccessingElementId } from "../PCESP/AccessingElementId.ta.mjs";
// export { AccessingElementId, _decode_AccessingElementId, _encode_AccessingElementId } from "../PCESP/AccessingElementId.ta.mjs";
import { EventTime, _decode_EventTime, _encode_EventTime } from "../PCESP/EventTime.ta.mjs";
// export { EventTime, _decode_EventTime, _encode_EventTime } from "../PCESP/EventTime.ta.mjs";
import { CallId, _decode_CallId, _encode_CallId } from "../PCESP/CallId.ta.mjs";
// export { CallId, _decode_CallId, _encode_CallId } from "../PCESP/CallId.ta.mjs";
import { AlertingSignal, _decode_AlertingSignal, _encode_AlertingSignal, _enum_for_AlertingSignal } from "../PCESP/AlertingSignal.ta.mjs";
// export { AlertingSignal, _enum_for_AlertingSignal, AlertingSignal_notUsed /* IMPORTED_LONG_ENUMERATION_ITEM */, AlertingSignal_alertingPattern0 /* IMPORTED_LONG_ENUMERATION_ITEM */, alertingPattern0 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertingSignal_alertingPattern1 /* IMPORTED_LONG_ENUMERATION_ITEM */, alertingPattern1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertingSignal_alertingPattern2 /* IMPORTED_LONG_ENUMERATION_ITEM */, alertingPattern2 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertingSignal_alertingPattern3 /* IMPORTED_LONG_ENUMERATION_ITEM */, alertingPattern3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertingSignal_alertingPattern4 /* IMPORTED_LONG_ENUMERATION_ITEM */, alertingPattern4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertingSignal_callWaitingPattern1 /* IMPORTED_LONG_ENUMERATION_ITEM */, callWaitingPattern1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertingSignal_callWaitingPattern2 /* IMPORTED_LONG_ENUMERATION_ITEM */, callWaitingPattern2 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertingSignal_callWaitingPattern3 /* IMPORTED_LONG_ENUMERATION_ITEM */, callWaitingPattern3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertingSignal_callWaitingPattern4 /* IMPORTED_LONG_ENUMERATION_ITEM */, callWaitingPattern4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertingSignal_bargeInTone /* IMPORTED_LONG_ENUMERATION_ITEM */, bargeInTone /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertingSignal_alertingPattern5 /* IMPORTED_LONG_ENUMERATION_ITEM */, alertingPattern5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertingSignal_alertingPattern6 /* IMPORTED_LONG_ENUMERATION_ITEM */, alertingPattern6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertingSignal_alertingPattern7 /* IMPORTED_LONG_ENUMERATION_ITEM */, alertingPattern7 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertingSignal_alertingPattern8 /* IMPORTED_LONG_ENUMERATION_ITEM */, alertingPattern8 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertingSignal_alertingPattern9 /* IMPORTED_LONG_ENUMERATION_ITEM */, alertingPattern9 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AlertingSignal, _encode_AlertingSignal } from "../PCESP/AlertingSignal.ta.mjs";
import { AudibleSignal, _decode_AudibleSignal, _encode_AudibleSignal, _enum_for_AudibleSignal } from "../PCESP/AudibleSignal.ta.mjs";
// export { AudibleSignal, _enum_for_AudibleSignal, AudibleSignal_notUsed /* IMPORTED_LONG_ENUMERATION_ITEM */, AudibleSignal_dialTone /* IMPORTED_LONG_ENUMERATION_ITEM */, dialTone /* IMPORTED_SHORT_ENUMERATION_ITEM */, AudibleSignal_recallDialTone /* IMPORTED_LONG_ENUMERATION_ITEM */, recallDialTone /* IMPORTED_SHORT_ENUMERATION_ITEM */, AudibleSignal_ringbackTone /* IMPORTED_LONG_ENUMERATION_ITEM */, ringbackTone /* IMPORTED_SHORT_ENUMERATION_ITEM */, AudibleSignal_reorderTone /* IMPORTED_LONG_ENUMERATION_ITEM */, reorderTone /* IMPORTED_SHORT_ENUMERATION_ITEM */, AudibleSignal_busyTone /* IMPORTED_LONG_ENUMERATION_ITEM */, busyTone /* IMPORTED_SHORT_ENUMERATION_ITEM */, AudibleSignal_confirmationTone /* IMPORTED_LONG_ENUMERATION_ITEM */, confirmationTone /* IMPORTED_SHORT_ENUMERATION_ITEM */, AudibleSignal_expensiveRouteTone /* IMPORTED_LONG_ENUMERATION_ITEM */, expensiveRouteTone /* IMPORTED_SHORT_ENUMERATION_ITEM */, AudibleSignal_messageWaitingTone /* IMPORTED_LONG_ENUMERATION_ITEM */, messageWaitingTone /* IMPORTED_SHORT_ENUMERATION_ITEM */, AudibleSignal_receiverOffHookTone /* IMPORTED_LONG_ENUMERATION_ITEM */, receiverOffHookTone /* IMPORTED_SHORT_ENUMERATION_ITEM */, AudibleSignal_specialInfoTone /* IMPORTED_LONG_ENUMERATION_ITEM */, specialInfoTone /* IMPORTED_SHORT_ENUMERATION_ITEM */, AudibleSignal_denialTone /* IMPORTED_LONG_ENUMERATION_ITEM */, denialTone /* IMPORTED_SHORT_ENUMERATION_ITEM */, AudibleSignal_interceptTone /* IMPORTED_LONG_ENUMERATION_ITEM */, interceptTone /* IMPORTED_SHORT_ENUMERATION_ITEM */, AudibleSignal_answerTone /* IMPORTED_LONG_ENUMERATION_ITEM */, answerTone /* IMPORTED_SHORT_ENUMERATION_ITEM */, AudibleSignal_tonesOff /* IMPORTED_LONG_ENUMERATION_ITEM */, tonesOff /* IMPORTED_SHORT_ENUMERATION_ITEM */, AudibleSignal_pipTone /* IMPORTED_LONG_ENUMERATION_ITEM */, pipTone /* IMPORTED_SHORT_ENUMERATION_ITEM */, AudibleSignal_abbreviatedIntercept /* IMPORTED_LONG_ENUMERATION_ITEM */, abbreviatedIntercept /* IMPORTED_SHORT_ENUMERATION_ITEM */, AudibleSignal_abbreviatedCongestion /* IMPORTED_LONG_ENUMERATION_ITEM */, abbreviatedCongestion /* IMPORTED_SHORT_ENUMERATION_ITEM */, AudibleSignal_warningTone /* IMPORTED_LONG_ENUMERATION_ITEM */, warningTone /* IMPORTED_SHORT_ENUMERATION_ITEM */, AudibleSignal_dialToneBurst /* IMPORTED_LONG_ENUMERATION_ITEM */, dialToneBurst /* IMPORTED_SHORT_ENUMERATION_ITEM */, AudibleSignal_numberUnObtainableTone /* IMPORTED_LONG_ENUMERATION_ITEM */, numberUnObtainableTone /* IMPORTED_SHORT_ENUMERATION_ITEM */, AudibleSignal_authenticationFailureTone /* IMPORTED_LONG_ENUMERATION_ITEM */, authenticationFailureTone /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AudibleSignal, _encode_AudibleSignal } from "../PCESP/AudibleSignal.ta.mjs";
import { TerminalDisplayInfo, _decode_TerminalDisplayInfo, _encode_TerminalDisplayInfo } from "../PCESP/TerminalDisplayInfo.ta.mjs";
// export { TerminalDisplayInfo, _decode_TerminalDisplayInfo, _encode_TerminalDisplayInfo } from "../PCESP/TerminalDisplayInfo.ta.mjs";
import { PartyId, _decode_PartyId, _encode_PartyId } from "../PCESP/PartyId.ta.mjs";
// export { PartyId, _decode_PartyId, _encode_PartyId } from "../PCESP/PartyId.ta.mjs";


/**
 * @summary NetworkSignal
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkSignal ::= SEQUENCE {
 *     caseId                  [0] CaseId,
 *     accessingElementId      [1] AccessingElementId,
 *     eventTime               [2] EventTime,
 *     callId                  [3] CallId,
 *     -- Signal
 *     -- The following four parameters are used to report
 *     -- information regarding network-generated signals.
 *     -- Include at least one of the following four
 *     -- parameters to identify the network-generated signal
 *     -- being reported.
 *     alertingSignal          [4] AlertingSignal OPTIONAL,
 *     subjectAudibleSignal    [5] AudibleSignal OPTIONAL,
 *     terminalDisplayInfo     [6] TerminalDisplayInfo OPTIONAL,
 *     other                   [7] VisibleString (SIZE (1..128, ...)) OPTIONAL,
 *     -- Can be used to report undefined network signals
 *     signaledToPartyId       [8] PartyId,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class NetworkSignal {
    /**
     * @summary `caseId`.
     * @public
     * @readonly
     */
    readonly caseId: CaseId;
    /**
     * @summary `accessingElementId`.
     * @public
     * @readonly
     */
    readonly accessingElementId: AccessingElementId;
    /**
     * @summary `eventTime`.
     * @public
     * @readonly
     */
    readonly eventTime: EventTime;
    /**
     * @summary `callId`.
     * @public
     * @readonly
     */
    readonly callId: CallId;
    /**
     * @summary `alertingSignal`.
     * @public
     * @readonly
     */
    readonly alertingSignal: OPTIONAL<AlertingSignal>;
    /**
     * @summary `subjectAudibleSignal`.
     * @public
     * @readonly
     */
    readonly subjectAudibleSignal: OPTIONAL<AudibleSignal>;
    /**
     * @summary `terminalDisplayInfo`.
     * @public
     * @readonly
     */
    readonly terminalDisplayInfo: OPTIONAL<TerminalDisplayInfo>;
    /**
     * @summary `other`.
     * @public
     * @readonly
     */
    readonly other: OPTIONAL<VisibleString>;
    /**
     * @summary `signaledToPartyId`.
     * @public
     * @readonly
     */
    readonly signaledToPartyId: PartyId;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        caseId: CaseId,
        accessingElementId: AccessingElementId,
        eventTime: EventTime,
        callId: CallId,
        alertingSignal: OPTIONAL<AlertingSignal>,
        subjectAudibleSignal: OPTIONAL<AudibleSignal>,
        terminalDisplayInfo: OPTIONAL<TerminalDisplayInfo>,
        other: OPTIONAL<VisibleString>,
        signaledToPartyId: PartyId,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.caseId = caseId;
        this.accessingElementId = accessingElementId;
        this.eventTime = eventTime;
        this.callId = callId;
        this.alertingSignal = alertingSignal;
        this.subjectAudibleSignal = subjectAudibleSignal;
        this.terminalDisplayInfo = terminalDisplayInfo;
        this.other = other;
        this.signaledToPartyId = signaledToPartyId;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a NetworkSignal
     * @description
     * 
     * This takes an `object` and converts it to a `NetworkSignal`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NetworkSignal`.
     * @returns {NetworkSignal}
     */
    public static _from_object (_o: { [_K in keyof (NetworkSignal)]: (NetworkSignal)[_K] }): NetworkSignal {
        return new NetworkSignal(_o.caseId, _o.accessingElementId, _o.eventTime, _o.callId, _o.alertingSignal, _o.subjectAudibleSignal, _o.terminalDisplayInfo, _o.other, _o.signaledToPartyId, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `alertingSignal`
         * @public
         * @static
         */

    public static _enum_for_alertingSignal = _enum_for_AlertingSignal;        /**
         * @summary The enum used as the type of the component `subjectAudibleSignal`
         * @public
         * @static
         */

    public static _enum_for_subjectAudibleSignal = _enum_for_AudibleSignal;
}

/**
 * @summary The Leading Root Component Types of NetworkSignal
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NetworkSignal: $.ComponentSpec[] = [
    new $.ComponentSpec("caseId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("accessingElementId", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eventTime", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("callId", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("alertingSignal", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("subjectAudibleSignal", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("terminalDisplayInfo", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("other", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("signaledToPartyId", false, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of NetworkSignal
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NetworkSignal: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NetworkSignal
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NetworkSignal: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NetworkSignal: $.ASN1Decoder<NetworkSignal> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NetworkSignal
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NetworkSignal (el: _Element): NetworkSignal {
    if (!_cached_decoder_for_NetworkSignal) { _cached_decoder_for_NetworkSignal = function (el: _Element): NetworkSignal {
    let caseId!: CaseId;
    let accessingElementId!: AccessingElementId;
    let eventTime!: EventTime;
    let callId!: CallId;
    let alertingSignal: OPTIONAL<AlertingSignal>;
    let subjectAudibleSignal: OPTIONAL<AudibleSignal>;
    let terminalDisplayInfo: OPTIONAL<TerminalDisplayInfo>;
    let other: OPTIONAL<VisibleString>;
    let signaledToPartyId!: PartyId;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "caseId": (_el: _Element): void => { caseId = $._decode_implicit<CaseId>(() => _decode_CaseId)(_el); },
        "accessingElementId": (_el: _Element): void => { accessingElementId = $._decode_implicit<AccessingElementId>(() => _decode_AccessingElementId)(_el); },
        "eventTime": (_el: _Element): void => { eventTime = $._decode_implicit<EventTime>(() => _decode_EventTime)(_el); },
        "callId": (_el: _Element): void => { callId = $._decode_implicit<CallId>(() => _decode_CallId)(_el); },
        "alertingSignal": (_el: _Element): void => { alertingSignal = $._decode_implicit<AlertingSignal>(() => _decode_AlertingSignal)(_el); },
        "subjectAudibleSignal": (_el: _Element): void => { subjectAudibleSignal = $._decode_implicit<AudibleSignal>(() => _decode_AudibleSignal)(_el); },
        "terminalDisplayInfo": (_el: _Element): void => { terminalDisplayInfo = $._decode_implicit<TerminalDisplayInfo>(() => _decode_TerminalDisplayInfo)(_el); },
        "other": (_el: _Element): void => { other = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); },
        "signaledToPartyId": (_el: _Element): void => { signaledToPartyId = $._decode_implicit<PartyId>(() => _decode_PartyId)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NetworkSignal,
        _extension_additions_list_spec_for_NetworkSignal,
        _root_component_type_list_2_spec_for_NetworkSignal,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new NetworkSignal(
        caseId,
        accessingElementId,
        eventTime,
        callId,
        alertingSignal,
        subjectAudibleSignal,
        terminalDisplayInfo,
        other,
        signaledToPartyId,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_NetworkSignal(el);
}

let _cached_encoder_for_NetworkSignal: $.ASN1Encoder<NetworkSignal> | null = null;

/**
 * @summary Encodes a(n) NetworkSignal into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NetworkSignal, encoded as an ASN.1 Element.
 */
export
function _encode_NetworkSignal (value: NetworkSignal, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NetworkSignal) { _cached_encoder_for_NetworkSignal = function (value: NetworkSignal, elGetter: $.ASN1Encoder<NetworkSignal>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(9 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CaseId, $.BER)(value.caseId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AccessingElementId, $.BER)(value.accessingElementId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EventTime, $.BER)(value.eventTime, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_CallId, $.BER)(value.callId, $.BER);
    if (value.alertingSignal !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_AlertingSignal, $.BER)(value.alertingSignal, $.BER);
    }
    if (value.subjectAudibleSignal !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_AudibleSignal, $.BER)(value.subjectAudibleSignal, $.BER);
    }
    if (value.terminalDisplayInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_TerminalDisplayInfo, $.BER)(value.terminalDisplayInfo, $.BER);
    }
    if (value.other !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeVisibleString, $.BER)(value.other, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_PartyId, $.BER)(value.signaledToPartyId, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_NetworkSignal(value, elGetter);
}


/* eslint-enable */
