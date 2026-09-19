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
 * @summary RCSRegistrationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSRegistrationType  ::=  ENUMERATED
 * {
 *     registration(1),
 *     reRegistration(2),
 *     uEDeregistration(3),
 *     networkDeregistration(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RCSRegistrationType {
    registration = 1,
    reRegistration = 2,
    uEDeregistration = 3,
    networkDeregistration = 4,
}

/**
 * @summary RCSRegistrationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSRegistrationType  ::=  ENUMERATED
 * {
 *     registration(1),
 *     reRegistration(2),
 *     uEDeregistration(3),
 *     networkDeregistration(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RCSRegistrationType = _enum_for_RCSRegistrationType;

/**
 * @summary RCSRegistrationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSRegistrationType  ::=  ENUMERATED
 * {
 *     registration(1),
 *     reRegistration(2),
 *     uEDeregistration(3),
 *     networkDeregistration(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RCSRegistrationType = _enum_for_RCSRegistrationType;

/**
 * @summary RCSRegistrationType_registration
 * @constant
 * @type {number}
 */
export
const RCSRegistrationType_registration: RCSRegistrationType = RCSRegistrationType.registration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registration
 * @constant
 * @type {number}
 */
export
const registration: RCSRegistrationType = RCSRegistrationType.registration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSRegistrationType_reRegistration
 * @constant
 * @type {number}
 */
export
const RCSRegistrationType_reRegistration: RCSRegistrationType = RCSRegistrationType.reRegistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reRegistration
 * @constant
 * @type {number}
 */
export
const reRegistration: RCSRegistrationType = RCSRegistrationType.reRegistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSRegistrationType_uEDeregistration
 * @constant
 * @type {number}
 */
export
const RCSRegistrationType_uEDeregistration: RCSRegistrationType = RCSRegistrationType.uEDeregistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEDeregistration
 * @constant
 * @type {number}
 */
export
const uEDeregistration: RCSRegistrationType = RCSRegistrationType.uEDeregistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSRegistrationType_networkDeregistration
 * @constant
 * @type {number}
 */
export
const RCSRegistrationType_networkDeregistration: RCSRegistrationType = RCSRegistrationType.networkDeregistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkDeregistration
 * @constant
 * @type {number}
 */
export
const networkDeregistration: RCSRegistrationType = RCSRegistrationType.networkDeregistration; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_RCSRegistrationType: $.ASN1Decoder<RCSRegistrationType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RCSRegistrationType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RCSRegistrationType (el: _Element): RCSRegistrationType {
    if (!_cached_decoder_for_RCSRegistrationType) { _cached_decoder_for_RCSRegistrationType = $._decodeEnumerated; }
    return _cached_decoder_for_RCSRegistrationType(el);
}

let _cached_encoder_for_RCSRegistrationType: $.ASN1Encoder<RCSRegistrationType> | null = null;

/**
 * @summary Encodes a(n) RCSRegistrationType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RCSRegistrationType, encoded as an ASN.1 Element.
 */
export
function _encode_RCSRegistrationType (value: RCSRegistrationType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RCSRegistrationType) { _cached_encoder_for_RCSRegistrationType = $._encodeEnumerated; }
    return _cached_encoder_for_RCSRegistrationType(value, elGetter);
}


/* eslint-enable */
