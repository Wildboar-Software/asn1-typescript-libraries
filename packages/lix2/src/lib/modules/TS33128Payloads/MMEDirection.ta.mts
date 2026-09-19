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
 * @summary MMEDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEDirection  ::=  ENUMERATED
 * {
 *     networkInitiated(1),
 *     uEInitiated(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMEDirection {
    networkInitiated = 1,
    uEInitiated = 2,
}

/**
 * @summary MMEDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEDirection  ::=  ENUMERATED
 * {
 *     networkInitiated(1),
 *     uEInitiated(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMEDirection = _enum_for_MMEDirection;

/**
 * @summary MMEDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEDirection  ::=  ENUMERATED
 * {
 *     networkInitiated(1),
 *     uEInitiated(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMEDirection = _enum_for_MMEDirection;

/**
 * @summary MMEDirection_networkInitiated
 * @constant
 * @type {number}
 */
export
const MMEDirection_networkInitiated: MMEDirection = MMEDirection.networkInitiated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkInitiated
 * @constant
 * @type {number}
 */
export
const networkInitiated: MMEDirection = MMEDirection.networkInitiated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMEDirection_uEInitiated
 * @constant
 * @type {number}
 */
export
const MMEDirection_uEInitiated: MMEDirection = MMEDirection.uEInitiated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEInitiated
 * @constant
 * @type {number}
 */
export
const uEInitiated: MMEDirection = MMEDirection.uEInitiated; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MMEDirection: $.ASN1Decoder<MMEDirection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMEDirection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMEDirection (el: _Element): MMEDirection {
    if (!_cached_decoder_for_MMEDirection) { _cached_decoder_for_MMEDirection = $._decodeEnumerated; }
    return _cached_decoder_for_MMEDirection(el);
}

let _cached_encoder_for_MMEDirection: $.ASN1Encoder<MMEDirection> | null = null;

/**
 * @summary Encodes a(n) MMEDirection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMEDirection, encoded as an ASN.1 Element.
 */
export
function _encode_MMEDirection (value: MMEDirection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMEDirection) { _cached_encoder_for_MMEDirection = $._encodeEnumerated; }
    return _cached_encoder_for_MMEDirection(value, elGetter);
}


/* eslint-enable */
