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

/* START_OF_SYMBOL_DEFINITION _enum_for_AutoSwitchReason */
/**
 * @summary AutoSwitchReason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoSwitchReason  ::=  ENUMERATED {
 *   waitToRestore(0), resourceDegrade(1), resourceFailed(2)}
 * ```@enum {number}
 */
export enum _enum_for_AutoSwitchReason {
    waitToRestore = 0,
    resourceDegrade = 1,
    resourceFailed = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_AutoSwitchReason */

/* START_OF_SYMBOL_DEFINITION AutoSwitchReason */
/**
 * @summary AutoSwitchReason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoSwitchReason  ::=  ENUMERATED {
 *   waitToRestore(0), resourceDegrade(1), resourceFailed(2)}
 * ```@enum {number}
 */
export type AutoSwitchReason = _enum_for_AutoSwitchReason;
/* END_OF_SYMBOL_DEFINITION AutoSwitchReason */

/* START_OF_SYMBOL_DEFINITION AutoSwitchReason */
/**
 * @summary AutoSwitchReason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoSwitchReason  ::=  ENUMERATED {
 *   waitToRestore(0), resourceDegrade(1), resourceFailed(2)}
 * ```@enum {number}
 */
export const AutoSwitchReason = _enum_for_AutoSwitchReason;
/* END_OF_SYMBOL_DEFINITION AutoSwitchReason */

/* START_OF_SYMBOL_DEFINITION AutoSwitchReason_waitToRestore */
/**
 * @summary AutoSwitchReason_waitToRestore
 * @constant
 * @type {number}
 */
export const AutoSwitchReason_waitToRestore: AutoSwitchReason =
    AutoSwitchReason.waitToRestore; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AutoSwitchReason_waitToRestore */

/* START_OF_SYMBOL_DEFINITION waitToRestore */
/**
 * @summary waitToRestore
 * @constant
 * @type {number}
 */
export const waitToRestore: AutoSwitchReason =
    AutoSwitchReason.waitToRestore; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION waitToRestore */

/* START_OF_SYMBOL_DEFINITION AutoSwitchReason_resourceDegrade */
/**
 * @summary AutoSwitchReason_resourceDegrade
 * @constant
 * @type {number}
 */
export const AutoSwitchReason_resourceDegrade: AutoSwitchReason =
    AutoSwitchReason.resourceDegrade; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AutoSwitchReason_resourceDegrade */

/* START_OF_SYMBOL_DEFINITION resourceDegrade */
/**
 * @summary resourceDegrade
 * @constant
 * @type {number}
 */
export const resourceDegrade: AutoSwitchReason =
    AutoSwitchReason.resourceDegrade; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION resourceDegrade */

/* START_OF_SYMBOL_DEFINITION AutoSwitchReason_resourceFailed */
/**
 * @summary AutoSwitchReason_resourceFailed
 * @constant
 * @type {number}
 */
export const AutoSwitchReason_resourceFailed: AutoSwitchReason =
    AutoSwitchReason.resourceFailed; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AutoSwitchReason_resourceFailed */

/* START_OF_SYMBOL_DEFINITION resourceFailed */
/**
 * @summary resourceFailed
 * @constant
 * @type {number}
 */
export const resourceFailed: AutoSwitchReason =
    AutoSwitchReason.resourceFailed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION resourceFailed */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AutoSwitchReason */
let _cached_decoder_for_AutoSwitchReason: $.ASN1Decoder<AutoSwitchReason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AutoSwitchReason */

/* START_OF_SYMBOL_DEFINITION _decode_AutoSwitchReason */
/**
 * @summary Decodes an ASN.1 element into a(n) AutoSwitchReason
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AutoSwitchReason} The decoded data structure.
 */
export function _decode_AutoSwitchReason(el: _Element) {
    if (!_cached_decoder_for_AutoSwitchReason) {
        _cached_decoder_for_AutoSwitchReason = $._decodeEnumerated;
    }
    return _cached_decoder_for_AutoSwitchReason(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AutoSwitchReason */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AutoSwitchReason */
let _cached_encoder_for_AutoSwitchReason: $.ASN1Encoder<AutoSwitchReason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AutoSwitchReason */

/* START_OF_SYMBOL_DEFINITION _encode_AutoSwitchReason */
/**
 * @summary Encodes a(n) AutoSwitchReason into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AutoSwitchReason, encoded as an ASN.1 Element.
 */
export function _encode_AutoSwitchReason(
    value: AutoSwitchReason,
    elGetter: $.ASN1Encoder<AutoSwitchReason>
) {
    if (!_cached_encoder_for_AutoSwitchReason) {
        _cached_encoder_for_AutoSwitchReason = $._encodeEnumerated;
    }
    return _cached_encoder_for_AutoSwitchReason(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AutoSwitchReason */

/* eslint-enable */
