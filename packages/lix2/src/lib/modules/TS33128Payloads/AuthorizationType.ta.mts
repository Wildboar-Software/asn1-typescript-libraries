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
 * @summary AuthorizationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthorizationType  ::=  ENUMERATED
 * {
 *     registration(1),
 *     deregistration(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AuthorizationType {
    registration = 1,
    deregistration = 2,
}

/**
 * @summary AuthorizationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthorizationType  ::=  ENUMERATED
 * {
 *     registration(1),
 *     deregistration(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AuthorizationType = _enum_for_AuthorizationType;

/**
 * @summary AuthorizationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthorizationType  ::=  ENUMERATED
 * {
 *     registration(1),
 *     deregistration(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AuthorizationType = _enum_for_AuthorizationType;

/**
 * @summary AuthorizationType_registration
 * @constant
 * @type {number}
 */
export
const AuthorizationType_registration: AuthorizationType = AuthorizationType.registration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registration
 * @constant
 * @type {number}
 */
export
const registration: AuthorizationType = AuthorizationType.registration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AuthorizationType_deregistration
 * @constant
 * @type {number}
 */
export
const AuthorizationType_deregistration: AuthorizationType = AuthorizationType.deregistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deregistration
 * @constant
 * @type {number}
 */
export
const deregistration: AuthorizationType = AuthorizationType.deregistration; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AuthorizationType: $.ASN1Decoder<AuthorizationType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthorizationType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthorizationType (el: _Element): AuthorizationType {
    if (!_cached_decoder_for_AuthorizationType) { _cached_decoder_for_AuthorizationType = $._decodeEnumerated; }
    return _cached_decoder_for_AuthorizationType(el);
}

let _cached_encoder_for_AuthorizationType: $.ASN1Encoder<AuthorizationType> | null = null;

/**
 * @summary Encodes a(n) AuthorizationType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthorizationType, encoded as an ASN.1 Element.
 */
export
function _encode_AuthorizationType (value: AuthorizationType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthorizationType) { _cached_encoder_for_AuthorizationType = $._encodeEnumerated; }
    return _cached_encoder_for_AuthorizationType(value, elGetter);
}


/* eslint-enable */
