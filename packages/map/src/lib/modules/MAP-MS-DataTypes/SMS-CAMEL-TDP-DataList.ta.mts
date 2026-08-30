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
import { SMS_CAMEL_TDP_Data, _decode_SMS_CAMEL_TDP_Data, _encode_SMS_CAMEL_TDP_Data } from "../MAP-MS-DataTypes/SMS-CAMEL-TDP-Data.ta.mjs";
// export { SMS_CAMEL_TDP_Data, _decode_SMS_CAMEL_TDP_Data, _encode_SMS_CAMEL_TDP_Data } from "../MAP-MS-DataTypes/SMS-CAMEL-TDP-Data.ta.mjs";


/**
 * @summary SMS_CAMEL_TDP_DataList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMS-CAMEL-TDP-DataList  ::=  SEQUENCE SIZE (1..maxNumOfCamelTDPData) OF
 *     SMS-CAMEL-TDP-Data
 * ```
 */
export
type SMS_CAMEL_TDP_DataList = SMS_CAMEL_TDP_Data[]; // SequenceOfType

let _cached_decoder_for_SMS_CAMEL_TDP_DataList: $.ASN1Decoder<SMS_CAMEL_TDP_DataList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMS_CAMEL_TDP_DataList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMS_CAMEL_TDP_DataList (el: _Element): SMS_CAMEL_TDP_DataList {
    if (!_cached_decoder_for_SMS_CAMEL_TDP_DataList) { _cached_decoder_for_SMS_CAMEL_TDP_DataList = $._decodeSequenceOf<SMS_CAMEL_TDP_Data>(() => _decode_SMS_CAMEL_TDP_Data); }
    return _cached_decoder_for_SMS_CAMEL_TDP_DataList(el);
}

let _cached_encoder_for_SMS_CAMEL_TDP_DataList: $.ASN1Encoder<SMS_CAMEL_TDP_DataList> | null = null;

/**
 * @summary Encodes a(n) SMS_CAMEL_TDP_DataList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMS_CAMEL_TDP_DataList, encoded as an ASN.1 Element.
 */
export
function _encode_SMS_CAMEL_TDP_DataList (value: SMS_CAMEL_TDP_DataList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMS_CAMEL_TDP_DataList) { _cached_encoder_for_SMS_CAMEL_TDP_DataList = $._encodeSequenceOf<SMS_CAMEL_TDP_Data>(() => _encode_SMS_CAMEL_TDP_Data, $.BER); }
    return _cached_encoder_for_SMS_CAMEL_TDP_DataList(value, elGetter);
}


/* eslint-enable */
