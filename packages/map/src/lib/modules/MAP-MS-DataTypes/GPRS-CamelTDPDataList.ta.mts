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
import { GPRS_CamelTDPData, _decode_GPRS_CamelTDPData, _encode_GPRS_CamelTDPData } from "../MAP-MS-DataTypes/GPRS-CamelTDPData.ta.mjs";
// export { GPRS_CamelTDPData, _decode_GPRS_CamelTDPData, _encode_GPRS_CamelTDPData } from "../MAP-MS-DataTypes/GPRS-CamelTDPData.ta.mjs";


/**
 * @summary GPRS_CamelTDPDataList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GPRS-CamelTDPDataList  ::=  SEQUENCE SIZE (1..maxNumOfCamelTDPData) OF
 *     GPRS-CamelTDPData
 * ```
 */
export
type GPRS_CamelTDPDataList = GPRS_CamelTDPData[]; // SequenceOfType

let _cached_decoder_for_GPRS_CamelTDPDataList: $.ASN1Decoder<GPRS_CamelTDPDataList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GPRS_CamelTDPDataList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GPRS_CamelTDPDataList (el: _Element): GPRS_CamelTDPDataList {
    if (!_cached_decoder_for_GPRS_CamelTDPDataList) { _cached_decoder_for_GPRS_CamelTDPDataList = $._decodeSequenceOf<GPRS_CamelTDPData>(() => _decode_GPRS_CamelTDPData); }
    return _cached_decoder_for_GPRS_CamelTDPDataList(el);
}

let _cached_encoder_for_GPRS_CamelTDPDataList: $.ASN1Encoder<GPRS_CamelTDPDataList> | null = null;

/**
 * @summary Encodes a(n) GPRS_CamelTDPDataList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GPRS_CamelTDPDataList, encoded as an ASN.1 Element.
 */
export
function _encode_GPRS_CamelTDPDataList (value: GPRS_CamelTDPDataList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GPRS_CamelTDPDataList) { _cached_encoder_for_GPRS_CamelTDPDataList = $._encodeSequenceOf<GPRS_CamelTDPData>(() => _encode_GPRS_CamelTDPData, $.BER); }
    return _cached_encoder_for_GPRS_CamelTDPDataList(value, elGetter);
}


/* eslint-enable */
