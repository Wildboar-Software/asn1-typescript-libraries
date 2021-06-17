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

/* START_OF_SYMBOL_DEFINITION _enum_for_ProtectionGroupType */
/**
 * @summary ProtectionGroupType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionGroupType  ::=  ENUMERATED {
 *   plus(0), -- 1+1 (1 plus 1) or hot-standby
 *   colon(1) -- M:N (M for N) --}
 * ```@enum {number}
 */
export enum _enum_for_ProtectionGroupType {
    plus = 0,
    colon = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ProtectionGroupType */

/* START_OF_SYMBOL_DEFINITION ProtectionGroupType */
/**
 * @summary ProtectionGroupType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionGroupType  ::=  ENUMERATED {
 *   plus(0), -- 1+1 (1 plus 1) or hot-standby
 *   colon(1) -- M:N (M for N) --}
 * ```@enum {number}
 */
export type ProtectionGroupType = _enum_for_ProtectionGroupType;
/* END_OF_SYMBOL_DEFINITION ProtectionGroupType */

/* START_OF_SYMBOL_DEFINITION ProtectionGroupType */
/**
 * @summary ProtectionGroupType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionGroupType  ::=  ENUMERATED {
 *   plus(0), -- 1+1 (1 plus 1) or hot-standby
 *   colon(1) -- M:N (M for N) --}
 * ```@enum {number}
 */
export const ProtectionGroupType = _enum_for_ProtectionGroupType;
/* END_OF_SYMBOL_DEFINITION ProtectionGroupType */

/* START_OF_SYMBOL_DEFINITION ProtectionGroupType_plus */
/**
 * @summary ProtectionGroupType_plus
 * @constant
 * @type {number}
 */
export const ProtectionGroupType_plus: ProtectionGroupType =
    ProtectionGroupType.plus; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ProtectionGroupType_plus */

/* START_OF_SYMBOL_DEFINITION plus */
/**
 * @summary plus
 * @constant
 * @type {number}
 */
export const plus: ProtectionGroupType =
    ProtectionGroupType.plus; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION plus */

/* START_OF_SYMBOL_DEFINITION ProtectionGroupType_colon */
/**
 * @summary ProtectionGroupType_colon
 * @constant
 * @type {number}
 */
export const ProtectionGroupType_colon: ProtectionGroupType =
    ProtectionGroupType.colon; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ProtectionGroupType_colon */

/* START_OF_SYMBOL_DEFINITION colon */
/**
 * @summary colon
 * @constant
 * @type {number}
 */
export const colon: ProtectionGroupType =
    ProtectionGroupType.colon; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION colon */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectionGroupType */
let _cached_decoder_for_ProtectionGroupType: $.ASN1Decoder<ProtectionGroupType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectionGroupType */

/* START_OF_SYMBOL_DEFINITION _decode_ProtectionGroupType */
/**
 * @summary Decodes an ASN.1 element into a(n) ProtectionGroupType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtectionGroupType} The decoded data structure.
 */
export function _decode_ProtectionGroupType(el: _Element) {
    if (!_cached_decoder_for_ProtectionGroupType) {
        _cached_decoder_for_ProtectionGroupType = $._decodeEnumerated;
    }
    return _cached_decoder_for_ProtectionGroupType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProtectionGroupType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectionGroupType */
let _cached_encoder_for_ProtectionGroupType: $.ASN1Encoder<ProtectionGroupType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectionGroupType */

/* START_OF_SYMBOL_DEFINITION _encode_ProtectionGroupType */
/**
 * @summary Encodes a(n) ProtectionGroupType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtectionGroupType, encoded as an ASN.1 Element.
 */
export function _encode_ProtectionGroupType(
    value: ProtectionGroupType,
    elGetter: $.ASN1Encoder<ProtectionGroupType>
) {
    if (!_cached_encoder_for_ProtectionGroupType) {
        _cached_encoder_for_ProtectionGroupType = $._encodeEnumerated;
    }
    return _cached_encoder_for_ProtectionGroupType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProtectionGroupType */

/* eslint-enable */
