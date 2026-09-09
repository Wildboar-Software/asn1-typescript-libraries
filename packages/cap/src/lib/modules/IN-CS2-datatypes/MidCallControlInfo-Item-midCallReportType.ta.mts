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
 * @summary MidCallControlInfo_Item_midCallReportType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MidCallControlInfo-Item-midCallReportType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MidCallControlInfo_Item_midCallReportType {
    inMonitoringState = 0,
    inAnyState = 1,
}

/**
 * @summary MidCallControlInfo_Item_midCallReportType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MidCallControlInfo-Item-midCallReportType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type MidCallControlInfo_Item_midCallReportType = _enum_for_MidCallControlInfo_Item_midCallReportType;

/**
 * @summary MidCallControlInfo_Item_midCallReportType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MidCallControlInfo-Item-midCallReportType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const MidCallControlInfo_Item_midCallReportType = _enum_for_MidCallControlInfo_Item_midCallReportType;

/**
 * @summary MidCallControlInfo_Item_midCallReportType_inMonitoringState
 * @constant
 * @type {number}
 */
export
const MidCallControlInfo_Item_midCallReportType_inMonitoringState: MidCallControlInfo_Item_midCallReportType = MidCallControlInfo_Item_midCallReportType.inMonitoringState; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inMonitoringState
 * @constant
 * @type {number}
 */
export
const inMonitoringState: MidCallControlInfo_Item_midCallReportType = MidCallControlInfo_Item_midCallReportType.inMonitoringState; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MidCallControlInfo_Item_midCallReportType_inAnyState
 * @constant
 * @type {number}
 */
export
const MidCallControlInfo_Item_midCallReportType_inAnyState: MidCallControlInfo_Item_midCallReportType = MidCallControlInfo_Item_midCallReportType.inAnyState; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inAnyState
 * @constant
 * @type {number}
 */
export
const inAnyState: MidCallControlInfo_Item_midCallReportType = MidCallControlInfo_Item_midCallReportType.inAnyState; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MidCallControlInfo_Item_midCallReportType: $.ASN1Decoder<MidCallControlInfo_Item_midCallReportType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MidCallControlInfo_Item_midCallReportType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MidCallControlInfo_Item_midCallReportType (el: _Element): MidCallControlInfo_Item_midCallReportType {
    if (!_cached_decoder_for_MidCallControlInfo_Item_midCallReportType) { _cached_decoder_for_MidCallControlInfo_Item_midCallReportType = $._decodeEnumerated; }
    return _cached_decoder_for_MidCallControlInfo_Item_midCallReportType(el);
}

let _cached_encoder_for_MidCallControlInfo_Item_midCallReportType: $.ASN1Encoder<MidCallControlInfo_Item_midCallReportType> | null = null;

/**
 * @summary Encodes a(n) MidCallControlInfo_Item_midCallReportType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MidCallControlInfo_Item_midCallReportType, encoded as an ASN.1 Element.
 */
export
function _encode_MidCallControlInfo_Item_midCallReportType (value: MidCallControlInfo_Item_midCallReportType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MidCallControlInfo_Item_midCallReportType) { _cached_encoder_for_MidCallControlInfo_Item_midCallReportType = $._encodeEnumerated; }
    return _cached_encoder_for_MidCallControlInfo_Item_midCallReportType(value, elGetter);
}


/* eslint-enable */
