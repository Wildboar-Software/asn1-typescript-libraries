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
 * @summary RequestedEquipmentInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedEquipmentInfo ::=  BIT STRING {
 *     equipmentStatus  (0),
 *     bmuef  (1)} (SIZE (2..8))
 * ```
 */
export
type RequestedEquipmentInfo = BIT_STRING;

/**
 * @summary RequestedEquipmentInfo_equipmentStatus
 * @constant
 */
export
const RequestedEquipmentInfo_equipmentStatus: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary equipmentStatus
 * @constant
 */
export
const equipmentStatus: number = RequestedEquipmentInfo_equipmentStatus; /* SHORT_NAMED_BIT */

/**
 * @summary RequestedEquipmentInfo_bmuef
 * @constant
 */
export
const RequestedEquipmentInfo_bmuef: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary bmuef
 * @constant
 */
export
const bmuef: number = RequestedEquipmentInfo_bmuef; /* SHORT_NAMED_BIT */

let _cached_decoder_for_RequestedEquipmentInfo: $.ASN1Decoder<RequestedEquipmentInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestedEquipmentInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestedEquipmentInfo (el: _Element): RequestedEquipmentInfo {
    if (!_cached_decoder_for_RequestedEquipmentInfo) { _cached_decoder_for_RequestedEquipmentInfo = $._decodeBitString; }
    return _cached_decoder_for_RequestedEquipmentInfo(el);
}

let _cached_encoder_for_RequestedEquipmentInfo: $.ASN1Encoder<RequestedEquipmentInfo> | null = null;

/**
 * @summary Encodes a(n) RequestedEquipmentInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestedEquipmentInfo, encoded as an ASN.1 Element.
 */
export
function _encode_RequestedEquipmentInfo (value: RequestedEquipmentInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestedEquipmentInfo) { _cached_encoder_for_RequestedEquipmentInfo = $._encodeBitString; }
    return _cached_encoder_for_RequestedEquipmentInfo(value, elGetter);
}


/* eslint-enable */
