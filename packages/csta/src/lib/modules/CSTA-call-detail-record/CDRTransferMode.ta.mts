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
 * @summary CDRTransferMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CDRTransferMode  ::=  ENUMERATED
 * {     transferAtEndOfCall             (0),
 *     transferOnRequest             (1),
 *     transferOnThresholdReached         (2) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CDRTransferMode {
    transferAtEndOfCall = 0,
    transferOnRequest = 1,
    transferOnThresholdReached = 2,
}

/**
 * @summary CDRTransferMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CDRTransferMode  ::=  ENUMERATED
 * {     transferAtEndOfCall             (0),
 *     transferOnRequest             (1),
 *     transferOnThresholdReached         (2) }
 * ```
 * 
 * @enum {number}
 */
export
type CDRTransferMode = _enum_for_CDRTransferMode;

/**
 * @summary CDRTransferMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CDRTransferMode  ::=  ENUMERATED
 * {     transferAtEndOfCall             (0),
 *     transferOnRequest             (1),
 *     transferOnThresholdReached         (2) }
 * ```
 * 
 * @enum {number}
 */
export
const CDRTransferMode = _enum_for_CDRTransferMode;

/**
 * @summary CDRTransferMode_transferAtEndOfCall
 * @constant
 * @type {number}
 */
export
const CDRTransferMode_transferAtEndOfCall: CDRTransferMode = CDRTransferMode.transferAtEndOfCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary transferAtEndOfCall
 * @constant
 * @type {number}
 */
export
const transferAtEndOfCall: CDRTransferMode = CDRTransferMode.transferAtEndOfCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CDRTransferMode_transferOnRequest
 * @constant
 * @type {number}
 */
export
const CDRTransferMode_transferOnRequest: CDRTransferMode = CDRTransferMode.transferOnRequest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary transferOnRequest
 * @constant
 * @type {number}
 */
export
const transferOnRequest: CDRTransferMode = CDRTransferMode.transferOnRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CDRTransferMode_transferOnThresholdReached
 * @constant
 * @type {number}
 */
export
const CDRTransferMode_transferOnThresholdReached: CDRTransferMode = CDRTransferMode.transferOnThresholdReached; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary transferOnThresholdReached
 * @constant
 * @type {number}
 */
export
const transferOnThresholdReached: CDRTransferMode = CDRTransferMode.transferOnThresholdReached; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_CDRTransferMode: $.ASN1Decoder<CDRTransferMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CDRTransferMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CDRTransferMode (el: _Element): CDRTransferMode {
    if (!_cached_decoder_for_CDRTransferMode) { _cached_decoder_for_CDRTransferMode = $._decodeEnumerated; }
    return _cached_decoder_for_CDRTransferMode(el);
}

let _cached_encoder_for_CDRTransferMode: $.ASN1Encoder<CDRTransferMode> | null = null;

/**
 * @summary Encodes a(n) CDRTransferMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CDRTransferMode, encoded as an ASN.1 Element.
 */
export
function _encode_CDRTransferMode (value: CDRTransferMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CDRTransferMode) { _cached_encoder_for_CDRTransferMode = $._encodeEnumerated; }
    return _cached_encoder_for_CDRTransferMode(value, elGetter);
}


/* eslint-enable */
