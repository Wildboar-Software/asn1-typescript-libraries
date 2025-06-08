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

/* START_OF_SYMBOL_DEFINITION AuthenticationMethod */
/**
 * @summary AuthenticationMethod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthenticationMethod  ::=  INTEGER {
 *   no-authentication(0), simple-password(1), strong-authentication(2)}
 * ```
 */
export type AuthenticationMethod = INTEGER;
/* END_OF_SYMBOL_DEFINITION AuthenticationMethod */

/* START_OF_SYMBOL_DEFINITION AuthenticationMethod_no_authentication */
/**
 * @summary AuthenticationMethod_no_authentication
 * @constant
 * @type {number}
 */
export const AuthenticationMethod_no_authentication: AuthenticationMethod = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AuthenticationMethod_no_authentication */

/* START_OF_SYMBOL_DEFINITION no_authentication */
/**
 * @summary AuthenticationMethod_no_authentication
 * @constant
 * @type {number}
 */
export const no_authentication: AuthenticationMethod = AuthenticationMethod_no_authentication; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION no_authentication */

/* START_OF_SYMBOL_DEFINITION AuthenticationMethod_simple_password */
/**
 * @summary AuthenticationMethod_simple_password
 * @constant
 * @type {number}
 */
export const AuthenticationMethod_simple_password: AuthenticationMethod = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AuthenticationMethod_simple_password */

/* START_OF_SYMBOL_DEFINITION simple_password */
/**
 * @summary AuthenticationMethod_simple_password
 * @constant
 * @type {number}
 */
export const simple_password: AuthenticationMethod = AuthenticationMethod_simple_password; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION simple_password */

/* START_OF_SYMBOL_DEFINITION AuthenticationMethod_strong_authentication */
/**
 * @summary AuthenticationMethod_strong_authentication
 * @constant
 * @type {number}
 */
export const AuthenticationMethod_strong_authentication: AuthenticationMethod = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AuthenticationMethod_strong_authentication */

/* START_OF_SYMBOL_DEFINITION strong_authentication */
/**
 * @summary AuthenticationMethod_strong_authentication
 * @constant
 * @type {number}
 */
export const strong_authentication: AuthenticationMethod = AuthenticationMethod_strong_authentication; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION strong_authentication */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthenticationMethod */
let _cached_decoder_for_AuthenticationMethod: $.ASN1Decoder<AuthenticationMethod> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthenticationMethod */

/* START_OF_SYMBOL_DEFINITION _decode_AuthenticationMethod */
/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticationMethod
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthenticationMethod} The decoded data structure.
 */
export function _decode_AuthenticationMethod(el: _Element) {
    if (!_cached_decoder_for_AuthenticationMethod) {
        _cached_decoder_for_AuthenticationMethod = $._decodeInteger;
    }
    return _cached_decoder_for_AuthenticationMethod(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AuthenticationMethod */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthenticationMethod */
let _cached_encoder_for_AuthenticationMethod: $.ASN1Encoder<AuthenticationMethod> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthenticationMethod */

/* START_OF_SYMBOL_DEFINITION _encode_AuthenticationMethod */
/**
 * @summary Encodes a(n) AuthenticationMethod into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticationMethod, encoded as an ASN.1 Element.
 */
export function _encode_AuthenticationMethod(
    value: AuthenticationMethod,
    elGetter: $.ASN1Encoder<AuthenticationMethod>
) {
    if (!_cached_encoder_for_AuthenticationMethod) {
        _cached_encoder_for_AuthenticationMethod = $._encodeInteger;
    }
    return _cached_encoder_for_AuthenticationMethod(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AuthenticationMethod */

/* eslint-enable */
