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
import * as $ from 'asn1-ts/dist/node/functional';

/* START_OF_SYMBOL_DEFINITION MaxCounterSize */
/**
 * @summary MaxCounterSize
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MaxCounterSize  ::=  INTEGER {unlimited(0)}
 * ```
 */
export type MaxCounterSize = INTEGER;
/* END_OF_SYMBOL_DEFINITION MaxCounterSize */

/* START_OF_SYMBOL_DEFINITION MaxCounterSize_unlimited */
/**
 * @summary MaxCounterSize_unlimited
 * @constant
 * @type {number}
 */
export const MaxCounterSize_unlimited: MaxCounterSize = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION MaxCounterSize_unlimited */

/* START_OF_SYMBOL_DEFINITION unlimited */
/**
 * @summary MaxCounterSize_unlimited
 * @constant
 * @type {number}
 */
export const unlimited: MaxCounterSize = MaxCounterSize_unlimited; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unlimited */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MaxCounterSize */
let _cached_decoder_for_MaxCounterSize: $.ASN1Decoder<MaxCounterSize> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MaxCounterSize */

/* START_OF_SYMBOL_DEFINITION _decode_MaxCounterSize */
/**
 * @summary Decodes an ASN.1 element into a(n) MaxCounterSize
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MaxCounterSize} The decoded data structure.
 */
export function _decode_MaxCounterSize(el: _Element) {
    if (!_cached_decoder_for_MaxCounterSize) {
        _cached_decoder_for_MaxCounterSize = $._decodeInteger;
    }
    return _cached_decoder_for_MaxCounterSize(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MaxCounterSize */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MaxCounterSize */
let _cached_encoder_for_MaxCounterSize: $.ASN1Encoder<MaxCounterSize> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MaxCounterSize */

/* START_OF_SYMBOL_DEFINITION _encode_MaxCounterSize */
/**
 * @summary Encodes a(n) MaxCounterSize into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MaxCounterSize, encoded as an ASN.1 Element.
 */
export function _encode_MaxCounterSize(
    value: MaxCounterSize,
    elGetter: $.ASN1Encoder<MaxCounterSize>
) {
    if (!_cached_encoder_for_MaxCounterSize) {
        _cached_encoder_for_MaxCounterSize = $._encodeInteger;
    }
    return _cached_encoder_for_MaxCounterSize(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MaxCounterSize */

/* eslint-enable */
