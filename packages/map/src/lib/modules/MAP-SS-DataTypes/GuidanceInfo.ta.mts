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
 * @summary GuidanceInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GuidanceInfo  ::=  ENUMERATED {
 *     enterPW  (0),
 *     enterNewPW  (1),
 *     enterNewPW-Again  (2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_GuidanceInfo {
    enterPW = 0,
    enterNewPW = 1,
    enterNewPW_Again = 2,
}

/**
 * @summary GuidanceInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GuidanceInfo  ::=  ENUMERATED {
 *     enterPW  (0),
 *     enterNewPW  (1),
 *     enterNewPW-Again  (2)}
 * ```
 * 
 * @enum {number}
 */
export
type GuidanceInfo = _enum_for_GuidanceInfo;

/**
 * @summary GuidanceInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GuidanceInfo  ::=  ENUMERATED {
 *     enterPW  (0),
 *     enterNewPW  (1),
 *     enterNewPW-Again  (2)}
 * ```
 * 
 * @enum {number}
 */
export
const GuidanceInfo = _enum_for_GuidanceInfo;

/**
 * @summary GuidanceInfo_enterPW
 * @constant
 * @type {number}
 */
export
const GuidanceInfo_enterPW: GuidanceInfo = GuidanceInfo.enterPW; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary enterPW
 * @constant
 * @type {number}
 */
export
const enterPW: GuidanceInfo = GuidanceInfo.enterPW; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GuidanceInfo_enterNewPW
 * @constant
 * @type {number}
 */
export
const GuidanceInfo_enterNewPW: GuidanceInfo = GuidanceInfo.enterNewPW; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary enterNewPW
 * @constant
 * @type {number}
 */
export
const enterNewPW: GuidanceInfo = GuidanceInfo.enterNewPW; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GuidanceInfo_enterNewPW_Again
 * @constant
 * @type {number}
 */
export
const GuidanceInfo_enterNewPW_Again: GuidanceInfo = GuidanceInfo.enterNewPW_Again; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary enterNewPW_Again
 * @constant
 * @type {number}
 */
export
const enterNewPW_Again: GuidanceInfo = GuidanceInfo.enterNewPW_Again; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_GuidanceInfo: $.ASN1Decoder<GuidanceInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GuidanceInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GuidanceInfo (el: _Element): GuidanceInfo {
    if (!_cached_decoder_for_GuidanceInfo) { _cached_decoder_for_GuidanceInfo = $._decodeEnumerated; }
    return _cached_decoder_for_GuidanceInfo(el);
}

let _cached_encoder_for_GuidanceInfo: $.ASN1Encoder<GuidanceInfo> | null = null;

/**
 * @summary Encodes a(n) GuidanceInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GuidanceInfo, encoded as an ASN.1 Element.
 */
export
function _encode_GuidanceInfo (value: GuidanceInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GuidanceInfo) { _cached_encoder_for_GuidanceInfo = $._encodeEnumerated; }
    return _cached_encoder_for_GuidanceInfo(value, elGetter);
}


/* eslint-enable */
