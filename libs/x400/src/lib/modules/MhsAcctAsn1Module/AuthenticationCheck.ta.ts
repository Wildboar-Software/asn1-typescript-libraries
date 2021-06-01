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

/* START_OF_SYMBOL_DEFINITION AuthenticationCheck */
/**
 * @summary AuthenticationCheck
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthenticationCheck  ::=  INTEGER {validated(1), failed(2)}
 * ```
 */
export type AuthenticationCheck = INTEGER;
/* END_OF_SYMBOL_DEFINITION AuthenticationCheck */

/* START_OF_SYMBOL_DEFINITION AuthenticationCheck_validated */
/**
 * @summary AuthenticationCheck_validated
 * @constant
 * @type {number}
 */
export const AuthenticationCheck_validated: AuthenticationCheck = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AuthenticationCheck_validated */

/* START_OF_SYMBOL_DEFINITION validated */
/**
 * @summary AuthenticationCheck_validated
 * @constant
 * @type {number}
 */
export const validated: AuthenticationCheck = AuthenticationCheck_validated; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION validated */

/* START_OF_SYMBOL_DEFINITION AuthenticationCheck_failed */
/**
 * @summary AuthenticationCheck_failed
 * @constant
 * @type {number}
 */
export const AuthenticationCheck_failed: AuthenticationCheck = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AuthenticationCheck_failed */

/* START_OF_SYMBOL_DEFINITION failed */
/**
 * @summary AuthenticationCheck_failed
 * @constant
 * @type {number}
 */
export const failed: AuthenticationCheck = AuthenticationCheck_failed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION failed */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthenticationCheck */
let _cached_decoder_for_AuthenticationCheck: $.ASN1Decoder<AuthenticationCheck> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthenticationCheck */

/* START_OF_SYMBOL_DEFINITION _decode_AuthenticationCheck */
/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticationCheck
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthenticationCheck} The decoded data structure.
 */
export function _decode_AuthenticationCheck(el: _Element) {
    if (!_cached_decoder_for_AuthenticationCheck) {
        _cached_decoder_for_AuthenticationCheck = $._decodeInteger;
    }
    return _cached_decoder_for_AuthenticationCheck(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AuthenticationCheck */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthenticationCheck */
let _cached_encoder_for_AuthenticationCheck: $.ASN1Encoder<AuthenticationCheck> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthenticationCheck */

/* START_OF_SYMBOL_DEFINITION _encode_AuthenticationCheck */
/**
 * @summary Encodes a(n) AuthenticationCheck into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticationCheck, encoded as an ASN.1 Element.
 */
export function _encode_AuthenticationCheck(
    value: AuthenticationCheck,
    elGetter: $.ASN1Encoder<AuthenticationCheck>
) {
    if (!_cached_encoder_for_AuthenticationCheck) {
        _cached_encoder_for_AuthenticationCheck = $._encodeInteger;
    }
    return _cached_encoder_for_AuthenticationCheck(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AuthenticationCheck */

/* eslint-enable */
