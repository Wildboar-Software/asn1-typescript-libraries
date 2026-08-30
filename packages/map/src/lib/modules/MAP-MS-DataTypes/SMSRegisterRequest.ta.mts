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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



export
enum _enum_for_SMSRegisterRequest {
    sms_registration_required = 0,
    sms_registration_not_preferred = 1,
    no_preference = 2,
}

/**
 * @summary SMSRegisterRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSRegisterRequest ::=  ENUMERATED {
 *     sms-registration-required  (0),
 *     sms-registration-not-preferred  (1),
 *     no-preference  (2),
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type SMSRegisterRequest = _enum_for_SMSRegisterRequest | ENUMERATED;

/**
 * @summary SMSRegisterRequest_sms_registration_required
 * @constant
 * @type {number}
 */
export
const SMSRegisterRequest_sms_registration_required: SMSRegisterRequest = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sms_registration_required
 * @constant
 * @type {number}
 */
export
const sms_registration_required: SMSRegisterRequest = SMSRegisterRequest_sms_registration_required; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSRegisterRequest_sms_registration_not_preferred
 * @constant
 * @type {number}
 */
export
const SMSRegisterRequest_sms_registration_not_preferred: SMSRegisterRequest = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sms_registration_not_preferred
 * @constant
 * @type {number}
 */
export
const sms_registration_not_preferred: SMSRegisterRequest = SMSRegisterRequest_sms_registration_not_preferred; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSRegisterRequest_no_preference
 * @constant
 * @type {number}
 */
export
const SMSRegisterRequest_no_preference: SMSRegisterRequest = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no_preference
 * @constant
 * @type {number}
 */
export
const no_preference: SMSRegisterRequest = SMSRegisterRequest_no_preference; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SMSRegisterRequest: $.ASN1Decoder<SMSRegisterRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMSRegisterRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMSRegisterRequest (el: _Element): SMSRegisterRequest {
    if (!_cached_decoder_for_SMSRegisterRequest) { _cached_decoder_for_SMSRegisterRequest = $._decodeEnumerated; }
    return _cached_decoder_for_SMSRegisterRequest(el);
}

let _cached_encoder_for_SMSRegisterRequest: $.ASN1Encoder<SMSRegisterRequest> | null = null;

/**
 * @summary Encodes a(n) SMSRegisterRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMSRegisterRequest, encoded as an ASN.1 Element.
 */
export
function _encode_SMSRegisterRequest (value: SMSRegisterRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMSRegisterRequest) { _cached_encoder_for_SMSRegisterRequest = $._encodeEnumerated; }
    return _cached_encoder_for_SMSRegisterRequest(value, elGetter);
}


/* eslint-enable */
