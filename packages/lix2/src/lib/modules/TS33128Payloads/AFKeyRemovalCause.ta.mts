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
 * @summary AFKeyRemovalCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AFKeyRemovalCause  ::=  ENUMERATED
 * {
 *     unknown(1),
 *     keyExpiry(2),
 *     applicationSpecific(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AFKeyRemovalCause {
    unknown = 1,
    keyExpiry = 2,
    applicationSpecific = 3,
}

/**
 * @summary AFKeyRemovalCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AFKeyRemovalCause  ::=  ENUMERATED
 * {
 *     unknown(1),
 *     keyExpiry(2),
 *     applicationSpecific(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AFKeyRemovalCause = _enum_for_AFKeyRemovalCause;

/**
 * @summary AFKeyRemovalCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AFKeyRemovalCause  ::=  ENUMERATED
 * {
 *     unknown(1),
 *     keyExpiry(2),
 *     applicationSpecific(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AFKeyRemovalCause = _enum_for_AFKeyRemovalCause;

/**
 * @summary AFKeyRemovalCause_unknown
 * @constant
 * @type {number}
 */
export
const AFKeyRemovalCause_unknown: AFKeyRemovalCause = AFKeyRemovalCause.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: AFKeyRemovalCause = AFKeyRemovalCause.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AFKeyRemovalCause_keyExpiry
 * @constant
 * @type {number}
 */
export
const AFKeyRemovalCause_keyExpiry: AFKeyRemovalCause = AFKeyRemovalCause.keyExpiry; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary keyExpiry
 * @constant
 * @type {number}
 */
export
const keyExpiry: AFKeyRemovalCause = AFKeyRemovalCause.keyExpiry; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AFKeyRemovalCause_applicationSpecific
 * @constant
 * @type {number}
 */
export
const AFKeyRemovalCause_applicationSpecific: AFKeyRemovalCause = AFKeyRemovalCause.applicationSpecific; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary applicationSpecific
 * @constant
 * @type {number}
 */
export
const applicationSpecific: AFKeyRemovalCause = AFKeyRemovalCause.applicationSpecific; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AFKeyRemovalCause: $.ASN1Decoder<AFKeyRemovalCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AFKeyRemovalCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AFKeyRemovalCause (el: _Element): AFKeyRemovalCause {
    if (!_cached_decoder_for_AFKeyRemovalCause) { _cached_decoder_for_AFKeyRemovalCause = $._decodeEnumerated; }
    return _cached_decoder_for_AFKeyRemovalCause(el);
}

let _cached_encoder_for_AFKeyRemovalCause: $.ASN1Encoder<AFKeyRemovalCause> | null = null;

/**
 * @summary Encodes a(n) AFKeyRemovalCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AFKeyRemovalCause, encoded as an ASN.1 Element.
 */
export
function _encode_AFKeyRemovalCause (value: AFKeyRemovalCause, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AFKeyRemovalCause) { _cached_encoder_for_AFKeyRemovalCause = $._encodeEnumerated; }
    return _cached_encoder_for_AFKeyRemovalCause(value, elGetter);
}


/* eslint-enable */
