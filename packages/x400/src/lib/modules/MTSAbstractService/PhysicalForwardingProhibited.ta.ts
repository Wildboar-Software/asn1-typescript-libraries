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

/* START_OF_SYMBOL_DEFINITION _enum_for_PhysicalForwardingProhibited */
/**
 * @summary PhysicalForwardingProhibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PhysicalForwardingProhibited  ::=  ENUMERATED {
 *   physical-forwarding-allowed(0), physical-forwarding-prohibited(1)}
 * ```@enum {number}
 */
export enum _enum_for_PhysicalForwardingProhibited {
    physical_forwarding_allowed = 0,
    physical_forwarding_prohibited = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_PhysicalForwardingProhibited */

/* START_OF_SYMBOL_DEFINITION PhysicalForwardingProhibited */
/**
 * @summary PhysicalForwardingProhibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PhysicalForwardingProhibited  ::=  ENUMERATED {
 *   physical-forwarding-allowed(0), physical-forwarding-prohibited(1)}
 * ```@enum {number}
 */
export type PhysicalForwardingProhibited = _enum_for_PhysicalForwardingProhibited;
/* END_OF_SYMBOL_DEFINITION PhysicalForwardingProhibited */

/* START_OF_SYMBOL_DEFINITION PhysicalForwardingProhibited */
/**
 * @summary PhysicalForwardingProhibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PhysicalForwardingProhibited  ::=  ENUMERATED {
 *   physical-forwarding-allowed(0), physical-forwarding-prohibited(1)}
 * ```@enum {number}
 */
export const PhysicalForwardingProhibited = _enum_for_PhysicalForwardingProhibited;
/* END_OF_SYMBOL_DEFINITION PhysicalForwardingProhibited */

/* START_OF_SYMBOL_DEFINITION PhysicalForwardingProhibited_physical_forwarding_allowed */
/**
 * @summary PhysicalForwardingProhibited_physical_forwarding_allowed
 * @constant
 * @type {number}
 */
export const PhysicalForwardingProhibited_physical_forwarding_allowed: PhysicalForwardingProhibited =
    PhysicalForwardingProhibited.physical_forwarding_allowed; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PhysicalForwardingProhibited_physical_forwarding_allowed */

/* START_OF_SYMBOL_DEFINITION physical_forwarding_allowed */
/**
 * @summary physical_forwarding_allowed
 * @constant
 * @type {number}
 */
export const physical_forwarding_allowed: PhysicalForwardingProhibited =
    PhysicalForwardingProhibited.physical_forwarding_allowed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION physical_forwarding_allowed */

/* START_OF_SYMBOL_DEFINITION PhysicalForwardingProhibited_physical_forwarding_prohibited */
/**
 * @summary PhysicalForwardingProhibited_physical_forwarding_prohibited
 * @constant
 * @type {number}
 */
export const PhysicalForwardingProhibited_physical_forwarding_prohibited: PhysicalForwardingProhibited =
    PhysicalForwardingProhibited.physical_forwarding_prohibited; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PhysicalForwardingProhibited_physical_forwarding_prohibited */

/* START_OF_SYMBOL_DEFINITION physical_forwarding_prohibited */
/**
 * @summary physical_forwarding_prohibited
 * @constant
 * @type {number}
 */
export const physical_forwarding_prohibited: PhysicalForwardingProhibited =
    PhysicalForwardingProhibited.physical_forwarding_prohibited; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION physical_forwarding_prohibited */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PhysicalForwardingProhibited */
let _cached_decoder_for_PhysicalForwardingProhibited: $.ASN1Decoder<PhysicalForwardingProhibited> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PhysicalForwardingProhibited */

/* START_OF_SYMBOL_DEFINITION _decode_PhysicalForwardingProhibited */
/**
 * @summary Decodes an ASN.1 element into a(n) PhysicalForwardingProhibited
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PhysicalForwardingProhibited} The decoded data structure.
 */
export function _decode_PhysicalForwardingProhibited(el: _Element) {
    if (!_cached_decoder_for_PhysicalForwardingProhibited) {
        _cached_decoder_for_PhysicalForwardingProhibited = $._decodeEnumerated;
    }
    return _cached_decoder_for_PhysicalForwardingProhibited(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PhysicalForwardingProhibited */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PhysicalForwardingProhibited */
let _cached_encoder_for_PhysicalForwardingProhibited: $.ASN1Encoder<PhysicalForwardingProhibited> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PhysicalForwardingProhibited */

/* START_OF_SYMBOL_DEFINITION _encode_PhysicalForwardingProhibited */
/**
 * @summary Encodes a(n) PhysicalForwardingProhibited into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PhysicalForwardingProhibited, encoded as an ASN.1 Element.
 */
export function _encode_PhysicalForwardingProhibited(
    value: PhysicalForwardingProhibited,
    elGetter: $.ASN1Encoder<PhysicalForwardingProhibited>
) {
    if (!_cached_encoder_for_PhysicalForwardingProhibited) {
        _cached_encoder_for_PhysicalForwardingProhibited = $._encodeEnumerated;
    }
    return _cached_encoder_for_PhysicalForwardingProhibited(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PhysicalForwardingProhibited */

/* eslint-enable */
