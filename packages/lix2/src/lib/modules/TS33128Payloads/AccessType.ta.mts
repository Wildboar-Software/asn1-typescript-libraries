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
 * @summary AccessType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessType  ::=  ENUMERATED
 * {
 *     threeGPPAccess(1),
 *     nonThreeGPPAccess(2),
 *     threeGPPandNonThreeGPPAccess(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AccessType {
    threeGPPAccess = 1,
    nonThreeGPPAccess = 2,
    threeGPPandNonThreeGPPAccess = 3,
}

/**
 * @summary AccessType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessType  ::=  ENUMERATED
 * {
 *     threeGPPAccess(1),
 *     nonThreeGPPAccess(2),
 *     threeGPPandNonThreeGPPAccess(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AccessType = _enum_for_AccessType;

/**
 * @summary AccessType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessType  ::=  ENUMERATED
 * {
 *     threeGPPAccess(1),
 *     nonThreeGPPAccess(2),
 *     threeGPPandNonThreeGPPAccess(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AccessType = _enum_for_AccessType;

/**
 * @summary AccessType_threeGPPAccess
 * @constant
 * @type {number}
 */
export
const AccessType_threeGPPAccess: AccessType = AccessType.threeGPPAccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary threeGPPAccess
 * @constant
 * @type {number}
 */
export
const threeGPPAccess: AccessType = AccessType.threeGPPAccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessType_nonThreeGPPAccess
 * @constant
 * @type {number}
 */
export
const AccessType_nonThreeGPPAccess: AccessType = AccessType.nonThreeGPPAccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nonThreeGPPAccess
 * @constant
 * @type {number}
 */
export
const nonThreeGPPAccess: AccessType = AccessType.nonThreeGPPAccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessType_threeGPPandNonThreeGPPAccess
 * @constant
 * @type {number}
 */
export
const AccessType_threeGPPandNonThreeGPPAccess: AccessType = AccessType.threeGPPandNonThreeGPPAccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary threeGPPandNonThreeGPPAccess
 * @constant
 * @type {number}
 */
export
const threeGPPandNonThreeGPPAccess: AccessType = AccessType.threeGPPandNonThreeGPPAccess; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AccessType: $.ASN1Decoder<AccessType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccessType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccessType (el: _Element): AccessType {
    if (!_cached_decoder_for_AccessType) { _cached_decoder_for_AccessType = $._decodeEnumerated; }
    return _cached_decoder_for_AccessType(el);
}

let _cached_encoder_for_AccessType: $.ASN1Encoder<AccessType> | null = null;

/**
 * @summary Encodes a(n) AccessType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessType, encoded as an ASN.1 Element.
 */
export
function _encode_AccessType (value: AccessType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccessType) { _cached_encoder_for_AccessType = $._encodeEnumerated; }
    return _cached_encoder_for_AccessType(value, elGetter);
}


/* eslint-enable */
