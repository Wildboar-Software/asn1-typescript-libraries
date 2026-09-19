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
 * @summary RCSSessionResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionResult  ::=  ENUMERATED
 * {
 *     newLegRequested(1),
 *     newLegEstablished(2),
 *     legModificationRequested(3),
 *     legModificationComplete(4),
 *     legRemovalRequest(5),
 *     legRemovalComplete(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RCSSessionResult {
    newLegRequested = 1,
    newLegEstablished = 2,
    legModificationRequested = 3,
    legModificationComplete = 4,
    legRemovalRequest = 5,
    legRemovalComplete = 6,
}

/**
 * @summary RCSSessionResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionResult  ::=  ENUMERATED
 * {
 *     newLegRequested(1),
 *     newLegEstablished(2),
 *     legModificationRequested(3),
 *     legModificationComplete(4),
 *     legRemovalRequest(5),
 *     legRemovalComplete(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RCSSessionResult = _enum_for_RCSSessionResult;

/**
 * @summary RCSSessionResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionResult  ::=  ENUMERATED
 * {
 *     newLegRequested(1),
 *     newLegEstablished(2),
 *     legModificationRequested(3),
 *     legModificationComplete(4),
 *     legRemovalRequest(5),
 *     legRemovalComplete(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RCSSessionResult = _enum_for_RCSSessionResult;

/**
 * @summary RCSSessionResult_newLegRequested
 * @constant
 * @type {number}
 */
export
const RCSSessionResult_newLegRequested: RCSSessionResult = RCSSessionResult.newLegRequested; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary newLegRequested
 * @constant
 * @type {number}
 */
export
const newLegRequested: RCSSessionResult = RCSSessionResult.newLegRequested; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSSessionResult_newLegEstablished
 * @constant
 * @type {number}
 */
export
const RCSSessionResult_newLegEstablished: RCSSessionResult = RCSSessionResult.newLegEstablished; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary newLegEstablished
 * @constant
 * @type {number}
 */
export
const newLegEstablished: RCSSessionResult = RCSSessionResult.newLegEstablished; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSSessionResult_legModificationRequested
 * @constant
 * @type {number}
 */
export
const RCSSessionResult_legModificationRequested: RCSSessionResult = RCSSessionResult.legModificationRequested; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary legModificationRequested
 * @constant
 * @type {number}
 */
export
const legModificationRequested: RCSSessionResult = RCSSessionResult.legModificationRequested; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSSessionResult_legModificationComplete
 * @constant
 * @type {number}
 */
export
const RCSSessionResult_legModificationComplete: RCSSessionResult = RCSSessionResult.legModificationComplete; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary legModificationComplete
 * @constant
 * @type {number}
 */
export
const legModificationComplete: RCSSessionResult = RCSSessionResult.legModificationComplete; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSSessionResult_legRemovalRequest
 * @constant
 * @type {number}
 */
export
const RCSSessionResult_legRemovalRequest: RCSSessionResult = RCSSessionResult.legRemovalRequest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary legRemovalRequest
 * @constant
 * @type {number}
 */
export
const legRemovalRequest: RCSSessionResult = RCSSessionResult.legRemovalRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSSessionResult_legRemovalComplete
 * @constant
 * @type {number}
 */
export
const RCSSessionResult_legRemovalComplete: RCSSessionResult = RCSSessionResult.legRemovalComplete; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary legRemovalComplete
 * @constant
 * @type {number}
 */
export
const legRemovalComplete: RCSSessionResult = RCSSessionResult.legRemovalComplete; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_RCSSessionResult: $.ASN1Decoder<RCSSessionResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RCSSessionResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RCSSessionResult (el: _Element): RCSSessionResult {
    if (!_cached_decoder_for_RCSSessionResult) { _cached_decoder_for_RCSSessionResult = $._decodeEnumerated; }
    return _cached_decoder_for_RCSSessionResult(el);
}

let _cached_encoder_for_RCSSessionResult: $.ASN1Encoder<RCSSessionResult> | null = null;

/**
 * @summary Encodes a(n) RCSSessionResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RCSSessionResult, encoded as an ASN.1 Element.
 */
export
function _encode_RCSSessionResult (value: RCSSessionResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RCSSessionResult) { _cached_encoder_for_RCSSessionResult = $._encodeEnumerated; }
    return _cached_encoder_for_RCSSessionResult(value, elGetter);
}


/* eslint-enable */
