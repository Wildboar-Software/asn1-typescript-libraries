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
 * @summary SecurityMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityMode  ::=  ENUMERATED
 * {     allEvents                     (0),
 *     allAcks                     (1),
 *     allServReqs                     (2) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SecurityMode {
    allEvents = 0,
    allAcks = 1,
    allServReqs = 2,
}

/**
 * @summary SecurityMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityMode  ::=  ENUMERATED
 * {     allEvents                     (0),
 *     allAcks                     (1),
 *     allServReqs                     (2) }
 * ```
 * 
 * @enum {number}
 */
export
type SecurityMode = _enum_for_SecurityMode;

/**
 * @summary SecurityMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityMode  ::=  ENUMERATED
 * {     allEvents                     (0),
 *     allAcks                     (1),
 *     allServReqs                     (2) }
 * ```
 * 
 * @enum {number}
 */
export
const SecurityMode = _enum_for_SecurityMode;

/**
 * @summary SecurityMode_allEvents
 * @constant
 * @type {number}
 */
export
const SecurityMode_allEvents: SecurityMode = SecurityMode.allEvents; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allEvents
 * @constant
 * @type {number}
 */
export
const allEvents: SecurityMode = SecurityMode.allEvents; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SecurityMode_allAcks
 * @constant
 * @type {number}
 */
export
const SecurityMode_allAcks: SecurityMode = SecurityMode.allAcks; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allAcks
 * @constant
 * @type {number}
 */
export
const allAcks: SecurityMode = SecurityMode.allAcks; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SecurityMode_allServReqs
 * @constant
 * @type {number}
 */
export
const SecurityMode_allServReqs: SecurityMode = SecurityMode.allServReqs; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allServReqs
 * @constant
 * @type {number}
 */
export
const allServReqs: SecurityMode = SecurityMode.allServReqs; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SecurityMode: $.ASN1Decoder<SecurityMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SecurityMode (el: _Element): SecurityMode {
    if (!_cached_decoder_for_SecurityMode) { _cached_decoder_for_SecurityMode = $._decodeEnumerated; }
    return _cached_decoder_for_SecurityMode(el);
}

let _cached_encoder_for_SecurityMode: $.ASN1Encoder<SecurityMode> | null = null;

/**
 * @summary Encodes a(n) SecurityMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityMode, encoded as an ASN.1 Element.
 */
export
function _encode_SecurityMode (value: SecurityMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SecurityMode) { _cached_encoder_for_SecurityMode = $._encodeEnumerated; }
    return _cached_encoder_for_SecurityMode(value, elGetter);
}


/* eslint-enable */
