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
 * @summary RoleProvider
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoleProvider  ::=  ENUMERATED {
 *     manufacturer    (1),
 *     reseller        (2),
 *     integrator      (3),
 *     other           (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RoleProvider {
    manufacturer = 1,
    reseller = 2,
    integrator = 3,
    other = 4,
}

/**
 * @summary RoleProvider
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoleProvider  ::=  ENUMERATED {
 *     manufacturer    (1),
 *     reseller        (2),
 *     integrator      (3),
 *     other           (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RoleProvider = _enum_for_RoleProvider;

/**
 * @summary RoleProvider
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoleProvider  ::=  ENUMERATED {
 *     manufacturer    (1),
 *     reseller        (2),
 *     integrator      (3),
 *     other           (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RoleProvider = _enum_for_RoleProvider;

/**
 * @summary RoleProvider_manufacturer
 * @constant
 * @type {number}
 */
export
const RoleProvider_manufacturer: RoleProvider = RoleProvider.manufacturer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary manufacturer
 * @constant
 * @type {number}
 */
export
const manufacturer: RoleProvider = RoleProvider.manufacturer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RoleProvider_reseller
 * @constant
 * @type {number}
 */
export
const RoleProvider_reseller: RoleProvider = RoleProvider.reseller; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reseller
 * @constant
 * @type {number}
 */
export
const reseller: RoleProvider = RoleProvider.reseller; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RoleProvider_integrator
 * @constant
 * @type {number}
 */
export
const RoleProvider_integrator: RoleProvider = RoleProvider.integrator; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary integrator
 * @constant
 * @type {number}
 */
export
const integrator: RoleProvider = RoleProvider.integrator; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RoleProvider_other
 * @constant
 * @type {number}
 */
export
const RoleProvider_other: RoleProvider = RoleProvider.other; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export
const other: RoleProvider = RoleProvider.other; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_RoleProvider: $.ASN1Decoder<RoleProvider> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RoleProvider
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RoleProvider (el: _Element): RoleProvider {
    if (!_cached_decoder_for_RoleProvider) { _cached_decoder_for_RoleProvider = $._decodeEnumerated; }
    return _cached_decoder_for_RoleProvider(el);
}

let _cached_encoder_for_RoleProvider: $.ASN1Encoder<RoleProvider> | null = null;

/**
 * @summary Encodes a(n) RoleProvider into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoleProvider, encoded as an ASN.1 Element.
 */
export
function _encode_RoleProvider (value: RoleProvider, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RoleProvider) { _cached_encoder_for_RoleProvider = $._encodeEnumerated; }
    return _cached_encoder_for_RoleProvider(value, elGetter);
}


/* eslint-enable */
