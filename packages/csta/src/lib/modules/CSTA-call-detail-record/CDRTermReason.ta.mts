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
 * @summary CDRTermReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CDRTermReason  ::=  ENUMERATED
 * {     endOfDataDetected             (0),
 *     errorDetected                 (1),
 *     thresholdReached             (2),
 *     other                     (3) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CDRTermReason {
    endOfDataDetected = 0,
    errorDetected = 1,
    thresholdReached = 2,
    other = 3,
}

/**
 * @summary CDRTermReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CDRTermReason  ::=  ENUMERATED
 * {     endOfDataDetected             (0),
 *     errorDetected                 (1),
 *     thresholdReached             (2),
 *     other                     (3) }
 * ```
 * 
 * @enum {number}
 */
export
type CDRTermReason = _enum_for_CDRTermReason;

/**
 * @summary CDRTermReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CDRTermReason  ::=  ENUMERATED
 * {     endOfDataDetected             (0),
 *     errorDetected                 (1),
 *     thresholdReached             (2),
 *     other                     (3) }
 * ```
 * 
 * @enum {number}
 */
export
const CDRTermReason = _enum_for_CDRTermReason;

/**
 * @summary CDRTermReason_endOfDataDetected
 * @constant
 * @type {number}
 */
export
const CDRTermReason_endOfDataDetected: CDRTermReason = CDRTermReason.endOfDataDetected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary endOfDataDetected
 * @constant
 * @type {number}
 */
export
const endOfDataDetected: CDRTermReason = CDRTermReason.endOfDataDetected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CDRTermReason_errorDetected
 * @constant
 * @type {number}
 */
export
const CDRTermReason_errorDetected: CDRTermReason = CDRTermReason.errorDetected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorDetected
 * @constant
 * @type {number}
 */
export
const errorDetected: CDRTermReason = CDRTermReason.errorDetected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CDRTermReason_thresholdReached
 * @constant
 * @type {number}
 */
export
const CDRTermReason_thresholdReached: CDRTermReason = CDRTermReason.thresholdReached; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary thresholdReached
 * @constant
 * @type {number}
 */
export
const thresholdReached: CDRTermReason = CDRTermReason.thresholdReached; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CDRTermReason_other
 * @constant
 * @type {number}
 */
export
const CDRTermReason_other: CDRTermReason = CDRTermReason.other; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export
const other: CDRTermReason = CDRTermReason.other; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_CDRTermReason: $.ASN1Decoder<CDRTermReason> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CDRTermReason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CDRTermReason (el: _Element): CDRTermReason {
    if (!_cached_decoder_for_CDRTermReason) { _cached_decoder_for_CDRTermReason = $._decodeEnumerated; }
    return _cached_decoder_for_CDRTermReason(el);
}

let _cached_encoder_for_CDRTermReason: $.ASN1Encoder<CDRTermReason> | null = null;

/**
 * @summary Encodes a(n) CDRTermReason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CDRTermReason, encoded as an ASN.1 Element.
 */
export
function _encode_CDRTermReason (value: CDRTermReason, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CDRTermReason) { _cached_encoder_for_CDRTermReason = $._encodeEnumerated; }
    return _cached_encoder_for_CDRTermReason(value, elGetter);
}


/* eslint-enable */
