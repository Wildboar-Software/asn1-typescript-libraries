/* eslint-disable */
import {
    OPTIONAL,
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
import { SubjectSignal_signal, _decode_SubjectSignal_signal, _encode_SubjectSignal_signal } from "../PCESP/SubjectSignal-signal.ta.mjs";
// export { SubjectSignal_signal, _decode_SubjectSignal_signal, _encode_SubjectSignal_signal } from "../PCESP/SubjectSignal-signal.ta.mjs";
import { PartyId, _decode_PartyId, _encode_PartyId } from "../PCESP/PartyId.ta.mjs";
// export { PartyId, _decode_PartyId, _encode_PartyId } from "../PCESP/PartyId.ta.mjs";


/**
 * @summary SubjectSignal
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubjectSignal ::= SEQUENCE {
 *     caseId                  [0] CaseId,
 *     accessingElementId      [1] AccessingElementId,
 *     eventTime               [2] EventTime,
 *     callId                  [3] CallId OPTIONAL,
 *     signal                  [4] SEQUENCE {
 *         -- The following four parameters are used to report
 *         -- information regarding subject-initiated dialing and
 *         -- signaling. Include at least one of the following four
 *         -- parameters to identify the subject- initiated dialing
 *         -- and signaling information being reported.
 *         switchhookFlash             [0] VisibleString (SIZE (1..128, ...)) OPTIONAL,
 *         dialedDigits                [1] VisibleString (SIZE (1..128, ...)) OPTIONAL,
 *         featureKey                  [2] VisibleString (SIZE (1..128, ...)) OPTIONAL,
 *         otherSignalingInformation   [3] VisibleString (SIZE (1..128, ...)) OPTIONAL,
 *         -- Can be used to report undefined subject signals
 *         ...
 *     },
 *     signaledFromPartyId     [5] PartyId,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class SubjectSignal {
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
    readonly callId: OPTIONAL<CallId>;
    /**
     * @summary `signal`.
     * @public
     * @readonly
     */
    readonly signal: SubjectSignal_signal;
    /**
     * @summary `signaledFromPartyId`.
     * @public
     * @readonly
     */
    readonly signaledFromPartyId: PartyId;
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
        callId: OPTIONAL<CallId>,
        signal: SubjectSignal_signal,
        signaledFromPartyId: PartyId,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.caseId = caseId;
        this.accessingElementId = accessingElementId;
        this.eventTime = eventTime;
        this.callId = callId;
        this.signal = signal;
        this.signaledFromPartyId = signaledFromPartyId;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a SubjectSignal
     * @description
     * 
     * This takes an `object` and converts it to a `SubjectSignal`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SubjectSignal`.
     * @returns {SubjectSignal}
     */
    public static _from_object (_o: { [_K in keyof (SubjectSignal)]: (SubjectSignal)[_K] }): SubjectSignal {
        return new SubjectSignal(_o.caseId, _o.accessingElementId, _o.eventTime, _o.callId, _o.signal, _o.signaledFromPartyId, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SubjectSignal
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SubjectSignal: $.ComponentSpec[] = [
    new $.ComponentSpec("caseId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("accessingElementId", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eventTime", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("callId", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("signal", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("signaledFromPartyId", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of SubjectSignal
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SubjectSignal: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SubjectSignal
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SubjectSignal: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SubjectSignal: $.ASN1Decoder<SubjectSignal> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubjectSignal
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubjectSignal (el: _Element): SubjectSignal {
    if (!_cached_decoder_for_SubjectSignal) { _cached_decoder_for_SubjectSignal = function (el: _Element): SubjectSignal {
    let caseId!: CaseId;
    let accessingElementId!: AccessingElementId;
    let eventTime!: EventTime;
    let callId: OPTIONAL<CallId>;
    let signal!: SubjectSignal_signal;
    let signaledFromPartyId!: PartyId;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "caseId": (_el: _Element): void => { caseId = $._decode_implicit<CaseId>(() => _decode_CaseId)(_el); },
        "accessingElementId": (_el: _Element): void => { accessingElementId = $._decode_implicit<AccessingElementId>(() => _decode_AccessingElementId)(_el); },
        "eventTime": (_el: _Element): void => { eventTime = $._decode_implicit<EventTime>(() => _decode_EventTime)(_el); },
        "callId": (_el: _Element): void => { callId = $._decode_implicit<CallId>(() => _decode_CallId)(_el); },
        "signal": (_el: _Element): void => { signal = $._decode_implicit<SubjectSignal_signal>(() => _decode_SubjectSignal_signal)(_el); },
        "signaledFromPartyId": (_el: _Element): void => { signaledFromPartyId = $._decode_implicit<PartyId>(() => _decode_PartyId)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SubjectSignal,
        _extension_additions_list_spec_for_SubjectSignal,
        _root_component_type_list_2_spec_for_SubjectSignal,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SubjectSignal(
        caseId,
        accessingElementId,
        eventTime,
        callId,
        signal,
        signaledFromPartyId,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SubjectSignal(el);
}

let _cached_encoder_for_SubjectSignal: $.ASN1Encoder<SubjectSignal> | null = null;

/**
 * @summary Encodes a(n) SubjectSignal into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubjectSignal, encoded as an ASN.1 Element.
 */
export
function _encode_SubjectSignal (value: SubjectSignal, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubjectSignal) { _cached_encoder_for_SubjectSignal = function (value: SubjectSignal, elGetter: $.ASN1Encoder<SubjectSignal>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(6 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CaseId, $.BER)(value.caseId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AccessingElementId, $.BER)(value.accessingElementId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EventTime, $.BER)(value.eventTime, $.BER);
    if (value.callId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_CallId, $.BER)(value.callId, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_SubjectSignal_signal, $.BER)(value.signal, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_PartyId, $.BER)(value.signaledFromPartyId, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SubjectSignal(value, elGetter);
}


/* eslint-enable */
