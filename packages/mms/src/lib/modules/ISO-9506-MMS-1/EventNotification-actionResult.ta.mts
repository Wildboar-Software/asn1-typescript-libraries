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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { EventNotification_actionResult_successOrFailure, _decode_EventNotification_actionResult_successOrFailure, _encode_EventNotification_actionResult_successOrFailure } from "../ISO-9506-MMS-1/EventNotification-actionResult-successOrFailure.ta.mjs";
// export { EventNotification_actionResult_successOrFailure, _decode_EventNotification_actionResult_successOrFailure, _encode_EventNotification_actionResult_successOrFailure } from "../ISO-9506-MMS-1/EventNotification-actionResult-successOrFailure.ta.mjs";


/**
 * @summary EventNotification_actionResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventNotification-actionResult ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class EventNotification_actionResult {
    constructor (
        /**
         * @summary `eventActionName`.
         * @public
         * @readonly
         */
        readonly eventActionName: ObjectName,
        /**
         * @summary `successOrFailure`.
         * @public
         * @readonly
         */
        readonly successOrFailure: EventNotification_actionResult_successOrFailure
    ) {}

    /**
     * @summary Restructures an object into a EventNotification_actionResult
     * @description
     * 
     * This takes an `object` and converts it to a `EventNotification_actionResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventNotification_actionResult`.
     * @returns {EventNotification_actionResult}
     */
    public static _from_object (_o: { [_K in keyof (EventNotification_actionResult)]: (EventNotification_actionResult)[_K] }): EventNotification_actionResult {
        return new EventNotification_actionResult(_o.eventActionName, _o.successOrFailure);
    }


}

/**
 * @summary The Leading Root Component Types of EventNotification_actionResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventNotification_actionResult: $.ComponentSpec[] = [
    new $.ComponentSpec("eventActionName", false, $.hasAnyTag),
    new $.ComponentSpec("successOrFailure", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of EventNotification_actionResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventNotification_actionResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventNotification_actionResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventNotification_actionResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventNotification_actionResult: $.ASN1Decoder<EventNotification_actionResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventNotification_actionResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventNotification_actionResult (el: _Element): EventNotification_actionResult {
    if (!_cached_decoder_for_EventNotification_actionResult) { _cached_decoder_for_EventNotification_actionResult = function (el: _Element): EventNotification_actionResult {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("EventNotification-actionResult contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "eventActionName";
    sequence[1].name = "successOrFailure";
    let eventActionName!: ObjectName;
    let successOrFailure!: EventNotification_actionResult_successOrFailure;
    eventActionName = _decode_ObjectName(sequence[0]);
    successOrFailure = _decode_EventNotification_actionResult_successOrFailure(sequence[1]);
    return new EventNotification_actionResult(
        eventActionName,
        successOrFailure,

    );
}; }
    return _cached_decoder_for_EventNotification_actionResult(el);
}

let _cached_encoder_for_EventNotification_actionResult: $.ASN1Encoder<EventNotification_actionResult> | null = null;

/**
 * @summary Encodes a(n) EventNotification_actionResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventNotification_actionResult, encoded as an ASN.1 Element.
 */
export
function _encode_EventNotification_actionResult (value: EventNotification_actionResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventNotification_actionResult) { _cached_encoder_for_EventNotification_actionResult = function (value: EventNotification_actionResult, elGetter: $.ASN1Encoder<EventNotification_actionResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ObjectName(value.eventActionName, $.BER),
            /* REQUIRED   */ _encode_EventNotification_actionResult_successOrFailure(value.successOrFailure, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EventNotification_actionResult(value, elGetter);
}


/* eslint-enable */
