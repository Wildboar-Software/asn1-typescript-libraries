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

/* START_OF_SYMBOL_DEFINITION MatchesFor */
/**
 * @summary MatchesFor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MatchesFor  ::=  BIT STRING {
 *   equality(0), ordering(1), substrings(2), setComparison(3), setIntersection(4)
 * }
 * ```
 */
export type MatchesFor = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION MatchesFor */

/* START_OF_SYMBOL_DEFINITION MatchesFor_equality */
/**
 * @summary MatchesFor_equality
 * @constant
 */
export const MatchesFor_equality: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION MatchesFor_equality */

/* START_OF_SYMBOL_DEFINITION equality */
/**
 * @summary equality
 * @constant
 */
export const equality: number = MatchesFor_equality; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION equality */

/* START_OF_SYMBOL_DEFINITION MatchesFor_ordering */
/**
 * @summary MatchesFor_ordering
 * @constant
 */
export const MatchesFor_ordering: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION MatchesFor_ordering */

/* START_OF_SYMBOL_DEFINITION ordering */
/**
 * @summary ordering
 * @constant
 */
export const ordering: number = MatchesFor_ordering; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ordering */

/* START_OF_SYMBOL_DEFINITION MatchesFor_substrings */
/**
 * @summary MatchesFor_substrings
 * @constant
 */
export const MatchesFor_substrings: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION MatchesFor_substrings */

/* START_OF_SYMBOL_DEFINITION substrings */
/**
 * @summary substrings
 * @constant
 */
export const substrings: number = MatchesFor_substrings; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION substrings */

/* START_OF_SYMBOL_DEFINITION MatchesFor_setComparison */
/**
 * @summary MatchesFor_setComparison
 * @constant
 */
export const MatchesFor_setComparison: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION MatchesFor_setComparison */

/* START_OF_SYMBOL_DEFINITION setComparison */
/**
 * @summary setComparison
 * @constant
 */
export const setComparison: number = MatchesFor_setComparison; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION setComparison */

/* START_OF_SYMBOL_DEFINITION MatchesFor_setIntersection */
/**
 * @summary MatchesFor_setIntersection
 * @constant
 */
export const MatchesFor_setIntersection: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION MatchesFor_setIntersection */

/* START_OF_SYMBOL_DEFINITION setIntersection */
/**
 * @summary setIntersection
 * @constant
 */
export const setIntersection: number = MatchesFor_setIntersection; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION setIntersection */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MatchesFor */
let _cached_decoder_for_MatchesFor: $.ASN1Decoder<MatchesFor> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MatchesFor */

/* START_OF_SYMBOL_DEFINITION _decode_MatchesFor */
/**
 * @summary Decodes an ASN.1 element into a(n) MatchesFor
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MatchesFor} The decoded data structure.
 */
export function _decode_MatchesFor(el: _Element) {
    if (!_cached_decoder_for_MatchesFor) {
        _cached_decoder_for_MatchesFor = $._decodeBitString;
    }
    return _cached_decoder_for_MatchesFor(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MatchesFor */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MatchesFor */
let _cached_encoder_for_MatchesFor: $.ASN1Encoder<MatchesFor> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MatchesFor */

/* START_OF_SYMBOL_DEFINITION _encode_MatchesFor */
/**
 * @summary Encodes a(n) MatchesFor into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MatchesFor, encoded as an ASN.1 Element.
 */
export function _encode_MatchesFor(
    value: MatchesFor,
    elGetter: $.ASN1Encoder<MatchesFor>
) {
    if (!_cached_encoder_for_MatchesFor) {
        _cached_encoder_for_MatchesFor = $._encodeBitString;
    }
    return _cached_encoder_for_MatchesFor(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MatchesFor */

/* eslint-enable */
