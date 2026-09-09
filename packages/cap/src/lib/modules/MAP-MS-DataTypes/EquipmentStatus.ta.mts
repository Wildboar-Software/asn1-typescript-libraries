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
 * @summary EquipmentStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EquipmentStatus  ::=  ENUMERATED {
 *     permittedListed  (0),
 *     prohibitedListed  (1),
 *     trackingListed  (2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EquipmentStatus {
    permittedListed = 0,
    prohibitedListed = 1,
    trackingListed = 2,
}

/**
 * @summary EquipmentStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EquipmentStatus  ::=  ENUMERATED {
 *     permittedListed  (0),
 *     prohibitedListed  (1),
 *     trackingListed  (2)}
 * ```
 * 
 * @enum {number}
 */
export
type EquipmentStatus = _enum_for_EquipmentStatus;

/**
 * @summary EquipmentStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EquipmentStatus  ::=  ENUMERATED {
 *     permittedListed  (0),
 *     prohibitedListed  (1),
 *     trackingListed  (2)}
 * ```
 * 
 * @enum {number}
 */
export
const EquipmentStatus = _enum_for_EquipmentStatus;

/**
 * @summary EquipmentStatus_permittedListed
 * @constant
 * @type {number}
 */
export
const EquipmentStatus_permittedListed: EquipmentStatus = EquipmentStatus.permittedListed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary permittedListed
 * @constant
 * @type {number}
 */
export
const permittedListed: EquipmentStatus = EquipmentStatus.permittedListed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EquipmentStatus_prohibitedListed
 * @constant
 * @type {number}
 */
export
const EquipmentStatus_prohibitedListed: EquipmentStatus = EquipmentStatus.prohibitedListed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary prohibitedListed
 * @constant
 * @type {number}
 */
export
const prohibitedListed: EquipmentStatus = EquipmentStatus.prohibitedListed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EquipmentStatus_trackingListed
 * @constant
 * @type {number}
 */
export
const EquipmentStatus_trackingListed: EquipmentStatus = EquipmentStatus.trackingListed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary trackingListed
 * @constant
 * @type {number}
 */
export
const trackingListed: EquipmentStatus = EquipmentStatus.trackingListed; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_EquipmentStatus: $.ASN1Decoder<EquipmentStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EquipmentStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EquipmentStatus (el: _Element): EquipmentStatus {
    if (!_cached_decoder_for_EquipmentStatus) { _cached_decoder_for_EquipmentStatus = $._decodeEnumerated; }
    return _cached_decoder_for_EquipmentStatus(el);
}

let _cached_encoder_for_EquipmentStatus: $.ASN1Encoder<EquipmentStatus> | null = null;

/**
 * @summary Encodes a(n) EquipmentStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EquipmentStatus, encoded as an ASN.1 Element.
 */
export
function _encode_EquipmentStatus (value: EquipmentStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EquipmentStatus) { _cached_encoder_for_EquipmentStatus = $._encodeEnumerated; }
    return _cached_encoder_for_EquipmentStatus(value, elGetter);
}


/* eslint-enable */
