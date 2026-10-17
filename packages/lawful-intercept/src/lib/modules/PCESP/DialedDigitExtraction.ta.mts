/* eslint-disable */
import {
    VisibleString,
    ASN1ConstructionError as _ConstructionError,
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


/**
 * @summary DialedDigitExtraction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DialedDigitExtraction ::= SEQUENCE {
 *     caseId                  [0] CaseId,
 *     accessingElementId      [1] AccessingElementId,
 *     eventTime               [2] EventTime,
 *     callId                  [3] CallId,
 *     digits                  [4] VisibleString (SIZE (1..32, ...)),
 *     -- string consisting of digits representing
 *     -- Dual Tone Multi Frequency (DTMF) tones
 *     -- having values from the following numbers,
 *     -- letters, and symbols:
 *     -- '0", '1", '2", '3", '4", '5", '6", '7",
 *     -- '8", '9", '#", '*", 'A", 'B", 'C", 'D".
 *     -- Example: '123AB" or '*66" or '345#"
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class DialedDigitExtraction {
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
     * @summary `digits`.
     * @public
     * @readonly
     */
    readonly digits: VisibleString;
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
        digits: VisibleString,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.caseId = caseId;
        this.accessingElementId = accessingElementId;
        this.eventTime = eventTime;
        this.callId = callId;
        this.digits = digits;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a DialedDigitExtraction
     * @description
     * 
     * This takes an `object` and converts it to a `DialedDigitExtraction`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DialedDigitExtraction`.
     * @returns {DialedDigitExtraction}
     */
    public static _from_object (_o: { [_K in keyof (DialedDigitExtraction)]: (DialedDigitExtraction)[_K] }): DialedDigitExtraction {
        return new DialedDigitExtraction(_o.caseId, _o.accessingElementId, _o.eventTime, _o.callId, _o.digits, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of DialedDigitExtraction
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DialedDigitExtraction: $.ComponentSpec[] = [
    new $.ComponentSpec("caseId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("accessingElementId", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eventTime", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("callId", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("digits", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of DialedDigitExtraction
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DialedDigitExtraction: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DialedDigitExtraction
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DialedDigitExtraction: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DialedDigitExtraction: $.ASN1Decoder<DialedDigitExtraction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DialedDigitExtraction
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DialedDigitExtraction (el: _Element): DialedDigitExtraction {
    if (!_cached_decoder_for_DialedDigitExtraction) { _cached_decoder_for_DialedDigitExtraction = function (el: _Element): DialedDigitExtraction {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 5) {
        throw new _ConstructionError("DialedDigitExtraction contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "caseId";
    sequence[1].name = "accessingElementId";
    sequence[2].name = "eventTime";
    sequence[3].name = "callId";
    sequence[4].name = "digits";
    let caseId!: CaseId;
    let accessingElementId!: AccessingElementId;
    let eventTime!: EventTime;
    let callId!: CallId;
    let digits!: VisibleString;
    caseId = $._decode_implicit<CaseId>(() => _decode_CaseId)(sequence[0]);
    accessingElementId = $._decode_implicit<AccessingElementId>(() => _decode_AccessingElementId)(sequence[1]);
    eventTime = $._decode_implicit<EventTime>(() => _decode_EventTime)(sequence[2]);
    callId = $._decode_implicit<CallId>(() => _decode_CallId)(sequence[3]);
    digits = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(sequence[4]);
    return new DialedDigitExtraction(
        caseId,
        accessingElementId,
        eventTime,
        callId,
        digits,
        sequence.slice(5),
    );
}; }
    return _cached_decoder_for_DialedDigitExtraction(el);
}

let _cached_encoder_for_DialedDigitExtraction: $.ASN1Encoder<DialedDigitExtraction> | null = null;

/**
 * @summary Encodes a(n) DialedDigitExtraction into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DialedDigitExtraction, encoded as an ASN.1 Element.
 */
export
function _encode_DialedDigitExtraction (value: DialedDigitExtraction, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DialedDigitExtraction) { _cached_encoder_for_DialedDigitExtraction = function (value: DialedDigitExtraction, elGetter: $.ASN1Encoder<DialedDigitExtraction>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CaseId, $.BER)(value.caseId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AccessingElementId, $.BER)(value.accessingElementId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EventTime, $.BER)(value.eventTime, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_CallId, $.BER)(value.callId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeVisibleString, $.BER)(value.digits, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DialedDigitExtraction(value, elGetter);
}


/* eslint-enable */
