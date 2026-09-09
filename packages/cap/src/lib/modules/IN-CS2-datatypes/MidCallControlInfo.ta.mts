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
import { MidCallControlInfo_Item, _decode_MidCallControlInfo_Item, _encode_MidCallControlInfo_Item } from "../IN-CS2-datatypes/MidCallControlInfo-Item.ta.mjs";
// export { MidCallControlInfo_Item, _decode_MidCallControlInfo_Item, _encode_MidCallControlInfo_Item } from "../IN-CS2-datatypes/MidCallControlInfo-Item.ta.mjs";


/**
 * @summary MidCallControlInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MidCallControlInfo{PARAMETERS-BOUND:bound}  ::= 
 *   SEQUENCE
 *     SIZE (bound.&minMidCallControlInfoNum..
 *             bound.&maxMidCallControlInfoNum) OF
 *     SEQUENCE {midCallInfoType    [0]  MidCallInfoType{bound},
 *               midCallReportType
 *                 [1]  ENUMERATED {inMonitoringState(0), inAnyState(1)}
 *                   DEFAULT inMonitoringState}
 * ```
 */
export
type MidCallControlInfo = MidCallControlInfo_Item[]; // SequenceOfType

let _cached_decoder_for_MidCallControlInfo: $.ASN1Decoder<MidCallControlInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MidCallControlInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MidCallControlInfo (el: _Element): MidCallControlInfo {
    if (!_cached_decoder_for_MidCallControlInfo) { _cached_decoder_for_MidCallControlInfo = $._decodeSequenceOf<MidCallControlInfo_Item>(() => _decode_MidCallControlInfo_Item); }
    return _cached_decoder_for_MidCallControlInfo(el);
}

let _cached_encoder_for_MidCallControlInfo: $.ASN1Encoder<MidCallControlInfo> | null = null;

/**
 * @summary Encodes a(n) MidCallControlInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MidCallControlInfo, encoded as an ASN.1 Element.
 */
export
function _encode_MidCallControlInfo (value: MidCallControlInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MidCallControlInfo) { _cached_encoder_for_MidCallControlInfo = $._encodeSequenceOf<MidCallControlInfo_Item>(() => _encode_MidCallControlInfo_Item, $.BER); }
    return _cached_encoder_for_MidCallControlInfo(value, elGetter);
}


/* eslint-enable */
