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

/* START_OF_SYMBOL_DEFINITION _enum_for_RecipientReassignmentProhibited */
/**
 * @summary RecipientReassignmentProhibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientReassignmentProhibited  ::=  ENUMERATED {
 *   recipient-reassignment-allowed(0), recipient-reassignment-prohibited(1)
 * }
 * ```@enum {number}
 */
export enum _enum_for_RecipientReassignmentProhibited {
    recipient_reassignment_allowed = 0,
    recipient_reassignment_prohibited = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_RecipientReassignmentProhibited */

/* START_OF_SYMBOL_DEFINITION RecipientReassignmentProhibited */
/**
 * @summary RecipientReassignmentProhibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientReassignmentProhibited  ::=  ENUMERATED {
 *   recipient-reassignment-allowed(0), recipient-reassignment-prohibited(1)
 * }
 * ```@enum {number}
 */
export type RecipientReassignmentProhibited = _enum_for_RecipientReassignmentProhibited;
/* END_OF_SYMBOL_DEFINITION RecipientReassignmentProhibited */

/* START_OF_SYMBOL_DEFINITION RecipientReassignmentProhibited */
/**
 * @summary RecipientReassignmentProhibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientReassignmentProhibited  ::=  ENUMERATED {
 *   recipient-reassignment-allowed(0), recipient-reassignment-prohibited(1)
 * }
 * ```@enum {number}
 */
export const RecipientReassignmentProhibited = _enum_for_RecipientReassignmentProhibited;
/* END_OF_SYMBOL_DEFINITION RecipientReassignmentProhibited */

/* START_OF_SYMBOL_DEFINITION RecipientReassignmentProhibited_recipient_reassignment_allowed */
/**
 * @summary RecipientReassignmentProhibited_recipient_reassignment_allowed
 * @constant
 * @type {number}
 */
export const RecipientReassignmentProhibited_recipient_reassignment_allowed: RecipientReassignmentProhibited =
    RecipientReassignmentProhibited.recipient_reassignment_allowed; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RecipientReassignmentProhibited_recipient_reassignment_allowed */

/* START_OF_SYMBOL_DEFINITION recipient_reassignment_allowed */
/**
 * @summary recipient_reassignment_allowed
 * @constant
 * @type {number}
 */
export const recipient_reassignment_allowed: RecipientReassignmentProhibited =
    RecipientReassignmentProhibited.recipient_reassignment_allowed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION recipient_reassignment_allowed */

/* START_OF_SYMBOL_DEFINITION RecipientReassignmentProhibited_recipient_reassignment_prohibited */
/**
 * @summary RecipientReassignmentProhibited_recipient_reassignment_prohibited
 * @constant
 * @type {number}
 */
export const RecipientReassignmentProhibited_recipient_reassignment_prohibited: RecipientReassignmentProhibited =
    RecipientReassignmentProhibited.recipient_reassignment_prohibited; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RecipientReassignmentProhibited_recipient_reassignment_prohibited */

/* START_OF_SYMBOL_DEFINITION recipient_reassignment_prohibited */
/**
 * @summary recipient_reassignment_prohibited
 * @constant
 * @type {number}
 */
export const recipient_reassignment_prohibited: RecipientReassignmentProhibited =
    RecipientReassignmentProhibited.recipient_reassignment_prohibited; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION recipient_reassignment_prohibited */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientReassignmentProhibited */
let _cached_decoder_for_RecipientReassignmentProhibited: $.ASN1Decoder<RecipientReassignmentProhibited> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientReassignmentProhibited */

/* START_OF_SYMBOL_DEFINITION _decode_RecipientReassignmentProhibited */
/**
 * @summary Decodes an ASN.1 element into a(n) RecipientReassignmentProhibited
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientReassignmentProhibited} The decoded data structure.
 */
export function _decode_RecipientReassignmentProhibited(el: _Element) {
    if (!_cached_decoder_for_RecipientReassignmentProhibited) {
        _cached_decoder_for_RecipientReassignmentProhibited =
            $._decodeEnumerated;
    }
    return _cached_decoder_for_RecipientReassignmentProhibited(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RecipientReassignmentProhibited */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientReassignmentProhibited */
let _cached_encoder_for_RecipientReassignmentProhibited: $.ASN1Encoder<RecipientReassignmentProhibited> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientReassignmentProhibited */

/* START_OF_SYMBOL_DEFINITION _encode_RecipientReassignmentProhibited */
/**
 * @summary Encodes a(n) RecipientReassignmentProhibited into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientReassignmentProhibited, encoded as an ASN.1 Element.
 */
export function _encode_RecipientReassignmentProhibited(
    value: RecipientReassignmentProhibited,
    elGetter: $.ASN1Encoder<RecipientReassignmentProhibited>
) {
    if (!_cached_encoder_for_RecipientReassignmentProhibited) {
        _cached_encoder_for_RecipientReassignmentProhibited =
            $._encodeEnumerated;
    }
    return _cached_encoder_for_RecipientReassignmentProhibited(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RecipientReassignmentProhibited */

/* eslint-enable */
