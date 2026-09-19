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
enum _enum_for_AuthenticationType {
    unknown = 0,
    static_ = 1,
    radiusAAA = 2,
    dhcpAAA = 3,
    diameterAAA = 4,
}

/**
 * @summary AuthenticationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticationType  ::=  ENUMERATED
 * {
 *     unknown(0),
 *         -- AAA function for the target service is unknown
 *     static(1),
 *         -- The target service is assigned a static IP address & no AAA expected
 *     radiusAAA(2),
 *         -- AAA function for the target service is provided by RADIUS
 *     dhcpAAA(3),
 *         -- AAA function for the target service is provided by DHCP
 *     diameterAAA(4),
 *         -- AAA function for the target service is provided by DIAMETER
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AuthenticationType = _enum_for_AuthenticationType | ENUMERATED;

/**
 * @summary AuthenticationType_unknown
 * @constant
 * @type {number}
 */
export
const AuthenticationType_unknown: AuthenticationType = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: AuthenticationType = AuthenticationType_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AuthenticationType_static_
 * @constant
 * @type {number}
 */
export
const AuthenticationType_static_: AuthenticationType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary static_
 * @constant
 * @type {number}
 */
export
const static_: AuthenticationType = AuthenticationType_static_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AuthenticationType_radiusAAA
 * @constant
 * @type {number}
 */
export
const AuthenticationType_radiusAAA: AuthenticationType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary radiusAAA
 * @constant
 * @type {number}
 */
export
const radiusAAA: AuthenticationType = AuthenticationType_radiusAAA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AuthenticationType_dhcpAAA
 * @constant
 * @type {number}
 */
export
const AuthenticationType_dhcpAAA: AuthenticationType = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dhcpAAA
 * @constant
 * @type {number}
 */
export
const dhcpAAA: AuthenticationType = AuthenticationType_dhcpAAA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AuthenticationType_diameterAAA
 * @constant
 * @type {number}
 */
export
const AuthenticationType_diameterAAA: AuthenticationType = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary diameterAAA
 * @constant
 * @type {number}
 */
export
const diameterAAA: AuthenticationType = AuthenticationType_diameterAAA; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AuthenticationType: $.ASN1Decoder<AuthenticationType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticationType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthenticationType (el: _Element): AuthenticationType {
    if (!_cached_decoder_for_AuthenticationType) { _cached_decoder_for_AuthenticationType = $._decodeEnumerated; }
    return _cached_decoder_for_AuthenticationType(el);
}

let _cached_encoder_for_AuthenticationType: $.ASN1Encoder<AuthenticationType> | null = null;

/**
 * @summary Encodes a(n) AuthenticationType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticationType, encoded as an ASN.1 Element.
 */
export
function _encode_AuthenticationType (value: AuthenticationType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthenticationType) { _cached_encoder_for_AuthenticationType = $._encodeEnumerated; }
    return _cached_encoder_for_AuthenticationType(value, elGetter);
}


/* eslint-enable */
