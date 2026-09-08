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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary LocReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocReason  ::=  ENUMERATED
 * {    connectionToDeviceOrNetworkRestored        ( 0),
 *     performanceConditionRelieved            ( 1) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_LocReason {
    connectionToDeviceOrNetworkRestored = 0,
    performanceConditionRelieved = 1,
}

/**
 * @summary LocReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocReason  ::=  ENUMERATED
 * {    connectionToDeviceOrNetworkRestored        ( 0),
 *     performanceConditionRelieved            ( 1) }
 * ```
 * 
 * @enum {number}
 */
export
type LocReason = _enum_for_LocReason;

/**
 * @summary LocReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocReason  ::=  ENUMERATED
 * {    connectionToDeviceOrNetworkRestored        ( 0),
 *     performanceConditionRelieved            ( 1) }
 * ```
 * 
 * @enum {number}
 */
export
const LocReason = _enum_for_LocReason;

/**
 * @summary LocReason_connectionToDeviceOrNetworkRestored
 * @constant
 * @type {number}
 */
export
const LocReason_connectionToDeviceOrNetworkRestored: LocReason = LocReason.connectionToDeviceOrNetworkRestored; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connectionToDeviceOrNetworkRestored
 * @constant
 * @type {number}
 */
export
const connectionToDeviceOrNetworkRestored: LocReason = LocReason.connectionToDeviceOrNetworkRestored; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LocReason_performanceConditionRelieved
 * @constant
 * @type {number}
 */
export
const LocReason_performanceConditionRelieved: LocReason = LocReason.performanceConditionRelieved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary performanceConditionRelieved
 * @constant
 * @type {number}
 */
export
const performanceConditionRelieved: LocReason = LocReason.performanceConditionRelieved; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_LocReason: $.ASN1Decoder<LocReason> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocReason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocReason (el: _Element): LocReason {
    if (!_cached_decoder_for_LocReason) { _cached_decoder_for_LocReason = $._decodeEnumerated; }
    return _cached_decoder_for_LocReason(el);
}

let _cached_encoder_for_LocReason: $.ASN1Encoder<LocReason> | null = null;

/**
 * @summary Encodes a(n) LocReason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocReason, encoded as an ASN.1 Element.
 */
export
function _encode_LocReason (value: LocReason, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocReason) { _cached_encoder_for_LocReason = $._encodeEnumerated; }
    return _cached_encoder_for_LocReason(value, elGetter);
}


/* eslint-enable */
