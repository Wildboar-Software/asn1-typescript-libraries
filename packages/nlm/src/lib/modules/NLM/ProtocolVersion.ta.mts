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

/* START_OF_SYMBOL_DEFINITION _enum_for_ProtocolVersion */
/**
 * @summary ProtocolVersion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtocolVersion  ::=  ENUMERATED {iSO8208V1(0), iSO8208V2(1), x2584(2), x2588(3)}
 * ```@enum {number}
 */
export enum _enum_for_ProtocolVersion {
    iSO8208V1 = 0,
    iSO8208V2 = 1,
    x2584 = 2,
    x2588 = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ProtocolVersion */

/* START_OF_SYMBOL_DEFINITION ProtocolVersion */
/**
 * @summary ProtocolVersion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtocolVersion  ::=  ENUMERATED {iSO8208V1(0), iSO8208V2(1), x2584(2), x2588(3)}
 * ```@enum {number}
 */
export type ProtocolVersion = _enum_for_ProtocolVersion;
/* END_OF_SYMBOL_DEFINITION ProtocolVersion */

/* START_OF_SYMBOL_DEFINITION ProtocolVersion */
/**
 * @summary ProtocolVersion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtocolVersion  ::=  ENUMERATED {iSO8208V1(0), iSO8208V2(1), x2584(2), x2588(3)}
 * ```@enum {number}
 */
export const ProtocolVersion = _enum_for_ProtocolVersion;
/* END_OF_SYMBOL_DEFINITION ProtocolVersion */

/* START_OF_SYMBOL_DEFINITION ProtocolVersion_iSO8208V1 */
/**
 * @summary ProtocolVersion_iSO8208V1
 * @constant
 * @type {number}
 */
export const ProtocolVersion_iSO8208V1: ProtocolVersion =
    ProtocolVersion.iSO8208V1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ProtocolVersion_iSO8208V1 */

/* START_OF_SYMBOL_DEFINITION iSO8208V1 */
/**
 * @summary iSO8208V1
 * @constant
 * @type {number}
 */
export const iSO8208V1: ProtocolVersion =
    ProtocolVersion.iSO8208V1; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION iSO8208V1 */

/* START_OF_SYMBOL_DEFINITION ProtocolVersion_iSO8208V2 */
/**
 * @summary ProtocolVersion_iSO8208V2
 * @constant
 * @type {number}
 */
export const ProtocolVersion_iSO8208V2: ProtocolVersion =
    ProtocolVersion.iSO8208V2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ProtocolVersion_iSO8208V2 */

/* START_OF_SYMBOL_DEFINITION iSO8208V2 */
/**
 * @summary iSO8208V2
 * @constant
 * @type {number}
 */
export const iSO8208V2: ProtocolVersion =
    ProtocolVersion.iSO8208V2; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION iSO8208V2 */

/* START_OF_SYMBOL_DEFINITION ProtocolVersion_x2584 */
/**
 * @summary ProtocolVersion_x2584
 * @constant
 * @type {number}
 */
export const ProtocolVersion_x2584: ProtocolVersion =
    ProtocolVersion.x2584; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ProtocolVersion_x2584 */

/* START_OF_SYMBOL_DEFINITION x2584 */
/**
 * @summary x2584
 * @constant
 * @type {number}
 */
export const x2584: ProtocolVersion =
    ProtocolVersion.x2584; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION x2584 */

/* START_OF_SYMBOL_DEFINITION ProtocolVersion_x2588 */
/**
 * @summary ProtocolVersion_x2588
 * @constant
 * @type {number}
 */
export const ProtocolVersion_x2588: ProtocolVersion =
    ProtocolVersion.x2588; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ProtocolVersion_x2588 */

/* START_OF_SYMBOL_DEFINITION x2588 */
/**
 * @summary x2588
 * @constant
 * @type {number}
 */
export const x2588: ProtocolVersion =
    ProtocolVersion.x2588; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION x2588 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtocolVersion */
let _cached_decoder_for_ProtocolVersion: $.ASN1Decoder<ProtocolVersion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtocolVersion */

/* START_OF_SYMBOL_DEFINITION _decode_ProtocolVersion */
/**
 * @summary Decodes an ASN.1 element into a(n) ProtocolVersion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtocolVersion} The decoded data structure.
 */
export function _decode_ProtocolVersion(el: _Element) {
    if (!_cached_decoder_for_ProtocolVersion) {
        _cached_decoder_for_ProtocolVersion = $._decodeEnumerated;
    }
    return _cached_decoder_for_ProtocolVersion(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProtocolVersion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtocolVersion */
let _cached_encoder_for_ProtocolVersion: $.ASN1Encoder<ProtocolVersion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtocolVersion */

/* START_OF_SYMBOL_DEFINITION _encode_ProtocolVersion */
/**
 * @summary Encodes a(n) ProtocolVersion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtocolVersion, encoded as an ASN.1 Element.
 */
export function _encode_ProtocolVersion(
    value: ProtocolVersion,
    elGetter: $.ASN1Encoder<ProtocolVersion>
) {
    if (!_cached_encoder_for_ProtocolVersion) {
        _cached_encoder_for_ProtocolVersion = $._encodeEnumerated;
    }
    return _cached_encoder_for_ProtocolVersion(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProtocolVersion */

/* eslint-enable */
