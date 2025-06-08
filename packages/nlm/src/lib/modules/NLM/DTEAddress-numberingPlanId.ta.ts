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

/* START_OF_SYMBOL_DEFINITION _enum_for_DTEAddress_numberingPlanId */
/**
 * @summary DTEAddress_numberingPlanId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DTEAddress-numberingPlanId ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_DTEAddress_numberingPlanId {
    unknown = 0,
    x121 = 1,
    e164 = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_DTEAddress_numberingPlanId */

/* START_OF_SYMBOL_DEFINITION DTEAddress_numberingPlanId */
/**
 * @summary DTEAddress_numberingPlanId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DTEAddress-numberingPlanId ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type DTEAddress_numberingPlanId = _enum_for_DTEAddress_numberingPlanId;
/* END_OF_SYMBOL_DEFINITION DTEAddress_numberingPlanId */

/* START_OF_SYMBOL_DEFINITION DTEAddress_numberingPlanId */
/**
 * @summary DTEAddress_numberingPlanId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DTEAddress-numberingPlanId ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const DTEAddress_numberingPlanId = _enum_for_DTEAddress_numberingPlanId;
/* END_OF_SYMBOL_DEFINITION DTEAddress_numberingPlanId */

/* START_OF_SYMBOL_DEFINITION DTEAddress_numberingPlanId_unknown */
/**
 * @summary DTEAddress_numberingPlanId_unknown
 * @constant
 * @type {number}
 */
export const DTEAddress_numberingPlanId_unknown: DTEAddress_numberingPlanId =
    DTEAddress_numberingPlanId.unknown; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DTEAddress_numberingPlanId_unknown */

/* START_OF_SYMBOL_DEFINITION unknown */
/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export const unknown: DTEAddress_numberingPlanId =
    DTEAddress_numberingPlanId.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unknown */

/* START_OF_SYMBOL_DEFINITION DTEAddress_numberingPlanId_x121 */
/**
 * @summary DTEAddress_numberingPlanId_x121
 * @constant
 * @type {number}
 */
export const DTEAddress_numberingPlanId_x121: DTEAddress_numberingPlanId =
    DTEAddress_numberingPlanId.x121; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DTEAddress_numberingPlanId_x121 */

/* START_OF_SYMBOL_DEFINITION x121 */
/**
 * @summary x121
 * @constant
 * @type {number}
 */
export const x121: DTEAddress_numberingPlanId =
    DTEAddress_numberingPlanId.x121; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION x121 */

/* START_OF_SYMBOL_DEFINITION DTEAddress_numberingPlanId_e164 */
/**
 * @summary DTEAddress_numberingPlanId_e164
 * @constant
 * @type {number}
 */
export const DTEAddress_numberingPlanId_e164: DTEAddress_numberingPlanId =
    DTEAddress_numberingPlanId.e164; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DTEAddress_numberingPlanId_e164 */

/* START_OF_SYMBOL_DEFINITION e164 */
/**
 * @summary e164
 * @constant
 * @type {number}
 */
export const e164: DTEAddress_numberingPlanId =
    DTEAddress_numberingPlanId.e164; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION e164 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DTEAddress_numberingPlanId */
let _cached_decoder_for_DTEAddress_numberingPlanId: $.ASN1Decoder<DTEAddress_numberingPlanId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DTEAddress_numberingPlanId */

/* START_OF_SYMBOL_DEFINITION _decode_DTEAddress_numberingPlanId */
/**
 * @summary Decodes an ASN.1 element into a(n) DTEAddress_numberingPlanId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DTEAddress_numberingPlanId} The decoded data structure.
 */
export function _decode_DTEAddress_numberingPlanId(el: _Element) {
    if (!_cached_decoder_for_DTEAddress_numberingPlanId) {
        _cached_decoder_for_DTEAddress_numberingPlanId = $._decodeEnumerated;
    }
    return _cached_decoder_for_DTEAddress_numberingPlanId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DTEAddress_numberingPlanId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DTEAddress_numberingPlanId */
let _cached_encoder_for_DTEAddress_numberingPlanId: $.ASN1Encoder<DTEAddress_numberingPlanId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DTEAddress_numberingPlanId */

/* START_OF_SYMBOL_DEFINITION _encode_DTEAddress_numberingPlanId */
/**
 * @summary Encodes a(n) DTEAddress_numberingPlanId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DTEAddress_numberingPlanId, encoded as an ASN.1 Element.
 */
export function _encode_DTEAddress_numberingPlanId(
    value: DTEAddress_numberingPlanId,
    elGetter: $.ASN1Encoder<DTEAddress_numberingPlanId>
) {
    if (!_cached_encoder_for_DTEAddress_numberingPlanId) {
        _cached_encoder_for_DTEAddress_numberingPlanId = $._encodeEnumerated;
    }
    return _cached_encoder_for_DTEAddress_numberingPlanId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DTEAddress_numberingPlanId */

/* eslint-enable */
