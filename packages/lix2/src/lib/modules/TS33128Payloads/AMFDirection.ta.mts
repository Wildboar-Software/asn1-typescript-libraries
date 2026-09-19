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
 * @summary AMFDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFDirection  ::=  ENUMERATED
 * {
 *     networkInitiated(1),
 *     uEInitiated(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AMFDirection {
    networkInitiated = 1,
    uEInitiated = 2,
}

/**
 * @summary AMFDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFDirection  ::=  ENUMERATED
 * {
 *     networkInitiated(1),
 *     uEInitiated(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AMFDirection = _enum_for_AMFDirection;

/**
 * @summary AMFDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFDirection  ::=  ENUMERATED
 * {
 *     networkInitiated(1),
 *     uEInitiated(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AMFDirection = _enum_for_AMFDirection;

/**
 * @summary AMFDirection_networkInitiated
 * @constant
 * @type {number}
 */
export
const AMFDirection_networkInitiated: AMFDirection = AMFDirection.networkInitiated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkInitiated
 * @constant
 * @type {number}
 */
export
const networkInitiated: AMFDirection = AMFDirection.networkInitiated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFDirection_uEInitiated
 * @constant
 * @type {number}
 */
export
const AMFDirection_uEInitiated: AMFDirection = AMFDirection.uEInitiated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEInitiated
 * @constant
 * @type {number}
 */
export
const uEInitiated: AMFDirection = AMFDirection.uEInitiated; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AMFDirection: $.ASN1Decoder<AMFDirection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMFDirection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMFDirection (el: _Element): AMFDirection {
    if (!_cached_decoder_for_AMFDirection) { _cached_decoder_for_AMFDirection = $._decodeEnumerated; }
    return _cached_decoder_for_AMFDirection(el);
}

let _cached_encoder_for_AMFDirection: $.ASN1Encoder<AMFDirection> | null = null;

/**
 * @summary Encodes a(n) AMFDirection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMFDirection, encoded as an ASN.1 Element.
 */
export
function _encode_AMFDirection (value: AMFDirection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMFDirection) { _cached_encoder_for_AMFDirection = $._encodeEnumerated; }
    return _cached_encoder_for_AMFDirection(value, elGetter);
}


/* eslint-enable */
