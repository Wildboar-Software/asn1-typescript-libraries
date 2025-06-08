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

/* START_OF_SYMBOL_DEFINITION _enum_for_DLExpansionProhibited */
/**
 * @summary DLExpansionProhibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLExpansionProhibited  ::=  ENUMERATED {
 *   dl-expansion-allowed(0), dl-expansion-prohibited(1)}
 * ```@enum {number}
 */
export enum _enum_for_DLExpansionProhibited {
    dl_expansion_allowed = 0,
    dl_expansion_prohibited = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_DLExpansionProhibited */

/* START_OF_SYMBOL_DEFINITION DLExpansionProhibited */
/**
 * @summary DLExpansionProhibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLExpansionProhibited  ::=  ENUMERATED {
 *   dl-expansion-allowed(0), dl-expansion-prohibited(1)}
 * ```@enum {number}
 */
export type DLExpansionProhibited = _enum_for_DLExpansionProhibited;
/* END_OF_SYMBOL_DEFINITION DLExpansionProhibited */

/* START_OF_SYMBOL_DEFINITION DLExpansionProhibited */
/**
 * @summary DLExpansionProhibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLExpansionProhibited  ::=  ENUMERATED {
 *   dl-expansion-allowed(0), dl-expansion-prohibited(1)}
 * ```@enum {number}
 */
export const DLExpansionProhibited = _enum_for_DLExpansionProhibited;
/* END_OF_SYMBOL_DEFINITION DLExpansionProhibited */

/* START_OF_SYMBOL_DEFINITION DLExpansionProhibited_dl_expansion_allowed */
/**
 * @summary DLExpansionProhibited_dl_expansion_allowed
 * @constant
 * @type {number}
 */
export const DLExpansionProhibited_dl_expansion_allowed: DLExpansionProhibited =
    DLExpansionProhibited.dl_expansion_allowed; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DLExpansionProhibited_dl_expansion_allowed */

/* START_OF_SYMBOL_DEFINITION dl_expansion_allowed */
/**
 * @summary dl_expansion_allowed
 * @constant
 * @type {number}
 */
export const dl_expansion_allowed: DLExpansionProhibited =
    DLExpansionProhibited.dl_expansion_allowed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION dl_expansion_allowed */

/* START_OF_SYMBOL_DEFINITION DLExpansionProhibited_dl_expansion_prohibited */
/**
 * @summary DLExpansionProhibited_dl_expansion_prohibited
 * @constant
 * @type {number}
 */
export const DLExpansionProhibited_dl_expansion_prohibited: DLExpansionProhibited =
    DLExpansionProhibited.dl_expansion_prohibited; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DLExpansionProhibited_dl_expansion_prohibited */

/* START_OF_SYMBOL_DEFINITION dl_expansion_prohibited */
/**
 * @summary dl_expansion_prohibited
 * @constant
 * @type {number}
 */
export const dl_expansion_prohibited: DLExpansionProhibited =
    DLExpansionProhibited.dl_expansion_prohibited; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION dl_expansion_prohibited */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DLExpansionProhibited */
let _cached_decoder_for_DLExpansionProhibited: $.ASN1Decoder<DLExpansionProhibited> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DLExpansionProhibited */

/* START_OF_SYMBOL_DEFINITION _decode_DLExpansionProhibited */
/**
 * @summary Decodes an ASN.1 element into a(n) DLExpansionProhibited
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DLExpansionProhibited} The decoded data structure.
 */
export function _decode_DLExpansionProhibited(el: _Element) {
    if (!_cached_decoder_for_DLExpansionProhibited) {
        _cached_decoder_for_DLExpansionProhibited = $._decodeEnumerated;
    }
    return _cached_decoder_for_DLExpansionProhibited(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DLExpansionProhibited */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DLExpansionProhibited */
let _cached_encoder_for_DLExpansionProhibited: $.ASN1Encoder<DLExpansionProhibited> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DLExpansionProhibited */

/* START_OF_SYMBOL_DEFINITION _encode_DLExpansionProhibited */
/**
 * @summary Encodes a(n) DLExpansionProhibited into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DLExpansionProhibited, encoded as an ASN.1 Element.
 */
export function _encode_DLExpansionProhibited(
    value: DLExpansionProhibited,
    elGetter: $.ASN1Encoder<DLExpansionProhibited>
) {
    if (!_cached_encoder_for_DLExpansionProhibited) {
        _cached_encoder_for_DLExpansionProhibited = $._encodeEnumerated;
    }
    return _cached_encoder_for_DLExpansionProhibited(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DLExpansionProhibited */

/* eslint-enable */
