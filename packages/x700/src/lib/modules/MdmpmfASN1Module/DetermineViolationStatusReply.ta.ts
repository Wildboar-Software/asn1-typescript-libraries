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

/* START_OF_SYMBOL_DEFINITION _enum_for_DetermineViolationStatusReply */
/**
 * @summary DetermineViolationStatusReply
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DetermineViolationStatusReply  ::=  ENUMERATED {
 *   unknown(1), no-violation(2), violation-detected(3), non-member(4)}
 * ```@enum {number}
 */
export enum _enum_for_DetermineViolationStatusReply {
    unknown = 1,
    no_violation = 2,
    violation_detected = 3,
    non_member = 4,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_DetermineViolationStatusReply */

/* START_OF_SYMBOL_DEFINITION DetermineViolationStatusReply */
/**
 * @summary DetermineViolationStatusReply
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DetermineViolationStatusReply  ::=  ENUMERATED {
 *   unknown(1), no-violation(2), violation-detected(3), non-member(4)}
 * ```@enum {number}
 */
export type DetermineViolationStatusReply = _enum_for_DetermineViolationStatusReply;
/* END_OF_SYMBOL_DEFINITION DetermineViolationStatusReply */

/* START_OF_SYMBOL_DEFINITION DetermineViolationStatusReply */
/**
 * @summary DetermineViolationStatusReply
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DetermineViolationStatusReply  ::=  ENUMERATED {
 *   unknown(1), no-violation(2), violation-detected(3), non-member(4)}
 * ```@enum {number}
 */
export const DetermineViolationStatusReply = _enum_for_DetermineViolationStatusReply;
/* END_OF_SYMBOL_DEFINITION DetermineViolationStatusReply */

/* START_OF_SYMBOL_DEFINITION DetermineViolationStatusReply_unknown */
/**
 * @summary DetermineViolationStatusReply_unknown
 * @constant
 * @type {number}
 */
export const DetermineViolationStatusReply_unknown: DetermineViolationStatusReply =
    DetermineViolationStatusReply.unknown; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DetermineViolationStatusReply_unknown */

/* START_OF_SYMBOL_DEFINITION unknown */
/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export const unknown: DetermineViolationStatusReply =
    DetermineViolationStatusReply.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unknown */

/* START_OF_SYMBOL_DEFINITION DetermineViolationStatusReply_no_violation */
/**
 * @summary DetermineViolationStatusReply_no_violation
 * @constant
 * @type {number}
 */
export const DetermineViolationStatusReply_no_violation: DetermineViolationStatusReply =
    DetermineViolationStatusReply.no_violation; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DetermineViolationStatusReply_no_violation */

/* START_OF_SYMBOL_DEFINITION no_violation */
/**
 * @summary no_violation
 * @constant
 * @type {number}
 */
export const no_violation: DetermineViolationStatusReply =
    DetermineViolationStatusReply.no_violation; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION no_violation */

/* START_OF_SYMBOL_DEFINITION DetermineViolationStatusReply_violation_detected */
/**
 * @summary DetermineViolationStatusReply_violation_detected
 * @constant
 * @type {number}
 */
export const DetermineViolationStatusReply_violation_detected: DetermineViolationStatusReply =
    DetermineViolationStatusReply.violation_detected; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DetermineViolationStatusReply_violation_detected */

/* START_OF_SYMBOL_DEFINITION violation_detected */
/**
 * @summary violation_detected
 * @constant
 * @type {number}
 */
export const violation_detected: DetermineViolationStatusReply =
    DetermineViolationStatusReply.violation_detected; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION violation_detected */

/* START_OF_SYMBOL_DEFINITION DetermineViolationStatusReply_non_member */
/**
 * @summary DetermineViolationStatusReply_non_member
 * @constant
 * @type {number}
 */
export const DetermineViolationStatusReply_non_member: DetermineViolationStatusReply =
    DetermineViolationStatusReply.non_member; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DetermineViolationStatusReply_non_member */

/* START_OF_SYMBOL_DEFINITION non_member */
/**
 * @summary non_member
 * @constant
 * @type {number}
 */
export const non_member: DetermineViolationStatusReply =
    DetermineViolationStatusReply.non_member; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION non_member */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DetermineViolationStatusReply */
let _cached_decoder_for_DetermineViolationStatusReply: $.ASN1Decoder<DetermineViolationStatusReply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DetermineViolationStatusReply */

/* START_OF_SYMBOL_DEFINITION _decode_DetermineViolationStatusReply */
/**
 * @summary Decodes an ASN.1 element into a(n) DetermineViolationStatusReply
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DetermineViolationStatusReply} The decoded data structure.
 */
export function _decode_DetermineViolationStatusReply(el: _Element) {
    if (!_cached_decoder_for_DetermineViolationStatusReply) {
        _cached_decoder_for_DetermineViolationStatusReply = $._decodeEnumerated;
    }
    return _cached_decoder_for_DetermineViolationStatusReply(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DetermineViolationStatusReply */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DetermineViolationStatusReply */
let _cached_encoder_for_DetermineViolationStatusReply: $.ASN1Encoder<DetermineViolationStatusReply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DetermineViolationStatusReply */

/* START_OF_SYMBOL_DEFINITION _encode_DetermineViolationStatusReply */
/**
 * @summary Encodes a(n) DetermineViolationStatusReply into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DetermineViolationStatusReply, encoded as an ASN.1 Element.
 */
export function _encode_DetermineViolationStatusReply(
    value: DetermineViolationStatusReply,
    elGetter: $.ASN1Encoder<DetermineViolationStatusReply>
) {
    if (!_cached_encoder_for_DetermineViolationStatusReply) {
        _cached_encoder_for_DetermineViolationStatusReply = $._encodeEnumerated;
    }
    return _cached_encoder_for_DetermineViolationStatusReply(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DetermineViolationStatusReply */

/* eslint-enable */
