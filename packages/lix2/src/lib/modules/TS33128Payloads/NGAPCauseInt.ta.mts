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
import { NGAPCauseGroupInt, _decode_NGAPCauseGroupInt, _encode_NGAPCauseGroupInt } from "../TS33128Payloads/NGAPCauseGroupInt.ta.mjs";
// export { NGAPCauseGroupInt, _decode_NGAPCauseGroupInt, _encode_NGAPCauseGroupInt } from "../TS33128Payloads/NGAPCauseGroupInt.ta.mjs";
import { NGAPCauseValueInt, _decode_NGAPCauseValueInt, _encode_NGAPCauseValueInt } from "../TS33128Payloads/NGAPCauseValueInt.ta.mjs";
// export { NGAPCauseValueInt, _decode_NGAPCauseValueInt, _encode_NGAPCauseValueInt } from "../TS33128Payloads/NGAPCauseValueInt.ta.mjs";


/**
 * @summary NGAPCauseInt
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NGAPCauseInt ::= SEQUENCE
 * {
 *     group [1] NGAPCauseGroupInt,
 *     value [2] NGAPCauseValueInt
 * }
 * ```
 * 
 * @class
 */
export
class NGAPCauseInt {
    constructor (
        /**
         * @summary `group`.
         * @public
         * @readonly
         */
        readonly group: NGAPCauseGroupInt,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: NGAPCauseValueInt
    ) {}

    /**
     * @summary Restructures an object into a NGAPCauseInt
     * @description
     * 
     * This takes an `object` and converts it to a `NGAPCauseInt`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NGAPCauseInt`.
     * @returns {NGAPCauseInt}
     */
    public static _from_object (_o: { [_K in keyof (NGAPCauseInt)]: (NGAPCauseInt)[_K] }): NGAPCauseInt {
        return new NGAPCauseInt(_o.group, _o.value);
    }


}

/**
 * @summary The Leading Root Component Types of NGAPCauseInt
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NGAPCauseInt: $.ComponentSpec[] = [
    new $.ComponentSpec("group", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("value", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of NGAPCauseInt
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NGAPCauseInt: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NGAPCauseInt
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NGAPCauseInt: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NGAPCauseInt: $.ASN1Decoder<NGAPCauseInt> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NGAPCauseInt
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NGAPCauseInt (el: _Element): NGAPCauseInt {
    if (!_cached_decoder_for_NGAPCauseInt) { _cached_decoder_for_NGAPCauseInt = function (el: _Element): NGAPCauseInt {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("NGAPCauseInt contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "group";
    sequence[1].name = "value";
    let group!: NGAPCauseGroupInt;
    let value!: NGAPCauseValueInt;
    group = $._decode_implicit<NGAPCauseGroupInt>(() => _decode_NGAPCauseGroupInt)(sequence[0]);
    value = $._decode_implicit<NGAPCauseValueInt>(() => _decode_NGAPCauseValueInt)(sequence[1]);
    return new NGAPCauseInt(
        group,
        value,

    );
}; }
    return _cached_decoder_for_NGAPCauseInt(el);
}

let _cached_encoder_for_NGAPCauseInt: $.ASN1Encoder<NGAPCauseInt> | null = null;

/**
 * @summary Encodes a(n) NGAPCauseInt into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NGAPCauseInt, encoded as an ASN.1 Element.
 */
export
function _encode_NGAPCauseInt (value: NGAPCauseInt, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NGAPCauseInt) { _cached_encoder_for_NGAPCauseInt = function (value: NGAPCauseInt, elGetter: $.ASN1Encoder<NGAPCauseInt>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_NGAPCauseGroupInt, $.BER)(value.group, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_NGAPCauseValueInt, $.BER)(value.value, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NGAPCauseInt(value, elGetter);
}


/* eslint-enable */
