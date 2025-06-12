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

/* START_OF_SYMBOL_DEFINITION _enum_for_AssignErr */
export enum _enum_for_AssignErr {
    invalidAttributeCertificate = 0,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_AssignErr */

/* START_OF_SYMBOL_DEFINITION AssignErr */
/**
 * @summary AssignErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AssignErr  ::=  ENUMERATED {
 *   invalidAttributeCertificate (0),
 *   ... }
 * ```@enum {number}
 */
export type AssignErr = _enum_for_AssignErr | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION AssignErr */

/* START_OF_SYMBOL_DEFINITION AssignErr_invalidAttributeCertificate */
/**
 * @summary AssignErr_invalidAttributeCertificate
 * @constant
 * @type {number}
 */
export const AssignErr_invalidAttributeCertificate: AssignErr = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AssignErr_invalidAttributeCertificate */

/* START_OF_SYMBOL_DEFINITION invalidAttributeCertificate */
/**
 * @summary invalidAttributeCertificate
 * @constant
 * @type {number}
 */
export const invalidAttributeCertificate: AssignErr = AssignErr_invalidAttributeCertificate; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidAttributeCertificate */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AssignErr */
let _cached_decoder_for_AssignErr: $.ASN1Decoder<AssignErr> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AssignErr */

/* START_OF_SYMBOL_DEFINITION _decode_AssignErr */
/**
 * @summary Decodes an ASN.1 element into a(n) AssignErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AssignErr} The decoded data structure.
 */
export function _decode_AssignErr(el: _Element) {
    if (!_cached_decoder_for_AssignErr) {
        _cached_decoder_for_AssignErr = $._decodeEnumerated;
    }
    return _cached_decoder_for_AssignErr(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AssignErr */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AssignErr */
let _cached_encoder_for_AssignErr: $.ASN1Encoder<AssignErr> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AssignErr */

/* START_OF_SYMBOL_DEFINITION _encode_AssignErr */
/**
 * @summary Encodes a(n) AssignErr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssignErr, encoded as an ASN.1 Element.
 */
export function _encode_AssignErr(
    value: AssignErr,
    elGetter: $.ASN1Encoder<AssignErr>
) {
    if (!_cached_encoder_for_AssignErr) {
        _cached_encoder_for_AssignErr = $._encodeEnumerated;
    }
    return _cached_encoder_for_AssignErr(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AssignErr */

/* eslint-enable */
