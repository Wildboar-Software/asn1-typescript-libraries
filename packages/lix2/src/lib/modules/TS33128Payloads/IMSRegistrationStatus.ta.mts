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



/**
 * @summary IMSRegistrationStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSRegistrationStatus  ::=  ENUMERATED
 * {
 *     initialRegistration(1),
 *     reregistration(2),
 *     timeoutDeregistration(3),
 *     userDeregistration(4),
 *     administrativeDeregistration(5),
 *     authenticationFailure(6),
 *     authenticationTimeout(7),
 *     unregisteredUser(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_IMSRegistrationStatus {
    initialRegistration = 1,
    reregistration = 2,
    timeoutDeregistration = 3,
    userDeregistration = 4,
    administrativeDeregistration = 5,
    authenticationFailure = 6,
    authenticationTimeout = 7,
    unregisteredUser = 8,
}

/**
 * @summary IMSRegistrationStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSRegistrationStatus  ::=  ENUMERATED
 * {
 *     initialRegistration(1),
 *     reregistration(2),
 *     timeoutDeregistration(3),
 *     userDeregistration(4),
 *     administrativeDeregistration(5),
 *     authenticationFailure(6),
 *     authenticationTimeout(7),
 *     unregisteredUser(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type IMSRegistrationStatus = _enum_for_IMSRegistrationStatus;

/**
 * @summary IMSRegistrationStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSRegistrationStatus  ::=  ENUMERATED
 * {
 *     initialRegistration(1),
 *     reregistration(2),
 *     timeoutDeregistration(3),
 *     userDeregistration(4),
 *     administrativeDeregistration(5),
 *     authenticationFailure(6),
 *     authenticationTimeout(7),
 *     unregisteredUser(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const IMSRegistrationStatus = _enum_for_IMSRegistrationStatus;

/**
 * @summary IMSRegistrationStatus_initialRegistration
 * @constant
 * @type {number}
 */
export
const IMSRegistrationStatus_initialRegistration: IMSRegistrationStatus = IMSRegistrationStatus.initialRegistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary initialRegistration
 * @constant
 * @type {number}
 */
export
const initialRegistration: IMSRegistrationStatus = IMSRegistrationStatus.initialRegistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSRegistrationStatus_reregistration
 * @constant
 * @type {number}
 */
export
const IMSRegistrationStatus_reregistration: IMSRegistrationStatus = IMSRegistrationStatus.reregistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reregistration
 * @constant
 * @type {number}
 */
export
const reregistration: IMSRegistrationStatus = IMSRegistrationStatus.reregistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSRegistrationStatus_timeoutDeregistration
 * @constant
 * @type {number}
 */
export
const IMSRegistrationStatus_timeoutDeregistration: IMSRegistrationStatus = IMSRegistrationStatus.timeoutDeregistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeoutDeregistration
 * @constant
 * @type {number}
 */
export
const timeoutDeregistration: IMSRegistrationStatus = IMSRegistrationStatus.timeoutDeregistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSRegistrationStatus_userDeregistration
 * @constant
 * @type {number}
 */
export
const IMSRegistrationStatus_userDeregistration: IMSRegistrationStatus = IMSRegistrationStatus.userDeregistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userDeregistration
 * @constant
 * @type {number}
 */
export
const userDeregistration: IMSRegistrationStatus = IMSRegistrationStatus.userDeregistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSRegistrationStatus_administrativeDeregistration
 * @constant
 * @type {number}
 */
export
const IMSRegistrationStatus_administrativeDeregistration: IMSRegistrationStatus = IMSRegistrationStatus.administrativeDeregistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary administrativeDeregistration
 * @constant
 * @type {number}
 */
export
const administrativeDeregistration: IMSRegistrationStatus = IMSRegistrationStatus.administrativeDeregistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSRegistrationStatus_authenticationFailure
 * @constant
 * @type {number}
 */
export
const IMSRegistrationStatus_authenticationFailure: IMSRegistrationStatus = IMSRegistrationStatus.authenticationFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authenticationFailure
 * @constant
 * @type {number}
 */
export
const authenticationFailure: IMSRegistrationStatus = IMSRegistrationStatus.authenticationFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSRegistrationStatus_authenticationTimeout
 * @constant
 * @type {number}
 */
export
const IMSRegistrationStatus_authenticationTimeout: IMSRegistrationStatus = IMSRegistrationStatus.authenticationTimeout; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authenticationTimeout
 * @constant
 * @type {number}
 */
export
const authenticationTimeout: IMSRegistrationStatus = IMSRegistrationStatus.authenticationTimeout; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSRegistrationStatus_unregisteredUser
 * @constant
 * @type {number}
 */
export
const IMSRegistrationStatus_unregisteredUser: IMSRegistrationStatus = IMSRegistrationStatus.unregisteredUser; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unregisteredUser
 * @constant
 * @type {number}
 */
export
const unregisteredUser: IMSRegistrationStatus = IMSRegistrationStatus.unregisteredUser; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_IMSRegistrationStatus: $.ASN1Decoder<IMSRegistrationStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMSRegistrationStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMSRegistrationStatus (el: _Element): IMSRegistrationStatus {
    if (!_cached_decoder_for_IMSRegistrationStatus) { _cached_decoder_for_IMSRegistrationStatus = $._decodeEnumerated; }
    return _cached_decoder_for_IMSRegistrationStatus(el);
}

let _cached_encoder_for_IMSRegistrationStatus: $.ASN1Encoder<IMSRegistrationStatus> | null = null;

/**
 * @summary Encodes a(n) IMSRegistrationStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMSRegistrationStatus, encoded as an ASN.1 Element.
 */
export
function _encode_IMSRegistrationStatus (value: IMSRegistrationStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMSRegistrationStatus) { _cached_encoder_for_IMSRegistrationStatus = $._encodeEnumerated; }
    return _cached_encoder_for_IMSRegistrationStatus(value, elGetter);
}


/* eslint-enable */
