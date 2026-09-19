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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_RegistrationRequest {
    register = 1,
    re_register = 2,
    de_register = 3,
}

/**
 * @summary RegistrationRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RegistrationRequest  ::=  ENUMERATED
 * {
 *  register (1),
 *  re-register (2),
 *  de-register (3),
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RegistrationRequest = _enum_for_RegistrationRequest | ENUMERATED;

/**
 * @summary RegistrationRequest_register
 * @constant
 * @type {number}
 */
export
const RegistrationRequest_register: RegistrationRequest = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary register
 * @constant
 * @type {number}
 */
export
const register: RegistrationRequest = RegistrationRequest_register; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RegistrationRequest_re_register
 * @constant
 * @type {number}
 */
export
const RegistrationRequest_re_register: RegistrationRequest = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary re_register
 * @constant
 * @type {number}
 */
export
const re_register: RegistrationRequest = RegistrationRequest_re_register; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RegistrationRequest_de_register
 * @constant
 * @type {number}
 */
export
const RegistrationRequest_de_register: RegistrationRequest = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary de_register
 * @constant
 * @type {number}
 */
export
const de_register: RegistrationRequest = RegistrationRequest_de_register; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_RegistrationRequest: $.ASN1Decoder<RegistrationRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RegistrationRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RegistrationRequest (el: _Element): RegistrationRequest {
    if (!_cached_decoder_for_RegistrationRequest) { _cached_decoder_for_RegistrationRequest = $._decodeEnumerated; }
    return _cached_decoder_for_RegistrationRequest(el);
}

let _cached_encoder_for_RegistrationRequest: $.ASN1Encoder<RegistrationRequest> | null = null;

/**
 * @summary Encodes a(n) RegistrationRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegistrationRequest, encoded as an ASN.1 Element.
 */
export
function _encode_RegistrationRequest (value: RegistrationRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RegistrationRequest) { _cached_encoder_for_RegistrationRequest = $._encodeEnumerated; }
    return _cached_encoder_for_RegistrationRequest(value, elGetter);
}


/* eslint-enable */
