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

/* START_OF_SYMBOL_DEFINITION _enum_for_InvalidAccessControlFilter_errorId */
/**
 * @summary InvalidAccessControlFilter_errorId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvalidAccessControlFilter-errorId ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_InvalidAccessControlFilter_errorId {
    duplicateId = 0,
    heterogeneousId = 1,
    invalidId = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_InvalidAccessControlFilter_errorId */

/* START_OF_SYMBOL_DEFINITION InvalidAccessControlFilter_errorId */
/**
 * @summary InvalidAccessControlFilter_errorId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvalidAccessControlFilter-errorId ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type InvalidAccessControlFilter_errorId = _enum_for_InvalidAccessControlFilter_errorId;
/* END_OF_SYMBOL_DEFINITION InvalidAccessControlFilter_errorId */

/* START_OF_SYMBOL_DEFINITION InvalidAccessControlFilter_errorId */
/**
 * @summary InvalidAccessControlFilter_errorId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvalidAccessControlFilter-errorId ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const InvalidAccessControlFilter_errorId = _enum_for_InvalidAccessControlFilter_errorId;
/* END_OF_SYMBOL_DEFINITION InvalidAccessControlFilter_errorId */

/* START_OF_SYMBOL_DEFINITION InvalidAccessControlFilter_errorId_duplicateId */
/**
 * @summary InvalidAccessControlFilter_errorId_duplicateId
 * @constant
 * @type {number}
 */
export const InvalidAccessControlFilter_errorId_duplicateId: InvalidAccessControlFilter_errorId =
    InvalidAccessControlFilter_errorId.duplicateId; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION InvalidAccessControlFilter_errorId_duplicateId */

/* START_OF_SYMBOL_DEFINITION duplicateId */
/**
 * @summary duplicateId
 * @constant
 * @type {number}
 */
export const duplicateId: InvalidAccessControlFilter_errorId =
    InvalidAccessControlFilter_errorId.duplicateId; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION duplicateId */

/* START_OF_SYMBOL_DEFINITION InvalidAccessControlFilter_errorId_heterogeneousId */
/**
 * @summary InvalidAccessControlFilter_errorId_heterogeneousId
 * @constant
 * @type {number}
 */
export const InvalidAccessControlFilter_errorId_heterogeneousId: InvalidAccessControlFilter_errorId =
    InvalidAccessControlFilter_errorId.heterogeneousId; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION InvalidAccessControlFilter_errorId_heterogeneousId */

/* START_OF_SYMBOL_DEFINITION heterogeneousId */
/**
 * @summary heterogeneousId
 * @constant
 * @type {number}
 */
export const heterogeneousId: InvalidAccessControlFilter_errorId =
    InvalidAccessControlFilter_errorId.heterogeneousId; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION heterogeneousId */

/* START_OF_SYMBOL_DEFINITION InvalidAccessControlFilter_errorId_invalidId */
/**
 * @summary InvalidAccessControlFilter_errorId_invalidId
 * @constant
 * @type {number}
 */
export const InvalidAccessControlFilter_errorId_invalidId: InvalidAccessControlFilter_errorId =
    InvalidAccessControlFilter_errorId.invalidId; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION InvalidAccessControlFilter_errorId_invalidId */

/* START_OF_SYMBOL_DEFINITION invalidId */
/**
 * @summary invalidId
 * @constant
 * @type {number}
 */
export const invalidId: InvalidAccessControlFilter_errorId =
    InvalidAccessControlFilter_errorId.invalidId; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InvalidAccessControlFilter_errorId */
let _cached_decoder_for_InvalidAccessControlFilter_errorId: $.ASN1Decoder<InvalidAccessControlFilter_errorId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InvalidAccessControlFilter_errorId */

/* START_OF_SYMBOL_DEFINITION _decode_InvalidAccessControlFilter_errorId */
/**
 * @summary Decodes an ASN.1 element into a(n) InvalidAccessControlFilter_errorId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InvalidAccessControlFilter_errorId} The decoded data structure.
 */
export function _decode_InvalidAccessControlFilter_errorId(el: _Element) {
    if (!_cached_decoder_for_InvalidAccessControlFilter_errorId) {
        _cached_decoder_for_InvalidAccessControlFilter_errorId =
            $._decodeEnumerated;
    }
    return _cached_decoder_for_InvalidAccessControlFilter_errorId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InvalidAccessControlFilter_errorId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InvalidAccessControlFilter_errorId */
let _cached_encoder_for_InvalidAccessControlFilter_errorId: $.ASN1Encoder<InvalidAccessControlFilter_errorId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InvalidAccessControlFilter_errorId */

/* START_OF_SYMBOL_DEFINITION _encode_InvalidAccessControlFilter_errorId */
/**
 * @summary Encodes a(n) InvalidAccessControlFilter_errorId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvalidAccessControlFilter_errorId, encoded as an ASN.1 Element.
 */
export function _encode_InvalidAccessControlFilter_errorId(
    value: InvalidAccessControlFilter_errorId,
    elGetter: $.ASN1Encoder<InvalidAccessControlFilter_errorId>
) {
    if (!_cached_encoder_for_InvalidAccessControlFilter_errorId) {
        _cached_encoder_for_InvalidAccessControlFilter_errorId =
            $._encodeEnumerated;
    }
    return _cached_encoder_for_InvalidAccessControlFilter_errorId(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_InvalidAccessControlFilter_errorId */

/* eslint-enable */
