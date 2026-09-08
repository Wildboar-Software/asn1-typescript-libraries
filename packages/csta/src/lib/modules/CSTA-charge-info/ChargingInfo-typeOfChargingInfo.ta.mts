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
 * @summary ChargingInfo_typeOfChargingInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingInfo-typeOfChargingInfo ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ChargingInfo_typeOfChargingInfo {
    subTotal = 0,
    total = 1,
}

/**
 * @summary ChargingInfo_typeOfChargingInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingInfo-typeOfChargingInfo ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type ChargingInfo_typeOfChargingInfo = _enum_for_ChargingInfo_typeOfChargingInfo;

/**
 * @summary ChargingInfo_typeOfChargingInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingInfo-typeOfChargingInfo ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const ChargingInfo_typeOfChargingInfo = _enum_for_ChargingInfo_typeOfChargingInfo;

/**
 * @summary ChargingInfo_typeOfChargingInfo_subTotal
 * @constant
 * @type {number}
 */
export
const ChargingInfo_typeOfChargingInfo_subTotal: ChargingInfo_typeOfChargingInfo = ChargingInfo_typeOfChargingInfo.subTotal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subTotal
 * @constant
 * @type {number}
 */
export
const subTotal: ChargingInfo_typeOfChargingInfo = ChargingInfo_typeOfChargingInfo.subTotal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChargingInfo_typeOfChargingInfo_total
 * @constant
 * @type {number}
 */
export
const ChargingInfo_typeOfChargingInfo_total: ChargingInfo_typeOfChargingInfo = ChargingInfo_typeOfChargingInfo.total; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary total
 * @constant
 * @type {number}
 */
export
const total: ChargingInfo_typeOfChargingInfo = ChargingInfo_typeOfChargingInfo.total; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ChargingInfo_typeOfChargingInfo: $.ASN1Decoder<ChargingInfo_typeOfChargingInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChargingInfo_typeOfChargingInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChargingInfo_typeOfChargingInfo (el: _Element): ChargingInfo_typeOfChargingInfo {
    if (!_cached_decoder_for_ChargingInfo_typeOfChargingInfo) { _cached_decoder_for_ChargingInfo_typeOfChargingInfo = $._decodeEnumerated; }
    return _cached_decoder_for_ChargingInfo_typeOfChargingInfo(el);
}

let _cached_encoder_for_ChargingInfo_typeOfChargingInfo: $.ASN1Encoder<ChargingInfo_typeOfChargingInfo> | null = null;

/**
 * @summary Encodes a(n) ChargingInfo_typeOfChargingInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChargingInfo_typeOfChargingInfo, encoded as an ASN.1 Element.
 */
export
function _encode_ChargingInfo_typeOfChargingInfo (value: ChargingInfo_typeOfChargingInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChargingInfo_typeOfChargingInfo) { _cached_encoder_for_ChargingInfo_typeOfChargingInfo = $._encodeEnumerated; }
    return _cached_encoder_for_ChargingInfo_typeOfChargingInfo(value, elGetter);
}


/* eslint-enable */
