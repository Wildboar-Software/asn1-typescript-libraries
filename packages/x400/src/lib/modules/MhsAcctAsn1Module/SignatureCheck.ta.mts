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

/* START_OF_SYMBOL_DEFINITION SignatureCheck */
/**
 * @summary SignatureCheck
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignatureCheck  ::=  INTEGER {valid(1), failed(2)}
 * ```
 */
export type SignatureCheck = INTEGER;
/* END_OF_SYMBOL_DEFINITION SignatureCheck */

/* START_OF_SYMBOL_DEFINITION SignatureCheck_valid */
/**
 * @summary SignatureCheck_valid
 * @constant
 * @type {number}
 */
export const SignatureCheck_valid: SignatureCheck = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SignatureCheck_valid */

/* START_OF_SYMBOL_DEFINITION valid */
/**
 * @summary SignatureCheck_valid
 * @constant
 * @type {number}
 */
export const valid: SignatureCheck = SignatureCheck_valid; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION valid */

/* START_OF_SYMBOL_DEFINITION SignatureCheck_failed */
/**
 * @summary SignatureCheck_failed
 * @constant
 * @type {number}
 */
export const SignatureCheck_failed: SignatureCheck = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SignatureCheck_failed */

/* START_OF_SYMBOL_DEFINITION failed */
/**
 * @summary SignatureCheck_failed
 * @constant
 * @type {number}
 */
export const failed: SignatureCheck = SignatureCheck_failed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION failed */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignatureCheck */
let _cached_decoder_for_SignatureCheck: $.ASN1Decoder<SignatureCheck> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignatureCheck */

/* START_OF_SYMBOL_DEFINITION _decode_SignatureCheck */
/**
 * @summary Decodes an ASN.1 element into a(n) SignatureCheck
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignatureCheck} The decoded data structure.
 */
export function _decode_SignatureCheck(el: _Element) {
    if (!_cached_decoder_for_SignatureCheck) {
        _cached_decoder_for_SignatureCheck = $._decodeInteger;
    }
    return _cached_decoder_for_SignatureCheck(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SignatureCheck */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignatureCheck */
let _cached_encoder_for_SignatureCheck: $.ASN1Encoder<SignatureCheck> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignatureCheck */

/* START_OF_SYMBOL_DEFINITION _encode_SignatureCheck */
/**
 * @summary Encodes a(n) SignatureCheck into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignatureCheck, encoded as an ASN.1 Element.
 */
export function _encode_SignatureCheck(
    value: SignatureCheck,
    elGetter: $.ASN1Encoder<SignatureCheck>
) {
    if (!_cached_encoder_for_SignatureCheck) {
        _cached_encoder_for_SignatureCheck = $._encodeInteger;
    }
    return _cached_encoder_for_SignatureCheck(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SignatureCheck */

/* eslint-enable */
