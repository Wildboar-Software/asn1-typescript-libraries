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
 * @summary MMSCancelStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSCancelStatus  ::=  ENUMERATED
 * {
 *     cancelRequestSuccessfullyReceived(1),
 *     cancelRequestCorrupted(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMSCancelStatus {
    cancelRequestSuccessfullyReceived = 1,
    cancelRequestCorrupted = 2,
}

/**
 * @summary MMSCancelStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSCancelStatus  ::=  ENUMERATED
 * {
 *     cancelRequestSuccessfullyReceived(1),
 *     cancelRequestCorrupted(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMSCancelStatus = _enum_for_MMSCancelStatus;

/**
 * @summary MMSCancelStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSCancelStatus  ::=  ENUMERATED
 * {
 *     cancelRequestSuccessfullyReceived(1),
 *     cancelRequestCorrupted(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMSCancelStatus = _enum_for_MMSCancelStatus;

/**
 * @summary MMSCancelStatus_cancelRequestSuccessfullyReceived
 * @constant
 * @type {number}
 */
export
const MMSCancelStatus_cancelRequestSuccessfullyReceived: MMSCancelStatus = MMSCancelStatus.cancelRequestSuccessfullyReceived; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelRequestSuccessfullyReceived
 * @constant
 * @type {number}
 */
export
const cancelRequestSuccessfullyReceived: MMSCancelStatus = MMSCancelStatus.cancelRequestSuccessfullyReceived; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSCancelStatus_cancelRequestCorrupted
 * @constant
 * @type {number}
 */
export
const MMSCancelStatus_cancelRequestCorrupted: MMSCancelStatus = MMSCancelStatus.cancelRequestCorrupted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelRequestCorrupted
 * @constant
 * @type {number}
 */
export
const cancelRequestCorrupted: MMSCancelStatus = MMSCancelStatus.cancelRequestCorrupted; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MMSCancelStatus: $.ASN1Decoder<MMSCancelStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSCancelStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSCancelStatus (el: _Element): MMSCancelStatus {
    if (!_cached_decoder_for_MMSCancelStatus) { _cached_decoder_for_MMSCancelStatus = $._decodeEnumerated; }
    return _cached_decoder_for_MMSCancelStatus(el);
}

let _cached_encoder_for_MMSCancelStatus: $.ASN1Encoder<MMSCancelStatus> | null = null;

/**
 * @summary Encodes a(n) MMSCancelStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSCancelStatus, encoded as an ASN.1 Element.
 */
export
function _encode_MMSCancelStatus (value: MMSCancelStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSCancelStatus) { _cached_encoder_for_MMSCancelStatus = $._encodeEnumerated; }
    return _cached_encoder_for_MMSCancelStatus(value, elGetter);
}


/* eslint-enable */
