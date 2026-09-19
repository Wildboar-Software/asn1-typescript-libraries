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
 * @summary AMFEventType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFEventType  ::=  ENUMERATED
 * {
 *     locationReport(1),
 *     presenceInAOIReport(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AMFEventType {
    locationReport = 1,
    presenceInAOIReport = 2,
}

/**
 * @summary AMFEventType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFEventType  ::=  ENUMERATED
 * {
 *     locationReport(1),
 *     presenceInAOIReport(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AMFEventType = _enum_for_AMFEventType;

/**
 * @summary AMFEventType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFEventType  ::=  ENUMERATED
 * {
 *     locationReport(1),
 *     presenceInAOIReport(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AMFEventType = _enum_for_AMFEventType;

/**
 * @summary AMFEventType_locationReport
 * @constant
 * @type {number}
 */
export
const AMFEventType_locationReport: AMFEventType = AMFEventType.locationReport; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locationReport
 * @constant
 * @type {number}
 */
export
const locationReport: AMFEventType = AMFEventType.locationReport; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFEventType_presenceInAOIReport
 * @constant
 * @type {number}
 */
export
const AMFEventType_presenceInAOIReport: AMFEventType = AMFEventType.presenceInAOIReport; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary presenceInAOIReport
 * @constant
 * @type {number}
 */
export
const presenceInAOIReport: AMFEventType = AMFEventType.presenceInAOIReport; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AMFEventType: $.ASN1Decoder<AMFEventType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMFEventType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMFEventType (el: _Element): AMFEventType {
    if (!_cached_decoder_for_AMFEventType) { _cached_decoder_for_AMFEventType = $._decodeEnumerated; }
    return _cached_decoder_for_AMFEventType(el);
}

let _cached_encoder_for_AMFEventType: $.ASN1Encoder<AMFEventType> | null = null;

/**
 * @summary Encodes a(n) AMFEventType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMFEventType, encoded as an ASN.1 Element.
 */
export
function _encode_AMFEventType (value: AMFEventType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMFEventType) { _cached_encoder_for_AMFEventType = $._encodeEnumerated; }
    return _cached_encoder_for_AMFEventType(value, elGetter);
}


/* eslint-enable */
