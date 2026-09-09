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
 * @summary ResourceStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResourceStatus  ::=  ENUMERATED {busy(0), idle(1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ResourceStatus {
    busy = 0,
    idle = 1,
}

/**
 * @summary ResourceStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResourceStatus  ::=  ENUMERATED {busy(0), idle(1)}
 * ```
 * 
 * @enum {number}
 */
export
type ResourceStatus = _enum_for_ResourceStatus;

/**
 * @summary ResourceStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResourceStatus  ::=  ENUMERATED {busy(0), idle(1)}
 * ```
 * 
 * @enum {number}
 */
export
const ResourceStatus = _enum_for_ResourceStatus;

/**
 * @summary ResourceStatus_busy
 * @constant
 * @type {number}
 */
export
const ResourceStatus_busy: ResourceStatus = ResourceStatus.busy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary busy
 * @constant
 * @type {number}
 */
export
const busy: ResourceStatus = ResourceStatus.busy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ResourceStatus_idle
 * @constant
 * @type {number}
 */
export
const ResourceStatus_idle: ResourceStatus = ResourceStatus.idle; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary idle
 * @constant
 * @type {number}
 */
export
const idle: ResourceStatus = ResourceStatus.idle; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ResourceStatus: $.ASN1Decoder<ResourceStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResourceStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResourceStatus (el: _Element): ResourceStatus {
    if (!_cached_decoder_for_ResourceStatus) { _cached_decoder_for_ResourceStatus = $._decodeEnumerated; }
    return _cached_decoder_for_ResourceStatus(el);
}

let _cached_encoder_for_ResourceStatus: $.ASN1Encoder<ResourceStatus> | null = null;

/**
 * @summary Encodes a(n) ResourceStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResourceStatus, encoded as an ASN.1 Element.
 */
export
function _encode_ResourceStatus (value: ResourceStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResourceStatus) { _cached_encoder_for_ResourceStatus = $._encodeEnumerated; }
    return _cached_encoder_for_ResourceStatus(value, elGetter);
}


/* eslint-enable */
