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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION MaximumErrorInNanoseconds */
/**
 * @summary MaximumErrorInNanoseconds
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MaximumErrorInNanoseconds  ::=  INTEGER {noEstimate(281474976710655)
 * }(0..281474976710655)
 * ```
 */
export type MaximumErrorInNanoseconds = INTEGER;
/* END_OF_SYMBOL_DEFINITION MaximumErrorInNanoseconds */

/* START_OF_SYMBOL_DEFINITION MaximumErrorInNanoseconds_noEstimate */
/**
 * @summary MaximumErrorInNanoseconds_noEstimate
 * @constant
 * @type {number}
 */
export const MaximumErrorInNanoseconds_noEstimate: MaximumErrorInNanoseconds = 281474976710655; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION MaximumErrorInNanoseconds_noEstimate */

/* START_OF_SYMBOL_DEFINITION noEstimate */
/**
 * @summary MaximumErrorInNanoseconds_noEstimate
 * @constant
 * @type {number}
 */
export const noEstimate: MaximumErrorInNanoseconds = MaximumErrorInNanoseconds_noEstimate; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION noEstimate */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MaximumErrorInNanoseconds */
let _cached_decoder_for_MaximumErrorInNanoseconds: $.ASN1Decoder<MaximumErrorInNanoseconds> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MaximumErrorInNanoseconds */

/* START_OF_SYMBOL_DEFINITION _decode_MaximumErrorInNanoseconds */
/**
 * @summary Decodes an ASN.1 element into a(n) MaximumErrorInNanoseconds
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MaximumErrorInNanoseconds} The decoded data structure.
 */
export function _decode_MaximumErrorInNanoseconds(el: _Element) {
    if (!_cached_decoder_for_MaximumErrorInNanoseconds) {
        _cached_decoder_for_MaximumErrorInNanoseconds = $._decodeInteger;
    }
    return _cached_decoder_for_MaximumErrorInNanoseconds(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MaximumErrorInNanoseconds */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MaximumErrorInNanoseconds */
let _cached_encoder_for_MaximumErrorInNanoseconds: $.ASN1Encoder<MaximumErrorInNanoseconds> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MaximumErrorInNanoseconds */

/* START_OF_SYMBOL_DEFINITION _encode_MaximumErrorInNanoseconds */
/**
 * @summary Encodes a(n) MaximumErrorInNanoseconds into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MaximumErrorInNanoseconds, encoded as an ASN.1 Element.
 */
export function _encode_MaximumErrorInNanoseconds(
    value: MaximumErrorInNanoseconds,
    elGetter: $.ASN1Encoder<MaximumErrorInNanoseconds>
) {
    if (!_cached_encoder_for_MaximumErrorInNanoseconds) {
        _cached_encoder_for_MaximumErrorInNanoseconds = $._encodeInteger;
    }
    return _cached_encoder_for_MaximumErrorInNanoseconds(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MaximumErrorInNanoseconds */

/* eslint-enable */
