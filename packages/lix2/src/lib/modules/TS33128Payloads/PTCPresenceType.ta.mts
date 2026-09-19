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
 * @summary PTCPresenceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCPresenceType   ::=  ENUMERATED
 * {
 *     pTCClient(1),
 *     pTCGroup(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PTCPresenceType {
    pTCClient = 1,
    pTCGroup = 2,
}

/**
 * @summary PTCPresenceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCPresenceType   ::=  ENUMERATED
 * {
 *     pTCClient(1),
 *     pTCGroup(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PTCPresenceType = _enum_for_PTCPresenceType;

/**
 * @summary PTCPresenceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCPresenceType   ::=  ENUMERATED
 * {
 *     pTCClient(1),
 *     pTCGroup(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PTCPresenceType = _enum_for_PTCPresenceType;

/**
 * @summary PTCPresenceType_pTCClient
 * @constant
 * @type {number}
 */
export
const PTCPresenceType_pTCClient: PTCPresenceType = PTCPresenceType.pTCClient; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCClient
 * @constant
 * @type {number}
 */
export
const pTCClient: PTCPresenceType = PTCPresenceType.pTCClient; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCPresenceType_pTCGroup
 * @constant
 * @type {number}
 */
export
const PTCPresenceType_pTCGroup: PTCPresenceType = PTCPresenceType.pTCGroup; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCGroup
 * @constant
 * @type {number}
 */
export
const pTCGroup: PTCPresenceType = PTCPresenceType.pTCGroup; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PTCPresenceType: $.ASN1Decoder<PTCPresenceType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCPresenceType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCPresenceType (el: _Element): PTCPresenceType {
    if (!_cached_decoder_for_PTCPresenceType) { _cached_decoder_for_PTCPresenceType = $._decodeEnumerated; }
    return _cached_decoder_for_PTCPresenceType(el);
}

let _cached_encoder_for_PTCPresenceType: $.ASN1Encoder<PTCPresenceType> | null = null;

/**
 * @summary Encodes a(n) PTCPresenceType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCPresenceType, encoded as an ASN.1 Element.
 */
export
function _encode_PTCPresenceType (value: PTCPresenceType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCPresenceType) { _cached_encoder_for_PTCPresenceType = $._encodeEnumerated; }
    return _cached_encoder_for_PTCPresenceType(value, elGetter);
}


/* eslint-enable */
