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
import { EventParamValueV1, _decode_EventParamValueV1, _encode_EventParamValueV1 } from "../H238V1-SUPPORT/EventParamValueV1.ta.mjs";
// export { EventParamValueV1, _decode_EventParamValueV1, _encode_EventParamValueV1 } from "../H238V1-SUPPORT/EventParamValueV1.ta.mjs";


/**
 * @summary EventParameterV1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventParameterV1 ::= SEQUENCE
 *     {
 *         eventParamterName        [0] EventParameterName,
 *         value                    [1] EventParamValueV1
 *     }
 * ```
 * 
 * @class
 */
export
class EventParameterV1 {
    constructor (
        /**
         * @summary `eventParamterName`.
         * @public
         * @readonly
         */
        readonly eventParamterName: EventParameterName,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: EventParamValueV1
    ) {}

    /**
     * @summary Restructures an object into a EventParameterV1
     * @description
     * 
     * This takes an `object` and converts it to a `EventParameterV1`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventParameterV1`.
     * @returns {EventParameterV1}
     */
    public static _from_object (_o: { [_K in keyof (EventParameterV1)]: (EventParameterV1)[_K] }): EventParameterV1 {
        return new EventParameterV1(_o.eventParamterName, _o.value);
    }


}

/**
 * @summary The Leading Root Component Types of EventParameterV1
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventParameterV1: $.ComponentSpec[] = [
    /* FIXME: eventParamterName COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("value", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of EventParameterV1
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventParameterV1: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventParameterV1
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventParameterV1: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventParameterV1: $.ASN1Decoder<EventParameterV1> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventParameterV1
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventParameterV1 (el: _Element): EventParameterV1 {
    if (!_cached_decoder_for_EventParameterV1) { _cached_decoder_for_EventParameterV1 = function (el: _Element): EventParameterV1 {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("EventParameterV1 contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "eventParamterName";
    sequence[1].name = "value";
    let eventParamterName!: EventParameterName;
    let value!: EventParamValueV1;
    eventParamterName = $._decode_implicit<EventParameterName>(() => _decode_EventParameterName)(sequence[0]);
    value = $._decode_implicit<EventParamValueV1>(() => _decode_EventParamValueV1)(sequence[1]);
    return new EventParameterV1(
        eventParamterName,
        value,

    );
}; }
    return _cached_decoder_for_EventParameterV1(el);
}

let _cached_encoder_for_EventParameterV1: $.ASN1Encoder<EventParameterV1> | null = null;

/**
 * @summary Encodes a(n) EventParameterV1 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventParameterV1, encoded as an ASN.1 Element.
 */
export
function _encode_EventParameterV1 (value: EventParameterV1, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventParameterV1) { _cached_encoder_for_EventParameterV1 = function (value: EventParameterV1, elGetter: $.ASN1Encoder<EventParameterV1>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_EventParameterName, $.BER)(value.eventParamterName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_EventParamValueV1, $.BER)(value.value, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EventParameterV1(value, elGetter);
}


/* eslint-enable */
