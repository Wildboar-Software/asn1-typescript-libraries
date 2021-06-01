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

/* START_OF_SYMBOL_DEFINITION RangeProblem */
/**
 * @summary RangeProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RangeProblem  ::=  INTEGER {reversed(0)}(0..ub-error-reasons)
 * ```
 */
export type RangeProblem = INTEGER;
/* END_OF_SYMBOL_DEFINITION RangeProblem */

/* START_OF_SYMBOL_DEFINITION RangeProblem_reversed */
/**
 * @summary RangeProblem_reversed
 * @constant
 * @type {number}
 */
export const RangeProblem_reversed: RangeProblem = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RangeProblem_reversed */

/* START_OF_SYMBOL_DEFINITION reversed */
/**
 * @summary RangeProblem_reversed
 * @constant
 * @type {number}
 */
export const reversed: RangeProblem = RangeProblem_reversed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION reversed */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RangeProblem */
let _cached_decoder_for_RangeProblem: $.ASN1Decoder<RangeProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RangeProblem */

/* START_OF_SYMBOL_DEFINITION _decode_RangeProblem */
/**
 * @summary Decodes an ASN.1 element into a(n) RangeProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RangeProblem} The decoded data structure.
 */
export function _decode_RangeProblem(el: _Element) {
    if (!_cached_decoder_for_RangeProblem) {
        _cached_decoder_for_RangeProblem = $._decodeInteger;
    }
    return _cached_decoder_for_RangeProblem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RangeProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RangeProblem */
let _cached_encoder_for_RangeProblem: $.ASN1Encoder<RangeProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RangeProblem */

/* START_OF_SYMBOL_DEFINITION _encode_RangeProblem */
/**
 * @summary Encodes a(n) RangeProblem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RangeProblem, encoded as an ASN.1 Element.
 */
export function _encode_RangeProblem(
    value: RangeProblem,
    elGetter: $.ASN1Encoder<RangeProblem>
) {
    if (!_cached_encoder_for_RangeProblem) {
        _cached_encoder_for_RangeProblem = $._encodeInteger;
    }
    return _cached_encoder_for_RangeProblem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RangeProblem */

/* eslint-enable */
