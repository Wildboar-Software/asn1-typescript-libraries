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
import { ZoneCode, _decode_ZoneCode, _encode_ZoneCode } from "../MAP-MS-DataTypes/ZoneCode.ta.mjs";


/**
 * @summary ZoneCodeList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ZoneCodeList  ::=  SEQUENCE SIZE (1..maxNumOfZoneCodes)
 *     OF ZoneCode
 * ```
 */
export
type ZoneCodeList = ZoneCode[]; // SequenceOfType

let _cached_decoder_for_ZoneCodeList: $.ASN1Decoder<ZoneCodeList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ZoneCodeList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ZoneCodeList (el: _Element): ZoneCodeList {
    if (!_cached_decoder_for_ZoneCodeList) { _cached_decoder_for_ZoneCodeList = $._decodeSequenceOf<ZoneCode>(() => _decode_ZoneCode); }
    return _cached_decoder_for_ZoneCodeList(el);
}

let _cached_encoder_for_ZoneCodeList: $.ASN1Encoder<ZoneCodeList> | null = null;

/**
 * @summary Encodes a(n) ZoneCodeList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ZoneCodeList, encoded as an ASN.1 Element.
 */
export
function _encode_ZoneCodeList (value: ZoneCodeList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ZoneCodeList) { _cached_encoder_for_ZoneCodeList = $._encodeSequenceOf<ZoneCode>(() => _encode_ZoneCode, $.BER); }
    return _cached_encoder_for_ZoneCodeList(value, elGetter);
}


/* eslint-enable */
