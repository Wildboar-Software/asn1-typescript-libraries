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
 * @summary RequestedInformationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedInformationType  ::=  ENUMERATED {
 *   callAttemptElapsedTime(0), callStopTime(1), callConnectedElapsedTime(2),
 *   calledAddress(3), releaseCause(30)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RequestedInformationType {
    callAttemptElapsedTime = 0,
    callStopTime = 1,
    callConnectedElapsedTime = 2,
    calledAddress = 3,
    releaseCause = 30,
}

/**
 * @summary RequestedInformationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedInformationType  ::=  ENUMERATED {
 *   callAttemptElapsedTime(0), callStopTime(1), callConnectedElapsedTime(2),
 *   calledAddress(3), releaseCause(30)}
 * ```
 * 
 * @enum {number}
 */
export
type RequestedInformationType = _enum_for_RequestedInformationType;

/**
 * @summary RequestedInformationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedInformationType  ::=  ENUMERATED {
 *   callAttemptElapsedTime(0), callStopTime(1), callConnectedElapsedTime(2),
 *   calledAddress(3), releaseCause(30)}
 * ```
 * 
 * @enum {number}
 */
export
const RequestedInformationType = _enum_for_RequestedInformationType;

/**
 * @summary RequestedInformationType_callAttemptElapsedTime
 * @constant
 * @type {number}
 */
export
const RequestedInformationType_callAttemptElapsedTime: RequestedInformationType = RequestedInformationType.callAttemptElapsedTime; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callAttemptElapsedTime
 * @constant
 * @type {number}
 */
export
const callAttemptElapsedTime: RequestedInformationType = RequestedInformationType.callAttemptElapsedTime; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestedInformationType_callStopTime
 * @constant
 * @type {number}
 */
export
const RequestedInformationType_callStopTime: RequestedInformationType = RequestedInformationType.callStopTime; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callStopTime
 * @constant
 * @type {number}
 */
export
const callStopTime: RequestedInformationType = RequestedInformationType.callStopTime; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestedInformationType_callConnectedElapsedTime
 * @constant
 * @type {number}
 */
export
const RequestedInformationType_callConnectedElapsedTime: RequestedInformationType = RequestedInformationType.callConnectedElapsedTime; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callConnectedElapsedTime
 * @constant
 * @type {number}
 */
export
const callConnectedElapsedTime: RequestedInformationType = RequestedInformationType.callConnectedElapsedTime; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestedInformationType_calledAddress
 * @constant
 * @type {number}
 */
export
const RequestedInformationType_calledAddress: RequestedInformationType = RequestedInformationType.calledAddress; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary calledAddress
 * @constant
 * @type {number}
 */
export
const calledAddress: RequestedInformationType = RequestedInformationType.calledAddress; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestedInformationType_releaseCause
 * @constant
 * @type {number}
 */
export
const RequestedInformationType_releaseCause: RequestedInformationType = RequestedInformationType.releaseCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary releaseCause
 * @constant
 * @type {number}
 */
export
const releaseCause: RequestedInformationType = RequestedInformationType.releaseCause; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_RequestedInformationType: $.ASN1Decoder<RequestedInformationType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestedInformationType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestedInformationType (el: _Element): RequestedInformationType {
    if (!_cached_decoder_for_RequestedInformationType) { _cached_decoder_for_RequestedInformationType = $._decodeEnumerated; }
    return _cached_decoder_for_RequestedInformationType(el);
}

let _cached_encoder_for_RequestedInformationType: $.ASN1Encoder<RequestedInformationType> | null = null;

/**
 * @summary Encodes a(n) RequestedInformationType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestedInformationType, encoded as an ASN.1 Element.
 */
export
function _encode_RequestedInformationType (value: RequestedInformationType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestedInformationType) { _cached_encoder_for_RequestedInformationType = $._encodeEnumerated; }
    return _cached_encoder_for_RequestedInformationType(value, elGetter);
}


/* eslint-enable */
